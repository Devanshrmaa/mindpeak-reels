"use client";

import { useEffect } from 'react';
import { Link } from '@/components/RouterLink';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Navbar } from '@/components/sections/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { PageFooter } from '@/components/PageFooter';
import { PageFAQ, buildFAQSchema } from '@/components/PageFAQ';
import type { FAQItem } from '@/components/PageFAQ';
import { useDemoModal } from '@/components/DemoBookingModal';
import { FeaturedSnippet } from '@/components/FeaturedSnippet';
import { FreshnessBadge } from '@/components/FreshnessBadge';
import { FadeInView } from '@/components/FadeInView';
import { CtaBanner } from '@/components/CtaBanner';
import { getLastUpdated, getCurrentExamYear } from '@/lib/contentFreshness';
import { CURRENT_EXAM_YEAR } from '@/lib/examYears';
import { PeopleAlsoAsk } from '@/components/PeopleAlsoAsk';
import { RelatedPages } from '@/components/RelatedPages';
import type { PAAQuestion } from '@/components/PeopleAlsoAsk';
import {
  Users, BarChart3, Target, ArrowRight, BookOpen,
  Clock, Brain, Zap, ShieldCheck, Phone, Microscope,
} from 'lucide-react';

/* Lazy-load below-fold heavy components */
const ExamCountdown = dynamic(() => import('@/components/ExamCountdown').then(m => ({ default: m.ExamCountdown })), { ssr: false });
const SeasonalBanner = dynamic(() => import('@/components/SeasonalBanner').then(m => ({ default: m.SeasonalBanner })), { ssr: false });
const StudyPlanSection = dynamic(() => import('@/components/StudyPlanSection').then(m => ({ default: m.StudyPlanSection })), { ssr: false });
const MonthlySuccessStory = dynamic(() => import('@/components/MonthlySuccessStory').then(m => ({ default: m.MonthlySuccessStory })), { ssr: false });
const WeeklyTip = dynamic(() => import('@/components/WeeklyTip').then(m => ({ default: m.WeeklyTip })), { ssr: false });

/* ─── data ─── */

const stats = [
  { value: '500+', label: 'Students Mentored' },
  { value: '95%', label: 'Success Rate' },
  { value: 'Top 100', label: 'NEET All India' },
  { value: '50+', label: 'Medical College Selects' },
];

const batchProblems = [
  { icon: Users, title: '100+ Students Per Batch', desc: 'In massive NEET batches, Biology — which carries 360 out of 720 marks — gets the same generic treatment for every student. Whether you struggle with Genetics or breeze through Ecology, the pace never adapts. Your individual weaknesses stay hidden in the crowd.' },
  { icon: Target, title: 'Biology Gets Neglected', desc: 'Most batch centres prioritize Physics and Chemistry (the "hard" subjects), giving Biology proportionally less attention. But Biology is the highest-scoring subject in NEET and requires targeted, detailed preparation — especially Botany and subtopics like Plant Physiology and Morphology.' },
  { icon: BarChart3, title: 'No Personalized NEET Strategy', desc: 'NEET requires a different strategy than JEE. The emphasis on NCERT, the pattern of assertion-reason questions, and the Biology-heavy marking scheme demand a tailored approach. One-size-fits-all batch coaching misses these NEET-specific nuances.' },
];

const methodology = [
  { icon: Users, title: 'Dedicated NEET Mentor', desc: 'Your personal mentor — typically an AIIMS/top medical college alumnus — guides your entire NEET journey. They know your strengths in Zoology, your struggles in Physical Chemistry, and your exam-day anxiety triggers. This deep understanding drives results.' },
  { icon: Microscope, title: 'Biology-First Approach', desc: 'Since Biology accounts for 50% of NEET marks, our curriculum front-loads comprehensive Biology preparation. Every NCERT line is covered. Botany and Zoology receive dedicated daily sessions with diagram-based learning and assertion-reason practice.' },
  { icon: Brain, title: 'Adaptive Curriculum', desc: 'Diagnostic tests map your exact knowledge gaps. Your study plan evolves weekly — spending more time on Organic Chemistry if that\'s your weakness, accelerating through Mechanics if you\'re strong. Zero wasted preparation hours.' },
  { icon: Clock, title: '1-on-1 Live Sessions (6 Days/Week)', desc: 'Daily live video classes with your dedicated mentor. Short, focused sessions for maximum retention. Every class recorded for revision. Flexible scheduling around your school hours and board exam preparation.' },
  { icon: BarChart3, title: 'NEET-Specific Mock Tests', desc: 'Regular full-length NEET mock tests in the exact exam pattern — 200 questions, 200 minutes. Detailed analysis identifies topic-wise accuracy, negative marking patterns, and time management issues. CBT format simulates the real exam.' },
  { icon: ShieldCheck, title: 'NCERT Mastery Program', desc: '90% of NEET questions come from NCERT. Our NCERT mastery track ensures line-by-line coverage of Biology, Chemistry, and Physics NCERT textbooks. Mentors quiz you on every diagram, table, and footnote.' },
];

const testimonials = [
  { name: 'Ananya Reddy', city: 'Hyderabad', rank: 'NEET 98.5%ile', before: 420, after: 680, quote: 'I was scoring 420 in mock tests despite studying 10 hours a day. My MindPeak mentor identified that my Biology preparation was surface-level — I was memorizing without understanding. The 1-on-1 NCERT deep-dive sessions transformed my Biology score from 260 to 340. I finally got into my dream medical college.' },
  { name: 'Sneha Gupta', city: 'Patna', rank: 'NEET 97.8%ile', before: 380, after: 650, quote: 'Coming from a tier-3 city, I didn\'t have access to quality NEET coaching. MindPeak gave me a mentor who was an AIIMS alumnus. The personalized attention I received was something no coaching centre in Patna could have provided. My score jumped by 270 marks in 8 months.' },
  { name: 'Karthik Nair', city: 'Kochi', rank: 'NEET 96.2%ile', before: 450, after: 640, quote: 'Physics was my Achilles heel — I\'d consistently score below 100. My mentor created a Physics-focused plan with daily problem-solving sessions. In 6 months, my Physics score went from 80 to 155. The adaptive approach made all the difference.' },
];

const syllabus = [
  {
    subject: 'Biology (Botany + Zoology)',
    chapters: 38,
    marks: '360 / 720',
    topics: ['Cell Biology & Molecular Biology', 'Genetics & Evolution (Mendelian, Molecular)', 'Human Physiology (All Systems)', 'Plant Physiology (Photosynthesis, Respiration, Growth)', 'Ecology & Environment', 'Biotechnology & Its Applications', 'Animal & Plant Morphology'],
  },
  {
    subject: 'Chemistry',
    chapters: 30,
    marks: '180 / 720',
    topics: ['Physical Chemistry (Solutions, Electrochemistry, Chemical Kinetics)', 'Organic Chemistry (Hydrocarbons, Biomolecules, Polymers)', 'Inorganic Chemistry (d-Block, Coordination, p-Block)', 'General Chemistry (Atomic Structure, Bonding)', 'Chemistry in Everyday Life'],
  },
  {
    subject: 'Physics',
    chapters: 25,
    marks: '180 / 720',
    topics: ['Mechanics (Laws of Motion, Work-Energy, Rotational)', 'Electrodynamics (Current, Magnetism, EMI)', 'Optics (Ray & Wave Optics)', 'Modern Physics (Atoms, Nuclei, Semiconductors)', 'Thermodynamics & Kinetic Theory'],
  },
];

const pricingComparison = [
  { feature: 'Teaching Format', mindpeak: '1-on-1 Online', allen: 'Batch (100+)', aakash: 'Batch (80+)', byjus: 'Recorded + Batch' },
  { feature: 'Annual Fees', mindpeak: '₹1,00,000 – ₹2,30,000', allen: '₹1,20,000+', aakash: '₹1,10,000+', byjus: '₹1,50,000+' },
  { feature: 'Personal Mentor', mindpeak: '✓ Dedicated', allen: '✗ Shared', aakash: '✗ Shared', byjus: '✗ No' },
  { feature: 'Biology Focus', mindpeak: '✓ 50% Curriculum', allen: 'Equal Split', aakash: 'Equal Split', byjus: 'Generic' },
  { feature: 'NCERT Line-by-Line', mindpeak: '✓ Comprehensive', allen: 'Partial', aakash: 'Partial', byjus: '✗ No' },
  { feature: 'Doubt Resolution', mindpeak: '✓ Real-time 1-on-1', allen: 'Group Sessions', aakash: 'Limited Slots', byjus: 'Chat Support' },
  { feature: 'Parent Reports', mindpeak: '✓ Weekly', allen: 'Quarterly', aakash: 'Monthly', byjus: 'App-Based' },
  { feature: 'Travel Time', mindpeak: 'Zero (Online)', allen: '1-2 hrs/day', aakash: '1-2 hrs/day', byjus: 'N/A' },
];

const paaQuestions: PAAQuestion[] = [
  { question: 'Is online NEET coaching effective?', answer: 'Yes — personalized online NEET coaching is highly effective. MindPeak\'s 1-on-1 model with Biology-first approach and NCERT mastery consistently produces 95%+ percentile results. Students gain 150-250 marks on average, with dedicated mentors from AIIMS and top medical colleges guiding every session.' },
  { question: 'How much does NEET coaching cost?', answer: 'NEET coaching ranges from ₹50,000 to ₹3,00,000 annually. Allen and Aakash charge ₹1-1.5 lakh for batch coaching. MindPeak\'s personalized 1-on-1 NEET coaching starts at ₹1,00,000/year with Biology-focused curriculum, NCERT line-by-line coverage, and dedicated mentorship — better value per hour.' },
  { question: 'How important is NCERT for NEET?', answer: 'NCERT is critical for NEET — approximately 90% of NEET questions are directly or indirectly from NCERT textbooks. MindPeak\'s NCERT Mastery Program ensures line-by-line coverage of every diagram, table, and footnote across Biology, Chemistry, and Physics NCERT books.' },
  { question: 'Can I crack NEET in one year?', answer: 'Yes, cracking NEET in one year is possible with focused, personalized preparation. MindPeak\'s 1-year NEET program provides an intensive study plan with daily sessions, weekly mock tests, and targeted Biology preparation. Multiple MindPeak students have scored 650+ in NEET within 8-12 months.' },
  { question: 'How many hours should I study for NEET?', answer: '6-8 hours of quality, focused study daily is ideal for NEET preparation. Biology deserves 50% of your study time matching its 360/720 marks weightage. Personalized coaching ensures every hour counts by targeting your specific weak chapters rather than generic revision.' },
  { question: 'Is NEET harder than JEE?', answer: 'NEET and JEE test different skills. NEET emphasizes factual recall and NCERT mastery while JEE tests conceptual problem-solving. NEET has higher competition (20 lakh+ applicants) but different preparation strategy. MindPeak provides exam-specific coaching optimized for NEET\'s unique pattern.' },
];

const faqs: FAQItem[] = [
  { question: 'What makes MindPeak\'s NEET coaching different?', answer: 'MindPeak provides dedicated 1-on-1 mentorship with a Biology-first approach — since Biology accounts for 50% of NEET marks. Every student gets a personal mentor (typically AIIMS/top medical college alumni), an adaptive curriculum, daily live sessions 6 days a week, and comprehensive NCERT line-by-line coverage. Unlike batch coaching, every minute of your preparation is personalized.' },
  { question: 'How does MindPeak handle Biology preparation for NEET?', answer: 'Biology receives proportionally the highest focus in our NEET curriculum — matching its 360/720 mark weightage. We cover every NCERT Biology chapter line-by-line, including diagrams, tables, and footnotes. Daily Biology sessions include diagram-based learning, assertion-reason practice, and NCERT-based MCQ drills. Both Botany and Zoology receive dedicated attention.' },
  { question: 'What is MindPeak\'s NEET success rate?', answer: 'MindPeak has a 95% selection rate with 500+ students mentored. Our best NEET results include 98.5+ percentile scores and 50+ students securing admission in top medical colleges including government medical colleges. Our approach consistently produces results that match or exceed top coaching institutes.' },
  { question: 'Are NEET classes conducted online?', answer: 'Yes! All NEET classes are conducted via live 1-on-1 video sessions with your dedicated mentor. Classes happen 6 days a week with short, focused sessions for maximum retention. Every session is recorded for revision. You can attend from anywhere with a laptop/tablet and internet connection.' },
  { question: 'Does MindPeak cover CBSE boards alongside NEET?', answer: 'Absolutely. For Class 11 and 12 students, our mentors integrate board exam preparation with NEET coaching. The CBSE Biology and Chemistry syllabus overlaps significantly with NEET, and our approach ensures you excel in both without double preparation.' },
  { question: 'Can I join MindPeak NEET coaching mid-year?', answer: 'Yes! Since our coaching is 1-on-1, there are no batches. You can join anytime. Your mentor will assess your current level, create a customized catch-up plan, and align the curriculum to your NEET exam timeline.' },
  { question: 'What is the fee for NEET coaching at MindPeak?', answer: 'MindPeak offers flexible pricing — our 2-year NEET program starts at ₹2,30,000 + GST and 1-year programs at ₹1,99,000 + GST (discounted to ₹1,30,000 with current offers). Monthly and quarterly payment options available. Book a free demo to discuss pricing tailored to your needs.' },
];

/* ─── page ─── */

const NEETCoaching = () => {
  const { openDemoModal } = useDemoModal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const lastUpdated = getLastUpdated('neet-coaching');
  const examYear = getCurrentExamYear('NEET');

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'NEET UG Personalized Coaching — MindPeak Institute',
    description: 'Comprehensive 1-on-1 personalized NEET coaching with Biology-first approach, dedicated mentors, and 95% success rate.',
    provider: { '@type': 'EducationalOrganization', name: 'MindPeak Institute', url: 'https://mindpeakinstitute.com' },
    offers: { '@type': 'Offer', price: '100000', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
    dateModified: lastUpdated,
    hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online', courseWorkload: 'P1Y' },
    about: [
      { '@type': 'Thing', name: 'NEET-UG', sameAs: 'https://en.wikipedia.org/wiki/National_Eligibility_cum_Entrance_Test_(Undergraduate)' },
      { '@type': 'Thing', name: 'National Testing Agency', sameAs: 'https://en.wikipedia.org/wiki/National_Testing_Agency' },
    ],
    mentions: [
      { '@type': 'Thing', name: 'NCERT', sameAs: 'https://en.wikipedia.org/wiki/National_Council_of_Educational_Research_and_Training' },
    ],
    review: [
      { '@type': 'Review', author: { '@type': 'Person', name: 'Ananya Reddy' }, reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, reviewBody: 'My NEET score jumped from 420 to 680 with MindPeak\'s Biology-first 1-on-1 coaching approach.' },
      { '@type': 'Review', author: { '@type': 'Person', name: 'Sneha Gupta' }, reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, reviewBody: 'Coming from a tier-3 city, MindPeak gave me AIIMS-level mentorship. Score improved by 270 marks.' },
      { '@type': 'Review', author: { '@type': 'Person', name: 'Karthik Nair' }, reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, reviewBody: 'My Physics score went from 80 to 155 in 6 months with targeted 1-on-1 sessions.' },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mindpeakinstitute.com' },
      { '@type': 'ListItem', position: 2, name: 'NEET Coaching', item: 'https://mindpeakinstitute.com/neet-coaching' },
    ],
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Best NEET Coaching Online — MindPeak Institute',
    url: 'https://mindpeakinstitute.com/neet-coaching',
    significantLink: [
      'https://mindpeakinstitute.com/neet-practice',
      'https://mindpeakinstitute.com/neet-pyq',
      'https://mindpeakinstitute.com/neet-biology-preparation',
      'https://mindpeakinstitute.com/neet-chemistry-preparation',
      'https://mindpeakinstitute.com/neet-physics-preparation',
      'https://mindpeakinstitute.com/courses',
      'https://mindpeakinstitute.com/free-trial',
    ],
  };

  return (
    <>
      <SEOHead
        title={`Best NEET Coaching Online ${CURRENT_EXAM_YEAR} — Top Medical Colleges | 95% Success [Free Trial]`}
        description={`Crack NEET ${CURRENT_EXAM_YEAR} with 1-on-1 Biology-first coaching. NCERT mastery, dedicated mentors, 95% success rate. 500+ students. Book free demo now.`}
        jsonLd={[courseSchema, breadcrumbSchema, webPageSchema, buildFAQSchema([...faqs, ...paaQuestions])]}
      />

      <Navbar />

      <main className="bg-background min-h-screen pt-20 sm:pt-24 overflow-x-hidden">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <ol className="flex items-center gap-2 text-[11px] tracking-[0.05em] text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground/70 transition-colors duration-300">Home</Link></li>
            <span className="text-foreground/15">/</span>
            <li className="text-foreground/80">NEET Coaching</li>
          </ol>
        </nav>

        {/* ───── HERO ───── */}
        <section className="relative max-w-4xl mx-auto px-4 sm:px-6 pb-12 sm:pb-20">
          <div aria-hidden className="absolute -top-28 -right-44 w-[480px] h-[480px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(var(--gold-light) / 0.16) 0%, transparent 65%)' }} />
          <FadeInView>
            <FreshnessBadge lastUpdated={lastUpdated} verifiedFor={examYear} />

            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <Image src="/images/logo.jpeg" alt="MindPeak Institute" width={48} height={48} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full ring-1 ring-foreground/[0.08] flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-primary/70 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-medium">MindPeak Institute</p>
                <p className="text-muted-foreground text-xs truncate">Personalized 1-on-1 NEET UG Coaching</p>
              </div>
            </div>

            <h1 className="font-display font-bold text-foreground mb-5 sm:mb-6 tracking-[-0.03em]" style={{ fontSize: 'clamp(1.6rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
              NEET Online Coaching —{' '}
              <span className="text-gradient-gold">Personalized 1-on-1 Mentorship</span>{' '}
              for Top Medical Colleges
            </h1>

            <p className="text-muted-foreground/70 text-sm sm:text-base leading-[1.8] max-w-3xl mb-8 sm:mb-10">
              Your dream of becoming a doctor deserves more than a seat in a 200-student classroom. At MindPeak, every NEET aspirant receives a dedicated mentor from AIIMS or top medical colleges, an adaptive Biology-first curriculum, and daily 1-on-1 live sessions. 95% success rate, NCERT mastery, 500+ students mentored.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button onClick={openDemoModal} className="group w-full sm:w-auto btn-pill btn-pill-gold px-8 sm:px-10 py-3.5 sm:py-4 text-[12px] uppercase tracking-[0.15em]">
                Start Your Free Trial
                <span className="w-5 h-5 rounded-full border border-current grid place-items-center transition-transform duration-500 group-hover:rotate-45">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.2" /></svg>
                </span>
              </button>
              <a href="tel:+918219457704" className="w-full sm:w-auto btn-pill btn-pill-outline px-7 sm:px-8 py-3.5 sm:py-4 text-[12px] uppercase tracking-[0.15em]">
                <Phone className="w-3.5 h-3.5" strokeWidth={1.5} /> +91 82194 57704
              </a>
            </div>
          </FadeInView>
        </section>

        {/* ───── EXAM COUNTDOWN + SEASONAL ───── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-6 space-y-4">
          <ExamCountdown exam="NEET" />
          <SeasonalBanner />
        </div>

        {/* ───── FEATURED SNIPPET ───── */}
        <div className="px-4 sm:px-6">
          <FeaturedSnippet
            question={`How to Prepare for NEET ${CURRENT_EXAM_YEAR} — 8-Step Plan`}
            answer={`NEET ${CURRENT_EXAM_YEAR} preparation centres on NCERT mastery for Biology (50% of the 720-mark paper) and structured Physics-Chemistry problem practice. The 8 steps below scale from a 12-month plan down to a 6-month intensive cycle.`}
            ordered
            bullets={[
              'Master NCERT Biology line-by-line — 85 to 90% of NEET Biology comes directly from NCERT.',
              'Complete NCERT Physics and Chemistry — the foundation for both subjects.',
              'Add reference books — DC Pandey / BM Sharma for Physics, MS Chouhan for Organic Chemistry.',
              'Solve NCERT Exemplar — covers high-yield question patterns across all three subjects.',
              'Drill chapter-wise PYQs — the last 15 years of NEET papers, subject by subject.',
              'Run a 21-day Biology revision cycle — re-skim every Biology chapter every 3 weeks.',
              'Take weekly full-length mocks from month 4 — under exam conditions, analyse the same day.',
              'Final 30 days: revision only — NCERT skim plus weak-area drills, 2 mocks per week.',
            ]}
            authorityNote="In our NEET classes, the biggest score-mover is enforcing the 21-day Biology revision cycle. Students who maintain it typically gain 30 to 50 Biology marks within 90 days."
          />
        </div>

        {/* ───── STATS ───── */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent" />
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {stats.map((s, i) => (
              <FadeInView key={s.label} delay={i * 60}>
                <div className="font-display font-bold text-primary text-3xl md:text-4xl mb-1 tracking-tight">{s.value}</div>
                <div className="text-muted-foreground text-[10px] uppercase tracking-[0.2em]">{s.label}</div>
              </FadeInView>
            ))}
          </div>
        </section>

        {/* ───── DYNAMIC STUDY PLAN (prominent position) ───── */}
        <StudyPlanSection examType="NEET" themed />

        {/* ───── WHY BATCH FAILS ───── */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <FadeInView>
            <div className="eyebrow eyebrow-danger mb-4">The Problem</div>
            <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl mb-4 tracking-[-0.02em]">
              Why Traditional NEET <span className="text-gradient-gold">Batch Coaching Fails</span>
            </h2>
            <p className="text-muted-foreground/70 text-sm sm:text-base leading-[1.8] max-w-3xl mb-10">
              NEET demands a Biology-heavy strategy and line-by-line NCERT mastery. Yet most batch coaching treats NEET like another engineering entrance exam.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {batchProblems.map((p, i) => (
                <FadeInView key={i} delay={i * 80}
                  className="card-lift p-7 border-destructive/15 hover:border-destructive/30">
                  <p.icon className="w-5 h-5 text-destructive/60 mb-5" strokeWidth={1.5} />
                  <h3 className="font-display font-semibold text-foreground text-base mb-2 tracking-[-0.01em]">{p.title}</h3>
                  <p className="text-muted-foreground/70 text-sm leading-[1.7]">{p.desc}</p>
                </FadeInView>
              ))}
            </div>
          </FadeInView>
        </section>

        {/* ───── METHODOLOGY ───── */}
        <section className="py-20 sm:py-28 px-4 sm:px-6 relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent" />
          <div className="max-w-4xl mx-auto">
            <FadeInView>
              <div className="eyebrow mb-4">NEET Methodology</div>
              <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-4 tracking-[-0.02em]">
                The MindPeak <span className="text-gradient-gold">NEET Advantage</span>
              </h2>
              <p className="text-muted-foreground/70 text-sm sm:text-base leading-[1.8] max-w-3xl mb-12">
                Biology-first approach reflecting 50% weightage, NCERT line-by-line mastery, and mentors from top medical colleges.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {methodology.map((m, i) => (
                  <FadeInView key={i} delay={i * 60}
                    className="group card-lift p-7">
                    <span className="text-[11px] tracking-[0.15em] text-muted-foreground/40 font-medium">{String(i + 1).padStart(2, '0')}</span>
                    <m.icon className="w-5 h-5 text-primary/60 mt-4 mb-4" strokeWidth={1.5} />
                    <h3 className="font-display font-semibold text-foreground text-sm mb-2 tracking-[-0.01em]">{m.title}</h3>
                    <p className="text-muted-foreground/70 text-sm leading-[1.7]">{m.desc}</p>
                  </FadeInView>
                ))}
              </div>
            </FadeInView>
          </div>
        </section>

        {/* ───── SUCCESS STORIES ───── */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <FadeInView>
            <div className="eyebrow mb-4">Stories</div>
            <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-10 tracking-[-0.02em]">
              NEET <span className="text-gradient-gold">Success Stories</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {testimonials.map((t, i) => (
                <FadeInView key={i} delay={i * 80}
                  className="card-lift p-7">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <h3 className="font-display font-semibold text-foreground text-sm">{t.name}</h3>
                      <p className="text-muted-foreground text-[11px] tracking-[0.05em]">{t.city}</p>
                    </div>
                    <span className="text-primary/70 text-[11px] tracking-[0.1em] font-medium">{t.rank}</span>
                  </div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex-1 text-center p-3 rounded-xl bg-secondary/50 border border-border">
                      <div className="text-destructive/70 font-display font-bold text-lg">{t.before}</div>
                      <div className="text-muted-foreground/80 text-[10px] uppercase tracking-[0.1em]">Before</div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-primary/50 flex-shrink-0" />
                    <div className="flex-1 text-center p-3 rounded-xl bg-secondary/50 border border-border">
                      <div className="text-primary/80 font-display font-bold text-lg">{t.after}</div>
                      <div className="text-muted-foreground/80 text-[10px] uppercase tracking-[0.1em]">After</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground/70 text-sm leading-[1.7] italic">&ldquo;{t.quote}&rdquo;</p>
                </FadeInView>
              ))}
            </div>
          </FadeInView>
        </section>

        {/* ───── SYLLABUS ───── */}
        <section className="py-20 sm:py-28 px-4 sm:px-6 relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent" />
          <div className="max-w-4xl mx-auto">
            <FadeInView>
              <div className="eyebrow mb-4">Syllabus</div>
              <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-4 tracking-[-0.02em]">
                Complete NEET <span className="text-gradient-gold">Syllabus Coverage</span>
              </h2>
              <p className="text-muted-foreground/70 text-sm sm:text-base leading-[1.8] max-w-3xl mb-10">
                Biology receives proportionally the highest focus — matching its 360/720 mark weightage. NCERT-first principles throughout.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {syllabus.map((s, i) => (
                  <FadeInView key={i} delay={i * 60}
                    className="card-lift p-7">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-display font-semibold text-foreground text-base tracking-[-0.01em]">{s.subject}</h3>
                    </div>
                    <p className="text-primary/60 text-[10px] uppercase tracking-[0.15em] font-medium mb-4">{s.chapters} Ch · {s.marks}</p>
                    <ul className="space-y-2">
                      {s.topics.map((topic, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground/70">
                          <span className="w-1 h-1 rounded-full bg-primary/40 mt-2 shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </FadeInView>
                ))}
              </div>
            </FadeInView>
          </div>
        </section>

        {/* ───── PRICING COMPARISON ───── */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <FadeInView>
            <div className="eyebrow mb-4">Compare</div>
            <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-4 tracking-[-0.02em]">
              NEET Coaching <span className="text-gradient-gold">Pricing Comparison</span>
            </h2>
            <p className="text-muted-foreground/70 text-sm sm:text-base leading-[1.8] max-w-3xl mb-10">
              Compare MindPeak&rsquo;s personalized NEET coaching with traditional batch coaching.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-[0_10px_30px_hsl(224_40%_22%/0.06)]">
              <table className="w-full text-sm min-w-[600px]">
                <thead>
                  <tr className="bg-secondary/60">
                    <th className="text-left px-5 py-4 text-muted-foreground text-[11px] uppercase tracking-[0.15em] font-medium">Feature</th>
                    <th className="text-center px-5 py-4 text-primary text-[11px] uppercase tracking-[0.15em] font-bold bg-primary/[0.07]">MindPeak</th>
                    <th className="text-center px-5 py-4 text-muted-foreground text-[11px] uppercase tracking-[0.15em] font-medium">Allen</th>
                    <th className="text-center px-5 py-4 text-muted-foreground text-[11px] uppercase tracking-[0.15em] font-medium">Aakash</th>
                    <th className="text-center px-5 py-4 text-muted-foreground text-[11px] uppercase tracking-[0.15em] font-medium">BYJU&rsquo;S</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingComparison.map((row, i) => (
                    <tr key={i} className="border-t border-border/60 hover:bg-secondary/30 transition-colors duration-300">
                      <td className="px-5 py-3.5 text-foreground/80 font-medium text-xs sm:text-sm">{row.feature}</td>
                      <td className="px-5 py-3.5 text-center text-foreground font-semibold text-xs sm:text-sm bg-primary/[0.06]">{row.mindpeak}</td>
                      <td className="px-5 py-3.5 text-center text-muted-foreground text-xs sm:text-sm">{row.allen}</td>
                      <td className="px-5 py-3.5 text-center text-muted-foreground text-xs sm:text-sm">{row.aakash}</td>
                      <td className="px-5 py-3.5 text-center text-muted-foreground text-xs sm:text-sm">{row.byjus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeInView>
        </section>

        {/* ───── INTERNAL LINKS ───── */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent" />
          <div className="max-w-4xl mx-auto">
            <h3 className="eyebrow mb-5">Explore More</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'NEET Biology Coaching', to: '/neet-biology-coaching' },
                { label: 'NEET Physics Coaching', to: '/neet-physics-coaching' },
                { label: 'NEET Chemistry Coaching', to: '/neet-chemistry-coaching' },
                { label: 'Meet Our AIIMS-Alumni NEET Mentors', to: '/mentors' },
                { label: 'MindPeak Teaching Methodology', to: '/methodology' },
                { label: 'Free NEET Study Plan Generator', to: '/study-plan' },
                { label: 'NEET Student Success Stories', to: '/success-stories' },
                { label: 'NEET Biology Preparation', to: '/neet-biology-preparation' },
                { label: 'NEET Chemistry Preparation', to: '/neet-chemistry-preparation' },
                { label: 'NEET Physics Preparation', to: '/neet-physics-preparation' },
                { label: 'NEET Biology Formulas', to: '/neet-biology-formulas' },
                { label: 'NEET Practice Questions', to: '/neet-practice' },
                { label: 'NEET Previous Year Questions', to: '/neet-pyq' },
                { label: 'NEET Rank Predictor', to: '/neet-rank-predictor' },
                { label: 'JEE Coaching', to: '/jee-coaching' },
                { label: 'All Courses & Pricing', to: '/courses' },
                { label: 'Kota Alternative', to: '/kota-coaching-alternative' },
                { label: 'Online vs Offline Coaching', to: '/online-vs-offline-jee-coaching' },
                { label: 'NEET Coaching in Delhi', to: '/neet-coaching-in-delhi' },
                { label: 'NEET Coaching in Mumbai', to: '/neet-coaching-in-mumbai' },
                { label: 'NEET Coaching in Bangalore', to: '/neet-coaching-in-bangalore' },
                { label: 'NEET UG 2026 Cancellation — What It Means for You', to: '/neet-ug-2026-cancelled' },
                { label: 'Blog — NEET Tips', to: '/blog' },
              ].map((l) => (
                <Link key={l.to} to={l.to} className="px-4 py-2.5 rounded-full border border-border bg-card text-foreground/70 text-[11px] tracking-[0.05em] hover:border-primary/40 hover:text-foreground hover:-translate-y-0.5 hover:shadow-[0_8px_20px_hsl(224_40%_22%/0.08)] transition-all duration-300 flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-primary/50" strokeWidth={1.5} /> {l.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ───── MONTHLY SUCCESS STORY + WEEKLY TIP ───── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-6">
          <MonthlySuccessStory exam="NEET" />
          <WeeklyTip exam="NEET" />
        </section>

        {/* ───── EXAM COMPARISON GUIDES (GSC-proven non-brand entry points) ───── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6">
          <RelatedPages
            title="Comparing NEET With Other Exams?"
            links={[
              { href: `/blog/ap-eamcet-vs-neet-comparison-${CURRENT_EXAM_YEAR}`, label: 'Difference between NEET and AP EAMCET', tag: 'Compare' },
              { href: `/blog/ts-eamcet-vs-neet-comparison-${CURRENT_EXAM_YEAR}`, label: 'TS EAMCET vs NEET — dual prep guide', tag: 'Compare' },
              { href: `/blog/cuet-vs-neet-comparison-${CURRENT_EXAM_YEAR}`, label: 'CUET vs NEET — which to prioritise?', tag: 'Compare' },
              { href: `/blog/kcet-vs-neet-comparison-${CURRENT_EXAM_YEAR}`, label: 'KCET vs NEET for Karnataka students', tag: 'Compare' },
              { href: '/neet-pyq-biology-cell-division', label: 'Cell cycle & cell division NEET PYQs', tag: 'PYQ' },
              { href: '/neet-pyq-chemistry-haloalkanes', label: 'Haloalkanes & haloarenes NEET PYQs', tag: 'PYQ' },
            ]}
            columns={3}
          />
        </section>

        {/* ───── PEOPLE ALSO ASK ───── */}
        <PeopleAlsoAsk questions={paaQuestions} heading="People Also Ask About NEET Coaching" />

        {/* ───── FAQ ───── */}
        <PageFAQ items={faqs} heading="NEET Coaching" highlight="FAQs" />

        {/* ───── FINAL CTA ───── */}
        <CtaBanner
          heading="Your Medical Dream Starts"
          highlight="Today"
          sub="Join 500+ students who transformed their NEET preparation with personalized 1-on-1 coaching."
          buttonLabel="Book Free Trial Class"
        />

        <PageFooter extra="NEET Online Coaching." />
      </main>
    </>
  );
};

export default NEETCoaching;
