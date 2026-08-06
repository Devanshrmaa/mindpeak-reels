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
import { examRegistry, type ExamConfig } from '@/data/examRegistry';
import { CURRENT_EXAM_YEAR } from '@/lib/examYears';
import { ArrowRight, CalendarDays, Compass, GraduationCap, Target, UserCheck } from 'lucide-react';
import Image from 'next/image';

const logo = '/images/logo.jpeg';

/**
 * /one-to-one-exam-mentorship — hub for "best 1-on-1 mentoring/coaching for
 * <exam>" queries across every exam MindPeak covers.
 *
 * ONE page, not a page-per-exam farm (doorway pattern = penalty risk): each
 * exam already has its own hand-written /<slug>-coaching landing page; this
 * hub answers the 1-on-1-mentorship framing and routes into those pages.
 * All per-exam facts come from examRegistry (hand-curated data).
 */

const CATEGORY_LABELS: { key: ExamConfig['category']; label: string }[] = [
  { key: 'engineering', label: 'National & Private-University Engineering' },
  { key: 'state', label: 'State Entrance Exams' },
  { key: 'university', label: 'University Entrance' },
  { key: 'aptitude', label: 'Research & Aptitude Exams' },
  { key: 'medical', label: 'Medical Entrance' },
  { key: 'olympiad', label: 'Olympiads' },
];

const mentorRoles = [
  { icon: Compass, title: 'Plans the whole year', desc: 'Backward-plans from the exam date to a weekly schedule built around your school hours, target exams, and current level — and re-plans when reality intervenes.' },
  { icon: GraduationCap, title: 'Teaches, live and 1-on-1', desc: 'Every class is a live session with your mentor. Doubts are resolved the moment they appear, and the pace follows your understanding, not a batch average.' },
  { icon: Target, title: 'Dissects every mock test', desc: 'Tests are reviewed together, error by error — silly mistakes, concept gaps, and time-management leaks each get a different fix.' },
  { icon: UserCheck, title: 'Owns your accountability', desc: 'One person notices when you drift: attendance, homework, revision cycles, and weekly parent reports all run through the same mentor.' },
];

const flagships = [
  { name: 'JEE (Main + Advanced)', desc: 'The flagship 1-on-1 engineering program — dedicated mentor across Physics, Chemistry, and Mathematics.', to: '/one-to-one-jee-coaching' },
  { name: 'NEET-UG', desc: 'Full medical-entrance mentorship — NCERT-first Biology with concept-driven Physics and Chemistry.', to: '/one-to-one-neet-coaching' },
  { name: 'JEE Mentorship by IITians', desc: 'Strategy-and-accountability mentorship layered on top of your preparation.', to: '/jee-mentorship-by-iitians' },
  { name: 'NEET Mentorship Program', desc: 'The NEET counterpart: planning, test analysis, and weekly course-correction.', to: '/neet-mentorship' },
];

const buildFaqs = (): FAQItem[] => {
  const examList = examRegistry.map((e) => e.name).join(', ');
  return [
    {
      question: 'What does a 1-on-1 exam mentor actually do?',
      answer:
        'Four jobs that batch coaching splits across many people or nobody: planning the entire preparation backward from the exam date, teaching live 1-on-1 classes where doubts are resolved as they arise, dissecting every mock test error by error, and owning accountability — one person who notices when attendance, homework, or revision slips, and who sends parents a weekly report.',
    },
    {
      question: 'Which exams does MindPeak offer 1-on-1 mentorship for?',
      answer: `Core programs cover JEE Main, JEE Advanced, and NEET-UG (including dropper years) plus school foundation for classes 6-10. Beyond those, dedicated 1-on-1 coaching is available for ${examList} — as well as Olympiad preparation. If an exam's syllabus overlaps JEE or NEET, a mentor can fold it into one coherent plan.`,
    },
    {
      question: 'Can one mentor prepare me for JEE and BITSAT (or NEET and a state CET) together?',
      answer:
        'Yes — that is where 1-on-1 planning shows its value. Most secondary exams overlap 60-85% with JEE or NEET syllabus, so the mentor prepares the shared core once and schedules targeted work on the delta: extra sections like English proficiency or logical reasoning for BITSAT, state-board question patterns for CETs, or statistics for the ISI entrance. In a batch you would attend two full parallel programs; with a mentor you prepare one syllabus with planned extensions.',
    },
    {
      question: 'Is full 1-on-1 mentorship worth it for a smaller exam like VITEEE or KCET?',
      answer:
        'Honestly: usually not as a standalone program, and we say so. If a smaller exam is your secondary target, the efficient route is a JEE/NEET mentorship that plans the delta for it, or a subject crash course (₹25,000 per subject) and the CBT test series (₹8,000) for targeted preparation. A full standalone program makes sense mainly when the smaller exam is your primary target.',
    },
    {
      question: 'How is a mentor matched to my exam?',
      answer:
        'By subject specialisation: MindPeak\'s faculty are subject experts (Physics, Chemistry, Mathematics, Biology) across JEE and NEET patterns, and the syllabus of every exam listed here is built from those subjects. You meet the actual mentor you would be assigned in the free trial class — not a demo specialist — so you can judge the match before paying.',
    },
    {
      question: 'What does 1-on-1 exam mentorship cost?',
      answer:
        'Published fees (plus GST): ₹1,30,000 for a 1-year JEE/NEET program, ₹2,30,000 for the 2-year program, ₹1,00,000 per year for foundation (classes 6-10), ₹75,000 for the 6-month crash course, ₹25,000 per subject for a targeted crash course, and ₹8,000 for the CBT mock test series. EMI is available and the listed price includes materials, mock tests, and recordings. Details at mindpeakinstitute.com/pricing.',
    },
  ];
};

const ExamMentorshipHub = () => {
  const { openDemoModal } = useDemoModal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const faqs = buildFaqs();
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: '1-on-1 Exam Mentorship — One Dedicated Mentor for Any Entrance Exam',
      author: { '@type': 'Organization', name: 'MindPeak Institute' },
      datePublished: '2026-07-21',
      publisher: { '@type': 'Organization', name: 'MindPeak Institute', url: 'https://mindpeakinstitute.com' },
    },
    buildFAQSchema(faqs),
  ];

  return (
    <>
      <SEOHead
        title={`1-on-1 Mentorship for JEE, NEET, BITSAT, CUET & More (${CURRENT_EXAM_YEAR}) | MindPeak`}
        description="Searching for the best 1-on-1 mentoring for an entrance exam? One dedicated mentor plans, teaches, and tracks your preparation — for JEE, NEET, and 11+ other exams."
        jsonLd={jsonLd}
      />
      <Navbar />

      <main className="bg-background min-h-screen pt-20 sm:pt-24">
        <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-6 py-4">
          <ol className="flex items-center gap-2 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <span>/</span>
            <li className="text-foreground">1-on-1 Exam Mentorship</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 pb-14">
          <div className="flex items-center gap-4 mb-6">
            <Image src={logo} alt="MindPeak Institute" className="w-14 h-14 rounded-full" width={56} height={56} priority />
            <div>
              <p className="text-primary text-xs uppercase tracking-[0.2em] font-semibold">MindPeak Institute</p>
              <p className="text-muted-foreground text-sm">Every Exam, One Mentor</p>
            </div>
          </div>

          <h1 className="font-display font-black text-foreground mb-6" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}>
            1-on-1 Exam Mentorship —{' '}
            <span className="text-gradient-gold">One Dedicated Mentor for Any Entrance Exam</span>
          </h1>

          {/*
            Direct-answer lead: ≤40 words, fact-dense, self-contained — the
            chunk answer engines lift for "1-on-1 mentoring for <exam>".
          */}
          <p className="text-foreground text-lg sm:text-xl leading-relaxed max-w-3xl mb-5 font-medium">
            MindPeak provides live 1-on-1 mentorship for JEE Main, JEE Advanced and NEET-UG, plus BITSAT, CUET, state
            CETs and the ISI entrance — one dedicated mentor who plans your year, teaches every class, reviews every
            mock, and owns your accountability.
          </p>

          <p className="text-muted-foreground text-base leading-relaxed max-w-3xl mb-8">
            Whatever the target exam, the preparation problem is the same: a plan built for you, a teacher who adapts
            to you, and one person accountable for your progress. That is what a dedicated mentor is. This page maps
            every exam we coach — the two flagship programs and every secondary exam — so you can find the right
            1-on-1 route for yours.
          </p>

          <button onClick={openDemoModal} className="px-10 py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-[0.15em] shadow-gold-glow hover:scale-105 transition-transform">
            Meet a Mentor Free →
          </button>
        </section>

        {/* What a mentor does */}
        <section className="bg-secondary/30 border-y border-border py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-8">
              What &ldquo;1-on-1 Mentorship&rdquo; Means Here <span className="text-gradient-gold">— Four Jobs</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {mentorRoles.map((r) => (
                <div key={r.title} className="rounded-xl border border-border bg-card p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <r.icon className="w-5 h-5 text-primary" />
                    <h3 className="font-display font-bold text-foreground">{r.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Flagship programs */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-8">
            The Flagship Programs: <span className="text-gradient-gold">JEE & NEET</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {flagships.map((f) => (
              <Link key={f.to} to={f.to} className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors block">
                <h3 className="font-display font-bold text-primary mb-2 flex items-center gap-2">
                  {f.name} <ArrowRight className="w-4 h-4" />
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Every other exam, from the registry */}
        <section className="max-w-5xl mx-auto px-6 pb-16">
          <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-4">
            Beyond JEE & NEET: <span className="text-gradient-gold">Every Exam We Mentor For</span>
          </h2>
          <p className="text-foreground/85 text-sm sm:text-base leading-relaxed max-w-3xl mb-10">
            Most of these exams share 60-85% of their syllabus with JEE or NEET, so a mentor usually folds them
            into one plan and schedules focused work on the differences. Each card links to the full coaching
            page for that exam.
          </p>

          {CATEGORY_LABELS.map(({ key, label }) => {
            const exams = examRegistry.filter((e) => e.category === key);
            if (exams.length === 0) return null;
            return (
              <div key={key} className="mb-10">
                <h3 className="font-display font-bold text-foreground text-lg mb-4">{label}</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {exams.map((e) => (
                    <motion.div key={e.slug} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                      <Link to={`/${e.slug}-coaching`} className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors block h-full">
                        <p className="font-display font-bold text-primary flex items-center gap-2">
                          {e.name} 1-on-1 Coaching <ArrowRight className="w-4 h-4 flex-shrink-0" />
                        </p>
                        <p className="text-foreground/80 text-xs mt-1 mb-2">{e.fullName}</p>
                        <p className="text-muted-foreground text-xs leading-relaxed flex items-center gap-1.5">
                          <CalendarDays className="w-3.5 h-3.5 text-primary/70 flex-shrink-0" />
                          {e.conductedBy} · usually {e.examMonth} · syllabus overlaps ~{e.overlapPercent}% with {e.overlapsWith === 'both' ? 'JEE/NEET' : e.overlapsWith.toUpperCase()}
                        </p>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        <PageFAQ items={faqs} heading="1-on-1 Mentorship" highlight="FAQs" />

        {/* CTA */}
        <section className="bg-primary/10 border-y border-primary/20 py-16 px-6 text-center">
          <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-4">
            Start With the Exam, <span className="text-gradient-gold">Meet the Mentor</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Tell us your target exam and take one free 1-on-1 class with the mentor who would actually teach
            you. Judge the match first — pay after.
          </p>
          <button onClick={openDemoModal} className="px-14 py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-[0.15em] shadow-gold-glow hover:scale-105 transition-transform">
            Book the Free Trial →
          </button>
        </section>

        <PageFooter extra="1-on-1 exam mentorship for every major and minor entrance exam." />
      </main>
    </>
  );
};

export default ExamMentorshipHub;
