import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
const strugglingStudent = '/images/icons/struggling-student.png';
const successRocket = '/images/icons/success-rocket.png';

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
    <section className="relative bg-background py-24 md:py-36 overflow-hidden">
      <div className="w-full max-w-4xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-foreground/10" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground/60 font-medium">Compare</span>
            <span className="h-px w-8 bg-foreground/10" />
          </div>
          <h2
            className="font-display text-foreground font-bold tracking-[-0.02em]"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)' }}
          >
            THE TRANSFORMATION
          </h2>
        </motion.div>

        {/* Toggle buttons */}
        <div className="w-full max-w-xs mx-auto mb-10">
          <div className="relative flex rounded-full border border-foreground/[0.08] bg-foreground/[0.02] p-1">
            {/* Sliding indicator */}
            <motion.div
              className="absolute top-1 bottom-1 rounded-full"
              animate={{
                left: showAfter ? '50%' : '4px',
                right: showAfter ? '4px' : '50%',
                background: showAfter ? 'hsl(var(--accent))' : 'hsl(var(--destructive))',
              }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />
            <button
              onClick={() => setShowAfter(false)}
              className={`relative z-10 flex-1 py-2.5 text-[11px] font-medium uppercase tracking-[0.15em] rounded-full transition-colors duration-300 ${
                !showAfter ? 'text-white' : 'text-muted-foreground'
              }`}
            >
              Before
            </button>
            <button
              onClick={() => setShowAfter(true)}
              className={`relative z-10 flex-1 py-2.5 text-[11px] font-medium uppercase tracking-[0.15em] rounded-full transition-colors duration-300 ${
                showAfter ? 'text-white' : 'text-muted-foreground'
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
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl overflow-hidden border transition-all duration-700"
          style={{
            minHeight: 'clamp(300px, 50vh, 480px)',
            background: showAfter
              ? 'linear-gradient(135deg, hsl(var(--accent) / 0.06), hsl(var(--background)))'
              : 'linear-gradient(135deg, hsl(var(--destructive) / 0.06), hsl(var(--background)))',
            borderColor: showAfter ? 'hsl(var(--accent) / 0.15)' : 'hsl(var(--destructive) / 0.15)',
          }}
        >
          {/* BEFORE */}
          <AnimatePresence mode="wait">
            {!showAfter && (
              <motion.div
                key="before"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-10 text-center"
              >
                <div className="w-16 h-16 md:w-18 md:h-18 rounded-full overflow-hidden mb-4 ring-1 ring-destructive/20">
                  <img src={strugglingStudent} alt="Before MindPeak" className="w-full h-full object-cover" width={112} height={112} loading="lazy" />
                </div>
                <h3 className="text-foreground font-display text-sm md:text-lg font-medium tracking-[0.1em] uppercase mb-5">Before MindPeak</h3>
                <div className="space-y-2 w-full max-w-sm">
                  {beforeStats.map((s, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                      className="p-3 rounded-xl bg-destructive/[0.05] border border-destructive/10 flex justify-between items-center"
                    >
                      <span className="text-muted-foreground text-[11px] uppercase tracking-[0.1em]">{s.label}</span>
                      <span className="text-destructive font-display font-semibold text-sm md:text-base">{s.value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* AFTER */}
            {showAfter && (
              <motion.div
                key="after"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-10 text-center"
              >
                <div className="w-16 h-16 md:w-18 md:h-18 rounded-full overflow-hidden mb-4 ring-1 ring-accent/20">
                  <img src={successRocket} alt="After MindPeak" className="w-full h-full object-cover" width={112} height={112} loading="lazy" />
                </div>
                <h3 className="text-foreground font-display text-sm md:text-lg font-medium tracking-[0.1em] uppercase mb-5">After MindPeak</h3>
                <div className="space-y-2 w-full max-w-sm">
                  {afterStats.map((s, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                      className="p-3 rounded-xl bg-accent/[0.05] border border-accent/10 flex justify-between items-center"
                    >
                      <span className="text-muted-foreground text-[11px] uppercase tracking-[0.1em]">{s.label}</span>
                      <span className="text-accent font-display font-semibold text-sm md:text-base">{s.value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent" />
    </section>
  );
};
