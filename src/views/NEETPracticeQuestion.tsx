"use client";

import { usePathname } from 'next/navigation';
import { Navigate } from '@/components/Navigate';
import { Link } from '@/components/RouterLink';
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
  getNEETPracticeSlugByParams,
  type Difficulty,
} from '@/data/neet-practice';
import { PageFAQ, buildFAQSchema, type FAQItem } from '@/components/PageFAQ';
import { FeaturedSnippet } from '@/components/FeaturedSnippet';
import { buildNEETPracticeFAQs, buildTopicOverview, buildExamTips, buildConceptSummary, buildLearningResourceSchema, buildCommonMistakes, buildKeyFormulas, buildWhyItMatters, buildStudyStrategy } from '@/lib/questionPageSEO';
import { CommonMistakesBlock, KeyFormulasBlock, WhyItMattersBlock, StudyStrategyBlock, InternalLinkingMesh, buildNEETPracticeCrossLinks } from '@/components/QuestionContentBlocks';

/* ── label helpers ── */
const difficultyLabel: Record<Difficulty, string> = {
  easy: 'Easy',
  medium: 'Medium',
  hard: 'Hard',
};

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

const difficultyActiveStyle: Record<Difficulty, string> = {
  easy: 'text-white bg-green-500 border-green-500 shadow-lg shadow-green-500/25',
  medium: 'text-white bg-yellow-500 border-yellow-500 shadow-lg shadow-yellow-500/25',
  hard: 'text-white bg-red-500 border-red-500 shadow-lg shadow-red-500/25',
};

const difficultyInactiveStyle: Record<Difficulty, string> = {
  easy: 'text-green-400 bg-green-500/10 border-green-500/30 hover:bg-green-500/20',
  medium: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30 hover:bg-yellow-500/20',
  hard: 'text-red-400 bg-red-500/10 border-red-500/30 hover:bg-red-500/20',
};

const difficultyIcons: Record<Difficulty, typeof Zap> = {
  easy: Zap,
  medium: Target,
  hard: Award,
};

/* ── build slug list once (used by App.tsx for routing) ── */
const allSlugs = buildAllNEETPracticeSlugs();
export const NEET_PRACTICE_SLUGS = allSlugs.map((s) => s.slug);

/* ── Page Component ── */
const NEETPracticeQuestion = () => {
  const pathname = usePathname();
  const slug = pathname.replace(/^\//, '');
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

  const { shuffledOptions, shuffledAnswer } = useMemo(() => {
    if (!question) return { shuffledOptions: [] as string[], shuffledAnswer: -1 };
    const perm = seededShuffle(slug);
    const sOpts = perm.map((origIdx) => question.o[origIdx]);
    const sAns = perm.indexOf(question.a);
    return { shuffledOptions: sOpts, shuffledAnswer: sAns };
  }, [slug, question]);

  const bank = params ? neetSubjectBanks.find((b) => b.slug === params.subject) : undefined;
  if (!params || !question || !bank) return <Navigate to="/" replace />;

  const chapter = getNEETChapter(params.subject, params.chapter);
  const topicObj = chapter?.topics.find((t) => t.slug === params.topic);
  const topicName = topicObj?.name ?? params.topic;
  const chapterName = chapter?.name ?? params.chapter;
  const subj = bank.subject;
  const diff = difficultyLabel[params.difficulty];

  const { isGated, onUnlock } = useQuestionGate(params.questionIndex);
  const testName = `NEET ${subj} — ${chapterName} — ${topicName} (${diff})`;

  /* navigation slugs — use proper SEO slugs */
  const topicQuestions = topicObj?.[params.difficulty] ?? [];

  /* ── Dynamic SEO content ── */
  const faqItems: FAQItem[] = buildNEETPracticeFAQs(subj, chapterName, topicName, diff, topicQuestions.length);
  const topicOverview = buildTopicOverview('NEET', subj, chapterName, topicName, diff);
  const examTips = buildExamTips('NEET', subj, chapterName);
  const conceptSummary = buildConceptSummary('NEET', subj, chapterName, topicName, diff);
  const commonMistakes = buildCommonMistakes('NEET', subj, chapterName, topicName);
  const keyFormulas = buildKeyFormulas('NEET', subj, chapterName, topicName);
  const whyItMatters = buildWhyItMatters('NEET', subj, chapterName, topicName);
  const crossLinks = buildNEETPracticeCrossLinks(subj, params.subject, chapterName);
  const prevSlug = params.questionIndex > 1
    ? getNEETPracticeSlugByParams(params.subject, params.chapter, params.topic, params.difficulty, params.questionIndex - 1)
    : null;
  const nextSlug = params.questionIndex < topicQuestions.length
    ? getNEETPracticeSlugByParams(params.subject, params.chapter, params.topic, params.difficulty, params.questionIndex + 1)
    : null;

  const title = `NEET ${subj} MCQ: ${topicName} [${diff}] — Solve & Check Answer`;
  const description = `Solve this ${diff} NEET ${subj} MCQ on ${topicName}. Instant answer + step-by-step solution. 500+ free practice questions.`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Quiz',
      name: `NEET ${subj}: ${topicName} (${diff}) Q${params.questionIndex}`,
      educationalLevel: params.difficulty === 'easy' ? 'Beginner' : params.difficulty === 'medium' ? 'Intermediate' : 'Advanced',
      about: { '@type': 'Thing', name: `NEET ${subj} — ${topicName}` },
      provider: { '@type': 'Organization', name: 'MindPeak Institute', url: 'https://mindpeakinstitute.com' },
      hasPart: [{
        '@type': 'Question',
        eduQuestionType: 'Multiple choice',
        text: question.q,
        acceptedAnswer: { '@type': 'Answer', text: question.o[question.a] },
      }],
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
    buildFAQSchema(faqItems),
    buildLearningResourceSchema('NEET', subj, chapterName, topicName, slug, diff),
  ];

  const isAnswered = selectedOption !== null;
  const isCorrect = selectedOption === shuffledAnswer;
  const siblingTopics = chapter?.topics.filter((t) => t.slug !== params.topic).slice(0, 4) ?? [];

  return (
    <>
      <SEOHead title={title} description={description} jsonLd={jsonLd} />
      <Navbar />
      <main className="bg-background pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-green-500/5 via-background to-background py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4">
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
              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl">{bank.icon}</span>
                <div className="flex items-center gap-2 p-1 bg-secondary/30 rounded-xl border border-border">
                  {(['easy', 'medium', 'hard'] as const).map((d) => {
                    const isActive = d === params.difficulty;
                    const DiffIcon = difficultyIcons[d];
                    const targetSlug = getNEETPracticeSlugByParams(params.subject, params.chapter, params.topic, d, 1);
                    return targetSlug ? (
                      <Link
                        key={d}
                        to={`/${targetSlug}`}
                        className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold border transition-all ${
                          isActive ? difficultyActiveStyle[d] : difficultyInactiveStyle[d]
                        }`}
                      >
                        <DiffIcon className="w-4 h-4" />
                        {difficultyLabel[d]}
                      </Link>
                    ) : null;
                  })}
                </div>
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

        <section className="mx-auto max-w-4xl px-4 py-12 space-y-12">
          {/* MCQ Card */}
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

            <p className="text-foreground text-lg font-medium leading-relaxed mb-8">{question.q}</p>

            <div className="space-y-3 mb-6">
              {shuffledOptions.map((option, idx) => {
                let optionClass = 'border-border hover:border-green-500/50 cursor-pointer';
                if (isAnswered) {
                  if (idx === shuffledAnswer) optionClass = 'border-green-500 bg-green-500/10';
                  else if (idx === selectedOption && !isCorrect) optionClass = 'border-red-500 bg-red-500/10';
                  else optionClass = 'border-border opacity-60';
                } else if (idx === selectedOption) {
                  optionClass = 'border-green-500 bg-green-500/5';
                }
                return (
                  <button key={idx} onClick={() => !isAnswered && setSelectedOption(idx)} disabled={isAnswered} className={`w-full text-left flex items-start gap-4 rounded-lg border p-4 transition-all ${optionClass}`}>
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-secondary/50 text-sm font-semibold text-foreground">{String.fromCharCode(65 + idx)}</span>
                    <span className="text-foreground text-sm sm:text-base leading-relaxed pt-1">{option}</span>
                    {isAnswered && idx === shuffledAnswer && <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 ml-auto mt-1" />}
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4">
                <div className={`rounded-lg p-4 ${isCorrect ? 'bg-green-500/10 border border-green-500/30' : 'bg-red-500/10 border border-red-500/30'}`}>
                  <p className={`font-semibold text-sm ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                    {isCorrect ? '✓ Correct!' : `✗ Incorrect — The correct answer is ${String.fromCharCode(65 + shuffledAnswer)}`}
                  </p>
                </div>
              </motion.div>
            )}

            {isAnswered && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6">
                <button onClick={() => setShowSolution(!showSolution)} className="flex items-center gap-2 text-green-500 font-semibold text-sm mb-3">
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

          {/* Question Meta */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-border bg-card/50 p-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[{ label: 'Chapter', value: chapterName }, { label: 'Topic', value: topicName }, { label: 'Difficulty', value: diff }].map((item) => (
                <div key={item.label} className="flex items-center gap-3 rounded-lg bg-secondary/30 p-3">
                  <Target className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Chapter Browser */}
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
                        <button onClick={() => setBrowserExpandedChapter(isExp ? null : ch.slug)} className="w-full flex items-center justify-between px-4 py-3 hover:bg-secondary/20 transition-colors text-left">
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
                                  <div className="grid grid-cols-3 gap-2">
                                    {(['easy', 'medium', 'hard'] as const).map((d) => {
                                      const count = counts[d];
                                      if (count === 0) return <div key={d} />;
                                      const s = getNEETPracticeSlugByParams(bank.slug, ch.slug, t.slug, d, 1);
                                      const DIcon = difficultyIcons[d];
                                      return s ? (
                                        <Link key={d} to={`/${s}`} className={`flex flex-col items-center gap-1 px-3 py-2.5 rounded-lg border-2 text-sm font-semibold transition-all hover:scale-[1.03] ${difficultyColor[d]}`}>
                                          <DIcon className="w-4 h-4" />
                                          <span>{difficultyLabel[d]}</span>
                                          <span className="text-[10px] font-normal opacity-70">{count} Qs</span>
                                        </Link>
                                      ) : <div key={d} />;
                                    })}
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

          {/* ── Featured Snippet — Topic Overview ── */}
          <FeaturedSnippet
            question={`What is ${topicName} in NEET ${subj}?`}
            answer={topicOverview}
          />

          {/* ── Concept Summary — always-visible 150+ word block ── */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-border bg-card/50 p-6 sm:p-8">
            <h2 className="font-display font-bold text-lg text-foreground mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-green-500" /> {topicName} — Concept Overview
            </h2>
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              {conceptSummary.map((para, i) => <p key={i}>{para}</p>)}
            </div>
          </motion.div>

          {/* ── Exam Preparation Tips ── */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-border bg-card/50 p-6 sm:p-8">
            <h2 className="font-display font-bold text-lg text-foreground mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-green-500" /> NEET {subj} Tips — {chapterName}
            </h2>
            <ul className="space-y-3">
              {examTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Common Mistakes ── */}
          <CommonMistakesBlock chapterName={chapterName} mistakes={commonMistakes} />

          {/* ── Key Formulas ── */}
          <KeyFormulasBlock topicName={topicName} formulas={keyFormulas} formulaSheetLink={`/neet-${params.subject}-formula-sheet`} />

          {/* ── Why It Matters ── */}
          <WhyItMattersBlock topicName={topicName} paragraphs={whyItMatters} />

          {/* ── Cross-type Internal Links ── */}
          <InternalLinkingMesh links={crossLinks} heading={`Related ${subj} Resources`} />

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl bg-gradient-to-r from-green-500/10 via-green-500/5 to-transparent border border-green-500/20 p-8 text-center">
            <h2 className="font-display font-bold text-xl text-foreground mb-3">Want Detailed Solutions with a Personal Mentor?</h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">Get step-by-step solutions explained live in 1-on-1 sessions.</p>
            <button onClick={openDemoModal} className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-green-700 transition-colors">
              Book Free Demo Class <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Related Topics */}
          {siblingTopics.length > 0 && (
            <div>
              <h3 className="font-display font-bold text-lg text-foreground mb-4">More from {chapterName}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {siblingTopics.map((t) => {
                  const linkSlug = getNEETPracticeSlugByParams(params.subject, params.chapter, t.slug, 'easy', 1);
                  if (!linkSlug) return null;
                  return (
                    <Link key={t.slug} to={`/${linkSlug}`} className="rounded-lg border border-border bg-card/50 p-4 hover:border-green-500/50 transition-colors">
                      <p className="text-sm font-medium text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">{t.easy.length + t.medium.length + t.hard.length} questions</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Cross-subject */}
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
                      const linkSlug = getNEETPracticeSlugByParams(b.slug, ch.slug, firstTopic.slug, 'easy', 1);
                      if (!linkSlug) return null;
                      return (
                        <li key={ch.slug}>
                          <Link to={`/${linkSlug}`} className="text-xs text-muted-foreground hover:text-green-500 transition-colors">{ch.name}</Link>
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
                <Link key={link.to} to={link.to} className="px-3 py-1.5 rounded-lg bg-card border border-border text-xs text-muted-foreground hover:text-green-500 hover:border-green-500/40 transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ Section ── */}
        <PageFAQ items={faqItems} heading="NEET Practice" highlight="FAQ" />

        <PageFooter extra={`NEET ${subj} Practice Questions — ${chapterName}.`} />
      </main>

      <ContinueTestModal isOpen={isGated} testName={testName} onSuccess={onUnlock} />
    </>
  );
};

export default NEETPracticeQuestion;
