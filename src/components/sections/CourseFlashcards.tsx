import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/components/RouterLink';
const jeeLogo = '/images/jee-logo.jpeg';
const neetLogo = '/images/neet-logo.jpeg';
const foundationLogo = '/images/foundation-logo.png';

const cards = [
  {
    logo: jeeLogo,
    title: 'JEE Programs',
    tagline: 'Crack IIT with 1-on-1 Mentoring',
    points: ['JEE Main + Advanced full syllabus', '1-on-1 daily live classes, 6 days/week', 'Personalized roadmaps by IIT/NIT mentors', 'Weekly mock tests in CBT format', 'Real-time doubt resolution (<30 min)'],
    accent: 'from-primary to-primary/60',
    num: '01',
    result: 'a strong rank in JEE Advanced',
    to: '/jee-coaching',
    ctaLabel: 'Explore JEE Coaching — Main & Advanced',
  },
  {
    logo: neetLogo,
    title: 'NEET Programs',
    tagline: 'Your Path to MBBS Starts Here',
    points: ['NEET UG complete Physics, Chemistry, Biology', 'NCERT line-by-line mastery first approach', 'Biology specialization with AIIMS mentors', 'CBT mock tests simulating NTA pattern', 'Parent progress reports every week'],
    accent: 'from-emerald-400 to-emerald-600',
    num: '02',
    result: 'a strong rank in NEET UG',
    to: '/neet-coaching',
    ctaLabel: 'Explore NEET Coaching — 1-on-1 Mentorship',
  },
  {
    logo: foundationLogo,
    title: 'Foundation',
    tagline: 'Class 6th–10th • Start Early',
    points: ['IIT/NEET foundation + Board exam prep', 'Olympiad & NTSE/KVPY training included', 'Scientific habit & discipline building', 'Smooth transition to competitive prep', 'Age-appropriate mentoring approach'],
    accent: 'from-violet-400 to-violet-600',
    num: '03',
    result: '95%+ board scores consistently',
    to: '/foundation-coaching',
    ctaLabel: 'Explore Foundation Coaching — Class 6–10',
  },
];

export const CourseFlashcards = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 sm:py-36 px-4 sm:px-6 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-foreground/10" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground/70 font-medium">Programs</span>
            <span className="h-px w-8 bg-foreground/10" />
          </div>
          <h2 className="font-display font-bold text-foreground tracking-[-0.02em]" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
            EXPLORE <span className="text-gradient-gold">COURSES</span>
          </h2>
          <p className="text-muted-foreground text-base mt-3">Choose from 12+ personalized programs for JEE, NEET, and Foundation — each with a dedicated mentor and custom study plan</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {cards.map((card, i) => {
            const isHovered = hoveredIndex === i;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative rounded-2xl border bg-foreground/[0.02] p-8 md:p-9 cursor-pointer transition-all duration-600 ${
                  isHovered ? 'border-primary/20 bg-foreground/[0.04] -translate-y-1' : 'border-foreground/[0.06]'
                }`}
              >
                {/* Number label */}
                <span className="absolute top-5 right-6 text-[11px] tracking-[0.15em] text-muted-foreground/40 font-medium">{card.num}</span>

                {/* Top accent line */}
                <div className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r ${card.accent} transition-opacity duration-500 ${
                  isHovered ? 'opacity-60' : 'opacity-15'
                }`} />

                {/* Logo */}
                <motion.div
                  animate={isHovered ? { y: -2 } : { y: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-14 h-14 rounded-xl overflow-hidden mb-7 ring-1 ring-foreground/[0.08] bg-white/5"
                >
                  <img src={card.logo} alt={`${card.title} logo`} className="w-full h-full object-contain" width={64} height={64} loading="lazy" />
                </motion.div>

                <h3 className="font-display font-semibold text-foreground text-xl md:text-2xl mb-1 tracking-tight">{card.title}</h3>
                <p className="text-primary/60 text-[11px] tracking-[0.15em] uppercase mb-3">{card.tagline}</p>

                {/* Result badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/[0.06] border border-primary/10 mb-6">
                  <span className="text-[10px] text-muted-foreground/80 uppercase tracking-[0.1em]">Top Result:</span>
                  <span className="text-[11px] text-primary font-semibold">{card.result}</span>
                </div>

                {/* List */}
                <ul className="space-y-3 mb-8">
                  {card.points.map((point, j) => (
                    <motion.li
                      key={j}
                      animate={isHovered ? { x: 4 } : { x: 0 }}
                      transition={{ delay: j * 0.04, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-center gap-3 text-muted-foreground text-sm"
                    >
                      <span className={`w-1 h-1 rounded-full bg-gradient-to-r ${card.accent} shrink-0 transition-all duration-500 ${
                        isHovered ? 'scale-[2]' : ''
                      }`} />
                      {point}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to={card.to}
                  aria-label={card.ctaLabel}
                  className={`inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.15em] uppercase transition-all duration-500 ${
                    isHovered ? 'text-primary gap-3' : 'text-muted-foreground'
                  }`}
                >
                  {card.ctaLabel}
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-500 ${isHovered ? 'translate-x-1' : ''}`} />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-14"
        >
          <Link
            to="/courses"
            aria-label="Browse all JEE and NEET coaching programs and pricing"
            className="group relative inline-flex items-center gap-3 px-10 py-4 border border-foreground/15 text-foreground text-[13px] uppercase tracking-[0.2em] btn-outline-fill rounded-full"
          >
            <span className="relative z-10">Browse All JEE &amp; NEET Programs &amp; Pricing</span>
            <span className="relative z-10 w-5 h-5 rounded-full border border-current grid place-items-center transition-transform duration-500 group-hover:rotate-45">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent" />
    </section>
  );
};
