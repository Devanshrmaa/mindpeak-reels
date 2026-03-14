"use client";

import { useEffect, useState, useMemo } from 'react';
import { Link } from '@/components/RouterLink';
import { usePathname } from 'next/navigation';
import { Navigate } from '@/components/Navigate';
import { CURRENT_EXAM_YEAR } from '@/lib/examYears';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { PageFooter } from '@/components/PageFooter';
import { FormulaDownloadModal } from '@/components/FormulaDownloadModal';
import { buildFAQSchemaFromQA } from '@/components/PageFAQ';
import { RelatedPages, getRelatedLinksForExam } from '@/components/RelatedPages';
import {
  Download, BookOpen, CheckCircle, ChevronDown,
  FileText, Lock, Search, Filter, Zap, Star, Target,
  TrendingUp, Lightbulb, ArrowUp, Hash,
} from 'lucide-react';
import { getFormulaSheet, FORMULA_SLUGS as DATA_SLUGS, type FrequencyTag, type Formula, type FormulaChapter } from '@/data/formulaSheetData';

export { FORMULA_SLUGS } from '@/data/formulaSheetData';

/* ═══════════════════════════════════════════════════════════════
   FormulaSheet — 10x expanded, interactive formula sheet pages
   Features: search, filter by frequency, chapter nav, pro tips,
   exam stats, formula counter
   ═══════════════════════════════════════════════════════════════ */

const freqConfig: Record<FrequencyTag, { label: string; color: string; icon: typeof Zap; bg: string }> = {
  'must-know': { label: 'Must Know', color: 'text-red-400', icon: Zap, bg: 'bg-red-500/10 border-red-500/20' },
  'high': { label: 'High Freq', color: 'text-amber-400', icon: Star, bg: 'bg-amber-500/10 border-amber-500/20' },
  'medium': { label: 'Medium', color: 'text-blue-400', icon: Target, bg: 'bg-blue-500/10 border-blue-500/20' },
  'low': { label: 'Low Freq', color: 'text-muted-foreground', icon: Hash, bg: 'bg-muted/50 border-border' },
};

const FormulaSheet = () => {
  const pathname = usePathname();
  const slug = pathname.replace('/', '');
  const data = getFormulaSheet(slug);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<FrequencyTag | 'all'>('all');
  const [activeChapter, setActiveChapter] = useState<number | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const faqJsonLd = data ? buildFAQSchemaFromQA(data.faqs) : null;

  // Filter formulas
  const filteredChapters = useMemo(() => {
    if (!data) return [];
    const q = searchQuery.toLowerCase().trim();
    return data.chapters.map(ch => {
      const filtered = ch.formulas.filter(f => {
        const matchesSearch = !q || f.name.toLowerCase().includes(q) || f.expression.toLowerCase().includes(q) || (f.note?.toLowerCase().includes(q) ?? false);
        const matchesFilter = activeFilter === 'all' || f.freq === activeFilter;
        return matchesSearch && matchesFilter;
      });
      return { ...ch, formulas: filtered };
    }).filter(ch => ch.formulas.length > 0);
  }, [data, searchQuery, activeFilter]);

  const visibleCount = filteredChapters.reduce((s, ch) => s + ch.formulas.length, 0);

  // Count by frequency
  const freqCounts = useMemo(() => {
    const counts: Record<string, number> = { 'must-know': 0, high: 0, medium: 0, low: 0 };
    if (data) data.chapters.forEach(ch => ch.formulas.forEach(f => { counts[f.freq] = (counts[f.freq] || 0) + 1; }));
    return counts;
  }, [data]);

  if (!data) return <Navigate to="/" replace />;


  return (
    <>
      <SEOHead title={data.title} description={data.description} jsonLd={faqJsonLd ? [faqJsonLd] : undefined} />
      <Navbar />

      <main className="bg-background min-h-screen pt-20 sm:pt-24 overflow-x-hidden">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <ol className="flex items-center gap-2 text-xs text-muted-foreground flex-wrap">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <span>/</span>
            <li><Link to={data.exam === 'JEE' ? '/jee-coaching' : '/neet-coaching'} className="hover:text-primary transition-colors">{data.exam} Coaching</Link></li>
            <span>/</span>
            <li className="text-foreground">{data.subject} Formula Sheet</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <FileText className="w-4 h-4 text-primary" />
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">Free Download</span>
            </div>
            <h1 className="font-display font-black text-foreground text-3xl sm:text-4xl md:text-5xl leading-tight mb-4">
              {data.heroHeading}{' '}
              <span className="text-gradient-gold">{data.heroHighlight}</span>{' '}
              {CURRENT_EXAM_YEAR}
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-6">
              {data.heroParagraph}
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-card/40">
                <Hash className="w-4 h-4 text-primary" />
                <span className="text-foreground font-bold text-lg">{data.totalFormulas}+</span>
                <span className="text-muted-foreground text-xs">Formulas</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-card/40">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-foreground font-bold text-lg">{data.chapters.length}</span>
                <span className="text-muted-foreground text-xs">Chapters</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-red-500/20 bg-red-500/5">
                <Zap className="w-4 h-4 text-red-400" />
                <span className="text-foreground font-bold text-lg">{freqCounts['must-know']}</span>
                <span className="text-muted-foreground text-xs">Must-Know</span>
              </div>
            </div>
          </div>
        </section>

        {/* Search + Filter Bar */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-6 sticky top-16 sm:top-20 z-30 py-3 bg-background/80 backdrop-blur-lg border-b border-border/50">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder={`Search ${data.totalFormulas}+ formulas...`}
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-card/60 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground text-xs">
                  ✕
                </button>
              )}
            </div>

            {/* Frequency Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition ${activeFilter === 'all' ? 'bg-primary text-primary-foreground' : 'bg-card/60 border border-border text-muted-foreground hover:text-foreground'}`}
              >
                All ({data.totalFormulas})
              </button>
              {(['must-know', 'high', 'medium'] as FrequencyTag[]).map(tag => {
                const cfg = freqConfig[tag];
                return (
                  <button
                    key={tag}
                    onClick={() => setActiveFilter(activeFilter === tag ? 'all' : tag)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition border ${activeFilter === tag ? cfg.bg + ' ' + cfg.color : 'bg-card/60 border-border text-muted-foreground hover:text-foreground'}`}
                  >
                    {cfg.label} ({freqCounts[tag] || 0})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results indicator */}
          {(searchQuery || activeFilter !== 'all') && (
            <p className="text-xs text-muted-foreground mt-2">
              Showing {visibleCount} of {data.totalFormulas} formulas
              {searchQuery && <> matching "<span className="text-primary">{searchQuery}</span>"</>}
            </p>
          )}
        </section>

        {/* Chapter Quick Nav */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-8">
          <div className="flex flex-wrap gap-2">
            {data.chapters.map((ch, i) => (
              <a
                key={i}
                href={`#chapter-${i}`}
                onClick={() => setActiveChapter(i)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition hover:border-primary/40 hover:text-primary ${activeChapter === i ? 'border-primary/40 text-primary bg-primary/5' : 'border-border text-muted-foreground'}`}
              >
                {ch.name}
              </a>
            ))}
          </div>
        </section>

        {/* Formula Grid */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16 space-y-12">
          {filteredChapters.map((ch, ci) => {
            const originalIndex = data.chapters.findIndex(c => c.name === ch.name);
            return (
              <motion.div
                key={ch.name}
                id={`chapter-${originalIndex}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.05 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-primary" />
                  </div>
                  <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl">
                    {ch.name}
                  </h2>
                  <span className="text-xs text-muted-foreground bg-card/60 px-2 py-1 rounded-lg border border-border">
                    {ch.formulas.length} formulas
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {ch.formulas.map((f, fi) => {
                    const cfg = freqConfig[f.freq];
                    const Icon = cfg.icon;
                    return (
                      <div
                        key={fi}
                        className={`group relative p-4 rounded-xl border transition-all hover:shadow-md hover:border-primary/20 ${cfg.bg}`}
                      >
                        {/* Frequency badge */}
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-foreground font-semibold text-sm leading-tight">{f.name}</p>
                          <span className={`flex items-center gap-1 text-[10px] font-medium ${cfg.color}`}>
                            <Icon className="w-3 h-3" />
                            {cfg.label}
                          </span>
                        </div>

                        {/* Formula expression */}
                        <p className="text-primary font-mono text-sm leading-relaxed select-all">{f.expression}</p>

                        {/* Note */}
                        {f.note && (
                          <p className="text-muted-foreground text-xs mt-2 flex items-start gap-1">
                            <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0 text-amber-500/60" />
                            {f.note}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}

          {filteredChapters.length === 0 && (
            <div className="text-center py-16">
              <Search className="w-10 h-10 text-muted-foreground mx-auto mb-3 opacity-50" />
              <p className="text-muted-foreground">No formulas match your search. Try different keywords.</p>
              <button onClick={() => { setSearchQuery(''); setActiveFilter('all'); }} className="mt-3 text-primary text-sm hover:underline">
                Clear filters
              </button>
            </div>
          )}
        </section>

        {/* Pro Tips */}
        {data.proTips && data.proTips.length > 0 && (
          <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
            <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-transparent p-6 sm:p-8">
              <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl mb-5 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-amber-400" />
                Pro Tips from Top Scorers
              </h2>
              <div className="space-y-3">
                {data.proTips.map((tip, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-amber-400 text-xs font-bold">{i + 1}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Exam Frequency Breakdown */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
          <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl text-center mb-6">
            Formula Priority Breakdown
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {(['must-know', 'high', 'medium', 'low'] as FrequencyTag[]).map(tag => {
              const cfg = freqConfig[tag];
              const Icon = cfg.icon;
              const count = freqCounts[tag] || 0;
              const pct = Math.round((count / data.totalFormulas) * 100);
              return (
                <button
                  key={tag}
                  onClick={() => setActiveFilter(activeFilter === tag ? 'all' : tag)}
                  className={`p-4 rounded-xl border text-center transition hover:shadow-md ${cfg.bg}`}
                >
                  <Icon className={`w-5 h-5 mx-auto mb-2 ${cfg.color}`} />
                  <p className="text-foreground font-bold text-2xl">{count}</p>
                  <p className={`text-xs font-medium ${cfg.color}`}>{cfg.label}</p>
                  <div className="mt-2 w-full bg-background/50 rounded-full h-1.5">
                    <div className={`h-full rounded-full ${tag === 'must-know' ? 'bg-red-400' : tag === 'high' ? 'bg-amber-400' : tag === 'medium' ? 'bg-blue-400' : 'bg-muted-foreground'}`} style={{ width: `${pct}%` }} />
                  </div>
                  <p className="text-muted-foreground text-[10px] mt-1">{pct}% of total</p>
                </button>
              );
            })}
          </div>
        </section>

        {/* Download CTA */}
        <section className="max-w-xl mx-auto px-4 sm:px-6 mb-16">
          <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/[0.02] p-6 sm:p-8 text-center">
            <Lock className="w-8 h-8 text-primary mx-auto mb-3" />
            <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl mb-2">
              Download Complete PDF + Get Expert Guidance
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              Get the full {data.totalFormulas}+ formula sheet PDF with derivation tips + a free 1-on-1 demo class with an IIT/AIIMS mentor.
            </p>
            <button
              onClick={() => setDownloadModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-display font-bold hover:brightness-110 transition"
            >
              <Download className="w-5 h-5" />
              Get PDF + Book Free Demo
            </button>
          </div>
        </section>

        {/* Download Modal */}
        <FormulaDownloadModal
          isOpen={downloadModalOpen}
          onClose={() => setDownloadModalOpen(false)}
          formulaData={data}
        />

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 mb-16">
          <h2 className="font-display font-bold text-foreground text-2xl text-center mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {data.faqs.map((f, i) => (
              <div
                key={i}
                className={`rounded-xl border transition-all ${openFaq === i ? 'border-primary/30 bg-card/50' : 'border-border'}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-foreground">{f.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180 text-primary' : 'text-muted-foreground'}`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 text-muted-foreground text-sm leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* Related Pages */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
          <RelatedPages title="Related Resources" links={getRelatedLinksForExam(data.exam)} />
        </div>

        <PageFooter />

        {/* Back to Top */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:brightness-110 transition"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          )}
        </AnimatePresence>
      </main>
    </>
  );
};

export default FormulaSheet;
