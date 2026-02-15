import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';
import { useDemoModal } from '@/components/DemoBookingModal';
import logo from '@/assets/logo.jpeg';

export const ContactSection = () => {
  const { openDemoModal } = useDemoModal();
  return (
    <section id="contact" className="bg-background py-16 px-6 border-t border-border">
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
            { icon: Phone, label: '+91 98765 43210', href: 'tel:+919876543210' },
            { icon: Mail, label: 'hello@mindpeak.in', href: 'mailto:hello@mindpeak.in' },
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

      {/* Footer */}
      <div className="max-w-5xl mx-auto mt-20 pt-8 border-t border-border">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Instagram, href: 'https://instagram.com/mindpeakinstitute', label: 'Instagram' },
              { icon: Facebook, href: 'https://facebook.com/mindpeakinstitute', label: 'Facebook' },
              { icon: Linkedin, href: 'https://linkedin.com/mindpeakinstitute', label: 'LinkedIn' },
              { icon: Twitter, href: 'https://x.com/mindpeakins', label: 'X / Twitter' },
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
            <a
              href="/terms-and-conditions.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms & Conditions
            </a>
            <span className="text-border">|</span>
            <a
              href="/terms-and-conditions.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Refund Policy
            </a>
          </div>
        </div>

        <p className="text-muted-foreground text-xs tracking-wider text-center">
          © 2026 MindPeak Institute. All rights reserved. JEE & NEET Coaching.
        </p>
      </div>
    </section>
  );
};
