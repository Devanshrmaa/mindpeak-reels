import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const ProblemSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const chaosOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-destructive/20 to-background"
      style={{ height: '110vh' }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity, scale, y }}
          className="relative max-w-7xl mx-auto px-6 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-foreground mb-12"
            style={{
              fontSize: 'clamp(2rem, 6vw, 5rem)',
              fontWeight: 700,
              letterSpacing: '0.02em',
            }}
          >
            THE PROBLEM WITH
            <br />
            <span className="text-destructive">BATCH COACHING</span>
          </motion.h2>

          <motion.div
            style={{ opacity: chaosOpacity }}
            className="relative w-full h-72 md:h-96"
          >
            {Array.from({ length: 40 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: (Math.random() - 0.5) * 600,
                  y: (Math.random() - 0.5) * 300,
                  rotate: Math.random() * 360,
                  opacity: 0,
                }}
                animate={{
                  x: (Math.random() - 0.5) * 600,
                  y: (Math.random() - 0.5) * 300,
                  rotate: Math.random() * 360,
                  opacity: 0.5,
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.03,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                className="absolute w-6 h-6 md:w-8 md:h-8 rounded-sm bg-foreground/15 backdrop-blur-sm"
                style={{ left: '50%', top: '50%' }}
              />
            ))}

            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [-2, 2, -2] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-destructive to-destructive/60 flex items-center justify-center shadow-lg">
                <span className="text-3xl md:text-4xl">😰</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="grid grid-cols-3 gap-4 md:gap-8 mt-12 md:mt-16"
          >
            {[
              { value: '100+', label: 'Students per batch' },
              { value: '0', label: 'Personal attention' },
              { value: '60%', label: 'Feel lost' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="text-center"
              >
                <div className="text-3xl md:text-5xl font-bold mb-2 text-destructive">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-xs md:text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
