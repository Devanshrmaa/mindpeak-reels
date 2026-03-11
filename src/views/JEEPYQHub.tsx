"use client";

import { useState } from 'react';
import { Link } from '@/components/RouterLink';
import { motion } from 'framer-motion';
import { BookOpen, ChevronDown, ChevronRight, ArrowRight, Calendar, FileText } from 'lucide-react';
import { Navbar } from '@/components/sections/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { PageFooter } from '@/components/PageFooter';
import { useDemoModal } from '@/components/DemoBookingModal';
import {
  pyqSubjectBanks,
  getTotalPYQQuestions,
  getPYQChapterCount,
  getPYQSlugByParams,
} from '@/data/pyq';

const JEEPYQHub = () => {
  const { openDemoModal } = useDemoModal();
  const [activeSubject, setActiveSubject] = useState(pyqSubjectBanks[0].slug);
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);

  const activeBank = pyqSubjectBanks.find((b) => b.slug === activeSubject)!;
  const totalAll = pyqSubjectBanks.reduce((s, b) => s + getTotalPYQQuestions(b.slug), 0);

  const title = 'JEE Previous Year Questions (PYQ) — 2015–2024 | MindPeak';
  const description = `Solve ${totalAll}+ real JEE Main & Advanced previous year questions from 2015 to 2024. Chapter-wise PYQs with year, shift info, and detailed solutions. Free JEE PYQ practice by MindPeak.`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'JEE Previous Year Questions',
      description,
      provider: { '@type': 'Organization', name: 'MindPeak Institute', url: 'https://mindpeakinstitute.com' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mindpeakinstitute.com' },
        { '@type': 'ListItem', position: 2, name: 'JEE PYQ', item: 'https://mindpeakinstitute.com/jee-pyq' },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'JEE PYQ — Subject-wise Previous Year Questions',
      numberOfItems: pyqSubjectBanks.length,
      itemListElement: pyqSubjectBanks.map((bank, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: `JEE ${bank.subject} Previous Year Questions`,
        url: `https://mindpeakinstitute.com/jee-pyq`,
      })),
    },
  ];

  return (
    <>
      <SEOHead title={title} description={description} jsonLd={jsonLd} />
      <Navbar />
      <main className="bg-background pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-orange-500/5 via-background to-background py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <nav className="mb-6 text-sm text-muted-foreground flex items-center justify-center gap-1">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3" />
                <span className="text-foreground font-medium">JEE Previous Year Questions</span>
              </nav>
              <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
                JEE Previous Year Questions
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
                {totalAll}+ real JEE Main & Advanced questions from 2015–2024 — chapter-wise with shift, year, and step-by-step solutions.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-orange-400 mb-8">
                <Calendar className="w-4 h-4" />
                <span>Last 10 Years (2015–2024) · All Shifts Covered</span>
              </div>

              {/* Subject Stats */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {pyqSubjectBanks.map((bank) => {
                  const count = getTotalPYQQuestions(bank.slug);
                  return (
                    <div key={bank.slug} className="rounded-xl border border-border bg-card/50 px-5 py-3 text-center">
                      <span className="text-2xl">{bank.icon}</span>
                      <p className="text-sm font-semibold text-foreground mt-1">{bank.subject}</p>
                      <p className="text-xs text-muted-foreground">{count} PYQs</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Subject Tabs + Chapter Browser */}
        <section className="mx-auto max-w-6xl px-4 py-12">
          {/* Subject Tabs */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-1">
            {pyqSubjectBanks.map((bank) => (
              <button
                key={bank.slug}
                onClick={() => { setActiveSubject(bank.slug); setExpandedChapter(null); }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors whitespace-nowrap ${
                  activeSubject === bank.slug
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-orange-500/40'
                }`}
              >
                <span>{bank.icon}</span> {bank.subject}
              </button>
            ))}
          </div>

          {/* Chapters */}
          <div className="space-y-3">
            {activeBank.chapters.map((chapter, chIdx) => {
              const isExpanded = expandedChapter === chapter.slug;
              const qCount = getPYQChapterCount(chapter);

              return (
                <motion.div
                  key={`${chapter.slug}-${chIdx}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: chIdx * 0.03 }}
                  className="rounded-xl border border-border bg-card/50 overflow-hidden"
                >
                  {/* Chapter header */}
                  <button
                    onClick={() => setExpandedChapter(isExpanded ? null : chapter.slug)}
                    className="w-full flex items-center justify-between px-5 py-4 hover:bg-secondary/20 transition-colors text-left"
                  >
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      <div>
                        <p className="font-display font-semibold text-foreground text-sm sm:text-base">{chapter.name}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {qCount} PYQs
                        </p>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Questions list (expanded) */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="border-t border-border"
                    >
                      <div className="p-4 sm:p-5 space-y-2">
                        {chapter.questions.map((q, qIdx) => (
                          <Link
                            key={qIdx}
                            to={`/${getPYQSlugByParams(activeBank.slug, chapter.slug, qIdx + 1) ?? ''}`}
                            className="flex items-center justify-between gap-3 rounded-lg border border-border/50 bg-secondary/10 px-4 py-3 hover:border-orange-500/40 hover:bg-orange-500/5 transition-colors group"
                          >
                            <div className="flex items-start gap-3 min-w-0">
                              <span className="text-xs font-bold text-orange-400 mt-0.5">Q{qIdx + 1}</span>
                              <p className="text-sm text-foreground line-clamp-1">{q.q}</p>
                            </div>
                            <div className="flex items-center gap-2 flex-shrink-0">
                              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] rounded-full px-2 py-0.5 bg-orange-500/10 text-orange-400 border border-orange-500/20 font-medium">
                                <FileText className="w-3 h-3" />
                                JEE {q.exam === 'advanced' ? 'Adv' : 'Main'} {q.year}
                              </span>
                              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-orange-400 transition-colors" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Always-visible chapter links for crawlers */}
        <section className="mx-auto max-w-6xl px-4 py-12 border-t border-border">
          <h2 className="font-display font-bold text-xl text-foreground mb-6">All JEE PYQ Chapters</h2>
          {pyqSubjectBanks.map((bank) => (
            <div key={bank.slug} className="mb-8">
              <h3 className="font-display font-semibold text-foreground text-base mb-3 flex items-center gap-2">
                <span>{bank.icon}</span> {bank.subject}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {bank.chapters.map((ch) => {
                  const firstSlug = getPYQSlugByParams(bank.slug, ch.slug, 1);
                  const qCount = getPYQChapterCount(ch);
                  return (
                    <a
                      key={ch.slug}
                      href={`/${firstSlug ?? ''}`}
                      className="flex items-center gap-3 rounded-lg border border-border bg-card/50 px-4 py-3 hover:border-orange-500/40 transition-colors"
                    >
                      <BookOpen className="w-4 h-4 text-orange-400 flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{ch.name}</p>
                        <p className="text-xs text-muted-foreground">{qCount} PYQs</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-4xl px-4 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-orange-500/20 bg-gradient-to-r from-orange-500/5 to-orange-500/10 p-8 text-center"
          >
            <h2 className="font-display font-bold text-xl text-foreground mb-2">
              Struggling with PYQs? Get Expert Help
            </h2>
            <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">
              Get personalised PYQ analysis, weak-chapter identification, and 1-on-1 doubt sessions with MindPeak's expert mentors.
            </p>
            <button
              onClick={openDemoModal}
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-orange-600 transition-colors"
            >
              Book Free Demo Class <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </section>

        <PageFooter extra="JEE Previous Year Questions (PYQ) — Physics, Chemistry, Mathematics." />
      </main>
    </>
  );
};

export default JEEPYQHub;
