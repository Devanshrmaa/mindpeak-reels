import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, ReferenceLine } from 'recharts';
const analyticsDashboard = '/images/icons/analytics-dashboard.png';
const strategyPlan = '/images/icons/strategy-plan.png';
const clarityLightbulb = '/images/icons/clarity-lightbulb.png';
const growthChart = '/images/icons/growth-chart.png';
const targetPrecision = '/images/icons/target-precision.png';
const trophyAchievement = '/images/icons/trophy-achievement.png';

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
  return (
    <section className="relative bg-background py-24 md:py-36 overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-primary/[0.03] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-accent/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-3 md:px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14 md:mb-18"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-primary/30" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-primary/60 font-medium">Transformation</span>
            <span className="h-px w-8 bg-primary/30" />
          </div>
          <h2 className="font-display text-foreground font-bold tracking-[-0.02em]" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
            THE <span className="text-gradient-gold">JOURNEY</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto mt-3">
            Watch how Aarav transformed from struggle to success
          </p>
        </motion.div>

        {/* Milestones grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 w-full">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="relative p-3 md:p-5 rounded-xl border border-foreground/[0.06] bg-foreground/[0.02] transition-all duration-500 hover:border-primary/20 hover:bg-foreground/[0.04]">
                <div className="flex items-center gap-2 md:gap-2.5 mb-2 md:mb-3">
                  <div className="w-8 h-8 md:w-9 md:h-9 shrink-0 rounded-lg overflow-hidden ring-1 ring-primary/15">
                    <img src={m.image} alt={m.title} className="w-full h-full object-cover" width={40} height={40} loading="lazy" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[9px] md:text-[10px] font-medium text-primary/70 tracking-[0.1em] uppercase">{m.month}</div>
                    <h3 className="text-foreground font-display text-[11px] md:text-sm leading-tight font-semibold truncate">{m.title}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground/60 text-[9px] md:text-[11px] mb-2 line-clamp-2 leading-relaxed">{m.description}</p>

                {/* Score badge */}
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] bg-primary/[0.06] border border-primary/10 text-foreground">
                  <span className="text-muted-foreground/50 text-[9px]">Score:</span>
                  <span className="font-semibold text-primary">{m.score}</span>
                  <span className="text-muted-foreground/50 text-[9px]">/300</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 md:mt-12 p-5 rounded-2xl border border-foreground/[0.06] bg-foreground/[0.02] max-w-2xl mx-auto relative overflow-hidden"
        >
          <h3 className="text-foreground font-display text-sm md:text-base mb-4 text-center font-medium tracking-[0.05em]">Mock Test Progress</h3>
          <div className="relative z-10">
            <ResponsiveContainer width="100%" height={180}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="scoreGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(43, 72%, 52%)" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="hsl(43, 72%, 52%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="hsl(215, 20%, 35%)" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis domain={[0, 300]} stroke="hsl(215, 20%, 35%)" fontSize={11} tickLine={false} axisLine={false} />
                <ReferenceLine y={280} stroke="hsl(0, 84%, 60%)" strokeDasharray="5 5" strokeOpacity={0.4} label={{ value: 'Target', fill: 'hsl(0, 84%, 50%)', fontSize: 10, opacity: 0.5 }} />
                <Area type="monotone" dataKey="score" stroke="hsl(43, 72%, 52%)" strokeWidth={2} fill="url(#scoreGrad)" animationDuration={1200} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 mt-3 relative z-10">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-primary" />
              <span className="text-muted-foreground/60 text-[11px]">Actual Score</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-px bg-destructive/50" />
              <span className="text-muted-foreground/60 text-[11px]">Target (280)</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent" />
    </section>
  );
};
