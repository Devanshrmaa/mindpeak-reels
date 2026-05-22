import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Phone, Mail, Loader2, CheckCircle, Download, FileText } from 'lucide-react';
import { toast } from 'sonner';
import type { FormulaSheetData } from '@/data/formulaSheetData';

const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbynDEbMQqfStBwK-sJa5UoLuZtBDNvSPZ4HLvcpuZxTSe6lUy7nuIbxWbQ3QOPovG6N/exec';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  formulaData: FormulaSheetData;
}

export const FormulaDownloadModal = ({ isOpen, onClose, formulaData }: Props) => {
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = (): string | null => {
    const trimmedName = form.name.trim();
    const trimmedPhone = form.phone.trim();
    const trimmedEmail = form.email.trim();
    if (!trimmedName || trimmedName.length > 100) return 'Please enter a valid name';
    if (!/^[6-9]\d{9}$/.test(trimmedPhone)) return 'Please enter a valid 10-digit Indian phone number';
    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) return 'Please enter a valid email';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const error = validate();
    if (error) { toast.error(error); return; }

    setLoading(true);
    try {
      // Send lead to Google Sheets
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams({
          name: form.name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          course: `Formula Sheet: ${formulaData.exam} ${formulaData.subject}`,
          message: '',
          timestamp: new Date().toISOString(),
          source: 'Formula Sheet Download',
        }),
      });

      setSubmitted(true);

      // Dynamically import and generate PDF
      const { generateFormulaPdf } = await import('@/lib/generateFormulaPdf');
      await generateFormulaPdf(formulaData);

      toast.success('Your formula sheet PDF is downloading!');
    } catch {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => { setForm({ name: '', phone: '', email: '' }); setSubmitted(false); }, 300);
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
            className="relative w-full max-w-md rounded-2xl border border-border bg-card shadow-card overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative px-6 pt-6 pb-4 border-b border-border">
              <button onClick={handleClose} className="absolute top-4 right-4 p-2 rounded-full bg-muted hover:bg-secondary transition-colors" aria-label="Close">
                <X className="w-4 h-4 text-foreground" />
              </button>
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground text-lg">
                    Download <span className="text-gradient-gold">Formula Sheet</span>
                  </h3>
                  <p className="text-muted-foreground text-xs">
                    {formulaData.exam} {formulaData.subject} — {formulaData.totalFormulas}+ formulas
                  </p>
                </div>
              </div>
            </div>

            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="p-8 text-center">
                <CheckCircle className="w-14 h-14 text-primary mx-auto mb-4" />
                <h4 className="font-display font-bold text-foreground text-lg mb-2">Download Started!</h4>
                <p className="text-muted-foreground text-sm mb-2">
                  Your branded {formulaData.exam} {formulaData.subject} formula sheet PDF is downloading.
                </p>
                <p className="text-muted-foreground text-xs mb-6">Check your downloads folder.</p>
                <button onClick={handleClose} className="px-8 py-3 bg-primary text-primary-foreground font-bold text-sm rounded-full hover:scale-105 transition-transform">Done</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="rounded-lg bg-primary/5 border border-primary/10 p-3 flex items-center gap-3">
                  <Download className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-foreground text-xs font-semibold">What you'll get:</p>
                    <p className="text-muted-foreground text-xs">
                      {formulaData.totalFormulas}+ formulas • All {formulaData.chapters.length} chapters • Frequency tags • Pro tips • MindPeak branded PDF
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name *" maxLength={100} required className="w-full pl-10 pr-4 py-3 bg-muted border border-border rounded-lg text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" />
                </div>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number * (10 digits)" maxLength={10} required className="w-full pl-10 pr-4 py-3 bg-muted border border-border rounded-lg text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input name="email" value={form.email} onChange={handleChange} placeholder="Email *" maxLength={255} type="email" required className="w-full pl-10 pr-4 py-3 bg-muted border border-border rounded-lg text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" />
                </div>
                <button type="submit" disabled={loading} className="w-full py-3.5 bg-gradient-to-r from-gold to-gold-dark text-background font-bold text-sm rounded-full hover:scale-[1.02] transition-transform shadow-gold-glow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                  {loading ? (<><Loader2 className="w-4 h-4 animate-spin" />Generating PDF...</>) : (<><Download className="w-4 h-4" />Download Formula Sheet PDF</>)}
                </button>
                <p className="text-muted-foreground text-xs text-center">We'll never share your details. No spam, promise.</p>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
