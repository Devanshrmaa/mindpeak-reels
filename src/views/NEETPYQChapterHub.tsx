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
import { parseNEETPYQHubSlug, getUnitForChapter } from '@/data/neet-pyq/hierarchy';
import {
  neetPyqSubjectBanks,
  getNEETPYQChapter,
  getNEETPYQSlugByParams,
} from '@/data/neet-pyq';

const NEETPYQChapterHub = () => {
  const pathname = usePathname();
  const slug = pathname.replace(/^\//, '');
  const { openDemoModal } = useDemoModal();
  const [yearFilter, setYearFilter] = useState<number | null>(null);

  const hubInfo = parseNEETPYQHubSlug(slug);
  if (!hubInfo || hubInfo.type !== 'chapter') return <Navigate to="/neet-pyq" replace />;

  const bank = neetPyqSubjectBanks.find(b => b.slug === hubInfo.subjectSlug);
  const chapter = bank ? getNEETPYQChapter(hubInfo.subjectSlug, hubInfo.chapterSlug!) : undefined;
  if (!bank || !chapter) return <Navigate to="/neet-pyq" replace />;

  const unit = getUnitForChapter(hubInfo.subjectSlug, hubInfo.chapterSlug!);
  const chapterName = chapter.name;
  const subj = bank.subject;

  // Get unique years
  const years = [...new Set(chapter.questions.map(q => q.year))].sort((a, b) => b - a);
  const filtered = yearFilter ? chapter.questions.filter(q => q.year === yearFilter) : chapter.questions;

  const title = `NEET ${subj} PYQ — ${chapterName} | Chapter-wise Previous Year Questions`;
  const description = `Solve ${chapter.questions.length}+ NEET ${subj} previous year questions on ${chapterName}. Year-wise PYQs from 2015–2024 with NCERT-based solutions. Free practice by MindPeak.`;

  const jsonLd = [
    { '@context': 'https://schema.org', '@type': 'CollectionPage', name: `NEET ${subj} PYQ — ${chapterName}`, description },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mindpeakinstitute.com' },
      { '@type': 'ListItem', position: 2, name: 'NEET PYQ', item: 'https://mindpeakinstitute.com/neet-pyq' },
      { '@type': 'ListItem', position: 3, name: `${subj} Class ${unit?.classLevel ?? ''}`, item: `https://mindpeakinstitute.com/neet-pyq-${hubInfo.subjectSlug}-class-${unit?.classLevel ?? 11}` },
      ...(unit ? [{ '@type': 'ListItem', position: 4, name: unit.unitName, item: `https://mindpeakinstitute.com/neet-pyq-${hubInfo.subjectSlug}-unit-${unit.unitSlug}` }] : []),
      { '@type': 'ListItem', position: unit ? 5 : 4, name: chapterName, item: `https://mindpeakinstitute.com/${slug}` },
    ] },
  ];

  return (
    <>
      <SEOHead title={title} description={description} jsonLd={jsonLd} />
      <Navbar />
      <main className="bg-background pt-20">
        <section className="relative overflow-hidden bg-gradient-to-b from-green-500/5 via-background to-background py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <nav className="mb-6 text-sm text-muted-foreground flex items-center gap-1 flex-wrap">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link to="/neet-pyq" className="hover:text-primary transition-colors">NEET PYQ</Link>
              <ChevronRight className="w-3 h-3" />
              {unit && (
                <>
                  <Link to={`/neet-pyq-${hubInfo.subjectSlug}-class-${unit.classLevel}`} className="hover:text-primary transition-colors">{subj} Class {unit.classLevel}</Link>
                  <ChevronRight className="w-3 h-3" />
                  <Link to={`/neet-pyq-${hubInfo.subjectSlug}-unit-${unit.unitSlug}`} className="hover:text-primary transition-colors">{unit.unitName}</Link>
                  <ChevronRight className="w-3 h-3" />
                </>
              )}
              <span className="text-foreground font-medium">{chapterName}</span>
            </nav>
            <motion.div animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{bank.icon}</span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold border border-green-500/30 bg-green-500/10 text-green-400">Chapter PYQ</span>
              </div>
              <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
                {chapterName} — <span className="text-green-400">NEET PYQ</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mb-4">
                {chapter.questions.length} previous year questions on {chapterName} for NEET {subj}. Filter by year, solve each MCQ, and review detailed solutions.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12">
          {/* Year filter */}
          <div className="flex items-center gap-2 mb-8 flex-wrap">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <button
              onClick={() => setYearFilter(null)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${!yearFilter ? 'bg-green-500 text-white' : 'bg-card border border-border text-muted-foreground hover:text-foreground'}`}
            >
              All Years
            </button>
            {years.map(y => (
              <button
                key={y}
                onClick={() => setYearFilter(y)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${yearFilter === y ? 'bg-green-500 text-white' : 'bg-card border border-border text-muted-foreground hover:text-foreground'}`}
              >
                {y}
              </button>
            ))}
          </div>

          {/* Questions list */}
          <div className="space-y-2">
            {filtered.map((q, idx) => {
              // Find actual index in original array
              const actualIdx = chapter.questions.indexOf(q);
              const qSlug = getNEETPYQSlugByParams(bank.slug, chapter.slug, actualIdx + 1);
              return (
                <motion.div key={actualIdx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.02 }}>
                  <Link
                    to={`/${qSlug ?? ''}`}
                    className="flex items-center justify-between gap-3 rounded-xl border border-border bg-card/50 px-5 py-4 hover:border-green-500/40 hover:bg-green-500/5 transition-colors group"
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <span className="text-xs font-bold text-green-400 mt-0.5">Q{actualIdx + 1}</span>
                      <div className="min-w-0">
                        <p className="text-sm text-foreground line-clamp-2">{q.q}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="inline-flex items-center gap-1 text-[10px] rounded-full px-2 py-0.5 bg-green-500/10 text-green-400 border border-green-500/20 font-medium">
                            <Calendar className="w-3 h-3" />{q.year}
                          </span>
                          <span className="inline-flex items-center gap-1 text-[10px] rounded-full px-2 py-0.5 bg-secondary/50 text-muted-foreground border border-border font-medium">
                            <FileText className="w-3 h-3" />{q.shift}
                          </span>
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-green-400 transition-colors flex-shrink-0" />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No questions found for the selected year.</p>
          )}
        </section>

        {/* Related chapters in same unit */}
        {unit && (
          <section className="mx-auto max-w-6xl px-4 pb-12">
            <h2 className="font-display font-bold text-lg text-foreground mb-4">More Chapters in {unit.unitName}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {unit.chapterSlugs.filter(s => s !== hubInfo.chapterSlug).map(chSlug => {
                const ch = getNEETPYQChapter(hubInfo.subjectSlug, chSlug);
                if (!ch) return null;
                return (
                  <Link
                    key={chSlug}
                    to={`/neet-pyq-${hubInfo.subjectSlug}-${chSlug}`}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card/50 p-4 hover:border-green-500/40 transition-colors"
                  >
                    <BookOpen className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{ch.name}</p>
                      <p className="text-xs text-muted-foreground">{ch.questions.length} PYQs</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        <section className="mx-auto max-w-4xl px-4 pb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-green-500/20 bg-gradient-to-r from-green-500/5 to-green-500/10 p-8 text-center">
            <h2 className="font-display font-bold text-xl text-foreground mb-2">Need Help with {chapterName}?</h2>
            <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">Get 1-on-1 doubt sessions and personalised PYQ analysis with MindPeak's NEET mentors.</p>
            <button onClick={openDemoModal} className="inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-green-600 transition-colors">
              Book Free Demo Class <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </section>

        <PageFooter extra={`NEET ${subj} PYQ — ${chapterName} — ${chapter.questions.length} Questions.`} />
      </main>
    </>
  );
};

export default NEETPYQChapterHub;
