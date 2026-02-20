import { motion } from 'framer-motion';
import { useState } from 'react';
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
  const [showAfter, setShowAfter] = useState(false);

  return (
    <section className="relative bg-background py-16 md:py-24 overflow-hidden">
      <div className="w-full max-w-5xl mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-foreground text-center mb-6"
          style={{ fontSize: 'clamp(1.6rem, 5vw, 3.5rem)', fontWeight: 900 }}
        >
          THE TRANSFORMATION
        </motion.h2>

        {/* Toggle buttons */}
        <div className="w-full max-w-md mx-auto mb-6">
          <div className="flex rounded-full overflow-hidden border border-border bg-muted p-1">
            <button
              onClick={() => setShowAfter(false)}
              className={`flex-1 py-2.5 text-xs md:text-sm font-bold uppercase tracking-wider rounded-full transition-all duration-300 ${
                !showAfter ? 'bg-destructive text-white shadow-md' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Before
            </button>
            <button
              onClick={() => setShowAfter(true)}
              className={`flex-1 py-2.5 text-xs md:text-sm font-bold uppercase tracking-wider rounded-full transition-all duration-300 ${
                showAfter ? 'bg-accent text-white shadow-md' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              After
            </button>
          </div>
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl overflow-hidden border border-border shadow-card transition-colors duration-500"
          style={{
            minHeight: 'clamp(300px, 50vh, 480px)',
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
              <img src={strugglingStudent} alt="Before MindPeak" className="w-full h-full object-cover" width={112} height={112} loading="lazy" />
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
              <img src={successRocket} alt="After MindPeak" className="w-full h-full object-cover" width={112} height={112} loading="lazy" />
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
        </motion.div>
      </div>
    </section>
  );
};
