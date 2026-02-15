import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDemoModal } from '@/components/DemoBookingModal';
import logo from '@/assets/logo.jpeg';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Courses', href: '/courses', isRoute: true },
  { label: 'Success Stories', href: '#success-stories' },
  { label: 'Methodology', href: '#methodology' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openDemoModal } = useDemoModal();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/90 backdrop-blur-xl border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3">
          <img src={logo} alt="MindPeak Institute" className="w-10 h-10 rounded-full" />
          <span className="font-display font-bold text-foreground text-lg tracking-wide">
            MINDPEAK
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.label}
                to={link.href}
                className="text-muted-foreground hover:text-primary transition-colors text-xs font-medium tracking-wider uppercase whitespace-nowrap"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors text-xs font-medium tracking-wider uppercase whitespace-nowrap"
              >
                {link.label}
              </a>
            )
          )}
          <button
            onClick={openDemoModal}
            className="px-4 py-1.5 text-primary/80 text-xs uppercase tracking-wider hover:text-primary transition-colors whitespace-nowrap flex-shrink-0"
          >
            Book Free Demo
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-foreground text-lg font-display tracking-wider uppercase"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-foreground text-lg font-display tracking-wider uppercase"
                  >
                    {link.label}
                  </a>
                )
              )}
              <button
                onClick={() => { setMobileOpen(false); openDemoModal(); }}
                className="mt-2 px-6 py-3 border border-primary text-primary text-center uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all w-full"
              >
                Book Your Free Demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
