import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Target, BookOpen, TrendingUp, ChevronDown } from 'lucide-react';
import methodologyBg from '@/assets/methodology-bg.jpg';

const pillars = [
  {
    icon: Users,
    title: '1-on-1 Mentoring',
    desc: 'Dedicated mentor for every student',
    detail: 'Each student is paired with a dedicated mentor who understands their unique learning style, strengths, and weaknesses. Your mentor designs a custom study plan, conducts weekly one-on-one sessions, reviews your progress, and provides real-time doubt resolution — ensuring you never feel lost or left behind.',
  },
  {
    icon: Target,
    title: 'Adaptive Curriculum',
    desc: 'Personalized roadmap based on strengths',
    detail: 'No two students learn the same way. Our adaptive curriculum continuously adjusts based on your performance in mock tests and practice sessions. Topics you struggle with get more focus, while areas of strength are reinforced efficiently — maximizing your score improvement per hour of study.',
  },
  {
    icon: BookOpen,
    title: 'Deep Practice',
    desc: 'Problem-solving over rote memorization',
    detail: 'We emphasize conceptual understanding through carefully curated problem sets that build intuition. Instead of memorizing formulas, you learn to derive and apply them. Our tiered difficulty system takes you from fundamentals to JEE/NEET-level problems in a structured, confidence-building progression.',
  },
  {
    icon: TrendingUp,
    title: 'Progress Tracking',
    desc: 'Weekly analytics & course correction',
    detail: 'Every week, you receive a detailed analytics report covering accuracy, speed, topic-wise performance, and comparison with target benchmarks. Your mentor uses this data to adjust your plan in real-time — identifying weak spots early and ensuring consistent, measurable improvement toward your rank goal.',
  },
];

export const MethodologySection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setExpandedIndex(expandedIndex === i ? null : i);
  };

  return (
    <section id="methodology" className="relative flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={methodologyBg} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 sm:py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-foreground mb-6"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
        >
          OUR <span className="text-gradient-gold">METHODOLOGY</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg sm:text-xl leading-relaxed mb-16 max-w-3xl mx-auto"
        >
          While others teach in batches of 100, we believe in the power of
          1-on-1 attention. Every student gets a personalized roadmap,
          dedicated mentor, and adaptive curriculum.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              onClick={() => toggle(i)}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 hover:border-primary/40 transition-colors duration-300 shadow-card cursor-pointer select-none"
            >
              <pillar.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-display font-bold text-foreground text-lg mb-2">{pillar.title}</h3>
              <p className="text-muted-foreground text-sm">{pillar.desc}</p>

              <motion.div
                animate={{ rotate: expandedIndex === i ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="mt-3 mx-auto w-fit"
              >
                <ChevronDown className="w-5 h-5 text-primary" />
              </motion.div>

              <AnimatePresence>
                {expandedIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-muted-foreground text-sm leading-relaxed mt-4 pt-4 border-t border-border text-left">
                      {pillar.detail}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-14 px-12 py-4 border-2 border-primary text-primary text-sm uppercase tracking-[0.15em] hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Learn More
        </motion.a>
      </div>
    </section>
  );
};
