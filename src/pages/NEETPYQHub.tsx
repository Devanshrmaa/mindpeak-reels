import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, ChevronDown, ChevronRight, ArrowRight, Calendar, FileText } from 'lucide-react';
import { Navbar } from '@/components/sections/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { PageFooter } from '@/components/PageFooter';
import { useDemoModal } from '@/components/DemoBookingModal';
import {
  neetPyqSubjectBanks,
  getTotalNEETPYQQuestions,
  getNEETPYQChapterCount,
  getNEETPYQSlugByParams,
} from '@/data/neet-pyq';

const NEETPYQHub = () => {
  const { openDemoModal } = useDemoModal();
  const [activeSubject, setActiveSubject] = useState(neetPyqSubjectBanks[0].slug);
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);

  const activeBank = neetPyqSubjectBanks.find((b) => b.slug === activeSubject)!;
  const totalAll = neetPyqSubjectBanks.reduce((s, b) => s + getTotalNEETPYQQuestions(b.slug), 0);

  const title = 'NEET Previous Year Questions (PYQ) — 2015–2024 | MindPeak';
  const description = `Solve ${totalAll}+ real NEET previous year questions from 2015 to 2024. Chapter-wise PYQs for Biology, Physics & Chemistry with detailed NCERT-based solutions. Free NEET PYQ practice by MindPeak.`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'NEET Previous Year Questions',
      description,
      provider: { '@type': 'Organization', name: 'MindPeak Institute', url: 'https://mindpeakinstitute.com' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mindpeakinstitute.com' },
        { '@type': 'ListItem', position: 2, name: 'NEET PYQ', item: 'https://mindpeakinstitute.com/neet-pyq' },
      ],
    },
  ];

  return (
    <>
      <SEOHead title={title} description={description} jsonLd={jsonLd} />
      <Navbar />
      <main className="bg-background pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-green-500/5 via-background to-background py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <nav className="mb-6 text-sm text-muted-foreground flex items-center justify-center gap-1">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3" />
                <span className="text-foreground font-medium">NEET Previous Year Questions</span>
              </nav>
              <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
                NEET Previous Year Questions
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
                {totalAll}+ real NEET questions from 2015–2024 — chapter-wise with year info, NCERT references, and step-by-step solutions.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-green-400 mb-8">
                <Calendar className="w-4 h-4" />
                <span>Last 10 Years (2015–2024) · Biology, Physics & Chemistry</span>
              </div>

              {/* Subject Stats */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {neetPyqSubjectBanks.map((bank) => {
                  const count = getTotalNEETPYQQuestions(bank.slug);
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
            {neetPyqSubjectBanks.map((bank) => (
              <button
                key={bank.slug}
                onClick={() => { setActiveSubject(bank.slug); setExpandedChapter(null); }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors whitespace-nowrap ${
                  activeSubject === bank.slug
                    ? 'bg-green-500 text-white shadow-lg'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-green-500/40'
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
              const qCount = getNEETPYQChapterCount(chapter);

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
                      <BookOpen className="w-5 h-5 text-green-400 flex-shrink-0" />
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
                            to={`/${getNEETPYQSlugByParams(activeBank.slug, chapter.slug, qIdx + 1) ?? ''}`}
                            className="flex items-center justify-between gap-3 rounded-lg border border-border/50 bg-secondary/10 px-4 py-3 hover:border-green-500/40 hover:bg-green-500/5 transition-colors group"
                          >
                            <div className="flex items-start gap-3 min-w-0">
                              <span className="text-xs font-bold text-green-400 mt-0.5">Q{qIdx + 1}</span>
                              <p className="text-sm text-foreground line-clamp-1">{q.q}</p>
                            </div>
                            <div className="flex items-center gap-2 flex-shrink-0">
                              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] rounded-full px-2 py-0.5 bg-green-500/10 text-green-400 border border-green-500/20 font-medium">
                                <FileText className="w-3 h-3" />
                                {q.shift}
                              </span>
                              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-green-400 transition-colors" />
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

        {/* CTA */}
        <section className="mx-auto max-w-4xl px-4 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-green-500/20 bg-gradient-to-r from-green-500/5 to-green-500/10 p-8 text-center"
          >
            <h2 className="font-display font-bold text-xl text-foreground mb-2">
              Struggling with NEET PYQs? Get Expert Help
            </h2>
            <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">
              Get personalised PYQ analysis, weak-chapter identification, and 1-on-1 doubt sessions with MindPeak's NEET expert mentors.
            </p>
            <button
              onClick={openDemoModal}
              className="inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-green-600 transition-colors"
            >
              Book Free Demo Class <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </section>

        <PageFooter extra="NEET Previous Year Questions (PYQ) — Biology, Physics, Chemistry." />
      </main>
    </>
  );
};

export default NEETPYQHub;
