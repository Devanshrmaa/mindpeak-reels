import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Twitter, Download, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDemoModal } from '@/components/DemoBookingModal';
import { NCERTDownloadModal } from '@/components/NCERTDownloadModal';
import logo from '@/assets/logo.jpeg';

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
    <section id="contact" className="bg-background py-16 px-6 border-t border-border" aria-label="Contact and downloads">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img src={logo} alt="MindPeak Institute" className="w-20 h-20 rounded-full mx-auto mb-6" />
          <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl mb-4">
            Start Your <span className="text-gradient-gold">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
            Take the first step towards your dream rank. Book a free counseling session today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
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
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 flex flex-col items-center gap-3 hover:border-primary/40 transition-colors"
            >
              <item.icon className="w-6 h-6 text-primary" />
              <span className="text-foreground text-sm">{item.label}</span>
            </motion.a>
          ))}
        </div>

        <motion.button
          onClick={openDemoModal}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-14 py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-[0.15em] shadow-gold-glow transition-all"
        >
          Book Your Free Demo
        </motion.button>
      </div>

      {/* NCERT Books */}
      <div className="max-w-5xl mx-auto mt-16 pt-8 border-t border-border">
        <h3 className="font-display font-bold text-foreground text-xl mb-6 text-center">
          Free <span className="text-gradient-gold">NCERT Books</span>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {ncertBooks.map((book) => (
            <button
              key={book.file}
              onClick={() => handleBookClick(book)}
              className="flex items-center gap-2 px-4 py-3 bg-card border border-border rounded-lg text-left hover:border-primary/40 transition-colors group"
            >
              <Download className="w-4 h-4 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-foreground text-xs leading-tight">{book.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto mt-12 pt-8 border-t border-border" role="contentinfo">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
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
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <s.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Policy Links */}
          <div className="flex items-center gap-4 text-xs tracking-wider">
            <Link
              to="/terms-and-conditions"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms & Conditions
            </Link>
            <span className="text-border">|</span>
            <Link
              to="/refund-policy"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Refund Policy
            </Link>
          </div>
        </div>

        <p className="text-muted-foreground text-xs tracking-wider text-center">
          © 2026 MindPeak Institute. All rights reserved. JEE & NEET Coaching.
        </p>
      </footer>
    </section>
    </>
  );
};
