import { motion } from 'framer-motion';
import { useDemoModal } from '@/components/DemoBookingModal';
import trophyAchievement from '@/assets/icons/trophy-achievement.png';
import growthChart from '@/assets/icons/growth-chart.png';
import targetPrecision from '@/assets/icons/target-precision.png';
import mentoringIcon from '@/assets/icons/mentoring-icon.png';
import strategyPlan from '@/assets/icons/strategy-plan.png';

const stats = [
  { value: '165', label: 'Points Gained', image: growthChart },
  { value: '6', label: 'Months', image: strategyPlan },
  { value: '95%', label: 'Improvement', image: targetPrecision },
  { value: '1:1', label: 'Mentorship', image: mentoringIcon },
];

export const ResultSection = () => {
  const { openDemoModal } = useDemoModal();
  return (
    <section className="relative py-20 md:py-24 bg-gradient-to-br from-background via-secondary to-background flex items-center justify-center overflow-hidden">
      {/* Floating celebration elements - subtle golden particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: '110vh', x: `${(i / 12) * 100}%`, rotate: 0 }}
            animate={{ y: '-10vh', rotate: 360 }}
            transition={{
              duration: 5 + Math.random() * 3,
              delay: Math.random() * 3,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute w-2 h-2 rounded-full bg-primary/20"
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', duration: 1 }}
          className="inline-block mb-8"
        >
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden shadow-gold-glow ring-4 ring-primary/30">
            <img src={trophyAchievement} alt="Achievement trophy" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="font-display text-foreground mb-6"
          style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 900, lineHeight: 1.1 }}
        >
          AIR <span className="text-gradient-gold">42</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-blue-soft text-xl md:text-2xl mb-4"
        >
          JEE Advanced
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="text-muted-foreground text-lg md:text-xl mb-12 max-w-2xl mx-auto"
        >
          From struggling at 120/300 to achieving AIR 42 in just 6 months with personalized 1-on-1 coaching
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 + i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-5 md:p-6 rounded-2xl bg-card/60 backdrop-blur-md border border-border"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 rounded-lg overflow-hidden">
                <img src={stat.image} alt={stat.label} className="w-full h-full object-cover" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.8 }}
          className="mt-14"
        >
          <button
            onClick={openDemoModal}
            className="inline-block px-10 md:px-12 py-4 md:py-5 bg-gradient-to-r from-gold to-gold-dark text-background font-bold text-base md:text-lg rounded-full hover:scale-105 transition-transform shadow-gold-glow"
          >
            Start Your Transformation
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2.2 }}
          className="text-muted-foreground text-sm mt-8"
        >
          Join 500+ students who achieved their dream ranks with MindPeak
        </motion.p>
      </div>
    </section>
  );
};
