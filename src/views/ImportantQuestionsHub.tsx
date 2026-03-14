"use client";

import { usePathname } from 'next/navigation';
import { Navigate } from '@/components/Navigate';
import { Link } from '@/components/RouterLink';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Star, BookOpen, Target } from 'lucide-react';
import { Navbar } from '@/components/sections/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { useDemoModal } from '@/components/DemoBookingModal';
import { PageFooter } from '@/components/PageFooter';
import { buildFAQSchemaFromQA } from '@/components/PageFAQ';
import { FreshnessBadge } from '@/components/FreshnessBadge';
import { getLastUpdated, getCurrentExamYear } from '@/lib/contentFreshness';
import { getExamEntities } from '@/lib/seoEntities';
import { subjectBanks } from '@/data/practice';
import { neetSubjectBanks } from '@/data/neet-practice';
import { CURRENT_EXAM_YEAR } from '@/lib/examYears';

const VALID_SLUGS: Record<string, { exam: 'JEE' | 'NEET'; subject: string; icon: string }> = {
  'jee-physics-important-questions': { exam: 'JEE', subject: 'Physics', icon: '⚛️' },
  'jee-chemistry-important-questions': { exam: 'JEE', subject: 'Chemistry', icon: '🧪' },
  'jee-mathematics-important-questions': { exam: 'JEE', subject: 'Mathematics', icon: '📐' },
  'neet-physics-important-questions': { exam: 'NEET', subject: 'Physics', icon: '⚛️' },
  'neet-chemistry-important-questions': { exam: 'NEET', subject: 'Chemistry', icon: '🧪' },
  'neet-biology-important-questions': { exam: 'NEET', subject: 'Biology', icon: '🧬' },
};

export const IMPORTANT_Q_SLUGS = Object.keys(VALID_SLUGS);

const ImportantQuestionsHub = () => {
  const pathname = usePathname();
  const slug = pathname.replace(/^\//, '');
  const { openDemoModal } = useDemoModal();

  const config = VALID_SLUGS[slug];
  if (!config) return <Navigate to="/" replace />;

  const { exam, subject, icon } = config;
  const isJEE = exam === 'JEE';
  const banks = isJEE ? subjectBanks : neetSubjectBanks;
  const subjectSlug = subject.toLowerCase();
  const bank = banks.find(b => b.slug === subjectSlug || b.subject === subject);

  const lastUpdated = getLastUpdated(slug);
  const title = `${exam} ${subject} Important Questions ${CURRENT_EXAM_YEAR} — Chapter-wise Most Asked MCQs`;
  const description = `${exam} ${subject} important questions ${CURRENT_EXAM_YEAR}: chapter-wise curated MCQs most frequently asked in previous years. Free practice with solutions.`;

  const faqs = [
    { q: `How many important questions are there for ${exam} ${subject}?`, a: `We have curated 500+ important ${subject} questions across all chapters, organized by difficulty level (Easy, Medium, Hard). These cover the most frequently tested concepts in ${exam}.` },
    { q: `Are these questions enough for ${exam} ${CURRENT_EXAM_YEAR}?`, a: `These important questions cover ~80% of the concepts tested in ${exam}. For comprehensive preparation, combine these with PYQs and full-length mock tests.` },
    { q: `How to use these important questions for revision?`, a: `Start with Easy questions to build confidence, then move to Medium and Hard. Track your accuracy for each chapter — chapters with <70% accuracy need more revision.` },
  ];

  const jsonLd: object[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description,
      author: { '@type': 'Organization', name: 'MindPeak Institute' },
      publisher: { '@type': 'Organization', name: 'MindPeak Institute', logo: { '@type': 'ImageObject', url: 'https://mindpeakinstitute.com/images/logo.jpeg' } },
      datePublished: '2025-01-01',
      dateModified: lastUpdated,
      about: getExamEntities(exam),
    },
    buildFAQSchemaFromQA(faqs),
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mindpeakinstitute.com' },
        { '@type': 'ListItem', position: 2, name: `${exam} Practice`, item: `https://mindpeakinstitute.com/${exam.toLowerCase()}-practice` },
        { '@type': 'ListItem', position: 3, name: `${subject} Important Questions`, item: `https://mindpeakinstitute.com/${slug}` },
      ],
    },
  ];

  return (
    <>
      <SEOHead title={title} description={description} jsonLd={jsonLd} />
      <Navbar />
      <main className="bg-background pt-20">
        <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-6 py-4">
          <ol className="flex items-center gap-2 text-xs text-muted-foreground flex-wrap">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <span>/</span>
            <li><Link to={`/${exam.toLowerCase()}-practice`} className="hover:text-primary transition-colors">{exam} Practice</Link></li>
            <span>/</span>
            <li className="text-foreground">{subject} Important Questions</li>
          </ol>
        </nav>

        <section className="max-w-4xl mx-auto px-6 pb-12">
          <div>
            <FreshnessBadge lastUpdated={lastUpdated} verifiedFor={getCurrentExamYear()} />
            <h1 className="font-display font-black text-foreground mb-6" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>
              {icon} {exam} {subject} <span className="text-gradient-gold">Important Questions</span> {CURRENT_EXAM_YEAR}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-8">
              Chapter-wise collection of the most important {subject} questions for {exam} {CURRENT_EXAM_YEAR}. Curated from 10+ years of previous year papers and expert analysis.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={openDemoModal} className="px-8 py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-[0.15em] shadow-gold-glow hover:scale-105 transition-transform">
                Book Free Demo
              </button>
              <Link to={`/${exam.toLowerCase()}-pyq`} className="px-8 py-4 border border-border text-foreground font-display text-sm uppercase tracking-[0.15em] hover:border-primary hover:text-primary transition-colors flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> {exam} PYQs
              </Link>
            </div>
          </div>
        </section>

        <div className="section-divider max-w-4xl mx-auto" />

        {/* Chapter-wise Questions */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl mb-8">
            Chapter-wise Important Questions
          </h2>
          {bank ? (
            <div className="space-y-4">
              {bank.chapters.map((ch, ci) => {
                const totalQ = ch.topics.reduce((sum, t) => sum + t.easy.length + t.medium.length + t.hard.length, 0);
                const firstTopic = ch.topics[0];
                if (!firstTopic) return null;
                return (
                  <motion.div
                    key={ci}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: Math.min(ci * 0.03, 0.3) }}
                    className="rounded-xl border border-border bg-card/30 p-5 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-display font-semibold text-foreground">{ch.name}</h3>
                      <span className="text-xs text-muted-foreground">{totalQ} questions</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {(['easy', 'medium', 'hard'] as const).map(diff => {
                        const colors = diff === 'easy' ? 'text-green-400 bg-green-500/10 border-green-500/30 hover:bg-green-500/20' : diff === 'medium' ? 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30 hover:bg-yellow-500/20' : 'text-red-400 bg-red-500/10 border-red-500/30 hover:bg-red-500/20';
                        return (
                          <Link
                            key={diff}
                            to={`/${exam.toLowerCase()}-${bank.slug}-${ch.slug}-${firstTopic.slug}-${diff}-q1`}
                            className={`px-4 py-2 rounded-lg border text-xs font-semibold transition-all ${colors}`}
                          >
                            {diff === 'easy' ? '⚡' : diff === 'medium' ? '🎯' : '🏆'} {diff.charAt(0).toUpperCase() + diff.slice(1)}
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <p className="text-muted-foreground">Questions coming soon for {subject}.</p>
          )}
        </section>

        {/* CTA */}
        <section className="bg-primary/10 border-y border-primary/20 py-12 px-6 text-center">
          <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-4">
            Struggling with <span className="text-gradient-gold">{subject}</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a dedicated 1-on-1 mentor to help you master every chapter. Book your free demo today.
          </p>
          <button onClick={openDemoModal} className="px-12 py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-[0.15em] shadow-gold-glow hover:scale-105 transition-transform">
            Book Free Demo
          </button>
        </section>

        {/* Related */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          <h3 className="font-display font-bold text-foreground text-xl mb-6">More Important Questions</h3>
          <div className="flex flex-wrap gap-3">
            {IMPORTANT_Q_SLUGS.filter(s => s !== slug).map(s => {
              const c = VALID_SLUGS[s];
              return (
                <Link key={s} to={`/${s}`} className="px-5 py-3 rounded-lg bg-card border border-border text-foreground text-sm hover:border-primary/40 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-primary" /> {c.exam} {c.subject}
                </Link>
              );
            })}
          </div>
        </section>

        <PageFooter extra={`${exam} ${subject} important questions.`} />
      </main>
    </>
  );
};

export default ImportantQuestionsHub;
