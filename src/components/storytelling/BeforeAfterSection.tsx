import { useScroll, useMotionValueEvent, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import strugglingStudent from '@/assets/icons/struggling-student.png';
import successRocket from '@/assets/icons/success-rocket.png';

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

  const [pct, setPct] = useState(0);
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setPct(Math.round(v * 100));
  });

  const showAfter = pct > 50;

  return (
    <section
      ref={sectionRef}
      className="relative bg-background"
      style={{ minHeight: '110vh' }}
    >
      <div className="sticky top-0 flex items-center justify-center overflow-hidden min-h-screen py-16 md:py-0">
        <div className="w-full max-w-5xl mx-auto px-4 md:px-6">
          <h2
            className="font-display text-foreground text-center mb-6"
            style={{ fontSize: 'clamp(1.6rem, 5vw, 3.5rem)', fontWeight: 900 }}
          >
            THE TRANSFORMATION
          </h2>

          {/* Progress bar */}
          <div className="w-full max-w-md mx-auto mb-6">
            <div className="flex justify-between text-[10px] md:text-xs uppercase tracking-wider mb-2">
              <span className={`transition-colors ${!showAfter ? 'text-destructive font-bold' : 'text-muted-foreground'}`}>Before</span>
              <span className={`transition-colors ${showAfter ? 'text-accent font-bold' : 'text-muted-foreground'}`}>After</span>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-150 ease-out"
                style={{
                  width: `${pct}%`,
                  background: pct < 50 ? 'hsl(var(--destructive))' : 'hsl(var(--accent))',
                }}
              />
            </div>
          </div>

          {/* Card */}
          <div
            className="relative rounded-2xl overflow-hidden border border-border shadow-card transition-colors duration-500"
            style={{
              height: 'clamp(300px, 55vh, 480px)',
              background: showAfter
                ? 'linear-gradient(135deg, hsl(var(--accent) / 0.15), hsl(var(--background)))'
                : 'linear-gradient(135deg, hsl(var(--destructive) / 0.15), hsl(var(--background)))',
              borderColor: showAfter ? 'hsl(var(--accent) / 0.3)' : 'hsl(var(--destructive) / 0.3)',
            }}
          >
            {/* BEFORE */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center p-5 md:p-8 text-center transition-all duration-500"
              style={{
                opacity: showAfter ? 0 : 1,
                transform: showAfter ? 'scale(0.95) translateY(20px)' : 'scale(1) translateY(0)',
                pointerEvents: showAfter ? 'none' : 'auto',
              }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-3 ring-2 ring-destructive/30">
                <img src={strugglingStudent} alt="Before MindPeak" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-foreground font-display text-base md:text-2xl mb-3 md:mb-4">BEFORE MINDPEAK</h3>
              <div className="space-y-1.5 md:space-y-2 w-full max-w-xs">
                {beforeStats.map((s, i) => (
                  <div key={i} className="p-2 md:p-2.5 rounded-lg bg-destructive/10 border border-destructive/20 flex justify-between items-center">
                    <span className="text-destructive text-[9px] md:text-xs uppercase tracking-wider">{s.label}</span>
                    <span className="text-destructive font-bold text-xs md:text-lg">{s.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 px-4 py-1.5 bg-destructive/10 border border-destructive/20 rounded-full text-destructive text-xs font-bold uppercase">
                Struggling
              </div>
            </div>

            {/* AFTER */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center p-5 md:p-8 text-center transition-all duration-500"
              style={{
                opacity: showAfter ? 1 : 0,
                transform: showAfter ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(20px)',
                pointerEvents: showAfter ? 'auto' : 'none',
              }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-3 ring-2 ring-accent/30">
                <img src={successRocket} alt="After MindPeak" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-foreground font-display text-base md:text-2xl mb-3 md:mb-4">AFTER MINDPEAK</h3>
              <div className="space-y-1.5 md:space-y-2 w-full max-w-xs">
                {afterStats.map((s, i) => (
                  <div key={i} className="p-2 md:p-2.5 rounded-lg bg-accent/10 border border-accent/20 flex justify-between items-center">
                    <span className="text-accent text-[9px] md:text-xs uppercase tracking-wider">{s.label}</span>
                    <span className="text-accent font-bold text-xs md:text-lg">{s.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-bold uppercase">
                10× Improvement
              </div>
            </div>
          </div>

          <p className="text-muted-foreground text-center mt-4 text-xs uppercase tracking-wider">
            ↓ Keep scrolling ↓
          </p>
        </div>
      </div>
    </section>
  );
};
