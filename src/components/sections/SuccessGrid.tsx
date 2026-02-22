import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const student1 = '/images/aarav-sharma.jpg';
const student2 = '/images/priya-patel.jpg';
const mentoring = '/images/mentoring-session-1.jpg';
const student3 = '/images/student-studying.jpg';
const student4 = '/images/rohan-gupta.jpg';
const mentoringSession = '/images/mentoring-session-2.jpg';

interface StoryItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  objectPos?: string;
}

const stories: StoryItem[] = [
  { id: '1', title: 'AARAV SHARMA', subtitle: 'AIR 42 — JEE Advanced', image: student1, objectPos: 'center 10%' },
  { id: '2', title: 'PERSONALIZED MENTORING', subtitle: '1-on-1 Session Highlights', image: mentoring, objectPos: 'center 30%' },
  { id: '3', title: 'PRIYA PATEL', subtitle: 'AIR 156 — NEET', image: student2, objectPos: 'center 20%' },
  { id: '4', title: 'STUDY ROUTINE', subtitle: 'Day in the Life', image: student3, objectPos: 'center 25%' },
  { id: '5', title: 'ROHAN GUPTA', subtitle: 'AIR 89 — JEE Mains', image: student4, objectPos: 'center 15%' },
  { id: '6', title: 'MENTOR SESSIONS', subtitle: 'Guided Problem Solving', image: mentoringSession, objectPos: 'center 30%' },
];

const altTextMap: Record<string, string> = {
  '1': 'Aarav Sharma, MindPeak student who achieved AIR 42 in JEE Advanced',
  '2': 'Personalized 1-on-1 mentoring session at MindPeak Institute',
  '3': 'Priya Patel, MindPeak student who achieved AIR 156 in NEET',
  '4': 'Daily study routine of a MindPeak Institute JEE aspirant',
  '5': 'Rohan Gupta, MindPeak student who achieved AIR 89 in JEE Mains',
  '6': 'Guided problem solving mentor session at MindPeak Institute',
};

export const SuccessGrid = () => {
  const [selected, setSelected] = useState<StoryItem | null>(null);

  return (
    <section id="success-stories" className="bg-background py-24 sm:py-36 px-4 sm:px-6 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-primary/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 sm:mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-foreground/10" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground/70 font-medium">Gallery</span>
          </div>
          <h2 className="font-display font-bold text-foreground leading-none tracking-[-0.02em]" style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}>
            SUCCESS
            <br />
            <span className="text-gradient-gold">STORIES</span>
          </h2>
          <p className="text-muted-foreground/60 text-sm tracking-[0.15em] uppercase mt-4">
            Real Students. Real Results.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative group cursor-pointer overflow-hidden aspect-[4/5] rounded-xl"
              onClick={() => setSelected(story)}
            >
              <div className="w-full h-full overflow-hidden">
                <img
                  src={story.image}
                  alt={altTextMap[story.id] || story.title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
                  style={{ objectPosition: story.objectPos || 'center center' }}
                  loading="lazy"
                  width={600}
                  height={750}
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-background/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Info — always visible at bottom with gradient */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 bg-gradient-to-t from-background/90 via-background/40 to-transparent">
                <h3 className="text-foreground font-display text-base md:text-lg font-semibold tracking-wide mb-0.5">
                  {story.title}
                </h3>
                <p className="text-primary/80 text-[11px] md:text-xs tracking-[0.15em] uppercase">
                  {story.subtitle}
                </p>
              </div>

              {/* Corner accent on hover */}
              <div className="absolute top-4 right-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M8 24L24 8M24 8H12M24 8V20" stroke="white" strokeWidth="1.5" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 p-3 rounded-full border border-foreground/10 hover:border-foreground/20 transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.image}
                alt={altTextMap[selected.id] || selected.title}
                className="w-full max-h-[70vh] object-contain rounded-xl"
              />
              <div className="text-center mt-8">
                <h3 className="text-foreground font-display text-2xl md:text-3xl font-semibold tracking-wide mb-1">{selected.title}</h3>
                <p className="text-primary/70 text-sm tracking-[0.15em] uppercase">{selected.subtitle}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent" />
    </section>
  );
};
