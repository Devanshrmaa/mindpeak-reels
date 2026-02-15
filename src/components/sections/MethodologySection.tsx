import { motion } from 'framer-motion';
import { Users, Target, BookOpen, TrendingUp } from 'lucide-react';
import methodologyBg from '@/assets/methodology-bg.jpg';

const pillars = [
  { icon: Users, title: '1-on-1 Mentoring', desc: 'Dedicated mentor for every student' },
  { icon: Target, title: 'Adaptive Curriculum', desc: 'Personalized roadmap based on strengths' },
  { icon: BookOpen, title: 'Deep Practice', desc: 'Problem-solving over rote memorization' },
  { icon: TrendingUp, title: 'Progress Tracking', desc: 'Weekly analytics & course correction' },
];

export const MethodologySection = () => {
  return (
    <section id="methodology" className="relative flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={methodologyBg} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 sm:py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-foreground mb-6"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
        >
          OUR <span className="text-gradient-gold">METHODOLOGY</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg sm:text-xl leading-relaxed mb-16 max-w-3xl mx-auto"
        >
          While others teach in batches of 100, we believe in the power of
          1-on-1 attention. Every student gets a personalized roadmap,
          dedicated mentor, and adaptive curriculum.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 hover:border-primary/40 transition-colors duration-300 shadow-card"
            >
              <pillar.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-display font-bold text-foreground text-lg mb-2">{pillar.title}</h3>
              <p className="text-muted-foreground text-sm">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-14 px-12 py-4 border-2 border-primary text-primary text-sm uppercase tracking-[0.15em] hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Learn More
        </motion.a>
      </div>
    </section>
  );
};
