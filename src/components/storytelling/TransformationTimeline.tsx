import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useRef, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, ReferenceLine } from 'recharts';
import { Sparkles } from 'lucide-react';
import analyticsDashboard from '@/assets/icons/analytics-dashboard.png';
import strategyPlan from '@/assets/icons/strategy-plan.png';
import clarityLightbulb from '@/assets/icons/clarity-lightbulb.png';
import growthChart from '@/assets/icons/growth-chart.png';
import targetPrecision from '@/assets/icons/target-precision.png';
import trophyAchievement from '@/assets/icons/trophy-achievement.png';

const milestones = [
  { month: 'Month 1', title: 'Diagnostic Assessment', description: 'Identified weak areas: Organic Chemistry, Calculus', score: 120, image: analyticsDashboard },
  { month: 'Month 2', title: 'Personalized Strategy', description: 'Custom study plan created, 1-on-1 sessions begin', score: 145, image: strategyPlan },
  { month: 'Month 3', title: 'Conceptual Clarity', description: 'Fundamentals strengthened, confidence building', score: 180, image: clarityLightbulb },
  { month: 'Month 4', title: 'Rapid Improvement', description: 'Mock test scores climbing consistently', score: 215, image: growthChart },
  { month: 'Month 5', title: 'Advanced Problem Solving', description: 'Tackling JEE Advanced level questions', score: 250, image: targetPrecision },
  { month: 'Month 6', title: 'Peak Performance', description: 'Consistently scoring 280+/300 in mocks', score: 285, image: trophyAchievement },
];

const chartData = [
  { month: 'M1', score: 120, target: 280 },
  { month: 'M2', score: 145, target: 280 },
  { month: 'M3', score: 180, target: 280 },
  { month: 'M4', score: 215, target: 280 },
  { month: 'M5', score: 250, target: 280 },
  { month: 'M6', score: 285, target: 280 },
];

export const TransformationTimeline = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const [progress, setProgress] = useState(0);
  useMotionValueEvent(scrollYProgress, 'change', (v) => setProgress(v));

  // Milestones activate from 5% to 80% scroll progress
  const normalizedProgress = Math.max(0, (progress - 0.05) / 0.75);
  const activeIndex = normalizedProgress <= 0 ? -1 : Math.min(Math.floor(normalizedProgress * milestones.length), milestones.length - 1);
  const visibleChartPoints = Math.max(1, Math.min(Math.ceil(normalizedProgress * chartData.length), chartData.length));

  return (
    <section
      ref={sectionRef}
      className="relative bg-background"
      style={{ minHeight: '103vh' }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />
      </div>

      <div className="sticky top-0 min-h-screen flex items-center overflow-hidden py-16 md:py-0">
        <div className="max-w-6xl mx-auto px-3 md:px-6 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">Transformation</span>
            </div>
            <h2 className="font-display text-foreground text-3xl md:text-5xl lg:text-6xl mb-2 font-bold">
              THE <span className="text-gradient-gold">JOURNEY</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto">
              Watch how Aarav transformed from struggle to success
            </p>
          </motion.div>

          {/* Progress bar */}
          <div className="max-w-md mx-auto mb-5">
            <div className="h-1 rounded-full bg-border overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                style={{ width: `${Math.max(0, Math.min(normalizedProgress * 100, 100))}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="flex justify-between mt-1.5">
              <span className="text-[10px] text-muted-foreground">Start</span>
              <span className="text-[10px] text-primary font-semibold">
                {activeIndex >= 0 ? milestones[Math.max(0, activeIndex)].month : 'Month 1'}
              </span>
              <span className="text-[10px] text-muted-foreground">Month 6</span>
            </div>
          </div>

          {/* Milestones grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 w-full">
            {milestones.map((m, i) => {
              const isActive = i <= activeIndex;
              const isCurrent = i === activeIndex;
              return (
                <motion.div
                  key={i}
                  animate={{
                    opacity: isActive ? 1 : 0.25,
                    scale: isCurrent ? 1.02 : 1,
                    y: isActive ? 0 : 8,
                  }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="relative"
                >
                  <div className={`relative p-2.5 md:p-4 rounded-xl border transition-all duration-500 ${
                    isCurrent
                      ? 'border-primary/50 bg-card shadow-[0_0_30px_-8px_hsl(var(--primary)/0.25)]'
                      : isActive
                        ? 'border-primary/25 bg-card shadow-card'
                        : 'border-border bg-card/20'
                  }`}>
                    {/* Active indicator dot */}
                    {isCurrent && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary animate-pulse-glow" />
                    )}

                    {/* Top accent */}
                    <div className={`absolute top-0 left-3 right-3 h-px transition-opacity duration-500 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`} style={{
                      background: 'linear-gradient(90deg, transparent, hsl(var(--primary) / 0.5), transparent)',
                    }} />

                    <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                      <div className={`w-7 h-7 md:w-10 md:h-10 shrink-0 rounded-lg overflow-hidden ring-1 transition-all duration-500 ${
                        isActive ? 'ring-primary/30' : 'ring-border'
                      }`}>
                        <img src={m.image} alt={m.title} className="w-full h-full object-cover" width={40} height={40} loading="lazy" />
                      </div>
                      <div className="min-w-0">
                        <div className={`text-[9px] md:text-[10px] font-semibold transition-colors duration-300 ${
                          isActive ? 'text-primary' : 'text-muted-foreground'
                        }`}>{m.month}</div>
                        <h3 className="text-foreground font-display text-[11px] md:text-sm leading-tight font-semibold truncate">{m.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-[9px] md:text-[11px] mb-1.5 md:mb-2 line-clamp-2 leading-relaxed">{m.description}</p>

                    {/* Score badge */}
                    <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] md:text-[11px] transition-all duration-500 ${
                      isActive
                        ? 'bg-primary/15 border border-primary/25 text-foreground'
                        : 'bg-secondary text-foreground'
                    }`}>
                      <span className="text-muted-foreground text-[9px]">Score:</span>
                      <span className={`font-bold ${isActive ? 'text-primary' : ''}`}>{m.score}</span>
                      <span className="text-muted-foreground text-[9px]">/300</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 p-4 rounded-2xl bg-card border border-border shadow-card max-w-2xl mx-auto relative overflow-hidden"
          >
            {/* Subtle glow behind chart */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

            <h3 className="text-foreground font-display text-base md:text-lg mb-3 text-center relative z-10">Mock Test Progress</h3>
            <div className="relative z-10">
              <ResponsiveContainer width="100%" height={180}>
                <AreaChart data={chartData.slice(0, visibleChartPoints)}>
                  <defs>
                    <linearGradient id="scoreGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(43, 72%, 52%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(43, 72%, 52%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" stroke="hsl(215, 20%, 65%)" fontSize={11} />
                  <YAxis domain={[0, 300]} stroke="hsl(215, 20%, 65%)" fontSize={11} />
                  <ReferenceLine y={280} stroke="hsl(0, 84%, 60%)" strokeDasharray="5 5" label={{ value: 'Target', fill: 'hsl(0, 84%, 60%)', fontSize: 10 }} />
                  <Area type="monotone" dataKey="score" stroke="hsl(43, 72%, 52%)" strokeWidth={3} fill="url(#scoreGrad)" animationDuration={800} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-2 relative z-10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-muted-foreground text-xs">Actual Score</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-0.5 bg-destructive" />
                <span className="text-muted-foreground text-xs">Target (280)</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
