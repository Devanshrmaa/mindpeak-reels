import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import logo from '@/assets/logo.jpeg';

export const DiscoverySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const lightOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.8]);
  const logoScale = useTransform(scrollYProgress, [0.2, 0.5], [0.5, 1]);
  const logoOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  const pillars = [
    { icon: '👤', title: 'Dedicated Mentor', description: 'Your personal guide through JEE/NEET' },
    { icon: '📊', title: 'Adaptive Curriculum', description: 'Adjusts to your learning pace' },
    { icon: '🎯', title: 'Individual Attention', description: 'No question goes unanswered' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-background"
      style={{ height: '150vh' }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity: lightOpacity }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.2)_0%,transparent_70%)]"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div style={{ scale: logoScale, opacity: logoOpacity }} className="mb-16">
            <img
              src={logo}
              alt="MindPeak Institute"
              className="mx-auto w-48 md:w-72 rounded-xl shadow-gold-glow"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="font-display text-foreground mb-12"
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
            className="text-blue-soft text-lg md:text-xl mb-20"
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
                <div className="text-4xl md:text-5xl mb-4">{pillar.icon}</div>
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
