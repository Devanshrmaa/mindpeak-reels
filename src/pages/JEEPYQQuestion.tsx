import { useLocation, Navigate, Link } from 'react-router-dom';
import { useEffect, useState, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle, ArrowRight, BookOpen, ChevronLeft, ChevronRight,
  ChevronDown, Eye, EyeOff, Calendar, FileText, List,
} from 'lucide-react';
import { Navbar } from '@/components/sections/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { useDemoModal } from '@/components/DemoBookingModal';
import { PageFooter } from '@/components/PageFooter';
import ContinueTestModal from '@/components/ContinueTestModal';
import { useQuestionGate } from '@/hooks/useQuestionGate';
import {
  buildAllPYQSlugs,
  parsePYQSlug,
  getPYQuestion,
  pyqSubjectBanks,
  getPYQChapter,
  getPYQChapterCount,
} from '@/data/pyq';

/* ── Deterministic option shuffle (same as practice page) ── */
function seededShuffle(seed: string): number[] {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = ((h << 5) - h + seed.charCodeAt(i)) | 0;
  }
  h = Math.abs(h);
  const arr = [0, 1, 2, 3];
  for (let i = 3; i > 0; i--) {
    const j = h % (i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
    h = Math.floor(h / (i + 1)) + (h % 7919);
  }
  return arr;
}

/* ── Build slug list once (used by App.tsx for routing) ── */
const allSlugs = buildAllPYQSlugs();
export const PYQ_SLUGS = allSlugs.map((s) => s.slug);

/* ── Page Component ── */
const JEEPYQQuestion = () => {
  const location = useLocation();
  const slug = location.pathname.replace(/^\//, '');
  const { openDemoModal } = useDemoModal();

  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showSolution, setShowSolution] = useState(false);
  const [showChapterBrowser, setShowChapterBrowser] = useState(false);
  const [browserExpandedChapter, setBrowserExpandedChapter] = useState<string | null>(null);
  const questionRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    setSelectedOption(null);
    setShowSolution(false);
    if (isFirstRender.current) {
      window.scrollTo(0, 0);
      isFirstRender.current = false;
    } else {
      questionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [slug]);

  const params = parsePYQSlug(slug);
  const question = params ? getPYQuestion(params) : null;

  /* Deterministic option shuffle — hook must run before conditional returns */
  const { shuffledOptions, shuffledAnswer } = useMemo(() => {
    if (!question) return { shuffledOptions: [] as string[], shuffledAnswer: -1 };
    const perm = seededShuffle(slug);
    const sOpts = perm.map((origIdx) => question.o[origIdx]);
    const sAns = perm.indexOf(question.a);
    return { shuffledOptions: sOpts, shuffledAnswer: sAns };
  }, [slug, question]);

  if (!params || !question) return <Navigate to="/" replace />;

  const bank = pyqSubjectBanks.find((b) => b.slug === params.subject)!;
  const chapter = getPYQChapter(params.subject, params.chapter);
  const chapterName = chapter?.name ?? params.chapter;
  const subj = bank.subject;
  const totalInChapter = chapter?.questions.length ?? 0;

  /* ── Question Gate (free first 5, then require form) ── */
  const { isGated, onUnlock } = useQuestionGate(params.questionIndex);
  const testName = `JEE PYQ — ${subj} — ${chapterName}`;

  /* navigation slugs */
  const prevSlug =
    params.questionIndex > 1
      ? `jee-pyq-${params.subject}-${params.chapter}-q${params.questionIndex - 1}`
      : null;
  const nextSlug =
    params.questionIndex < totalInChapter
      ? `jee-pyq-${params.subject}-${params.chapter}-q${params.questionIndex + 1}`
      : null;

  const title = `JEE ${subj} PYQ — ${chapterName} Q${params.questionIndex} (${question.year}) | MindPeak`;
  const description = `Solve JEE ${question.exam === 'advanced' ? 'Advanced' : 'Main'} ${question.year} (${question.shift}) ${subj} question on ${chapterName}. Attempt the MCQ, check the answer & read the solution. Free JEE PYQ practice by MindPeak.`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Quiz',
      name: `JEE ${subj} PYQ — ${chapterName} Q${params.questionIndex} (${question.year})`,
      educationalLevel: 'Advanced',
      about: { '@type': 'Thing', name: `JEE ${subj} — ${chapterName}` },
      provider: { '@type': 'Organization', name: 'MindPeak Institute', url: 'https://mindpeakinstitute.com' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mindpeakinstitute.com' },
        { '@type': 'ListItem', position: 2, name: 'JEE PYQ', item: 'https://mindpeakinstitute.com/jee-pyq' },
        { '@type': 'ListItem', position: 3, name: `${subj} — ${chapterName}`, item: `https://mindpeakinstitute.com/${slug}` },
      ],
    },
  ];

  const isAnswered = selectedOption !== null;
  const isCorrect = selectedOption === shuffledAnswer;

  return (
    <>
      <SEOHead title={title} description={description} jsonLd={jsonLd} />
      <Navbar />
      <main className="bg-background pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-orange-500/5 via-background to-background py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm text-muted-foreground flex items-center gap-1 flex-wrap">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link to="/jee-pyq" className="hover:text-primary transition-colors">JEE PYQ</Link>
              <span>/</span>
              <span className="text-foreground">{chapterName} · Q{params.questionIndex}</span>
            </nav>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="text-3xl">{bank.icon}</span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold border border-orange-500/30 bg-orange-500/10 text-orange-400">
                  JEE {question.exam === 'advanced' ? 'Advanced' : 'Main'} {question.year}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium border border-border bg-card/50 text-muted-foreground">
                  {question.shift}
                </span>
              </div>
              <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-3">
                {chapterName} — <span className="text-orange-400">PYQ</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                JEE {subj} · Previous Year Question {params.questionIndex} of {totalInChapter}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="mx-auto max-w-4xl px-4 py-12 space-y-12">
          {/* MCQ Card */}
          <motion.div
            ref={questionRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-border bg-card/50 p-6 sm:p-8 scroll-mt-4"
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <h2 className="font-display font-bold text-xl text-foreground flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-orange-400 flex-shrink-0" /> Question {params.questionIndex}
              </h2>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {question.year} · {question.shift}
              </div>
            </div>

            <p className="text-foreground text-lg font-medium leading-relaxed mb-8">{question.q}</p>

            {/* Options */}
            <div className="space-y-3 mb-6">
              {shuffledOptions.map((option, idx) => {
                let cls = 'border-border hover:border-orange-500/50 cursor-pointer';
                if (isAnswered) {
                  if (idx === shuffledAnswer) cls = 'border-green-500 bg-green-500/10';
                  else if (idx === selectedOption && !isCorrect) cls = 'border-red-500 bg-red-500/10';
                  else cls = 'border-border opacity-60';
                } else if (idx === selectedOption) {
                  cls = 'border-orange-500 bg-orange-500/5';
                }
                return (
                  <button
                    key={idx}
                    onClick={() => !isAnswered && setSelectedOption(idx)}
                    disabled={isAnswered}
                    className={`w-full text-left flex items-start gap-4 rounded-lg border p-4 transition-all ${cls}`}
                  >
                    <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full border border-current text-sm font-bold flex-shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-foreground">{option}</span>
                  </button>
                );
              })}
            </div>

            {/* Result feedback */}
            {isAnswered && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
                <div className={`flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold ${isCorrect ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                  <CheckCircle className="w-5 h-5" />
                  {isCorrect ? 'Correct!' : `Incorrect — Correct answer: ${String.fromCharCode(65 + shuffledAnswer)}`}
                </div>
              </motion.div>
            )}

            {/* Solution toggle */}
            {isAnswered && (
              <div className="mb-6">
                <button
                  onClick={() => setShowSolution(!showSolution)}
                  className="inline-flex items-center gap-2 text-sm font-medium text-orange-400 hover:underline"
                >
                  {showSolution ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  {showSolution ? 'Hide Solution' : 'Show Solution'}
                </button>
                {showSolution && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-3 rounded-lg bg-secondary/20 border border-border p-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">{question.s}</p>
                    <p className="mt-2 text-xs text-orange-400 font-medium">
                      <FileText className="inline w-3 h-3 mr-1" />
                      Source: JEE {question.exam === 'advanced' ? 'Advanced' : 'Main'} {question.year} — {question.shift}
                    </p>
                  </motion.div>
                )}
              </div>
            )}

            {/* Prev / Next inside card */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              {prevSlug ? (
                <Link to={`/${prevSlug}`} className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-orange-400 transition-colors">
                  <ChevronLeft className="w-4 h-4" /> Prev
                </Link>
              ) : <span />}
              <span className="text-xs text-muted-foreground font-medium">Q {params.questionIndex} / {totalInChapter}</span>
              {nextSlug ? (
                <Link to={`/${nextSlug}`} className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-orange-400 transition-colors">
                  Next <ChevronRight className="w-4 h-4" />
                </Link>
              ) : <span />}
            </div>
          </motion.div>

          {/* Chapter Browser */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-border bg-card/50 overflow-hidden">
            <button
              onClick={() => setShowChapterBrowser(!showChapterBrowser)}
              className="w-full flex items-center justify-between px-5 py-4 hover:bg-secondary/20 transition-colors text-left"
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <List className="w-4 h-4 text-orange-400" /> Choose a Different Chapter
              </div>
              <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${showChapterBrowser ? 'rotate-180' : ''}`} />
            </button>

            {showChapterBrowser && (
              <div className="border-t border-border p-4 space-y-2">
                {bank.chapters.map((ch) => {
                  const isExp = browserExpandedChapter === ch.slug;
                  const count = getPYQChapterCount(ch);
                  return (
                    <div key={ch.slug} className="rounded-lg border border-border/50 overflow-hidden">
                      <button
                        onClick={() => setBrowserExpandedChapter(isExp ? null : ch.slug)}
                        className="w-full flex items-center justify-between px-4 py-3 hover:bg-secondary/10 transition-colors text-left"
                      >
                        <div>
                          <p className="text-sm font-medium text-foreground">{ch.name}</p>
                          <p className="text-xs text-muted-foreground">{count} PYQs</p>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${isExp ? 'rotate-180' : ''}`} />
                      </button>
                      {isExp && (
                        <div className="border-t border-border/50 px-4 py-2 space-y-1">
                          {ch.questions.slice(0, 5).map((_, qi) => (
                            <Link
                              key={qi}
                              to={`/jee-pyq-${bank.slug}-${ch.slug}-q${qi + 1}`}
                              className="block text-xs text-muted-foreground hover:text-orange-400 transition-colors py-1"
                            >
                              Q{qi + 1} — {ch.questions[qi].q.slice(0, 60)}…
                            </Link>
                          ))}
                          {count > 5 && (
                            <Link
                              to={`/jee-pyq-${bank.slug}-${ch.slug}-q1`}
                              className="block text-xs text-orange-400 font-medium py-1"
                            >
                              View all {count} questions →
                            </Link>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-orange-500/20 bg-gradient-to-r from-orange-500/5 to-orange-500/10 p-8 text-center"
          >
            <h2 className="font-display font-bold text-xl text-foreground mb-2">
              Need Help with PYQ Patterns?
            </h2>
            <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">
              Get detailed PYQ analysis, chapter-wise weightage insights, and 1-on-1 doubt sessions with MindPeak's expert mentors.
            </p>
            <button
              onClick={openDemoModal}
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-orange-600 transition-colors"
            >
              Book Free Demo Class <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </section>

        <PageFooter extra={`JEE ${subj} PYQ — ${chapterName} — Question ${params.questionIndex}.`} />
      </main>

      {/* Gate modal — shown for Q6+ until user submits form */}
      <ContinueTestModal isOpen={isGated} testName={testName} onSuccess={onUnlock} />
    </>
  );
};

export default JEEPYQQuestion;
