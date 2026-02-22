import { motion } from 'framer-motion';
import { useDemoModal } from '@/components/DemoBookingModal';
const growthChart = '/images/icons/growth-chart.png';
const targetPrecision = '/images/icons/target-precision.png';
const mentoringIcon = '/images/icons/mentoring-icon.png';
const strategyPlan = '/images/icons/strategy-plan.png';

const stats = [
  { value: '165', label: 'Points Gained', image: growthChart },
  { value: '6', label: 'Months', image: strategyPlan },
  { value: '95%', label: 'Improvement', image: targetPrecision },
  { value: '1:1', label: 'Mentorship', image: mentoringIcon },
];

export const ResultSection = () => {
  const { openDemoModal } = useDemoModal();
  return (
    <section className="relative py-28 md:py-40 bg-background flex items-center justify-center overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[180px] pointer-events-none" />

      {/* Floating particles — fewer, subtler */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: '110vh', x: `${10 + (i / 6) * 80}%`, rotate: 0 }}
            animate={{ y: '-10vh', rotate: 360 }}
            transition={{
              duration: 8 + Math.random() * 4,
              delay: Math.random() * 4,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute w-1 h-1 rounded-full bg-primary/20"
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Large number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground/50 mb-4">JEE Advanced Result</p>
          <h2
            className="font-display text-foreground font-bold tracking-[-0.04em]"
            style={{ fontSize: 'clamp(4rem, 12vw, 10rem)', lineHeight: 0.9 }}
          >
            AIR <span className="text-gradient-gold">42</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-muted-foreground text-base md:text-lg mt-6 mb-16 max-w-lg mx-auto leading-relaxed"
        >
          From struggling at 120/300 to achieving AIR 42 in just 6 months with personalized 1-on-1 coaching
        </motion.p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group p-5 md:p-6 rounded-2xl border border-foreground/[0.06] bg-foreground/[0.02] hover:border-primary/20 transition-all duration-500"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 rounded-lg overflow-hidden opacity-60 group-hover:opacity-100 transition-opacity">
                <img src={stat.image} alt={stat.label} className="w-full h-full object-cover" width={56} height={56} loading="lazy" />
              </div>
              <div className="text-2xl md:text-3xl font-display font-bold text-primary mb-1 tracking-tight">{stat.value}</div>
              <div className="text-[10px] md:text-[11px] text-muted-foreground/60 uppercase tracking-[0.15em]">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <button
            onClick={openDemoModal}
            className="group relative inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground text-[13px] uppercase tracking-[0.15em] font-medium rounded-full hover:shadow-[0_0_40px_-8px_hsl(var(--primary)/0.5)] transition-all duration-500"
          >
            Start Your Transformation
            <span className="w-5 h-5 rounded-full border border-current grid place-items-center transition-transform duration-500 group-hover:rotate-45">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </span>
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="text-muted-foreground/40 text-[12px] mt-6 tracking-wide"
        >
          Join 500+ students who achieved their dream ranks
        </motion.p>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent" />
    </section>
  );
};
