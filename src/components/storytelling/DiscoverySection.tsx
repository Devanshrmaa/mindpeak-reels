import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import logo from '@/assets/logo.jpeg';
import mentoringIcon from '@/assets/icons/mentoring-icon.png';
import analyticsDashboard from '@/assets/icons/analytics-dashboard.png';
import targetPrecision from '@/assets/icons/target-precision.png';

const pillars = [
  { image: mentoringIcon, title: 'Dedicated Mentor', description: 'Your personal guide through JEE/NEET' },
  { image: analyticsDashboard, title: 'Adaptive Curriculum', description: 'Adjusts to your learning pace' },
  { image: targetPrecision, title: 'Individual Attention', description: 'No question goes unanswered' },
];

export const DiscoverySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  /* offset: progress 0 = section top hits viewport bottom, 1 = section bottom hits viewport top
     This gives a natural range where the logo animates as the section scrolls into view */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  /* Logo appears as section enters viewport (progress ~0.3–0.5 = section centered) */
  const glowOpacity = useTransform(scrollYProgress, [0.25, 0.45], [0, 1]);
  const logoScale   = useTransform(scrollYProgress, [0.20, 0.45], [0.5, 1]);
  const logoOpacity = useTransform(scrollYProgress, [0.20, 0.42], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-background"
      style={{ height: isMobile ? '115vh' : '120vh' }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">
        {/* radial glow (scroll-driven) */}
        <motion.div
          style={{ opacity: glowOpacity }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.2)_0%,transparent_70%)]"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          {/* ── Logo (scroll-driven on desktop, static on mobile) ── */}
          {isMobile ? (
            <div className="mb-8 flex justify-center animate-fade-in">
              <LogoRings />
            </div>
          ) : (
            <motion.div style={{ scale: logoScale, opacity: logoOpacity }} className="mb-12 flex justify-center">
              <LogoRings />
            </motion.div>
          )}

          {/* ── Heading (simple whileInView) ── */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="font-display text-foreground mb-8"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 700 }}
          >
            THEN YOU DISCOVER
            <br />
            <span className="text-gradient-gold">PERSONALIZED LEARNING</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-blue-soft text-lg md:text-xl mb-12"
          >
            Where every student gets a dedicated mentor, adaptive curriculum, and individualized attention
          </motion.p>

          {/* ── Pillars (simple whileInView stagger) ── */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative p-5 md:p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border corner-glow overflow-hidden"
              >
                {/* Top accent */}
                <div className="absolute top-0 left-3 right-3 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-xl overflow-hidden ring-1 ring-primary/20">
                  <img src={pillar.image} alt={pillar.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-foreground font-semibold text-base md:text-xl mb-1 md:mb-2">{pillar.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* Reusable logo with spinning rings */
function LogoRings() {
  return (
    <div className="relative group flex items-center justify-center" style={{ width: 'clamp(120px, 30vw, 240px)', height: 'clamp(120px, 30vw, 240px)' }}>
      {/* Spinning rings — sized relative to the wrapper */}
      <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-[spin_12s_linear_infinite]" />
      <div className="absolute -inset-2 md:-inset-3 rounded-full border border-primary/15 animate-[spin_20s_linear_infinite_reverse]" />
      <div className="absolute inset-2 rounded-full bg-primary/10 blur-xl group-hover:bg-primary/20 transition-all duration-500" />
      {/* Logo image — inset so rings frame it */}
      <img
        src={logo}
        alt="MindPeak Institute"
        className="relative w-[80%] h-[80%] rounded-full object-contain border-4 border-primary/40 shadow-[0_0_40px_hsl(var(--primary)/0.3)] group-hover:shadow-[0_0_60px_hsl(var(--primary)/0.5)] transition-shadow duration-500 bg-background"
      />
    </div>
  );
}
