import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

export const HeroSection = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, 120]);
  const scale = useTransform(scrollY, [0, 400], [1, 1.15]);

  const headlineWords = [
    { text: 'INSTITUTE', gradient: false },
    { text: 'THAT', gradient: false },
    { text: 'TRANSFORMS', gradient: false },
    { text: 'ASPIRANTS INTO', gradient: false },
    { text: 'ACHIEVERS', gradient: true },
  ];

  return (
    <header id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" role="banner">
      {/* Background Image */}
      <motion.div style={{ scale }} className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={heroBg}
          className="w-full h-full object-cover"
        >
          <source src="/hero-loop.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 vignette" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 w-full max-w-[90vw] lg:max-w-[1400px] mx-auto text-center px-6"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-display mb-8"
        >
          {headlineWords.map((line, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.12, duration: 0.6 }}
              className={`block mb-1 font-black leading-[1.05] tracking-tight ${
                line.gradient ? 'text-gradient-gold' : 'text-foreground'
              }`}
              style={{ fontSize: 'clamp(2rem, 9vw, 7rem)' }}
            >
              {line.text}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="text-blue-soft text-sm sm:text-base uppercase mb-12 tracking-[0.2em]"
        >
          Personalized JEE & NEET Coaching
        </motion.p>

        <motion.a
          href="#success-stories"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-12 py-4 border-2 border-foreground text-foreground text-sm uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-all duration-300"
        >
          Watch Our Stories
        </motion.a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </header>
  );
};
