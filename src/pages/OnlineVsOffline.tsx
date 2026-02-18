import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { PageFooter } from '@/components/PageFooter';
import { PageFAQ, buildFAQSchema } from '@/components/PageFAQ';
import type { FAQItem } from '@/components/PageFAQ';
import { useDemoModal } from '@/components/DemoBookingModal';
import { CheckCircle, XCircle, ArrowRight, Phone, Monitor, Building2, Zap } from 'lucide-react';
import logo from '@/assets/logo.jpeg';

const onlinePros = [
  'Study from home — zero commute time (save 2-4 hrs/day)',
  'Access to top mentors from anywhere in India',
  'Flexible scheduling around school hours',
  'All sessions recorded for unlimited revision',
  'AI-driven adaptive curriculum possible',
  'Significantly lower cost (no travel, hostel, food expenses)',
  'Family support system intact',
  'Real-time analytics and parent dashboards',
];

const onlineCons = [
  'Requires self-discipline (mitigated by 1-on-1 accountability)',
  'Needs stable internet connection',
  'Limited peer interaction (can supplement with online study groups)',
  'Screen fatigue from extended sessions (managed with short, focused sessions)',
];

const offlinePros = [
  'Physical classroom environment creates routine',
  'Direct peer interaction and competition',
  'Immediate physical presence of teacher',
  'Lab access for practical work (rare in coaching)',
];

const offlineCons = [
  'Batch size: 60-200 students — zero personal attention',
  'Fixed schedules — no flexibility',
  'Commute wastes 2-4 hours daily',
  'No recorded sessions for revision',
  'Expensive (tuition + travel + food)',
  'One-size-fits-all curriculum',
  'Doubt resolution limited to crowded sessions',
  'Parents get minimal visibility into progress',
];

const comparisonTable = [
  { feature: 'Personal Attention', online1on1: '100% dedicated mentor', onlineBatch: 'Minimal', offline: 'Minimal (1:100+)' },
  { feature: 'Curriculum', online1on1: 'Adaptive to student', onlineBatch: 'Fixed', offline: 'Fixed' },
  { feature: 'Cost (Annual)', online1on1: '₹1L – ₹2.3L', onlineBatch: '₹30K – ₹1.5L', offline: '₹80K – ₹2.5L+' },
  { feature: 'Commute', online1on1: 'Zero', onlineBatch: 'Zero', offline: '2-4 hrs/day' },
  { feature: 'Recorded Sessions', online1on1: '✓ Every class', onlineBatch: '✓ Some', offline: '✗ No' },
  { feature: 'Doubt Resolution', online1on1: 'Real-time 1-on-1', onlineBatch: 'Chat / limited', offline: 'Crowded sessions' },
  { feature: 'Parent Reports', online1on1: '✓ Weekly', onlineBatch: 'App-based', offline: 'Quarterly PTMs' },
  { feature: 'Flexibility', online1on1: 'High', onlineBatch: 'Moderate', offline: 'Low (fixed batches)' },
  { feature: 'Effectiveness', online1on1: 'Highest (proven by research)', onlineBatch: 'Moderate', offline: 'Varies widely' },
];

const faqs: FAQItem[] = [
  { question: 'Is online coaching as effective as offline for JEE/NEET?', answer: 'Research consistently shows that 1-on-1 online tutoring produces better outcomes than group classroom instruction. The key differentiator is the format: 1-on-1 online coaching is more effective than offline batch coaching because every minute is personalized. Online batch coaching is generally less effective than good offline coaching.' },
  { question: 'What about the social environment of offline coaching?', answer: 'While offline coaching provides peer interaction, this can be supplemented through online study groups, forums, and competitive test series. What matters most for JEE/NEET success is quality of teaching and personal attention — not where you sit.' },
  { question: 'Do I need expensive equipment for online coaching?', answer: 'No. A basic laptop or tablet with a stable internet connection is all you need. Our platform works on mobile data and low-bandwidth connections too. Students can use a phone as backup for any connectivity issues.' },
  { question: 'Can online coaching maintain student discipline?', answer: 'In 1-on-1 coaching, discipline is inherently maintained — your mentor notices if you\'re distracted, tracks daily attendance, and adjusts the approach if motivation drops. It\'s more accountable than a batch classroom where you can hide in the back row.' },
  { question: 'Which type of student benefits most from online 1-on-1 coaching?', answer: 'Students who need personal attention (most students!), those who have tried batch coaching and not seen results, self-motivated learners who want an optimized curriculum, students in tier-2/3 cities without access to great teachers, and families who want transparency and accountability in their child\'s preparation.' },
];

const OnlineVsOffline = () => {
  const { openDemoModal } = useDemoModal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Online vs Offline JEE Coaching — Which Is Better in 2026?',
      author: { '@type': 'Organization', name: 'MindPeak Institute' },
      datePublished: '2026-02-18',
      publisher: { '@type': 'Organization', name: 'MindPeak Institute', url: 'https://mindpeakinstitute.com' },
    },
    buildFAQSchema(faqs),
  ];

  return (
    <>
      <SEOHead
        title="Online vs Offline JEE Coaching — Which Is Better in 2026? | MindPeak"
        description="Honest comparison of online vs offline JEE/NEET coaching. Pros, cons, costs, effectiveness. See why 1-on-1 online coaching outperforms batch classrooms."
        jsonLd={jsonLd}
      />
      <Navbar />

      <main className="bg-background min-h-screen pt-20 sm:pt-24">
        <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-6 py-4">
          <ol className="flex items-center gap-2 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <span>/</span>
            <li className="text-foreground">Online vs Offline JEE Coaching</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 pb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-4 mb-6">
              <img src={logo} alt="MindPeak Institute" className="w-14 h-14 rounded-full" width={56} height={56} />
              <div>
                <p className="text-primary text-xs uppercase tracking-[0.2em] font-semibold">MindPeak Institute</p>
                <p className="text-muted-foreground text-sm">An Honest Comparison</p>
              </div>
            </div>

            <h1 className="font-display font-black text-foreground mb-6" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}>
              Online vs Offline JEE Coaching —{' '}
              <span className="text-gradient-gold">Which Is Better in 2026?</span>
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-8">
              The debate between online and offline coaching has intensified since 2020. With technology matured and results proven, the answer isn&rsquo;t simply "online" or "offline" — it&rsquo;s about the FORMAT of coaching. 1-on-1 online coaching outperforms batch coaching (both online and offline) because personalization beats generic teaching every time. Here&rsquo;s the full picture.
            </p>

            <div className="flex flex-wrap gap-4">
              <button onClick={openDemoModal} className="px-10 py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-[0.15em] shadow-gold-glow hover:scale-105 transition-transform">
                Try 1-on-1 Free →
              </button>
            </div>
          </motion.div>
        </section>

        {/* Pros / Cons Grid */}
        <section className="bg-secondary/30 border-y border-border py-20 px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
            {/* Online */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Monitor className="w-7 h-7 text-primary" />
                <h2 className="font-display font-bold text-foreground text-xl">Online 1-on-1 Coaching</h2>
              </div>
              <div className="mb-6">
                <h3 className="text-primary text-xs uppercase tracking-widest font-semibold mb-3">Pros</h3>
                <ul className="space-y-2">
                  {onlinePros.map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />{p}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-destructive text-xs uppercase tracking-widest font-semibold mb-3">Cons (Mitigated)</h3>
                <ul className="space-y-2">
                  {onlineCons.map((c, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <XCircle className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />{c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Offline */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-7 h-7 text-muted-foreground" />
                <h2 className="font-display font-bold text-foreground text-xl">Offline Batch Coaching</h2>
              </div>
              <div className="mb-6">
                <h3 className="text-primary text-xs uppercase tracking-widest font-semibold mb-3">Pros</h3>
                <ul className="space-y-2">
                  {offlinePros.map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />{p}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-destructive text-xs uppercase tracking-widest font-semibold mb-3">Cons</h3>
                <ul className="space-y-2">
                  {offlineCons.map((c, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />{c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3-Way Comparison Table */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-10">
              Detailed <span className="text-gradient-gold">Comparison</span>
            </h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm min-w-[550px]">
                <thead>
                  <tr className="bg-secondary/50">
                    <th className="text-left px-5 py-3 text-foreground font-display">Feature</th>
                    <th className="text-center px-5 py-3 text-primary font-display font-bold">Online 1-on-1</th>
                    <th className="text-center px-5 py-3 text-muted-foreground font-display">Online Batch</th>
                    <th className="text-center px-5 py-3 text-muted-foreground font-display">Offline Batch</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {comparisonTable.map((row, i) => (
                    <tr key={i} className="bg-background">
                      <td className="px-5 py-3 text-foreground font-medium">{row.feature}</td>
                      <td className="px-5 py-3 text-center text-primary font-medium">{row.online1on1}</td>
                      <td className="px-5 py-3 text-center text-muted-foreground">{row.onlineBatch}</td>
                      <td className="px-5 py-3 text-center text-muted-foreground">{row.offline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </section>

        {/* The Verdict */}
        <section className="bg-card/30 border-y border-border py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Zap className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-4">
              The <span className="text-gradient-gold">Verdict</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              The question isn&rsquo;t "online vs offline" — it&rsquo;s "personalized vs generic." 1-on-1 online coaching combines the accessibility of online learning with the personal attention that makes teaching effective. It eliminates the biggest weaknesses of both traditional offline coaching (no personalization, high cost, commute) and generic online coaching (no accountability, passive learning).
            </p>
            <p className="text-foreground text-lg font-display font-bold">
              MindPeak delivers the best of both worlds: expert mentors + personalized curriculum + home comfort.
            </p>
          </div>
        </section>

        {/* Links */}
        <section className="max-w-5xl mx-auto px-6 py-12">
          <h3 className="font-display font-bold text-foreground text-lg mb-6">Related Pages</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'JEE Coaching', to: '/jee-coaching' },
              { label: 'NEET Coaching', to: '/neet-coaching' },
              { label: 'Kota Alternative', to: '/kota-coaching-alternative' },
              { label: 'MindPeak vs Allen', to: '/mindpeak-vs-allen' },
              { label: 'Pricing', to: '/pricing' },
              { label: 'Free Trial', to: '/free-trial' },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="px-5 py-3 rounded-lg bg-card border border-border text-foreground text-sm hover:border-primary/40 transition-colors flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" /> {l.label}
              </Link>
            ))}
          </div>
        </section>

        <PageFAQ items={faqs} heading="Online vs Offline" highlight="FAQs" />

        <section className="bg-primary/10 border-y border-primary/20 py-16 px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-4">
              Experience 1-on-1 <span className="text-gradient-gold">For Free</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don&rsquo;t take our word for it — try a free 1-on-1 session and see how it compares to batch coaching.
            </p>
            <button onClick={openDemoModal} className="px-14 py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-[0.15em] shadow-gold-glow hover:scale-105 transition-transform">
              Book Free Trial →
            </button>
          </motion.div>
        </section>

        <PageFooter extra="Online vs Offline JEE Coaching." />
      </main>
    </>
  );
};

export default OnlineVsOffline;
