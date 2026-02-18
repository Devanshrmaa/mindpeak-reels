import { useEffect, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { PageFooter } from '@/components/PageFooter';
import { useDemoModal } from '@/components/DemoBookingModal';
import {
  CheckCircle, ArrowRight, Phone, AlertTriangle,
  BookOpen, ChevronDown, GraduationCap, BarChart3, Target,
} from 'lucide-react';
import logo from '@/assets/logo.jpeg';
import { getChapterBySlug, chapters, CHAPTER_SLUGS } from '@/data/chapterData';
import type { ChapterData } from '@/data/chapterData';

export { CHAPTER_SLUGS };

/* ═══════════════════════════════════════════════════════════
   ChapterPage — programmatic chapter-wise SEO page
   Generates a rich page for every JEE/NEET chapter
   ═══════════════════════════════════════════════════════════ */

const DifficultyBadge = ({ difficulty }: { difficulty: string }) => {
  const colors = {
    Easy: 'bg-green-100 text-green-800',
    Moderate: 'bg-yellow-100 text-yellow-800',
    Hard: 'bg-red-100 text-red-800',
  };
  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors[difficulty as keyof typeof colors] || 'bg-gray-100 text-gray-800'}`}>
      {difficulty}
    </span>
  );
};

const ChapterPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { openDemoModal } = useDemoModal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  // Build FAQ schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: chapter.faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  // Build Article schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: pageTitle,
    description: pageDesc,
    author: { '@type': 'Organization', name: 'MindPeak Institute' },
    publisher: {
      '@type': 'Organization',
      name: 'MindPeak Institute',
      logo: { '@type': 'ImageObject', url: 'https://mindpeak.in/logo.jpeg' },
    },
    datePublished: '2025-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  };

  // Related chapters same subject
  const relatedChapters = chapters
    .filter(c => c.exam === chapter.exam && c.subject === chapter.subject && c.slug !== chapter.slug)
    .slice(0, 4);

  // Related chapters same exam different subject
  const crossSubjectChapters = chapters
    .filter(c => c.exam === chapter.exam && c.subject !== chapter.subject)
    .slice(0, 3);

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDesc}
        url={`https://mindpeak.in/${chapter.slug}`}
        schema={[faqSchema, articleSchema]}
      />
      <Navbar />
      <main className="min-h-screen bg-background pt-20 sm:pt-24">
        {/* ─── Hero Section ─────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-gold/5 py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              {/* Breadcrumb */}
              <nav className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
                <Link to="/" className="hover:text-primary">Home</Link>
                <span>/</span>
                <Link to={chapter.exam === 'JEE' ? '/jee-coaching' : '/neet-coaching'} className="hover:text-primary">
                  {chapter.exam} Coaching
                </Link>
                <span>/</span>
                <span className="text-foreground font-medium">{chapter.subject} — {chapter.chapter}</span>
              </nav>

              <div className="flex items-center justify-center gap-3 mb-4">
                <Icon className="w-10 h-10 text-primary" />
                <span className="text-primary font-semibold text-lg">{chapter.exam} {chapter.subject}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                {chapter.chapter} for {chapter.exam}
                <span className="text-primary"> — Complete Preparation Guide</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                {chapter.description}
              </p>

              {/* Stats badges */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border">
                  <BarChart3 className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Weightage: {chapter.weightage}</span>
                </div>
                <DifficultyBadge difficulty={chapter.difficulty} />
                <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border">
                  <Target className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{chapter.pyqCount}+ PYQs (last 10 years)</span>
                </div>
              </div>

              <button
                onClick={openDemoModal}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Start Free {chapter.exam} Trial
              </button>
            </motion.div>
          </div>
        </section>

        {/* ─── Topics Covered ────────────────────────────────── */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
              Topics Covered in {chapter.chapter}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {chapter.topics.map((topic, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card border hover:border-primary/30 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{topic}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Key Formulas / Facts ──────────────────────────── */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
              Important Formulas & Concepts
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              Master these key formulas for {chapter.chapter}. Our 1-on-1 mentors help you understand the <em>derivation and application</em> — not just memorize them.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {chapter.keyFormulas.map((formula, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 bg-card rounded-lg border font-mono text-sm sm:text-base"
                >
                  <BookOpen className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{formula}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Common Mistakes ───────────────────────────────── */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
              Common Mistakes to Avoid in {chapter.chapter}
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              Our mentors have identified these as the top mistakes {chapter.exam} aspirants make. Personalized coaching helps you avoid every one of them.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {chapter.commonMistakes.map((mistake, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-5 bg-red-50 dark:bg-red-950/20 rounded-xl border border-red-200 dark:border-red-900/30"
                >
                  <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{mistake}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Why MindPeak CTA ──────────────────────────────── */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Master {chapter.chapter} with 1-on-1 Expert Coaching
            </h2>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Your dedicated {chapter.subject} mentor — from our IIT/AIIMS alumni network — will create a personalised study plan for {chapter.chapter}. Daily sessions, instant doubt resolution, and adaptive practice ensure you score maximum marks.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
              {['Dedicated 1-on-1 mentor', 'Adaptive curriculum', 'PYQ-based practice', '95% success rate'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-white">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            <button
              onClick={openDemoModal}
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Book Free Demo Class <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>

        {/* ─── FAQs ──────────────────────────────────────────── */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
              FAQs — {chapter.chapter} for {chapter.exam}
            </h2>
            <div className="space-y-3">
              {chapter.faqs.map((faq, i) => (
                <div key={i} className="border rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex items-center justify-between w-full text-left p-5 bg-card hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-semibold text-foreground pr-4">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-muted-foreground leading-relaxed">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Related Chapters (Internal Linking) ───────────── */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
              Related {chapter.exam} {chapter.subject} Chapters
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {relatedChapters.map((c) => {
                const RelIcon = c.icon;
                return (
                  <Link
                    key={c.slug}
                    to={`/${c.slug}`}
                    className="flex items-start gap-3 p-4 bg-card rounded-xl border hover:border-primary/40 hover:shadow-md transition-all group"
                  >
                    <RelIcon className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{c.chapter}</h3>
                      <p className="text-xs text-muted-foreground mt-1">Weightage: {c.weightage} · {c.difficulty}</p>
                    </div>
                  </Link>
                );
              })}
            </div>

            {crossSubjectChapters.length > 0 && (
              <>
                <h3 className="text-lg font-semibold text-center mb-6 text-muted-foreground">
                  Other {chapter.exam} Subjects
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                  {crossSubjectChapters.map((c) => {
                    const CIcon = c.icon;
                    return (
                      <Link
                        key={c.slug}
                        to={`/${c.slug}`}
                        className="flex items-center gap-3 p-3 bg-card rounded-lg border hover:border-primary/30 transition-all"
                      >
                        <CIcon className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium">{c.subject}: {c.chapter}</span>
                      </Link>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </section>

        <PageFooter />
      </main>
    </>
  );
};

export default ChapterPage;
