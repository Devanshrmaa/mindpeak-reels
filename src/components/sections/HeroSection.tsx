import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
const heroBg = '/images/hero-bg.jpg';

const charVariants = {
  hidden: { y: '110%', opacity: 0 },
  visible: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { delay: 0.6 + i * 0.025, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  }),
};

const SplitText = ({ text, className, startIndex = 0, isGold = false }: { text: string; className?: string; startIndex?: number; isGold?: boolean }) => (
  <span className={`inline-flex flex-wrap justify-center overflow-hidden ${className || ''}`}>
    {text.split('').map((char, i) => (
      <motion.span
        key={i}
        custom={startIndex + i}
        variants={charVariants}
        initial="hidden"
        animate="visible"
        className={`inline-block ${char === ' ' ? 'w-[0.3em]' : ''} ${isGold ? 'text-gradient-gold' : ''}`}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ))}
  </span>
);

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, { stiffness: 100, damping: 30, mass: 0.5 });
  const opacity = useTransform(smoothY, [0, 500], [1, 0]);
  const contentY = useTransform(smoothY, [0, 500], [0, 150]);
  const bgScale = useTransform(smoothY, [0, 600], [1, 1.2]);
  const bgY = useTransform(smoothY, [0, 600], [0, 80]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const bgMoveX = useTransform(smoothMouseX, [-0.5, 0.5], [10, -10]);
  const bgMoveY = useTransform(smoothMouseY, [-0.5, 0.5], [5, -5]);

  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth) - 0.5);
      mouseY.set((e.clientY / window.innerHeight) - 0.5);
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const unsub = scrollY.on('change', v => { if (v > 60) setShowScrollHint(false); });
    return unsub;
  }, [scrollY]);

  const lines = [
    { text: 'INSTITUTE THAT', gold: false },
    { text: 'TRANSFORMS', gold: false },
    { text: 'ASPIRANTS INTO', gold: false },
    { text: 'ACHIEVERS', gold: true },
  ];

  let charOffset = 0;

  return (
    <header
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      role="banner"
    >
      {/* Parallax background with mouse-follow */}
      <motion.div style={{ scale: bgScale, y: bgY, x: bgMoveX }} className="absolute inset-[-20px]">
        <motion.img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          style={{ y: bgMoveY }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
        <div className="absolute inset-0 vignette" />
      </motion.div>

      {/* Noise grain overlay */}
      <div className="absolute inset-0 noise pointer-events-none z-[1]" />

      {/* Radial glow behind content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[2]">
        <div className="w-[min(800px,90vw)] h-[min(600px,70vh)] rounded-full bg-primary/[0.04] blur-[120px]" />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity, y: contentY }}
        className="relative z-10 w-full max-w-[92vw] lg:max-w-[1200px] mx-auto text-center px-4"
      >
        {/* Pre-headline label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 flex items-center justify-center gap-3"
        >
          <span className="h-px w-8 bg-primary/40" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium">
            Personalized JEE & NEET Coaching
          </span>
          <span className="h-px w-8 bg-primary/40" />
        </motion.div>

        {/* Split-text headline */}
        <h1 className="font-display mb-12">
          {lines.map((line, i) => {
            const startIdx = charOffset;
            charOffset += line.text.length;
            return (
              <span
                key={i}
                className="block leading-[1.0] tracking-[-0.03em] font-bold"
                style={{ fontSize: line.gold ? 'clamp(2.5rem, 10vw, 8rem)' : 'clamp(1.8rem, 7vw, 5.5rem)' }}
              >
                <SplitText text={line.text} startIndex={startIdx} isGold={line.gold} />
              </span>
            );
          })}
        </h1>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="#success-stories"
            className="group relative inline-flex items-center gap-3 px-10 py-4 border border-foreground/20 text-foreground text-[13px] uppercase tracking-[0.2em] btn-outline-fill rounded-full"
          >
            <span className="relative z-10">Explore Our Impact</span>
            <span className="relative z-10 w-5 h-5 rounded-full border border-current grid place-items-center transition-transform duration-500 group-hover:rotate-45">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <AnimatePresence>
        {showScrollHint && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/60">Scroll</span>
            <motion.div
              className="w-[1px] h-8 bg-gradient-to-b from-foreground/30 to-transparent origin-top"
              animate={{ scaleY: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom fade for seamless transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[3]" />
    </header>
  );
};
