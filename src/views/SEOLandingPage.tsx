"use client";

import { usePathname } from 'next/navigation';
import { Navigate } from '@/components/Navigate';
import { Link } from '@/components/RouterLink';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Phone, CheckCircle } from 'lucide-react';
import { Navbar } from '@/components/sections/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { useDemoModal } from '@/components/DemoBookingModal';
import { PageFooter } from '@/components/PageFooter';
import { subjectBanks } from '@/data/practice';
import { buildFAQSchemaFromQA } from '@/components/PageFAQ';
import { getSEOPage } from '@/data/seoPageData';
import type { SEOPageData, SEOPageSection } from '@/data/seoPageData';
import { FreshnessBadge } from '@/components/FreshnessBadge';
import { getLastUpdated, getCurrentExamYear } from '@/lib/contentFreshness';
import { FadeInView } from '@/components/FadeInView';
import { TableOfContents, toAnchorId, type TocItem } from '@/components/TableOfContents';
import { getExamEntities } from '@/lib/seoEntities';
import { getExamGuideLinks } from '@/lib/examGuideLinks';

/* ── Section renderer ── */
const ContentSection = ({ section, index }: { section: SEOPageSection; index: number }) => {
  const anchorId = toAnchorId(section.heading);
  return (
  <section id={anchorId} className="mb-12 scroll-mt-24">
  <FadeInView delay={index * 50}>
    <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl mb-4">{section.heading}</h2>
    {section.content && (
      <p className="text-muted-foreground leading-relaxed mb-4">{section.content}</p>
    )}
    {section.bullets && (
      section.ordered ? (
        <ol className="list-decimal pl-5 sm:pl-6 space-y-2 mb-4 marker:text-primary marker:font-semibold">
          {section.bullets.map((b, i) => (
            <li key={i} className="text-foreground/85 text-sm sm:text-base leading-relaxed pl-1">{b}</li>
          ))}
        </ol>
      ) : (
        <ul className="space-y-2 mb-4">
          {section.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
              <span className="text-muted-foreground text-sm leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
      )
    )}
    {section.table && (
      <div className="overflow-x-auto rounded-xl border border-border mt-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-secondary/50">
              {section.table.headers.map((h) => (
                <th key={h} className="text-left px-4 py-3 text-foreground font-display font-semibold whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {section.table.rows.map((row, ri) => (
              <tr key={ri} className={ri % 2 === 0 ? 'bg-card/30' : 'bg-card/10'}>
                {row.map((cell, ci) => (
                  <td key={ci} className={`px-4 py-3 ${ci === 0 ? 'text-foreground font-medium' : 'text-muted-foreground'} whitespace-nowrap`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
    {section.authorityNote && (
      <p className="mt-4 text-foreground/70 text-sm sm:text-base leading-relaxed italic">{section.authorityNote}</p>
    )}
  </FadeInView>
  </section>
  );
};

/* ── Page component ── */
const SEOLandingPage = () => {
  const pathname = usePathname();
  const slug = pathname.replace(/^\//, '');
  const { openDemoModal } = useDemoModal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  const page = slug ? getSEOPage(slug) : undefined;
  if (!page) return <Navigate to="/" replace />;

  // Exam coaching pages also link to their syllabus guide + comparison post.
  const guideLinks = getExamGuideLinks(page.slug).filter(
    (g) => !page.relatedPages.some((rp) => rp.href === g.href),
  );
  const relatedPages = [...page.relatedPages, ...guideLinks];

  const jsonLd: object[] = [];

  if (page.schemaType === 'EducationalOrganization') {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      /*
       * Canonical @id — MUST match the Organization node in app/layout.tsx.
       * Without it every landing page minted an anonymous org node whose
       * `url` was the page itself, splitting one organisation into dozens of
       * weak duplicates. Entity fragmentation is what lets answer engines
       * merge a brand with a same-name company (see the Mindpeak GmbH
       * collision), so all org nodes resolve to this single @id.
       */
      '@id': 'https://mindpeakinstitute.com/#organization',
      name: 'MindPeak Institute',
      url: 'https://mindpeakinstitute.com',
      description: page.description,
      telephone: '+91-82194-57704',
      address: { '@type': 'PostalAddress', streetAddress: 'Nehran Pukhar Road', addressLocality: 'Dehra Gopipur', addressRegion: 'Himachal Pradesh', postalCode: '176110', addressCountry: 'IN' },
      // No `review`/`aggregateRating`: fabricated testimonials in structured
      // data are a Google penalty risk and get quoted verbatim by LLMs. Add
      // real, consented reviews here only when we have them.
    });
  } else if (page.schemaType === 'Course') {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: page.h1 + ' ' + page.h1Highlight,
      description: page.description,
      provider: { '@type': 'Organization', name: 'MindPeak Institute', url: 'https://mindpeakinstitute.com' },
      url: `https://mindpeakinstitute.com/${page.slug}`,
    });
  }

  if (page.faqs.length > 0) {
    jsonLd.push(buildFAQSchemaFromQA(page.faqs));
  }

  // Article schema with freshness signals
  const lastUpdated = getLastUpdated(slug);
  jsonLd.push({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${page.h1} ${page.h1Highlight}`,
    description: page.description,
    author: { '@type': 'Organization', name: 'MindPeak Institute' },
    publisher: {
      '@type': 'Organization',
      name: 'MindPeak Institute',
      logo: { '@type': 'ImageObject', url: 'https://mindpeakinstitute.com/images/logo.jpeg' },
    },
    datePublished: '2026-01-01',
    dateModified: lastUpdated,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://mindpeakinstitute.com/${page.slug}` },
    about: getExamEntities(slug.includes('neet') ? 'NEET' : 'JEE'),
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'p.text-lg'],
    },
  });

  jsonLd.push({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mindpeakinstitute.com' },
      { '@type': 'ListItem', position: 2, name: page.h1 + ' ' + page.h1Highlight, item: `https://mindpeakinstitute.com/${page.slug}` },
    ],
  });

  return (
    <>
      <SEOHead title={page.title} description={page.description} jsonLd={jsonLd} />
      <Navbar />
      <main className="bg-background pt-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-6 py-4">
          <ol className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <span>/</span>
            <li className="text-foreground">{page.h1} {page.h1Highlight}</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-6 pb-12 text-center">
          <div>
            <FreshnessBadge lastUpdated={getLastUpdated(slug)} verifiedFor={`${getCurrentExamYear()}`} />
            <h1 className="font-display font-black text-foreground mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              {page.h1} <span className="text-gradient-gold">{page.h1Highlight}</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto mb-8">{page.heroSubtitle}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={openDemoModal}
                className="px-8 py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-[0.15em] shadow-gold-glow hover:scale-105 transition-transform"
              >
                Book Free Demo Class
              </button>
              <a
                href="tel:+918219457704"
                className="px-8 py-4 border border-border text-foreground font-display text-sm uppercase tracking-[0.15em] hover:border-primary hover:text-primary transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" /> Call +91 82194 57704
              </a>
            </div>
          </div>
        </section>

        {/* Section divider */}
        <div className="section-divider max-w-4xl mx-auto" />

        {/* Table of Contents */}
        <div className="max-w-4xl mx-auto px-6 pt-8">
          <TableOfContents
            items={page.sections.map((s): TocItem => ({ id: toAnchorId(s.heading), label: s.heading }))}
          />
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          {page.sections.map((section, i) => (
            <ContentSection key={i} section={section} index={i} />
          ))}
        </div>

        {/* CTA Band */}
        <section className="bg-primary/10 border-y border-primary/20 py-12 px-6 text-center">
          <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-4">
            Ready to <span className="text-gradient-gold">Get Started</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Study 1-on-1 with a dedicated mentor from anywhere in India. Book a free trial class, meet your mentor, and decide for yourself.
          </p>
          <button
            onClick={openDemoModal}
            className="px-12 py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-[0.15em] shadow-gold-glow hover:scale-105 transition-transform"
          >
            Book Your Free Demo
          </button>
        </section>

        {/* FAQ Section */}
        {page.faqs.length > 0 && (
          <section className="max-w-3xl mx-auto px-6 py-16" aria-label="Frequently Asked Questions">
            <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl text-center mb-10">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h2>
            <div className="space-y-3">
              {page.faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={i}
                    className={`rounded-xl border transition-all duration-300 ${
                      isOpen ? 'bg-background/50 backdrop-blur-xl border-primary/30 shadow-card' : 'bg-background/25 backdrop-blur-lg border-border/40 hover:border-border/70'
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className={`text-sm font-semibold transition-colors ${isOpen ? 'text-foreground' : 'text-foreground/80'}`}>{faq.q}</span>
                      <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }} className="flex-shrink-0">
                        <ChevronDown className={`w-4 h-4 ${isOpen ? 'text-primary' : 'text-muted-foreground'}`} />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
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

        {/* Related Pages / Internal Links */}
        {relatedPages.length > 0 && (
          <section className="max-w-4xl mx-auto px-6 pb-16">
            <h3 className="font-display font-bold text-foreground text-xl mb-6">Explore More</h3>
            <div className="flex flex-wrap gap-3">
              {relatedPages.map((rp) => (
                <Link
                  key={rp.href}
                  to={rp.href}
                  className="px-5 py-3 rounded-lg bg-card border border-border text-foreground text-sm hover:border-primary/40 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4 text-primary" /> {rp.label}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Practice Questions Quick Links */}
        {page.slug.startsWith('jee') && (
          <section className="max-w-4xl mx-auto px-6 pb-12">
            <h3 className="font-display font-bold text-foreground text-lg mb-4">JEE Practice Questions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {subjectBanks.map(bank => {
                const firstCh = bank.chapters[0];
                const firstTopic = firstCh?.topics[0];
                if (!firstCh || !firstTopic) return null;
                return (
                  <div key={bank.slug} className="rounded-xl border border-border bg-card/50 p-4">
                    <h4 className="font-display font-semibold text-foreground text-sm mb-3">{bank.icon} {bank.subject} Practice</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {(['easy', 'medium', 'hard'] as const).map(diff => {
                        const colors = diff === 'easy' ? 'text-green-400 bg-green-500/10 border-green-500/30 hover:bg-green-500/20' : diff === 'medium' ? 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30 hover:bg-yellow-500/20' : 'text-red-400 bg-red-500/10 border-red-500/30 hover:bg-red-500/20';
                        const Icon = diff === 'easy' ? '⚡' : diff === 'medium' ? '🎯' : '🏆';
                        return (
                          <Link
                            key={diff}
                            to={`/jee-${bank.slug}-${firstCh.slug}-${firstTopic.slug}-${diff}-q1`}
                            className={`flex flex-col items-center gap-1 px-2 py-2.5 rounded-lg border-2 text-sm font-semibold transition-all hover:scale-[1.03] ${colors}`}
                          >
                            <span className="text-base">{Icon}</span>
                            <span className="text-xs">{diff.charAt(0).toUpperCase() + diff.slice(1)}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        <PageFooter extra={page.slug.startsWith('jee') ? 'JEE Practice & Coaching.' : page.slug.startsWith('neet') ? 'NEET Coaching.' : undefined} />
      </main>
    </>
  );
};

export default SEOLandingPage;
