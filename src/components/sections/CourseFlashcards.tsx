import { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, FlaskConical, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const cards = [
  {
    icon: Target,
    title: 'JEE Programs',
    tagline: 'Crack IIT with 1-on-1 Mentoring',
    points: ['JEE Main + Advanced', '1-on-1 daily classes', 'Personalized roadmaps', 'Weekly mock tests'],
    accent: 'from-primary to-primary/60',
    glow: 'shadow-[0_0_40px_-10px_hsl(var(--primary)/0.4)]',
  },
  {
    icon: FlaskConical,
    title: 'NEET Programs',
    tagline: 'Your Path to MBBS Starts Here',
    points: ['NEET UG focused', 'NCERT-first approach', 'Biology specialization', 'CBT mock tests'],
    accent: 'from-emerald-400 to-emerald-600',
    glow: 'shadow-[0_0_40px_-10px_rgba(52,211,153,0.4)]',
  },
  {
    icon: GraduationCap,
    title: 'Foundation',
    tagline: 'Class 6th–10th • Start Early',
    points: ['IIT/NEET foundation', 'Board + competitive prep', 'Olympiad training', 'Habit building'],
    accent: 'from-violet-400 to-violet-600',
    glow: 'shadow-[0_0_40px_-10px_rgba(167,139,250,0.4)]',
  },
];

export const CourseFlashcards = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 px-6 bg-background relative overflow-hidden">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-foreground mb-3" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
            EXPLORE <span className="text-gradient-gold">COURSES</span>
          </h2>
          <p className="text-muted-foreground text-lg">Find the perfect program for your goals</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, i) => {
            const Icon = card.icon;
            const isHovered = hoveredIndex === i;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-8 cursor-pointer transition-all duration-500 ${
                  isHovered ? `${card.glow} border-primary/40 -translate-y-2` : ''
                }`}
              >
                {/* Gradient top bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${card.accent} transition-all duration-500 ${
                  isHovered ? 'opacity-100' : 'opacity-40'
                }`} />

                {/* Floating icon */}
                <motion.div
                  animate={isHovered ? { y: -4, rotate: 5 } : { y: 0, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.accent} flex items-center justify-center mb-6`}
                >
                  <Icon className="w-7 h-7 text-background" />
                </motion.div>

                <h3 className="font-display font-bold text-foreground text-2xl mb-1">{card.title}</h3>
                <p className="text-primary text-sm tracking-wider uppercase mb-5">{card.tagline}</p>

                {/* Animated list */}
                <ul className="space-y-3 mb-8">
                  {card.points.map((point, j) => (
                    <motion.li
                      key={j}
                      animate={isHovered ? { x: 4 } : { x: 0 }}
                      transition={{ delay: j * 0.05 }}
                      className="flex items-center gap-3 text-muted-foreground text-sm"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${card.accent} shrink-0 transition-all duration-300 ${
                        isHovered ? 'scale-150' : ''
                      }`} />
                      {point}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to="/courses"
                  className={`inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
                    isHovered ? 'text-primary gap-3' : 'text-muted-foreground'
                  }`}
                >
                  Learn More
                  <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                </Link>

                {/* Corner shimmer on hover */}
                <div className={`absolute -bottom-1 -right-1 w-24 h-24 rounded-full bg-gradient-to-tl ${card.accent} opacity-0 blur-2xl transition-opacity duration-500 ${
                  isHovered ? 'opacity-10' : ''
                }`} />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <Link
            to="/courses"
            className="inline-block px-10 py-4 border-2 border-primary text-primary text-sm uppercase tracking-[0.15em] hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            View All Courses
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
