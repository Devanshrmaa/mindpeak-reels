import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useRef, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, ReferenceLine } from 'recharts';

const milestones = [
  { month: 'Month 1', title: 'Diagnostic Assessment', description: 'Identified weak areas: Organic Chemistry, Calculus', score: 120, icon: '📊' },
  { month: 'Month 2', title: 'Personalized Strategy', description: 'Custom study plan created, 1-on-1 sessions begin', score: 145, icon: '📋' },
  { month: 'Month 3', title: 'Conceptual Clarity', description: 'Fundamentals strengthened, confidence building', score: 180, icon: '💡' },
  { month: 'Month 4', title: 'Rapid Improvement', description: 'Mock test scores climbing consistently', score: 215, icon: '📈' },
  { month: 'Month 5', title: 'Advanced Problem Solving', description: 'Tackling JEE Advanced level questions', score: 250, icon: '🎯' },
  { month: 'Month 6', title: 'Peak Performance', description: 'Consistently scoring 280+/300 in mocks', score: 285, icon: '🏆' },
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
      style={{ minHeight: '500vh' }}
    >
      <div className="sticky top-0 h-screen flex items-center pt-20">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="font-display text-foreground text-4xl md:text-6xl lg:text-7xl mb-4">
              THE JOURNEY
            </h2>
            <p className="text-muted-foreground text-lg">
              Watch how Aarav transformed from struggle to success
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border">
                <motion.div
                  className="absolute top-0 left-0 w-full bg-gradient-to-b from-destructive via-primary to-accent"
                  style={{ height: `${progress * 100}%` }}
                />
              </div>

              <div className="space-y-6 ml-12">
                {milestones.map((m, i) => {
                  const isActive = i <= activeIndex;
                  return (
                    <motion.div
                      key={i}
                      animate={{ opacity: isActive ? 1 : 0.25, x: isActive ? 0 : -15 }}
                      transition={{ duration: 0.4 }}
                      className="relative"
                    >
                      <motion.div
                        className="absolute -left-[2.75rem] top-1 w-5 h-5 rounded-full border-2 border-background"
                        animate={{ scale: isActive ? 1.2 : 1 }}
                        style={{ backgroundColor: isActive ? 'hsl(var(--primary))' : 'hsl(var(--muted))' }}
                      />

                      <div className={`p-4 rounded-xl border transition-colors ${isActive ? 'border-primary/40 bg-card shadow-card' : 'border-border bg-card/30'}`}>
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="text-xs text-muted-foreground font-semibold mb-1">{m.month}</div>
                            <h3 className="text-foreground font-display text-lg">{m.title}</h3>
                          </div>
                          <span className="text-2xl">{m.icon}</span>
                        </div>
                        <p className="text-muted-foreground text-sm mb-3">{m.description}</p>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-foreground text-sm">
                          <span className="text-muted-foreground text-xs">Score:</span>
                          <span className="font-bold">{m.score}</span>
                          <span className="text-muted-foreground text-xs">/300</span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Chart */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-card border border-border shadow-card"
            >
              <h3 className="text-foreground font-display text-xl mb-6 text-center">Mock Test Progress</h3>
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={chartData.slice(0, visibleChartPoints)}>
                  <defs>
                    <linearGradient id="scoreGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(43, 72%, 52%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(43, 72%, 52%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" stroke="hsl(215, 20%, 65%)" fontSize={12} />
                  <YAxis domain={[0, 300]} stroke="hsl(215, 20%, 65%)" fontSize={12} />
                  <ReferenceLine y={280} stroke="hsl(0, 84%, 60%)" strokeDasharray="5 5" label={{ value: 'Target', fill: 'hsl(0, 84%, 60%)', fontSize: 11 }} />
                  <Area type="monotone" dataKey="score" stroke="hsl(43, 72%, 52%)" strokeWidth={3} fill="url(#scoreGrad)" animationDuration={800} />
                </AreaChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-6 mt-4">
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
      </div>
    </section>
  );
};
