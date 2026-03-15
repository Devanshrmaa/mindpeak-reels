import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { getLiveStat, formatStat, type StatName } from '@/lib/liveStats';

const statConfigs: { key: StatName; label: string; fallback: string }[] = [
  { key: 'studentsEnrolled', label: 'Students Mentored', fallback: '500+' },
  { key: 'successRate', label: 'Selection Rate', fallback: '95%' },
  { key: 'airToppers', label: 'AIR <5K Achievers', fallback: '50+' },
  { key: 'mockTestsTaken', label: 'Mock Tests Taken', fallback: '10,000+' },
];

export const StatsSection = () => {
  const [values, setValues] = useState<Record<StatName, string>>({} as any);

  useEffect(() => {
    const v: Record<string, string> = {};
    for (const cfg of statConfigs) {
      v[cfg.key] = formatStat(cfg.key);
    }
    setValues(v as Record<StatName, string>);
  }, []);

  return (
    <section className="bg-secondary/30 py-20 px-6 border-y border-border">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {statConfigs.map((cfg, i) => (
          <motion.div
            key={cfg.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center"
          >
            <div className="font-display font-black text-primary mb-2" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              {values[cfg.key] || cfg.fallback}
            </div>
            <div className="text-muted-foreground text-sm uppercase tracking-wider">{cfg.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
