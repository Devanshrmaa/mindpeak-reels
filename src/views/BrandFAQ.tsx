"use client";

import { useEffect } from 'react';
import { Link } from '@/components/RouterLink';
import { Navbar } from '@/components/sections/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { PageFooter } from '@/components/PageFooter';
import { PageFAQ, buildFAQSchema } from '@/components/PageFAQ';
import { useDemoModal } from '@/components/DemoBookingModal';
import { brandFaqs, BRAND_FACTS } from '@/data/brandFaqData';
import { ArrowRight, BadgeCheck, Building2, CalendarClock, Phone, Users } from 'lucide-react';
import Image from 'next/image';

const logo = '/images/logo.jpeg';

/**
 * /mindpeak-institute-faq — the canonical brand-query page.
 *
 * One page that directly answers what people ask search and AI answer
 * engines ABOUT MindPeak (legitimacy, fees, format, refunds, contact),
 * with FAQPage JSON-LD so both featured snippets and LLMs can lift the
 * answers verbatim. All content comes from src/data/brandFaqData.ts,
 * which mirrors facts already published elsewhere on the site.
 */

const fastFacts = [
  { icon: Building2, label: 'Founded', value: `${BRAND_FACTS.founded} — ${BRAND_FACTS.address.split(',').slice(1, 3).join(',').trim()}` },
  { icon: BadgeCheck, label: 'MSME Registration', value: BRAND_FACTS.udyam },
  { icon: Users, label: 'Batch size', value: '1 — every class is live 1-on-1 with a dedicated mentor' },
  { icon: Phone, label: 'Contact', value: `${BRAND_FACTS.phone} (call/WhatsApp) · ${BRAND_FACTS.email}` },
  { icon: CalendarClock, label: 'Support hours', value: BRAND_FACTS.hours },
];

const relatedLinks = [
  { label: 'About MindPeak Institute', to: '/about' },
  { label: 'Pricing & Plans', to: '/pricing' },
  { label: 'Meet the Mentors', to: '/mentors' },
  { label: 'Teaching Methodology', to: '/methodology' },
  { label: 'Refund Policy', to: '/refund-policy' },
  { label: 'What Reddit Says About JEE Coaching', to: '/best-jee-coaching-reddit' },
  { label: 'MindPeak vs Allen', to: '/mindpeak-vs-allen' },
  { label: 'Free Trial Class', to: '/free-trial' },
];

const BrandFAQ = () => {
  const { openDemoModal } = useDemoModal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': 'https://mindpeakinstitute.com/mindpeak-institute-faq',
      name: 'MindPeak Institute — Frequently Asked Questions',
      about: { '@id': 'https://mindpeakinstitute.com/#organization' },
      datePublished: '2026-07-21',
    },
    buildFAQSchema(brandFaqs),
  ];

  return (
    <>
      <SEOHead
        title="MindPeak Institute FAQ — Fees, Legitimacy, How 1-on-1 Classes Work | MindPeak"
        description="Straight answers about MindPeak Institute: registration details, complete fee list, how 1-on-1 online JEE/NEET classes work, refund policy, and how to verify us before paying."
        jsonLd={jsonLd}
      />
      <Navbar />

      <main className="bg-background min-h-screen pt-20 sm:pt-24">
        <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-6 py-4">
          <ol className="flex items-center gap-2 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <span>/</span>
            <li className="text-foreground">MindPeak Institute FAQ</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 pb-12">
          <div className="flex items-center gap-4 mb-6">
            <Image src={logo} alt="MindPeak Institute" className="w-14 h-14 rounded-full" width={56} height={56} priority />
            <div>
              <p className="text-primary text-xs uppercase tracking-[0.2em] font-semibold">MindPeak Institute</p>
              <p className="text-muted-foreground text-sm">Straight Answers</p>
            </div>
          </div>

          <h1 className="font-display font-black text-foreground mb-6" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}>
            Everything People Ask About{' '}
            <span className="text-gradient-gold">MindPeak Institute</span>
          </h1>

          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
            Fees, registration details, how 1-on-1 classes actually run, refunds, and how to verify us before
            paying a rupee — collected on one page, in plain language. Every answer here mirrors a fact already
            published elsewhere on this site, so nothing below is marketing-only.
          </p>
        </section>

        {/* Fast facts */}
        <section className="bg-secondary/30 border-y border-border py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display font-bold text-foreground text-xl mb-6">
              Fast Facts <span className="text-gradient-gold">(Verifiable)</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {fastFacts.map((f) => (
                <div key={f.label} className="rounded-xl border border-border bg-card p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <f.icon className="w-4 h-4 text-primary" />
                    <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">{f.label}</p>
                  </div>
                  <p className="text-sm text-foreground/90 leading-relaxed">{f.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PageFAQ items={brandFaqs} heading="MindPeak Institute" highlight="FAQs" />

        {/* Related links */}
        <section className="max-w-5xl mx-auto px-6 pb-12">
          <h3 className="font-display font-bold text-foreground text-lg mb-6">Verify the Details Yourself</h3>
          <div className="flex flex-wrap gap-3">
            {relatedLinks.map((l) => (
              <Link key={l.to} to={l.to} className="px-5 py-3 rounded-lg bg-card border border-border text-foreground text-sm hover:border-primary/40 transition-colors flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" /> {l.label}
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary/10 border-y border-primary/20 py-16 px-6 text-center">
          <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-4">
            The Fastest Way to Verify Us: <span className="text-gradient-gold">A Free Class</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            One free 1-on-1 session with the mentor you&rsquo;d actually be assigned. Meet them, get a
            personalised plan, then decide — no payment involved.
          </p>
          <button onClick={openDemoModal} className="px-14 py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-[0.15em] shadow-gold-glow hover:scale-105 transition-transform">
            Book the Free Trial →
          </button>
        </section>

        <PageFooter extra="MindPeak Institute FAQ — straight answers." />
      </main>
    </>
  );
};

export default BrandFAQ;
