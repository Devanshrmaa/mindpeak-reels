import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import logo from '@/assets/logo.jpeg';
import mentoringIcon from '@/assets/icons/mentoring-icon.png';
import analyticsDashboard from '@/assets/icons/analytics-dashboard.png';
import targetPrecision from '@/assets/icons/target-precision.png';

export const DiscoverySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const lightOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 0.8]);
  const logoScale = useTransform(scrollYProgress, [0.05, 0.25], [0.5, 1]);
  const logoOpacity = useTransform(scrollYProgress, [0.05, 0.25], [0, 1]);

  const pillars = [
    { image: mentoringIcon, title: 'Dedicated Mentor', description: 'Your personal guide through JEE/NEET' },
    { image: analyticsDashboard, title: 'Adaptive Curriculum', description: 'Adjusts to your learning pace' },
    { image: targetPrecision, title: 'Individual Attention', description: 'No question goes unanswered' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-background"
      style={{ height: '110vh' }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity: lightOpacity }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.2)_0%,transparent_70%)]"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div style={{ scale: logoScale, opacity: logoOpacity }} className="mb-12 flex justify-center">
            <div className="relative group">
              {/* Outer animated ring */}
              <div className="absolute -inset-3 rounded-full border-2 border-primary/30 animate-[spin_12s_linear_infinite]" />
              <div className="absolute -inset-5 rounded-full border border-primary/15 animate-[spin_20s_linear_infinite_reverse]" />
              {/* Glow effect */}
              <div className="absolute -inset-2 rounded-full bg-primary/10 blur-xl group-hover:bg-primary/20 transition-all duration-500" />
              {/* Logo */}
              <img
                src={logo}
                alt="MindPeak Institute"
                className="relative w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-primary/40 shadow-[0_0_40px_hsl(var(--primary)/0.3)] group-hover:shadow-[0_0_60px_hsl(var(--primary)/0.5)] transition-shadow duration-500"
              />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
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
            transition={{ delay: 0.3 }}
            className="text-blue-soft text-lg md:text-xl mb-12"
          >
            Where every student gets a dedicated mentor, adaptive curriculum, and individualized attention
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: i * 0.2 }}
                className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 rounded-xl overflow-hidden">
                  <img src={pillar.image} alt={pillar.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-foreground font-semibold text-lg md:text-xl mb-2">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
