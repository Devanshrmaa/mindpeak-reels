import { motion } from 'framer-motion';

const stats = [
  { value: '500+', label: 'Students Mentored' },
  { value: '95%', label: 'Selection Rate' },
  { value: '42', label: 'Best AIR (JEE)' },
  { value: '8+', label: 'Years of Excellence' },
];

export const StatsSection = () => {
  return (
    <section className="bg-secondary/30 py-20 px-6 border-y border-border">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center"
          >
            <div className="font-display font-black text-primary mb-2" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              {stat.value}
            </div>
            <div className="text-muted-foreground text-sm uppercase tracking-wider">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
