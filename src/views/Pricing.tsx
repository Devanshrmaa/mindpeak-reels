"use client";

import { useEffect } from 'react';
import { Link } from '@/components/RouterLink';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { PageFooter } from '@/components/PageFooter';
import { PageFAQ, buildFAQSchema } from '@/components/PageFAQ';
import type { FAQItem } from '@/components/PageFAQ';
import { useDemoModal } from '@/components/DemoBookingModal';
import { CheckCircle, ArrowRight, Star, ShieldCheck, Phone, CreditCard } from 'lucide-react';
import { DynamicOfferBanner } from '@/components/DynamicOfferBanner';
import { FreshnessBadge } from '@/components/FreshnessBadge';
import { getLastUpdated } from '@/lib/contentFreshness';
const logo = '/images/logo.jpeg';

/* ─── pricing tiers ─── */

interface Tier {
  name: string;
  badge?: string;
  price: string;
  originalPrice?: string;
  discountTag?: string;
  period: string;
  target: string;
  features: string[];
  highlight?: boolean;
}

const tiers: Tier[] = [
  {
    name: 'Foundation',
    originalPrice: '₹1,30,000',
    price: '₹1,00,000',
    discountTag: '23% OFF',
    period: '/ year + GST',
    target: 'Classes 6th – 10th',
    features: [
      'Live 1-on-1 classes, 6 days/week',
      'All sessions recorded for revision',
      'Dedicated personal mentor',
      'Foundation for JEE / NEET concepts',
      'Weekly performance analytics',
      'Parent progress reports',
      'Flexible scheduling',
    ],
  },
  {
    name: 'JEE / NEET — 1 Year',
    badge: 'Most Popular',
    originalPrice: '₹1,99,000',
    price: '₹1,30,000',
    discountTag: '35% OFF',
    period: '/ year + GST',
    target: 'JEE Main + Advanced or NEET UG',
    highlight: true,
    features: [
      'Live 1-on-1 classes, 6 days/week',
      'All sessions recorded for revision',
      'Dedicated personal mentor',
      'Complete JEE or NEET syllabus coverage',
      'AI-driven adaptive curriculum',
      'Weekly mock tests (CBT format)',
      'Detailed performance analytics',
      'Weekly parent reports & mentor calls',
      'Instant doubt resolution (WhatsApp)',
    ],
  },
  {
    name: 'JEE / NEET — 2 Year',
    originalPrice: '₹2,99,000',
    price: '₹2,30,000',
    discountTag: '23% OFF',
    period: '/ 2 years + GST',
    target: 'JEE Main + Advanced or NEET UG',
    features: [
      'Everything in 1-Year plan',
      'Extended preparation from Class 11',
      'Foundation + competitive exam coverage',
      'Board exam integration (CBSE / State)',
      'Long-term mentor relationship',
      'Phased curriculum with milestones',
      'Priority scheduling',
      'Scholarship eligibility for toppers',
    ],
  },
];

const crashCourses: Tier[] = [
  {
    name: 'Crash Course — 6 Months',
    originalPrice: '₹99,000',
    price: '₹75,000',
    discountTag: '24% OFF',
    period: '+ GST',
    target: 'JEE / NEET last-mile preparation',
    features: [
      'Intensive 1-on-1 daily sessions',
      'Focus on high-weightage topics',
      'Mock tests every week',
      'Previous year paper deep-dive',
      'Exam strategy & time management',
      'All sessions recorded',
    ],
  },
  {
    name: 'Subject Crash Course',
    price: '₹25,000',
    period: '/ subject + GST',
    target: 'Targeted weak-subject improvement',
    features: [
      'Single subject intensive coaching',
      'Diagnose & fix specific weaknesses',
      'Choose: Physics / Chemistry / Math / Biology',
      '10-12 weeks focused program',
      '1-on-1 with subject expert',
      'Weekly progress tracking',
    ],
  },
  {
    name: 'CBT Test Series',
    price: '₹8,000',
    period: '+ GST',
    target: 'JEE or NEET mock test practice',
    features: [
      '20+ full-length mock tests',
      'Computer-Based Test format',
      'Detailed analytics per test',
      'All-India percentile ranking',
      'Topic-wise accuracy reports',
      'Solutions & mentor review available',
    ],
  },
];

const competitorComparison = [
  { feature: 'Format', mindpeak: '1-on-1 Online', allen: 'Batch (100+)', resonance: 'Batch (80+)', fiitjee: 'Batch (60+)', byjus: 'Recorded / Hybrid' },
  { feature: '1-Year JEE/NEET Fee', mindpeak: '₹1,30,000*', allen: '₹1,20,000+', resonance: '₹1,00,000+', fiitjee: '₹1,50,000+', byjus: '₹1,50,000+' },
  { feature: 'Personal Mentor', mindpeak: '✓ Yes', allen: '✗ No', resonance: '✗ No', fiitjee: '✗ No', byjus: '✗ No' },
  { feature: 'Adaptive Curriculum', mindpeak: '✓ AI-Driven', allen: '✗ Fixed', resonance: '✗ Fixed', fiitjee: '✗ Fixed', byjus: 'Partial' },
  { feature: 'Recorded Sessions', mindpeak: '✓ All Classes', allen: 'Limited', resonance: '✗ No', fiitjee: '✗ No', byjus: '✓ Yes' },
  { feature: 'Travel Cost', mindpeak: '₹0', allen: '₹20K+ / year', resonance: '₹15K+ / year', fiitjee: '₹20K+ / year', byjus: '₹0' },
];

const paymentPlans = [
  { label: 'Monthly EMI', desc: 'Pay in easy monthly installments. No-cost EMI available on select banks.' },
  { label: 'Quarterly', desc: 'Pay every 3 months with a 5% discount on total fees.' },
  { label: 'Annual (Full)', desc: 'Pay upfront for the best value. 10% discount on total fees.' },
];

const faqs: FAQItem[] = [
  { question: 'Is there a free trial before I commit?', answer: 'Yes! We offer a completely free 1-on-1 trial class where you meet your mentor, get a personalized assessment, and experience our teaching methodology firsthand. No payment required.' },
  { question: 'Can I switch plans later?', answer: 'Yes. You can upgrade from a 1-year plan to a 2-year plan, or add subject crash courses at any time. Our counselors will help you find the right plan for your goals and timeline.' },
  { question: 'Do you offer scholarships or discounts?', answer: 'Yes. We offer merit-based scholarships for top performers in our diagnostic test. Additionally, early bird discounts, sibling discounts, and referral discounts are available. Ask our counselors for current offers.' },
  { question: 'What is your refund policy?', answer: 'We offer a satisfaction guarantee. If you\'re not satisfied within the first 7 days after starting classes, we provide a full refund. Details are available on our Refund Policy page.' },
  { question: 'Are there any hidden fees?', answer: 'No. The price listed is the complete fee (plus GST). Study materials, mock tests, recorded sessions, and doubt resolution are all included. There are no additional charges for books, test series, or platform access.' },
  { question: 'Is the fee the same for JEE and NEET?', answer: 'Yes. Our pricing structure is the same for both JEE and NEET programs. The curriculum and mentor are different, but the pricing tiers are identical.' },
];

/* ─── page ─── */

const Pricing = () => {
  const { openDemoModal } = useDemoModal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const lastUpdated = getLastUpdated('pricing');

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Personalized JEE & NEET Coaching',
    description: 'Live 1-on-1 coaching for JEE Main, JEE Advanced & NEET UG with dedicated mentors, adaptive curriculum, and recorded sessions.',
    provider: { '@type': 'Organization', name: 'MindPeak Institute', url: 'https://mindpeakinstitute.com' },
    offers: [
      { '@type': 'Offer', name: 'Foundation Plan', price: '100000', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
      { '@type': 'Offer', name: '1-Year Intensive', price: '130000', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
      { '@type': 'Offer', name: '2-Year Complete', price: '230000', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
    ],
    hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online', instructor: { '@type': 'Organization', name: 'MindPeak Institute' } },
  };

  const jsonLd = [
    courseSchema,
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Pricing — MindPeak Institute',
      description: 'Transparent pricing for personalized 1-on-1 JEE & NEET coaching.',
      url: 'https://mindpeakinstitute.com/pricing',
    },
    buildFAQSchema(faqs),
  ];

  return (
    <>
      <SEOHead
        title="JEE & NEET Coaching Fees — Plans from ₹8,333/mo [Free Trial]"
        description="Transparent JEE/NEET coaching pricing. Foundation ₹1L, 1-Year ₹1.3L, 2-Year ₹2.3L. EMI available, no hidden fees. Try a free demo class first."
        jsonLd={jsonLd}
      />
      <Navbar />

      <main className="bg-background min-h-screen pt-20 sm:pt-24">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-6 py-4">
          <ol className="flex items-center gap-2 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <span>/</span>
            <li className="text-foreground">Pricing</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 pb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-4 mb-6">
              <img src={logo} alt="MindPeak Institute" className="w-14 h-14 rounded-full" width={56} height={56} />
              <div>
                <p className="text-primary text-xs uppercase tracking-[0.2em] font-semibold">MindPeak Institute</p>
                <p className="text-muted-foreground text-sm">Transparent & Competitive Pricing</p>
              </div>
            </div>

            <h1 className="font-display font-black text-foreground mb-6" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}>
              Simple, <span className="text-gradient-gold">Transparent</span> Pricing
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-4">
              Premium personalized 1-on-1 JEE &amp; NEET coaching at competitive prices. No hidden fees. Every plan includes a dedicated mentor, adaptive curriculum, recorded sessions, mock tests, and weekly parent reports.
            </p>
            <p className="text-primary text-sm font-semibold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> 7-Day Money-Back Guarantee on All Plans
            </p>
            <div className="mt-4">
              <FreshnessBadge lastUpdated={lastUpdated} verifiedFor="2026 Plans" />
            </div>
          </motion.div>
        </section>

        {/* ───── DYNAMIC OFFER ───── */}
        <section className="max-w-md mx-auto px-6 pb-12">
          <DynamicOfferBanner />
        </section>

        {/* ───── MAIN TIERS ───── */}
        <section className="max-w-5xl mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl border p-8 flex flex-col ${
                  tier.highlight
                    ? 'border-primary/40 bg-primary/5 shadow-gold-glow'
                    : 'border-border bg-card'
                }`}
              >
                {tier.badge && (
                  <span className="inline-block w-fit px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold mb-4">
                    {tier.badge}
                  </span>
                )}
                <h3 className="font-display font-bold text-foreground text-xl mb-1">{tier.name}</h3>
                <p className="text-muted-foreground text-xs mb-4">{tier.target}</p>
                <div className="mb-6">
                  {tier.originalPrice && (
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-muted-foreground line-through text-base">{tier.originalPrice}</span>
                      <span className="bg-green-500/20 text-green-400 text-[10px] font-bold px-2 py-0.5 rounded-full">{tier.discountTag}</span>
                    </div>
                  )}
                  <span className="font-display font-black text-foreground text-3xl">{tier.price}</span>
                  <span className="text-muted-foreground text-sm ml-1">{tier.period}</span>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />{f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={openDemoModal}
                  className={`w-full py-3 font-display font-bold text-sm uppercase tracking-wider rounded-lg transition-transform hover:scale-[1.02] ${
                    tier.highlight
                      ? 'bg-primary text-primary-foreground shadow-gold-glow'
                      : 'border border-primary text-primary hover:bg-primary/10'
                  }`}
                >
                  Start Free Trial
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ───── CRASH COURSES ───── */}
        <section className="bg-secondary/30 border-y border-border py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-10">
              Crash Courses &amp; <span className="text-gradient-gold">Add-Ons</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {crashCourses.map((tier, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="rounded-xl border border-border bg-card p-6 flex flex-col">
                  <h3 className="font-display font-bold text-foreground text-lg mb-1">{tier.name}</h3>
                  <p className="text-muted-foreground text-xs mb-3">{tier.target}</p>
                  <div className="mb-4">
                    {tier.originalPrice && (
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-muted-foreground line-through text-sm">{tier.originalPrice}</span>
                        <span className="bg-green-500/20 text-green-400 text-[10px] font-bold px-2 py-0.5 rounded-full">{tier.discountTag}</span>
                      </div>
                    )}
                    <span className="font-display font-black text-foreground text-2xl">{tier.price}</span>
                    <span className="text-muted-foreground text-sm ml-1">{tier.period}</span>
                  </div>
                  <ul className="space-y-2 flex-1 mb-6">
                    {tier.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />{f}
                      </li>
                    ))}
                  </ul>
                  <button onClick={openDemoModal}
                    className="w-full py-2.5 border border-primary text-primary font-display font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-primary/10 transition-colors">
                    Learn More
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── COMPETITOR COMPARISON ───── */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-4">
            How We <span className="text-gradient-gold">Compare</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-3xl mb-10">
            See how MindPeak&rsquo;s pricing and value stack up against other coaching options.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm min-w-[700px]">
              <thead>
                <tr className="bg-secondary/50">
                  <th className="text-left px-4 py-3 text-foreground font-display">Feature</th>
                  <th className="text-center px-4 py-3 text-primary font-display font-bold">MindPeak</th>
                  <th className="text-center px-4 py-3 text-muted-foreground font-display">Allen</th>
                  <th className="text-center px-4 py-3 text-muted-foreground font-display">Resonance</th>
                  <th className="text-center px-4 py-3 text-muted-foreground font-display">FIITJEE</th>
                  <th className="text-center px-4 py-3 text-muted-foreground font-display">BYJU&rsquo;S</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {competitorComparison.map((row, i) => (
                  <tr key={i} className="bg-background">
                    <td className="px-4 py-3 text-foreground font-medium">{row.feature}</td>
                    <td className="px-4 py-3 text-center text-primary font-medium">{row.mindpeak}</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">{row.allen}</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">{row.resonance}</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">{row.fiitjee}</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">{row.byjus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ───── PAYMENT PLANS ───── */}
        <section className="bg-card/30 border-y border-border py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <CreditCard className="w-7 h-7 text-primary" />
              <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl">Flexible Payment Options</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {paymentPlans.map((p, i) => (
                <div key={i} className="p-6 rounded-xl border border-border bg-card">
                  <h3 className="font-display font-bold text-foreground text-lg mb-2">{p.label}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── FAQ ───── */}
        <PageFAQ items={faqs} heading="Pricing" highlight="FAQs" />

        {/* ───── CTA ───── */}
        <section className="bg-primary/10 border-y border-primary/20 py-16 px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-4">
              Ready to <span className="text-gradient-gold">Get Started?</span>
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Book a free trial class. Meet your mentor, get your personalized plan, then decide — zero risk.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={openDemoModal} className="px-12 py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-[0.15em] shadow-gold-glow hover:scale-105 transition-transform">
                Book Free Trial →
              </button>
              <a href="tel:+918219457704" className="px-8 py-4 border border-border text-foreground font-display text-sm uppercase tracking-[0.15em] hover:border-primary hover:text-primary transition-colors flex items-center gap-2">
                <Phone className="w-4 h-4" /> Call Us
              </a>
            </div>
          </motion.div>
        </section>

        <PageFooter extra="Pricing." />
      </main>
    </>
  );
};

export default Pricing;
