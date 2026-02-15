import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const beforeStats = [
  { label: 'Mock Score', value: '120/300' },
  { label: 'Expected Rank', value: '50,000+' },
  { label: 'Confidence', value: '30%' },
  { label: 'Study Hours', value: '8 hrs (unfocused)' },
];

const afterStats = [
  { label: 'Mock Score', value: '285/300' },
  { label: 'Expected Rank', value: 'AIR 42' },
  { label: 'Confidence', value: '95%' },
  { label: 'Study Hours', value: '6 hrs (focused)' },
];

export const BeforeAfterSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Scroll maps: 0→1 progress maps to slider 100→0 (BEFORE first, AFTER revealed)
  const sliderPct = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [100, 100, 0, 0]
  );

  const clipRight = useTransform(sliderPct, (v) => `inset(0 0 0 ${100 - v}%)`);
  const sliderLeft = useTransform(sliderPct, (v) => `${100 - v}%`);

  // Progress bar
  const progressScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-background"
      style={{ height: '200vh' }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-6 py-10">
          {/* Header with glow */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-foreground text-center mb-10 relative"
            style={{ fontSize: 'clamp(2rem, 6vw, 5rem)', fontWeight: 900 }}
          >
            <span className="absolute inset-0 text-primary opacity-30 blur-lg pointer-events-none" aria-hidden>
              THE TRANSFORMATION
            </span>
            <span className="relative">THE TRANSFORMATION</span>
          </motion.h2>

          <div className="relative h-[420px] md:h-[520px] rounded-2xl overflow-hidden border border-border shadow-card">
            {/* Ambient glow border */}
            <div className="absolute -inset-px bg-gradient-to-r from-destructive/30 via-primary/20 to-accent/30 rounded-2xl blur-sm opacity-40 pointer-events-none" />

            {/* AFTER layer (background - revealed as slider moves) */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent/10 to-accent/5">
              {/* Success particles */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {Array.from({ length: 12 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-lg"
                    style={{ left: `${(i / 12) * 100}%`, top: `${Math.random() * 80 + 10}%` }}
                    animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }}
                    transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
                  >
                    {['⭐', '🎯', '🏆', '✨'][i % 4]}
                  </motion.div>
                ))}
              </div>

              <div className="relative h-full flex flex-col items-center justify-center p-6 md:p-8 text-center z-10">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="text-5xl md:text-7xl mb-4 drop-shadow-lg"
                >
                  🚀
                </motion.div>
                <h3 className="text-foreground font-display text-xl md:text-3xl mb-5">AFTER MINDPEAK</h3>
                <div className="space-y-2.5 w-full max-w-sm">
                  {afterStats.map((s, i) => (
                    <div
                      key={i}
                      className="glass-card p-3 rounded-xl border-accent/30 flex justify-between items-center"
                    >
                      <span className="text-accent text-xs uppercase tracking-wider font-semibold">{s.label}</span>
                      <span className="text-accent font-bold text-lg md:text-xl">{s.value}</span>
                    </div>
                  ))}
                </div>
                <motion.div
                  animate={{
                    boxShadow: [
                      '0 0 15px hsl(217 91% 60% / 0.3)',
                      '0 0 30px hsl(217 91% 60% / 0.5)',
                      '0 0 15px hsl(217 91% 60% / 0.3)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mt-5 px-5 py-2 bg-accent/15 border border-accent/30 rounded-full text-accent text-sm font-bold uppercase tracking-wider"
                >
                  10× Improvement 📈
                </motion.div>
              </div>
            </div>

            {/* BEFORE layer (foreground - clips away as you scroll) */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-destructive/25 via-destructive/15 to-destructive/5"
              style={{ clipPath: clipRight }}
            >
              {/* Chaos particles */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {Array.from({ length: 10 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-destructive/40 rounded-full"
                    style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
                    animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 2.5 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
                  />
                ))}
              </div>

              <div className="relative h-full flex flex-col items-center justify-center p-6 md:p-8 text-center z-10">
                <motion.div
                  animate={{ scale: [1, 1.08, 1], rotate: [-3, 3, -3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-5xl md:text-7xl mb-4 drop-shadow-lg"
                >
                  😰
                </motion.div>
                <h3 className="text-foreground font-display text-xl md:text-3xl mb-5">BEFORE MINDPEAK</h3>
                <div className="space-y-2.5 w-full max-w-sm">
                  {beforeStats.map((s, i) => (
                    <div
                      key={i}
                      className="glass-card p-3 rounded-xl border-destructive/30 flex justify-between items-center"
                    >
                      <span className="text-destructive text-xs uppercase tracking-wider font-semibold">{s.label}</span>
                      <span className="text-destructive font-bold text-lg md:text-xl">{s.value}</span>
                    </div>
                  ))}
                </div>
                <motion.div
                  animate={{
                    boxShadow: [
                      '0 0 15px hsl(0 84% 60% / 0.3)',
                      '0 0 30px hsl(0 84% 60% / 0.5)',
                      '0 0 15px hsl(0 84% 60% / 0.3)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mt-5 px-5 py-2 bg-destructive/15 border border-destructive/30 rounded-full text-destructive text-sm font-bold uppercase tracking-wider"
                >
                  Struggling 📉
                </motion.div>
              </div>
            </motion.div>

            {/* Slider line */}
            <motion.div
              className="absolute top-0 bottom-0 w-0.5 bg-foreground z-20"
              style={{ right: sliderLeft }}
            >
              <div className="absolute inset-0 bg-foreground/50 blur-sm" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-foreground rounded-full shadow-lg flex items-center justify-center">
                <div className="flex gap-0.5">
                  <div className="w-0.5 h-5 md:h-7 bg-background rounded-full" />
                  <div className="w-0.5 h-5 md:h-7 bg-background rounded-full" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll instruction + progress bar */}
          <div className="text-center mt-6">
            <motion.p
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-muted-foreground text-sm uppercase tracking-wider mb-3"
            >
              ↓ Scroll to reveal transformation ↓
            </motion.p>
            <div className="w-40 h-1 bg-muted rounded-full mx-auto overflow-hidden">
              <motion.div
                style={{ scaleX: progressScaleX }}
                className="h-full bg-gradient-to-r from-destructive via-primary to-accent origin-left"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
