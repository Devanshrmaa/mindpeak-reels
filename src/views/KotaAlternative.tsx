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
import { CheckCircle, XCircle, ArrowRight, Phone, ShieldCheck, AlertTriangle, Home, Heart, Users, BarChart3 } from 'lucide-react';
import Image from 'next/image';
const logo = '/images/logo.jpeg';

/* ─── data ─── */

const kotaProblems = [
  { icon: AlertTriangle, title: 'Extremely Expensive', desc: 'Kota coaching costs ₹1.5L+ in tuition fees alone. Add ₹50K–₹80K for hostel, ₹30K for food, and miscellaneous expenses. Total: ₹2L–₹2.5L per year. That\'s 3-4x the cost of premium online personalized coaching.' },
  { icon: Home, title: 'Away from Home at 15-16', desc: 'Sending a teenager to live alone in a new city creates emotional stress, homesickness, and often leads to poor mental health. Studies show that over 60% of Kota students report anxiety and loneliness — directly impacting preparation quality.' },
  { icon: Users, title: 'Batch Teaching (100+ Students)', desc: 'The same factory-model that fails in your home city. Kota\'s biggest institutes pack 100-200 students per batch. Your child is a number, not a name. Individual weaknesses go unaddressed; doubts pile up; and the pace is dictated by the class, not your child.' },
  { icon: BarChart3, title: 'Success Rate Myth', desc: 'Kota institutes advertise tops results but rarely mention the thousands who don\'t make it. The actual success rate (students who get meaningful ranks vs. total enrolled) is often below 15% at most institutes. The vast majority leave disappointed after 2 years.' },
];

const comparisonTable = [
  { feature: 'Teaching Format', mindpeak: '1-on-1 Online with Dedicated Mentor', kota: 'Batch Coaching (100-200 students)' },
  { feature: 'Total Annual Cost', mindpeak: '₹1L – ₹2.3L (all-inclusive)', kota: '₹2L – ₹2.5L (tuition + living)' },
  { feature: 'Location', mindpeak: 'Study from home (family support)', kota: 'Away from home (alone in Kota)' },
  { feature: 'Personal Attention', mindpeak: 'Dedicated mentor for 1 student', kota: '1 teacher for 100-200 students' },
  { feature: 'Curriculum', mindpeak: 'Adaptive & personalized to student', kota: 'Fixed, one-size-fits-all' },
  { feature: 'Doubt Resolution', mindpeak: 'Real-time, 1-on-1 during sessions', kota: 'Crowded doubt counters (long waits)' },
  { feature: 'Parent Involvement', mindpeak: 'Weekly reports & monthly calls', kota: 'Quarterly PTMs (if any)' },
  { feature: 'Schedule Flexibility', mindpeak: 'Flexible, fits school calendar', kota: 'Fixed batches, rigid schedules' },
  { feature: 'Mental Health', mindpeak: 'Home environment, family support', kota: 'High stress, isolation risk' },
  { feature: 'Recorded Sessions', mindpeak: '✓ Every class recorded', kota: '✗ Not available' },
  { feature: 'Board Exam Support', mindpeak: '✓ Integrated board prep', kota: '✗ Separate or ignored' },
];

const parentTestimonials = [
  { name: 'Mrs. Sharma', city: 'Delhi', quote: 'We were planning to send our son to Kota but the thought of a 16-year-old living alone terrified us. MindPeak gave us the best of both worlds — expert coaching at home. He got AIR under 3K without leaving Delhi.' },
  { name: 'Mr. Patel', city: 'Ahmedabad', quote: 'Our daughter\'s friend went to Kota and came back after 6 months due to mental health issues. We chose MindPeak instead. The weekly parent reports give us complete visibility. She\'s now scoring 680+ in NEET mocks.' },
  { name: 'Mrs. Reddy', city: 'Hyderabad', quote: 'The total cost comparison convinced us. For less than half the Kota expense, our child gets a dedicated mentor. The results speak for themselves — our son improved by 180 marks in JEE mocks in just 5 months.' },
];

const faqs: FAQItem[] = [
  { question: 'Is online coaching really as effective as Kota coaching?', answer: 'Yes — and often more effective. MindPeak\'s 1-on-1 format ensures 100% personal attention, adaptive curriculum, and real-time doubt resolution. Our students have achieved AIR 42 in JEE Advanced and 98.5+ percentile in NEET — results that match or exceed Kota\'s top institutes. The key difference: in batch coaching, only a few students benefit while most are left behind. In 1-on-1 coaching, every student gets the attention they need.' },
  { question: 'How do you ensure discipline without the Kota environment?', answer: 'Discipline comes from consistency, accountability, and motivation — not from a city. Your dedicated mentor conducts daily sessions (6 days/week), tracks progress through weekly analytics, and maintains accountability through regular assessments. Parents receive weekly reports. Students who feel supported and see measurable progress are naturally more disciplined than those stressed in a hostel.' },
  { question: 'What if my child needs in-person teaching?', answer: 'Our live 1-on-1 video sessions with real-time whiteboard interaction are as close to in-person as it gets — with the added benefit that every session is recorded for revision. Studies show that 1-on-1 online learning produces equal or better outcomes than in-person batch teaching. Your child gets MORE teacher interaction per hour than they would in any Kota classroom.' },
  { question: 'How much can I save compared to Kota?', answer: 'Kota coaching costs ₹2L–₹2.5L per year (tuition ₹1.5L + hostel ₹50K-80K + food/transport). MindPeak\'s 1-year program starts at ₹1.3L all-inclusive after discount (no travel, hostel, or hidden costs). That\'s a saving of ₹70K–₹1.2L per year — while getting more personalized attention.' },
  { question: 'Do you have students who chose MindPeak over Kota and succeeded?', answer: 'Absolutely. Many of our students were planning to go to Kota or had already been there. They switched to MindPeak and achieved comparable or better results. Our AIR 42 achiever, for example, chose MindPeak over Kota and credits the personalized attention for his success.' },
];

/* ─── page ─── */

const KotaAlternative = () => {
  const { openDemoModal } = useDemoModal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Best Alternative to Kota Coaching — MindPeak Institute',
      description: 'MindPeak offers personalized online JEE/NEET coaching as a better, cheaper, safer alternative to Kota coaching. 60% cheaper, study from home, 95% success rate.',
      url: 'https://mindpeakinstitute.com/kota-coaching-alternative',
    },
    buildFAQSchema(faqs),
  ];

  return (
    <>
      <SEOHead
        title="Best Alternative to Kota Coaching — Online 1-on-1 JEE/NEET Preparation | MindPeak"
        description="Why send your child to Kota? Get personalized 1-on-1 JEE/NEET coaching at home. 60% cheaper, dedicated mentor, 95% success rate. The smarter Kota alternative."
        jsonLd={jsonLd}
      />
      <Navbar />

      <main className="bg-background min-h-screen pt-20 sm:pt-24">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-6 py-4">
          <ol className="flex items-center gap-2 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <span>/</span>
            <li className="text-foreground">Kota Coaching Alternative</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 pb-16">
          <motion.div animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-4 mb-6">
              <Image src={logo} alt="MindPeak Institute" className="w-14 h-14 rounded-full" width={56} height={56} priority />
              <div>
                <p className="text-primary text-xs uppercase tracking-[0.2em] font-semibold">MindPeak Institute</p>
                <p className="text-muted-foreground text-sm">The Smarter Alternative to Kota</p>
              </div>
            </div>

            <h1 className="font-display font-black text-foreground mb-6" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}>
              Best Alternative to <span className="text-gradient-gold">Kota Coaching</span> — Online Personalized JEE/NEET Preparation
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-8">
              Every year, lakhs of families face the agonizing decision: send their 15-16 year old child to Kota, or hope for the best locally. But what if there was a third option — one that combines expert-level coaching with the safety of home, at a fraction of the cost? MindPeak Institute offers personalized 1-on-1 online JEE and NEET coaching that has produced results matching Kota&rsquo;s top institutes, while keeping students where they belong — with their families.
            </p>

            <div className="flex flex-wrap gap-4">
              <button onClick={openDemoModal} className="px-10 py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-[0.15em] shadow-gold-glow hover:scale-105 transition-transform">
                Book Free Trial →
              </button>
              <a href="tel:+918219457704" className="px-8 py-4 border border-border text-foreground font-display text-sm uppercase tracking-[0.15em] hover:border-primary hover:text-primary transition-colors flex items-center gap-2">
                <Phone className="w-4 h-4" /> Call Us
              </a>
            </div>
          </motion.div>
        </section>

        {/* Stats */}
        <section className="bg-secondary/30 border-y border-border py-10 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '60%', label: 'Cheaper Than Kota' },
              { value: '1-on-1', label: 'Not 1:200 Batch' },
              { value: 'Home', label: 'Study From Home' },
              { value: '95%', label: 'Success Rate' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display font-black text-primary text-2xl md:text-3xl mb-1">{s.value}</div>
                <div className="text-muted-foreground text-xs uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* The Kota Problem */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-4">
              The <span className="text-gradient-gold">Kota Problem</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed max-w-3xl mb-10">
              Kota has become synonymous with JEE/NEET coaching, but the reality is far more nuanced than the advertisements suggest. Here&rsquo;s what they don&rsquo;t tell you in the brochures.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {kotaProblems.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="rounded-xl border border-destructive/30 bg-destructive/5 p-6">
                  <p.icon className="w-7 h-7 text-destructive mb-3" />
                  <h3 className="font-display font-bold text-foreground text-lg mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Comparison Table */}
        <section className="bg-card/30 border-y border-border py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-10">
                MindPeak vs Kota — <span className="text-gradient-gold">Side by Side</span>
              </h2>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm min-w-[500px]">
                  <thead>
                    <tr className="bg-secondary/50">
                      <th className="text-left px-5 py-3 text-foreground font-display">Feature</th>
                      <th className="text-center px-5 py-3 text-primary font-display font-bold">MindPeak</th>
                      <th className="text-center px-5 py-3 text-muted-foreground font-display">Kota Coaching</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {comparisonTable.map((row, i) => (
                      <tr key={i} className="bg-background">
                        <td className="px-5 py-3 text-foreground font-medium">{row.feature}</td>
                        <td className="px-5 py-3 text-center text-primary">{row.mindpeak}</td>
                        <td className="px-5 py-3 text-center text-muted-foreground">{row.kota}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What Parents Say */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-10">
              What <span className="text-gradient-gold">Parents Say</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {parentTestimonials.map((t, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="rounded-xl border border-border bg-card p-6">
                  <Heart className="w-6 h-6 text-primary mb-4" />
                  <p className="text-muted-foreground text-sm leading-relaxed italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <p className="font-display font-bold text-foreground text-sm">{t.name}</p>
                    <p className="text-muted-foreground text-xs">{t.city}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Internal Links */}
        <section className="bg-card/30 border-y border-border py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <h3 className="font-display font-bold text-foreground text-lg mb-6">Explore More</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'JEE Coaching', to: '/jee-coaching' },
                { label: 'NEET Coaching', to: '/neet-coaching' },
                { label: 'Pricing', to: '/pricing' },
                { label: 'Online vs Offline Coaching', to: '/online-vs-offline-jee-coaching' },
                { label: 'MindPeak vs Allen', to: '/mindpeak-vs-allen' },
                { label: 'MindPeak vs FIITJEE', to: '/mindpeak-vs-fiitjee' },
                { label: 'Free Trial', to: '/free-trial' },
              ].map((l) => (
                <Link key={l.to} to={l.to} className="px-5 py-3 rounded-lg bg-card border border-border text-foreground text-sm hover:border-primary/40 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-primary" /> {l.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <PageFAQ items={faqs} heading="Kota Alternative" highlight="FAQs" />

        {/* CTA */}
        <section className="bg-primary/10 border-y border-primary/20 py-16 px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-4">
              Skip Kota. Start <span className="text-gradient-gold">Smarter.</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Give your child the coaching quality of Kota — without the cost, distance, or stress. Book a free trial and see the difference.
            </p>
            <button onClick={openDemoModal} className="px-14 py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-[0.15em] shadow-gold-glow hover:scale-105 transition-transform">
              Book Free Trial Class →
            </button>
          </motion.div>
        </section>

        <PageFooter extra="Kota Coaching Alternative." />
      </main>
    </>
  );
};

export default KotaAlternative;
