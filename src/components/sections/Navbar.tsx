import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useDemoModal } from '@/components/DemoBookingModal';
import logo from '@/assets/logo.jpeg';

const navLinks = [
  { label: 'Home', href: '/#hero', isHash: true },
  { label: 'JEE Coaching', href: '/jee-coaching', isRoute: true },
  { label: 'NEET Coaching', href: '/neet-coaching', isRoute: true },
  { label: 'Practice', href: '/jee-practice', isRoute: true },
  { label: 'Courses', href: '/courses', isRoute: true },
  { label: 'Pricing', href: '/pricing', isRoute: true },
  { label: 'Blog', href: '/blog', isRoute: true },
  { label: 'Contact', href: '/contact', isRoute: true },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openDemoModal } = useDemoModal();
  const location = useLocation();
  const isHome = location.pathname === '/';

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
        !isHome || scrolled ? 'bg-background/90 backdrop-blur-xl border-b border-border' : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="MindPeak Institute" className="w-10 h-10 rounded-full" width={40} height={40} />
          <span className="font-display font-bold text-foreground text-lg tracking-wide">
            MINDPEAK
          </span>
        </Link>

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
            ) : link.isHash && isHome ? (
              <a
                key={link.label}
                href={link.href.replace('/', '')}
                className="text-muted-foreground hover:text-primary transition-colors text-xs font-medium tracking-wider uppercase whitespace-nowrap"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="text-muted-foreground hover:text-primary transition-colors text-xs font-medium tracking-wider uppercase whitespace-nowrap"
              >
                {link.label}
              </Link>
            )
          )}
          <button
            onClick={openDemoModal}
            className="px-5 py-2 border border-primary text-primary text-xs uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300 whitespace-nowrap flex-shrink-0"
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
                ) : link.isHash && isHome ? (
                  <a
                    key={link.label}
                    href={link.href.replace('/', '')}
                    onClick={() => setMobileOpen(false)}
                    className="text-foreground text-lg font-display tracking-wider uppercase"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-foreground text-lg font-display tracking-wider uppercase"
                  >
                    {link.label}
                  </Link>
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
