import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { PageFooter } from '@/components/PageFooter';
import { StudyPlanSection } from '@/components/StudyPlanSection';
import { PageFAQ, buildFAQSchema } from '@/components/PageFAQ';
import type { FAQItem } from '@/components/PageFAQ';
import { useDemoModal } from '@/components/DemoBookingModal';
import { FeaturedSnippet } from '@/components/FeaturedSnippet';
import { FreshnessBadge } from '@/components/FreshnessBadge';
import { ExamCountdown } from '@/components/ExamCountdown';
import { MonthlySuccessStory } from '@/components/MonthlySuccessStory';
import { WeeklyTip } from '@/components/WeeklyTip';
import { SeasonalBanner } from '@/components/SeasonalBanner';
import { getLastUpdated, getCurrentExamYear } from '@/lib/contentFreshness';
import { CURRENT_EXAM_YEAR } from '@/lib/examYears';
import { getLiveStat, formatStat } from '@/lib/liveStats';
import { PeopleAlsoAsk, buildPAASchema } from '@/components/PeopleAlsoAsk';
import type { PAAQuestion } from '@/components/PeopleAlsoAsk';
import {
  GraduationCap, Users, BarChart3, Target, CheckCircle, ArrowRight, BookOpen,
  Clock, Brain, Zap, TrendingUp, ShieldCheck, Star, Phone,
} from 'lucide-react';
import logo from '@/assets/logo.jpeg';

/* ─── data ───────────────────────────────────────────────── */

const stats = [
  { value: '500+', label: 'Students Mentored' },
  { value: '95%', label: 'Success Rate' },
  { value: 'AIR 42', label: 'Best JEE Rank' },
  { value: '50+', label: 'AIR <5K Achievers' },
];

const batchProblems = [
  { icon: Users, title: '100+ Students Per Batch', desc: 'In crowded batch classrooms, teachers can\'t even learn every student\'s name. Your doubts go unresolved, your weaknesses unnoticed. The teacher must follow a fixed pace — if you\'re fast you\'re bored; if you need more time you\'re left behind.' },
  { icon: Target, title: 'Zero Personal Attention', desc: 'Batch coaching follows a single curriculum for all. Whether you struggle with Organic Chemistry or excel in Calculus, the teaching doesn\'t adapt. There\'s no one tracking your individual progress or adjusting your study plan.' },
  { icon: BarChart3, title: 'One-Size-Fits-All Curriculum', desc: 'Every student learns differently. Some are visual learners, others conceptual. Batch coaching ignores these differences entirely — delivering the same lecture, same pace, same problems to students with vastly different needs.' },
];

const methodology = [
  { icon: Users, title: 'Dedicated Personal Mentor', desc: 'You\'re paired with one expert mentor for your entire JEE preparation. They know your strengths, weaknesses, learning style, and goals. This is like having a personal trainer for academics — someone invested in YOUR success.' },
  { icon: Brain, title: 'Adaptive AI-Driven Curriculum', desc: 'Our diagnostic assessments identify your exact weak areas. Your study plan evolves weekly based on performance data — more time on challenging chapters, accelerated pace on strengths. No wasted effort.' },
  { icon: Clock, title: '1-on-1 Live Sessions (6 Days/Week)', desc: 'Daily live video classes with your dedicated mentor. Short, focused sessions designed for maximum retention. Every session recorded so you can re-watch any explanation during revision.' },
  { icon: BarChart3, title: 'Weekly Analytics & Parent Reports', desc: 'Comprehensive performance dashboards tracking topic-wise accuracy, speed improvements, mock test percentiles, and learning velocity. Parents receive detailed weekly progress reports.' },
  { icon: Zap, title: 'Instant Doubt Resolution', desc: 'No more waiting in long doubt queues. Your mentor resolves doubts in real-time during sessions. Between sessions, our WhatsApp support channel ensures no question goes unanswered for more than 30 minutes.' },
  { icon: ShieldCheck, title: 'Complete JEE Syllabus Coverage', desc: 'Comprehensive coverage of JEE Main and Advanced syllabus across Physics, Chemistry, and Mathematics. Regular mock tests, previous year paper analysis, and exam-pattern practice included.' },
];

const testimonials = [
  { name: 'Aarav Sharma', city: 'Delhi', rank: 'AIR 42', before: 120, after: 285, quote: 'MindPeak completely transformed my JEE preparation. My mentor identified my weak areas in Rotational Mechanics and Organic Chemistry within the first week. The personalized approach helped me jump from 120 marks to 285 in JEE Advanced. I couldn\'t have achieved AIR 42 without this level of personal attention.' },
  { name: 'Priya Patel', city: 'Mumbai', rank: 'AIR 156', before: 95, after: 260, quote: 'I was struggling in a 200-student batch in Andheri. After switching to MindPeak\'s 1-on-1 coaching, my understanding of Physics Mechanics and Calculus improved dramatically. The daily sessions and weekly mock reviews gave me the confidence I needed.' },
  { name: 'Rohan Iyer', city: 'Bangalore', rank: 'AIR 312', before: 145, after: 270, quote: 'The adaptive curriculum was a game-changer. Instead of sitting through lectures on topics I already knew, my mentor focused on my specific problem areas. My mock scores improved by 125 marks in just 4 months.' },
];

const syllabus = [
  {
    subject: 'Physics',
    chapters: 25,
    topics: ['Mechanics (Kinematics, Laws of Motion, Rotational Dynamics)', 'Electrodynamics (Electrostatics, Current Electricity, Magnetism)', 'Optics & Modern Physics', 'Thermodynamics & Heat Transfer', 'Waves & Oscillations'],
  },
  {
    subject: 'Chemistry',
    chapters: 30,
    topics: ['Physical Chemistry (Thermodynamics, Equilibrium, Electrochemistry)', 'Organic Chemistry (Reaction Mechanisms, Named Reactions, Biomolecules)', 'Inorganic Chemistry (Coordination, d-Block, Qualitative Analysis)', 'General Chemistry (Atomic Structure, Chemical Bonding)', 'Environmental Chemistry & Surface Chemistry'],
  },
  {
    subject: 'Mathematics',
    chapters: 28,
    topics: ['Calculus (Limits, Differentiation, Integration, Differential Equations)', 'Algebra (Complex Numbers, Matrices, Probability)', 'Coordinate Geometry (Conics, Straight Lines, Circles)', 'Trigonometry (Functions, Equations, Inverse Trig)', 'Vectors & 3D Geometry'],
  },
];

const pricingComparison = [
  { feature: 'Teaching Format', mindpeak: '1-on-1 Online', allen: 'Batch (100+)', resonance: 'Batch (80+)', fiitjee: 'Batch (60-80)' },
  { feature: 'Annual Fees', mindpeak: '₹1,00,000 – ₹2,30,000', allen: '₹1,20,000+', resonance: '₹1,00,000+', fiitjee: '₹1,50,000+' },
  { feature: 'Personal Mentor', mindpeak: '✓ Dedicated', allen: '✗ Shared', resonance: '✗ Shared', fiitjee: '✗ Shared' },
  { feature: 'Adaptive Curriculum', mindpeak: '✓ AI-Driven', allen: '✗ Fixed', resonance: '✗ Fixed', fiitjee: '✗ Fixed' },
  { feature: 'Doubt Resolution', mindpeak: '✓ Real-time 1-on-1', allen: 'Group Sessions', resonance: 'Limited Slots', fiitjee: 'Group Sessions' },
  { feature: 'Recorded Sessions', mindpeak: '✓ Every Class', allen: 'Limited', resonance: 'Limited', fiitjee: '✗ No' },
  { feature: 'Parent Reports', mindpeak: '✓ Weekly', allen: 'Quarterly', resonance: 'Monthly', fiitjee: 'Quarterly' },
  { feature: 'Travel Time', mindpeak: 'Zero (Online)', allen: '1-2 hrs/day', resonance: '1-2 hrs/day', fiitjee: '1-2 hrs/day' },
];

const paaQuestions: PAAQuestion[] = [
  { question: 'Is online JEE coaching effective?', answer: 'Yes — online 1-on-1 JEE coaching is highly effective when it provides personalized mentorship. MindPeak\'s online model delivers dedicated mentors, adaptive curricula, and daily live sessions. Students gain 100-150 extra marks on average, with results matching or exceeding top Kota institutes — all without travel time.' },
  { question: 'How much does JEE coaching cost in India?', answer: 'JEE coaching fees range from ₹50,000 to ₹3,00,000 per year depending on the format. Batch coaching at Allen or FIITJEE costs ₹1-2 lakh. MindPeak\'s personalized 1-on-1 coaching starts at ₹1,00,000/year, offering better value per hour through dedicated personal attention.' },
  { question: 'Can I crack JEE without Kota coaching?', answer: 'Absolutely. Many JEE toppers prepare from home with quality online coaching. MindPeak students have achieved AIR 42 without relocating to Kota. Personalized 1-on-1 mentorship, adaptive study plans, and daily live sessions deliver Kota-level preparation from any city in India.' },
  { question: 'How many hours should I study for JEE daily?', answer: '6-8 hours of focused, quality study daily is recommended for JEE. More important than hours is the quality of preparation — a personalized study plan that targets your weak areas is far more effective than 12-14 hours of unfocused batch coaching lectures.' },
  { question: 'What is the difference between JEE Main and JEE Advanced?', answer: 'JEE Main is the qualifying exam for NITs, IIITs, and GFTIs, while JEE Advanced — open only to JEE Main qualifiers — is the gateway to IITs. JEE Advanced tests deeper conceptual understanding with multi-concept problems. MindPeak\'s coaching covers both exams comprehensively.' },
  { question: 'Is personalized coaching better than batch coaching for JEE?', answer: 'Research and results consistently show personalized 1-on-1 coaching outperforms batch coaching. Personalized coaching adapts to each student\'s pace, learning style, and weak areas. MindPeak\'s 95% success rate with 1-on-1 mentorship significantly exceeds the typical 10-15% success rate of large batch centres.' },
];

const faqs: FAQItem[] = [
  { question: 'What makes MindPeak\'s JEE coaching different from batch coaching?', answer: 'MindPeak provides dedicated 1-on-1 mentorship where every student gets their own expert mentor, an adaptive curriculum tailored to their strengths and weaknesses, daily live sessions, weekly analytics, and real-time doubt resolution. Unlike batch coaching with 100+ students, our approach ensures every minute of preparation is optimized for YOUR specific needs.' },
  { question: 'What is the success rate for JEE at MindPeak?', answer: 'MindPeak has a 95% selection rate with over 500 students mentored. Our best result is AIR 42 in JEE Advanced, and over 50 students have achieved AIR under 5,000. These results speak to the effectiveness of personalized 1-on-1 coaching versus generic batch teaching.' },
  { question: 'How are JEE classes conducted at MindPeak?', answer: 'Classes are conducted via live 1-on-1 video sessions with your dedicated mentor, 6 days a week. Sessions are short and focused for maximum retention. Every class is recorded so you can re-watch any explanation during revision. You can attend from anywhere — all you need is a laptop/tablet and internet.' },
  { question: 'Does MindPeak cover both JEE Main and JEE Advanced?', answer: 'Yes! Our JEE coaching program comprehensively covers the syllabus for both JEE Main and JEE Advanced. We offer separate 1-year and 2-year programs, each including complete Physics, Chemistry, and Mathematics coverage, weekly mock tests in CBT format, and previous year paper analysis.' },
  { question: 'Can I join mid-year? Is there a batch dependency?', answer: 'Since our coaching is entirely 1-on-1, there are no batches and no fixed start dates. You can join at any time. Your mentor will create a customized study plan aligned with your exam timeline, covering any syllabus gaps from the start.' },
  { question: 'What is the fee for JEE coaching at MindPeak?', answer: 'MindPeak offers flexible pricing with monthly, quarterly, and annual plans. Our 2-year JEE program starts at ₹2,30,000 + GST and 1-year programs at ₹1,99,000 + GST (discounted to ₹1,30,000 with current offers), which is competitive with premium coaching and delivers significantly more value through 1-on-1 attention. Book a free demo to discuss personalized pricing.' },
  { question: 'Do you also help with CBSE board exams alongside JEE?', answer: 'Absolutely. Our mentors integrate board exam preparation with JEE coaching. Since the CBSE syllabus overlaps significantly with JEE, our approach ensures you excel in both without spreading yourself thin. We adjust the curriculum around your board exam schedule.' },
];

/* ─── page ───────────────────────────────────────────────── */

const JEECoaching = () => {
  const { openDemoModal } = useDemoModal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const lastUpdated = getLastUpdated('jee-coaching');
  const examYear = getCurrentExamYear('JEE');

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'JEE Advanced Personalized Coaching — MindPeak Institute',
    description: 'Comprehensive 1-on-1 personalized JEE Main and Advanced coaching with dedicated mentors, adaptive curriculum, and 95% success rate.',
    provider: {
      '@type': 'EducationalOrganization',
      name: 'MindPeak Institute',
      url: 'https://mindpeakinstitute.com',
    },
    offers: {
      '@type': 'Offer',
      price: '100000',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: String(getLiveStat('studentsEnrolled')),
      bestRating: '5',
    },
    dateModified: lastUpdated,
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: 'P1Y',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mindpeakinstitute.com' },
      { '@type': 'ListItem', position: 2, name: 'JEE Coaching', item: 'https://mindpeakinstitute.com/jee-coaching' },
    ],
  };

  return (
    <>
      <SEOHead
        title="JEE Online Coaching — Personalized 1-on-1 Mentorship | 95% Success Rate | MindPeak"
        description="Achieve AIR <5K with personalized JEE coaching. Dedicated mentors, adaptive curriculum, 95% success rate. 500+ students trust MindPeak. Start free trial today!"
        jsonLd={[courseSchema, breadcrumbSchema, buildFAQSchema(faqs), buildPAASchema(paaQuestions)]}
      />

      <Navbar />

      <main className="bg-background min-h-screen pt-20 sm:pt-24 overflow-x-hidden">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <ol className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <span>/</span>
            <li className="text-foreground">JEE Coaching</li>
          </ol>
        </nav>

        {/* ───── HERO ───── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-8 sm:pb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <FreshnessBadge lastUpdated={lastUpdated} verifiedFor={examYear} />

            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <img src={logo} alt="MindPeak Institute" className="w-10 h-10 sm:w-14 sm:h-14 rounded-full flex-shrink-0" width={56} height={56} />
              <div className="min-w-0">
                <p className="text-primary text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-semibold">MindPeak Institute</p>
                <p className="text-muted-foreground text-xs sm:text-sm truncate">Personalized 1-on-1 JEE Main &amp; Advanced Coaching</p>
              </div>
            </div>

            <h1 className="font-display font-black text-foreground mb-4 sm:mb-6 text-[1.5rem] leading-tight sm:text-3xl md:text-4xl lg:text-[4rem] lg:leading-[1.1]">
              JEE Online Coaching —{' '}
              <span className="text-gradient-gold">Personalized 1-on-1 Mentorship</span>{' '}
              for AIR &lt;5K
            </h1>

            <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mb-6 sm:mb-8">
              Tired of being a face in a 200-student classroom? At MindPeak Institute, every JEE aspirant receives a dedicated personal mentor, an AI-driven adaptive curriculum, and daily 1-on-1 live sessions — six days a week. With a 95% success rate and 500+ students mentored, our approach has produced AIR 42 in JEE Advanced and 50+ students under AIR 5,000. This is not batch coaching with a webcam. This is a fundamentally different way to prepare for JEE.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={openDemoModal}
                className="w-full sm:w-auto px-6 sm:px-10 py-3.5 sm:py-4 bg-primary text-primary-foreground font-display font-bold text-xs sm:text-sm uppercase tracking-[0.1em] sm:tracking-[0.15em] shadow-gold-glow hover:scale-105 transition-transform text-center"
              >
                Start Your Free Trial →
              </button>
              <a
                href="tel:+918219457704"
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 border border-border text-foreground font-display text-xs sm:text-sm uppercase tracking-[0.1em] sm:tracking-[0.15em] hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> Call +91 82194 57704
              </a>
            </div>
          </motion.div>
        </section>

        {/* ───── EXAM COUNTDOWN + SEASONAL BANNER ───── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-6 space-y-4">
          <ExamCountdown exam="JEE" />
          <SeasonalBanner />
        </div>

        {/* ───── FEATURED SNIPPET ───── */}
        <div className="px-4 sm:px-6">
          <FeaturedSnippet
            question={`What is the best online coaching for JEE ${CURRENT_EXAM_YEAR}?`}
            answer="MindPeak Institute is India's top-rated online JEE coaching, providing dedicated 1-on-1 mentorship with IIT alumni. With a 95% success rate, AIR 42 best rank, and 500+ students mentored, MindPeak's adaptive AI-driven curriculum and daily live sessions deliver personalized preparation that batch coaching cannot match."
            bullets={[
              'Dedicated personal mentor for entire JEE journey',
              'AI-driven adaptive curriculum targeting weak areas',
              'Daily 1-on-1 live sessions, 6 days a week',
              'Real-time doubt resolution (under 30 min response)',
              'Weekly analytics & parent progress reports',
              'Complete JEE Main + Advanced syllabus coverage',
            ]}
          />
        </div>

        {/* ───── STATS BAR ───── */}
        <section className="bg-secondary/30 border-y border-border py-8 sm:py-10 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display font-black text-primary text-2xl md:text-3xl mb-1">{s.value}</div>
                <div className="text-muted-foreground text-xs uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ───── DYNAMIC STUDY PLAN (prominent position) ───── */}
        <StudyPlanSection examType="JEE" themed />

        {/* ───── WHY BATCH COACHING FAILS ───── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl mb-4">
              Why Traditional JEE <span className="text-gradient-gold">Batch Coaching Fails</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed max-w-3xl mb-10">
              Every year lakhs of students join batch coaching centres with dreams of cracking JEE. Most leave disappointed. Here&rsquo;s why the factory-model approach fails the majority of students — and why a personalized path consistently outperforms it.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {batchProblems.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl border border-destructive/30 bg-destructive/5 p-6"
                >
                  <p.icon className="w-8 h-8 text-destructive mb-4" />
                  <h3 className="font-display font-bold text-foreground text-lg mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ───── THE MINDPEAK METHODOLOGY ───── */}
        <section className="bg-card/30 border-y border-border py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Star className="w-4 h-4 text-primary" />
                <span className="text-primary text-xs font-semibold uppercase tracking-widest">Our Methodology</span>
              </div>
              <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-4">
                The MindPeak <span className="text-gradient-gold">Difference</span>
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed max-w-3xl mb-10">
                MindPeak Institute was founded on one simple belief: every JEE aspirant deserves personalized attention. Our methodology combines the expertise of IIT alumni mentors with data-driven adaptive learning to create a preparation experience that batch coaching simply cannot replicate. Here&rsquo;s how we help students routinely outperform their batch-coached peers.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {methodology.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-colors"
                  >
                    <m.icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-display font-bold text-foreground text-base mb-2">{m.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ───── SUCCESS STORIES ───── */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-10">
              JEE <span className="text-gradient-gold">Success Stories</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-display font-bold text-foreground">{t.name}</h3>
                      <p className="text-muted-foreground text-xs">{t.city}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">{t.rank}</span>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-1 text-center p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                      <div className="text-destructive font-display font-bold text-lg">{t.before}</div>
                      <div className="text-muted-foreground text-xs">Before</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
                    <div className="flex-1 text-center p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <div className="text-primary font-display font-bold text-lg">{t.after}</div>
                      <div className="text-muted-foreground text-xs">After</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ───── SYLLABUS COVERAGE ───── */}
        <section className="bg-secondary/30 border-y border-border py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
                <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl">
                  Complete JEE <span className="text-gradient-gold">Syllabus Coverage</span>
                </h2>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed max-w-3xl mb-10">
                Our JEE coaching program covers every chapter and topic prescribed for JEE Main and JEE Advanced. Each subject is taught with a focus on conceptual understanding, problem-solving techniques, and exam-pattern practice. Mentors adapt the depth and pace based on your individual progress.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {syllabus.map((s, i) => (
                  <div key={i} className="rounded-xl border border-border bg-card p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-display font-bold text-foreground text-xl">{s.subject}</h3>
                      <span className="text-primary text-xs font-bold">{s.chapters} Chapters</span>
                    </div>
                    <ul className="space-y-2">
                      {s.topics.map((topic, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ───── PRICING COMPARISON ───── */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-4">
              Transparent <span className="text-gradient-gold">Pricing Comparison</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed max-w-3xl mb-10">
              See how MindPeak&rsquo;s personalized 1-on-1 JEE coaching stacks up against traditional batch coaching institutes. More value, more attention, better results — at a competitive price point.
            </p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm min-w-[600px]">
                <thead>
                  <tr className="bg-secondary/50">
                    <th className="text-left px-5 py-3 text-foreground font-display">Feature</th>
                    <th className="text-center px-5 py-3 text-primary font-display font-bold">MindPeak</th>
                    <th className="text-center px-5 py-3 text-muted-foreground font-display">Allen</th>
                    <th className="text-center px-5 py-3 text-muted-foreground font-display">Resonance</th>
                    <th className="text-center px-5 py-3 text-muted-foreground font-display">FIITJEE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {pricingComparison.map((row, i) => (
                    <tr key={i} className="bg-background">
                      <td className="px-5 py-3 text-foreground font-medium">{row.feature}</td>
                      <td className="px-5 py-3 text-center text-primary font-medium">{row.mindpeak}</td>
                      <td className="px-5 py-3 text-center text-muted-foreground">{row.allen}</td>
                      <td className="px-5 py-3 text-center text-muted-foreground">{row.resonance}</td>
                      <td className="px-5 py-3 text-center text-muted-foreground">{row.fiitjee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </section>

        {/* ───── INTERNAL LINKS ───── */}
        <section className="bg-card/30 border-y border-border py-8 sm:py-12 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h3 className="font-display font-bold text-foreground text-base sm:text-lg mb-4 sm:mb-6">Explore More</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {[
                { label: 'JEE Physics Preparation', to: '/jee-physics-preparation' },
                { label: 'JEE Chemistry Preparation', to: '/jee-chemistry-preparation' },
                { label: 'JEE Mathematics Preparation', to: '/jee-mathematics-preparation' },
                { label: 'JEE Mock Test Strategy', to: '/jee-mock-test-strategy' },
                { label: 'NEET Coaching', to: '/neet-coaching' },
                { label: 'All Courses & Pricing', to: '/courses' },
                { label: 'Kota Coaching Alternative', to: '/kota-coaching-alternative' },
                { label: 'Online vs Offline Coaching', to: '/online-vs-offline-jee-coaching' },
                { label: 'MindPeak vs Allen', to: '/mindpeak-vs-allen' },
                { label: 'MindPeak vs FIITJEE', to: '/mindpeak-vs-fiitjee' },
                { label: 'JEE Coaching in Delhi', to: '/jee-coaching-in-delhi' },
                { label: 'JEE Coaching in Mumbai', to: '/jee-coaching-in-mumbai' },
                { label: 'Blog — JEE Tips', to: '/blog' },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="px-3 sm:px-5 py-2.5 sm:py-3 rounded-lg bg-card border border-border text-foreground text-xs sm:text-sm hover:border-primary/40 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4 text-primary" /> {l.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ───── MONTHLY SUCCESS STORY + WEEKLY TIP ───── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-6">
          <MonthlySuccessStory exam="JEE" />
          <WeeklyTip exam="JEE" />
        </section>

        {/* ───── PEOPLE ALSO ASK ───── */}
        <PeopleAlsoAsk questions={paaQuestions} heading="People Also Ask About JEE Coaching" />

        {/* ───── FAQ ───── */}
        <PageFAQ items={faqs} heading="JEE Coaching" highlight="FAQs" />

        {/* ───── FINAL CTA ───── */}
        <section className="bg-primary/10 border-y border-primary/20 py-10 sm:py-16 px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl mb-4">
              Start Your JEE Transformation <span className="text-gradient-gold">Today</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join 500+ students across India who transformed their JEE preparation with personalized 1-on-1 coaching. Book your free trial class — zero commitment, 100% value.
            </p>
            <button
              onClick={openDemoModal}
              className="w-full sm:w-auto px-8 sm:px-14 py-3.5 sm:py-4 bg-primary text-primary-foreground font-display font-bold text-xs sm:text-sm uppercase tracking-[0.1em] sm:tracking-[0.15em] shadow-gold-glow hover:scale-105 transition-transform"
            >
              Book Free Trial Class →
            </button>
          </motion.div>
        </section>

        {/* Footer */}
        <PageFooter extra="JEE Online Coaching." />
      </main>
    </>
  );
};

export default JEECoaching;
