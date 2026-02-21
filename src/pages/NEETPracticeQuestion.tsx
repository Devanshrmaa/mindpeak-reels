import { useLocation, Navigate, Link } from 'react-router-dom';
import { useEffect, useState, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, BookOpen, Clock, Target, ChevronLeft, ChevronRight, ChevronDown, Eye, EyeOff, Zap, Award, List } from 'lucide-react';
import { Navbar } from '@/components/sections/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { useDemoModal } from '@/components/DemoBookingModal';
import { PageFooter } from '@/components/PageFooter';
import ContinueTestModal from '@/components/ContinueTestModal';
import { useQuestionGate } from '@/hooks/useQuestionGate';
import {
  buildAllNEETPracticeSlugs,
  parseNEETPracticeSlug,
  getNEETPracticeQuestion,
  neetSubjectBanks,
  getNEETChapter,
  getNEETChapterQuestionCount,
  type Difficulty,
} from '@/data/neet-practice';

/* ── label helpers ── */
const difficultyLabel: Record<Difficulty, string> = {
  easy: 'Easy',
  medium: 'Medium',
  hard: 'Hard',
};

/**
 * Deterministic shuffle for 4 options based on a string seed.
 */
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

const difficultyColor: Record<Difficulty, string> = {
  easy: 'text-green-400 bg-green-500/10 border-green-500/30',
  medium: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30',
  hard: 'text-red-400 bg-red-500/10 border-red-500/30',
};

/* ── build slug list once (used by App.tsx for routing) ── */
const allSlugs = buildAllNEETPracticeSlugs();
export const NEET_PRACTICE_SLUGS = allSlugs.map((s) => s.slug);

/* ── Page Component ── */
const NEETPracticeQuestion = () => {
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

  const params = parseNEETPracticeSlug(slug);
  const question = params ? getNEETPracticeQuestion(params) : null;

  /* Deterministic option shuffle */
  const { shuffledOptions, shuffledAnswer } = useMemo(() => {
    if (!question) return { shuffledOptions: [] as string[], shuffledAnswer: -1 };
    const perm = seededShuffle(slug);
    const sOpts = perm.map((origIdx) => question.o[origIdx]);
    const sAns = perm.indexOf(question.a);
    return { shuffledOptions: sOpts, shuffledAnswer: sAns };
  }, [slug, question]);

  if (!params || !question) return <Navigate to="/" replace />;

  const bank = neetSubjectBanks.find((b) => b.slug === params.subject)!;
  const chapter = getNEETChapter(params.subject, params.chapter);
  const topicObj = chapter?.topics.find((t) => t.slug === params.topic);
  const topicName = topicObj?.name ?? params.topic;
  const chapterName = chapter?.name ?? params.chapter;
  const subj = bank.subject;
  const diff = difficultyLabel[params.difficulty];

  /* ── Question Gate (free first 5, then require form) ── */
  const { isGated, onUnlock } = useQuestionGate(params.questionIndex);
  const testName = `NEET ${subj} — ${chapterName} — ${topicName} (${diff})`;

  /* navigation slugs */
  const topicQuestions = topicObj?.[params.difficulty] ?? [];
  const prevSlug = params.questionIndex > 1
    ? `neet-${params.subject}-${params.chapter}-${params.topic}-${params.difficulty}-q${params.questionIndex - 1}`
    : null;
  const nextSlug = params.questionIndex < topicQuestions.length
    ? `neet-${params.subject}-${params.chapter}-${params.topic}-${params.difficulty}-q${params.questionIndex + 1}`
    : null;

  const title = `NEET ${subj} — ${topicName} (${diff}) Q${params.questionIndex} | MindPeak`;
  const description = `Practice NEET ${subj} ${diff} level question on ${topicName} (${chapterName}). Attempt the MCQ, check the answer & read the step-by-step solution. Free NEET prep by MindPeak.`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Quiz',
      name: `NEET ${subj} — ${topicName} (${diff}) Q${params.questionIndex}`,
      educationalLevel: params.difficulty === 'easy' ? 'Beginner' : params.difficulty === 'medium' ? 'Intermediate' : 'Advanced',
      about: { '@type': 'Thing', name: `NEET ${subj} — ${topicName}` },
      provider: { '@type': 'Organization', name: 'MindPeak Institute', url: 'https://mindpeakinstitute.com' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mindpeakinstitute.com' },
        { '@type': 'ListItem', position: 2, name: 'NEET Practice', item: 'https://mindpeakinstitute.com/neet-practice' },
        { '@type': 'ListItem', position: 3, name: chapterName, item: 'https://mindpeakinstitute.com/neet-practice' },
        { '@type': 'ListItem', position: 4, name: `${topicName} ${diff} Q${params.questionIndex}`, item: `https://mindpeakinstitute.com/${slug}` },
      ],
    },
  ];

  const isAnswered = selectedOption !== null;
  const isCorrect = selectedOption === shuffledAnswer;

  /* sibling topics in same chapter for related links */
  const siblingTopics = chapter?.topics.filter((t) => t.slug !== params.topic).slice(0, 4) ?? [];

  return (
    <>
      <SEOHead title={title} description={description} jsonLd={jsonLd} />
      <Navbar />
      <main className="bg-background pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-green-500/5 via-background to-background py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm text-muted-foreground flex items-center gap-1 flex-wrap">
              <Link to="/" className="hover:text-green-500 transition-colors">Home</Link>
              <span>/</span>
              <Link to="/neet-practice" className="hover:text-green-500 transition-colors">NEET Practice</Link>
              <span>/</span>
              <span className="text-muted-foreground">{chapterName}</span>
              <span>/</span>
              <span className="text-foreground">{topicName} ({diff} Q{params.questionIndex})</span>
            </nav>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{bank.icon}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${difficultyColor[params.difficulty]}`}>
                  {diff}
                </span>
              </div>
              <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-3">
                {chapterName} — <span className="text-green-500">{topicName}</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                NEET {subj} · {diff} · Question {params.questionIndex} of {topicQuestions.length}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="mx-auto max-w-4xl px-4 py-12 space-y-12">
          {/* ── MCQ Card ── */}
          <motion.div ref={questionRef} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-border bg-card/50 p-6 sm:p-8 scroll-mt-4">
            <div className="flex items-start justify-between gap-4 mb-6">
              <h2 className="font-display font-bold text-xl text-foreground flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-green-500 flex-shrink-0" /> Question {params.questionIndex}
              </h2>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="w-4 h-4" />
                {params.difficulty === 'easy' ? '2-3 min' : params.difficulty === 'medium' ? '4-6 min' : '8-12 min'}
              </div>
            </div>

            <p className="text-foreground text-lg font-medium leading-relaxed mb-8">
              {question.q}
            </p>

            {/* Options */}
            <div className="space-y-3 mb-6">
              {shuffledOptions.map((option, idx) => {
                let optionClass = 'border-border hover:border-green-500/50 cursor-pointer';
                if (isAnswered) {
                  if (idx === shuffledAnswer) {
                    optionClass = 'border-green-500 bg-green-500/10';
                  } else if (idx === selectedOption && !isCorrect) {
                    optionClass = 'border-red-500 bg-red-500/10';
                  } else {
                    optionClass = 'border-border opacity-60';
                  }
                } else if (idx === selectedOption) {
                  optionClass = 'border-green-500 bg-green-500/5';
                }
                return (
                  <button
                    key={idx}
                    onClick={() => !isAnswered && setSelectedOption(idx)}
                    disabled={isAnswered}
                    className={`w-full text-left flex items-start gap-4 rounded-lg border p-4 transition-all ${optionClass}`}
                  >
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-secondary/50 text-sm font-semibold text-foreground">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-foreground text-sm sm:text-base leading-relaxed pt-1">
                      {option}
                    </span>
                    {isAnswered && idx === shuffledAnswer && (
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 ml-auto mt-1" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Result */}
            {isAnswered && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4">
                <div className={`rounded-lg p-4 ${isCorrect ? 'bg-green-500/10 border border-green-500/30' : 'bg-red-500/10 border border-red-500/30'}`}>
                  <p className={`font-semibold text-sm ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                    {isCorrect ? '✓ Correct!' : `✗ Incorrect — The correct answer is ${String.fromCharCode(65 + shuffledAnswer)}`}
                  </p>
                </div>
              </motion.div>
            )}

            {/* ── Solution ── */}
            {isAnswered && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6">
                <button
                  onClick={() => setShowSolution(!showSolution)}
                  className="flex items-center gap-2 text-green-500 font-semibold text-sm mb-3"
                >
                  {showSolution ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  {showSolution ? 'Hide Solution' : 'Show Solution'}
                </button>
                {showSolution && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                    <div className="rounded-lg bg-secondary/20 p-4">
                      <h3 className="font-display font-bold text-foreground mb-2">Solution</h3>
                      <p className="text-muted-foreground leading-relaxed">{question.s}</p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* ── Prev / Next Navigation ── */}
            <div className="flex items-center justify-between mt-8 pt-5 border-t border-border">
              {prevSlug ? (
                <Link to={`/${prevSlug}`} className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-green-500 transition-colors">
                  <ChevronLeft className="w-4 h-4" /> Q{params.questionIndex - 1}
                </Link>
              ) : <div />}
              <span className="text-xs text-muted-foreground">{params.questionIndex} / {topicQuestions.length}</span>
              {nextSlug ? (
                <Link to={`/${nextSlug}`} className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-green-500 transition-colors">
                  Q{params.questionIndex + 1} <ChevronRight className="w-4 h-4" />
                </Link>
              ) : <div />}
            </div>
          </motion.div>

          {/* ── Question Meta ── */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-border bg-card/50 p-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 rounded-lg bg-secondary/30 p-3">
                <Target className="w-5 h-5 text-green-500" />
                <div>
                  <p className="text-xs text-muted-foreground">Chapter</p>
                  <p className="text-sm font-medium text-foreground">{chapterName}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-secondary/30 p-3">
                <Target className="w-5 h-5 text-green-500" />
                <div>
                  <p className="text-xs text-muted-foreground">Topic</p>
                  <p className="text-sm font-medium text-foreground">{topicName}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-secondary/30 p-3">
                <Target className="w-5 h-5 text-green-500" />
                <div>
                  <p className="text-xs text-muted-foreground">Difficulty</p>
                  <p className="text-sm font-medium text-foreground">{diff}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Chapter Browser ── */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-border bg-card/50 overflow-hidden">
            <button
              onClick={() => { setShowChapterBrowser(!showChapterBrowser); setBrowserExpandedChapter(null); }}
              className="w-full flex items-center justify-between px-5 py-4 hover:bg-secondary/20 transition-colors"
            >
              <div className="flex items-center gap-3">
                <List className="w-5 h-5 text-green-500" />
                <div className="text-left">
                  <p className="font-display font-semibold text-foreground text-sm sm:text-base">Choose a Different Chapter</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{bank.subject} — {bank.chapters.length} chapters available</p>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${showChapterBrowser ? 'rotate-180' : ''}`} />
            </button>

            {showChapterBrowser && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="border-t border-border">
                <div className="p-4 space-y-2 max-h-[60vh] overflow-y-auto">
                  {bank.chapters.map((ch) => {
                    const isCurrent = ch.slug === params.chapter;
                    const isExp = browserExpandedChapter === ch.slug;
                    const qCount = getNEETChapterQuestionCount(ch);
                    return (
                      <div key={ch.slug} className={`rounded-lg border overflow-hidden ${isCurrent ? 'border-green-500/50 bg-green-500/5' : 'border-border/50'}`}>
                        <button
                          onClick={() => setBrowserExpandedChapter(isExp ? null : ch.slug)}
                          className="w-full flex items-center justify-between px-4 py-3 hover:bg-secondary/20 transition-colors text-left"
                        >
                          <div className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-medium text-foreground flex items-center gap-2">
                                {ch.name}
                                {isCurrent && <span className="text-[10px] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded-full">Current</span>}
                              </p>
                              <p className="text-xs text-muted-foreground">{ch.topics.length} topics · {qCount} Qs</p>
                            </div>
                          </div>
                          <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${isExp ? 'rotate-180' : ''}`} />
                        </button>
                        {isExp && (
                          <div className="border-t border-border/50 p-3 space-y-2">
                            {ch.topics.map((t) => {
                              const counts = { easy: t.easy.length, medium: t.medium.length, hard: t.hard.length };
                              return (
                                <div key={t.slug} className="rounded-md bg-secondary/10 p-3">
                                  <p className="text-xs font-medium text-foreground mb-2">{t.name}</p>
                                  <div className="flex flex-wrap gap-1.5">
                                    {counts.easy > 0 && (
                                      <Link to={`/neet-${bank.slug}-${ch.slug}-${t.slug}-easy-q1`} className="inline-flex items-center gap-1 px-2 py-1 rounded border text-[11px] font-medium bg-green-500/10 border-green-500/30 text-green-400 hover:scale-105 transition-transform">
                                        <Zap className="w-3 h-3" /> Easy ({counts.easy})
                                      </Link>
                                    )}
                                    {counts.medium > 0 && (
                                      <Link to={`/neet-${bank.slug}-${ch.slug}-${t.slug}-medium-q1`} className="inline-flex items-center gap-1 px-2 py-1 rounded border text-[11px] font-medium bg-yellow-500/10 border-yellow-500/30 text-yellow-400 hover:scale-105 transition-transform">
                                        <Target className="w-3 h-3" /> Medium ({counts.medium})
                                      </Link>
                                    )}
                                    {counts.hard > 0 && (
                                      <Link to={`/neet-${bank.slug}-${ch.slug}-${t.slug}-hard-q1`} className="inline-flex items-center gap-1 px-2 py-1 rounded border text-[11px] font-medium bg-red-500/10 border-red-500/30 text-red-400 hover:scale-105 transition-transform">
                                        <Award className="w-3 h-3" /> Hard ({counts.hard})
                                      </Link>
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl bg-gradient-to-r from-green-500/10 via-green-500/5 to-transparent border border-green-500/20 p-8 text-center"
          >
            <h2 className="font-display font-bold text-xl text-foreground mb-3">
              Want Detailed Solutions with a Personal Mentor?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Get step-by-step solutions explained live in 1-on-1 sessions. Your MindPeak mentor will solve similar problems with you,
              identify your weak areas, and create a personalised practice plan.
            </p>
            <button
              onClick={openDemoModal}
              className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-green-700 transition-colors"
            >
              Book Free Demo Class <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Related Topics in Same Chapter */}
          {siblingTopics.length > 0 && (
            <div>
              <h3 className="font-display font-bold text-lg text-foreground mb-4">More from {chapterName}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {siblingTopics.map((t) => (
                  <Link
                    key={t.slug}
                    to={`/neet-${params.subject}-${params.chapter}-${t.slug}-easy-q1`}
                    className="rounded-lg border border-border bg-card/50 p-4 hover:border-green-500/50 transition-colors"
                  >
                    <p className="text-sm font-medium text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {t.easy.length + t.medium.length + t.hard.length} questions · Easy / Medium / Hard
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Cross-subject Practice */}
          <div>
            <h3 className="font-display font-bold text-lg text-foreground mb-4">NEET Practice — All Subjects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {neetSubjectBanks.map((b) => (
                <div key={b.slug} className="rounded-xl border border-border bg-card/50 p-4">
                  <h4 className="font-display font-semibold text-foreground text-sm mb-3 flex items-center gap-2">
                    <span>{b.icon}</span> {b.subject}
                    {b.slug === params.subject && <span className="text-[10px] bg-green-500/10 text-green-400 px-1.5 py-0.5 rounded-full">Current</span>}
                  </h4>
                  <ul className="space-y-1.5">
                    {b.chapters.slice(0, 5).map((ch) => {
                      const firstTopic = ch.topics[0];
                      if (!firstTopic) return null;
                      return (
                        <li key={ch.slug}>
                          <Link
                            to={`/neet-${b.slug}-${ch.slug}-${firstTopic.slug}-easy-q1`}
                            className="text-xs text-muted-foreground hover:text-green-500 transition-colors"
                          >
                            {ch.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg text-foreground mb-4">NEET {subj} Resources</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'NEET Coaching', to: '/neet-coaching' },
                { label: 'NEET Biology Coaching', to: '/neet-biology-coaching' },
                { label: 'NEET Physics Coaching', to: '/neet-physics-coaching' },
                { label: 'NEET Chemistry Coaching', to: '/neet-chemistry-coaching' },
                { label: 'NEET Practice Hub', to: '/neet-practice' },
                { label: 'Free Trial', to: '/free-trial' },
                { label: 'All Courses', to: '/courses' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-3 py-1.5 rounded-lg bg-card border border-border text-xs text-muted-foreground hover:text-green-500 hover:border-green-500/40 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <PageFooter extra={`NEET ${subj} Practice Questions — ${chapterName}.`} />
      </main>

      {/* Gate modal — shown for Q6+ until user submits form */}
      <ContinueTestModal isOpen={isGated} testName={testName} onSuccess={onUnlock} />
    </>
  );
};

export default NEETPracticeQuestion;
