"use client";

import { usePathname } from 'next/navigation';
import { Navigate } from '@/components/Navigate';
import { Link } from '@/components/RouterLink';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Phone, CheckCircle, BookOpen, AlertTriangle, Lightbulb, FileText } from 'lucide-react';
import { Navbar } from '@/components/sections/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { useDemoModal } from '@/components/DemoBookingModal';
import { PageFooter } from '@/components/PageFooter';
import { buildFAQSchemaFromQA } from '@/components/PageFAQ';
import { FreshnessBadge } from '@/components/FreshnessBadge';
import { getLastUpdated, getCurrentExamYear } from '@/lib/contentFreshness';
import { TableOfContents, toAnchorId, type TocItem } from '@/components/TableOfContents';
import { getExamEntities } from '@/lib/seoEntities';
import { getChapterBySlug, topicToSlug } from '@/data/chapterData';
import { CURRENT_EXAM_YEAR } from '@/lib/examYears';
import { getTopicContent } from '@/data/topicContent';

const RevisionNotesPage = () => {
  const pathname = usePathname();
  // Expect pathname like /jee-mechanics-kinematics/notes
  const parts = pathname.replace(/^\//, '').split('/');
  const chapterSlug = parts[0];
  const { openDemoModal } = useDemoModal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const chapter = getChapterBySlug(chapterSlug);
  if (!chapter) return <Navigate to="/" replace />;

  const slug = `${chapterSlug}/notes`;
  const lastUpdated = getLastUpdated(slug);
  const title = `${chapter.chapter} Notes for ${chapter.exam} ${CURRENT_EXAM_YEAR} — Key Concepts, Formulas & Tips`;
  const description = `${chapter.chapter} revision notes for ${chapter.exam} ${chapter.subject}. Key concepts, ${chapter.keyFormulas.length}+ formulas, common mistakes & quick revision tips. Free study material.`;

  const faqs = [
    { q: `Are these ${chapter.chapter} notes enough for ${chapter.exam}?`, a: `These notes cover all key concepts and formulas for ${chapter.chapter}. For complete preparation, combine these notes with PYQ solving and practice MCQs available on MindPeak.` },
    { q: `How to revise ${chapter.chapter} quickly before ${chapter.exam}?`, a: `Focus on the formula summary section and common mistakes. Solve 10-15 PYQs from this chapter to test your understanding. A 1-on-1 mentor can identify your weak areas for targeted revision.` },
    { q: `What is the weightage of ${chapter.chapter} in ${chapter.exam}?`, a: `${chapter.chapter} carries approximately ${chapter.weightage} weightage in ${chapter.exam}. It is rated ${chapter.difficulty} difficulty with ${chapter.pyqCount}+ PYQs in the last 10 years.` },
  ];

  const tocItems: TocItem[] = [
    { id: 'key-concepts', label: 'Key Concepts & Topics' },
    { id: 'formula-summary', label: 'Formula Summary' },
    { id: 'common-mistakes', label: 'Common Mistakes to Avoid' },
    { id: 'revision-strategy', label: 'Revision Strategy' },
    { id: 'practice-resources', label: 'Practice Resources' },
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
      mainEntityOfPage: { '@type': 'WebPage', '@id': `https://mindpeakinstitute.com/${slug}` },
      about: getExamEntities(chapter.exam),
    },
    buildFAQSchemaFromQA(faqs),
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mindpeakinstitute.com' },
        { '@type': 'ListItem', position: 2, name: `${chapter.exam} ${chapter.subject}`, item: `https://mindpeakinstitute.com/${chapter.exam.toLowerCase()}-${chapter.subject.toLowerCase()}-coaching` },
        { '@type': 'ListItem', position: 3, name: chapter.chapter, item: `https://mindpeakinstitute.com/${chapterSlug}` },
        { '@type': 'ListItem', position: 4, name: 'Notes', item: `https://mindpeakinstitute.com/${slug}` },
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
            <li><Link to={`/${chapterSlug}`} className="hover:text-primary transition-colors">{chapter.chapter}</Link></li>
            <span>/</span>
            <li className="text-foreground">Notes</li>
          </ol>
        </nav>

        <section className="max-w-4xl mx-auto px-6 pb-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <FreshnessBadge lastUpdated={lastUpdated} verifiedFor={getCurrentExamYear()} />
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-bold">{chapter.subject}</span>
              <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-bold">{chapter.exam}</span>
              <span className="px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-xs font-bold">{chapter.weightage}</span>
            </div>
            <h1 className="font-display font-black text-foreground mb-6" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>
              {chapter.chapter} <span className="text-gradient-gold">Revision Notes</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
              Complete revision notes for {chapter.chapter} ({chapter.exam} {chapter.subject}). Covers all {chapter.topics.length} topics with key formulas, common mistakes, and exam tips.
            </p>
          </motion.div>
        </section>

        <div className="section-divider max-w-4xl mx-auto" />
        <div className="max-w-4xl mx-auto px-6 pt-8">
          <TableOfContents items={tocItems} />
        </div>

        <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
          {/* Key Concepts */}
          <section id="key-concepts" className="scroll-mt-24">
            <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" /> Key Concepts & Topics
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {chapter.topics.map((topic, i) => {
                const tc = getTopicContent(chapterSlug, topic);
                return (
                  <div key={i} className="rounded-xl border border-border bg-card/30 hover:border-primary/40 transition-colors">
                    <Link
                      to={`/${chapterSlug}/${topicToSlug(topic)}`}
                      className="flex items-center gap-3 p-4 group"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold flex-shrink-0">{i + 1}</div>
                      <span className="text-foreground text-sm group-hover:text-primary transition-colors font-medium">{topic}</span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors flex-shrink-0" />
                    </Link>
                    {tc && (
                      <div className="px-4 pb-4 pt-0 border-t border-border/50 mt-0">
                        <p className="text-muted-foreground text-xs leading-relaxed mt-3">{tc.definition}</p>
                        {tc.workedExample && (
                          <p className="text-xs text-primary/80 mt-2 font-mono">💡 {tc.workedExample.problem} → <strong>{tc.workedExample.answer}</strong></p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Formula Summary */}
          <section id="formula-summary" className="scroll-mt-24">
            <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" /> Formula Summary ({chapter.keyFormulas.length} formulas)
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {chapter.keyFormulas.map((formula, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(i * 0.03, 0.3) }}
                  className="p-4 rounded-xl border border-border bg-card/50"
                >
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-bold text-xs mt-0.5">#{i + 1}</span>
                    <span className="text-foreground text-sm font-mono">{formula}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-6">
              <Link
                to={`/${chapter.exam.toLowerCase()}-${chapter.subject.toLowerCase()}-formulas`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary/10 border border-primary/30 text-primary text-sm hover:bg-primary/20 transition-colors"
              >
                Download Complete {chapter.subject} Formula Sheet <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* Common Mistakes */}
          <section id="common-mistakes" className="scroll-mt-24">
            <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl mb-6 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-destructive" /> Common Mistakes to Avoid
            </h2>
            <div className="space-y-3">
              {chapter.commonMistakes.map((mistake, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-destructive/20 bg-destructive/5">
                  <AlertTriangle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm leading-relaxed">{mistake}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Revision Strategy */}
          <section id="revision-strategy" className="scroll-mt-24">
            <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl mb-6 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-primary" /> Revision Strategy
            </h2>
            <div className="space-y-4">
              {[
                { step: 'Read all key concepts', desc: 'Go through each topic above and ensure you understand the underlying principles.' },
                { step: 'Memorize formulas', desc: `Write down all ${chapter.keyFormulas.length} formulas from memory. Check against the list above.` },
                { step: 'Solve PYQs', desc: `Solve ${chapter.pyqCount}+ previous year questions from this chapter to understand exam patterns.` },
                { step: 'Practice MCQs', desc: 'Attempt 20-30 MCQs at different difficulty levels to test your understanding.' },
                { step: 'Review mistakes', desc: 'Go through the common mistakes section and ensure you won\'t repeat them.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm flex-shrink-0">{i + 1}</div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground text-sm mb-1">{item.step}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Practice Resources */}
          <section id="practice-resources" className="scroll-mt-24">
            <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl mb-6">Practice Resources</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <Link to={`/${chapter.exam.toLowerCase()}-practice`} className="p-5 rounded-xl border border-border bg-card/50 hover:border-primary/40 transition-colors text-center">
                <span className="text-2xl mb-2 block">📝</span>
                <span className="font-display font-semibold text-foreground text-sm">{chapter.exam} Practice MCQs</span>
              </Link>
              <Link to={`/${chapter.exam.toLowerCase()}-pyq`} className="p-5 rounded-xl border border-border bg-card/50 hover:border-primary/40 transition-colors text-center">
                <span className="text-2xl mb-2 block">📚</span>
                <span className="font-display font-semibold text-foreground text-sm">{chapter.exam} PYQs</span>
              </Link>
              <Link to={`/${chapterSlug}`} className="p-5 rounded-xl border border-border bg-card/50 hover:border-primary/40 transition-colors text-center">
                <span className="text-2xl mb-2 block">📖</span>
                <span className="font-display font-semibold text-foreground text-sm">Full Chapter Guide</span>
              </Link>
            </div>
          </section>
        </div>

        {/* CTA */}
        <section className="bg-primary/10 border-y border-primary/20 py-12 px-6 text-center">
          <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-4">
            Need Help With <span className="text-gradient-gold">{chapter.chapter}</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a dedicated mentor to explain every concept until you truly understand. Book a free demo.
          </p>
          <button onClick={openDemoModal} className="px-12 py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-[0.15em] shadow-gold-glow hover:scale-105 transition-transform">
            Book Free Demo
          </button>
        </section>

        {/* FAQs */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="font-display font-bold text-foreground text-2xl text-center mb-10">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className={`rounded-xl border transition-all ${isOpen ? 'bg-background/50 border-primary/30' : 'bg-background/25 border-border/40 hover:border-border/70'}`}>
                  <button onClick={() => setOpenFaq(isOpen ? null : i)} className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left" aria-expanded={isOpen}>
                    <span className={`text-sm font-semibold ${isOpen ? 'text-foreground' : 'text-foreground/80'}`}>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180 text-primary' : 'text-muted-foreground'}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <div className="px-5 pb-4">
                          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-3" />
                          <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        <PageFooter extra={`${chapter.chapter} revision notes for ${chapter.exam}.`} />
      </main>
    </>
  );
};

export default RevisionNotesPage;
