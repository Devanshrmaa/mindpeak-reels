import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Users, Clock, TrendingDown, HelpCircle } from 'lucide-react';

const problems = [
  {
    icon: Users,
    stat: '100+',
    label: 'Students per batch',
    title: 'Lost in the Crowd',
    desc: 'Your child is one of 100-200 students. Teachers can\'t track individual progress.',
  },
  {
    icon: Clock,
    stat: '0',
    label: 'Personal attention',
    title: 'Zero Personalization',
    desc: 'Same curriculum, same pace, same problems — regardless of each student\'s needs.',
  },
  {
    icon: HelpCircle,
    stat: '72%',
    label: 'Doubts unresolved',
    title: 'Doubts Pile Up',
    desc: 'Crowded doubt sessions mean most questions go unanswered. Gaps compound silently.',
  },
  {
    icon: TrendingDown,
    stat: '60%',
    label: 'Feel lost & stuck',
    title: 'Confidence Crashes',
    desc: 'A rigid one-size-fits-all model leaves the majority of students behind — and burned out.',
  },
];

const highlightText =
  'Every year, lakhs of students join batch coaching centres with dreams of cracking JEE & NEET. Most leave disappointed. The factory model treats students as numbers — not as individuals with unique strengths, weaknesses, and learning speeds.';

export const ProblemSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const lineWidth = useTransform(scrollYProgress, [0, 0.5], ['0%', '100%']);

  return (
    <section ref={sectionRef} className="relative bg-background py-24 md:py-36">
      {/* Dramatic red-tinted background */}
      <div className="absolute inset-0 bg-gradient-to-b from-destructive/[0.08] via-transparent to-transparent" />

      <div className="relative max-w-5xl mx-auto px-6 w-full">
        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-destructive/30" />
            <p className="text-destructive/70 text-[11px] uppercase tracking-[0.3em] font-medium">
              The Uncomfortable Truth
            </p>
            <span className="h-px w-8 bg-destructive/30" />
          </div>
          <h2
            className="font-display text-foreground font-bold leading-[1.05] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            THE PROBLEM WITH
            <br />
            <span className="text-destructive">BATCH COACHING</span>
          </h2>
        </motion.div>

        {/* ── Animated line divider ── */}
        <motion.div
          className="h-px bg-destructive/20 mx-auto mb-12 md:mb-16 max-w-[200px]"
          style={{ width: lineWidth }}
        />

        {/* ── Paragraph ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto mb-16 md:mb-20"
        >
          <p className="text-base md:text-lg leading-[1.8] text-center text-muted-foreground">
            {highlightText}
          </p>
        </motion.div>

        {/* ── Problem cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl border border-foreground/[0.06] bg-foreground/[0.02] p-6 md:p-7 hover:border-destructive/30 hover:bg-destructive/[0.04] transition-all duration-500"
            >
              <div className="w-10 h-10 rounded-xl bg-destructive/[0.08] flex items-center justify-center mb-5">
                <p.icon className="w-5 h-5 text-destructive/70" strokeWidth={1.5} />
              </div>
              <div className="font-display font-bold text-destructive text-3xl md:text-4xl leading-none mb-1 tracking-tight">
                {p.stat}
              </div>
              <div className="text-muted-foreground text-[10px] uppercase tracking-[0.15em] mb-4">
                {p.label}
              </div>
              <h3 className="font-display font-semibold text-foreground text-sm mb-2">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-[13px] leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent" />
    </section>
  );
};