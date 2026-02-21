import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Phone, Mail, Loader2, CheckCircle, Lock } from 'lucide-react';
import { toast } from 'sonner';

const GOOGLE_SHEET_URL =
  'https://script.google.com/macros/s/AKfycbynDEbMQqfStBwK-sJa5UoLuZtBDNvSPZ4HLvcpuZxTSe6lUy7nuIbxWbQ3QOPovG6N/exec';

interface ContinueTestModalProps {
  isOpen: boolean;
  testName: string;
  onSuccess: () => void;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
}

const ContinueTestModal = ({ isOpen, testName, onSuccess }: ContinueTestModalProps) => {
  const [form, setForm] = useState<FormData>({ name: '', phone: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const conversionFired = useRef(false);

  const fireConversion = () => {
    try {
      if (conversionFired.current) return;
      if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
        (window as any).gtag('event', 'conversion', {
          send_to: 'AW-17962731707/_Uc-CL7_g_sbELuRpvVC',
          value: 1.0,
          currency: 'INR',
        });
        conversionFired.current = true;
      }
    } catch {
      // swallow errors
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = (): string | null => {
    const trimmedName = form.name.trim();
    const trimmedPhone = form.phone.trim();
    const trimmedEmail = form.email.trim();

    if (!trimmedName || trimmedName.length > 100) return 'Please enter a valid name (max 100 chars)';
    if (!/^[6-9]\d{9}$/.test(trimmedPhone)) return 'Please enter a valid 10-digit Indian phone number';
    if (trimmedEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) return 'Please enter a valid email';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      toast.error(error);
      return;
    }

    setLoading(true);

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          testName,
          source: 'Continue Test Gate',
          timestamp: new Date().toISOString(),
        }),
      });

      setSubmitted(true);
      fireConversion();

      // Save unlock to localStorage
      try {
        localStorage.setItem('mp_gate_unlocked', '1');
        localStorage.setItem('mp_gate_name', form.name.trim());
        localStorage.setItem('mp_gate_phone', form.phone.trim());
      } catch {
        // localStorage may be unavailable
      }

      toast.success("You're all set! Continue your practice.");

      // Auto-dismiss after a short delay
      setTimeout(() => {
        onSuccess();
      }, 1200);
    } catch {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-background/90 backdrop-blur-lg flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-md rounded-2xl border border-border bg-card shadow-card overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative px-6 pt-6 pb-4 border-b border-border bg-gradient-to-r from-primary/5 to-transparent">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground text-xl sm:text-2xl">
                  Continue with <span className="text-gradient-gold">Your Test</span>
                </h3>
              </div>
              <p className="text-muted-foreground text-sm">
                You've completed 5 free questions! Fill in your details to unlock all questions.
              </p>
              <p className="text-xs text-muted-foreground mt-1 italic">
                Test: {testName}
              </p>
            </div>

            {/* Body */}
            <div className="px-6 py-5">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <CheckCircle className="w-14 h-14 text-green-400 mx-auto mb-3" />
                  <p className="font-display font-bold text-foreground text-lg">You're Unlocked!</p>
                  <p className="text-muted-foreground text-sm mt-1">Continue practising — all questions are now available.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="gate-name" className="block text-sm font-medium text-foreground mb-1.5">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        id="gate-name"
                        name="name"
                        type="text"
                        required
                        maxLength={100}
                        placeholder="Enter your full name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-border bg-muted/50 py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="gate-phone" className="block text-sm font-medium text-foreground mb-1.5">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        id="gate-phone"
                        name="phone"
                        type="tel"
                        required
                        maxLength={10}
                        placeholder="10-digit mobile number"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-border bg-muted/50 py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="gate-email" className="block text-sm font-medium text-foreground mb-1.5">
                      Email <span className="text-muted-foreground text-xs">(optional)</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        id="gate-email"
                        name="email"
                        type="email"
                        maxLength={100}
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-border bg-muted/50 py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Submitting…
                      </>
                    ) : (
                      'Unlock All Questions'
                    )}
                  </button>

                  <p className="text-xs text-muted-foreground text-center">
                    Your details are safe with us. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContinueTestModal;
