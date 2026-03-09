"use client";

import { usePathname } from 'next/navigation';
import { Navigate } from '@/components/Navigate';
import { motion } from 'framer-motion';
import { Link } from '@/components/RouterLink';
import {
  ChevronDown, Phone, ArrowRight, CheckCircle, Users, BarChart3,
  GraduationCap, MapPin, Building2, Quote, Star, BookOpen, Briefcase,
  Target, Lightbulb, Rocket, Calendar, Shield, Send, Clock, Award,
  School, AlertTriangle, TrendingUp
} from 'lucide-react';
import { useState, useCallback, FormEvent } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { useDemoModal } from '@/components/DemoBookingModal';
import { buildFAQSchemaFromQA } from '@/components/PageFAQ';
import { cities, allCities, getLocationTitle, getLocationDescription } from '@/data/cityData';
import type { CityData, QuickStat, CourseTile, LocalValueProp, CityFAQ, CityTestimonial, CityEvent, TabbedContent } from '@/data/cityData';
import { cityUniqueContent } from '@/data/cityUniqueContent';
import { getStateEducation } from '@/data/stateEducationData';
const logo = '/images/logo.jpeg';

/* ─── FALLBACK GENERATORS ─── */

function fallbackHeroHeadline(city: CityData, examLabel: string): string {
  return `Crack ${examLabel} from ${city.city} — 1-on-1 mentors, real results.`;
}
function fallbackHeroSublead(city: CityData, examFull: string): string {
  return `MindPeak Institute in ${city.city} runs personalised 1-on-1 coaching for ${examFull}, designed to get you exam-ready with daily live sessions, adaptive curriculum, and dedicated mentor support from home.`;
}
function fallbackSocialProof(): string {
  return '2,300+ students coached across India with a 95% selection rate.';
}
function fallbackQuickStats(city: CityData, examLabel: string): QuickStat[] {
  return [
    { value: '95%', label: 'Selection Rate', source: 'Cohort outcomes, 2024-25' },
    { value: '500+', label: `Students in ${city.state}`, source: 'Cumulative enrolment' },
    { value: 'AIR 42', label: `Best ${examLabel} Rank`, source: 'JEE Advanced 2024' },
  ];
}
function fallbackCourseTiles(city: CityData): CourseTile[] {
  return [
    { title: 'JEE Main & Advanced', duration: '1–2 years', benefit: 'Master Physics, Chemistry & Maths with IIT alumni mentors.', outcomes: ['AI-powered mock analytics', 'Chapter-wise PYQ practice', 'Personalised weak-area plans'], commitment: '3–4 hrs/day', whoFor: 'Class 11–12 & Droppers', icon: '🎯', link: '/jee-coaching' },
    { title: 'NEET UG', duration: '1–2 years', benefit: 'NCERT-first Biology, Physics & Chemistry coaching.', outcomes: ['NCERT line-by-line mastery', 'NEET PYQ bank with solutions', 'Weekly full-syllabus mocks'], commitment: '3–4 hrs/day', whoFor: 'Class 11–12 & Droppers', icon: '🏥', link: '/neet-coaching' },
    { title: 'Foundation (Class 8–10)', duration: '1–3 years', benefit: 'Build competitive readiness early with strong fundamentals.', outcomes: ['Board + competitive dual-track', 'Olympiad problem-solving', 'Study-skill development'], commitment: '1.5–2 hrs/day', whoFor: 'Class 8, 9, 10', icon: '📐', link: '/foundation-coaching' },
    { title: 'Crash Course & Dropper', duration: '3–6 months', benefit: 'Intensive gap-filling for short-timeline aspirants.', outcomes: ['High-weightage chapter revision', 'Daily timed practice', 'Error-log analysis'], commitment: '4–5 hrs/day', whoFor: 'Droppers & late starters', icon: '⚡', link: '/jee-crash-course' },
  ];
}
function fallbackLocalValueProps(city: CityData): LocalValueProp[] {
  return [
    { title: `Mentors who know ${city.state}`, description: `Faculty experienced with local board curriculum and JEE/NEET transition.`, localExample: `Students from ${city.city}'s top schools improve 100-150+ marks in 3 months.`, microCTA: `Meet ${city.city} mentors` },
    { title: 'Zero commute, full access', description: `Study from any area in ${city.city} — no travel, no fixed batches.`, localExample: `Families across ${city.city} save 2-3 hours daily with our online format.`, microCTA: 'See how it works' },
    { title: 'Transparent progress tracking', description: 'Weekly reports, parent dashboard, and monthly strategy calls.', localExample: `${city.city} parents get topic-wise heat maps and mentor observations weekly.`, microCTA: 'View sample report' },
  ];
}
function fallbackExpandedFaqs(city: CityData, examLabel: string): CityFAQ[] {
  return [
    { q: `Is online ${examLabel} coaching effective for ${city.city} students?`, tldr: 'Yes — 95% selection rate with 1-on-1 mentoring.', a: `MindPeak's 1-on-1 coaching delivers superior results compared to batch centres in ${city.city}. Personalised attention and adaptive curriculum have produced AIR 42 in JEE Advanced.` },
    { q: `What are the coaching fees for ${city.city}?`, tldr: 'Flexible plans, competitive with premium centres.', a: `Monthly, quarterly, and annual plans available. Fees are competitive with top coaching centres in ${city.city} but deliver far more value through dedicated 1-on-1 sessions.` },
    { q: `Can I join mid-year?`, tldr: 'Yes — no batch constraints.', a: `Since coaching is 1-on-1, join anytime. We create a custom plan aligned with your school calendar and exam timeline.` },
    { q: `How much time per week do I need?`, tldr: '10–25 hrs/week depending on program.', a: `Foundation: 10-12 hrs/week. Full JEE/NEET: 20-25 hrs/week. Crash courses: 30+ hrs/week. Your mentor creates a realistic timetable.` },
    { q: `What outcomes can I expect?`, tldr: '100-150+ marks improvement in 3 months.', a: `Students typically see significant mock score jumps within 3 months, backed by personalised roadmaps, weekly analytics, and dedicated doubt resolution.` },
    { q: `Do you cover board exams along with ${examLabel}?`, tldr: 'Yes — integrated board + competitive prep.', a: `Our mentors integrate board exam preparation with ${examLabel} coaching. The syllabus overlap is leveraged so students excel in both.` },
  ];
}
function fallbackTabbedContent(city: CityData): TabbedContent {
  return {
    curriculum: `Complete JEE/NEET syllabus with concept-first approach. Physics → Chemistry → Mathematics/Biology. Each topic includes theory, solved examples, practice problems, and PYQ analysis.`,
    schedule: `Daily 1-on-1 sessions (1.5–2 hrs) at your convenience. Weekend intensive sessions for mocks. Flexible rescheduling within 48 hours.`,
    fees: `Foundation: from ₹15,000/month. JEE/NEET: from ₹20,000/month. Annual plans save 15-20%. All plans include daily sessions, material, mocks, and parent dashboard.`,
    paymentNote: `EMI options available. Early-bird and sibling discounts for ${city.city} students. Contact us during your free demo for a personalised quote.`,
  };
}
function fallbackTestimonials(city: CityData): CityTestimonial[] {
  return [
    { name: 'Student A.', role: 'JEE/NEET Aspirant', result: '180+ marks improvement in 4 months', quote: `MindPeak's 1-on-1 format from ${city.city} gave me personalised attention I never got in batch coaching.`, isSample: true },
    { name: 'Student B.', role: 'Class 12 Student', result: 'Balanced boards + competitive prep', quote: `Studying from home in ${city.city} saved me 3 hours daily. That extra time made all the difference.`, isSample: true },
    { name: 'Parent C.', role: `Parent from ${city.city}`, result: 'Complete visibility into progress', quote: `The weekly reports gave us confidence — something no coaching centre in ${city.city} ever offered.`, isSample: true },
  ];
}
function fallbackEvents(city: CityData): CityEvent[] {
  return [
    { title: `${city.city} Free Demo Day`, date: '[UPCOMING]', description: `Free 1-on-1 demo + preparation assessment for ${city.city} students.`, ctaLabel: 'Register Free' },
    { title: 'Strategy Workshop', date: '[UPCOMING]', description: `Exam strategy, time management & study planning session.`, ctaLabel: 'Book Seat' },
    { title: 'Parent Info Session', date: '[UPCOMING]', description: `30-min virtual session for ${city.city} parents on our coaching model.`, ctaLabel: 'Join Session' },
  ];
}
function fallbackIntro(city: CityData, examLabel: string): string {
  return `MindPeak Institute is a premier online coaching platform transforming how students in ${city.city}, ${city.state} prepare for ${examLabel}. Our mission: provide every student in ${city.city} with world-class 1-on-1 mentoring once reserved for metro coaching hubs. MindPeak Institute in ${city.city} leverages cutting-edge technology to deliver daily live sessions with dedicated expert mentors. Whether from CBSE, ICSE, or state board backgrounds, our adaptive curriculum builds a customised roadmap toward your dream college. For families in ${city.city} tired of overcrowded batch centres, MindPeak offers a fundamentally better way to prepare.`;
}
function fallbackCourses(city: CityData, examLabel: string): string {
  return `MindPeak Institute in ${city.city} covers every aspect of ${examLabel} preparation — JEE Main & Advanced (Physics, Chemistry, Mathematics) and NEET UG (Physics, Chemistry, Biology with NCERT-first foundation). Beyond subjects: structured test series, full-length mocks, chapter-wise tests, and PYQ practice with detailed analytics. Foundation programs for Class 9-10, crash courses, and dropper programs available.`;
}
function fallbackLearning(city: CityData): string {
  return `Every student begins with a diagnostic assessment mapping conceptual strengths and gaps. A personalised roadmap evolves as you progress. Daily 1-on-1 sessions ensure teaching pace matches comprehension. Interactive whiteboards, recorded playback, curated practice assignments, and weekly mock tests with post-test analysis create a preparation ecosystem that consistently produces results for ${city.city} students.`;
}
function fallbackCareer(city: CityData): string {
  return `JEE qualifiers gain admission to IITs, NITs, IIITs — careers in software, data science, AI, aerospace (₹10-50+ LPA). NEET qualifiers enter top medical colleges — medicine, surgery, research (₹8-40+ LPA). MindPeak in ${city.city} doesn't just prepare for exams — it builds the intellectual foundation for lifelong career success.`;
}
function fallbackStandsOut(city: CityData): string {
  return `MindPeak stands out in ${city.city} through dedicated 1-on-1 mentoring, transparent weekly reports, IIT/AIIMS alumni faculty, and adaptive AI-driven curriculum. Students switching from batch coaching report 100-150+ marks improvement within 3 months.`;
}
function fallbackCTA(city: CityData, examLabel: string): string {
  return `Your ${examLabel} journey starts now. MindPeak Institute in ${city.city} offers a completely free demo class — no commitments. Experience personalised 1-on-1 mentoring, get a preparation assessment, and discover why students across ${city.state} trust MindPeak. Book today or call +91-82194-57704.`;
}

/* ─── LEAD FORM COMPONENT ─── */

function LeadCaptureForm({ city, openDemoModal }: { city: CityData; openDemoModal: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('studentName') as HTMLInputElement)?.value?.trim();
    const phone = (form.elements.namedItem('studentPhone') as HTMLInputElement)?.value?.trim();
    const course = (form.elements.namedItem('studentCourse') as HTMLSelectElement)?.value;

    if (!name || !phone || !course) return;

    setLoading(true);
    // Submit to Google Sheets endpoint
    const params = new URLSearchParams({ name, phone: encodeURIComponent(phone), course, city: city.city });
    fetch(`https://script.google.com/macros/s/AKfycbynDEbMQqfStBwK-sJa5UoLuZtBDNvSPZ4HLvcpuZxTSe6lUy7nuIbxWbQ3QOPovG6N/exec?${params.toString()}`, { method: 'GET', mode: 'no-cors' })
      .finally(() => {
        setLoading(false);
        setSubmitted(true);
      });
  }, [city.city]);

  if (submitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
        <p className="text-foreground font-display font-bold text-lg">Thank you!</p>
        <p className="text-muted-foreground text-sm mt-2">We'll reach out within 24 hours. Your details are safe with us.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="studentName" className="text-foreground text-sm font-medium block mb-1">Full Name *</label>
        <input id="studentName" name="studentName" type="text" required maxLength={100} className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary transition-colors" placeholder="Enter your full name" />
      </div>
      <div>
        <label htmlFor="studentPhone" className="text-foreground text-sm font-medium block mb-1">Phone / WhatsApp *</label>
        <input id="studentPhone" name="studentPhone" type="tel" required maxLength={15} pattern="[0-9+\-\s]{7,15}" className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary transition-colors" placeholder="+91 XXXXX XXXXX" />
      </div>
      <div>
        <label htmlFor="studentCourse" className="text-foreground text-sm font-medium block mb-1">Interested Course *</label>
        <select id="studentCourse" name="studentCourse" required className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary transition-colors">
          <option value="">Select a program</option>
          <option value="JEE Main & Advanced">JEE Main & Advanced</option>
          <option value="NEET UG">NEET UG</option>
          <option value="Foundation (Class 8-10)">Foundation (Class 8-10)</option>
          <option value="Crash Course">Crash Course / Dropper</option>
        </select>
      </div>
      <button type="submit" disabled={loading} className="w-full px-8 py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-[0.15em] shadow-gold-glow hover:scale-[1.02] transition-transform disabled:opacity-50 flex items-center justify-center gap-2">
        {loading ? 'Submitting…' : <><Send className="w-4 h-4" /> Reserve My Spot</>}
      </button>
      <p className="text-muted-foreground text-xs text-center flex items-center justify-center gap-1">
        <Shield className="w-3 h-3" /> We respond within 24 hours. Your details are safe — we never share them.
      </p>
    </form>
  );
}

/* ─── MAIN COMPONENT ─── */

const LocationPage = () => {
  const pathname = usePathname();
  const slug = pathname.replace(/^\//, '');
  const { openDemoModal } = useDemoModal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'curriculum' | 'schedule' | 'fees'>('curriculum');
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const match = slug?.match(/^(jee|neet)-coaching-in-(.+)$/);
  const exam = match?.[1] as 'jee' | 'neet' | undefined;
  const citySlug = match?.[2];
  const city: CityData | undefined = allCities.find((c) => c.slug === citySlug);

  if (!exam || !city) {
    return <Navigate to="/" replace />;
  }

  const examLabel = exam === 'jee' ? 'JEE' : 'NEET';
  const examFull = exam === 'jee' ? 'JEE Main & Advanced' : 'NEET UG';
  const otherExam = exam === 'jee' ? 'neet' : 'jee';
  const otherExamLabel = exam === 'jee' ? 'NEET' : 'JEE';

  // Resolve content
  const heroHeadline = city.heroHeadline || fallbackHeroHeadline(city, examLabel);
  const heroSublead = city.heroSublead || fallbackHeroSublead(city, examFull);
  const socialProof = city.socialProofLine || fallbackSocialProof();
  const quickStats = city.quickStats || fallbackQuickStats(city, examLabel);
  const courseTiles = city.courseTiles || fallbackCourseTiles(city);
  const localValueProps = city.localValueProps || fallbackLocalValueProps(city);
  const expandedFaqs = city.expandedFaqs || fallbackExpandedFaqs(city, examLabel);
  const tabbed = city.tabbedContent || fallbackTabbedContent(city);
  const cityTestimonials = city.cityTestimonials || fallbackTestimonials(city);
  const events = city.events || fallbackEvents(city);
  const introText = city.introduction || fallbackIntro(city, examLabel);
  const coursesText = city.coursesOffered || fallbackCourses(city, examLabel);
  const learningText = city.learningApproach || fallbackLearning(city);
  const careerText = city.careerOpportunities || fallbackCareer(city);
  const standsOutText = city.whyStandsOut || fallbackStandsOut(city);
  const ctaText = city.callToActionText || fallbackCTA(city, examLabel);

  // JSON-LD — NO aggregateRating
  const faqSchemaItems = expandedFaqs.map(f => ({ q: f.q, a: f.a }));
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: `MindPeak Institute — ${examLabel} Coaching ${city.city}`,
      description: getLocationDescription(exam, city.city),
      url: `https://mindpeakinstitute.com/${exam}-coaching-in-${city.slug}`,
      telephone: '+91-82194-57704',
      address: {
        '@type': 'PostalAddress',
        addressLocality: city.city,
        addressRegion: city.state,
        addressCountry: 'IN',
      },
      geo: { '@type': 'GeoCoordinates', latitude: city.lat, longitude: city.lng },
      areaServed: { '@type': 'City', name: city.city },
    },
    buildFAQSchemaFromQA(faqSchemaItems),
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mindpeakinstitute.com' },
        { '@type': 'ListItem', position: 2, name: `${examLabel} Coaching`, item: 'https://mindpeakinstitute.com/courses' },
        { '@type': 'ListItem', position: 3, name: `${examLabel} Coaching in ${city.city}`, item: `https://mindpeakinstitute.com/${exam}-coaching-in-${city.slug}` },
      ],
    },
  ];

  const currentTestimonial = cityTestimonials[testimonialIdx];
  const nextTestimonial = () => setTestimonialIdx((i) => (i + 1) % cityTestimonials.length);
  const prevTestimonial = () => setTestimonialIdx((i) => (i - 1 + cityTestimonials.length) % cityTestimonials.length);

  return (
    <>
      <SEOHead
        title={getLocationTitle(exam, city.city)}
        description={getLocationDescription(exam, city.city)}
        jsonLd={jsonLd}
      />
      <Navbar />
      <main className="bg-background pt-20 sm:pt-24">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-6 py-4">
          <ol className="flex items-center gap-2 text-xs text-muted-foreground" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link to="/" itemProp="item" className="hover:text-primary transition-colors"><span itemProp="name">Home</span></Link>
              <meta itemProp="position" content="1" />
            </li>
            <span>/</span>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link to="/courses" itemProp="item" className="hover:text-primary transition-colors"><span itemProp="name">Courses</span></Link>
              <meta itemProp="position" content="2" />
            </li>
            <span>/</span>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name" className="text-foreground">{examLabel} Coaching in {city.city}</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>

        {/* ═══ HERO ═══ */}
        <section className="max-w-5xl mx-auto px-6 pb-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-4 mb-6">
              <img src={logo} alt="MindPeak Institute" className="w-14 h-14 rounded-full" width={56} height={56} />
              <div>
                <p className="text-primary text-xs uppercase tracking-[0.2em] font-semibold">MindPeak Institute</p>
                <p className="text-muted-foreground text-sm">Personalized 1-on-1 {examFull} Coaching</p>
              </div>
            </div>

            <h1 className="font-display font-black text-foreground mb-4" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', lineHeight: 1.1 }}>
              {heroHeadline.replace(city.city, '')}
              <span className="text-gradient-gold">{city.city}</span>
              {heroHeadline.includes(city.city + ' —') ? ' — 1-on-1 mentors, real results.' : ''}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-4">
              {heroSublead}
            </p>
            {/* Social proof microline */}
            <div className="flex items-center gap-2 mb-8 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full w-fit">
              <Award className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-primary text-sm font-medium">{socialProof}</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <button onClick={openDemoModal} className="px-8 py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-[0.15em] shadow-gold-glow hover:scale-105 transition-transform">
                Book Free Demo — {city.city}
              </button>
              <a href="#courses" className="px-8 py-4 border border-border text-foreground font-display text-sm uppercase tracking-[0.15em] hover:border-primary hover:text-primary transition-colors">
                View Courses ↓
              </a>
            </div>
          </motion.div>
        </section>

        {/* ═══ QUICK STATS ═══ */}
        <section className="bg-secondary/30 border-y border-border py-10 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {quickStats.map((stat, i) => (
              <div key={i}>
                <div className="font-display font-black text-primary text-3xl md:text-4xl mb-1">{stat.value}</div>
                <div className="text-foreground text-sm font-medium mb-1">{stat.label}</div>
                {stat.source && <div className="text-muted-foreground text-[10px] uppercase tracking-wider">Source: {stat.source}</div>}
              </div>
            ))}
          </div>
        </section>

        {/* ═══ CITY SNAPSHOT CARD ═══ */}
        {(() => {
          const uniqueData = cityUniqueContent[city.slug];
          const stateData = getStateEducation(city.state);
          return (
            <section className="max-w-5xl mx-auto px-6 py-14">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                {/* Snapshot Card */}
                <div className="rounded-2xl border border-primary/30 bg-card p-6 md:p-8 mb-8">
                  <div className="flex items-center gap-2 mb-5">
                    <MapPin className="w-5 h-5 text-primary" />
                    <h2 className="font-display font-bold text-foreground text-xl md:text-2xl uppercase tracking-wide">
                      {city.city}, {city.state}
                    </h2>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {uniqueData?.population && (
                      <div className="p-3 rounded-xl bg-background border border-border">
                        <div className="text-muted-foreground text-[10px] uppercase tracking-wider mb-1">Population</div>
                        <div className="text-foreground font-display font-bold text-sm">{uniqueData.population}</div>
                      </div>
                    )}
                    {uniqueData?.knownFor && (
                      <div className="p-3 rounded-xl bg-background border border-border">
                        <div className="text-muted-foreground text-[10px] uppercase tracking-wider mb-1">Known For</div>
                        <div className="text-foreground text-sm leading-snug">{uniqueData.knownFor.split('.')[0]}.</div>
                      </div>
                    )}
                    <div className="p-3 rounded-xl bg-background border border-border">
                      <div className="text-muted-foreground text-[10px] uppercase tracking-wider mb-1">Board</div>
                      <div className="text-foreground font-display font-bold text-sm">{uniqueData?.boardType || 'CBSE / State Board'}</div>
                    </div>
                    {stateData?.stateExamDetails && (
                      <div className="p-3 rounded-xl bg-background border border-border">
                        <div className="text-muted-foreground text-[10px] uppercase tracking-wider mb-1">State Exam</div>
                        <div className="text-foreground font-display font-bold text-sm">{stateData.stateExamDetails.name}</div>
                        <div className="text-primary text-[10px] mt-0.5">{stateData.stateExamDetails.seats}</div>
                      </div>
                    )}
                  </div>

                  {/* Notable Schools */}
                  {uniqueData?.notableSchools && uniqueData.notableSchools.length > 0 && (
                    <div className="mb-5">
                      <div className="flex items-center gap-2 mb-2">
                        <School className="w-4 h-4 text-primary" />
                        <span className="text-foreground text-sm font-semibold">Schools We Serve in {city.city}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {uniqueData.notableSchools.map((school, i) => (
                          <span key={i} className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium">
                            {school}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Nearest Premier Institute */}
                  {uniqueData?.nearestPremierInstitute && (
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20">
                      <Target className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-foreground text-sm font-semibold mb-0.5">Nearest Premier Institute</div>
                        <div className="text-muted-foreground text-sm">{uniqueData.nearestPremierInstitute}</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Student Challenge Callout */}
                {uniqueData?.localChallenge && (
                  <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6 mb-8">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-foreground font-display font-bold text-lg mb-2">The {city.city} Student Challenge</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{uniqueData.localChallenge}</p>
                        {uniqueData.localCoachingGap && (
                          <p className="text-muted-foreground text-sm leading-relaxed mt-2 italic">{uniqueData.localCoachingGap}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Education Landscape — now a brief contextual paragraph */}
                {city.educationLandscape && (
                  <p className="text-muted-foreground text-base leading-relaxed max-w-4xl">{city.educationLandscape}</p>
                )}
              </motion.div>
            </section>
          );
        })()}

        {/* ═══ WHY STUDENTS CHOOSE MINDPEAK ═══ */}
        <section className="bg-card/30 border-y border-border py-14 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-8 h-8 text-primary" />
                <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl">
                  Why Students in <span className="text-gradient-gold">{city.city}</span> Choose MindPeak
                </h2>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-4xl">{city.whyMindPeak}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {city.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══ COURSE TILES ═══ */}
        <section id="courses" className="max-w-5xl mx-auto px-6 py-14" aria-label="Courses offered">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-primary" />
              <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl">
                Courses for Students in <span className="text-gradient-gold">{city.city}</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-4xl">{coursesText}</p>
            <div className="grid sm:grid-cols-2 gap-6">
              {courseTiles.map((tile, i) => (
                <div key={i} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all group">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{tile.icon}</span>
                      <div>
                        <h3 className="text-foreground font-display font-bold text-lg">{tile.title}</h3>
                        <span className="text-primary text-xs font-semibold">{tile.duration}</span>
                      </div>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-primary/10 text-primary font-semibold whitespace-nowrap">
                      {tile.whoFor}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">{tile.benefit}</p>
                  <ul className="space-y-1.5 mb-4">
                    {tile.outcomes.map((o, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <span className="text-muted-foreground text-xs flex items-center gap-1"><Clock className="w-3 h-3" /> {tile.commitment}</span>
                    {tile.link && (
                      <Link to={tile.link} className="text-primary text-xs font-semibold hover:underline flex items-center gap-1 group-hover:gap-2 transition-all">
                        View syllabus <ArrowRight className="w-3 h-3" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ═══ LOCALIZED VALUE PROPS ═══ */}
        <section className="bg-card/30 border-y border-border py-14 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-8 text-center">
                Why {city.city} Families Trust <span className="text-gradient-gold">MindPeak</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {localValueProps.map((prop, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-background border border-border">
                    <h3 className="text-foreground font-display font-bold text-lg mb-2">{prop.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">{prop.description}</p>
                    <p className="text-foreground/70 text-xs italic mb-4">{prop.localExample}</p>
                    <button onClick={openDemoModal} className="text-primary text-xs font-semibold hover:underline flex items-center gap-1">
                      {prop.microCTA} <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══ TABBED SECTION: CURRICULUM / SCHEDULE / FEES ═══ */}
        <section className="max-w-5xl mx-auto px-6 py-14" aria-label="Program details">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-8 text-center">
              Program Details for <span className="text-gradient-gold">{city.city}</span>
            </h2>
            <div className="flex justify-center gap-2 mb-6">
              {(['curriculum', 'schedule', 'fees'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-lg font-display text-sm font-semibold uppercase tracking-wider transition-all ${
                    activeTab === tab
                      ? 'bg-primary text-primary-foreground shadow-gold-glow'
                      : 'bg-card border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground'
                  }`}
                >
                  {tab === 'curriculum' ? '📚 Curriculum' : tab === 'schedule' ? '📅 Schedule' : '💰 Fees'}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <p className="text-foreground text-sm leading-relaxed">
                  {activeTab === 'curriculum' && tabbed.curriculum}
                  {activeTab === 'schedule' && tabbed.schedule}
                  {activeTab === 'fees' && (
                    <>
                      {tabbed.fees}
                      <span className="block mt-4 text-primary text-xs font-medium">{tabbed.paymentNote}</span>
                    </>
                  )}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </section>

        {/* ═══ LEARNING APPROACH ═══ */}
        <section className="bg-card/30 border-y border-border py-14 px-6" aria-label="Learning approach">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-8 h-8 text-primary" />
                <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl">
                  Our Learning Approach in <span className="text-gradient-gold">{city.city}</span>
                </h2>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-4xl">{learningText}</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { step: '01', title: 'Diagnostic Assessment', desc: 'Map strengths & gaps across all subjects', icon: Target },
                  { step: '02', title: 'Personalised Roadmap', desc: 'Adaptive curriculum tailored to your level', icon: Lightbulb },
                  { step: '03', title: 'Daily 1-on-1 Sessions', desc: 'Live mentoring with instant doubt resolution', icon: Users },
                  { step: '04', title: 'Analytics & Review', desc: 'Weekly performance tracking & strategy updates', icon: BarChart3 },
                ].map((item, i) => (
                  <div key={i} className="p-5 rounded-xl bg-background border border-border text-center hover:border-primary/30 transition-colors">
                    <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-primary font-display font-black text-lg mb-1">{item.step}</div>
                    <h3 className="text-foreground font-display font-bold text-sm mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══ MENTORING COMPARISON TABLE ═══ */}
        <section className="max-w-5xl mx-auto px-6 py-14" aria-label="Mentoring advantage">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-8 h-8 text-primary" />
              <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl">
                1-on-1 Mentoring vs Batch Coaching
              </h2>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-4xl">{city.mentoringAdvantage}</p>
            <div className="overflow-hidden rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-secondary/50">
                    <th className="text-left px-5 py-3 text-foreground font-display">Feature</th>
                    <th className="text-center px-5 py-3 text-primary font-display">MindPeak 1-on-1</th>
                    <th className="text-center px-5 py-3 text-muted-foreground font-display">Batch Coaching</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ['Dedicated Mentor', '✓ Personal mentor', '✗ Shared teacher'],
                    ['Adaptive Curriculum', '✓ Tailored to you', '✗ One-size-fits-all'],
                    ['Doubt Resolution', '✓ Instant, 1-on-1', '✗ Crowded sessions'],
                    ['Schedule Flexibility', '✓ Your convenience', '✗ Fixed batches'],
                    ['Progress Tracking', '✓ Weekly analytics', '✗ Periodic tests only'],
                  ].map(([feature, mp, batch], i) => (
                    <tr key={i} className="bg-background">
                      <td className="px-5 py-3 text-foreground">{feature}</td>
                      <td className="px-5 py-3 text-center text-primary">{mp}</td>
                      <td className="px-5 py-3 text-center text-muted-foreground">{batch}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </section>

        {/* ═══ TESTIMONIAL SLIDER ═══ */}
        <section className="bg-card/30 border-y border-border py-14 px-6" aria-label="Testimonials">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center justify-center gap-3 mb-8">
                <Star className="w-8 h-8 text-primary" />
                <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl">
                  Success Stories from <span className="text-gradient-gold">{city.city}</span>
                </h2>
              </div>

              {/* Use existing testimonials if available, otherwise city testimonials */}
              {(() => {
                const displayTestimonials = (city.testimonials && city.testimonials.length > 0)
                  ? city.testimonials.map(t => ({ name: t.name, role: t.rank, result: '', quote: t.quote, isSample: false }))
                  : cityTestimonials;
                const current = displayTestimonials[testimonialIdx % displayTestimonials.length];
                if (!current) return null;
                return (
                  <div className="relative">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={testimonialIdx}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.3 }}
                        className="p-8 rounded-2xl bg-background border border-border text-center"
                      >
                        <Quote className="w-10 h-10 text-primary/20 mx-auto mb-4" />
                        <p className="text-foreground text-base leading-relaxed italic mb-6 max-w-2xl mx-auto">"{current.quote}"</p>
                        <p className="text-foreground font-display font-bold text-sm">{current.name}</p>
                        <p className="text-primary text-xs font-medium">{current.role}</p>
                        {current.result && <p className="text-muted-foreground text-xs mt-1">{current.result}</p>}
                        {current.isSample && <p className="text-muted-foreground/50 text-[10px] mt-2 uppercase tracking-wider">Sample testimonial</p>}
                      </motion.div>
                    </AnimatePresence>
                    <div className="flex justify-center gap-3 mt-6">
                      <button onClick={prevTestimonial} className="w-10 h-10 rounded-full border border-border hover:border-primary text-muted-foreground hover:text-primary transition-colors flex items-center justify-center" aria-label="Previous testimonial">←</button>
                      {displayTestimonials.map((_, i) => (
                        <button key={i} onClick={() => setTestimonialIdx(i)} className={`w-2.5 h-2.5 rounded-full transition-colors ${i === testimonialIdx % displayTestimonials.length ? 'bg-primary' : 'bg-border'}`} aria-label={`Go to testimonial ${i + 1}`} />
                      ))}
                      <button onClick={nextTestimonial} className="w-10 h-10 rounded-full border border-border hover:border-primary text-muted-foreground hover:text-primary transition-colors flex items-center justify-center" aria-label="Next testimonial">→</button>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </div>
        </section>

        {/* ═══ COLLEGE TARGET TABLE ═══ */}
        {(() => {
          const stateData = getStateEducation(city.state);
          if (!stateData) return null;
          const enggColleges = stateData.topEnggColleges.slice(0, 4);
          const medColleges = stateData.topMedColleges.slice(0, 3);
          return (
            <section className="max-w-5xl mx-auto px-6 py-14" aria-label="College targets">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-8 h-8 text-primary" />
                  <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl">
                    Top Colleges {city.city} Students Target
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm mb-6">Real cutoff data to help {city.city} students set concrete targets.</p>

                {/* Engineering Colleges */}
                <h3 className="text-foreground font-display font-bold text-lg mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" /> Engineering Colleges (via JEE)
                </h3>
                <div className="overflow-hidden rounded-xl border border-border mb-8">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-secondary/50">
                        <th className="text-left px-5 py-3 text-foreground font-display">College</th>
                        <th className="text-left px-5 py-3 text-foreground font-display">Cutoff</th>
                        {enggColleges[0]?.branch && <th className="text-left px-5 py-3 text-foreground font-display">Branch</th>}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {enggColleges.map((col, i) => (
                        <tr key={i} className="bg-background">
                          <td className="px-5 py-3 text-foreground font-medium">{col.name}</td>
                          <td className="px-5 py-3 text-primary text-xs font-semibold">{col.cutoff}</td>
                          {col.branch && <td className="px-5 py-3 text-muted-foreground text-xs">{col.branch}</td>}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Medical Colleges */}
                <h3 className="text-foreground font-display font-bold text-lg mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" /> Medical Colleges (via NEET)
                </h3>
                <div className="overflow-hidden rounded-xl border border-border mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-secondary/50">
                        <th className="text-left px-5 py-3 text-foreground font-display">College</th>
                        <th className="text-left px-5 py-3 text-foreground font-display">Cutoff</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {medColleges.map((col, i) => (
                        <tr key={i} className="bg-background">
                          <td className="px-5 py-3 text-foreground font-medium">{col.name}</td>
                          <td className="px-5 py-3 text-primary text-xs font-semibold">{col.cutoff}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Career paths — condensed from old paragraph */}
                <div className="grid sm:grid-cols-3 gap-4 mt-6">
                  {[
                    { title: 'Engineering (via JEE)', paths: 'Software Dev • Data Science • AI/ML • Robotics • Aerospace', salary: '₹10-50+ LPA' },
                    { title: 'Medical (via NEET)', paths: 'MBBS • Surgery • Healthcare • Research • Public Health', salary: '₹8-40+ LPA' },
                    { title: 'Research & Academia', paths: 'PhD • IISc/TIFR • Global Unis • R&D Labs', salary: 'Prestigious & Impactful' },
                  ].map((item, i) => (
                    <div key={i} className="p-5 rounded-xl bg-card border border-border">
                      <h3 className="text-foreground font-display font-bold text-sm mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed mb-2">{item.paths}</p>
                      <div className="text-primary text-xs font-semibold uppercase tracking-wider">{item.salary}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </section>
          );
        })()}

        {/* ═══ EVENTS & WORKSHOPS ═══ */}
        <section className="bg-card/30 border-y border-border py-14 px-6" aria-label="Events">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center justify-center gap-3 mb-8">
                <Calendar className="w-8 h-8 text-primary" />
                <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl">
                  Events & Workshops in <span className="text-gradient-gold">{city.city}</span>
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {events.map((event, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-background border border-border">
                    <div className="text-primary text-xs font-semibold uppercase tracking-wider mb-2">{event.date}</div>
                    <h3 className="text-foreground font-display font-bold text-lg mb-2">{event.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{event.description}</p>
                    <button onClick={openDemoModal} className="px-5 py-2.5 bg-primary text-primary-foreground font-display text-xs font-bold uppercase tracking-wider hover:scale-105 transition-transform rounded-lg">
                      {event.ctaLabel}
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══ PARENT TRACKING ═══ */}
        <section className="max-w-5xl mx-auto px-6 py-14" aria-label="Performance tracking">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="w-8 h-8 text-primary" />
              <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl">Parent-Focused Performance Tracking</h2>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-4xl">{city.parentTracking}</p>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { title: 'Weekly Reports', desc: 'Topic-wise accuracy, speed, mock percentiles, and mentor observations.' },
                { title: 'Parent Dashboard', desc: 'Real-time attendance, homework, and performance trends — 24/7 access.' },
                { title: 'Strategy Calls', desc: 'Monthly mentor-parent discussions on preparation health and rank projections.' },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="text-foreground font-display font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ═══ WHY STANDS OUT ═══ */}
        <section className="bg-card/30 border-y border-border py-14 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-primary" />
                <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl">
                  Why MindPeak Stands Out in <span className="text-gradient-gold">{city.city}</span>
                </h2>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed max-w-4xl">{standsOutText}</p>
            </motion.div>
          </div>
        </section>

        {/* ═══ TARGET COLLEGES ═══ */}
        {city.targetColleges && city.targetColleges.length > 0 && (
          <section className="max-w-5xl mx-auto px-6 py-14" aria-label="Target colleges">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-8 h-8 text-primary" />
                <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl">
                  Top Colleges {city.city} Students Target
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-6">
                {city.targetColleges.map((college, i) => (
                  <div key={i} className="p-4 rounded-xl bg-card border border-border text-center hover:border-primary/40 transition-colors">
                    <BookOpen className="w-5 h-5 text-primary mx-auto mb-2" />
                    <span className="text-foreground text-xs font-medium">{college}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>
        )}

        {/* ═══ FAQ ACCORDION ═══ */}
        <section className="bg-card/30 border-y border-border py-14 px-6" aria-label="FAQs">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl text-center mb-10">
              {examLabel} Coaching in {city.city} — <span className="text-gradient-gold">FAQs</span>
            </h2>
            <div className="space-y-3">
              {expandedFaqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className={`rounded-xl border transition-all duration-300 ${isOpen ? 'bg-background/50 backdrop-blur-xl border-primary/30 shadow-card' : 'bg-background/25 backdrop-blur-lg border-border/40 hover:border-border/70'}`}>
                    <button onClick={() => setOpenFaq(isOpen ? null : i)} className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left" aria-expanded={isOpen}>
                      <div className="flex-1">
                        <span className={`text-sm font-semibold transition-colors block ${isOpen ? 'text-foreground' : 'text-foreground/80'}`}>{faq.q}</span>
                        {faq.tldr && !isOpen && <span className="text-muted-foreground text-xs mt-1 block">TL;DR: {faq.tldr}</span>}
                      </div>
                      <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }} className="flex-shrink-0">
                        <ChevronDown className={`w-4 h-4 ${isOpen ? 'text-primary' : 'text-muted-foreground'}`} />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                          <div className="px-5 pb-4">
                            <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-3" />
                            {faq.tldr && <p className="text-primary text-xs font-semibold mb-2">TL;DR: {faq.tldr}</p>}
                            <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══ LEAD CAPTURE + CTA ═══ */}
        <section className="py-14 px-6" aria-label="Enrol">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
            {/* CTA side */}
            <div>
              <Rocket className="w-10 h-10 text-primary mb-4" />
              <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-4">
                Ready to Start Your {examLabel} Journey in <span className="text-gradient-gold">{city.city}</span>?
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">{ctaText}</p>
              <div className="flex flex-wrap gap-4">
                <button onClick={openDemoModal} className="px-10 py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-[0.15em] shadow-gold-glow hover:scale-105 transition-transform">
                  Book Free Demo — {city.city}
                </button>
                <a href="tel:+918219457704" className="px-8 py-4 border border-primary/40 text-primary font-display text-sm uppercase tracking-[0.15em] hover:bg-primary/10 transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </div>
            </div>
            {/* Lead form side */}
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="font-display font-bold text-foreground text-lg mb-4">Reserve Your Spot — {city.city}</h3>
              <LeadCaptureForm city={city} openDemoModal={openDemoModal} />
            </div>
          </div>
        </section>

        {/* ═══ AREAS SERVED ═══ */}
        {city.localAreas && city.localAreas.length > 0 && (
          <section className="bg-card/30 border-y border-border py-14 px-6" aria-label="Areas served">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-8 h-8 text-primary" />
                <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl">
                  {examLabel} Coaching for All Areas in {city.city}
                </h2>
              </div>
              <p className="text-muted-foreground mb-6 max-w-3xl">
                MindPeak's online 1-on-1 coaching is available for students across all localities in {city.city}.
              </p>
              <div className="flex flex-wrap gap-2">
                {city.localAreas.map((area, i) => (
                  <span key={i} className="px-4 py-2 rounded-full bg-background border border-border text-muted-foreground text-xs hover:border-primary/40 hover:text-primary transition-colors">
                    <MapPin className="w-3 h-3 inline mr-1" />{area}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══ INTERNAL LINKS ═══ */}
        <section className="max-w-5xl mx-auto px-6 py-14">
          <h3 className="font-display font-bold text-foreground text-xl mb-6">Explore More</h3>
          <div className="flex flex-wrap gap-3">
            <Link to="/" className="px-5 py-3 rounded-lg bg-card border border-border text-foreground text-sm hover:border-primary/40 transition-colors flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-primary" /> Home
            </Link>
            <Link to="/courses" className="px-5 py-3 rounded-lg bg-card border border-border text-foreground text-sm hover:border-primary/40 transition-colors flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-primary" /> All Courses
            </Link>
            {city.exams.includes(otherExam) && (
              <Link to={`/${otherExam}-coaching-in-${city.slug}`} className="px-5 py-3 rounded-lg bg-card border border-border text-foreground text-sm hover:border-primary/40 transition-colors flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" /> {otherExamLabel} Coaching in {city.city}
              </Link>
            )}
          </div>
          <h3 className="font-display font-bold text-foreground text-lg mt-10 mb-4">{examLabel} Coaching in Other Cities</h3>
          <div className="flex flex-wrap gap-2">
            {cities.filter((c) => c.slug !== city.slug && c.exams.includes(exam)).slice(0, 12).map((c) => (
              <Link key={c.slug} to={`/${exam}-coaching-in-${c.slug}`} className="px-4 py-2 rounded-full bg-card border border-border text-muted-foreground text-xs hover:border-primary/40 hover:text-primary transition-colors">
                {examLabel} Coaching in {c.city}
              </Link>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-background border-t border-border py-8 px-6 text-center" role="contentinfo">
          <p className="text-muted-foreground text-xs tracking-wider mb-4">
            © 2026 MindPeak Institute. Personalized 1-on-1 {examLabel} Coaching in {city.city}, {city.state}.
          </p>
          <div className="flex justify-center gap-4 text-xs">
            <Link to="/terms-and-conditions" className="text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</Link>
            <span className="text-border">|</span>
            <Link to="/refund-policy" className="text-muted-foreground hover:text-primary transition-colors">Refund Policy</Link>
          </div>
        </footer>
      </main>
    </>
  );
};

export default LocationPage;
