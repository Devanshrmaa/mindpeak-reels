"use client";

import { usePathname } from 'next/navigation';
import { Navigate } from '@/components/Navigate';
import { Link } from '@/components/RouterLink';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ChevronRight, ArrowRight, Target, Zap, Award, Filter } from 'lucide-react';
import { Navbar } from '@/components/sections/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { PageFooter } from '@/components/PageFooter';
import { useDemoModal } from '@/components/DemoBookingModal';
import {
  subjectBanks,
  getChapter,
  getChapterQuestionCount,
  getPracticeSlugByParams,
  type Difficulty,
} from '@/data/practice';

const DIFF_ORDER: Difficulty[] = ['easy', 'medium', 'hard'];
const DIFF_COLORS: Record<Difficulty, { bg: string; text: string; border: string }> = {
  easy: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/30' },
  medium: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/30' },
  hard: { bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/30' },
};

/**
 * Parse hub slug: jee-practice-{subject}-{chapter}
 */
function parseHubSlug(slug: string): { subject: string; chapter: string } | null {
  const m = slug.match(/^jee-practice-(physics|chemistry|mathematics)-(.+)$/);
  if (!m) return null;
  return { subject: m[1], chapter: m[2] };
}

const JEEPracticeChapterHub = () => {
  const pathname = usePathname();
  const slug = pathname.replace(/^\//, '');
  const { openDemoModal } = useDemoModal();
  const [diffFilter, setDiffFilter] = useState<Difficulty | null>(null);

  const parsed = parseHubSlug(slug);
  if (!parsed) return <Navigate to="/jee-practice" replace />;

  const bank = subjectBanks.find(b => b.slug === parsed.subject);
  const chapter = bank ? getChapter(parsed.subject, parsed.chapter) : undefined;
  if (!bank || !chapter) return <Navigate to="/jee-practice" replace />;

  const totalQ = getChapterQuestionCount(chapter);
  const subj = bank.subject;

  const title = `JEE ${subj} Practice — ${chapter.name} | Topic-wise MCQs with Solutions`;
  const description = `Solve ${totalQ}+ JEE ${subj} practice questions on ${chapter.name}. Easy, medium & hard MCQs with detailed solutions. Free practice by MindPeak.`;

  const jsonLd = [
    { '@context': 'https://schema.org', '@type': 'CollectionPage', name: `JEE ${subj} — ${chapter.name} Practice`, description },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mindpeakinstitute.com' },
      { '@type': 'ListItem', position: 2, name: 'JEE Practice', item: 'https://mindpeakinstitute.com/jee-practice' },
      { '@type': 'ListItem', position: 3, name: `${subj}`, item: `https://mindpeakinstitute.com/jee-practice#${bank.slug}` },
      { '@type': 'ListItem', position: 4, name: chapter.name, item: `https://mindpeakinstitute.com/${slug}` },
    ] },
  ];

  return (
    <>
      <SEOHead title={title} description={description} jsonLd={jsonLd} />
      <Navbar />
      <main className="bg-background pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <nav className="mb-6 text-sm text-muted-foreground flex items-center gap-1 flex-wrap">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link to="/jee-practice" className="hover:text-primary transition-colors">JEE Practice</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground font-medium">{chapter.name}</span>
            </nav>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{bank.icon}</span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold border border-primary/30 bg-primary/10 text-primary">Chapter Practice</span>
              </div>
              <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
                {chapter.name} — <span className="text-primary">JEE Practice</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mb-4">
                {totalQ} practice questions across {chapter.topics.length} topics. Filter by difficulty, solve topic-wise MCQs, and review detailed solutions.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><BookOpen className="w-4 h-4" />{chapter.topics.length} Topics</span>
                <span className="flex items-center gap-1"><Target className="w-4 h-4" />{totalQ} Questions</span>
              </div>
            </div>
          </div>
        </section>

        {/* Difficulty filter */}
        <section className="mx-auto max-w-6xl px-4 py-8">
          <div className="flex items-center gap-2 mb-8 flex-wrap">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <button
              onClick={() => setDiffFilter(null)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${!diffFilter ? 'bg-primary text-primary-foreground' : 'bg-card border border-border text-muted-foreground hover:text-foreground'}`}
            >
              All Levels
            </button>
            {DIFF_ORDER.map(d => (
              <button
                key={d}
                onClick={() => setDiffFilter(d)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors capitalize ${diffFilter === d ? 'bg-primary text-primary-foreground' : 'bg-card border border-border text-muted-foreground hover:text-foreground'}`}
              >
                {d}
              </button>
            ))}
          </div>

          {/* Topics */}
          <div className="space-y-6">
            {chapter.topics.map((topic, tIdx) => {
              const visibleDiffs = diffFilter ? [diffFilter] : DIFF_ORDER;
              const totalTopicQ = visibleDiffs.reduce((s, d) => s + topic[d].length, 0);
              if (totalTopicQ === 0) return null;

              return (
                <motion.div key={topic.slug} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: tIdx * 0.05 }}>
                  <div className="rounded-xl border border-border bg-card/50 p-5">
                    <h2 className="font-display font-bold text-lg text-foreground mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-primary" />
                      {topic.name}
                      <span className="text-xs text-muted-foreground font-normal">({totalTopicQ} Qs)</span>
                    </h2>
                    <div className="space-y-2">
                      {visibleDiffs.map(diff => {
                        const qs = topic[diff];
                        if (qs.length === 0) return null;
                        const colors = DIFF_COLORS[diff];
                        return (
                          <div key={diff}>
                            <h3 className={`text-xs font-semibold uppercase tracking-wider ${colors.text} mb-2`}>{diff} ({qs.length})</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                              {qs.map((q, qIdx) => {
                                const qSlug = getPracticeSlugByParams(bank.slug, chapter.slug, topic.slug, diff, qIdx + 1);
                                return (
                                  <Link
                                    key={qIdx}
                                    to={`/${qSlug ?? ''}`}
                                    className={`flex items-center gap-2 rounded-lg border ${colors.border} ${colors.bg} px-3 py-2 hover:bg-opacity-20 transition-colors group`}
                                  >
                                    <span className={`text-[10px] font-bold ${colors.text}`}>Q{qIdx + 1}</span>
                                    <span className="text-xs text-foreground line-clamp-1 flex-1">{q.q}</span>
                                    <ArrowRight className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Related chapters */}
        <section className="mx-auto max-w-6xl px-4 pb-12">
          <h2 className="font-display font-bold text-lg text-foreground mb-4">More {subj} Chapters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {bank.chapters.filter(c => c.slug !== chapter.slug).slice(0, 6).map(ch => (
              <Link
                key={ch.slug}
                to={`/jee-practice-${bank.slug}-${ch.slug}`}
                className="flex items-center gap-3 rounded-xl border border-border bg-card/50 p-4 hover:border-primary/40 transition-colors"
              >
                <BookOpen className="w-4 h-4 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">{ch.name}</p>
                  <p className="text-xs text-muted-foreground">{getChapterQuestionCount(ch)} Qs</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-4xl px-4 pb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10 p-8 text-center">
            <h2 className="font-display font-bold text-xl text-foreground mb-2">Need Help with {chapter.name}?</h2>
            <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">Get 1-on-1 doubt sessions and personalised practice analysis with our <Link to={`/jee-${bank.slug}-coaching`} className="text-primary font-semibold hover:underline">JEE {subj} coaching mentors</Link>.</p>
            <button onClick={openDemoModal} className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors">
              Book Free Demo Class <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </section>

        {/* Cross-link cluster: subject coaching + PYQ + tools */}
        <section className="mx-auto max-w-5xl px-4 pb-16">
          <h2 className="font-display font-bold text-base text-foreground mb-4">Master {chapter.name} — Coaching, PYQs & Tools</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { to: `/jee-${bank.slug}-coaching`, label: `JEE ${subj} 1-on-1 Coaching` },
              { to: '/jee-coaching', label: 'JEE Complete Coaching Program' },
              { to: '/jee-pyq', label: `JEE ${subj} Previous Year Questions` },
              { to: '/jee-practice', label: 'All JEE Practice Chapters' },
              { to: '/jee-rank-predictor', label: 'Free JEE Rank Predictor' },
              { to: '/study-plan', label: 'Free JEE Study Plan Generator' },
              { to: '/mentors', label: `Meet Our IIT-Alumni ${subj} Mentors` },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-4 py-2.5 rounded-full border border-border bg-card/50 text-foreground/80 text-xs hover:border-primary/40 hover:text-foreground transition-colors flex items-center gap-1.5"
              >
                <ArrowRight className="w-3 h-3 text-primary/60" /> {l.label}
              </Link>
            ))}
          </div>
        </section>

        <PageFooter extra={`JEE ${subj} Practice — ${chapter.name} — ${totalQ} Questions.`} />
      </main>
    </>
  );
};

export default JEEPracticeChapterHub;
