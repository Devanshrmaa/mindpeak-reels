import { Link } from '@/components/RouterLink';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, BookOpen, Flame, Target } from 'lucide-react';
import { chapters as allChapters, type ChapterData } from '@/data/chapterData';

/* ═══════════════════════════════════════════════════════════
   SubjectChapterLinks — Chapter-wise Deep Dives Section
   Shows clickable chapter cards with brief + stats
   Used on Subject Preparation pages (JEE Physics, etc.)
   ═══════════════════════════════════════════════════════════ */

interface Props {
  exam: 'JEE' | 'NEET';
  subject: string;           // 'Physics', 'Chemistry', 'Mathematics', 'Biology'
}

const difficultyColor: Record<string, string> = {
  Easy: 'bg-green-500/10 text-green-400 border-green-500/20',
  Moderate: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  Hard: 'bg-red-500/10 text-red-400 border-red-500/20',
};

/** Main section — Chapter cards grid with description + link */
export const SubjectChapterLinks = ({ exam, subject }: Props) => {
  const matched = allChapters.filter(c => c.exam === exam && c.subject === subject);
  if (matched.length === 0) return null;

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="flex items-center gap-3 mb-2">
          <BookOpen className="w-7 h-7 text-primary" />
          <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl">
            {exam} {subject}{' '}
            <span className="text-gradient-gold">Chapter-Wise Deep Dives</span>
          </h2>
        </div>
        <p className="text-muted-foreground text-base leading-relaxed max-w-3xl mb-10">
          Explore each {subject} chapter in detail — topics, key formulas, common mistakes, and previous year question analysis. 
          Click any chapter to access the complete study guide with MindPeak&apos;s expert insights.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {matched.map((ch, i) => (
            <ChapterCard key={ch.slug} chapter={ch} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

/** Individual chapter card */
const ChapterCard = ({ chapter: ch, index }: { chapter: ChapterData; index: number }) => {
  const Icon = ch.icon;
  const brief = ch.description.length > 120 ? ch.description.slice(0, 120).replace(/\s+\S*$/, '') + '…' : ch.description;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: Math.min(index * 0.04, 0.4) }}
    >
      <Link
        to={`/${ch.slug}`}
        className="group block rounded-xl border border-border bg-card p-5 h-full hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Icon className="w-4.5 h-4.5 text-primary" />
            </div>
            <h3 className="font-display font-bold text-foreground text-sm leading-tight group-hover:text-primary transition-colors truncate">
              {ch.chapter}
            </h3>
          </div>
          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1" />
        </div>

        {/* Brief description */}
        <p className="text-muted-foreground text-xs leading-relaxed mb-3">{brief}</p>

        {/* Stats row */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full border ${difficultyColor[ch.difficulty] || difficultyColor.Moderate}`}>
            <Flame className="w-3 h-3" /> {ch.difficulty}
          </span>
          <span className="inline-flex items-center gap-1 text-[10px] text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded-full">
            <BarChart3 className="w-3 h-3" /> {ch.weightage}
          </span>
          <span className="inline-flex items-center gap-1 text-[10px] text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded-full">
            <Target className="w-3 h-3" /> {ch.topics.length} topics
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

/* ═══════════════════════════════════════════════════════════
   ChapterFooterGrid — Compact footer-style chapter link grid
   Shows all related chapters in a condensed, SEO-friendly grid
   ═══════════════════════════════════════════════════════════ */

interface FooterProps {
  exam: 'JEE' | 'NEET';
  subject: string;
  /** Optional: chapters from related subjects to also show */
  showRelated?: boolean;
}

export const ChapterFooterGrid = ({ exam, subject, showRelated = true }: FooterProps) => {
  const primary = allChapters.filter(c => c.exam === exam && c.subject === subject);
  const related = showRelated
    ? allChapters.filter(c => c.exam === exam && c.subject !== subject).slice(0, 12)
    : [];

  if (primary.length === 0) return null;

  // Group primary chapters by rough topic area for nicer display
  const midpoint = Math.ceil(primary.length / 2);
  const col1 = primary.slice(0, midpoint);
  const col2 = primary.slice(midpoint);

  return (
    <section className="bg-card/50 border-y border-border py-10 sm:py-14 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <h3 className="font-display font-bold text-foreground text-lg sm:text-xl mb-2">
          {exam} {subject} <span className="text-gradient-gold">Chapter Pages</span>
        </h3>
        <p className="text-muted-foreground text-sm mb-6">
          Detailed study guides for every {exam} {subject} chapter — formulas, PYQs, mistakes & expert tips.
        </p>

        {/* Primary subject chapters — 2 column grid */}
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5 mb-8">
          <div className="space-y-1.5">
            {col1.map(ch => (
              <Link
                key={ch.slug}
                to={`/${ch.slug}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1 group"
              >
                <ArrowRight className="w-3 h-3 text-primary/50 group-hover:text-primary flex-shrink-0" />
                <span className="truncate">{ch.chapter}</span>
                <span className="text-[10px] text-muted-foreground ml-auto flex-shrink-0">{ch.weightage}</span>
              </Link>
            ))}
          </div>
          <div className="space-y-1.5">
            {col2.map(ch => (
              <Link
                key={ch.slug}
                to={`/${ch.slug}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1 group"
              >
                <ArrowRight className="w-3 h-3 text-primary/50 group-hover:text-primary flex-shrink-0" />
                <span className="truncate">{ch.chapter}</span>
                <span className="text-[10px] text-muted-foreground ml-auto flex-shrink-0">{ch.weightage}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Related subject chapters */}
        {related.length > 0 && (
          <>
            <h4 className="font-display font-bold text-foreground text-sm sm:text-base mb-3">
              More {exam} Chapters You Should Explore
            </h4>
            <div className="flex flex-wrap gap-2">
              {related.map(ch => (
                <Link
                  key={ch.slug}
                  to={`/${ch.slug}`}
                  className="px-3 py-1.5 rounded-lg bg-secondary/50 border border-border text-xs text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
                >
                  {ch.subject}: {ch.chapter}
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};
