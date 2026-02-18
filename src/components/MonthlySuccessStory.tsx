import { motion } from 'framer-motion';
import { Quote, MapPin, Trophy } from 'lucide-react';
import { getCurrentMonthStory, type MonthlyContentBlock } from '@/lib/rotatingContent';

interface MonthlySuccessStoryProps {
  exam?: 'JEE' | 'NEET';
}

/**
 * Displays a different success story each month.
 * Google sees different content on each crawl → freshness signal.
 */
export const MonthlySuccessStory = ({ exam }: MonthlySuccessStoryProps) => {
  const story: MonthlyContentBlock = getCurrentMonthStory(exam);

  const monthLabel = new Date().toLocaleDateString('en-IN', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8"
    >
      <div className="flex items-center gap-2 mb-4">
        <Trophy className="w-5 h-5 text-primary" />
        <h3 className="font-display font-bold text-foreground text-lg sm:text-xl">
          {monthLabel} Success Story
        </h3>
      </div>

      <blockquote className="relative pl-4 border-l-2 border-primary/40 mb-4">
        <Quote className="absolute -left-3 -top-1 w-5 h-5 text-primary/40" />
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed italic">
          "{story.quote}"
        </p>
      </blockquote>

      <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
        <span className="font-semibold text-foreground">{story.name}</span>
        <span className="inline-flex items-center gap-1 text-muted-foreground">
          <MapPin className="w-3 h-3" /> {story.city}
        </span>
        <span className="inline-flex items-center gap-1 text-primary font-semibold">
          <Trophy className="w-3 h-3" /> {story.rank}
        </span>
        <span className="bg-secondary rounded-full px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
          {story.exam}
        </span>
      </div>
    </motion.section>
  );
};
