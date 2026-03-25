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
  CheckCircle, ArrowRight, Phone, AlertTriangle, RotateCcw,
  BookOpen, ChevronDown, GraduationCap, BarChart3, Target,
  Lightbulb, Zap, FileText, TrendingUp, Brain, Clock, Star,
  Flame, Award, BookMarked, Sparkles, Calendar, Shield, Layers,
  Users, Compass, CircleDot, Trophy, MessageCircle, Timer,
  ListChecks, Route, Activity, Dumbbell, Eye,
} from 'lucide-react';
const logo = '/images/logo.jpeg';
import { getChapterBySlug, chapters, CHAPTER_SLUGS, topicToSlug } from '@/data/chapterData';
import { getLastUpdated } from '@/lib/contentFreshness';
import type { ChapterData } from '@/data/chapterData';

export { CHAPTER_SLUGS };

/* ═══════════════════════════════════════════════════════════
   ChapterPage — Full-fledged chapter-wise SEO page
   ═══════════════════════════════════════════════════════════ */

const DifficultyBadge = ({ difficulty }: { difficulty: string }) => {
  const colors: Record<string, string> = {
    Easy: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    Moderate: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    Hard: 'bg-red-500/15 text-red-400 border-red-500/30',
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border ${colors[difficulty] || colors.Moderate}`}>
      <Flame className="w-3 h-3" /> {difficulty}
    </span>
  );
};

/* ─── Flashcard Component ─── */
const FormulaFlashcard = ({ formula, index }: { formula: string; index: number }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: Math.min(index * 0.06, 0.4) }}
      onClick={() => setFlipped(!flipped)}
      className="cursor-pointer group"
    >
      <div className={`relative rounded-2xl border-2 transition-all duration-300 ${
        flipped
          ? 'border-primary/50 bg-primary/5 shadow-lg shadow-primary/10'
          : 'border-border bg-card hover:border-primary/30 hover:shadow-md'
      }`}>
        <div className="p-6 sm:p-8 flex flex-col justify-center min-h-[160px]">
          {!flipped ? (
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-sm">#{index + 1}</span>
              </div>
              <p className="font-mono text-base sm:text-lg font-semibold text-foreground leading-relaxed break-words">{formula}</p>
              <p className="text-[10px] text-muted-foreground mt-4 uppercase tracking-wider">Tap to flip</p>
            </div>
          ) : (
            <div className="text-center">
              <Sparkles className="w-5 h-5 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your MindPeak mentor teaches derivation, application &amp; common traps for this formula.
              </p>
              <button className="mt-3 inline-flex items-center gap-1 text-[10px] text-muted-foreground hover:text-primary">
                <RotateCcw className="w-3 h-3" /> Flip back
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ChapterPage = () => {
  const pathname = usePathname();
  const slug = pathname.replace(/^\//, '');
  const { openDemoModal } = useDemoModal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleCheck = (key: string) => setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }));

  const chapter = slug ? getChapterBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!chapter) {
    return <Navigate to="/" replace />;
  }

  const Icon = chapter.icon;
  const examFull = chapter.exam === 'JEE' ? 'JEE Main & Advanced' : 'NEET UG';
  const pageTitle = `${chapter.chapter} for ${chapter.exam} — Complete Guide & 1-on-1 Coaching | MindPeak`;
  const pageDesc = chapter.description;

  const prepSubjectSlug = `${chapter.exam.toLowerCase()}-${chapter.subject.toLowerCase()}-preparation`;

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
    dateModified: getLastUpdated(slug),
    about: [
      { '@type': 'Thing', name: chapter.exam === 'JEE' ? 'JEE Main' : 'NEET-UG', sameAs: chapter.exam === 'JEE' ? 'https://en.wikipedia.org/wiki/Joint_Entrance_Examination_%E2%80%93_Main' : 'https://en.wikipedia.org/wiki/National_Eligibility_cum_Entrance_Test_(Undergraduate)' },
    ],
    isPartOf: {
      '@type': 'WebPage',
      '@id': `https://mindpeakinstitute.com/${prepSubjectSlug}`,
      name: `${chapter.exam} ${chapter.subject} Preparation`,
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.hero-description'],
    },
  };

  // Related chapters same subject
  const relatedChapters = chapters
    .filter(c => c.exam === chapter.exam && c.subject === chapter.subject && c.slug !== chapter.slug)
    .slice(0, 6);

  // Related chapters same exam different subject
  const crossSubjectChapters = chapters
    .filter(c => c.exam === chapter.exam && c.subject !== chapter.subject)
    .slice(0, 6);

  // Difficulty-based study hours estimate
  const studyHours = chapter.difficulty === 'Easy' ? '15-20' : chapter.difficulty === 'Moderate' ? '25-35' : '40-50';
  // prepSubjectSlug moved above articleSchema

  // ── 5x content data generation ──
  const topicDifficultyMap = chapter.topics.map((t, i) => {
    const base = chapter.difficulty === 'Easy' ? 0 : chapter.difficulty === 'Moderate' ? 1 : 2;
    const variance = (i % 3) - 1; // -1, 0, 1
    const level = Math.max(0, Math.min(2, base + variance));
    return { topic: t, difficulty: ['Easy', 'Moderate', 'Hard'][level], importance: i < chapter.topics.length * 0.4 ? 'High' : i < chapter.topics.length * 0.75 ? 'Medium' : 'Foundation' };
  });

  const problemCount = chapter.difficulty === 'Hard' ? '200+' : chapter.difficulty === 'Moderate' ? '150+' : '100+';
  const pyqPerYear = chapter.exam === 'JEE' ? '2-4' : '2-5';

  // Week-wise plan distribution
  const weekTopics = [
    chapter.topics.slice(0, Math.ceil(chapter.topics.length * 0.3)),
    chapter.topics.slice(Math.ceil(chapter.topics.length * 0.3), Math.ceil(chapter.topics.length * 0.6)),
    chapter.topics.slice(Math.ceil(chapter.topics.length * 0.6), Math.ceil(chapter.topics.length * 0.85)),
    chapter.topics.slice(Math.ceil(chapter.topics.length * 0.85)),
  ];

  // Auto-generated extended FAQs
  const autoFaqs = [
    {
      q: `How many questions come from ${chapter.chapter} in ${chapter.exam}?`,
      a: `${chapter.chapter} carries ${chapter.weightage} weightage in ${examFull}. You can expect ${pyqPerYear} questions per year from this chapter. The questions test ${chapter.difficulty === 'Hard' ? 'deep conceptual understanding and multi-step problem solving' : chapter.difficulty === 'Moderate' ? 'a mix of direct formulas and conceptual application' : 'direct formula application and basic concepts'}. MindPeak's 1-on-1 mentors prepare you for every question type.`,
    },
    {
      q: `Is ${chapter.chapter} easy or hard for ${chapter.exam}?`,
      a: `${chapter.chapter} is rated ${chapter.difficulty} difficulty. ${chapter.difficulty === 'Hard' ? 'It requires strong fundamentals and extensive practice. Many students struggle with this chapter, but with the right guidance, it becomes one of the most scoring chapters.' : chapter.difficulty === 'Moderate' ? 'Most students find it manageable with consistent practice. The key is building strong conceptual clarity before attempting exam-level problems.' : 'It is one of the more straightforward chapters. With proper understanding and formula practice, you can score full marks from this chapter.'} MindPeak mentors create a personalised plan based on your current level.`,
    },
    {
      q: `How long does it take to complete ${chapter.chapter}?`,
      a: `Expect to invest ${studyHours} focused hours to master ${chapter.chapter} completely. This includes concept learning, problem solving, PYQ practice, and revision. With MindPeak's 1-on-1 coaching, many students complete it faster because sessions are tailored to skip what you already know and focus on gaps.`,
    },
    {
      q: `What are the most important topics in ${chapter.chapter} for ${chapter.exam}?`,
      a: `The most frequently tested topics in ${chapter.chapter} include ${chapter.topics.slice(0, 3).join(', ')}. These topics carry the highest weightage within the chapter. However, all ${chapter.topics.length} topics are important — examiners can pick questions from any sub-topic. MindPeak ensures comprehensive coverage.`,
    },
    {
      q: `Which books are best for ${chapter.chapter} preparation?`,
      a: `${chapter.exam === 'JEE' ? (chapter.subject === 'Physics' ? 'HC Verma for concepts, DC Pandey for practice, and Irodov for JEE Advanced level problems.' : chapter.subject === 'Chemistry' ? 'NCERT + Exemplar as foundation, MS Chauhan for Organic, Narendra Awasthi for Physical Chemistry.' : 'Cengage Series for comprehensive practice, RD Sharma for foundation, Vikas Gupta for Advanced level.') : (chapter.subject === 'Biology' ? 'NCERT line-by-line is the primary source (90%+ questions come from it), supplemented by NCERT Exemplar and MTG/Trueman\'s for extra MCQ practice.' : chapter.subject === 'Physics' ? 'NCERT + Exemplar as primary, DC Pandey NEET edition for numerical practice, and 15-year PYQ compilations.' : 'NCERT complete coverage (especially for Inorganic), MS Chauhan for Organic, Narendra Awasthi for Physical Chemistry.')} Your MindPeak mentor recommends specific chapters and problems based on your progress.`,
    },
    {
      q: `Can I skip ${chapter.chapter} for ${chapter.exam}?`,
      a: `Absolutely not. ${chapter.chapter} carries ${chapter.weightage} weightage and is tested every year. Skipping it means losing guaranteed marks. ${chapter.difficulty === 'Easy' ? 'This is actually one of the easiest chapters to score in — you\'d be leaving free marks on the table.' : chapter.difficulty === 'Moderate' ? 'With the right approach, this chapter is very manageable and offers consistent marks.' : 'While challenging, mastering this chapter differentiates top rankers from average scorers.'} MindPeak mentors can help you prepare it efficiently even if you\'re starting late.`,
    },
    {
      q: `What mistakes should I avoid while studying ${chapter.chapter}?`,
      a: `The most common mistakes include: ${chapter.commonMistakes.slice(0, 2).join('; ')}. Additionally, students often make the mistake of memorising formulas without understanding derivations, skipping PYQ practice, and not revising regularly. MindPeak's 1-on-1 sessions actively catch and correct these mistakes in real-time.`,
    },
  ];

  const allFaqs = [...chapter.faqs, ...autoFaqs];

  const faqSchema = buildFAQSchemaFromQA(allFaqs);

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDesc}
        canonical={`https://mindpeakinstitute.com/${chapter.slug}`}
        jsonLd={[faqSchema, articleSchema]}
      />
      <Navbar />
      <main className="min-h-screen bg-background pt-20 sm:pt-24">

        {/* ═══════════ HERO ═══════════ */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/3 py-14 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl text-center">
            <div>
              {/* Breadcrumb */}
              <nav className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground mb-6 flex-wrap">
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
                <span className="text-foreground font-medium">{chapter.chapter}</span>
              </nav>

              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-primary text-[10px] sm:text-xs uppercase tracking-[0.15em] font-semibold">MindPeak Institute</p>
                  <p className="text-muted-foreground text-xs">{examFull} · {chapter.subject}</p>
                </div>
              </div>

              <h1 className="font-display font-black text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] leading-tight mb-4">
                {chapter.chapter} for {chapter.exam}
                <span className="text-gradient-gold"> — Complete Preparation Guide</span>
              </h1>

              <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
                {chapter.description}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <div className="flex items-center gap-2 bg-card/80 backdrop-blur px-4 py-2.5 rounded-lg border text-sm">
                  <BarChart3 className="w-4 h-4 text-primary" />
                  <span className="font-semibold">{chapter.weightage}</span>
                  <span className="text-muted-foreground">weightage</span>
                </div>
                <DifficultyBadge difficulty={chapter.difficulty} />
                <div className="flex items-center gap-2 bg-card/80 backdrop-blur px-4 py-2.5 rounded-lg border text-sm">
                  <Target className="w-4 h-4 text-primary" />
                  <span className="font-semibold">{chapter.topics.length}</span>
                  <span className="text-muted-foreground">topics covered</span>
                </div>
                <div className="flex items-center gap-2 bg-card/80 backdrop-blur px-4 py-2.5 rounded-lg border text-sm">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="font-semibold">{studyHours}</span>
                  <span className="text-muted-foreground">hours to master</span>
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
            </div>
          </div>
        </section>

        {/* ═══════════ CHAPTER AT A GLANCE ═══════════ */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="w-7 h-7 text-primary" />
                <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl">
                  {chapter.chapter} — <span className="text-gradient-gold">Chapter at a Glance</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-8">
                <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <h3 className="font-display font-bold text-foreground text-sm sm:text-base">Why It Matters</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {chapter.chapter} carries <strong className="text-foreground">{chapter.weightage}</strong> weightage in {examFull}. 
                    This chapter is tested consistently every year in {examFull}. 
                    {chapter.difficulty === 'Hard' ? ' It\'s one of the toughest chapters — but also one of the most rewarding to master.' : 
                     chapter.difficulty === 'Easy' ? ' This is one of the most scoring chapters — direct formula application gives quick marks.' :
                     ' A moderate-difficulty chapter that rewards consistent practice and conceptual clarity.'}
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Brain className="w-5 h-5 text-primary" />
                    <h3 className="font-display font-bold text-foreground text-sm sm:text-base">Exam Pattern</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {chapter.exam === 'JEE' 
                      ? `In JEE Main, expect 2-4 questions from ${chapter.chapter} — mostly numerical and single correct. JEE Advanced adds multi-concept and paragraph-based problems. Both exams test application, not just formula recall.`
                      : `NEET typically asks 2-5 questions from ${chapter.chapter} — mostly NCERT-based MCQs with direct conceptual or numerical application. Assertion-reason questions from this chapter are common.`}
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <h3 className="font-display font-bold text-foreground text-sm sm:text-base">Time Investment</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Expect to invest <strong className="text-foreground">{studyHours} focused hours</strong> to master {chapter.chapter} completely. 
                    This includes concept learning ({chapter.difficulty === 'Hard' ? '40%' : '30%'}), problem solving ({chapter.difficulty === 'Hard' ? '45%' : '50%'}), and revision ({chapter.difficulty === 'Hard' ? '15%' : '20%'}).
                    MindPeak&apos;s 1-on-1 coaching compresses this timeline by targeting YOUR specific gaps.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ CHAPTER DEEP DIVE ═══════════ */}
        <section className="py-12 sm:py-16 bg-secondary/20 border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-2">
                <Layers className="w-7 h-7 text-primary" />
                <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl">
                  {chapter.chapter} — <span className="text-gradient-gold">In-Depth Overview</span>
                </h2>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-3xl">
                Everything you need to know about {chapter.chapter} before starting preparation. Understanding the big picture helps you study smarter.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* What You'll Learn */}
                <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <h3 className="font-display font-bold text-foreground text-sm sm:text-base">What You'll Learn</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {chapter.chapter} covers {chapter.topics.length} critical sub-topics that form the backbone of {chapter.subject} in {examFull}.
                  </p>
                  <ul className="space-y-1.5">
                    {chapter.topics.slice(0, 5).map((t, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                    {chapter.topics.length > 5 && (
                      <li className="text-xs text-primary font-medium mt-2">+ {chapter.topics.length - 5} more topics covered below</li>
                    )}
                  </ul>
                </div>

                {/* Prerequisites */}
                <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Route className="w-5 h-5 text-primary" />
                    <h3 className="font-display font-bold text-foreground text-sm sm:text-base">Prerequisites</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {chapter.exam === 'JEE'
                      ? `Before diving into ${chapter.chapter}, ensure you have a solid grasp of fundamental ${chapter.subject} concepts. ${chapter.subject === 'Physics' ? 'Strong mathematical skills (algebra, calculus basics, trigonometry) are essential for solving physics problems effectively.' : chapter.subject === 'Chemistry' ? 'Understanding of basic atomic structure, periodic trends, and chemical bonding will help you grasp this chapter faster.' : 'A solid foundation in algebraic manipulation, basic geometry, and logical reasoning is necessary.'}`
                      : `For NEET, ensure you've read the relevant NCERT chapters that lead into ${chapter.chapter}. ${chapter.subject === 'Biology' ? 'Basic cell biology and classification knowledge forms the foundation for most Biology chapters.' : chapter.subject === 'Physics' ? 'Mathematical skills at the 11th-12th level (basic calculus, trigonometry) are sufficient for NEET Physics.' : 'Basic understanding of atomic structure, periodic properties, and chemical bonding is essential.'}`}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Your MindPeak mentor assesses your current level in the first session and identifies any gaps to fill before starting {chapter.chapter}.
                  </p>
                </div>

                {/* Real-World Applications */}
                <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Compass className="w-5 h-5 text-primary" />
                    <h3 className="font-display font-bold text-foreground text-sm sm:text-base">Real-World Applications</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {chapter.subject === 'Physics'
                      ? `${chapter.chapter} concepts are applied in engineering, technology, and everyday life. From satellite communications to medical imaging, the principles you learn here form the foundation of modern technology. Understanding real-world applications helps you remember concepts better and solve application-based ${chapter.exam} questions.`
                      : chapter.subject === 'Chemistry'
                      ? `${chapter.chapter} has direct applications in pharmaceuticals, materials science, environmental chemistry, and industrial processes. ${chapter.exam === 'JEE' ? 'JEE Advanced often tests application-based questions linking chemistry to real-world scenarios.' : 'NEET may include questions about biological applications of chemical principles.'} Knowing these connections deepens your understanding.`
                      : chapter.subject === 'Mathematics'
                      ? `${chapter.chapter} is fundamental to engineering, computer science, economics, and data science. These mathematical tools are used in AI/ML algorithms, structural engineering, financial modelling, and scientific research. JEE aspirants who understand applications solve problems more intuitively.`
                      : `${chapter.chapter} concepts are directly relevant to medicine, healthcare, biotechnology, and environmental science. As a future doctor, understanding these biological principles is not just exam preparation — it's the foundation of your medical career. NEET questions often test clinical applications.`}
                  </p>
                </div>

                {/* How It's Tested */}
                <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="w-5 h-5 text-primary" />
                    <h3 className="font-display font-bold text-foreground text-sm sm:text-base">How It's Tested in {chapter.exam}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {chapter.exam === 'JEE'
                      ? `In JEE Main, ${chapter.chapter} appears as single correct MCQs and numerical value questions. Expect ${pyqPerYear} questions directly from this chapter. JEE Advanced raises the bar with multi-correct, paragraph-based, and matrix-matching questions that often combine ${chapter.chapter} with other chapters.`
                      : `NEET tests ${chapter.chapter} through single correct MCQs — ${pyqPerYear} questions per year on average. Questions are predominantly NCERT-based with direct conceptual application. Assertion-Reason questions from this chapter test deeper understanding of cause-effect relationships.`}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {chapter.exam === 'JEE' ? (
                      <>
                        <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-medium">Single Correct MCQ</span>
                        <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-medium">Numerical Value</span>
                        <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-medium">Multi-Correct (Adv)</span>
                        <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-medium">Paragraph Based (Adv)</span>
                      </>
                    ) : (
                      <>
                        <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-medium">Single Correct MCQ</span>
                        <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-medium">Assertion-Reason</span>
                        <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-medium">Diagram Based</span>
                        <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-medium">NCERT Direct</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Difficulty Breakdown */}
                <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Activity className="w-5 h-5 text-primary" />
                    <h3 className="font-display font-bold text-foreground text-sm sm:text-base">Difficulty Breakdown</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    Overall rated <strong className="text-foreground">{chapter.difficulty}</strong>, but difficulty varies by topic:
                  </p>
                  <div className="space-y-2">
                    {['Easy', 'Moderate', 'Hard'].map(level => {
                      const count = topicDifficultyMap.filter(t => t.difficulty === level).length;
                      const pct = Math.round((count / chapter.topics.length) * 100);
                      const barColor = level === 'Easy' ? 'bg-emerald-500' : level === 'Moderate' ? 'bg-amber-500' : 'bg-red-500';
                      return count > 0 ? (
                        <div key={level}>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-muted-foreground">{level} ({count} topics)</span>
                            <span className="text-foreground font-medium">{pct}%</span>
                          </div>
                          <div className="h-2 bg-secondary rounded-full overflow-hidden">
                            <div className={`h-full ${barColor} rounded-full`} style={{ width: `${pct}%` }} />
                          </div>
                        </div>
                      ) : null;
                    })}
                  </div>
                </div>

                {/* Connection to Other Chapters */}
                <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Brain className="w-5 h-5 text-primary" />
                    <h3 className="font-display font-bold text-foreground text-sm sm:text-base">Chapter Connections</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {chapter.chapter} doesn't exist in isolation. It connects to {relatedChapters.length > 0 ? relatedChapters.length : 'several'} other {chapter.subject} chapters.
                  </p>
                  {relatedChapters.length > 0 && (
                    <ul className="space-y-1.5">
                      {relatedChapters.slice(0, 4).map((rc, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ArrowRight className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                          <span>
                            <Link to={`/${rc.slug}`} className="text-primary hover:underline font-medium">{rc.chapter}</Link>
                            <span className="text-xs"> — {rc.weightage}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <p className="text-muted-foreground text-xs mt-3">
                    {chapter.exam === 'JEE' ? 'JEE Advanced frequently combines concepts from multiple chapters in a single problem.' : 'NEET may test assertion-reason questions that span multiple chapters.'}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ TOPICS COVERED ═══════════ */}
        <section className="py-12 sm:py-16 bg-secondary/20 border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-2">
                <BookOpen className="w-7 h-7 text-primary" />
                <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl">
                  Complete <span className="text-gradient-gold">Syllabus & Topics</span>
                </h2>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-3xl">
                Every topic in {chapter.chapter} covered in our {chapter.exam} program. Your MindPeak mentor ensures mastery of each before moving forward.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {chapter.topics.map((topic, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: Math.min(i * 0.04, 0.3) }}
                  >
                    <Link
                      to={`/${chapter.slug}/${topicToSlug(topic)}`}
                      className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-sm transition-all group h-full"
                    >
                      <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary text-xs font-bold">{i + 1}</span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-foreground font-medium text-sm group-hover:text-primary transition-colors">{topic}</span>
                        <span className="block text-[10px] text-muted-foreground mt-1 group-hover:text-primary/70">View detailed guide →</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground/70 group-hover:text-primary flex-shrink-0 mt-1 transition-colors" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ TOPIC-WISE DIFFICULTY & IMPORTANCE ═══════════ */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-2">
                <Activity className="w-7 h-7 text-primary" />
                <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl">
                  Topic-Wise <span className="text-gradient-gold">Difficulty & Importance</span>
                </h2>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-3xl">
                Not all topics in {chapter.chapter} are equally important or equally difficult. Use this analysis to prioritise your study time — focus on high-importance topics first, then build towards harder ones.
              </p>

              <div className="overflow-x-auto">
                <div className="min-w-[600px]">
                  {/* Header */}
                  <div className="grid grid-cols-12 gap-3 px-4 py-3 bg-secondary/50 rounded-t-xl border border-border text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    <div className="col-span-1">#</div>
                    <div className="col-span-5">Topic</div>
                    <div className="col-span-3">Difficulty</div>
                    <div className="col-span-3">Importance</div>
                  </div>
                  {/* Rows */}
                  {topicDifficultyMap.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: Math.min(i * 0.03, 0.3) }}
                      className={`grid grid-cols-12 gap-3 px-4 py-3 border-x border-b border-border items-center ${i % 2 === 0 ? 'bg-card' : 'bg-card/50'} ${i === topicDifficultyMap.length - 1 ? 'rounded-b-xl' : ''}`}
                    >
                      <div className="col-span-1 text-xs text-muted-foreground font-bold">{i + 1}</div>
                      <div className="col-span-5">
                        <Link to={`/${chapter.slug}/${topicToSlug(item.topic)}`} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                          {item.topic}
                        </Link>
                      </div>
                      <div className="col-span-3">
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                          item.difficulty === 'Easy' ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30' :
                          item.difficulty === 'Moderate' ? 'bg-amber-500/15 text-amber-400 border-amber-500/30' :
                          'bg-red-500/15 text-red-400 border-red-500/30'
                        }`}>
                          {item.difficulty}
                        </span>
                      </div>
                      <div className="col-span-3">
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          item.importance === 'High' ? 'bg-primary/15 text-primary' :
                          item.importance === 'Medium' ? 'bg-blue-500/15 text-blue-400' :
                          'bg-secondary text-muted-foreground'
                        }`}>
                          {item.importance === 'High' && <Star className="w-2.5 h-2.5" />}
                          {item.importance}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-center">
                  <p className="text-2xl font-black text-emerald-400 mb-1">{topicDifficultyMap.filter(t => t.difficulty === 'Easy').length}</p>
                  <p className="text-xs text-muted-foreground">Easy Topics</p>
                  <p className="text-[10px] text-muted-foreground mt-1">Complete these first for quick marks</p>
                </div>
                <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 text-center">
                  <p className="text-2xl font-black text-amber-400 mb-1">{topicDifficultyMap.filter(t => t.difficulty === 'Moderate').length}</p>
                  <p className="text-xs text-muted-foreground">Moderate Topics</p>
                  <p className="text-[10px] text-muted-foreground mt-1">Practice-intensive, high ROI topics</p>
                </div>
                <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4 text-center">
                  <p className="text-2xl font-black text-red-400 mb-1">{topicDifficultyMap.filter(t => t.difficulty === 'Hard').length}</p>
                  <p className="text-xs text-muted-foreground">Hard Topics</p>
                  <p className="text-[10px] text-muted-foreground mt-1">Need mentor guidance for mastery</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ FORMULA FLASHCARDS ═══════════ */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-7 h-7 text-primary" />
                <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl">
                  Key Formulas — <span className="text-gradient-gold">Interactive Flashcards</span>
                </h2>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base mb-3 max-w-3xl">
                Tap any card to flip it. Master these formulas for {chapter.chapter} — our 1-on-1 mentors teach you the <em>derivation and when to use each one</em>, not just blind memorization.
              </p>
              <p className="text-xs text-muted-foreground/70 mb-8 flex items-center gap-1.5">
                <RotateCcw className="w-3.5 h-3.5" /> Click/tap cards to flip them
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {chapter.keyFormulas.map((formula, i) => (
                  <FormulaFlashcard key={i} formula={formula} index={i} />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ KEY CONCEPTS & DEFINITIONS ═══════════ */}
        <section className="py-12 sm:py-16 bg-secondary/20 border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-2">
                <Eye className="w-7 h-7 text-primary" />
                <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl">
                  Key Concepts & <span className="text-gradient-gold">Definitions</span>
                </h2>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-3xl">
                These are the core concepts and definitions you must know for {chapter.chapter}. Understanding these deeply — not just memorising — is what separates toppers from average scorers.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {chapter.topics.slice(0, 8).map((topic, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: Math.min(i * 0.06, 0.3) }}
                    className="rounded-xl border border-border bg-card p-5"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <CircleDot className="w-4 h-4 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-display font-bold text-foreground text-sm mb-2">{topic}</h3>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                          {chapter.exam === 'JEE'
                            ? `A core concept in ${chapter.chapter} that ${chapter.subject === 'Physics' ? 'involves understanding the physical principles, mathematical framework, and derivations. JEE Main tests direct application while JEE Advanced may combine this with other concepts from ' + chapter.subject + '.' : chapter.subject === 'Chemistry' ? 'requires understanding the underlying chemical principles, reaction mechanisms, and their applications. Both JEE Main and Advanced test conceptual depth from this topic.' : 'demands strong mathematical reasoning, proof techniques, and problem-solving skills. JEE Advanced especially tests creative application of this concept.'}`
                            : `An important NEET concept within ${chapter.chapter}. ${chapter.subject === 'Biology' ? 'Focus on NCERT descriptions, diagrams, and key terminology. NEET questions test direct recall and conceptual understanding of biological processes.' : chapter.subject === 'Physics' ? 'Understand the concept, its mathematical formulation, and practice numerical problems from NCERT exercises.' : 'Know the definitions, chemical equations, and practical applications as described in NCERT.'}`}
                        </p>
                        <Link
                          to={`/${chapter.slug}/${topicToSlug(topic)}`}
                          className="inline-flex items-center gap-1 text-primary text-[10px] font-semibold mt-2 hover:underline"
                        >
                          Learn more about {topic} <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {chapter.topics.length > 8 && (
                <p className="text-center text-sm text-muted-foreground mt-6">
                  + {chapter.topics.length - 8} more concepts covered in this chapter. <Link to={`/${chapter.slug}`} className="text-primary hover:underline">Explore all topics above ↑</Link>
                </p>
              )}
            </motion.div>
          </div>
        </section>

        {/* ═══════════ COMMON MISTAKES ═══════════ */}
        <section className="py-12 sm:py-16 bg-secondary/20 border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-2">
                <AlertTriangle className="w-7 h-7 text-amber-500" />
                <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl">
                  Common Mistakes <span className="text-gradient-gold">to Avoid</span>
                </h2>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-3xl">
                Our mentors have identified these as the top mistakes {chapter.exam} aspirants make in {chapter.chapter}. 
                Personalized coaching helps you catch and fix every one before exam day.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
                {chapter.commonMistakes.map((mistake, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="rounded-xl border border-amber-500/20 bg-card p-5 flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-500 font-bold text-sm">#{i + 1}</span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-foreground text-sm font-medium leading-relaxed">{mistake}</p>
                      <p className="text-muted-foreground text-xs mt-2">
                        MindPeak mentors actively watch for this mistake in your problem-solving and correct it in real-time.
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ QUESTION PATTERN ANALYSIS ═══════════ */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-7 h-7 text-primary" />
                <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl">
                  Question Pattern <span className="text-gradient-gold">Analysis</span>
                </h2>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-3xl">
                Understanding how {chapter.chapter} is tested in {examFull} helps you prepare strategically. Here's the pattern breakdownbased on previous years.
              </p>

              {chapter.exam === 'JEE' ? (
                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { type: 'Single Correct MCQ', pct: '40-50%', desc: `Direct formula application and conceptual questions. ${chapter.difficulty === 'Easy' ? 'Most questions from this chapter fall here — learn formulas well.' : 'Tests your speed and accuracy with core concepts.'}`, icon: CheckCircle, color: 'text-emerald-400 bg-emerald-500/10' },
                      { type: 'Numerical Value', pct: '25-35%', desc: `Calculate exact numerical answers. ${chapter.subject === 'Physics' ? 'Requires strong mathematical skills and unit awareness.' : chapter.subject === 'Chemistry' ? 'Involves stoichiometry, equilibrium constants, or molecular properties.' : 'Tests computational accuracy and problem-solving speed.'}`, icon: BarChart3, color: 'text-blue-400 bg-blue-500/10' },
                      { type: 'Multi-Correct (Adv)', pct: '15-20%', desc: `Multiple correct options — no partial marking in some years. Requires thorough understanding of ${chapter.chapter} concepts. One of the most scoring yet tricky question types.`, icon: ListChecks, color: 'text-amber-400 bg-amber-500/10' },
                      { type: 'Paragraph/Linked (Adv)', pct: '10-15%', desc: `2-3 questions based on a common scenario combining ${chapter.chapter} with other chapters. Tests deep integration of concepts across ${chapter.subject}.`, icon: FileText, color: 'text-purple-400 bg-purple-500/10' },
                    ].map((q, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="rounded-xl border border-border bg-card p-5"
                      >
                        <div className={`w-9 h-9 rounded-lg ${q.color} flex items-center justify-center mb-3`}>
                          <q.icon className="w-4 h-4" />
                        </div>
                        <h3 className="font-display font-bold text-foreground text-sm mb-1">{q.type}</h3>
                        <p className="text-primary text-xs font-bold mb-2">{q.pct} of questions</p>
                        <p className="text-muted-foreground text-xs leading-relaxed">{q.desc}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
                    <h3 className="font-display font-bold text-foreground text-sm mb-2 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-primary" /> Pro Tip: JEE Strategy for {chapter.chapter}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      In JEE Main, attempt all {chapter.chapter} questions since they tend to be straightforward. In JEE Advanced, read paragraph-based questions fully before attempting — they often contain hidden information. For multi-correct, mark only the options you're 100% sure about. MindPeak's mock tests simulate exact exam patterns.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { type: 'Direct NCERT MCQ', pct: '50-60%', desc: `Straightforward questions directly from NCERT text. ${chapter.subject === 'Biology' ? 'Often tests exact lines, diagrams, and terminology from the textbook.' : 'Tests concepts and formulas as presented in NCERT.'}`, icon: BookOpen, color: 'text-emerald-400 bg-emerald-500/10' },
                      { type: 'Conceptual Application', pct: '20-25%', desc: `Apply ${chapter.chapter} concepts to new scenarios. Requires deeper understanding beyond mere recall. Practice NCERT Exemplar for this type.`, icon: Brain, color: 'text-blue-400 bg-blue-500/10' },
                      { type: 'Assertion-Reason', pct: '10-15%', desc: `Tests cause-effect understanding in ${chapter.chapter}. Both statements may be correct but the reasoning connection is what matters. Read each statement carefully.`, icon: Target, color: 'text-amber-400 bg-amber-500/10' },
                      { type: 'Diagram/Figure Based', pct: '10-15%', desc: `Identify structures, label diagrams, or interpret graphs related to ${chapter.chapter}. ${chapter.subject === 'Biology' ? 'NCERT diagrams are especially important — redraw them during revision.' : 'Practice interpreting graphs and circuit/structure diagrams.'}`, icon: Eye, color: 'text-purple-400 bg-purple-500/10' },
                    ].map((q, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="rounded-xl border border-border bg-card p-5"
                      >
                        <div className={`w-9 h-9 rounded-lg ${q.color} flex items-center justify-center mb-3`}>
                          <q.icon className="w-4 h-4" />
                        </div>
                        <h3 className="font-display font-bold text-foreground text-sm mb-1">{q.type}</h3>
                        <p className="text-primary text-xs font-bold mb-2">{q.pct} of questions</p>
                        <p className="text-muted-foreground text-xs leading-relaxed">{q.desc}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
                    <h3 className="font-display font-bold text-foreground text-sm mb-2 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-primary" /> Pro Tip: NEET Strategy for {chapter.chapter}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      For NEET, never skip assertion-reason questions from {chapter.chapter} — they're often easy marks if you've read NCERT carefully. Spend 45-60 seconds per MCQ. If unsure, eliminate 2 options first, then make an educated guess (no negative marking for eliminated options). MindPeak's NEET mock tests train this exam temperament.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* ═══════════ PYQ PRACTICE ═══════════ */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-2">
                <FileText className="w-7 h-7 text-primary" />
                <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl">
                  Previous Year <span className="text-gradient-gold">Questions (PYQs)</span>
                </h2>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-3xl">
                {chapter.chapter} is tested every year in {examFull}. Solving PYQs is the single most effective preparation strategy — it reveals exam patterns, question framing, and your weak areas.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                <div className="rounded-xl border border-border bg-card p-5 text-center">
                  <p className="text-3xl font-black text-primary mb-1">{chapter.weightage}</p>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider">Exam Weightage</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5 text-center">
                  <p className="text-3xl font-black text-primary mb-1">{chapter.topics.length}</p>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider">Topics Tested</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5 text-center">
                  <p className="text-3xl font-black text-primary mb-1">{chapter.difficulty}</p>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider">Difficulty Level</p>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-5 sm:p-6 mb-6">
                <h3 className="font-display font-bold text-foreground text-base mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" /> How to Approach PYQs for {chapter.chapter}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Start topic-wise:</strong> Solve PYQs grouped by topic ({chapter.topics.slice(0, 3).join(', ')}, etc.) rather than year-wise. This builds pattern recognition.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      {chapter.exam === 'JEE' 
                        ? <><strong className="text-foreground">JEE pattern:</strong> JEE Main tests direct application while JEE Advanced combines {chapter.chapter} with other chapters in multi-concept problems. Practice both styles separately.</>
                        : <><strong className="text-foreground">NEET pattern:</strong> NEET questions from {chapter.chapter} are predominantly NCERT-based MCQs with direct conceptual or numerical application. Focus on NCERT line-by-line reading.</>}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Review wrong answers:</strong> For every PYQ you get wrong, identify whether the gap is conceptual, computational, or a silly mistake. Your MindPeak mentor helps categorise and fix each weakness.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 p-6 sm:p-8 text-center">
                <FileText className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-display font-bold text-foreground text-base sm:text-lg mb-2">
                  Practice {chapter.chapter} PYQs with Your Mentor
                </h3>
                <p className="text-muted-foreground text-sm mb-5 max-w-xl mx-auto">
                  MindPeak students get curated PYQ sets for {chapter.chapter} with detailed solutions, difficulty tags, and mentor-guided review sessions. Every wrong answer becomes a learning opportunity.
                </p>
                <button
                  onClick={openDemoModal}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-display font-bold text-xs sm:text-sm uppercase tracking-[0.1em] shadow-gold-glow hover:scale-105 transition-transform"
                >
                  Get PYQ Practice Sets →
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ EXAM SCORING STRATEGY ═══════════ */}
        <section className="py-12 sm:py-16 bg-secondary/20 border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-2">
                <Trophy className="w-7 h-7 text-primary" />
                <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl">
                  Exam Scoring <span className="text-gradient-gold">Strategy</span>
                </h2>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-3xl">
                A strategic approach to {chapter.chapter} can significantly boost your {chapter.exam} score. Here's how to maximise marks from this chapter.
              </p>

              <div className="grid md:grid-cols-2 gap-5 mb-8">
                {/* Time Allocation */}
                <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Timer className="w-5 h-5 text-primary" />
                    <h3 className="font-display font-bold text-foreground text-sm sm:text-base">Time Allocation</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {chapter.exam === 'JEE'
                      ? `In JEE Main (3 hours, 90 questions), allocate 5-8 minutes for ${chapter.chapter} questions (${pyqPerYear} questions). For JEE Advanced, budget 8-12 minutes per ${chapter.chapter} question since they require deeper analysis.`
                      : `In NEET (3 hours 20 min, 200 questions), spend 1-2 minutes per ${chapter.chapter} MCQ. Don't exceed 2 minutes — mark for review and return if stuck.`}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Easy questions</span>
                      <span className="text-emerald-400 font-bold">{chapter.exam === 'JEE' ? '1-2 min' : '30-60 sec'}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Medium questions</span>
                      <span className="text-amber-400 font-bold">{chapter.exam === 'JEE' ? '3-5 min' : '1-2 min'}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Hard questions</span>
                      <span className="text-red-400 font-bold">{chapter.exam === 'JEE' ? '5-8 min' : '2-3 min (max)'}</span>
                    </div>
                  </div>
                </div>

                {/* Attempt Strategy */}
                <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-5 h-5 text-primary" />
                    <h3 className="font-display font-bold text-foreground text-sm sm:text-base">Attempt Strategy</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">First pass:</strong> Solve all easy and direct formula-based questions from {chapter.chapter}. These guarantee marks without risk.
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Second pass:</strong> Tackle moderate questions requiring multi-step calculations or concept application.
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Final pass:</strong> Only attempt complex questions if time permits {chapter.exam === 'JEE' ? 'and you\'re sure about the approach. Negative marking means guessing costs marks.' : 'since there\'s no negative marking for unattempted questions in NEET.'}.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Topics to Prioritise */}
                <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-5 h-5 text-primary" />
                    <h3 className="font-display font-bold text-foreground text-sm sm:text-base">High-Priority Topics</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    If you're short on time, focus on these topics first — they cover ~60% of questions from {chapter.chapter}:
                  </p>
                  <ul className="space-y-2">
                    {chapter.topics.slice(0, Math.min(5, Math.ceil(chapter.topics.length * 0.4))).map((t, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary text-[10px] font-bold">{i + 1}</span>
                        </span>
                        <span className="text-foreground font-medium">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Negative Marking Avoidance */}
                <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-5 h-5 text-amber-500" />
                    <h3 className="font-display font-bold text-foreground text-sm sm:text-base">Avoid Losing Marks</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <span className="text-red-500 text-xs font-bold mt-0.5">✗</span>
                      <p className="text-sm text-muted-foreground">
                        Don't guess on {chapter.exam === 'JEE' ? 'JEE Main numerical value questions — there\'s no scope for elimination. Either you can solve it or skip it.' : 'questions where you can\'t eliminate at least 2 options. NEET has -1 for wrong answers.'}
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-red-500 text-xs font-bold mt-0.5">✗</span>
                      <p className="text-sm text-muted-foreground">
                        Common calculation errors in {chapter.chapter}: {chapter.commonMistakes[0] ? chapter.commonMistakes[0].substring(0, 80) + '...' : 'unit conversion errors and sign mistakes'}. Double-check before marking.
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-500 text-xs font-bold mt-0.5">✓</span>
                      <p className="text-sm text-muted-foreground">
                        MindPeak's timed mock tests train you to recognise solvable vs. time-sink questions instantly, saving precious exam minutes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ STUDY STRATEGY ═══════════ */}
        <section className="py-12 sm:py-16 bg-secondary/20 border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-2">
                <BookMarked className="w-7 h-7 text-primary" />
                <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl">
                  How to Study <span className="text-gradient-gold">{chapter.chapter}</span>
                </h2>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-3xl">
                MindPeak&apos;s proven 4-phase approach for mastering any {chapter.exam} chapter. Your 1-on-1 mentor guides you through each phase.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    phase: 'Phase 1',
                    title: 'Learn Concepts',
                    desc: `Read ${chapter.exam === 'NEET' ? 'NCERT thoroughly' : 'theory from standard books'}. Understand every derivation and diagram in ${chapter.chapter}. Your mentor explains concepts through problem-solving, not passive lectures.`,
                    icon: BookOpen,
                    color: 'text-blue-400 bg-blue-500/10',
                  },
                  {
                    phase: 'Phase 2',
                    title: 'Practice Problems',
                    desc: `Solve ${chapter.difficulty === 'Hard' ? '200+' : chapter.difficulty === 'Moderate' ? '150+' : '100+'} problems across difficulty levels. Start easy, progress to ${chapter.exam}-level. MindPeak provides curated problem sets per topic.`,
                    icon: Target,
                    color: 'text-emerald-400 bg-emerald-500/10',
                  },
                  {
                    phase: 'Phase 3',
                    title: 'Solve PYQs',
                    desc: `Attack previous year questions from ${chapter.chapter} topic-wise. Identify patterns and favourite question types. Your mentor reviews every wrong answer with you.`,
                    icon: FileText,
                    color: 'text-amber-400 bg-amber-500/10',
                  },
                  {
                    phase: 'Phase 4',
                    title: 'Revise & Test',
                    desc: `Regular revision using formula sheets and flashcards. Weekly timed tests simulate exam pressure. Track accuracy improvements with MindPeak's analytics dashboard.`,
                    icon: Award,
                    color: 'text-purple-400 bg-purple-500/10',
                  },
                ].map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="rounded-xl border border-border bg-card p-5"
                  >
                    <div className={`w-10 h-10 rounded-lg ${p.color} flex items-center justify-center mb-3`}>
                      <p.icon className="w-5 h-5" />
                    </div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">{p.phase}</p>
                    <h3 className="font-display font-bold text-foreground text-sm mb-2">{p.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{p.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ 4-WEEK MASTERY PLAN ═══════════ */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-7 h-7 text-primary" />
                <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl">
                  4-Week <span className="text-gradient-gold">{chapter.chapter} Mastery Plan</span>
                </h2>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-3xl">
                Follow this week-by-week study plan to master {chapter.chapter} in 4 weeks. Your MindPeak mentor customises this plan based on your current level and exam timeline.
              </p>

              <div className="space-y-5">
                {[
                  {
                    week: 'Week 1',
                    title: 'Foundation & Core Concepts',
                    color: 'border-blue-500/30 bg-blue-500/5',
                    badge: 'text-blue-400 bg-blue-500/10',
                    tasks: [
                      `Read ${chapter.exam === 'NEET' ? 'NCERT' : 'theory from standard textbooks'} for: ${weekTopics[0].join(', ')}`,
                      `Make short notes — definitions, diagrams, key formulas for each topic`,
                      `Solve ${chapter.difficulty === 'Hard' ? '15-20' : '10-15'} easy-level problems per topic to test understanding`,
                      `Identify and revise prerequisite concepts from previous chapters`,
                      `End-of-week: Self-test on ${weekTopics[0].length} topics (untimed, open-notes)`,
                    ],
                    hours: chapter.difficulty === 'Hard' ? '12-15' : chapter.difficulty === 'Moderate' ? '8-10' : '6-8',
                  },
                  {
                    week: 'Week 2',
                    title: 'Deepening & Problem Practice',
                    color: 'border-emerald-500/30 bg-emerald-500/5',
                    badge: 'text-emerald-400 bg-emerald-500/10',
                    tasks: [
                      `Study: ${weekTopics[1].join(', ')}`,
                      `Solve ${chapter.difficulty === 'Hard' ? '25-30' : '15-20'} medium-difficulty problems per topic`,
                      `Learn all key formulas from flashcards above — practice deriving them`,
                      `Identify common mistakes (see list above) and consciously avoid them`,
                      `End-of-week: Timed topic-wise test (${chapter.exam === 'JEE' ? '2 min/question' : '1.5 min/question'})`,
                    ],
                    hours: chapter.difficulty === 'Hard' ? '14-18' : chapter.difficulty === 'Moderate' ? '10-13' : '7-9',
                  },
                  {
                    week: 'Week 3',
                    title: 'PYQs & Advanced Application',
                    color: 'border-amber-500/30 bg-amber-500/5',
                    badge: 'text-amber-400 bg-amber-500/10',
                    tasks: [
                      `Complete remaining topics: ${weekTopics[2].join(', ')}`,
                      `Solve ALL available PYQs for ${chapter.chapter} — topic-wise first, then mixed`,
                      `Attempt ${chapter.exam === 'JEE' ? 'JEE Advanced level multi-concept problems and paragraph-based questions' : 'NCERT Exemplar and assertion-reason questions'}`,
                      `Analyse every wrong answer: conceptual gap, calculation error, or silly mistake?`,
                      `End-of-week: Full chapter test under exam conditions (timed, no reference)`,
                    ],
                    hours: chapter.difficulty === 'Hard' ? '12-15' : chapter.difficulty === 'Moderate' ? '8-10' : '6-8',
                  },
                  {
                    week: 'Week 4',
                    title: 'Revision & Exam Readiness',
                    color: 'border-purple-500/30 bg-purple-500/5',
                    badge: 'text-purple-400 bg-purple-500/10',
                    tasks: [
                      `Revise ${weekTopics[3].length > 0 ? weekTopics[3].join(', ') + ' and ' : ''}all weak topics identified from Week 3 tests`,
                      `Formula sheet revision — write all ${chapter.keyFormulas.length} formulas from memory`,
                      `Solve 2-3 full-length mock tests with ${chapter.chapter} questions mixed with other chapters`,
                      `Speed drills: solve ${chapter.exam === 'JEE' ? '10' : '15'} questions in ${chapter.exam === 'JEE' ? '20' : '15'} minutes`,
                      `End-of-week: Final self-assessment — aim for 90%+ accuracy on chapter test`,
                    ],
                    hours: chapter.difficulty === 'Hard' ? '10-12' : chapter.difficulty === 'Moderate' ? '6-8' : '4-6',
                  },
                ].map((w, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`rounded-xl border ${w.color} p-5 sm:p-6`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${w.badge}`}>
                        <Calendar className="w-3 h-3" /> {w.week}
                      </span>
                      <h3 className="font-display font-bold text-foreground text-sm sm:text-base">{w.title}</h3>
                      <span className="text-xs text-muted-foreground ml-auto">{w.hours} hours</span>
                    </div>
                    <ul className="space-y-2">
                      {w.tasks.map((task, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <CircleDot className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground leading-relaxed">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 p-5 sm:p-6 text-center">
                <p className="text-muted-foreground text-sm mb-3">
                  This is a general plan. MindPeak mentors create a <strong className="text-foreground">personalised version</strong> based on your pace, strengths, and exam date.
                </p>
                <button
                  onClick={openDemoModal}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display font-bold text-xs uppercase tracking-[0.1em] shadow-gold-glow hover:scale-105 transition-transform"
                >
                  Get Your Custom Study Plan →
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ RECOMMENDED RESOURCES ═══════════ */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="w-7 h-7 text-primary" />
                <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl">
                  Recommended <span className="text-gradient-gold">Books & Resources</span>
                </h2>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-3xl">
                The best books for {chapter.chapter} preparation, curated by MindPeak&apos;s {chapter.exam === 'JEE' ? 'IIT alumni' : 'AIIMS alumni'} mentors.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {chapter.exam === 'JEE' && chapter.subject === 'Physics' && [
                  { book: 'HC Verma', level: 'Foundation', desc: 'Build conceptual understanding with solved examples' },
                  { book: 'DC Pandey', level: 'Practice', desc: 'Volume-based practice for exam readiness' },
                  { book: 'Irodov (selected)', level: 'Advanced', desc: 'For JEE Advanced level problem-solving' },
                ].map((r, i) => (
                  <div key={i} className="rounded-xl border border-border bg-card p-5">
                    <p className="text-[10px] text-primary uppercase tracking-wider font-semibold mb-1">{r.level}</p>
                    <h3 className="font-display font-bold text-foreground text-sm mb-1">{r.book}</h3>
                    <p className="text-muted-foreground text-xs">{r.desc}</p>
                  </div>
                ))}
                {chapter.exam === 'JEE' && chapter.subject === 'Chemistry' && [
                  { book: 'NCERT + Exemplar', level: 'Foundation', desc: 'Essential base for all three branches' },
                  { book: 'MS Chauhan / Himanshu Pandey', level: 'Organic', desc: 'Reaction mechanisms and conversions' },
                  { book: 'Narendra Awasthi / P Bahadur', level: 'Physical', desc: 'Numerical practice and concept clarity' },
                ].map((r, i) => (
                  <div key={i} className="rounded-xl border border-border bg-card p-5">
                    <p className="text-[10px] text-primary uppercase tracking-wider font-semibold mb-1">{r.level}</p>
                    <h3 className="font-display font-bold text-foreground text-sm mb-1">{r.book}</h3>
                    <p className="text-muted-foreground text-xs">{r.desc}</p>
                  </div>
                ))}
                {chapter.exam === 'JEE' && chapter.subject === 'Mathematics' && [
                  { book: 'RD Sharma / NCERT', level: 'Foundation', desc: 'Build fundamentals before competitive-level' },
                  { book: 'Cengage Series', level: 'Practice', desc: 'Comprehensive chapter-wise problem sets' },
                  { book: 'Vikas Gupta / Arihant', level: 'Advanced', desc: 'For JEE Advanced level mastery' },
                ].map((r, i) => (
                  <div key={i} className="rounded-xl border border-border bg-card p-5">
                    <p className="text-[10px] text-primary uppercase tracking-wider font-semibold mb-1">{r.level}</p>
                    <h3 className="font-display font-bold text-foreground text-sm mb-1">{r.book}</h3>
                    <p className="text-muted-foreground text-xs">{r.desc}</p>
                  </div>
                ))}
                {chapter.exam === 'NEET' && chapter.subject === 'Biology' && [
                  { book: 'NCERT (line-by-line)', level: 'Primary', desc: '90% of NEET Biology comes from NCERT text' },
                  { book: 'NCERT Exemplar', level: 'Practice', desc: 'Application-based MCQs beyond textbook' },
                  { book: 'MTG / Trueman\'s', level: 'Supplement', desc: 'Extra MCQ practice and assertion-reason' },
                ].map((r, i) => (
                  <div key={i} className="rounded-xl border border-border bg-card p-5">
                    <p className="text-[10px] text-primary uppercase tracking-wider font-semibold mb-1">{r.level}</p>
                    <h3 className="font-display font-bold text-foreground text-sm mb-1">{r.book}</h3>
                    <p className="text-muted-foreground text-xs">{r.desc}</p>
                  </div>
                ))}
                {chapter.exam === 'NEET' && chapter.subject === 'Physics' && [
                  { book: 'NCERT + Exemplar', level: 'Primary', desc: 'NCERT covers 70% of NEET Physics directly' },
                  { book: 'DC Pandey (NEET edition)', level: 'Practice', desc: 'Targeted numerical practice' },
                  { book: '15-year PYQ book', level: 'Essential', desc: 'Pattern recognition and time management' },
                ].map((r, i) => (
                  <div key={i} className="rounded-xl border border-border bg-card p-5">
                    <p className="text-[10px] text-primary uppercase tracking-wider font-semibold mb-1">{r.level}</p>
                    <h3 className="font-display font-bold text-foreground text-sm mb-1">{r.book}</h3>
                    <p className="text-muted-foreground text-xs">{r.desc}</p>
                  </div>
                ))}
                {chapter.exam === 'NEET' && chapter.subject === 'Chemistry' && [
                  { book: 'NCERT (complete)', level: 'Primary', desc: 'NCERT is king — especially for Inorganic' },
                  { book: 'MS Chauhan / VK Jaiswal', level: 'Practice', desc: 'Organic mechanisms and Inorganic depth' },
                  { book: 'Narendra Awasthi', level: 'Physical', desc: 'Numerical practice for Physical Chemistry' },
                ].map((r, i) => (
                  <div key={i} className="rounded-xl border border-border bg-card p-5">
                    <p className="text-[10px] text-primary uppercase tracking-wider font-semibold mb-1">{r.level}</p>
                    <h3 className="font-display font-bold text-foreground text-sm mb-1">{r.book}</h3>
                    <p className="text-muted-foreground text-xs">{r.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ SELF-ASSESSMENT CHECKLIST ═══════════ */}
        <section className="py-12 sm:py-16 bg-secondary/20 border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-2">
                <ListChecks className="w-7 h-7 text-primary" />
                <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl">
                  Self-Assessment <span className="text-gradient-gold">Checklist</span>
                </h2>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-3xl">
                Use this checklist to evaluate your readiness for {chapter.chapter} in {examFull}. If you can confidently check every item, you're exam-ready.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {/* Conceptual Mastery */}
                <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
                  <h3 className="font-display font-bold text-foreground text-sm sm:text-base mb-4 flex items-center gap-2">
                    <Brain className="w-5 h-5 text-primary" /> Conceptual Mastery
                  </h3>
                  <div className="space-y-3">
                    {chapter.topics.slice(0, 8).map((topic, i) => {
                      const key = `concept-${i}`;
                      return (
                        <label key={i} onClick={() => toggleCheck(key)} className="flex items-start gap-3 cursor-pointer group">
                          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                            checkedItems[key] ? 'border-primary bg-primary' : 'border-border group-hover:border-primary/50'
                          }`}>
                            {checkedItems[key] && <CheckCircle className="w-3.5 h-3.5 text-primary-foreground" />}
                          </div>
                          <span className={`text-sm transition-colors ${
                            checkedItems[key] ? 'text-foreground line-through opacity-70' : 'text-muted-foreground group-hover:text-foreground'
                          }`}>
                            I can explain {topic} without looking at notes
                          </span>
                        </label>
                      );
                    })}
                    {chapter.topics.length > 8 && (
                      <p className="text-xs text-muted-foreground ml-8">+ {chapter.topics.length - 8} more topics to check</p>
                    )}
                  </div>
                </div>

                {/* Problem-Solving Skills */}
                <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
                  <h3 className="font-display font-bold text-foreground text-sm sm:text-base mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" /> Problem-Solving Skills
                  </h3>
                  <div className="space-y-3">
                    {[
                      `I can write ${chapter.keyFormulas.length > 0 ? 'all ' + chapter.keyFormulas.length + ' key formulas' : 'all key formulas'} from memory`,
                      `I've solved ${problemCount} practice problems across difficulty levels`,
                      `I can solve easy ${chapter.chapter} questions in under ${chapter.exam === 'JEE' ? '2 minutes' : '1 minute'}`,
                      `I know the common mistakes and consciously avoid them`,
                      `I can identify question type (conceptual/numerical/application) instantly`,
                      `I've solved PYQs from the last 5+ years for this chapter`,
                      `I score 80%+ on timed chapter tests consistently`,
                      `I can explain my approach to any ${chapter.chapter} problem step-by-step`,
                    ].map((item, i) => {
                      const key = `skill-${i}`;
                      return (
                        <label key={i} onClick={() => toggleCheck(key)} className="flex items-start gap-3 cursor-pointer group">
                          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                            checkedItems[key] ? 'border-primary bg-primary' : 'border-border group-hover:border-primary/50'
                          }`}>
                            {checkedItems[key] && <CheckCircle className="w-3.5 h-3.5 text-primary-foreground" />}
                          </div>
                          <span className={`text-sm transition-colors ${
                            checkedItems[key] ? 'text-foreground line-through opacity-70' : 'text-muted-foreground group-hover:text-foreground'
                          }`}>{item}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-5 text-center">
                <p className="text-muted-foreground text-sm">
                  <strong className="text-foreground">Can't check all boxes?</strong> That's exactly what MindPeak's 1-on-1 coaching fixes. Your mentor identifies gaps and creates targeted practice sessions until every box is checked.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ WHY MINDPEAK CTA ═══════════ */}
        <section className="py-12 sm:py-16 bg-primary/10 border-y border-primary/20">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl mb-4">
                Master {chapter.chapter} with <span className="text-gradient-gold">1-on-1 Expert Coaching</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base mb-6 max-w-2xl mx-auto">
                Your dedicated {chapter.subject} mentor — from our {chapter.exam === 'JEE' ? 'IIT' : 'AIIMS'} alumni network — creates a personalised study plan for {chapter.chapter}. 
                Daily sessions, instant doubt resolution, and adaptive practice ensure you score maximum marks.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8">
                {['Dedicated 1-on-1 mentor', 'Adaptive curriculum', 'PYQ-based practice', 'Daily live sessions', '95% success rate'].map((item) => (
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

        {/* ═══════════ WHAT TOPPERS SAY ═══════════ */}
        <section className="py-12 sm:py-16 bg-secondary/20 border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-7 h-7 text-primary" />
                <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl">
                  What Toppers Say About <span className="text-gradient-gold">{chapter.chapter}</span>
                </h2>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-3xl">
                Strategies and advice from {chapter.exam === 'JEE' ? 'IIT' : 'AIIMS/NEET'} toppers who aced {chapter.chapter}.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {[
                  {
                    quote: chapter.exam === 'JEE'
                      ? `${chapter.chapter} is all about understanding, not memorising. I used to derive every formula from basics — it takes longer initially but saves time in the exam because you never forget a derived formula.`
                      : `For NEET, I read the NCERT chapter on ${chapter.chapter} at least 5 times. Each reading revealed something new. By the 4th reading, I could predict what type of question would come from each paragraph.`,
                    name: chapter.exam === 'JEE' ? 'JEE Advanced Topper' : 'NEET Topper',
                    rank: chapter.exam === 'JEE' ? 'AIR under 500' : 'AIR under 1000',
                    tip: 'Understand, don\'t memorise',
                  },
                  {
                    quote: `The biggest mistake I see students make in ${chapter.chapter} is jumping to problems before understanding theory. I spent 40% of my time on concepts and 60% on practice. The concept time paid off — I could solve most problems in under 2 minutes.`,
                    name: chapter.exam === 'JEE' ? 'IIT Bombay Student' : 'AIIMS Delhi Student',
                    rank: chapter.exam === 'JEE' ? 'JEE Score: 99.8%ile' : 'NEET Score: 690+',
                    tip: 'Theory before practice',
                  },
                  {
                    quote: chapter.difficulty === 'Hard'
                      ? `${chapter.chapter} scared me initially. My MindPeak mentor broke it into small chunks and we tackled one topic per session. Within 3 weeks, it went from my weakest to my strongest chapter.`
                      : chapter.difficulty === 'Moderate'
                      ? `${chapter.chapter} is a goldmine for marks. I made sure I never lost a single mark from this chapter. Regular revision and PYQ practice were my secret weapons.`
                      : `Don\'t underestimate ${chapter.chapter} just because it\'s rated easy. Examiners can ask tricky questions. I practiced ${chapter.exam === 'JEE' ? 'JEE Advanced level' : 'assertion-reason'} questions to be fully prepared.`,
                    name: 'MindPeak Student',
                    rank: `${chapter.exam} ${chapter.exam === 'JEE' ? '2024' : '2024'} batch`,
                    tip: chapter.difficulty === 'Hard' ? 'Break it down' : 'Never underestimate',
                  },
                  {
                    quote: `PYQs from ${chapter.chapter} were my revision tool. I solved 10+ years of papers and noticed that ${chapter.exam === 'JEE' ? 'examiners love combining this chapter with ' + (relatedChapters.length > 0 ? relatedChapters[0].chapter : 'other chapters') : 'the same NCERT concepts are tested with different wording every year'}. This pattern recognition gave me an edge.`,
                    name: chapter.exam === 'JEE' ? 'JEE 2024 Topper' : 'NEET 2024 Topper',
                    rank: 'AIR under 200',
                    tip: 'PYQs are gold',
                  },
                ].map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="rounded-xl border border-border bg-card p-5 sm:p-6"
                  >
                    <MessageCircle className="w-6 h-6 text-primary/30 mb-3" />
                    <p className="text-foreground text-sm leading-relaxed italic mb-4">"{t.quote}"</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-foreground text-xs font-bold">{t.name}</p>
                        <p className="text-muted-foreground text-[10px]">{t.rank}</p>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold">{t.tip}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ QUICK REVISION NOTES ═══════════ */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="w-7 h-7 text-primary" />
                <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl">
                  Quick Revision <span className="text-gradient-gold">Notes</span>
                </h2>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-3xl">
                Condensed revision notes for {chapter.chapter}. Use these for last-minute revision before exams or weekly review sessions.
              </p>

              <div className="space-y-5">
                {/* Formula Quick Reference */}
                <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
                  <h3 className="font-display font-bold text-foreground text-sm sm:text-base mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" /> All Formulas at a Glance
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {chapter.keyFormulas.map((formula, i) => (
                      <div key={i} className="flex items-start gap-2 bg-secondary/30 rounded-lg p-3">
                        <span className="text-primary text-xs font-bold mt-0.5">#{i + 1}</span>
                        <p className="font-mono text-sm text-foreground break-words">{formula}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Topics Quick Reference */}
                <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
                  <h3 className="font-display font-bold text-foreground text-sm sm:text-base mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" /> Topics Checklist
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {chapter.topics.map((topic, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 rounded-full bg-primary/40 flex-shrink-0" />
                        <span className="text-muted-foreground truncate">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mistakes Quick Reference */}
                <div className="rounded-xl border border-amber-500/20 bg-card p-5 sm:p-6">
                  <h3 className="font-display font-bold text-foreground text-sm sm:text-base mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-500" /> Mistakes to Remember
                  </h3>
                  <div className="space-y-2">
                    {chapter.commonMistakes.map((mistake, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-amber-500 text-xs font-bold mt-0.5">⚠</span>
                        <p className="text-sm text-muted-foreground">{mistake}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Stats */}
                <div className="grid sm:grid-cols-4 gap-3">
                  <div className="rounded-xl border border-border bg-card p-4 text-center">
                    <p className="text-xl font-black text-primary mb-1">{chapter.weightage}</p>
                    <p className="text-[10px] text-muted-foreground uppercase">Weightage</p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-4 text-center">
                    <p className="text-xl font-black text-primary mb-1">{chapter.topics.length}</p>
                    <p className="text-[10px] text-muted-foreground uppercase">Topics</p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-4 text-center">
                    <p className="text-xl font-black text-primary mb-1">{chapter.keyFormulas.length}</p>
                    <p className="text-[10px] text-muted-foreground uppercase">Key Formulas</p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-4 text-center">
                    <p className="text-xl font-black text-primary mb-1">{studyHours}h</p>
                    <p className="text-[10px] text-muted-foreground uppercase">Study Hours</p>
                  </div>
                </div>

                {/* Night Before Tips */}
                <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-5 sm:p-6">
                  <h3 className="font-display font-bold text-foreground text-sm sm:text-base mb-3 flex items-center gap-2">
                    <Flame className="w-5 h-5 text-primary" /> Night Before Exam — {chapter.chapter} Revision
                  </h3>
                  <div className="space-y-2">
                    {[
                      `Skim through all ${chapter.keyFormulas.length} formulas — don't try to learn new ones, just refresh existing memory`,
                      `Review the ${chapter.commonMistakes.length} common mistakes listed above — being aware prevents careless errors`,
                      `Glance at 2-3 PYQ solutions you found tricky — pattern recognition helps in the exam`,
                      `Go through your own notes/highlights from ${chapter.chapter} — your personal notes stick better than textbooks`,
                      `Don't study new topics from ${chapter.chapter} — focus only on revision and confidence building`,
                      `Get 7-8 hours of sleep — a well-rested brain solves ${chapter.chapter} problems faster than an exhausted one`,
                    ].map((tip, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Star className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground leading-relaxed">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ FAQs ═══════════ */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 justify-center mb-8">
                <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl text-center">
                  FAQs — {chapter.chapter} for {chapter.exam}
                </h2>
              </div>
              <div className="space-y-3">
                {allFaqs.map((faq, i) => (
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

        {/* ═══════════ RELATED CHAPTERS ═══════════ */}
        <section className="py-12 sm:py-16 bg-secondary/20 border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl text-center mb-2">
                Related {chapter.exam} {chapter.subject} <span className="text-gradient-gold">Chapters</span>
              </h2>
              <p className="text-muted-foreground text-sm text-center mb-8 max-w-2xl mx-auto">
                Continue your {chapter.exam} {chapter.subject} preparation with these related chapters.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {relatedChapters.map((c) => {
                  const RelIcon = c.icon;
                  return (
                    <Link
                      key={c.slug}
                      to={`/${c.slug}`}
                      className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/40 hover:shadow-md transition-all group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <RelIcon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-display font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{c.chapter}</h3>
                        <p className="text-xs text-muted-foreground mt-1">{c.weightage} · {c.difficulty}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {crossSubjectChapters.length > 0 && (
                <>
                  <h3 className="font-display font-semibold text-foreground text-base text-center mb-4">
                    Explore Other {chapter.exam} Subjects
                  </h3>
                  <div className="flex flex-wrap justify-center gap-3">
                    {crossSubjectChapters.map((c) => {
                      const CIcon = c.icon;
                      return (
                        <Link
                          key={c.slug}
                          to={`/${c.slug}`}
                          className="flex items-center gap-2 px-4 py-2.5 bg-card rounded-lg border border-border hover:border-primary/30 transition-all text-sm"
                        >
                          <CIcon className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">{c.subject}:</span>
                          <span className="font-medium text-foreground">{c.chapter}</span>
                        </Link>
                      );
                    })}
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </section>

        <PageFooter />
      </main>
    </>
  );
};

export default ChapterPage;
