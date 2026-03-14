"use client";

import { usePathname } from 'next/navigation';
import { Navigate } from '@/components/Navigate';
import { Link } from '@/components/RouterLink';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ChevronRight, ArrowRight, Calendar, FileText, Filter } from 'lucide-react';
import { Navbar } from '@/components/sections/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { PageFooter } from '@/components/PageFooter';
import { useDemoModal } from '@/components/DemoBookingModal';
import {
  pyqSubjectBanks,
  getPYQChapter,
  getPYQSlugByParams,
} from '@/data/pyq';

/**
 * Parse hub slug: jee-pyq-{subject}-{chapter} (no question suffix)
 */
function parseHubSlug(slug: string): { subject: string; chapter: string } | null {
  // Match jee-pyq-{subject}-{chapterSlug} where chapterSlug doesn't contain known question patterns
  const m = slug.match(/^jee-pyq-(physics|chemistry|mathematics)-(.+)$/);
  if (!m) return null;
  const subjectSlug = m[1];
  const chapterSlug = m[2];
  // Verify this chapter actually exists
  const ch = getPYQChapter(subjectSlug, chapterSlug);
  if (!ch) return null;
  return { subject: subjectSlug, chapter: chapterSlug };
}

const JEEPYQChapterHub = () => {
  const pathname = usePathname();
  const slug = pathname.replace(/^\//, '');
  const { openDemoModal } = useDemoModal();
  const [yearFilter, setYearFilter] = useState<number | null>(null);

  const parsed = parseHubSlug(slug);
  if (!parsed) return null; // Let QuestionSlugRouter handle as question

  const bank = pyqSubjectBanks.find(b => b.slug === parsed.subject);
  const chapter = bank ? getPYQChapter(parsed.subject, parsed.chapter) : undefined;
  if (!bank || !chapter) return <Navigate to="/jee-pyq" replace />;

  const subj = bank.subject;
  const years = [...new Set(chapter.questions.map(q => q.year))].sort((a, b) => b - a);
  const filtered = yearFilter ? chapter.questions.filter(q => q.year === yearFilter) : chapter.questions;

  const title = `JEE ${subj} PYQ — ${chapter.name} | Chapter-wise Previous Year Questions`;
  const description = `Solve ${chapter.questions.length}+ JEE ${subj} previous year questions on ${chapter.name}. Year-wise PYQs with detailed solutions. Free practice by MindPeak.`;

  const jsonLd = [
    { '@context': 'https://schema.org', '@type': 'CollectionPage', name: `JEE ${subj} PYQ — ${chapter.name}`, description },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mindpeakinstitute.com' },
      { '@type': 'ListItem', position: 2, name: 'JEE PYQ', item: 'https://mindpeakinstitute.com/jee-pyq' },
      { '@type': 'ListItem', position: 3, name: `${subj}`, item: `https://mindpeakinstitute.com/jee-pyq#${bank.slug}` },
      { '@type': 'ListItem', position: 4, name: chapter.name, item: `https://mindpeakinstitute.com/${slug}` },
    ] },
  ];

  return (
    <>
      <SEOHead title={title} description={description} jsonLd={jsonLd} />
      <Navbar />
      <main className="bg-background pt-20">
        <section className="relative overflow-hidden bg-gradient-to-b from-amber-500/5 via-background to-background py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <nav className="mb-6 text-sm text-muted-foreground flex items-center gap-1 flex-wrap">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link to="/jee-pyq" className="hover:text-primary transition-colors">JEE PYQ</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground font-medium">{chapter.name}</span>
            </nav>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{bank.icon}</span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold border border-amber-500/30 bg-amber-500/10 text-amber-400">Chapter PYQ</span>
              </div>
              <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
                {chapter.name} — <span className="text-amber-400">JEE PYQ</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mb-4">
                {chapter.questions.length} previous year questions on {chapter.name} for JEE {subj}. Filter by year, solve each MCQ, and review detailed solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12">
          {/* Year filter */}
          <div className="flex items-center gap-2 mb-8 flex-wrap">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <button
              onClick={() => setYearFilter(null)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${!yearFilter ? 'bg-amber-500 text-white' : 'bg-card border border-border text-muted-foreground hover:text-foreground'}`}
            >
              All Years
            </button>
            {years.map(y => (
              <button
                key={y}
                onClick={() => setYearFilter(y)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${yearFilter === y ? 'bg-amber-500 text-white' : 'bg-card border border-border text-muted-foreground hover:text-foreground'}`}
              >
                {y}
              </button>
            ))}
          </div>

          {/* Questions list */}
          <div className="space-y-2">
            {filtered.map((q, idx) => {
              const actualIdx = chapter.questions.indexOf(q);
              const qSlug = getPYQSlugByParams(bank.slug, chapter.slug, actualIdx + 1);
              return (
                <motion.div key={actualIdx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.02 }}>
                  <Link
                    to={`/${qSlug ?? ''}`}
                    className="flex items-center justify-between gap-3 rounded-xl border border-border bg-card/50 px-5 py-4 hover:border-amber-500/40 hover:bg-amber-500/5 transition-colors group"
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <span className="text-xs font-bold text-amber-400 mt-0.5">Q{actualIdx + 1}</span>
                      <div className="min-w-0">
                        <p className="text-sm text-foreground line-clamp-2">{q.q}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="inline-flex items-center gap-1 text-[10px] rounded-full px-2 py-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/20 font-medium">
                            <Calendar className="w-3 h-3" />{q.year}
                          </span>
                          <span className="inline-flex items-center gap-1 text-[10px] rounded-full px-2 py-0.5 bg-secondary/50 text-muted-foreground border border-border font-medium">
                            <FileText className="w-3 h-3" />{q.shift}
                          </span>
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-amber-400 transition-colors flex-shrink-0" />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No questions found for the selected year.</p>
          )}
        </section>

        {/* Related chapters */}
        <section className="mx-auto max-w-6xl px-4 pb-12">
          <h2 className="font-display font-bold text-lg text-foreground mb-4">More {subj} PYQ Chapters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {bank.chapters.filter(c => c.slug !== chapter.slug).slice(0, 6).map(ch => (
              <Link
                key={ch.slug}
                to={`/jee-pyq-${bank.slug}-${ch.slug}`}
                className="flex items-center gap-3 rounded-xl border border-border bg-card/50 p-4 hover:border-amber-500/40 transition-colors"
              >
                <BookOpen className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">{ch.name}</p>
                  <p className="text-xs text-muted-foreground">{ch.questions.length} PYQs</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-4xl px-4 pb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-amber-500/20 bg-gradient-to-r from-amber-500/5 to-amber-500/10 p-8 text-center">
            <h2 className="font-display font-bold text-xl text-foreground mb-2">Need Help with {chapter.name}?</h2>
            <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">Get 1-on-1 doubt sessions and personalised PYQ analysis with MindPeak's JEE mentors.</p>
            <button onClick={openDemoModal} className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-amber-600 transition-colors">
              Book Free Demo Class <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </section>

        <PageFooter extra={`JEE ${subj} PYQ — ${chapter.name} — ${chapter.questions.length} Questions.`} />
      </main>
    </>
  );
};

export default JEEPYQChapterHub;
