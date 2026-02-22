import { motion } from 'framer-motion';
const logo = '/images/logo.jpeg';
const mentoringIcon = '/images/icons/mentoring-icon.png';
const analyticsDashboard = '/images/icons/analytics-dashboard.png';
const targetPrecision = '/images/icons/target-precision.png';

const pillars = [
  { image: mentoringIcon, title: 'Dedicated Mentor', description: 'Your personal guide through JEE/NEET', num: '01' },
  { image: analyticsDashboard, title: 'Adaptive Curriculum', description: 'Adjusts to your learning pace', num: '02' },
  { image: targetPrecision, title: 'Individual Attention', description: 'No question goes unanswered', num: '03' },
];

export const DiscoverySection = () => {
  return (
    <section className="relative bg-background py-24 md:py-36 overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(900px,100vw)] h-[min(600px,80vh)] rounded-full bg-primary/[0.03] blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* ── Logo ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16 flex justify-center"
        >
          <LogoRings />
        </motion.div>

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-primary/30" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground/60 font-medium">
              The Solution
            </span>
            <span className="h-px w-8 bg-primary/30" />
          </div>
          <h2
            className="font-display text-foreground mb-6 tracking-[-0.02em]"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 700 }}
          >
            THEN YOU DISCOVER
            <br />
            <span className="text-gradient-gold">PERSONALIZED LEARNING</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="text-muted-foreground text-base md:text-lg mb-16 md:mb-20 max-w-xl mx-auto leading-relaxed"
        >
          Where every student gets a dedicated mentor, adaptive curriculum, and individualized attention
        </motion.p>

        {/* ── Pillars ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-7 md:p-8 rounded-2xl border border-foreground/[0.06] bg-foreground/[0.02] hover:border-primary/20 hover:bg-foreground/[0.04] transition-all duration-600 overflow-hidden"
            >
              {/* Number */}
              <span className="absolute top-4 right-5 text-[11px] tracking-[0.15em] text-muted-foreground/30 font-medium">{pillar.num}</span>

              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-5 rounded-xl overflow-hidden ring-1 ring-primary/15 transition-all duration-500 group-hover:ring-primary/30 group-hover:shadow-[0_0_30px_-8px_hsl(var(--primary)/0.2)]">
                <img src={pillar.image} alt={pillar.title} className="w-full h-full object-cover" width={84} height={84} loading="lazy" />
              </div>
              <h3 className="text-foreground font-display font-semibold text-lg mb-2">{pillar.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent" />
    </section>
  );
};

/* Reusable logo with spinning rings */
function LogoRings() {
  return (
    <div className="relative group flex items-center justify-center" style={{ width: 'clamp(100px, 25vw, 200px)', height: 'clamp(100px, 25vw, 200px)' }}>
      {/* Spinning rings */}
      <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_20s_linear_infinite]" />
      <div className="absolute -inset-3 md:-inset-4 rounded-full border border-primary/10 animate-[spin_30s_linear_infinite_reverse]" />
      <div className="absolute inset-3 rounded-full bg-primary/[0.06] blur-xl group-hover:bg-primary/[0.12] transition-all duration-700" />
      {/* Logo image */}
      <img
        src={logo}
        alt="MindPeak Institute"
        width={160}
        height={160}
        loading="lazy"
        className="relative w-[75%] h-[75%] rounded-full object-contain border-2 border-primary/30 shadow-[0_0_40px_hsl(var(--primary)/0.2)] group-hover:shadow-[0_0_60px_hsl(var(--primary)/0.35)] transition-shadow duration-700 bg-background"
      />
    </div>
  );
}
