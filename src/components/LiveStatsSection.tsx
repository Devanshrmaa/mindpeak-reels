import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getLiveStat, type StatName } from '@/lib/liveStats';

const statConfigs: {
  key: StatName;
  label: string;
  icon: string;
}[] = [
  { key: 'studentsEnrolled', label: 'Students Enrolled', icon: '👥' },
  { key: 'successRate', label: 'Success Rate', icon: '📈' },
  { key: 'airToppers', label: 'AIR <5K Achievers', icon: '🏆' },
  { key: 'mockTestsTaken', label: 'Mock Tests Taken', icon: '📝' },
];

/**
 * Auto-updating stats section that increments monthly.
 * Replaces hard-coded stats with dynamic values.
 */
export const LiveStatsSection = () => {
  const [stats, setStats] = useState<Record<StatName, number>>({
    studentsEnrolled: 500,
    successRate: 95,
    airToppers: 50,
    mockTestsTaken: 10000,
    yearsOfExcellence: 8,
  });

  useEffect(() => {
    setStats({
      studentsEnrolled: getLiveStat('studentsEnrolled'),
      successRate: getLiveStat('successRate'),
      airToppers: getLiveStat('airToppers'),
      mockTestsTaken: getLiveStat('mockTestsTaken'),
      yearsOfExcellence: getLiveStat('yearsOfExcellence'),
    });
  }, []);

  const format = (key: StatName, value: number): string => {
    if (key === 'successRate') return `${value}%`;
    return `${value.toLocaleString('en-IN')}+`;
  };

  return (
    <section className="bg-secondary/30 py-12 sm:py-16 px-4 sm:px-6 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {statConfigs.map((cfg, i) => (
            <motion.div
              key={cfg.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-2xl mb-2">{cfg.icon}</div>
              <div
                className="font-display font-black text-primary mb-1"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
              >
                {format(cfg.key, stats[cfg.key])}
              </div>
              <div className="text-muted-foreground text-xs sm:text-sm uppercase tracking-wider">
                {cfg.label}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-[10px] sm:text-xs mt-6 sm:mt-8">
          Stats updated as of{' '}
          {new Date().toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'long',
          })}
        </p>
      </div>
    </section>
  );
};
