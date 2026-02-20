import { motion } from 'framer-motion';
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
  return (
    <section className="relative bg-background py-16 md:py-24">
      {/* Dramatic red-tinted background */}
      <div className="absolute inset-0 bg-gradient-to-b from-destructive/15 via-background to-background" />
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--destructive)) 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />

      <div className="relative max-w-5xl mx-auto px-6 w-full">
        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="text-destructive/80 text-xs uppercase tracking-[0.25em] font-semibold mb-3">
            The Uncomfortable Truth
          </p>
          <h2
            className="font-display text-foreground font-black leading-[1.1]"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3.8rem)' }}
          >
            THE PROBLEM WITH
            <br />
            <span className="text-destructive">BATCH COACHING</span>
          </h2>
        </motion.div>

        {/* ── Paragraph (simple fade-in) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <p className="text-lg md:text-xl leading-relaxed text-center font-body text-foreground/80">
            {highlightText}
          </p>
        </motion.div>

        {/* ── Problem cards ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="group relative rounded-xl border border-destructive/20 bg-destructive/[0.04] p-4 md:p-5 hover:border-destructive/40 hover:bg-destructive/[0.08] transition-all duration-300"
            >
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-destructive/10 flex items-center justify-center mb-3">
                <p.icon className="w-5 h-5 text-destructive" />
              </div>
              <div className="font-display font-black text-destructive text-2xl md:text-3xl leading-none mb-0.5">
                {p.stat}
              </div>
              <div className="text-muted-foreground text-[10px] md:text-xs uppercase tracking-wider mb-3">
                {p.label}
              </div>
              <h3 className="font-display font-bold text-foreground text-sm md:text-base mb-1">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                {p.desc}
              </p>
              <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-destructive/20 group-hover:bg-destructive/50 transition-colors rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};