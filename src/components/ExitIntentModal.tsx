import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, Download, BookOpen, Phone } from 'lucide-react';
import { useDemoModal } from '@/components/DemoBookingModal';

/* ═══════════════════════════════════════════════════════
   ExitIntentModal — captures abandoning visitors
   Triggers on: mouse leaving viewport (desktop) or
   back-button intent / scroll-up pattern (mobile simulation)
   Offers free resources → leads to email capture / demo booking
   ═══════════════════════════════════════════════════════ */

const STORAGE_KEY = 'mindpeak_exit_modal_shown';
const COOLDOWN_MS = 3 * 24 * 60 * 60 * 1000; // 3 days cooldown

export const ExitIntentModal = () => {
  const [show, setShow] = useState(false);
  const { openDemoModal } = useDemoModal();

  const shouldShow = useCallback(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const lastShown = parseInt(stored, 10);
        if (Date.now() - lastShown < COOLDOWN_MS) return false;
      }
    } catch {
      // localStorage not available
    }
    return true;
  }, []);

  const markShown = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {}
  }, []);

  const handleClose = () => {
    setShow(false);
    markShown();
  };

  const handleCTA = () => {
    setShow(false);
    markShown();
    openDemoModal();
  };

  // Desktop: mouse leaves viewport (top)
  useEffect(() => {
    if (!shouldShow()) return;

    let hasScrolled = false;
    const scrollHandler = () => { hasScrolled = true; };

    const mouseLeaveHandler = (e: MouseEvent) => {
      if (e.clientY <= 5 && hasScrolled && !show) {
        setShow(true);
        markShown();
        document.removeEventListener('mouseleave', mouseLeaveHandler);
      }
    };

    // Only trigger after user has scrolled a bit (engaged)
    window.addEventListener('scroll', scrollHandler, { passive: true });
    document.addEventListener('mouseleave', mouseLeaveHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
      document.removeEventListener('mouseleave', mouseLeaveHandler);
    };
  }, [shouldShow, markShown, show]);

  // Mobile: trigger after 45 seconds of idle time if user has scrolled > 30%
  useEffect(() => {
    if (!shouldShow()) return;

    let timer: ReturnType<typeof setTimeout>;
    let hasTriggered = false;

    const checkMobile = () => {
      if (hasTriggered || show) return;
      const scrollPct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrollPct > 0.3) {
        timer = setTimeout(() => {
          if (!hasTriggered) {
            hasTriggered = true;
            setShow(true);
            markShown();
          }
        }, 45000);
      }
    };

    window.addEventListener('scroll', checkMobile, { passive: true });
    return () => {
      window.removeEventListener('scroll', checkMobile);
      clearTimeout(timer);
    };
  }, [shouldShow, markShown, show]);

  const resources = [
    { icon: BookOpen, title: 'Free Study Plan PDF', desc: '30-day subject-wise plan for JEE/NEET' },
    { icon: Download, title: 'Formula Sheets', desc: 'Physics, Chemistry & Maths — all formulas' },
    { icon: Gift, title: 'Free Demo Class', desc: '1-on-1 session with an IIT/AIIMS mentor' },
  ];

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="relative w-full max-w-md rounded-2xl border border-border bg-card shadow-2xl overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute right-3 top-3 z-10 p-1.5 rounded-full hover:bg-muted transition"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>

            {/* Header */}
            <div className="bg-gradient-to-br from-primary to-primary/80 px-6 pt-8 pb-6 text-center">
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-white/20 flex items-center justify-center">
                <Gift className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-white font-display font-bold text-xl sm:text-2xl mb-1">
                Wait! Don't Leave Empty-Handed
              </h2>
              <p className="text-white/85 text-sm">
                Get free JEE/NEET resources + a personalised study plan
              </p>
            </div>

            {/* Resources */}
            <div className="px-6 py-5 space-y-3">
              {resources.map((r, i) => {
                const Icon = r.icon;
                return (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-muted/50">
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-semibold text-sm">{r.title}</p>
                      <p className="text-muted-foreground text-xs">{r.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="px-6 pb-6 space-y-3">
              <button
                onClick={handleCTA}
                className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-display font-bold text-base hover:brightness-110 transition flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Book Free Demo + Get Resources
              </button>
              <button
                onClick={handleClose}
                className="w-full text-center text-xs text-muted-foreground hover:text-foreground transition py-1"
              >
                No thanks, I'll prepare on my own
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
