import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Target, BookOpen, TrendingUp } from 'lucide-react';

const pillars = [
  {
    icon: Users,
    title: '1-on-1 Mentoring',
    desc: 'Dedicated mentor for every student',
    detail: 'Each student is paired with a dedicated mentor who understands their unique learning style, strengths, and weaknesses. Your mentor designs a custom study plan, conducts weekly one-on-one sessions, reviews your progress, and provides real-time doubt resolution — ensuring you never feel lost or left behind.',
    num: '01',
  },
  {
    icon: Target,
    title: 'Adaptive Curriculum',
    desc: 'Personalized roadmap based on strengths',
    detail: 'No two students learn the same way. Our adaptive curriculum continuously adjusts based on your performance in mock tests and practice sessions. Topics you struggle with get more focus, while areas of strength are reinforced efficiently — maximizing your score improvement per hour of study.',
    num: '02',
  },
  {
    icon: BookOpen,
    title: 'Deep Practice',
    desc: 'Problem-solving over rote memorization',
    detail: 'We emphasize conceptual understanding through carefully curated problem sets that build intuition. Instead of memorizing formulas, you learn to derive and apply them. Our tiered difficulty system takes you from fundamentals to JEE/NEET-level problems in a structured, confidence-building progression.',
    num: '03',
  },
  {
    icon: TrendingUp,
    title: 'Progress Tracking',
    desc: 'Weekly analytics & course correction',
    detail: 'Every week, you receive a detailed analytics report covering accuracy, speed, topic-wise performance, and comparison with target benchmarks. Your mentor uses this data to adjust your plan in real-time — identifying weak spots early and ensuring consistent, measurable improvement toward your rank goal.',
    num: '04',
  },
];

export const MethodologySection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setExpandedIndex(expandedIndex === i ? null : i);
  };

  return (
    <section id="methodology" className="relative overflow-hidden bg-background" aria-label="Our teaching methodology">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent z-10" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-24 sm:py-36">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-foreground/10" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground/70 font-medium">How We Teach</span>
            <span className="h-px w-8 bg-foreground/10" />
          </div>
          <h2
            className="font-display font-bold text-foreground tracking-[-0.02em]"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            OUR <span className="text-gradient-gold">METHODOLOGY</span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-base md:text-lg leading-relaxed mt-5 max-w-xl mx-auto"
          >
            While others teach in batches of 100, we believe in the power of
            1-on-1 attention.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => toggle(i)}
              className={`group relative rounded-2xl border p-7 md:p-8 cursor-pointer select-none transition-all duration-500 ${
                expandedIndex === i
                  ? 'border-primary/20 bg-foreground/[0.04]'
                  : 'border-foreground/[0.06] bg-foreground/[0.02] hover:border-foreground/[0.12]'
              }`}
            >
              {/* Number */}
              <span className="absolute top-5 right-6 text-[11px] tracking-[0.15em] text-muted-foreground/40 font-medium">{pillar.num}</span>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/[0.08] flex items-center justify-center shrink-0 mt-0.5">
                  <pillar.icon className="w-5 h-5 text-primary/70" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-semibold text-foreground text-base md:text-lg mb-1">{pillar.title}</h3>
                  <p className="text-muted-foreground text-sm">{pillar.desc}</p>
                </div>
              </div>

              <AnimatePresence>
                {expandedIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-5 pt-5 border-t border-foreground/[0.06]">
                      <p className="text-muted-foreground text-sm leading-[1.8] pl-14">
                        {pillar.detail}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-14"
        >
          <a
            href="#contact"
            aria-label="Contact us about our teaching methodology"
            className="group relative inline-flex items-center gap-3 px-10 py-4 border border-foreground/15 text-foreground text-[13px] uppercase tracking-[0.2em] btn-outline-fill rounded-full"
          >
            <span className="relative z-10">Get in Touch</span>
            <span className="relative z-10 w-5 h-5 rounded-full border border-current grid place-items-center transition-transform duration-500 group-hover:rotate-45">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </span>
          </a>
        </motion.div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent" />
    </section>
  );
};
