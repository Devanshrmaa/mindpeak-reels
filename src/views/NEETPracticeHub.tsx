"use client";

import { useState } from 'react';
import { Link } from '@/components/RouterLink';
import { motion } from 'framer-motion';
import { BookOpen, ChevronDown, ChevronRight, Target, Zap, Award, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/sections/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { PageFooter } from '@/components/PageFooter';
import { useDemoModal } from '@/components/DemoBookingModal';
import {
  neetSubjectBanks,
  getTotalNEETPracticeQuestions,
  getNEETChapterQuestionCount,
  getNEETPracticeSlugByParams,
} from '@/data/neet-practice';

const difficultyConfig = {
  easy: { label: 'Easy', color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/30', icon: Zap },
  medium: { label: 'Medium', color: 'text-yellow-400', bg: 'bg-yellow-500/10 border-yellow-500/30', icon: Target },
  hard: { label: 'Hard', color: 'text-red-400', bg: 'bg-red-500/10 border-red-500/30', icon: Award },
} as const;

const NEETPracticeHub = () => {
  const { openDemoModal } = useDemoModal();
  const [activeSubject, setActiveSubject] = useState(neetSubjectBanks[0].slug);
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);

  const activeBank = neetSubjectBanks.find((b) => b.slug === activeSubject)!;
  const totalAll = neetSubjectBanks.reduce((s, b) => s + getTotalNEETPracticeQuestions(b.slug), 0);

  const title = 'NEET Practice Questions — Biology, Physics, Chemistry | MindPeak';
  const description = `Practice ${totalAll}+ NEET UG MCQs across Biology, Physics, and Chemistry. Topic-wise, difficulty-wise questions with step-by-step solutions. Free NEET prep by MindPeak.`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'NEET Practice Questions',
      description,
      provider: { '@type': 'Organization', name: 'MindPeak Institute', url: 'https://mindpeakinstitute.com' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mindpeakinstitute.com' },
        { '@type': 'ListItem', position: 2, name: 'NEET Practice Questions', item: 'https://mindpeakinstitute.com/neet-practice' },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'NEET Practice — Subject-wise Question Banks',
      numberOfItems: neetSubjectBanks.length,
      itemListElement: neetSubjectBanks.map((bank, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: `NEET ${bank.subject} Practice Questions`,
        url: `https://mindpeakinstitute.com/neet-practice`,
      })),
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
                <Link to="/" className="hover:text-green-500 transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3" />
                <span className="text-foreground font-medium">NEET Practice Questions</span>
              </nav>
              <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
                NEET Practice Questions
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                {totalAll}+ topic-wise MCQs for NEET UG — Pick a subject, choose your chapter and start practicing.
              </p>

              {/* Subject Stats */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {neetSubjectBanks.map((bank) => {
                  const count = getTotalNEETPracticeQuestions(bank.slug);
                  return (
                    <div key={bank.slug} className="rounded-xl border border-border bg-card/50 px-5 py-3 text-center">
                      <span className="text-2xl">{bank.icon}</span>
                      <p className="text-sm font-semibold text-foreground mt-1">{bank.subject}</p>
                      <p className="text-xs text-muted-foreground">{count} questions</p>
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
            {neetSubjectBanks.map((bank) => (
              <button
                key={bank.slug}
                onClick={() => { setActiveSubject(bank.slug); setExpandedChapter(null); }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors whitespace-nowrap ${
                  activeSubject === bank.slug
                    ? 'bg-green-600 text-white shadow-lg'
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
              const qCount = getNEETChapterQuestionCount(chapter);

              return (
                <motion.div
                  key={chapter.slug}
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
                      <BookOpen className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <div>
                        <p className="font-display font-semibold text-foreground text-sm sm:text-base">{chapter.name}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {chapter.topics.length} topic{chapter.topics.length !== 1 ? 's' : ''} · {qCount} questions
                        </p>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Topics (expanded) */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="border-t border-border"
                    >
                      <div className="p-4 sm:p-5 space-y-4">
                        {chapter.topics.map((topic) => {
                          const counts = {
                            easy: topic.easy.length,
                            medium: topic.medium.length,
                            hard: topic.hard.length,
                          };
                          const total = counts.easy + counts.medium + counts.hard;

                          return (
                            <div key={topic.slug} className="rounded-lg border border-border/50 bg-secondary/10 p-4">
                              <div className="flex items-start justify-between gap-2 mb-3">
                                <div>
                                  <p className="font-medium text-foreground text-sm">{topic.name}</p>
                                  <p className="text-xs text-muted-foreground">{total} questions</p>
                                </div>
                              </div>

                              {/* Difficulty buttons */}
                              <div className="grid grid-cols-3 gap-2">
                                {(['easy', 'medium', 'hard'] as const).map((diff) => {
                                  const cfg = difficultyConfig[diff];
                                  const count = counts[diff];
                                  if (count === 0) return (
                                    <div key={diff} className="flex flex-col items-center gap-1 px-3 py-3 rounded-xl border-2 border-dashed border-border/50 opacity-40">
                                      <cfg.icon className="w-4 h-4 text-muted-foreground" />
                                      <span className="text-xs font-medium text-muted-foreground">{cfg.label}</span>
                                      <span className="text-[10px] text-muted-foreground">0 Qs</span>
                                    </div>
                                  );
                                  return (
                                    <Link
                                      key={diff}
                                      to={`/${getNEETPracticeSlugByParams(activeBank.slug, chapter.slug, topic.slug, diff, 1) ?? ''}`}
                                      className={`flex flex-col items-center gap-1 px-3 py-3 rounded-xl border-2 text-sm font-semibold transition-all hover:scale-[1.03] active:scale-[0.98] ${cfg.bg} ${cfg.color}`}
                                    >
                                      <cfg.icon className="w-5 h-5" />
                                      <span>{cfg.label}</span>
                                      <span className="text-[10px] font-normal opacity-70">{count} Qs</span>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })}
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
          <h2 className="font-display font-bold text-xl text-foreground mb-6">All NEET Practice Chapters</h2>
          {neetSubjectBanks.map((bank) => (
            <div key={bank.slug} className="mb-8">
              <h3 className="font-display font-semibold text-foreground text-base mb-3 flex items-center gap-2">
                <span>{bank.icon}</span> {bank.subject}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {bank.chapters.map((ch) => {
                  const firstTopic = ch.topics[0];
                  if (!firstTopic) return null;
                  const qCount = getNEETChapterQuestionCount(ch);
                  return (
                    <a
                      key={ch.slug}
                      href={`/${getNEETPracticeSlugByParams(bank.slug, ch.slug, firstTopic.slug, 'easy', 1) ?? ''}`}
                      className="flex items-center gap-3 rounded-lg border border-border bg-card/50 px-4 py-3 hover:border-green-500/40 transition-colors"
                    >
                      <BookOpen className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{ch.name}</p>
                        <p className="text-xs text-muted-foreground">{qCount} questions</p>
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
            className="rounded-xl border border-green-500/20 bg-gradient-to-r from-green-500/5 to-green-500/10 p-8 text-center"
          >
            <h2 className="font-display font-bold text-xl text-foreground mb-2">
              Want Guided Practice with a Mentor?
            </h2>
            <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">
              Get personalised problem-solving sessions, doubt support, and chapter-wise tests with MindPeak's 1-on-1 NEET coaching.
            </p>
            <button
              onClick={openDemoModal}
              className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-green-700 transition-colors"
            >
              Book Free Demo Class <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </section>

        <PageFooter extra="NEET Practice Questions — Biology, Physics, Chemistry." />
      </main>
    </>
  );
};

export default NEETPracticeHub;
