import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useRef, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, ReferenceLine } from 'recharts';
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

  const activeIndex = Math.min(Math.floor(progress * milestones.length), milestones.length - 1);
  const visibleChartPoints = Math.max(1, Math.min(Math.ceil(progress * chartData.length), chartData.length));

  return (
    <section
      ref={sectionRef}
      className="relative bg-background"
      style={{ minHeight: '120vh' }}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-6 w-full py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <h2 className="font-display text-foreground text-3xl md:text-5xl lg:text-6xl mb-2">
              THE JOURNEY
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Watch how Aarav transformed from struggle to success
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-4 items-start">
            {/* Timeline - left column */}
            <div className="relative">
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-border">
                <motion.div
                  className="absolute top-0 left-0 w-full bg-gradient-to-b from-destructive via-primary to-accent"
                  style={{ height: `${progress * 100}%` }}
                />
              </div>

              <div className="space-y-3 ml-10">
                {milestones.map((m, i) => {
                  const isActive = i <= activeIndex;
                  return (
                    <motion.div
                      key={i}
                      animate={{ opacity: isActive ? 1 : 0.25, x: isActive ? 0 : -10 }}
                      transition={{ duration: 0.4 }}
                      className="relative"
                    >
                      <motion.div
                        className="absolute -left-[2.25rem] top-1 w-4 h-4 rounded-full border-2 border-background"
                        animate={{ scale: isActive ? 1.2 : 1 }}
                        style={{ backgroundColor: isActive ? 'hsl(var(--primary))' : 'hsl(var(--muted))' }}
                      />
                      <div className={`p-2.5 rounded-lg border transition-colors ${isActive ? 'border-primary/40 bg-card shadow-card' : 'border-border bg-card/30'}`}>
                        <div className="flex items-center justify-between gap-2">
                          <div className="min-w-0">
                            <div className="text-[10px] text-muted-foreground font-semibold">{m.month}</div>
                            <h3 className="text-foreground font-display text-sm">{m.title}</h3>
                          </div>
                          <div className="w-8 h-8 shrink-0 rounded-md overflow-hidden">
                            <img src={m.image} alt={m.title} className="w-full h-full object-cover" />
                          </div>
                        </div>
                        <p className="text-muted-foreground text-[11px] mt-1">{m.description}</p>
                        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary text-foreground text-[11px] mt-1.5">
                          <span className="text-muted-foreground text-[9px]">Score:</span>
                          <span className="font-bold">{m.score}</span>
                          <span className="text-muted-foreground text-[9px]">/300</span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right column - empty on desktop */}
            <div className="hidden lg:block" />
          </div>

          {/* Chart - below timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 p-4 rounded-2xl bg-card border border-border shadow-card max-w-2xl mx-auto"
          >
            <h3 className="text-foreground font-display text-base md:text-lg mb-3 text-center">Mock Test Progress</h3>
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
            <div className="flex justify-center gap-6 mt-2">
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
