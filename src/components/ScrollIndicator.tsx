import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const [scrollDir, setScrollDir] = useState<'down' | 'up'>('down');

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - lastY) > 5) {
        setScrollDir(y > lastY ? 'down' : 'up');
        lastY = y;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const trackHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="fixed right-3 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-0 pointer-events-none">
      {/* DNA helix track */}
      <div className="relative w-[2px] h-48 bg-primary/10 rounded-full overflow-hidden">
        {/* Progress fill */}
        <motion.div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary/40 to-primary/20 rounded-full"
          style={{ height: trackHeight }}
        />

        {/* Floating dots along track — DNA motif */}
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const yPos = `${(i / 5) * 100}%`;
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary/25"
              style={{
                top: yPos,
                left: isLeft ? -3 : 3,
              }}
            />
          );
        })}
      </div>

      {/* Star indicator */}
      <motion.div
        animate={{ rotate: scrollDir === 'down' ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="mt-3"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          className="opacity-30"
        >
          {/* 4-point star */}
          <path
            d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
            fill="hsl(var(--primary))"
          />
          {/* Directional arrow tip */}
          <path
            d="M12 2L9 7H15L12 2Z"
            fill="hsl(var(--primary))"
            opacity="0.6"
          />
        </svg>
      </motion.div>
    </div>
  );
};
