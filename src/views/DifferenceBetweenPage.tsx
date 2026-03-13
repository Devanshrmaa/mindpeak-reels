"use client";

import { usePathname } from 'next/navigation';
import { Navigate } from '@/components/Navigate';
import { Link } from '@/components/RouterLink';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Phone, CheckCircle, Scale } from 'lucide-react';
import { Navbar } from '@/components/sections/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { useDemoModal } from '@/components/DemoBookingModal';
import { PageFooter } from '@/components/PageFooter';
import { buildFAQSchemaFromQA } from '@/components/PageFAQ';
import { FreshnessBadge } from '@/components/FreshnessBadge';
import { getLastUpdated, getCurrentExamYear } from '@/lib/contentFreshness';
import { getExamEntities } from '@/lib/seoEntities';
import { getDifferencePair } from '@/data/differenceBetweenData';
import { CURRENT_EXAM_YEAR } from '@/lib/examYears';

const DifferenceBetweenPage = () => {
  const pathname = usePathname();
  const slug = pathname.replace(/^\//, '');
  const { openDemoModal } = useDemoModal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const pair = getDifferencePair(slug);
  if (!pair) return <Navigate to="/" replace />;

  const lastUpdated = getLastUpdated(slug);
  const title = `Difference Between ${pair.term1} and ${pair.term2} — Key Comparisons for ${pair.exam === 'Both' ? 'JEE & NEET' : pair.exam} ${CURRENT_EXAM_YEAR}`;
  const description = `Learn the key differences between ${pair.term1} and ${pair.term2} with a comparison table, examples & FAQs. Important for ${pair.exam === 'Both' ? 'JEE & NEET' : pair.exam} ${pair.subject}.`;

  const jsonLd: object[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: `Difference Between ${pair.term1} and ${pair.term2}`,
      description,
      author: { '@type': 'Organization', name: 'MindPeak Institute' },
      publisher: { '@type': 'Organization', name: 'MindPeak Institute', logo: { '@type': 'ImageObject', url: 'https://mindpeakinstitute.com/images/logo.jpeg' } },
      datePublished: '2025-01-01',
      dateModified: lastUpdated,
      mainEntityOfPage: { '@type': 'WebPage', '@id': `https://mindpeakinstitute.com/${slug}` },
      about: getExamEntities(pair.exam === 'NEET' ? 'NEET' : 'JEE'),
    },
  ];

  if (pair.faqs.length > 0) jsonLd.push(buildFAQSchemaFromQA(pair.faqs));

  jsonLd.push({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mindpeakinstitute.com' },
      { '@type': 'ListItem', position: 2, name: `Difference Between ${pair.term1} and ${pair.term2}`, item: `https://mindpeakinstitute.com/${slug}` },
    ],
  });

  return (
    <>
      <SEOHead title={title} description={description} jsonLd={jsonLd} />
      <Navbar />
      <main className="bg-background pt-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-6 py-4">
          <ol className="flex items-center gap-2 text-xs text-muted-foreground flex-wrap">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <span>/</span>
            <li className="text-foreground">Difference Between {pair.term1} and {pair.term2}</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-6 pb-12">
          <motion.div animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <FreshnessBadge lastUpdated={lastUpdated} verifiedFor={getCurrentExamYear()} />
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-bold">{pair.subject}</span>
              <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-bold">{pair.exam === 'Both' ? 'JEE & NEET' : pair.exam}</span>
            </div>
            <h1 className="font-display font-black text-foreground mb-6" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>
              Difference Between <span className="text-gradient-gold">{pair.term1}</span> and <span className="text-gradient-gold">{pair.term2}</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">{pair.intro}</p>
          </motion.div>
        </section>

        <div className="section-divider max-w-4xl mx-auto" />

        {/* Comparison Table */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl mb-6">
            <Scale className="inline w-5 h-5 mr-2 text-primary" />
            {pair.term1} vs {pair.term2} — Comparison Table
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary/50">
                  <th className="text-left px-4 py-3 text-foreground font-display font-semibold">Aspect</th>
                  <th className="text-left px-4 py-3 text-primary font-display font-semibold">{pair.term1}</th>
                  <th className="text-left px-4 py-3 text-primary font-display font-semibold">{pair.term2}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {pair.rows.map(([aspect, v1, v2], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-card/30' : 'bg-card/10'}>
                    <td className="px-4 py-3 text-foreground font-medium">{aspect}</td>
                    <td className="px-4 py-3 text-muted-foreground">{v1}</td>
                    <td className="px-4 py-3 text-muted-foreground">{v2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Key Points */}
        <section className="max-w-4xl mx-auto px-6 pb-12">
          <h2 className="font-display font-bold text-foreground text-xl mb-4">Key Points to Remember</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {pair.keyPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card/30"
              >
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm leading-relaxed">{point}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Exam Relevance */}
        {pair.chapter && (
          <section className="max-w-4xl mx-auto px-6 pb-12">
            <h2 className="font-display font-bold text-foreground text-xl mb-4">Exam Relevance</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This topic falls under <strong className="text-foreground">{pair.chapter}</strong> in {pair.subject} for {pair.exam === 'Both' ? 'both JEE and NEET' : pair.exam}. Questions on the difference between {pair.term1.toLowerCase()} and {pair.term2.toLowerCase()} appear frequently in competitive exams, both as direct MCQs and as part of numerical/assertion-reason problems.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to={`/${pair.exam === 'NEET' ? 'neet' : 'jee'}-practice`} className="px-5 py-3 rounded-lg bg-primary/10 border border-primary/30 text-primary text-sm hover:bg-primary/20 transition-colors flex items-center gap-2">
                Practice {pair.subject} MCQs <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to={`/${pair.exam === 'NEET' ? 'neet' : 'jee'}-pyq`} className="px-5 py-3 rounded-lg bg-card border border-border text-foreground text-sm hover:border-primary/40 transition-colors flex items-center gap-2">
                {pair.exam === 'Both' ? 'JEE' : pair.exam} PYQs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="bg-primary/10 border-y border-primary/20 py-12 px-6 text-center">
          <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-4">
            Master {pair.subject} with <span className="text-gradient-gold">1-on-1 Coaching</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Struggling with concepts like {pair.term1.toLowerCase()} vs {pair.term2.toLowerCase()}? Get a dedicated mentor who explains until you truly understand.
          </p>
          <button onClick={openDemoModal} className="px-12 py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-[0.15em] shadow-gold-glow hover:scale-105 transition-transform">
            Book Free Demo
          </button>
        </section>

        {/* FAQs */}
        {pair.faqs.length > 0 && (
          <section className="max-w-3xl mx-auto px-6 py-16">
            <h2 className="font-display font-bold text-foreground text-2xl text-center mb-10">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h2>
            <div className="space-y-3">
              {pair.faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className={`rounded-xl border transition-all duration-300 ${isOpen ? 'bg-background/50 backdrop-blur-xl border-primary/30 shadow-card' : 'bg-background/25 backdrop-blur-lg border-border/40 hover:border-border/70'}`}>
                    <button onClick={() => setOpenFaq(isOpen ? null : i)} className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left" aria-expanded={isOpen}>
                      <span className={`text-sm font-semibold ${isOpen ? 'text-foreground' : 'text-foreground/80'}`}>{faq.q}</span>
                      <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }} className="flex-shrink-0">
                        <ChevronDown className={`w-4 h-4 ${isOpen ? 'text-primary' : 'text-muted-foreground'}`} />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
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
        )}

        {/* Related */}
        {pair.relatedSlugs.length > 0 && (
          <section className="max-w-4xl mx-auto px-6 pb-16">
            <h3 className="font-display font-bold text-foreground text-xl mb-6">Related Comparisons</h3>
            <div className="flex flex-wrap gap-3">
              {pair.relatedSlugs.map((rs) => (
                <Link key={rs} to={`/${rs}`} className="px-5 py-3 rounded-lg bg-card border border-border text-foreground text-sm hover:border-primary/40 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-primary" /> {rs.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                </Link>
              ))}
            </div>
          </section>
        )}

        <PageFooter extra={`${pair.term1} vs ${pair.term2} comparison for ${pair.exam}.`} />
      </main>
    </>
  );
};

export default DifferenceBetweenPage;
