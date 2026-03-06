"use client";

import { usePathname } from 'next/navigation';
import { Navigate } from '@/components/Navigate';
import { Link } from '@/components/RouterLink';
import { useEffect, useState, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle, ArrowRight, BookOpen, ChevronLeft, ChevronRight,
  ChevronDown, Eye, EyeOff, Calendar, FileText, List, Target, Zap,
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
  getPYQSlugByParams,
} from '@/data/pyq';
import { PageFAQ, buildFAQSchema, type FAQItem } from '@/components/PageFAQ';
import { FeaturedSnippet } from '@/components/FeaturedSnippet';
import { buildJEEPYQFAQs, buildPYQOverview, buildExamTips, buildConceptSummary, buildLearningResourceSchema, buildCommonMistakes, buildKeyFormulas, buildWhyItMatters, buildStudyStrategy } from '@/lib/questionPageSEO';
import { CommonMistakesBlock, KeyFormulasBlock, WhyItMattersBlock, StudyStrategyBlock, InternalLinkingMesh, buildJEEPYQCrossLinks } from '@/components/QuestionContentBlocks';

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

  const bank = params ? pyqSubjectBanks.find((b) => b.slug === params.subject) : undefined;
  if (!params || !question || !bank) return <Navigate to="/" replace />;

  const chapter = getPYQChapter(params.subject, params.chapter);
  const chapterName = chapter?.name ?? params.chapter;
  const subj = bank.subject;
  const totalInChapter = chapter?.questions.length ?? 0;

  /* ── Question Gate (free first 4, then require form) ── */
  const { isGated, onUnlock } = useQuestionGate(params.questionIndex);
  const testName = `JEE PYQ — ${subj} — ${chapterName}`;

  /* ── Dynamic SEO content ── */
  const faqItems: FAQItem[] = buildJEEPYQFAQs(subj, chapterName, question.year, question.exam, totalInChapter);
  const pyqOverview = buildPYQOverview('JEE', subj, chapterName, question.year);
  const examTips = buildExamTips('JEE', subj, chapterName);
  const conceptSummary = buildConceptSummary('JEE', subj, chapterName, chapterName);
  const commonMistakes = buildCommonMistakes('JEE', subj, chapterName, chapterName);
  const keyFormulas = buildKeyFormulas('JEE', subj, chapterName, chapterName);
  const whyItMatters = buildWhyItMatters('JEE', subj, chapterName, chapterName);
  const crossLinks = buildJEEPYQCrossLinks(subj, params.subject, chapterName);
  const studyStrategy = buildStudyStrategy('JEE', subj, chapterName, chapterName);

  /* navigation slugs — use proper SEO slugs */
  const prevSlug = params.questionIndex > 1
    ? getPYQSlugByParams(params.subject, params.chapter, params.questionIndex - 1)
    : null;
  const nextSlug = params.questionIndex < totalInChapter
    ? getPYQSlugByParams(params.subject, params.chapter, params.questionIndex + 1)
    : null;

  const examType = question.exam === 'advanced' ? 'Advanced' : 'Main';
  const title = `JEE ${examType} ${question.year} ${subj} PYQ: ${chapterName} Q${params.questionIndex} — Solution`;
  const description = `Solve JEE ${examType} ${question.year} ${subj} PYQ on ${chapterName}. Instant answer + step-by-step solution. Practice 10+ years of JEE PYQs free.`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Quiz',
      name: `JEE ${examType} ${question.year} ${subj} PYQ: ${chapterName} Q${params.questionIndex}`,
      educationalLevel: 'Advanced',
      about: { '@type': 'Thing', name: `JEE ${subj} — ${chapterName}` },
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
        { '@type': 'ListItem', position: 2, name: 'JEE PYQ', item: 'https://mindpeakinstitute.com/jee-pyq' },
        { '@type': 'ListItem', position: 3, name: `${subj} — ${chapterName}`, item: `https://mindpeakinstitute.com/${slug}` },
      ],
    },
    buildFAQSchema(faqItems),
    buildLearningResourceSchema('JEE', subj, chapterName, chapterName, slug),
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

          {/* ── Question Meta ── */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-border bg-card/50 p-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 rounded-lg bg-secondary/30 p-3">
                <Target className="w-5 h-5 text-orange-400" />
                <div>
                  <p className="text-xs text-muted-foreground">Chapter</p>
                  <p className="text-sm font-medium text-foreground">{chapterName}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-secondary/30 p-3">
                <Calendar className="w-5 h-5 text-orange-400" />
                <div>
                  <p className="text-xs text-muted-foreground">Year & Shift</p>
                  <p className="text-sm font-medium text-foreground">{question.year} · {question.shift}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-secondary/30 p-3">
                <FileText className="w-5 h-5 text-orange-400" />
                <div>
                  <p className="text-xs text-muted-foreground">Exam</p>
                  <p className="text-sm font-medium text-foreground">JEE {question.exam === 'advanced' ? 'Advanced' : 'Main'}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Featured Snippet — PYQ Overview ── */}
          <FeaturedSnippet
            question={`Why solve JEE ${subj} PYQs on ${chapterName}?`}
            answer={pyqOverview}
          />

          {/* ── Concept Summary — always-visible 150+ word block ── */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-border bg-card/50 p-6 sm:p-8">
            <h2 className="font-display font-bold text-lg text-foreground mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-orange-400" /> {chapterName} — Concept Overview
            </h2>
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              {conceptSummary.map((para, i) => <p key={i}>{para}</p>)}
            </div>
          </motion.div>

          {/* ── Exam Tips ── */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-border bg-card/50 p-6 sm:p-8">
            <h2 className="font-display font-bold text-lg text-foreground mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-orange-400" /> JEE {subj} Tips — {chapterName}
            </h2>
            <ul className="space-y-3">
              {examTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Common Mistakes ── */}
          <CommonMistakesBlock chapterName={chapterName} mistakes={commonMistakes} />

          {/* ── Key Formulas ── */}
          <KeyFormulasBlock topicName={chapterName} formulas={keyFormulas} formulaSheetLink={`/jee-${params.subject}-formula-sheet`} />

          {/* ── Why It Matters ── */}
          <WhyItMattersBlock topicName={chapterName} paragraphs={whyItMatters} />

          {/* ── Cross-type Internal Links ── */}
          <InternalLinkingMesh links={crossLinks} heading={`Related ${subj} Resources`} />

          {/* ── Study Strategy ── */}
          <StudyStrategyBlock chapterName={chapterName} strategies={studyStrategy} />
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
                          {ch.questions.slice(0, 5).map((_, qi) => {
                            const qSlug = getPYQSlugByParams(bank.slug, ch.slug, qi + 1);
                            if (!qSlug) return null;
                            return (
                              <Link
                                key={qi}
                                to={`/${qSlug}`}
                                className="block text-xs text-muted-foreground hover:text-orange-400 transition-colors py-1"
                              >
                                Q{qi + 1} — {ch.questions[qi].q.slice(0, 60)}…
                              </Link>
                            );
                          })}
                          {count > 5 && (() => {
                            const firstSlug = getPYQSlugByParams(bank.slug, ch.slug, 1);
                            return firstSlug ? (
                              <Link
                                to={`/${firstSlug}`}
                                className="block text-xs text-orange-400 font-medium py-1"
                              >
                                View all {count} questions →
                              </Link>
                            ) : null;
                          })()}
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

          {/* Cross-subject PYQ links */}
          <div>
            <h3 className="font-display font-bold text-lg text-foreground mb-4">JEE PYQ — All Subjects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {pyqSubjectBanks.map((b) => (
                <div key={b.slug} className="rounded-xl border border-border bg-card/50 p-4">
                  <h4 className="font-display font-semibold text-foreground text-sm mb-3 flex items-center gap-2">
                    <span>{b.icon}</span> {b.subject}
                    {b.slug === params.subject && <span className="text-[10px] bg-orange-500/10 text-orange-400 px-1.5 py-0.5 rounded-full">Current</span>}
                  </h4>
                  <ul className="space-y-1.5">
                    {b.chapters.slice(0, 5).map((ch) => {
                      const linkSlug = getPYQSlugByParams(b.slug, ch.slug, 1);
                      if (!linkSlug) return null;
                      return (
                        <li key={ch.slug}>
                          <Link to={`/${linkSlug}`} className="text-xs text-muted-foreground hover:text-orange-400 transition-colors">
                            {ch.name} ({getPYQChapterCount(ch)} Qs)
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
            <h3 className="font-display font-bold text-lg text-foreground mb-4">JEE {subj} Resources</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { label: `JEE ${subj} Coaching`, to: `/jee-${params.subject}-coaching` },
                { label: 'JEE Practice Questions', to: '/jee-practice' },
                { label: 'JEE Main Coaching', to: '/jee-main-coaching' },
                { label: 'JEE Advanced Coaching', to: '/jee-advanced-coaching' },
                { label: 'Free Trial', to: '/free-trial' },
                { label: 'All Courses', to: '/courses' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-3 py-1.5 rounded-lg bg-card border border-border text-xs text-muted-foreground hover:text-orange-400 hover:border-orange-500/40 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ Section ── */}
        <PageFAQ items={faqItems} heading="JEE PYQ" highlight="FAQ" />

        <PageFooter extra={`JEE ${subj} PYQ — ${chapterName} — Question ${params.questionIndex}.`} />
      </main>

      {/* Gate modal — shown for Q6+ until user submits form */}
      <ContinueTestModal isOpen={isGated} testName={testName} onSuccess={onUnlock} />
    </>
  );
};

export default JEEPYQQuestion;
