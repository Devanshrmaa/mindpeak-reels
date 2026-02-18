import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { PageFooter } from '@/components/PageFooter';
import { PageFAQ, buildFAQSchema } from '@/components/PageFAQ';
import type { FAQItem } from '@/components/PageFAQ';
import { useDemoModal } from '@/components/DemoBookingModal';
import { FeaturedSnippet } from '@/components/FeaturedSnippet';
import { FreshnessBadge } from '@/components/FreshnessBadge';
import { PeopleAlsoAsk, buildPAASchema } from '@/components/PeopleAlsoAsk';
import type { PAAQuestion } from '@/components/PeopleAlsoAsk';
import {
  GraduationCap, Users, BarChart3, Target, CheckCircle, ArrowRight, BookOpen,
  Clock, Brain, Zap, ShieldCheck, Star, Phone, Heart, Microscope,
} from 'lucide-react';
import logo from '@/assets/logo.jpeg';

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
  { feature: 'Annual Fees', mindpeak: '₹60,000 – ₹2,30,000', allen: '₹1,20,000+', aakash: '₹1,10,000+', byjus: '₹1,50,000+' },
  { feature: 'Personal Mentor', mindpeak: '✓ Dedicated', allen: '✗ Shared', aakash: '✗ Shared', byjus: '✗ No' },
  { feature: 'Biology Focus', mindpeak: '✓ 50% Curriculum', allen: 'Equal Split', aakash: 'Equal Split', byjus: 'Generic' },
  { feature: 'NCERT Line-by-Line', mindpeak: '✓ Comprehensive', allen: 'Partial', aakash: 'Partial', byjus: '✗ No' },
  { feature: 'Doubt Resolution', mindpeak: '✓ Real-time 1-on-1', allen: 'Group Sessions', aakash: 'Limited Slots', byjus: 'Chat Support' },
  { feature: 'Parent Reports', mindpeak: '✓ Weekly', allen: 'Quarterly', aakash: 'Monthly', byjus: 'App-Based' },
  { feature: 'Travel Time', mindpeak: 'Zero (Online)', allen: '1-2 hrs/day', aakash: '1-2 hrs/day', byjus: 'N/A' },
];

const paaQuestions: PAAQuestion[] = [
  { question: 'Is online NEET coaching effective?', answer: 'Yes — personalized online NEET coaching is highly effective. MindPeak\'s 1-on-1 model with Biology-first approach and NCERT mastery consistently produces 95%+ percentile results. Students gain 150-250 marks on average, with dedicated mentors from AIIMS and top medical colleges guiding every session.' },
  { question: 'How much does NEET coaching cost?', answer: 'NEET coaching ranges from ₹50,000 to ₹3,00,000 annually. Allen and Aakash charge ₹1-1.5 lakh for batch coaching. MindPeak\'s personalized 1-on-1 NEET coaching starts at ₹60,000/year with Biology-focused curriculum, NCERT line-by-line coverage, and dedicated mentorship — better value per hour.' },
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
  { question: 'What is the fee for NEET coaching at MindPeak?', answer: 'MindPeak offers flexible pricing — our 2-year NEET program starts at ₹2,30,000 + GST and 1-year programs at ₹1,35,000 + GST. Monthly and quarterly payment options available. Book a free demo to discuss pricing tailored to your needs.' },
];

/* ─── page ─── */

const NEETCoaching = () => {
  const { openDemoModal } = useDemoModal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'NEET UG Personalized Coaching — MindPeak Institute',
    description: 'Comprehensive 1-on-1 personalized NEET coaching with Biology-first approach, dedicated mentors, and 95% success rate.',
    provider: { '@type': 'EducationalOrganization', name: 'MindPeak Institute', url: 'https://mindpeakinstitute.com' },
    offers: { '@type': 'Offer', price: '60000', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '500', bestRating: '5' },
    hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online', courseWorkload: 'P1Y' },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mindpeakinstitute.com' },
      { '@type': 'ListItem', position: 2, name: 'NEET Coaching', item: 'https://mindpeakinstitute.com/neet-coaching' },
    ],
  };

  return (
    <>
      <SEOHead
        title="NEET Online Coaching — Personalized 1-on-1 Mentorship | Top Medical Colleges | MindPeak"
        description="Crack NEET with personalized 1-on-1 coaching. Biology-first approach, NCERT mastery, dedicated mentors. 95% success rate, 500+ students. Start free trial today!"
        jsonLd={[courseSchema, breadcrumbSchema, buildFAQSchema(faqs), buildPAASchema(paaQuestions)]}
      />

      <Navbar />

      <main className="bg-background min-h-screen pt-20 sm:pt-24 overflow-x-hidden">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <ol className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <span>/</span>
            <li className="text-foreground">NEET Coaching</li>
          </ol>
        </nav>

        {/* ───── HERO ───── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-8 sm:pb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <FreshnessBadge lastUpdated="2026-02-18" verifiedFor="NEET 2026" />

            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <img src={logo} alt="MindPeak Institute" className="w-10 h-10 sm:w-14 sm:h-14 rounded-full flex-shrink-0" width={56} height={56} />
              <div className="min-w-0">
                <p className="text-primary text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-semibold">MindPeak Institute</p>
                <p className="text-muted-foreground text-xs sm:text-sm truncate">Personalized 1-on-1 NEET UG Coaching</p>
              </div>
            </div>

            <h1 className="font-display font-black text-foreground mb-4 sm:mb-6 text-[1.5rem] leading-tight sm:text-3xl md:text-4xl lg:text-[4rem] lg:leading-[1.1]">
              NEET Online Coaching —{' '}
              <span className="text-gradient-gold">Personalized 1-on-1 Mentorship</span>{' '}
              for Top Medical Colleges
            </h1>

            <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mb-6 sm:mb-8">
              Your dream of becoming a doctor deserves more than a seat in a 200-student classroom. At MindPeak Institute, every NEET aspirant receives a dedicated personal mentor — typically from AIIMS or top medical college backgrounds — an adaptive curriculum with a Biology-first approach, and daily 1-on-1 live sessions. With a 95% success rate, comprehensive NCERT mastery program, and 500+ students mentored, we&rsquo;ve helped aspirants from tier-1 to tier-3 cities secure admission in top government and private medical colleges across India.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button onClick={openDemoModal} className="w-full sm:w-auto px-6 sm:px-10 py-3.5 sm:py-4 bg-primary text-primary-foreground font-display font-bold text-xs sm:text-sm uppercase tracking-[0.1em] sm:tracking-[0.15em] shadow-gold-glow hover:scale-105 transition-transform text-center">
                Start Your Free Trial →
              </button>
              <a href="tel:+918219457704" className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 border border-border text-foreground font-display text-xs sm:text-sm uppercase tracking-[0.1em] sm:tracking-[0.15em] hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" /> Call +91 82194 57704
              </a>
            </div>
          </motion.div>
        </section>

        {/* ───── FEATURED SNIPPET ───── */}
        <div className="px-4 sm:px-6">
          <FeaturedSnippet
            question="What is the best online coaching for NEET 2026?"
            answer="MindPeak Institute is India's leading personalized NEET coaching, offering dedicated 1-on-1 mentorship with Biology-first curriculum. With a 95% success rate, NCERT line-by-line mastery program, and mentors from AIIMS and top medical colleges, MindPeak delivers the most effective NEET preparation available online."
            bullets={[
              'Biology-first approach (50% curriculum focus matching 360/720 marks)',
              'NCERT Mastery — line-by-line coverage of every textbook',
              'Dedicated NEET mentor from AIIMS / top medical colleges',
              'Daily 1-on-1 live sessions, 6 days a week',
              'Full-length NEET mock tests in CBT format',
              'Integrated CBSE board + NEET preparation',
            ]}
          />
        </div>

        {/* ───── STATS ───── */}
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

        {/* ───── WHY BATCH FAILS ───── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl mb-4">
              Why Traditional NEET <span className="text-gradient-gold">Batch Coaching Fails</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed max-w-3xl mb-10">
              NEET is fundamentally different from JEE — it demands a Biology-heavy strategy, line-by-line NCERT mastery, and a structured approach to 200 MCQs in 200 minutes. Yet most batch coaching treats NEET like another engineering entrance exam. Here&rsquo;s why that approach fails thousands of medical aspirants every year.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {batchProblems.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="rounded-xl border border-destructive/30 bg-destructive/5 p-6">
                  <p.icon className="w-8 h-8 text-destructive mb-4" />
                  <h3 className="font-display font-bold text-foreground text-lg mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ───── METHODOLOGY ───── */}
        <section className="bg-card/30 border-y border-border py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-primary text-xs font-semibold uppercase tracking-widest">NEET Methodology</span>
              </div>
              <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-4">
                The MindPeak <span className="text-gradient-gold">NEET Advantage</span>
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed max-w-3xl mb-10">
                Our NEET coaching methodology is designed specifically for medical aspirants. With a Biology-first approach reflecting the subject&rsquo;s 50% weightage, NCERT line-by-line mastery, and mentors who are medical college alumni, we provide a preparation experience that actually aligns with what NEET demands — not what batch coaching finds convenient.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {methodology.map((m, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className="rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-colors">
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
              NEET <span className="text-gradient-gold">Success Stories</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="rounded-xl border border-border bg-card p-6">
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

        {/* ───── SYLLABUS ───── */}
        <section className="bg-secondary/30 border-y border-border py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
                <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl">
                  Complete NEET <span className="text-gradient-gold">Syllabus Coverage</span>
                </h2>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed max-w-3xl mb-10">
                Our NEET coaching program provides comprehensive coverage of the entire NEET UG syllabus. Biology receives proportionally the highest focus — matching its 360/720 mark weightage. Each subject is taught with NCERT-first principles, diagram-based learning, and extensive MCQ practice matching the NEET exam pattern.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {syllabus.map((s, i) => (
                  <div key={i} className="rounded-xl border border-border bg-card p-6">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-display font-bold text-foreground text-xl">{s.subject}</h3>
                    </div>
                    <p className="text-primary text-xs font-bold mb-4">{s.chapters} Chapters • {s.marks} Marks</p>
                    <ul className="space-y-2">
                      {s.topics.map((topic, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />{topic}
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
              NEET Coaching <span className="text-gradient-gold">Pricing Comparison</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed max-w-3xl mb-10">
              Compare MindPeak&rsquo;s personalized NEET coaching with traditional batch coaching institutes. More Biology focus, more personal attention, better NCERT coverage — at a competitive price.
            </p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm min-w-[600px]">
                <thead>
                  <tr className="bg-secondary/50">
                    <th className="text-left px-5 py-3 text-foreground font-display">Feature</th>
                    <th className="text-center px-5 py-3 text-primary font-display font-bold">MindPeak</th>
                    <th className="text-center px-5 py-3 text-muted-foreground font-display">Allen</th>
                    <th className="text-center px-5 py-3 text-muted-foreground font-display">Aakash</th>
                    <th className="text-center px-5 py-3 text-muted-foreground font-display">BYJU&rsquo;S</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {pricingComparison.map((row, i) => (
                    <tr key={i} className="bg-background">
                      <td className="px-5 py-3 text-foreground font-medium">{row.feature}</td>
                      <td className="px-5 py-3 text-center text-primary font-medium">{row.mindpeak}</td>
                      <td className="px-5 py-3 text-center text-muted-foreground">{row.allen}</td>
                      <td className="px-5 py-3 text-center text-muted-foreground">{row.aakash}</td>
                      <td className="px-5 py-3 text-center text-muted-foreground">{row.byjus}</td>
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
                { label: 'NEET Biology Preparation', to: '/neet-biology-preparation' },
                { label: 'JEE Coaching', to: '/jee-coaching' },
                { label: 'All Courses & Pricing', to: '/courses' },
                { label: 'Kota Alternative', to: '/kota-coaching-alternative' },
                { label: 'Online vs Offline Coaching', to: '/online-vs-offline-jee-coaching' },
                { label: 'NEET Coaching in Delhi', to: '/neet-coaching-in-delhi' },
                { label: 'NEET Coaching in Mumbai', to: '/neet-coaching-in-mumbai' },
                { label: 'NEET Coaching in Bangalore', to: '/neet-coaching-in-bangalore' },
                { label: 'Blog — NEET Tips', to: '/blog' },
              ].map((l) => (
                <Link key={l.to} to={l.to} className="px-3 sm:px-5 py-2.5 sm:py-3 rounded-lg bg-card border border-border text-foreground text-xs sm:text-sm hover:border-primary/40 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-primary" /> {l.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ───── PEOPLE ALSO ASK ───── */}
        <PeopleAlsoAsk questions={paaQuestions} heading="People Also Ask About NEET Coaching" />

        {/* ───── FAQ ───── */}
        <PageFAQ items={faqs} heading="NEET Coaching" highlight="FAQs" />

        {/* ───── FINAL CTA ───── */}
        <section className="bg-primary/10 border-y border-primary/20 py-10 sm:py-16 px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl mb-4">
              Your Medical Dream Starts <span className="text-gradient-gold">Today</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join 500+ students who transformed their NEET preparation with personalized 1-on-1 coaching. Book your free trial — zero commitment, meet your mentor, see the difference.
            </p>
            <button onClick={openDemoModal} className="w-full sm:w-auto px-8 sm:px-14 py-3.5 sm:py-4 bg-primary text-primary-foreground font-display font-bold text-xs sm:text-sm uppercase tracking-[0.1em] sm:tracking-[0.15em] shadow-gold-glow hover:scale-105 transition-transform">
              Book Free Trial Class →
            </button>
          </motion.div>
        </section>

        <PageFooter extra="NEET Online Coaching." />
      </main>
    </>
  );
};

export default NEETCoaching;
