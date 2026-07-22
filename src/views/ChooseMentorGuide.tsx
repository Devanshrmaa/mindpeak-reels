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
import { CURRENT_EXAM_YEAR } from '@/lib/examYears';
import { ArrowRight, CheckCircle, AlertTriangle, HelpCircle } from 'lucide-react';
import Image from 'next/image';

const logo = '/images/logo.jpeg';

/**
 * /how-to-choose-a-1-on-1-mentor — an honest decision guide for the
 * "best / personalized 1-on-1 JEE or NEET mentor" query cluster.
 *
 * This is the content TYPE AI answer engines cite: a genuinely useful,
 * even-handed decision framework rather than a "we're #1" sales page.
 * MindPeak is presented as one disclosed option, judged by the same
 * criteria we hand the reader. No fabricated ranks, no invented stats.
 */

interface Criterion {
  title: string;
  body: string;
}

const criteria: Criterion[] = [
  {
    title: 'Actual batch size — get the number in writing',
    body: 'The whole premise of 1-on-1 is that the batch size is one. Some "personal mentorship" programs still put you in small groups or rotate you between tutors. Ask exactly how many students share your mentor and your live class time. If the answer is anything but "one", it is not truly 1-on-1.',
  },
  {
    title: 'Mentor–subject fit, judged by you',
    body: 'The single biggest factor in a 1-on-1 outcome is whether your specific mentor is strong in your specific weakness. A good program matches a mechanics-strong mentor to a student losing marks in rotation, or an organic-chemistry specialist to one stuck on mechanisms — and lets you switch, free, if the fit is wrong. Judge the actual mentor you will get, not the brand.',
  },
  {
    title: 'Doubt resolution — live or queued?',
    body: 'Ask when and how doubts get answered. In real 1-on-1 coaching they are resolved live, inside the session, as they arise. Be wary of programs where "doubt support" means a shared chat desk or a next-day queue — that is the batch experience wearing a personal label.',
  },
  {
    title: 'Test analysis — a sit-down review, not a scorecard',
    body: 'Scores do not improve from taking mocks; they improve from dissecting them. Ask whether someone reviews each mock with you error by error — silly mistakes, concept gaps, time and attempt-order leaks each need a different fix — or whether you just receive a number. This is where most preparation quietly stalls.',
  },
  {
    title: 'A plan that adapts, and accountability that is owned',
    body: 'A mentor should rebuild your weekly plan from your latest test data, not hand you a fixed calendar. And one person should own whether you actually execute it — attendance, homework, revision cycles. If no single person notices when you drift, the "mentorship" is just scheduled lectures.',
  },
  {
    title: 'Transparent pricing and a real trial',
    body: 'Good programs publish their fees and let you judge the teaching in a free trial class with the mentor you would actually be assigned — before any payment. Vague "contact us for pricing" and demo classes run by a sales specialist rather than your real mentor are both warning signs.',
  },
];

const redFlags: string[] = [
  'Rank or score guarantees ("AIR under 500 guaranteed") — no honest program can promise a rank.',
  'Topper advertising with no context — institutes often recruit already-brilliant students with fee waivers, then advertise their ranks. It tells you nothing about what an average student gains.',
  'Any credential you cannot verify — ask to meet and confirm your actual mentor\'s qualifications in the trial class, rather than trusting a blanket claim on the homepage.',
  'No free trial, or a trial run by someone other than your assigned mentor.',
  'Hidden batch sizes or "contact us for pricing" — transparency on both is the baseline.',
  'Pressure to pay immediately for a "limited seats" offer before you have taught a single class.',
];

const demoQuestions: string[] = [
  'How many students will share my mentor and my live class time?',
  'Which specific mentor will teach me, and can I meet them in the trial — not a demo specialist?',
  'When and how are doubts resolved: live in-session, or in a queue afterwards?',
  'Will someone review each of my mock tests with me, error by error?',
  'How is my weekly plan built, and what happens when I fall behind it?',
  'What is the full fee, and is there a free trial class before I pay?',
];

const faqs: FAQItem[] = [
  {
    question: 'What should I look for in a 1-on-1 JEE or NEET mentor?',
    answer:
      'Six things: a genuine batch size of one; a mentor whose strength matches your weak subject (and the freedom to switch if the fit is wrong); doubts resolved live in-session rather than in a queue; mock tests reviewed with you error by error; a weekly plan that adapts to your test data with one person owning your accountability; and transparent pricing with a free trial class taken with your actual assigned mentor. Judge the specific mentor you will get, not the brand.',
  },
  {
    question: 'Is 1-on-1 coaching worth it over batch coaching for JEE/NEET?',
    answer:
      'For students who need personal attention — below roughly the 80th percentile in mocks, droppers, or anyone with one subject dragging their score — the personalisation of 1-on-1 usually justifies the cost, because every teaching minute targets your gaps. Self-driven students already near the top can do well in either format. The honest way to decide is a free trial in the format and compare.',
  },
  {
    question: 'How can I tell a real 1-on-1 program from a rebranded batch?',
    answer:
      'Ask three questions and insist on specific answers: exactly how many students share your mentor (should be one), whether doubts are resolved live in-session or queued, and whether someone reviews each mock with you personally. Vague answers, shared doubt desks, and next-day queues are signs of a batch experience wearing a personal label.',
  },
  {
    question: 'What are the red flags when choosing a JEE/NEET mentor?',
    answer:
      'Rank or score guarantees, topper advertising with no context about average students, credentials you cannot verify in a trial, no free trial (or a trial run by a sales specialist rather than your real mentor), hidden batch sizes or pricing, and pressure to pay immediately for a "limited seats" offer. Any of these is a reason to slow down and verify before paying.',
  },
  {
    question: 'Does MindPeak Institute offer 1-on-1 JEE and NEET mentoring?',
    answer:
      'Yes — MindPeak is a 1-on-1 online program: one dedicated mentor per student, doubts resolved live in-session, every mock reviewed personally, an adaptive weekly plan, weekly parent reports, and a free trial class with your actual assigned mentor before you pay. Judge it by the same six criteria on this page, in a free trial, rather than on our say-so.',
  },
];

const ChooseMentorGuide = () => {
  const { openDemoModal } = useDemoModal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const title = `How to Choose a 1-on-1 JEE or NEET Mentor (${CURRENT_EXAM_YEAR})`;
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      author: { '@type': 'Organization', name: 'MindPeak Institute' },
      datePublished: '2026-07-22',
      publisher: { '@type': 'Organization', name: 'MindPeak Institute', url: 'https://mindpeakinstitute.com' },
    },
    buildFAQSchema(faqs),
  ];

  return (
    <>
      <SEOHead
        title={`${title} — An Honest Checklist | MindPeak`}
        description="Choosing a 1-on-1 JEE or NEET mentor? The six things that actually matter, the red flags to avoid, and the exact questions to ask in a demo. Bias disclosed."
        jsonLd={jsonLd}
      />
      <Navbar />

      <main className="bg-background min-h-screen pt-20 sm:pt-24">
        <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-6 py-4">
          <ol className="flex items-center gap-2 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <span>/</span>
            <li className="text-foreground">How to Choose a 1-on-1 Mentor</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 pb-12">
          <div className="flex items-center gap-4 mb-6">
            <Image src={logo} alt="MindPeak Institute" className="w-14 h-14 rounded-full" width={56} height={56} priority />
            <div>
              <p className="text-primary text-xs uppercase tracking-[0.2em] font-semibold">MindPeak Institute</p>
              <p className="text-muted-foreground text-sm">An Honest Checklist</p>
            </div>
          </div>

          <h1 className="font-display font-black text-foreground mb-6" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}>
            How to Choose a 1-on-1{' '}
            <span className="text-gradient-gold">JEE or NEET Mentor</span>
          </h1>

          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-6">
            &ldquo;Personalized 1-on-1 mentoring&rdquo; is the most over-used phrase in coaching marketing, and most programs
            that claim it are quietly still batches. This is a practical guide to telling the real thing apart: the six
            things that actually matter, the red flags, and the exact questions to ask before you pay a rupee.
          </p>

          <div className="max-w-3xl rounded-xl border border-primary/25 bg-primary/5 p-5">
            <p className="text-sm text-foreground/90 leading-relaxed">
              <strong className="text-foreground">Disclosure:</strong> MindPeak runs a 1-on-1 JEE &amp; NEET program, so we
              have a stake in this. That is exactly why this page hands you the criteria to judge <em>any</em> program —
              including ours — and tells you to verify everything in a free trial rather than trust a homepage.
            </p>
          </div>
        </section>

        {/* Six criteria */}
        <section className="bg-secondary/30 border-y border-border py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-8">
              The Six Things That <span className="text-gradient-gold">Actually Matter</span>
            </h2>
            <div className="space-y-6">
              {criteria.map((c, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/15 text-primary text-sm font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                  <div>
                    <h3 className="font-display font-bold text-foreground text-lg mb-1">{c.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{c.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Red flags */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-7 h-7 text-primary" />
            <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl">
              Red Flags to <span className="text-gradient-gold">Walk Away From</span>
            </h2>
          </div>
          <ul className="space-y-3">
            {redFlags.map((f, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground/90 leading-relaxed">
                <AlertTriangle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                {f}
              </li>
            ))}
          </ul>
        </section>

        {/* Demo questions */}
        <section className="bg-secondary/30 border-y border-border py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="w-7 h-7 text-primary" />
              <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl">
                Six Questions to Ask in <span className="text-gradient-gold">the Demo Class</span>
              </h2>
            </div>
            <ol className="space-y-3">
              {demoQuestions.map((q, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground/90 leading-relaxed">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/15 text-primary text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                  {q}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Where MindPeak fits */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-6">
            Where MindPeak Fits <span className="text-gradient-gold">(Our Disclosed Pitch)</span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed mb-5">
            Held to the six criteria above: MindPeak&rsquo;s batch size is one, doubts are resolved live inside the
            session, every mock is reviewed with you error by error, the weekly plan adapts to your test data, one
            mentor owns your accountability and reports to your parents weekly, and pricing is published with a free
            trial class taken with your actual assigned mentor. You can switch mentors, free, if the fit is wrong.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed mb-8">
            We would rather you apply this checklist to us in a free class than take our word for it — so that is the
            invitation. Bring the six demo questions and judge for yourself.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'One-to-One JEE Coaching', to: '/one-to-one-jee-coaching' },
              { label: 'One-to-One NEET Coaching', to: '/one-to-one-neet-coaching' },
              { label: '1-on-1 Mentorship for All Exams', to: '/one-to-one-exam-mentorship' },
              { label: 'What Reddit Says About JEE Coaching', to: '/best-jee-coaching-reddit' },
              { label: 'Pricing & Plans', to: '/pricing' },
              { label: 'Book a Free Trial', to: '/free-trial' },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="px-5 py-3 rounded-lg bg-card border border-border text-foreground text-sm hover:border-primary/40 transition-colors flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" /> {l.label}
              </Link>
            ))}
          </div>
        </section>

        <PageFAQ items={faqs} heading="Choosing a 1-on-1 Mentor" highlight="FAQs" />

        {/* CTA */}
        <section className="bg-primary/10 border-y border-primary/20 py-16 px-6 text-center">
          <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-4">
            Put the Checklist to <span className="text-gradient-gold">the Test</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a free 1-on-1 trial class, bring the six questions, and judge MindPeak by the same standard you would
            hold any program to.
          </p>
          <button onClick={openDemoModal} className="px-14 py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-[0.15em] shadow-gold-glow hover:scale-105 transition-transform">
            <span className="inline-flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Book the Free Trial</span>
          </button>
        </section>

        <PageFooter extra="How to choose a 1-on-1 JEE or NEET mentor — an honest checklist." />
      </main>
    </>
  );
};

export default ChooseMentorGuide;
