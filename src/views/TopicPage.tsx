"use client";

import { useEffect, useState } from 'react';
import { Link } from '@/components/RouterLink';
import { usePathname } from 'next/navigation';
import { Navigate } from '@/components/Navigate';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { PageFooter } from '@/components/PageFooter';
import { useDemoModal } from '@/components/DemoBookingModal';
import { buildFAQSchemaFromQA } from '@/components/PageFAQ';
import {
  CheckCircle, Phone, BookOpen, ChevronDown, GraduationCap,
  BarChart3, Target, Lightbulb, Zap, Brain, Clock,
  Flame, BookMarked, ArrowLeft, ArrowRight, FileText,
  AlertTriangle, Sparkles, Calendar, Shield, Layers,
  Users, Trophy, MessageCircle, Timer, ListChecks,
  CircleDot, Star, Activity, Eye, Compass, Award,
  TrendingUp, Route,
} from 'lucide-react';
import { getTopicInfo, topicToSlug, TOPIC_PATHS } from '@/data/chapterData';
import { getLastUpdated } from '@/lib/contentFreshness';
import type { TopicInfo } from '@/data/chapterData';

export { TOPIC_PATHS };

/* ═══════════════════════════════════════════════════════════
   TopicPage — granular SEO page for every sub-topic
   Route: /:chapterSlug/:topicSlug
   Auto-generates rich content from parent chapter data
   ═══════════════════════════════════════════════════════════ */

const TopicPage = () => {
  const pathname = usePathname();
  const { openDemoModal } = useDemoModal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleCheck = (key: string) => setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }));

  // Extract chapterSlug/topicSlug from path
  const parts = pathname.replace(/^\//, '').split('/');
  const chapterSlug = parts[0] || '';
  const topicSlug = parts[1] || '';

  const info = getTopicInfo(chapterSlug, topicSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (!info) {
    return <Navigate to="/" replace />;
  }

  const { topicName, topicIndex, chapter } = info;
  const Icon = chapter.icon;
  const examFull = chapter.exam === 'JEE' ? 'JEE Main & Advanced' : 'NEET UG';

  // Prev/next topics in same chapter
  const prevTopic = topicIndex > 0 ? chapter.topics[topicIndex - 1] : null;
  const nextTopic = topicIndex < chapter.topics.length - 1 ? chapter.topics[topicIndex + 1] : null;
  const siblingTopics = chapter.topics.filter((_, i) => i !== topicIndex);

  // Pick a relevant formula if available (closest match by index)
  const relatedFormula = chapter.keyFormulas[topicIndex % chapter.keyFormulas.length];

  // Pick a related common mistake
  const relatedMistake = chapter.commonMistakes[topicIndex % chapter.commonMistakes.length];

  // ── 5x content: expanded data ──
  // All related formulas (up to 4)
  const relatedFormulas = chapter.keyFormulas.filter((_, i) => {
    const start = topicIndex % chapter.keyFormulas.length;
    return i === start || i === (start + 1) % chapter.keyFormulas.length || i === (start + 2) % chapter.keyFormulas.length || (chapter.keyFormulas.length > 3 && i === (start + 3) % chapter.keyFormulas.length);
  }).slice(0, Math.min(4, chapter.keyFormulas.length));

  // All related mistakes (up to 3)
  const relatedMistakes = chapter.commonMistakes.filter((_, i) => {
    const start = topicIndex % chapter.commonMistakes.length;
    return i === start || i === (start + 1) % chapter.commonMistakes.length || (chapter.commonMistakes.length > 2 && i === (start + 2) % chapter.commonMistakes.length);
  }).slice(0, Math.min(3, chapter.commonMistakes.length));

  // Topic difficulty estimate
  const topicDifficulty = (() => {
    const base = chapter.difficulty === 'Easy' ? 0 : chapter.difficulty === 'Moderate' ? 1 : 2;
    const variance = (topicIndex % 3) - 1;
    const level = Math.max(0, Math.min(2, base + variance));
    return ['Easy', 'Moderate', 'Hard'][level];
  })();

  // Exam-specific problem count estimate
  const practiceCount = topicDifficulty === 'Hard' ? '30-40' : topicDifficulty === 'Moderate' ? '20-30' : '15-20';

  // Time per problem
  const timePerProblem = chapter.exam === 'JEE'
    ? topicDifficulty === 'Hard' ? '5-8 min' : topicDifficulty === 'Moderate' ? '3-5 min' : '1-3 min'
    : topicDifficulty === 'Hard' ? '2-3 min' : topicDifficulty === 'Moderate' ? '1-2 min' : '30-90 sec';

  // Nearest 2 sibling topics for connections
  const nearTopics = chapter.topics.filter((_, i) => Math.abs(i - topicIndex) > 0 && Math.abs(i - topicIndex) <= 3);

  // Build relevant FAQs — chapter FAQs + auto-generated topic FAQ
  const topicFaqs = [
    {
      q: `How important is ${topicName} for ${chapter.exam}?`,
      a: `${topicName} is a key sub-topic under ${chapter.chapter} (${chapter.weightage} overall weightage in ${examFull}). Questions from this topic appear regularly. MindPeak's 1-on-1 mentors ensure you master ${topicName} through targeted problem-solving sessions before moving to the next concept.`,
    },
    {
      q: `What is the best way to study ${topicName}?`,
      a: `Start by understanding the core concept and derivation. Then solve 20-30 graded problems — easy to hard. Finally, attempt previous year questions that involve ${topicName}. Your MindPeak mentor provides a curated problem set specifically for this topic and reviews every solution with you.`,
    },
    {
      q: `How does ${topicName} connect to other topics in ${chapter.chapter}?`,
      a: `${topicName} is part of the ${chapter.chapter} chapter which includes ${chapter.topics.length} interconnected topics. In exams, problems often combine multiple sub-topics. For example, ${chapter.exam === 'JEE' ? 'JEE Advanced' : 'NEET'} frequently tests ${topicName} alongside ${siblingTopics.slice(0, 2).join(' and ')}. MindPeak's integrated approach ensures you see these connections.`,
    },
    {
      q: `How many questions come from ${topicName} in ${chapter.exam}?`,
      a: `While individual topic-level question counts vary year to year, ${chapter.chapter} as a whole carries ${chapter.weightage} weightage. ${topicName} is one of ${chapter.topics.length} topics in this chapter, and it contributes to both direct and indirect questions. ${chapter.exam === 'JEE' ? 'JEE Advanced often combines this topic with others in multi-concept problems.' : 'NEET may embed this topic in assertion-reason or diagram-based questions.'} MindPeak mentors help you identify all question types.`,
    },
    {
      q: `What are the common mistakes in ${topicName}?`,
      a: `The most common mistakes include: ${relatedMistakes.map((m, i) => `(${i + 1}) ${m}`).join(' ')} These are actively monitored by MindPeak mentors during your 1-on-1 sessions. Real-time correction prevents bad habits from forming.`,
    },
    {
      q: `Is ${topicName} difficult for ${chapter.exam}?`,
      a: `${topicName} is rated ${topicDifficulty} difficulty within ${chapter.chapter}. ${topicDifficulty === 'Hard' ? 'It requires strong fundamentals and multi-step reasoning. Students often struggle with this topic, but with focused practice and mentor guidance, it becomes manageable.' : topicDifficulty === 'Moderate' ? 'Most students find it doable with consistent practice. The key is understanding the underlying concept before attempting exam-level problems.' : 'This is one of the more approachable topics. Direct formula application covers most questions. Focus on speed and accuracy.'} MindPeak mentors tailor the difficulty progression to your level.`,
    },
    {
      q: `What resources should I use for ${topicName}?`,
      a: `${chapter.exam === 'JEE' ? (chapter.subject === 'Physics' ? `Read HC Verma's section on ${chapter.chapter} focusing on ${topicName}. Practice from DC Pandey for exam-level problems.` : chapter.subject === 'Chemistry' ? `Start with NCERT for ${topicName} concepts, then practice from subject-specific books like MS Chauhan (Organic), Narendra Awasthi (Physical), or JD Lee (Inorganic).` : `Use Cengage or RD Sharma for ${topicName} problems. Start with solved examples, then attempt exercises.`) : (chapter.subject === 'Biology' ? `NCERT is your primary resource — read the ${topicName} section line-by-line. Supplement with NCERT Exemplar and MTG for extra MCQs.` : chapter.subject === 'Physics' ? `NCERT + Exemplar for concepts, DC Pandey NEET edition for numerical practice.` : `NCERT is essential. Supplement with MS Chauhan or Narendra Awasthi depending on the branch.`)} MindPeak mentors provide additional curated materials.`,
    },
    ...chapter.faqs.slice(0, 2),
  ];

  const pageTitle = `${topicName} — ${chapter.chapter} for ${chapter.exam} | MindPeak Institute`;
  const pageDesc = `Master ${topicName} in ${chapter.chapter} for ${examFull}. Detailed concept explanation, key formulas, common mistakes, and expert 1-on-1 coaching at MindPeak Institute.`;
  const canonicalUrl = `https://mindpeakinstitute.com/${chapterSlug}/${topicSlug}`;
  const prepSubjectSlug = `${chapter.exam.toLowerCase()}-${chapter.subject.toLowerCase()}-preparation`;

  const faqSchema = buildFAQSchemaFromQA(topicFaqs);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: pageTitle,
    description: pageDesc,
    author: { '@type': 'Organization', name: 'MindPeak Institute' },
    publisher: {
      '@type': 'Organization',
      name: 'MindPeak Institute',
      logo: { '@type': 'ImageObject', url: 'https://mindpeakinstitute.com/images/logo.jpeg' },
    },
    datePublished: '2025-01-01',
    dateModified: getLastUpdated(pathname),
    about: [
      { '@type': 'Thing', name: chapter.exam === 'JEE' ? 'JEE Main' : 'NEET-UG', sameAs: chapter.exam === 'JEE' ? 'https://en.wikipedia.org/wiki/Joint_Entrance_Examination_%E2%80%93_Main' : 'https://en.wikipedia.org/wiki/National_Eligibility_cum_Entrance_Test_(Undergraduate)' },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mindpeakinstitute.com/' },
      { '@type': 'ListItem', position: 2, name: `${chapter.exam} Coaching`, item: `https://mindpeakinstitute.com/${chapter.exam === 'JEE' ? 'jee-coaching' : 'neet-coaching'}` },
      { '@type': 'ListItem', position: 3, name: chapter.subject, item: `https://mindpeakinstitute.com/${prepSubjectSlug}` },
      { '@type': 'ListItem', position: 4, name: chapter.chapter, item: `https://mindpeakinstitute.com/${chapterSlug}` },
      { '@type': 'ListItem', position: 5, name: topicName, item: canonicalUrl },
    ],
  };

  // Difficulty colors
  const diffColors: Record<string, string> = {
    Easy: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    Moderate: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    Hard: 'bg-red-500/15 text-red-400 border-red-500/30',
  };

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDesc}
        canonical={canonicalUrl}
        jsonLd={[faqSchema, articleSchema, breadcrumbSchema]}
      />
      <Navbar />
      <main className="min-h-screen bg-background pt-20 sm:pt-24">

        {/* ═══════════ HERO ═══════════ */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/3 py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              {/* Breadcrumb */}
              <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6 flex-wrap">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <span>/</span>
                <Link to={chapter.exam === 'JEE' ? '/jee-coaching' : '/neet-coaching'} className="hover:text-primary transition-colors">
                  {chapter.exam} Coaching
                </Link>
                <span>/</span>
                <Link to={`/${prepSubjectSlug}`} className="hover:text-primary transition-colors">
                  {chapter.subject}
                </Link>
                <span>/</span>
                <Link to={`/${chapterSlug}`} className="hover:text-primary transition-colors">
                  {chapter.chapter}
                </Link>
                <span>/</span>
                <span className="text-foreground font-medium">{topicName}</span>
              </nav>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-primary text-[10px] sm:text-xs uppercase tracking-[0.15em] font-semibold">{chapter.exam} {chapter.subject}</p>
                  <Link to={`/${chapterSlug}`} className="text-muted-foreground text-xs hover:text-primary transition-colors">
                    {chapter.chapter} — Topic {topicIndex + 1} of {chapter.topics.length}
                  </Link>
                </div>
              </div>

              <h1 className="font-display font-black text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] leading-tight mb-4">
                {topicName}
                <span className="text-gradient-gold"> — {chapter.chapter} for {chapter.exam}</span>
              </h1>

              <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mb-6">
                Master {topicName} with MindPeak's 1-on-1 expert coaching. This is topic {topicIndex + 1} of {chapter.topics.length} in {chapter.chapter} ({chapter.weightage} weightage in {examFull}). Your dedicated mentor builds deep conceptual clarity through interactive problem-solving — not passive lectures.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <div className="flex items-center gap-2 bg-card/80 backdrop-blur px-4 py-2.5 rounded-lg border text-sm">
                  <BarChart3 className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Chapter:</span>
                  <span className="font-semibold">{chapter.weightage}</span>
                </div>
                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border ${diffColors[chapter.difficulty] || diffColors.Moderate}`}>
                  <Flame className="w-3 h-3" /> {chapter.difficulty}
                </span>
                <div className="flex items-center gap-2 bg-card/80 backdrop-blur px-4 py-2.5 rounded-lg border text-sm">
                  <Target className="w-4 h-4 text-primary" />
                  <span className="font-semibold">{topicIndex + 1}/{chapter.topics.length}</span>
                  <span className="text-muted-foreground">topics</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={openDemoModal}
                  className="w-full sm:w-auto px-8 py-3.5 bg-primary text-primary-foreground font-display font-bold text-xs sm:text-sm uppercase tracking-[0.1em] shadow-gold-glow hover:scale-105 transition-transform"
                >
                  Start Free {chapter.exam} Trial →
                </button>
                <a href="tel:+918219457704" className="w-full sm:w-auto px-6 py-3.5 border border-border text-foreground font-display text-xs sm:text-sm uppercase tracking-[0.1em] hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" /> Call +91 82194 57704
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ WHAT IS THIS TOPIC ═══════════ */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="w-7 h-7 text-primary" />
                <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl">
                  Understanding <span className="text-gradient-gold">{topicName}</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-5 mb-8">
                <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <h3 className="font-display font-bold text-foreground text-sm sm:text-base">Concept Overview</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {topicName} is a fundamental sub-topic within {chapter.chapter} for {examFull}. 
                    It forms part of the {chapter.subject} syllabus that carries {chapter.weightage} overall weightage.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {chapter.exam === 'JEE'
                      ? `In JEE, ${topicName} questions range from direct formula application in JEE Main to multi-concept analytical problems in JEE Advanced. A solid understanding of this topic is essential before tackling advanced problems in ${chapter.chapter}.`
                      : `In NEET, ${topicName} is typically tested through direct conceptual MCQs and numerical problems based on NCERT content. Questions are straightforward when concepts are clear, making this a reliable scoring area.`}
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Brain className="w-5 h-5 text-primary" />
                    <h3 className="font-display font-bold text-foreground text-sm sm:text-base">Where It Fits in the Chapter</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {chapter.chapter} has <strong className="text-foreground">{chapter.topics.length} sub-topics</strong>. 
                    {topicName} is topic #{topicIndex + 1} in the recommended learning sequence.
                  </p>
                  {topicIndex > 0 && (
                    <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                      <strong className="text-foreground">Prerequisites:</strong> You should be comfortable with{' '}
                      <Link to={`/${chapterSlug}/${topicToSlug(chapter.topics[topicIndex - 1])}`} className="text-primary hover:underline">
                        {chapter.topics[topicIndex - 1]}
                      </Link>{' '}
                      {topicIndex > 1 && (
                        <>
                          and{' '}
                          <Link to={`/${chapterSlug}/${topicToSlug(chapter.topics[topicIndex - 2])}`} className="text-primary hover:underline">
                            {chapter.topics[topicIndex - 2]}
                          </Link>
                        </>
                      )}{' '}
                      before diving deep into {topicName}.
                    </p>
                  )}
                  {nextTopic && (
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      <strong className="text-foreground">What comes next:</strong> After mastering {topicName}, you'll move to{' '}
                      <Link to={`/${chapterSlug}/${topicToSlug(nextTopic)}`} className="text-primary hover:underline">
                        {nextTopic}
                      </Link>.
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ DETAILED CONCEPT DEEP DIVE ═══════════ */}
        <section className="py-12 sm:py-16 bg-secondary/20 border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-2">
                <Layers className="w-7 h-7 text-primary" />
                <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl">
                  {topicName} — <span className="text-gradient-gold">Detailed Analysis</span>
                </h2>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-3xl">
                A comprehensive breakdown of {topicName} covering everything you need for {examFull} preparation.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* Topic Difficulty */}
                <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Activity className="w-5 h-5 text-primary" />
                    <h3 className="font-display font-bold text-foreground text-sm sm:text-base">Difficulty Level</h3>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border ${
                      topicDifficulty === 'Easy' ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30' :
                      topicDifficulty === 'Moderate' ? 'bg-amber-500/15 text-amber-400 border-amber-500/30' :
                      'bg-red-500/15 text-red-400 border-red-500/30'
                    }`}>
                      <Flame className="w-3 h-3" /> {topicDifficulty}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {topicDifficulty === 'Easy'
                      ? `${topicName} is one of the more straightforward topics in ${chapter.chapter}. Direct formula application and basic conceptual understanding are usually sufficient. Focus on speed and accuracy.`
                      : topicDifficulty === 'Moderate'
                      ? `${topicName} requires solid conceptual understanding plus practice. Most ${chapter.exam} questions from this topic are solvable with 20-30 practice problems and clear concept notes.`
                      : `${topicName} is one of the challenging topics in ${chapter.chapter}. It requires deep understanding, multi-step reasoning, and extensive practice. Mentor guidance is highly recommended.`}
                  </p>
                </div>

                {/* Practice Requirement */}
                <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-5 h-5 text-primary" />
                    <h3 className="font-display font-bold text-foreground text-sm sm:text-base">Practice Requirement</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Problems to solve</span>
                      <span className="text-sm text-foreground font-bold">{practiceCount}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Time per problem</span>
                      <span className="text-sm text-foreground font-bold">{timePerProblem}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Target accuracy</span>
                      <span className="text-sm text-foreground font-bold">{topicDifficulty === 'Hard' ? '75%+' : topicDifficulty === 'Moderate' ? '85%+' : '95%+'}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Revision frequency</span>
                      <span className="text-sm text-foreground font-bold">{topicDifficulty === 'Hard' ? 'Every 3 days' : topicDifficulty === 'Moderate' ? 'Weekly' : 'Bi-weekly'}</span>
                    </div>
                  </div>
                </div>

                {/* Exam Relevance */}
                <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Trophy className="w-5 h-5 text-primary" />
                    <h3 className="font-display font-bold text-foreground text-sm sm:text-base">Exam Relevance</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {chapter.exam === 'JEE'
                      ? `${topicName} appears in JEE Main as direct application MCQs and numerical value questions. In JEE Advanced, expect multi-concept problems combining ${topicName} with other topics from ${chapter.chapter} or even other chapters.`
                      : `${topicName} is tested in NEET through direct NCERT-based MCQs. ${chapter.subject === 'Biology' ? 'Questions may test exact NCERT lines, diagram labels, or process descriptions.' : 'Expect both conceptual and numerical problems.'} Assertion-reason questions involving ${topicName} are also common.`}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {chapter.exam === 'JEE' ? (
                      <>
                        <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-medium">JEE Main MCQ</span>
                        <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-medium">Numerical</span>
                        <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-medium">Multi-concept (Adv)</span>
                      </>
                    ) : (
                      <>
                        <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-medium">NCERT MCQ</span>
                        <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-medium">Assertion-Reason</span>
                        <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-medium">{chapter.subject === 'Biology' ? 'Diagram Based' : 'Numerical'}</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Learning Approach */}
                <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Compass className="w-5 h-5 text-primary" />
                    <h3 className="font-display font-bold text-foreground text-sm sm:text-base">Best Learning Approach</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {chapter.exam === 'NEET' && chapter.subject === 'Biology'
                      ? `For ${topicName}, start with a careful NCERT reading. Highlight key terms, processes, and diagram labels. Create flashcards for terminology. Then solve NCERT back-exercises and Exemplar MCQs. Redraw important diagrams from memory as a self-test.`
                      : chapter.exam === 'NEET'
                      ? `Begin with NCERT theory for ${topicName}, ensuring you understand every concept and formula. Solve NCERT exercises first, then attempt Exemplar problems. Practice 10-15 MCQs daily from this topic until you can solve them within the time limit.`
                      : chapter.subject === 'Mathematics'
                      ? `For ${topicName}, focus on understanding definitions and theorems first. Work through solved examples step-by-step. Then solve 15-20 problems of increasing difficulty. For JEE Advanced, practice proof-based and multi-step problems.`
                      : `Read the theory section on ${topicName} from a standard textbook. Understand every derivation — don't skip steps. Then solve graded problems: 10 easy, 10 medium, 10 hard. Your MindPeak mentor guides you through each difficulty level.`}
                  </p>
                </div>

                {/* Time Investment */}
                <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Timer className="w-5 h-5 text-primary" />
                    <h3 className="font-display font-bold text-foreground text-sm sm:text-base">Time Investment</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    Estimated time to master {topicName}:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Theory study</span>
                      <span className="text-foreground font-medium">{topicDifficulty === 'Hard' ? '3-4' : topicDifficulty === 'Moderate' ? '2-3' : '1-2'} hours</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Problem practice</span>
                      <span className="text-foreground font-medium">{topicDifficulty === 'Hard' ? '5-7' : topicDifficulty === 'Moderate' ? '3-5' : '2-3'} hours</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">PYQ practice</span>
                      <span className="text-foreground font-medium">{topicDifficulty === 'Hard' ? '2-3' : '1-2'} hours</span>
                    </div>
                    <div className="flex items-center justify-between text-sm border-t border-border pt-2 mt-2">
                      <span className="text-foreground font-bold">Total</span>
                      <span className="text-primary font-bold">{topicDifficulty === 'Hard' ? '10-14' : topicDifficulty === 'Moderate' ? '6-10' : '4-7'} hours</span>
                    </div>
                  </div>
                </div>

                {/* Near-Topic Connections */}
                <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Route className="w-5 h-5 text-primary" />
                    <h3 className="font-display font-bold text-foreground text-sm sm:text-base">Connected Topics</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    Topics closely related to {topicName} in {chapter.chapter}:
                  </p>
                  <ul className="space-y-2">
                    {nearTopics.slice(0, 4).map((t, i) => (
                      <li key={i}>
                        <Link
                          to={`/${chapterSlug}/${topicToSlug(t)}`}
                          className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                        >
                          <ArrowRight className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                          <span className="font-medium">{t}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {nearTopics.length === 0 && (
                    <p className="text-muted-foreground text-xs">
                      Explore all {chapter.topics.length} topics in the chapter section below.
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ KEY FORMULA & COMMON MISTAKE ═══════════ */}
        <section className="py-12 sm:py-16 bg-secondary/20 border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-7 h-7 text-primary" />
                <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl">
                  Key Formulas & <span className="text-gradient-gold">Common Pitfalls</span>
                </h2>
              </div>

              {/* Formulas Grid */}
              <h3 className="font-display font-bold text-foreground text-sm sm:text-base mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" /> Related Formulas ({relatedFormulas.length})
              </h3>
              <div className={`grid ${relatedFormulas.length > 2 ? 'md:grid-cols-2' : 'md:grid-cols-1'} gap-4 mb-8`}>
                {relatedFormulas.map((formula, i) => (
                  <div key={i} className="rounded-2xl border-2 border-primary/20 bg-card p-5 sm:p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary text-xs font-bold">#{i + 1}</span>
                      </div>
                      <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Formula</span>
                    </div>
                    <p className="font-mono text-base sm:text-lg font-semibold text-primary leading-relaxed mb-3 break-words">{formula}</p>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      {i === 0
                        ? `Your MindPeak mentor teaches the derivation, when to apply this formula, and how examiners twist it in ${chapter.exam} papers. Understanding "why" beats memorising "what".`
                        : `Practice applying this formula to different problem scenarios. Know the boundary conditions and special cases where it applies or fails.`}
                    </p>
                  </div>
                ))}
              </div>

              {/* Mistakes Grid */}
              <h3 className="font-display font-bold text-foreground text-sm sm:text-base mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" /> Common Mistakes to Avoid ({relatedMistakes.length})
              </h3>
              <div className="space-y-4">
                {relatedMistakes.map((mistake, i) => (
                  <div key={i} className="rounded-2xl border-2 border-amber-500/20 bg-card p-5 sm:p-6 flex gap-4">
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-500 font-bold text-sm">#{i + 1}</span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-foreground text-sm font-medium leading-relaxed mb-2">{mistake}</p>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {i === 0
                          ? `MindPeak mentors actively watch for this mistake during your problem-solving sessions and correct it in real-time, so it never becomes a habit.`
                          : `This mistake costs marks in exams. Practice with awareness — flag this pattern in your problem-solving practice.`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ STUDY APPROACH ═══════════ */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-2">
                <BookMarked className="w-7 h-7 text-primary" />
                <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl">
                  How to Master <span className="text-gradient-gold">{topicName}</span>
                </h2>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-3xl">
                Follow this step-by-step approach recommended by MindPeak's {chapter.exam === 'JEE' ? 'IIT' : 'AIIMS'} alumni mentors.
              </p>

              <div className="space-y-4 max-w-3xl">
                {[
                  {
                    step: 'Step 1',
                    title: 'Read the Theory',
                    desc: chapter.exam === 'NEET'
                      ? `Read the NCERT section on ${topicName} line-by-line. Highlight key definitions, diagrams, and solved examples. For NEET, NCERT is the primary source for ${chapter.subject} — 80%+ questions come directly from it.`
                      : `Study ${topicName} from a standard reference (HC Verma / Cengage / NCERT). Focus on understanding derivations and the physical/mathematical intuition behind each concept. Your MindPeak mentor explains the "why" behind every formula.`,
                    icon: BookOpen,
                    color: 'text-blue-400 bg-blue-500/10',
                  },
                  {
                    step: 'Step 2',
                    title: 'Solve Graded Problems',
                    desc: `Start with 10 easy problems to build confidence, then attempt 15-20 medium-difficulty problems. Focus on ${topicName}-specific questions first before tackling mixed problems. Time yourself — ${chapter.exam === 'JEE' ? '2-3 minutes per JEE Main problem, 5-7 for JEE Advanced' : '1-2 minutes per NEET MCQ'}.`,
                    icon: Target,
                    color: 'text-emerald-400 bg-emerald-500/10',
                  },
                  {
                    step: 'Step 3',
                    title: 'Practice PYQs',
                    desc: `Solve all available previous year questions involving ${topicName}. Notice the patterns — examiners have favourite ways of asking from this topic. Your MindPeak mentor provides a curated PYQ set with detailed solutions.`,
                    icon: FileText,
                    color: 'text-amber-400 bg-amber-500/10',
                  },
                  {
                    step: 'Step 4',
                    title: 'Connect to Other Topics',
                    desc: `Once comfortable with ${topicName} in isolation, practice problems that combine it with ${siblingTopics.slice(0, 2).join(' and ')}. ${chapter.exam === 'JEE' ? 'JEE Advanced specifically loves multi-concept problems.' : 'NEET may ask assertion-reason questions connecting multiple sub-topics.'} MindPeak's integrated approach prepares you for these.`,
                    icon: Brain,
                    color: 'text-purple-400 bg-purple-500/10',
                  },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 rounded-xl border border-border bg-card p-5"
                  >
                    <div className={`w-10 h-10 rounded-lg ${s.color} flex items-center justify-center flex-shrink-0`}>
                      <s.icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5">{s.step}</p>
                      <h3 className="font-display font-bold text-foreground text-sm mb-1.5">{s.title}</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ COMMON QUESTION TYPES ═══════════ */}
        <section className="py-12 sm:py-16 bg-secondary/20 border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-7 h-7 text-primary" />
                <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl">
                  Common Question Types from <span className="text-gradient-gold">{topicName}</span>
                </h2>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-3xl">
                Knowing what types of questions to expect helps you prepare strategically. Here are the most common question patterns for {topicName} in {examFull}.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {(chapter.exam === 'JEE' ? [
                  {
                    type: 'Direct Formula Application',
                    desc: `Apply the formula(s) related to ${topicName} directly. Usually involves plugging in values, unit conversion, and basic algebra. These are your "free marks" — don't lose them to silly mistakes.`,
                    difficulty: 'Easy',
                    time: '1-2 min',
                    icon: Zap,
                    color: 'text-emerald-400 bg-emerald-500/10',
                  },
                  {
                    type: 'Conceptual Reasoning',
                    desc: `Questions testing "why" and "how" for ${topicName}. May ask you to predict behaviour, compare scenarios, or explain underlying principles. Strong conceptual clarity is essential.`,
                    difficulty: 'Moderate',
                    time: '2-3 min',
                    icon: Brain,
                    color: 'text-blue-400 bg-blue-500/10',
                  },
                  {
                    type: 'Multi-Step Numerical',
                    desc: `Problems requiring 2-3 steps involving ${topicName} concepts. May combine with related formulas or require intermediate calculations. Watch for unit consistency.`,
                    difficulty: 'Moderate-Hard',
                    time: '3-5 min',
                    icon: Target,
                    color: 'text-amber-400 bg-amber-500/10',
                  },
                  {
                    type: 'Cross-Topic Integration',
                    desc: `JEE Advanced favourite: problems combining ${topicName} with ${nearTopics.length > 0 ? nearTopics[0] : 'other topics'} or even other chapters. Requires holistic understanding of ${chapter.subject}.`,
                    difficulty: 'Hard',
                    time: '5-8 min',
                    icon: Layers,
                    color: 'text-red-400 bg-red-500/10',
                  },
                ] : [
                  {
                    type: 'NCERT Direct Recall',
                    desc: `Questions based directly on NCERT text about ${topicName}. Tests exact definitions, terminology, and factual knowledge. Read NCERT line-by-line for these.`,
                    difficulty: 'Easy',
                    time: '30-60 sec',
                    icon: BookOpen,
                    color: 'text-emerald-400 bg-emerald-500/10',
                  },
                  {
                    type: 'Conceptual Application MCQ',
                    desc: `Apply ${topicName} concepts to new scenarios or clinical situations. Requires understanding beyond memorisation. Practice from NCERT Exemplar.`,
                    difficulty: 'Moderate',
                    time: '1-2 min',
                    icon: Brain,
                    color: 'text-blue-400 bg-blue-500/10',
                  },
                  {
                    type: 'Assertion-Reason',
                    desc: `Both statements may involve ${topicName}. Test whether the "reason" correctly explains the "assertion". Read each statement independently before judging the connection.`,
                    difficulty: 'Moderate',
                    time: '1-2 min',
                    icon: Target,
                    color: 'text-amber-400 bg-amber-500/10',
                  },
                  {
                    type: chapter.subject === 'Biology' ? 'Diagram/Figure Based' : 'Numerical Calculation',
                    desc: chapter.subject === 'Biology'
                      ? `Identify structures, label diagrams, or interpret experimental data related to ${topicName}. NCERT diagrams are especially important — practice redrawing from memory.`
                      : `Numerical problems involving ${topicName} formulas and calculations. Focus on units, significant figures, and common calculation traps.`,
                    difficulty: 'Moderate-Hard',
                    time: '1-3 min',
                    icon: Eye,
                    color: 'text-purple-400 bg-purple-500/10',
                  },
                ]).map((q, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="rounded-xl border border-border bg-card p-5"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-9 h-9 rounded-lg ${q.color} flex items-center justify-center`}>
                        <q.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-foreground text-sm">{q.type}</h3>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className={`text-[10px] font-bold ${
                            q.difficulty === 'Easy' ? 'text-emerald-400' : q.difficulty === 'Moderate' ? 'text-amber-400' : q.difficulty === 'Hard' ? 'text-red-400' : 'text-amber-400'
                          }`}>{q.difficulty}</span>
                          <span className="text-[10px] text-muted-foreground">· {q.time}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{q.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ PRACTICE ROADMAP ═══════════ */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-7 h-7 text-primary" />
                <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl">
                  Practice Roadmap for <span className="text-gradient-gold">{topicName}</span>
                </h2>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-3xl">
                A structured 7-day plan to go from zero to exam-ready for {topicName}. Your MindPeak mentor customises this based on your pace.
              </p>

              <div className="space-y-4 max-w-3xl">
                {[
                  {
                    day: 'Day 1-2',
                    title: 'Theory & Foundation',
                    tasks: [
                      `Read ${chapter.exam === 'NEET' ? 'NCERT section' : 'textbook chapter'} on ${topicName}`,
                      `Take notes on key definitions, formulas, and derivations`,
                      `Solve 5 basic-level problems to test understanding`,
                    ],
                    color: 'border-blue-500/30',
                    badge: 'text-blue-400 bg-blue-500/10',
                  },
                  {
                    day: 'Day 3-4',
                    title: 'Guided Practice',
                    tasks: [
                      `Solve 10-15 medium-difficulty problems from ${topicName}`,
                      `Time yourself: aim for ${timePerProblem} per problem`,
                      `Review wrong answers — identify whether concept gap or calculation error`,
                    ],
                    color: 'border-emerald-500/30',
                    badge: 'text-emerald-400 bg-emerald-500/10',
                  },
                  {
                    day: 'Day 5-6',
                    title: 'PYQs & Advanced Problems',
                    tasks: [
                      `Solve all ${chapter.exam === 'JEE' ? 'JEE Main + Advanced' : 'NEET'} PYQs involving ${topicName}`,
                      `Attempt ${chapter.exam === 'JEE' ? 'multi-concept problems combining ' + topicName + ' with ' + (nearTopics[0] || 'other topics') : 'assertion-reason and diagram-based questions'}`,
                      `Create a mistake log specific to ${topicName}`,
                    ],
                    color: 'border-amber-500/30',
                    badge: 'text-amber-400 bg-amber-500/10',
                  },
                  {
                    day: 'Day 7',
                    title: 'Test & Revise',
                    tasks: [
                      `Take a timed mini-test on ${topicName} (10 questions, exam conditions)`,
                      `Revise formulas and common mistakes from memory`,
                      `Score yourself — target ${topicDifficulty === 'Hard' ? '7/10+' : '8/10+'}`,
                    ],
                    color: 'border-purple-500/30',
                    badge: 'text-purple-400 bg-purple-500/10',
                  },
                ].map((d, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`rounded-xl border ${d.color} bg-card p-5`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${d.badge}`}>
                        <Calendar className="w-3 h-3" /> {d.day}
                      </span>
                      <h3 className="font-display font-bold text-foreground text-sm">{d.title}</h3>
                    </div>
                    <ul className="space-y-1.5">
                      {d.tasks.map((task, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CircleDot className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ EXAM STRATEGY FOR THIS TOPIC ═══════════ */}
        <section className="py-12 sm:py-16 bg-secondary/20 border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-7 h-7 text-primary" />
                <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl">
                  Exam Strategy for <span className="text-gradient-gold">{topicName}</span>
                </h2>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-3xl">
                Tactical tips to maximise your marks from {topicName} questions on exam day.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {/* Time Management */}
                <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Timer className="w-5 h-5 text-primary" />
                    <h3 className="font-display font-bold text-foreground text-sm sm:text-base">Time Management</h3>
                  </div>
                  <div className="space-y-2">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      <strong className="text-foreground">Read carefully:</strong> Spend 15-20 seconds reading the question completely. Look for hidden information (units, constraints, special conditions).
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      <strong className="text-foreground">Apply & solve:</strong> Identify which {topicName} concept/formula applies. Execute the solution in {timePerProblem}.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      <strong className="text-foreground">Verify:</strong> Quick sanity check — does the answer make physical/mathematical sense? Are the units correct?
                    </p>
                  </div>
                </div>

                {/* When to Skip */}
                <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-5 h-5 text-amber-500" />
                    <h3 className="font-display font-bold text-foreground text-sm sm:text-base">When to Skip & Return</h3>
                  </div>
                  <div className="space-y-2">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      <strong className="text-foreground">Skip if:</strong> You can't identify the approach within 30 seconds, or the calculation looks too lengthy ({chapter.exam === 'JEE' ? 'especially in JEE Main where speed matters' : 'NEET rewards quick, confident answers'}).
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      <strong className="text-foreground">Mark & return:</strong> {chapter.exam === 'JEE' ? 'If you know the concept but need more time for calculation, mark for review and return in the final 20 minutes.' : 'Mark challenging questions and return after completing easier sections.'} 
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      <strong className="text-foreground">Never guess blindly:</strong> {chapter.exam === 'JEE' ? 'JEE Main deducts 1 mark for wrong MCQs. Only guess if you can eliminate 2+ options.' : 'NEET deducts 1 mark for wrong answers. Eliminate at least 2 options before guessing.'}
                    </p>
                  </div>
                </div>

                {/* Pro Tips */}
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 sm:p-6 md:col-span-2">
                  <h3 className="font-display font-bold text-foreground text-sm sm:text-base mb-3 flex items-center gap-2">
                    <Star className="w-5 h-5 text-primary" /> Quick Tips from Toppers
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      `For ${topicName}, always start by writing down the relevant formula(s) before solving — this prevents formula mix-ups under pressure.`,
                      chapter.exam === 'JEE'
                        ? `In JEE, if a ${topicName} problem seems too easy, double-check — there might be a subtle twist or boundary condition.`
                        : `In NEET, if a ${topicName} question matches an exact NCERT line you remember, trust your first instinct — it's usually correct.`,
                      `Practice solving ${topicName} problems mentally (without paper) for quick approximations — this helps eliminate wrong options instantly.`,
                      `Keep a "cheat sheet" of ${topicName} formulas + common traps. Review it 10 minutes before the exam (not during — stay calm during the exam).`,
                    ].map((tip, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground leading-relaxed">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ RECOMMENDED RESOURCES ═══════════ */}
        <section className="py-12 sm:py-16 bg-secondary/20 border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-7 h-7 text-primary" />
                <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl">
                  Recommended <span className="text-gradient-gold">Resources</span>
                </h2>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {chapter.exam === 'JEE' && chapter.subject === 'Physics' && [
                  { book: 'HC Verma — Concepts of Physics', why: `Read the chapter on ${chapter.chapter}, focus on ${topicName} section. Solve all in-chapter exercises.` },
                  { book: 'DC Pandey — Understanding Physics', why: `Practice topic-wise problems. The ${chapter.chapter} volume has excellent graded exercises.` },
                  { book: 'Previous Year Papers (NTA)', why: `Solve all PYQs related to ${topicName}. Your MindPeak mentor provides a curated set.` },
                ].map((r, i) => (
                  <div key={i} className="rounded-xl border border-border bg-card p-5">
                    <h3 className="font-display font-bold text-foreground text-sm mb-2">{r.book}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{r.why}</p>
                  </div>
                ))}
                {chapter.exam === 'JEE' && chapter.subject === 'Chemistry' && [
                  { book: 'NCERT + NCERT Exemplar', why: `Start with NCERT for ${topicName} theory. Exemplar provides application-level MCQs.` },
                  { book: 'MS Chauhan / Narendra Awasthi', why: `Deep practice for ${chapter.chapter}. Solve topic-wise to build speed and accuracy.` },
                  { book: 'Previous Year Papers (NTA)', why: `Identify ${topicName} question patterns across JEE Main and Advanced.` },
                ].map((r, i) => (
                  <div key={i} className="rounded-xl border border-border bg-card p-5">
                    <h3 className="font-display font-bold text-foreground text-sm mb-2">{r.book}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{r.why}</p>
                  </div>
                ))}
                {chapter.exam === 'JEE' && chapter.subject === 'Mathematics' && [
                  { book: 'Cengage Series / RD Sharma', why: `Comprehensive problems for ${topicName}. Start with easier problems, progress to harder ones.` },
                  { book: 'Vikas Gupta / Arihant', why: `JEE Advanced level problems for ${chapter.chapter}. Attempt after building foundation.` },
                  { book: 'Previous Year Papers (NTA)', why: `Solve all PYQs involving ${topicName}. Pattern recognition is key for Mathematics.` },
                ].map((r, i) => (
                  <div key={i} className="rounded-xl border border-border bg-card p-5">
                    <h3 className="font-display font-bold text-foreground text-sm mb-2">{r.book}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{r.why}</p>
                  </div>
                ))}
                {chapter.exam === 'NEET' && chapter.subject === 'Biology' && [
                  { book: 'NCERT (line-by-line)', why: `90%+ of NEET Biology comes from NCERT. Read the ${topicName} section multiple times and memorise key diagrams.` },
                  { book: 'NCERT Exemplar', why: `Application-level MCQs for ${chapter.chapter}. Focus on assertion-reason questions.` },
                  { book: 'MTG / Trueman\'s Biology', why: `Additional MCQ practice for ${topicName}. Solve topic-wise for targeted preparation.` },
                ].map((r, i) => (
                  <div key={i} className="rounded-xl border border-border bg-card p-5">
                    <h3 className="font-display font-bold text-foreground text-sm mb-2">{r.book}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{r.why}</p>
                  </div>
                ))}
                {chapter.exam === 'NEET' && chapter.subject === 'Physics' && [
                  { book: 'NCERT + Exemplar', why: `NCERT covers most NEET Physics directly. Read ${topicName} section, solve all back-exercises.` },
                  { book: 'DC Pandey (NEET Edition)', why: `Targeted numerical practice for ${chapter.chapter}. Focus on ${topicName}-specific problems.` },
                  { book: 'PYQ Books (15 years)', why: `Pattern recognition is critical. Solve all ${topicName}-related PYQs chronologically.` },
                ].map((r, i) => (
                  <div key={i} className="rounded-xl border border-border bg-card p-5">
                    <h3 className="font-display font-bold text-foreground text-sm mb-2">{r.book}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{r.why}</p>
                  </div>
                ))}
                {chapter.exam === 'NEET' && chapter.subject === 'Chemistry' && [
                  { book: 'NCERT (complete)', why: `NCERT is king for NEET Chemistry. Read ${topicName} section thoroughly — especially for Inorganic.` },
                  { book: 'MS Chauhan / VK Jaiswal', why: `Organic mechanisms and Inorganic depth for ${chapter.chapter}. Solve topic-wise.` },
                  { book: 'Narendra Awasthi', why: `Numerical practice for Physical Chemistry topics including ${topicName}.` },
                ].map((r, i) => (
                  <div key={i} className="rounded-xl border border-border bg-card p-5">
                    <h3 className="font-display font-bold text-foreground text-sm mb-2">{r.book}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{r.why}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ CTA ═══════════ */}
        <section className="py-12 sm:py-16 bg-primary/10 border-y border-primary/20">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl mb-4">
                Master {topicName} with <span className="text-gradient-gold">1-on-1 Expert Coaching</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base mb-6 max-w-2xl mx-auto">
                Your dedicated {chapter.subject} mentor from MindPeak's {chapter.exam === 'JEE' ? 'IIT' : 'AIIMS'} alumni network ensures you master every concept in {topicName} through interactive problem-solving, instant doubt resolution, and personalised practice sets.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8">
                {['1-on-1 dedicated mentor', 'Topic-wise mastery', 'Instant doubt resolution', 'Daily live sessions'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-foreground text-xs sm:text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={openDemoModal}
                className="w-full sm:w-auto px-10 py-4 bg-primary text-primary-foreground font-display font-bold text-xs sm:text-sm uppercase tracking-[0.15em] shadow-gold-glow hover:scale-105 transition-transform"
              >
                Book Free Demo Class →
              </button>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ QUICK REVISION NOTES ═══════════ */}
        <section className="py-12 sm:py-16 bg-secondary/20 border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="w-7 h-7 text-primary" />
                <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl">
                  Quick Revision — <span className="text-gradient-gold">{topicName}</span>
                </h2>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-3xl">
                Condensed revision notes for {topicName}. Review these before exams or during weekly revision sessions.
              </p>

              <div className="space-y-5">
                {/* Formulas Quick Ref */}
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-display font-bold text-foreground text-sm mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary" /> Formulas at a Glance
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {relatedFormulas.map((f, i) => (
                      <div key={i} className="flex items-start gap-2 bg-secondary/30 rounded-lg p-2.5">
                        <span className="text-primary text-xs font-bold mt-0.5">#{i + 1}</span>
                        <p className="font-mono text-sm text-foreground break-words">{f}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Points */}
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-display font-bold text-foreground text-sm mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" /> Key Points to Remember
                  </h3>
                  <div className="space-y-2">
                    {[
                      `${topicName} is topic #${topicIndex + 1} in ${chapter.chapter} (${chapter.topics.length} topics total)`,
                      `Chapter weightage: ${chapter.weightage} in ${examFull}`,
                      `Difficulty: ${topicDifficulty} — practice ${practiceCount} problems for mastery`,
                      `Related formulas: ${relatedFormulas.length} key formulas to memorise`,
                      `Common mistakes: ${relatedMistakes.length} pitfalls to avoid`,
                      `Time per exam question: ${timePerProblem}`,
                      prevTopic ? `Prerequisite: ${prevTopic}` : `This is the first topic in ${chapter.chapter}`,
                      nextTopic ? `Next topic: ${nextTopic}` : `This is the last topic in ${chapter.chapter}`,
                    ].map((point, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary/50 mt-1.5 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mistakes Quick Ref */}
                <div className="rounded-xl border border-amber-500/20 bg-card p-5">
                  <h3 className="font-display font-bold text-foreground text-sm mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500" /> Don't Forget
                  </h3>
                  <div className="space-y-2">
                    {relatedMistakes.map((m, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-amber-500 text-xs font-bold mt-0.5">⚠</span>
                        <p className="text-sm text-muted-foreground">{m}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats Summary */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="rounded-xl border border-border bg-card p-3 text-center">
                    <p className="text-lg font-black text-primary mb-0.5">{topicDifficulty}</p>
                    <p className="text-[10px] text-muted-foreground uppercase">Difficulty</p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-3 text-center">
                    <p className="text-lg font-black text-primary mb-0.5">{practiceCount}</p>
                    <p className="text-[10px] text-muted-foreground uppercase">Problems</p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-3 text-center">
                    <p className="text-lg font-black text-primary mb-0.5">{relatedFormulas.length}</p>
                    <p className="text-[10px] text-muted-foreground uppercase">Formulas</p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-3 text-center">
                    <p className="text-lg font-black text-primary mb-0.5">{timePerProblem}</p>
                    <p className="text-[10px] text-muted-foreground uppercase">Per Question</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ SELF-ASSESSMENT CHECKLIST ═══════════ */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-2">
                <ListChecks className="w-7 h-7 text-primary" />
                <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl">
                  Self-Assessment <span className="text-gradient-gold">Checklist</span>
                </h2>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-3xl">
                Check your readiness for {topicName}. If you can't confidently check all boxes, your MindPeak mentor will help you get there.
              </p>

              <div className="max-w-3xl space-y-3">
                {[
                  `I can explain ${topicName} to someone without looking at notes`,
                  `I know all ${relatedFormulas.length} related formulas and can derive/recall them`,
                  `I've solved ${practiceCount} practice problems from this topic`,
                  `I can solve a ${topicDifficulty !== 'Hard' ? 'medium-difficulty' : 'hard'} ${topicName} problem in under ${timePerProblem}`,
                  `I know the ${relatedMistakes.length} common mistakes and actively avoid them`,
                  `I've solved PYQs from at least the last 5 years involving ${topicName}`,
                  `I can score 80%+ on a timed test covering ${topicName}`,
                  `I understand how ${topicName} connects to ${nearTopics.slice(0, 2).join(' and ') || 'other topics in ' + chapter.chapter}`,
                  `I can identify ${topicName} question types (${chapter.exam === 'JEE' ? 'direct, conceptual, numerical, multi-concept' : 'NCERT recall, application, assertion-reason'}) from the question stem`,
                ].map((item, i) => {
                  const key = `check-${i}`;
                  return (
                    <motion.label
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: Math.min(i * 0.05, 0.3) }}
                      onClick={() => toggleCheck(key)}
                      className={`flex items-start gap-3 p-3 rounded-xl border bg-card cursor-pointer group transition-colors ${
                        checkedItems[key] ? 'border-primary/40 bg-primary/5' : 'border-border hover:border-primary/30'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                        checkedItems[key] ? 'border-primary bg-primary' : 'border-border group-hover:border-primary/50'
                      }`}>
                        {checkedItems[key] && <CheckCircle className="w-3.5 h-3.5 text-primary-foreground" />}
                      </div>
                      <span className={`text-sm transition-colors ${
                        checkedItems[key] ? 'text-foreground line-through opacity-70' : 'text-muted-foreground group-hover:text-foreground'
                      }`}>{item}</span>
                    </motion.label>
                  );
                })}
              </div>

              <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-5 text-center max-w-3xl">
                <p className="text-muted-foreground text-sm">
                  <strong className="text-foreground">Struggling with any items?</strong> MindPeak's 1-on-1 mentors identify and fix every gap systematically.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ WHAT TOPPERS SAY ═══════════ */}
        <section className="py-12 sm:py-16 bg-secondary/20 border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-7 h-7 text-primary" />
                <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl">
                  Topper Tips for <span className="text-gradient-gold">{topicName}</span>
                </h2>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-3xl">
                Advice from {chapter.exam === 'JEE' ? 'IIT' : 'AIIMS/NEET'} toppers who mastered {topicName}.
              </p>

              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  {
                    quote: chapter.exam === 'JEE'
                      ? `For ${topicName}, I focused on understanding the derivation completely. Once you know where a formula comes from, you'll never forget it — even under exam pressure.`
                      : `I read the NCERT section on ${topicName} at least 4 times. Each reading added clarity. By the 3rd time, I could predict MCQ options just from the text.`,
                    name: chapter.exam === 'JEE' ? 'JEE Advanced Topper' : 'NEET Topper',
                    tip: 'Deep understanding wins',
                  },
                  {
                    quote: `The biggest mistake students make with ${topicName} is not practising enough variety. Solve problems from different books — each author tests different aspects of the concept.`,
                    name: 'MindPeak Student',
                    tip: 'Practice variety matters',
                  },
                  {
                    quote: topicDifficulty === 'Hard'
                      ? `${topicName} was tough for me initially. Breaking it into smaller sub-concepts and mastering each one independently made the whole topic fall into place within a week.`
                      : `Don't take ${topicName} lightly because it seems ${topicDifficulty.toLowerCase()}. Examiners know students underprepare easy topics and ask tricky questions to exploit this.`,
                    name: chapter.exam === 'JEE' ? 'IIT Delhi Student' : 'AIIMS Student',
                    tip: topicDifficulty === 'Hard' ? 'Break it down' : 'Stay sharp',
                  },
                ].map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="rounded-xl border border-border bg-card p-5"
                  >
                    <MessageCircle className="w-5 h-5 text-primary/30 mb-3" />
                    <p className="text-foreground text-sm leading-relaxed italic mb-3">"{t.quote}"</p>
                    <div className="flex items-center justify-between">
                      <p className="text-foreground text-xs font-bold">{t.name}</p>
                      <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold">{t.tip}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ FAQs ═══════════ */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl text-center mb-8">
                FAQs — {topicName}
              </h2>
              <div className="space-y-3">
                {topicFaqs.map((faq, i) => (
                  <div key={i} className="border border-border rounded-xl overflow-hidden bg-card">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="flex items-center justify-between w-full text-left p-5 hover:bg-secondary/30 transition-colors"
                    >
                      <span className="font-display font-semibold text-foreground text-sm pr-4">{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ PREV / NEXT NAVIGATION ═══════════ */}
        <section className="py-8 sm:py-10 bg-secondary/20 border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="flex flex-col sm:flex-row items-stretch gap-4">
              {prevTopic ? (
                <Link
                  to={`/${chapterSlug}/${topicToSlug(prevTopic)}`}
                  className="flex-1 flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-all group"
                >
                  <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Previous Topic</p>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">{prevTopic}</p>
                  </div>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
              {nextTopic ? (
                <Link
                  to={`/${chapterSlug}/${topicToSlug(nextTopic)}`}
                  className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-all group text-right"
                >
                  <div className="min-w-0">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Next Topic</p>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">{nextTopic}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary flex-shrink-0" />
                </Link>
              ) : (
                <div className="flex-1" />
              )}
            </div>
          </div>
        </section>

        {/* ═══════════ ALL TOPICS IN THIS CHAPTER ═══════════ */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl text-center mb-2">
                All Topics in <span className="text-gradient-gold">{chapter.chapter}</span>
              </h2>
              <p className="text-muted-foreground text-sm text-center mb-8">
                <Link to={`/${chapterSlug}`} className="text-primary hover:underline">← Back to {chapter.chapter} chapter page</Link>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {chapter.topics.map((t, i) => {
                  const isCurrent = i === topicIndex;
                  return (
                    <Link
                      key={i}
                      to={isCurrent ? '#' : `/${chapterSlug}/${topicToSlug(t)}`}
                      className={`flex items-start gap-3 p-4 rounded-xl border transition-colors ${
                        isCurrent
                          ? 'bg-primary/5 border-primary/40'
                          : 'bg-card border-border hover:border-primary/30 group'
                      }`}
                    >
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        isCurrent ? 'bg-primary text-primary-foreground' : 'bg-primary/10'
                      }`}>
                        <span className={`text-xs font-bold ${isCurrent ? '' : 'text-primary'}`}>{i + 1}</span>
                      </div>
                      <div className="min-w-0">
                        <span className={`font-medium text-sm ${
                          isCurrent ? 'text-primary' : 'text-foreground group-hover:text-primary transition-colors'
                        }`}>{t}</span>
                        {isCurrent && <span className="ml-2 text-[10px] text-primary/70 uppercase tracking-wider">(You are here)</span>}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        <PageFooter />
      </main>
    </>
  );
};

export default TopicPage;
