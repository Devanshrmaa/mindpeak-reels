import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useRef, useState } from 'react';

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
    offset: ["start start", "end end"]
  });

  const [sliderPct, setSliderPct] = useState(0);
  useMotionValueEvent(scrollYProgress, 'change', (v) => setSliderPct(v * 100));

  return (
    <section
      ref={sectionRef}
      className="relative bg-background"
      style={{ height: '250vh' }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-foreground text-center mb-12"
            style={{ fontSize: 'clamp(2rem, 6vw, 5rem)', fontWeight: 700 }}
          >
            THE TRANSFORMATION
          </motion.h2>

          <div className="relative h-[420px] md:h-[520px] rounded-2xl overflow-hidden border border-border">
            {/* BEFORE (background layer - always visible behind) */}
            <div className="absolute inset-0 bg-gradient-to-br from-destructive/30 to-destructive/10">
              <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                <span className="text-6xl md:text-8xl mb-6">😰</span>
                <h3 className="text-foreground font-display text-2xl md:text-4xl mb-6">BEFORE MINDPEAK</h3>
                <div className="space-y-3 w-full max-w-sm">
                  {beforeStats.map((s, i) => (
                    <div key={i} className="p-3 rounded-xl bg-destructive/10 border border-destructive/20 flex justify-between items-center">
                      <span className="text-destructive text-xs uppercase tracking-wider">{s.label}</span>
                      <span className="text-destructive font-bold text-lg md:text-xl">{s.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 px-4 py-2 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm">
                  Status: Struggling
                </div>
              </div>
            </div>

            {/* AFTER (foreground overlay - clips in from left as you scroll) */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-accent/30 to-accent/10"
              style={{ clipPath: `inset(0 ${100 - sliderPct}% 0 0)` }}
            >
              <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                <span className="text-6xl md:text-8xl mb-6">🚀</span>
                <h3 className="text-foreground font-display text-2xl md:text-4xl mb-6">AFTER MINDPEAK</h3>
                <div className="space-y-3 w-full max-w-sm">
                  {afterStats.map((s, i) => (
                    <div key={i} className="p-3 rounded-xl bg-accent/10 border border-accent/20 flex justify-between items-center">
                      <span className="text-accent text-xs uppercase tracking-wider">{s.label}</span>
                      <span className="text-accent font-bold text-lg md:text-xl">{s.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 px-4 py-2 bg-accent/10 border border-accent/20 rounded-lg text-accent text-sm">
                  Status: 10× Improvement
                </div>
              </div>
            </div>

            {/* Slider line - moves with scroll */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-foreground z-10"
              style={{ left: `${sliderPct}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-foreground rounded-full shadow-lg flex items-center justify-center">
                <div className="flex gap-0.5">
                  <div className="w-0.5 h-5 md:h-7 bg-background rounded-full" />
                  <div className="w-0.5 h-5 md:h-7 bg-background rounded-full" />
                </div>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground text-center mt-6 text-sm uppercase tracking-wider">
            Scroll to reveal the transformation
          </p>
        </div>
      </div>
    </section>
  );
};
