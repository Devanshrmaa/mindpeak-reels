"use client";

import { usePathname } from 'next/navigation';
import { Navigate } from '@/components/Navigate';
import { Link } from '@/components/RouterLink';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Phone, CheckCircle } from 'lucide-react';
import { Navbar } from '@/components/sections/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { useDemoModal } from '@/components/DemoBookingModal';
import { PageFooter } from '@/components/PageFooter';
import { buildFAQSchemaFromQA } from '@/components/PageFAQ';
import { FreshnessBadge } from '@/components/FreshnessBadge';
import { getLastUpdated, getCurrentExamYear } from '@/lib/contentFreshness';
import { TableOfContents, toAnchorId, type TocItem } from '@/components/TableOfContents';
import { getExamEntities } from '@/lib/seoEntities';
import { getCounsellingPage } from '@/data/counsellingData';

const CounsellingGuidePage = () => {
  const pathname = usePathname();
  const slug = pathname.replace(/^\//, '');
  const { openDemoModal } = useDemoModal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const page = getCounsellingPage(slug);
  if (!page) return <Navigate to="/" replace />;

  const lastUpdated = getLastUpdated(slug);
  const jsonLd: object[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: `${page.h1} ${page.highlight}`,
      description: page.description,
      author: { '@type': 'Organization', name: 'MindPeak Institute' },
      publisher: { '@type': 'Organization', name: 'MindPeak Institute', logo: { '@type': 'ImageObject', url: 'https://mindpeakinstitute.com/images/logo.jpeg' } },
      datePublished: '2025-01-01',
      dateModified: lastUpdated,
      about: getExamEntities(page.exam),
    },
  ];
  if (page.faqs.length > 0) jsonLd.push(buildFAQSchemaFromQA(page.faqs));

  const tocItems: TocItem[] = page.sections.map(s => ({ id: toAnchorId(s.heading), label: s.heading }));

  return (
    <>
      <SEOHead title={page.title} description={page.description} jsonLd={jsonLd} />
      <Navbar />
      <main className="bg-background pt-20">
        <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-6 py-4">
          <ol className="flex items-center gap-2 text-xs text-muted-foreground flex-wrap">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <span>/</span>
            <li className="text-foreground">{page.h1} {page.highlight}</li>
          </ol>
        </nav>

        <section className="max-w-4xl mx-auto px-6 pb-12">
          <motion.div animate={{ opacity: 1, y: 0 }}>
            <FreshnessBadge lastUpdated={lastUpdated} verifiedFor={getCurrentExamYear()} />
            <h1 className="font-display font-black text-foreground mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              {page.h1} <span className="text-gradient-gold">{page.highlight}</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-8">{page.heroSubtitle}</p>
            <button onClick={openDemoModal} className="px-8 py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-[0.15em] shadow-gold-glow hover:scale-105 transition-transform">
              Book Free Demo Class
            </button>
          </motion.div>
        </section>

        <div className="section-divider max-w-4xl mx-auto" />
        <div className="max-w-4xl mx-auto px-6 pt-8"><TableOfContents items={tocItems} /></div>

        <div className="max-w-4xl mx-auto px-6 py-12">
          {page.sections.map((section, i) => (
            <motion.section key={i} id={toAnchorId(section.heading)} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 scroll-mt-24">
              <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl mb-4">{section.heading}</h2>
              {section.content && <p className="text-muted-foreground leading-relaxed mb-4">{section.content}</p>}
              {section.bullets && (
                <ul className="space-y-2 mb-4">
                  {section.bullets.map((b, bi) => (
                    <li key={bi} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground text-sm leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.table && (
                <div className="overflow-x-auto rounded-xl border border-border mt-4">
                  <table className="w-full text-sm">
                    <thead><tr className="bg-secondary/50">{section.table.headers.map(h => <th key={h} className="text-left px-4 py-3 text-foreground font-display font-semibold whitespace-nowrap">{h}</th>)}</tr></thead>
                    <tbody className="divide-y divide-border">
                      {section.table.rows.map((row, ri) => (
                        <tr key={ri} className={ri % 2 === 0 ? 'bg-card/30' : 'bg-card/10'}>
                          {row.map((cell, ci) => <td key={ci} className={`px-4 py-3 ${ci === 0 ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>{cell}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </motion.section>
          ))}
        </div>

        {/* CTA */}
        <section className="bg-primary/10 border-y border-primary/20 py-12 px-6 text-center">
          <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-4">
            Prepare for Your <span className="text-gradient-gold">Dream College</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Start your {page.exam} preparation with a dedicated 1-on-1 mentor. Book a free demo today.</p>
          <button onClick={openDemoModal} className="px-12 py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-[0.15em] shadow-gold-glow hover:scale-105 transition-transform">Book Free Demo</button>
        </section>

        {/* FAQs */}
        {page.faqs.length > 0 && (
          <section className="max-w-3xl mx-auto px-6 py-16">
            <h2 className="font-display font-bold text-foreground text-2xl text-center mb-10">FAQs</h2>
            <div className="space-y-3">
              {page.faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className={`rounded-xl border transition-all ${isOpen ? 'border-primary/30 bg-background/50' : 'border-border/40 bg-background/25 hover:border-border/70'}`}>
                    <button onClick={() => setOpenFaq(isOpen ? null : i)} className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left" aria-expanded={isOpen}>
                      <span className="text-sm font-semibold text-foreground/80">{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180 text-primary' : 'text-muted-foreground'}`} />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          <p className="px-5 pb-4 text-muted-foreground text-sm">{faq.a}</p>
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
        {page.relatedSlugs.length > 0 && (
          <section className="max-w-4xl mx-auto px-6 pb-16">
            <h3 className="font-display font-bold text-foreground text-xl mb-6">Related</h3>
            <div className="flex flex-wrap gap-3">
              {page.relatedSlugs.map(rs => (
                <Link key={rs} to={`/${rs}`} className="px-5 py-3 rounded-lg bg-card border border-border text-foreground text-sm hover:border-primary/40 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-primary" /> {rs.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                </Link>
              ))}
            </div>
          </section>
        )}

        <PageFooter extra={`${page.exam} college guidance.`} />
      </main>
    </>
  );
};

export default CounsellingGuidePage;
