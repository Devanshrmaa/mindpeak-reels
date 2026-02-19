import { useState, useRef, createContext, useContext, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Phone, Mail, BookOpen, Loader2, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

/* ───────── Context ───────── */

interface DemoModalContextType {
  openDemoModal: () => void;
}

const DemoModalContext = createContext<DemoModalContextType>({ openDemoModal: () => {} });

export const useDemoModal = () => useContext(DemoModalContext);

export const DemoModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DemoModalContext.Provider value={{ openDemoModal: () => setIsOpen(true) }}>
      {children}
      <DemoBookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </DemoModalContext.Provider>
  );
};

/* ───────── Form ───────── */

const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbynDEbMQqfStBwK-sJa5UoLuZtBDNvSPZ4HLvcpuZxTSe6lUy7nuIbxWbQ3QOPovG6N/exec';

const courseOptions = [
  'JEE Main + Advanced (2 Year)',
  'JEE Main + Advanced (1 Year)',
  'NEET UG (2 Year)',
  'NEET UG (1 Year)',
  'Subject Crash Course',
  '1-on-1 Crash Program',
  '6th Foundation',
  '7th Foundation',
  '8th Foundation',
  '9th Foundation',
  '10th Foundation',
  'JEE Test Series',
  'NEET Test Series',
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  course: string;
  message: string;
}

const DemoBookingModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [form, setForm] = useState<FormData>({ name: '', phone: '', email: '', course: '', message: '' });
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
    } catch (e) {
      // swallow errors to keep UI stable
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = (): string | null => {
    const trimmedName = form.name.trim();
    const trimmedPhone = form.phone.trim();
    const trimmedEmail = form.email.trim();

    if (!trimmedName || trimmedName.length > 100) return 'Please enter a valid name (max 100 chars)';
    if (!/^[6-9]\d{9}$/.test(trimmedPhone)) return 'Please enter a valid 10-digit Indian phone number';
    if (trimmedEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) return 'Please enter a valid email';
    if (!form.course) return 'Please select a course';
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
      const sheetUrl = GOOGLE_SHEET_URL;
      if (!sheetUrl) {
        // Fallback: just show success (owner hasn't set up Google Sheet yet)
        console.log('Demo booking data:', form);
        toast.info('Form submitted! (Google Sheet not configured yet — data logged to console)');
        setSubmitted(true);
        fireConversion();
        return;
      }

      await fetch(sheetUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          course: form.course,
          message: form.message.trim(),
          timestamp: new Date().toISOString(),
        }),
      });

      setSubmitted(true);
      fireConversion();
      toast.success('Demo booked successfully! We\'ll contact you soon.');
    } catch {
      toast.error('Something went wrong. Please try again or call us directly.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    // Reset after animation
    setTimeout(() => {
      setForm({ name: '', phone: '', email: '', course: '', message: '' });
      setSubmitted(false);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-lg rounded-2xl border border-border bg-card shadow-card overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative px-6 pt-6 pb-4 border-b border-border">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-muted hover:bg-secondary transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4 text-foreground" />
              </button>
              <h3 className="font-display font-bold text-foreground text-xl sm:text-2xl">
                Book Your <span className="text-gradient-gold">Free Demo</span>
              </h3>
              <p className="text-muted-foreground text-sm mt-1">
                Fill in your details and we'll schedule a free 1-on-1 demo class.
              </p>
            </div>

            {submitted ? (
              /* Success state */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 text-center"
              >
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h4 className="font-display font-bold text-foreground text-xl mb-2">Thank You!</h4>
                <p className="text-muted-foreground text-sm mb-6">
                  Your demo has been booked. Our team will reach out to you within 24 hours.
                </p>
                <button
                  onClick={handleClose}
                  className="px-8 py-3 bg-primary text-primary-foreground font-bold text-sm rounded-full hover:scale-105 transition-transform"
                >
                  Done
                </button>
              </motion.div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {/* Name */}
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Student Name *"
                    maxLength={100}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-muted border border-border rounded-lg text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number * (10 digits)"
                    maxLength={10}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-muted border border-border rounded-lg text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email (optional)"
                    maxLength={255}
                    type="email"
                    className="w-full pl-10 pr-4 py-3 bg-muted border border-border rounded-lg text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>

                {/* Course */}
                <div className="relative">
                  <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <select
                    name="course"
                    value={form.course}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-muted border border-border rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none"
                  >
                    <option value="" disabled>Select Course *</option>
                    {courseOptions.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Any message (optional)"
                  maxLength={500}
                  rows={2}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-gradient-to-r from-gold to-gold-dark text-background font-bold text-sm rounded-full hover:scale-[1.02] transition-transform shadow-gold-glow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Book Free Demo'
                  )}
                </button>

                <p className="text-muted-foreground text-xs text-center">
                  We'll never share your details. No spam, promise.
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
