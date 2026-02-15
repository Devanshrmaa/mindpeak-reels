import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

import student1 from '@/assets/aarav-sharma.jpg';
import student2 from '@/assets/student-2.jpg';
import mentoring from '@/assets/mentoring.jpg';
import student3 from '@/assets/student-3.jpg';
import student4 from '@/assets/student-4.jpg';
import mentoringSession from '@/assets/mentoring-session.jpg';

interface StoryItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  aspect: 'portrait' | 'landscape' | 'square';
}

const stories: StoryItem[] = [
  { id: '1', title: 'AARAV SHARMA', subtitle: 'AIR 42 — JEE Advanced', image: student1, aspect: 'portrait' },
  { id: '2', title: 'PERSONALIZED MENTORING', subtitle: '1-on-1 Session Highlights', image: mentoring, aspect: 'landscape' },
  { id: '3', title: 'PRIYA PATEL', subtitle: 'AIR 156 — NEET', image: student2, aspect: 'portrait' },
  { id: '4', title: 'STUDY ROUTINE', subtitle: 'Day in the Life', image: student3, aspect: 'square' },
  { id: '5', title: 'ROHAN GUPTA', subtitle: 'AIR 89 — JEE Mains', image: student4, aspect: 'portrait' },
  { id: '6', title: 'MENTOR SESSIONS', subtitle: 'Guided Problem Solving', image: mentoringSession, aspect: 'landscape' },
];

const aspectMap = {
  portrait: 'aspect-[4/5]',
  landscape: 'aspect-video',
  square: 'aspect-square',
};

export const SuccessGrid = () => {
  const [selected, setSelected] = useState<StoryItem | null>(null);

  return (
    <section id="success-stories" className="bg-background py-16 sm:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-12"
        >
          <h2 className="font-display font-bold text-foreground leading-none mb-4" style={{ fontSize: 'clamp(2.5rem, 8vw, 7rem)' }}>
            SUCCESS
            <br />
            <span className="text-gradient-gold">STORIES</span>
          </h2>
          <p className="text-muted-foreground text-lg tracking-wider uppercase">
            Real Students. Real Results.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative group cursor-pointer overflow-hidden ${aspectMap[story.aspect]}`}
              onClick={() => setSelected(story)}
            >
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />


              {/* Hover state */}
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-background via-background/70 to-transparent">
                <h3 className="text-foreground font-display text-xl font-bold tracking-wide mb-1">
                  {story.title}
                </h3>
                <p className="text-primary text-sm tracking-wider uppercase">
                  {story.subtitle}
                </p>
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
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-muted hover:bg-secondary transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full max-h-[70vh] object-contain rounded-lg"
              />
              <div className="text-center mt-6">
                <h3 className="text-foreground font-display text-3xl font-bold mb-2">{selected.title}</h3>
                <p className="text-primary text-lg tracking-wider uppercase">{selected.subtitle}</p>
                
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
