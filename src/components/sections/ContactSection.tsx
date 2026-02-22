import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Twitter, Download, MessageCircle } from 'lucide-react';
import { Link } from '@/components/RouterLink';
import { useDemoModal } from '@/components/DemoBookingModal';
import { NCERTDownloadModal } from '@/components/NCERTDownloadModal';
const logo = '/images/logo.jpeg';

const ncertBooks = [
  { title: 'Class 11 Physics Part 1', file: '/ncert/NCERT_CLASS_11_PHYSICS_1.pdf' },
  { title: 'Class 11 Physics Part 2', file: '/ncert/NCERT_CLASS_11_PHYSICS_2.pdf' },
  { title: 'Class 11 Chemistry Part 1', file: '/ncert/NCERT_CLASS_11_CHEMISTRY_1.pdf' },
  { title: 'Class 11 Maths', file: '/ncert/NCERT_CLASS_11_MATHEMATICS_ENGLISH-mindpeak-compressed_2.pdf' },
  { title: 'Class 12 Physics Part 1', file: '/ncert/NCERT_CLASS_12_PHYSICS_1-mindpeak.pdf' },
  { title: 'Class 12 Physics Part 2', file: '/ncert/NCERT_CLASS_12_PHYSICS_2.pdf' },
  { title: 'Class 12 Chemistry Part 2', file: '/ncert/NCERT_CLASS_12_CHEMISTRY_2.pdf' },
  { title: 'Class 12 Maths Part 1', file: '/ncert/NCERT_CLASS_12_MATHEMATICS_1.pdf' },
  { title: 'Class 12 Maths Part 2', file: '/ncert/NCERT_CLASS_12_MATHEMATICS_2.pdf' },
];

export const ContactSection = () => {
  const { openDemoModal } = useDemoModal();
  const [selectedBook, setSelectedBook] = useState<{ title: string; file: string } | null>(null);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  const handleBookClick = (book: { title: string; file: string }) => {
    setSelectedBook(book);
    setDownloadModalOpen(true);
  };

  return (
    <>
    <NCERTDownloadModal isOpen={downloadModalOpen} onClose={() => setDownloadModalOpen(false)} book={selectedBook} />
    <section id="contact" className="bg-background py-24 md:py-32 px-4 sm:px-6 relative" aria-label="Contact and downloads">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent" />

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src={logo} alt="MindPeak Institute" className="w-16 h-16 rounded-full mx-auto mb-8 ring-1 ring-foreground/[0.08]" />
          <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl mb-4 tracking-[-0.02em]">
            Start Your <span className="text-gradient-gold">Journey</span>
          </h2>
          <p className="text-muted-foreground text-base mb-14 max-w-md mx-auto leading-relaxed">
            Take the first step towards your dream rank. Book a free counseling session today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 mb-12 md:mb-14">
          {[
            { icon: Phone, label: '+91 82194 57704', href: 'tel:+918219457704' },
            { icon: Mail, label: 'mindpeak@mindpeakinstitute.com', href: 'mailto:mindpeak@mindpeakinstitute.com' },
            { icon: MapPin, label: 'Kota, Rajasthan', href: '#' },
          ].map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="border border-foreground/[0.06] bg-foreground/[0.02] rounded-xl p-5 md:p-6 flex flex-col items-center gap-2.5 hover:border-primary/15 hover:bg-foreground/[0.04] transition-all duration-500"
            >
              <item.icon className="w-5 h-5 text-primary/60" strokeWidth={1.5} />
              <span className="text-foreground/80 text-xs md:text-sm break-all sm:break-normal">{item.label}</span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <button
            onClick={openDemoModal}
            className="group relative inline-flex items-center gap-3 px-12 py-4 bg-primary text-primary-foreground text-[13px] uppercase tracking-[0.15em] font-medium rounded-full hover:shadow-[0_0_40px_-8px_hsl(var(--primary)/0.5)] transition-all duration-500"
          >
            Book Your Free Demo
            <span className="w-5 h-5 rounded-full border border-current grid place-items-center transition-transform duration-500 group-hover:rotate-45">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </span>
          </button>
        </motion.div>
      </div>

      {/* NCERT Books */}
      <div className="max-w-4xl mx-auto mt-20 pt-10">
        <div className="h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent mb-10" />
        <h3 className="font-display font-semibold text-foreground text-lg mb-6 text-center tracking-[-0.01em]">
          Free <span className="text-gradient-gold">NCERT Books</span>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {ncertBooks.map((book) => (
            <button
              key={book.file}
              onClick={() => handleBookClick(book)}
              className="flex items-center gap-2 px-4 py-3 border border-foreground/[0.04] bg-foreground/[0.02] rounded-lg text-left hover:border-primary/15 transition-all duration-400 group"
            >
              <Download className="w-3.5 h-3.5 text-primary/70 flex-shrink-0 group-hover:text-primary transition-colors" strokeWidth={1.5} />
              <span className="text-foreground/70 text-[11px] leading-tight group-hover:text-foreground transition-colors">{book.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto mt-16 pt-10" role="contentinfo">
        <div className="h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-6">
          {/* Social Links */}
          <div className="flex items-center gap-5">
            {[
              { icon: Instagram, href: 'https://instagram.com/mindpeakinstitute', label: 'Instagram' },
              { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61584805776923', label: 'Facebook' },
              { icon: Linkedin, href: 'https://www.linkedin.com/company/mindpeak-institute/', label: 'LinkedIn' },
              { icon: Twitter, href: 'https://x.com/mindpeakins', label: 'X / Twitter' },
              { icon: MessageCircle, href: 'https://wa.me/918219457704?text=Hello!!%20MindPeak%20Institute', label: 'WhatsApp' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-muted-foreground/60 hover:text-primary transition-colors duration-300"
              >
                <s.icon className="w-4 h-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>

          {/* Policy Links */}
          <div className="flex items-center gap-4 text-[11px] tracking-[0.1em]">
            <Link
              to="/terms-and-conditions"
              className="text-muted-foreground/60 hover:text-foreground transition-colors"
            >
              Terms
            </Link>
            <span className="text-foreground/10">|</span>
            <Link
              to="/refund-policy"
              className="text-muted-foreground/60 hover:text-foreground transition-colors"
            >
              Refund Policy
            </Link>
          </div>
        </div>

        <p className="text-muted-foreground/50 text-[11px] tracking-[0.1em] text-center">
          © 2026 MindPeak Institute. All rights reserved.
        </p>
      </footer>
    </section>
    </>
  );
};
