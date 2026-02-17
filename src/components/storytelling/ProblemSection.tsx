import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { AlertTriangle, Users, UserX, TrendingDown } from 'lucide-react';

export const ProblemSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const problems = [
    {
      icon: Users,
      value: '100+',
      label: 'Students crammed per batch',
      desc: 'One teacher, hundred students — who gets heard?',
    },
    {
      icon: UserX,
      value: 'ZERO',
      label: 'Personal attention',
      desc: 'Your doubts drown in the crowd',
    },
    {
      icon: TrendingDown,
      value: '60%',
      label: 'Students feel lost',
      desc: 'Falling behind with no way to catch up',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: '120vh' }}
    >
      {/* Dramatic red-tinted background */}
      <div className="absolute inset-0 bg-gradient-to-b from-destructive/15 via-background to-background" />
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--destructive)) 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />

      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity, scale, y }}
          className="relative max-w-6xl mx-auto px-6 w-full"
        >
          {/* Warning icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-destructive/20 border-2 border-destructive/40 flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 md:w-10 md:h-10 text-destructive" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-foreground mb-4 text-center"
            style={{
              fontSize: 'clamp(2rem, 6vw, 4.5rem)',
              fontWeight: 700,
              letterSpacing: '0.02em',
              lineHeight: 1.1,
            }}
          >
            THE PROBLEM WITH
            <br />
            <span className="text-destructive" style={{
              textShadow: '0 0 40px hsl(var(--destructive) / 0.4), 0 0 80px hsl(var(--destructive) / 0.2)',
            }}>
              BATCH COACHING
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-center text-base md:text-lg max-w-2xl mx-auto mb-12"
          >
            Traditional coaching treats every student the same. But every student is different.
          </motion.p>

          {/* Problem cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {problems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="relative group"
                >
                  <div className="relative rounded-2xl border border-destructive/20 bg-destructive/5 backdrop-blur-sm p-6 md:p-8 text-center transition-all duration-500 hover:border-destructive/40 hover:bg-destructive/10 hover:shadow-[0_0_40px_-10px_hsl(var(--destructive)/0.3)]">
                    {/* Top accent line */}
                    <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-destructive/50 to-transparent" />
                    
                    <div className="w-12 h-12 rounded-xl bg-destructive/15 border border-destructive/25 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-destructive" />
                    </div>

                    <div className="text-3xl md:text-5xl font-display font-bold text-destructive mb-2" style={{
                      textShadow: '0 0 20px hsl(var(--destructive) / 0.3)',
                    }}>
                      {item.value}
                    </div>
                    <div className="text-foreground font-semibold text-sm uppercase tracking-wider mb-2">
                      {item.label}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom pulsing line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 md:mt-10 h-px bg-gradient-to-r from-transparent via-destructive/40 to-transparent"
          />
        </motion.div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};
