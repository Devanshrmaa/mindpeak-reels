import { useEffect, useState, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const STRAND_COUNT = 3;
const NODES_PER_STRAND = 12;
const HELIX_HEIGHT = 280;
const RADIUS = 8;

interface HelixNode {
  strand: number;
  index: number;
  baseY: number;
  phase: number;
}

export const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });
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

  const nodes = useMemo<HelixNode[]>(() => {
    const result: HelixNode[] = [];
    for (let s = 0; s < STRAND_COUNT; s++) {
      for (let i = 0; i < NODES_PER_STRAND; i++) {
        result.push({
          strand: s,
          index: i,
          baseY: (i / (NODES_PER_STRAND - 1)) * HELIX_HEIGHT,
          phase: (s * ((2 * Math.PI) / STRAND_COUNT)) + (i * 0.55),
        });
      }
    }
    return result;
  }, []);

  const strandColors = [
    'hsl(var(--primary))',
    'hsl(var(--primary) / 0.5)',
    'hsl(var(--primary) / 0.25)',
  ];

  const trackFill = useTransform(smoothProgress, [0, 1], [0, HELIX_HEIGHT]);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center pointer-events-none select-none">
      {/* Ambient glow behind the helix */}
      <div className="absolute inset-0 w-8 bg-primary/[0.03] blur-2xl rounded-full" />

      <div className="relative" style={{ width: 28, height: HELIX_HEIGHT }}>
        {/* Background track */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-[1px] rounded-full bg-primary/10"
          style={{ height: HELIX_HEIGHT }}
        />

        {/* Progress glow track */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-[1px] rounded-full bg-gradient-to-b from-primary/50 via-primary/30 to-transparent"
          style={{ height: trackFill, top: 0 }}
        />

        {/* SVG helix strands */}
        <svg
          width="28"
          height={HELIX_HEIGHT}
          viewBox={`0 0 28 ${HELIX_HEIGHT}`}
          className="absolute inset-0"
          style={{ overflow: 'visible' }}
        >
          {/* Draw connecting rungs between strand pairs */}
          {Array.from({ length: NODES_PER_STRAND }).map((_, i) => {
            const y = (i / (NODES_PER_STRAND - 1)) * HELIX_HEIGHT;
            const phase0 = (0 * ((2 * Math.PI) / STRAND_COUNT)) + (i * 0.55);
            const phase1 = (1 * ((2 * Math.PI) / STRAND_COUNT)) + (i * 0.55);
            const x0 = 14 + Math.sin(phase0) * RADIUS;
            const x1 = 14 + Math.sin(phase1) * RADIUS;
            return (
              <HelixRung
                key={`rung-${i}`}
                x1={x0}
                y1={y}
                x2={x1}
                y2={y}
                index={i}
                progress={smoothProgress}
              />
            );
          })}

          {/* Strand paths */}
          {Array.from({ length: STRAND_COUNT }).map((_, s) => (
            <HelixStrand
              key={`strand-${s}`}
              strandIndex={s}
              color={strandColors[s]}
              progress={smoothProgress}
            />
          ))}
        </svg>

        {/* 3D floating nodes */}
        {nodes.map((node, idx) => (
          <HelixNodeDot
            key={idx}
            node={node}
            color={strandColors[node.strand]}
            progress={smoothProgress}
          />
        ))}

        {/* Scroll position marker */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.6)]"
          style={{
            top: useTransform(smoothProgress, [0, 1], [0, HELIX_HEIGHT - 8]),
          }}
        >
          <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
        </motion.div>
      </div>

      {/* Star direction indicator */}
      <motion.div
        animate={{ rotate: scrollDir === 'down' ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="mt-4"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="opacity-25">
          <path
            d="M12 2L14.09 8.26L20.18 8.26L15.23 12.14L17.18 18.74L12 15.27L6.82 18.74L8.77 12.14L3.82 8.26L9.91 8.26L12 2Z"
            fill="hsl(var(--primary))"
          />
          <path d="M12 0L10 5H14L12 0Z" fill="hsl(var(--primary))" opacity="0.5" />
        </svg>
      </motion.div>

      {/* Scroll percentage */}
      <motion.span
        className="mt-2 text-[9px] font-mono text-primary/30 tracking-widest"
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.02, 0.98, 1], [0, 1, 1, 0]),
        }}
      >
        <ProgressText progress={smoothProgress} />
      </motion.span>
    </div>
  );
};

/* Sub-components */

const HelixStrand = ({
  strandIndex,
  color,
  progress,
}: {
  strandIndex: number;
  color: string;
  progress: ReturnType<typeof useSpring>;
}) => {
  const phaseOffset = strandIndex * ((2 * Math.PI) / STRAND_COUNT);
  const points: string[] = [];

  for (let i = 0; i <= NODES_PER_STRAND * 4; i++) {
    const t = i / (NODES_PER_STRAND * 4);
    const y = t * HELIX_HEIGHT;
    const phase = phaseOffset + t * NODES_PER_STRAND * 0.55;
    const x = 14 + Math.sin(phase) * RADIUS;
    points.push(`${x},${y}`);
  }

  const opacity = strandIndex === 0 ? 0.4 : strandIndex === 1 ? 0.2 : 0.1;

  return (
    <polyline
      points={points.join(' ')}
      fill="none"
      stroke={color}
      strokeWidth={strandIndex === 0 ? 1.2 : 0.8}
      opacity={opacity}
      strokeLinecap="round"
    />
  );
};

const HelixRung = ({
  x1, y1, x2, y2, index, progress,
}: {
  x1: number; y1: number; x2: number; y2: number;
  index: number;
  progress: ReturnType<typeof useSpring>;
}) => (
  <line
    x1={x1} y1={y1} x2={x2} y2={y2}
    stroke="hsl(var(--primary))"
    strokeWidth="0.5"
    opacity={0.08}
    strokeDasharray="2 2"
  />
);

const HelixNodeDot = ({
  node,
  color,
  progress,
}: {
  node: HelixNode;
  color: string;
  progress: ReturnType<typeof useSpring>;
}) => {
  const x = 14 + Math.sin(node.phase) * RADIUS;
  const depth = Math.cos(node.phase);
  const size = 2 + depth * 1;
  const opacity = 0.15 + depth * 0.15;

  return (
    <div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        left: x - size / 2,
        top: node.baseY - size / 2,
        backgroundColor: color,
        opacity,
        transform: `translateZ(${depth * 10}px)`,
        boxShadow: depth > 0.3 ? `0 0 4px ${color}` : 'none',
      }}
    />
  );
};

const ProgressText = ({ progress }: { progress: ReturnType<typeof useSpring> }) => {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const unsubscribe = progress.on('change', (v: number) => {
      setPct(Math.round(v * 100));
    });
    return unsubscribe;
  }, [progress]);

  return <>{pct}%</>;
};
