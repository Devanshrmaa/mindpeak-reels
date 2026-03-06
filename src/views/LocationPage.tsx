"use client";

import { usePathname } from 'next/navigation';
import { Navigate } from '@/components/Navigate';
import { motion } from 'framer-motion';
import { Link } from '@/components/RouterLink';
import { ChevronDown, Phone, ArrowRight, CheckCircle, Users, BarChart3, GraduationCap, MapPin, Building2, Quote, Star, BookOpen, Briefcase, Target, Lightbulb, Rocket } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { useDemoModal } from '@/components/DemoBookingModal';
import { buildFAQSchemaFromQA } from '@/components/PageFAQ';
import { cities, allCities, getLocationTitle, getLocationDescription } from '@/data/cityData';
import type { CityData } from '@/data/cityData';
const logo = '/images/logo.jpeg';

/* ─── FALLBACK CONTENT GENERATORS (for cities missing new fields) ─── */

function fallbackIntro(city: CityData, examLabel: string): string {
  return `MindPeak Institute is a premier online coaching platform that has been transforming how students in ${city.city}, ${city.state} prepare for competitive entrance examinations like ${examLabel}. Our mission is simple yet powerful — to provide every student in ${city.city} with access to world-class, personalised 1-on-1 mentoring that was once reserved only for students in metro coaching hubs like Delhi and Kota. We believe that a student's potential should never be limited by their geographic location, which is why MindPeak Institute in ${city.city} leverages cutting-edge online technology to deliver daily live sessions with dedicated expert mentors directly to students' homes. Whether a student comes from CBSE, ICSE, or state board backgrounds, our adaptive curriculum meets them exactly where they are and builds a customised roadmap toward their dream college. MindPeak Institute in ${city.city} has already helped hundreds of students across ${city.state} achieve ranks they once thought impossible — and our 95% success rate speaks to the effectiveness of truly personalised coaching. For families in ${city.city} who are tired of overcrowded batch coaching centres and want measurable, transparent results, MindPeak Institute offers a fundamentally better way to prepare for ${examLabel}.`;
}

function fallbackCourses(city: CityData, examLabel: string): string {
  return `MindPeak Institute in ${city.city} offers a comprehensive suite of programs designed to cover every aspect of competitive exam preparation. Our flagship JEE Main & Advanced program is a rigorous, concept-first curriculum covering Physics, Chemistry, and Mathematics at a depth that matches and exceeds the best coaching institutes in the country. Each subject is taught by specialist mentors — IIT and NIT alumni who bring real problem-solving experience to every session. For medical aspirants, our NEET UG program provides exhaustive coverage of Physics, Chemistry, and Biology with a strong NCERT-first foundation that NEET demands, supplemented by advanced application-based practice. Beyond subject coaching, MindPeak Institute in ${city.city} provides structured test series aligned with the latest exam patterns — including full-length mock tests, chapter-wise tests, and previous year question practice with detailed performance analytics. Our Foundation programs for Class 9-10 students build early competitive readiness, giving ${city.city} students a head start over peers who begin preparation in Class 11. Every program includes dedicated doubt-resolution sessions, personalised study material curated by mentors, and strategic revision plans designed around each student's strengths and weaknesses. Whether a ${city.city} student needs intensive crash-course preparation or a methodical two-year program, MindPeak Institute has the right course structure to deliver results.`;
}

function fallbackLearning(city: CityData): string {
  return `What makes MindPeak Institute in ${city.city} fundamentally different from traditional coaching is our learning methodology. Every student begins with a comprehensive diagnostic assessment that maps their conceptual strengths and gaps across all subjects. Based on this assessment, a personalised learning roadmap is created — not a generic syllabus schedule, but a truly adaptive curriculum that evolves as the student progresses. Daily 1-on-1 live sessions with dedicated mentors ensure that teaching pace matches comprehension speed — no student is left behind, and no advanced learner is held back. Our mentors use interactive digital whiteboards, real-time problem-solving demonstrations, and recorded session playback to maximise learning retention. Every session is followed by curated practice assignments calibrated to the student's current level, progressively building toward exam-level difficulty. Weekly mock tests simulate actual exam conditions, and detailed post-test analysis with mentors identifies patterns — whether a student loses marks due to conceptual gaps, calculation errors, or time management issues. MindPeak Institute in ${city.city} also incorporates project-based learning for complex topics, making abstract concepts tangible through real-world applications. This multi-layered approach creates a preparation ecosystem that consistently produces outstanding results for ${city.city} students.`;
}

function fallbackCareer(city: CityData): string {
  return `Students from ${city.city} who complete their JEE or NEET preparation with MindPeak Institute open doors to India's most prestigious institutions and rewarding career paths. JEE qualifiers gain admission to IITs, NITs, IIITs, and top private engineering colleges — launching careers in software engineering, data science, artificial intelligence, robotics, aerospace, and core engineering disciplines that offer starting packages of ₹10-50+ LPA. NEET qualifiers secure seats in top government and private medical colleges, embarking on careers in medicine, surgery, specialised healthcare, medical research, and public health — professions that offer both financial stability and societal impact. Beyond direct career outcomes, the analytical thinking, problem-solving discipline, and time management skills built during MindPeak Institute's rigorous preparation serve students throughout their professional lives. Our alumni from ${city.state} have gone on to pursue higher education at global universities, secure competitive internships at leading companies, and establish successful careers across diverse fields. MindPeak Institute in ${city.city} doesn't just prepare students for an exam — it builds the intellectual foundation for lifelong career success. Our mentors also provide guidance on college selection, branch preferences, and career planning, ensuring that ${city.city} students make informed decisions about their academic futures.`;
}

function fallbackStandsOut(city: CityData): string {
  return `MindPeak Institute stands out in ${city.city} because of an unwavering commitment to personalised excellence. While batch coaching centres in ${city.city} and across ${city.state} treat students as numbers in a classroom, MindPeak pairs every student with a dedicated mentor who becomes their academic partner for the entire preparation journey. Our transparent weekly reporting system gives ${city.city} parents complete visibility into their child's progress — something no local batch centre offers. The combination of IIT/AIIMS alumni mentors, adaptive AI-driven curriculum, and data-backed performance tracking creates a coaching experience that is genuinely unmatched in ${city.city}. Students who switch from batch coaching to MindPeak consistently report 100-150+ marks improvement within the first three months, validating that personalised attention is the single most important factor in competitive exam success.`;
}

function fallbackCTA(city: CityData, examLabel: string): string {
  return `Your ${examLabel} journey starts with a single step. MindPeak Institute in ${city.city} invites you to experience the power of personalised 1-on-1 mentoring through a completely free demo class — no commitments, no pressure. See firsthand how our dedicated mentors, adaptive curriculum, and transparent tracking system can transform your preparation. Speak with our academic counselors, get a personalised assessment of your current preparation level, and discover why hundreds of students across ${city.state} trust MindPeak Institute. Book your free demo class today or call us at +91-82194-57704.`;
}

const LocationPage = () => {
  const pathname = usePathname();
  const slug = pathname.replace(/^\//, '');
  const { openDemoModal } = useDemoModal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Parse slug: "jee-coaching-in-delhi" → exam="jee", citySlug="delhi"
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

  // Resolved content — use city data if available, otherwise generate
  const introText = city.introduction || fallbackIntro(city, examLabel);
  const coursesText = city.coursesOffered || fallbackCourses(city, examLabel);
  const learningText = city.learningApproach || fallbackLearning(city);
  const careerText = city.careerOpportunities || fallbackCareer(city);
  const standsOutText = city.whyStandsOut || fallbackStandsOut(city);
  const ctaText = city.callToActionText || fallbackCTA(city, examLabel);

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
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
      geo: {
        '@type': 'GeoCoordinates',
        latitude: city.lat,
        longitude: city.lng,
      },
      areaServed: { '@type': 'City', name: city.city },
      priceRange: '₹₹₹',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '500',
        bestRating: '5',
      },
    },
    buildFAQSchemaFromQA(city.faqs),
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mindpeakinstitute.com' },
        { '@type': 'ListItem', position: 2, name: `${examLabel} Coaching`, item: `https://mindpeakinstitute.com/courses` },
        { '@type': 'ListItem', position: 3, name: `${examLabel} Coaching in ${city.city}`, item: `https://mindpeakinstitute.com/${exam}-coaching-in-${city.slug}` },
      ],
    },
  ];

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
              <Link to="/" itemProp="item" className="hover:text-primary transition-colors">
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <span>/</span>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link to="/courses" itemProp="item" className="hover:text-primary transition-colors">
                <span itemProp="name">Courses</span>
              </Link>
              <meta itemProp="position" content="2" />
            </li>
            <span>/</span>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name" className="text-foreground">{examLabel} Coaching in {city.city}</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>

        {/* ══════════════════════════════════════════════════════
            SECTION 1: INTRODUCTION / HERO
            ══════════════════════════════════════════════════════ */}
        <section className="max-w-5xl mx-auto px-6 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <img src={logo} alt="MindPeak Institute" className="w-14 h-14 rounded-full" width={56} height={56} />
              <div>
                <p className="text-primary text-xs uppercase tracking-[0.2em] font-semibold">MindPeak Institute</p>
                <p className="text-muted-foreground text-sm">Personalized 1-on-1 {examFull} Coaching</p>
              </div>
            </div>

            <h1 className="font-display font-black text-foreground mb-6" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}>
              Best {examLabel} Coaching in{' '}
              <span className="text-gradient-gold">{city.city}</span>
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-6">
              {introText}
            </p>

            <p className="text-muted-foreground text-base leading-relaxed max-w-3xl mb-8">
              {city.educationLandscape}
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={openDemoModal}
                className="px-8 py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-[0.15em] shadow-gold-glow hover:scale-105 transition-transform"
              >
                Book Free Demo Class
              </button>
              <a
                href="tel:+918219457704"
                className="px-8 py-4 border border-border text-foreground font-display text-sm uppercase tracking-[0.15em] hover:border-primary hover:text-primary transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" /> Call +91 82194 57704
              </a>
            </div>
          </motion.div>
        </section>

        {/* Stats Bar */}
        <section className="bg-secondary/30 border-y border-border py-10 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '500+', label: 'Students Mentored' },
              { value: '95%', label: 'Selection Rate' },
              { value: 'AIR 42', label: `Best ${examLabel} Rank` },
              { value: '1-on-1', label: 'Dedicated Mentoring' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display font-black text-primary text-2xl md:text-3xl mb-1">{stat.value}</div>
                <div className="text-muted-foreground text-xs uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            SECTION 2: WHY STUDENTS CHOOSE MINDPEAK
            ══════════════════════════════════════════════════════ */}
        <section className="max-w-5xl mx-auto px-6 py-16" aria-label={`Why students in ${city.city} choose MindPeak`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl">
                Why Students in <span className="text-gradient-gold">{city.city}</span> Choose MindPeak
              </h2>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-4xl">
              {city.whyMindPeak}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {city.highlights.map((highlight, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{highlight}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════════
            SECTION 3: COURSES OFFERED
            ══════════════════════════════════════════════════════ */}
        <section className="bg-card/30 border-y border-border py-16 px-6" aria-label={`Courses offered for ${city.city} students`}>
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
                <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl">
                  Courses Offered for Students in <span className="text-gradient-gold">{city.city}</span>
                </h2>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-4xl">
                {coursesText}
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  { title: 'JEE Main & Advanced', desc: 'Comprehensive Physics, Chemistry, Mathematics coaching with IIT alumni mentors. Covers JEE Main + Advanced level depth.', icon: '🎯' },
                  { title: 'NEET UG', desc: 'NCERT-first Biology, Physics, Chemistry program with specialised medical entrance mentors and AIIMS-level practice.', icon: '🏥' },
                  { title: 'Foundation (Class 9-10)', desc: 'Early competitive readiness building. Strengthen fundamentals and develop exam temperament before Class 11.', icon: '📐' },
                  { title: 'Crash Course', desc: 'Intensive short-term programs for students needing focused revision and strategic preparation before exams.', icon: '⚡' },
                  { title: 'Dropper / Repeater', desc: 'Dedicated program for students retaking JEE/NEET. Focused gap analysis and targeted improvement strategy.', icon: '🔄' },
                  { title: 'Mock Test Series', desc: 'Full-length and topic-wise tests with AI-powered analytics, time tracking, and detailed performance reports.', icon: '📊' },
                ].map((course, i) => (
                  <div key={i} className="p-6 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors">
                    <div className="text-2xl mb-3">{course.icon}</div>
                    <h3 className="text-foreground font-display font-bold text-lg mb-2">{course.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{course.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            SECTION 4: LEARNING APPROACH
            ══════════════════════════════════════════════════════ */}
        <section className="max-w-5xl mx-auto px-6 py-16" aria-label="Learning approach">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="w-8 h-8 text-primary" />
              <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl">
                Our Learning Approach in <span className="text-gradient-gold">{city.city}</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-4xl">
              {learningText}
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: '01', title: 'Diagnostic Assessment', desc: 'Map strengths & gaps across all subjects' },
                { step: '02', title: 'Personalised Roadmap', desc: 'Adaptive curriculum tailored to your level' },
                { step: '03', title: 'Daily 1-on-1 Sessions', desc: 'Live mentoring with real-time doubt resolution' },
                { step: '04', title: 'Analytics & Review', desc: 'Weekly performance tracking & strategy adjustments' },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-xl bg-card border border-border text-center">
                  <div className="text-primary font-display font-black text-2xl mb-2">{item.step}</div>
                  <h3 className="text-foreground font-display font-bold text-sm mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════════
            SECTION 5: 1-on-1 MENTORING ADVANTAGE
            ══════════════════════════════════════════════════════ */}
        <section className="bg-card/30 border-y border-border py-16 px-6" aria-label="Mentoring advantage">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-primary" />
                <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl">
                  1-on-1 Mentoring Advantage for {city.city} Students
                </h2>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-4xl">
                {city.mentoringAdvantage}
              </p>

              {/* Comparison Mini-Table */}
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
                    ].map(([feature, mindpeak, batch], i) => (
                      <tr key={i} className="bg-background">
                        <td className="px-5 py-3 text-foreground">{feature}</td>
                        <td className="px-5 py-3 text-center text-primary">{mindpeak}</td>
                        <td className="px-5 py-3 text-center text-muted-foreground">{batch}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            SECTION 6: CAREER OPPORTUNITIES
            ══════════════════════════════════════════════════════ */}
        <section className="max-w-5xl mx-auto px-6 py-16" aria-label={`Career opportunities for ${city.city} students`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-8 h-8 text-primary" />
              <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl">
                Career Opportunities After Training in <span className="text-gradient-gold">{city.city}</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-4xl">
              {careerText}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Engineering (via JEE)', paths: 'Software Dev • Data Science • AI/ML • Robotics • Aerospace • Core Engineering', salary: '₹10-50+ LPA' },
                { title: 'Medical (via NEET)', paths: 'MBBS • Surgery • Specialised Healthcare • Medical Research • Public Health', salary: '₹8-40+ LPA' },
                { title: 'Research & Academia', paths: 'PhD Programs • IISc/TIFR • Global Universities • R&D Labs • Teaching', salary: 'Prestigious & Impactful' },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="text-foreground font-display font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{item.paths}</p>
                  <div className="text-primary text-xs font-semibold uppercase tracking-wider">{item.salary}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════════
            SECTION 7: PARENT-FOCUSED PERFORMANCE TRACKING
            ══════════════════════════════════════════════════════ */}
        <section className="bg-card/30 border-y border-border py-16 px-6" aria-label="Performance tracking for parents">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="w-8 h-8 text-primary" />
                <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl">
                  Parent-Focused Performance Tracking
                </h2>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-4xl">
                {city.parentTracking}
              </p>

              <div className="grid sm:grid-cols-3 gap-5">
                {[
                  { title: 'Weekly Reports', desc: 'Topic-wise accuracy, speed improvements, mock percentiles, and mentor observations delivered every week.' },
                  { title: 'Parent Dashboard', desc: 'Real-time visibility into attendance, homework completion, and performance trends — accessible 24/7.' },
                  { title: 'Monthly Strategy Calls', desc: 'Detailed mentor-parent discussions on preparation health, lifestyle adjustments, and rank projections.' },
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-xl bg-background border border-border">
                    <h3 className="text-foreground font-display font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            SECTION 8: WHY MINDPEAK STANDS OUT
            ══════════════════════════════════════════════════════ */}
        <section className="max-w-5xl mx-auto px-6 py-16" aria-label={`Why MindPeak stands out in ${city.city}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8 text-primary" />
              <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl">
                Why MindPeak Stands Out in <span className="text-gradient-gold">{city.city}</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed max-w-4xl">
              {standsOutText}
            </p>
          </motion.div>
        </section>

        {/* Student Testimonials */}
        {city.testimonials && city.testimonials.length > 0 && (
          <section className="bg-card/30 border-y border-border py-16 px-6" aria-label={`${examLabel} coaching testimonials from ${city.city}`}>
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-8 h-8 text-primary" />
                  <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl">
                    Success Stories from <span className="text-gradient-gold">{city.city}</span>
                  </h2>
                </div>
                <p className="text-muted-foreground mb-8 max-w-3xl">
                  Real results from real {city.city} students who transformed their preparation with MindPeak's personalized 1-on-1 coaching.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  {city.testimonials.map((t, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="p-6 rounded-2xl bg-background border border-border relative"
                    >
                      <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">
                        "{t.quote}"
                      </p>
                      <div className="border-t border-border pt-3">
                        <p className="text-foreground font-semibold text-sm">{t.name}</p>
                        <p className="text-primary text-xs font-medium">{t.rank}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Target Colleges */}
        {city.targetColleges && city.targetColleges.length > 0 && (
          <section className="max-w-5xl mx-auto px-6 py-16" aria-label={`Target colleges for ${city.city} students`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-8 h-8 text-primary" />
                <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl">
                  Top Colleges {city.city} Students Target
                </h2>
              </div>
              <p className="text-muted-foreground mb-8 max-w-3xl">
                Our {examLabel} coaching prepares {city.city} students for admission to these premier institutions and more.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {city.targetColleges.map((college, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="p-4 rounded-xl bg-card border border-border text-center hover:border-primary/40 transition-colors"
                  >
                    <BookOpen className="w-5 h-5 text-primary mx-auto mb-2" />
                    <span className="text-foreground text-xs font-medium">{college}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>
        )}

        {/* Areas Served */}
        {city.localAreas && city.localAreas.length > 0 && (
          <section className="bg-card/30 border-y border-border py-16 px-6" aria-label={`Areas served in ${city.city}`}>
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                  <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl">
                    {examLabel} Coaching for All Areas in {city.city}
                  </h2>
                </div>
                <p className="text-muted-foreground mb-6 max-w-3xl">
                  MindPeak's online 1-on-1 coaching is available for students across all localities in {city.city}. No commute, no area restrictions — world-class {examLabel} preparation from your home.
                </p>
                <div className="flex flex-wrap gap-2">
                  {city.localAreas.map((area, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full bg-background border border-border text-muted-foreground text-xs hover:border-primary/40 hover:text-primary transition-colors"
                    >
                      <MapPin className="w-3 h-3 inline mr-1" />
                      {area}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* ══════════════════════════════════════════════════════
            SECTION CTA: CALL TO ACTION
            ══════════════════════════════════════════════════════ */}
        <section className="bg-primary/10 border-y border-primary/20 py-12 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Rocket className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-4">
              Ready to Start Your {examLabel} Journey in {city.city}?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              {ctaText}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={openDemoModal}
                className="px-12 py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-[0.15em] shadow-gold-glow hover:scale-105 transition-transform"
              >
                Book Your Free Demo — {city.city}
              </button>
              <a
                href="tel:+918219457704"
                className="px-8 py-4 border border-primary/40 text-primary font-display text-sm uppercase tracking-[0.15em] hover:bg-primary/10 transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto px-6 py-16" aria-label={`${examLabel} coaching FAQs for ${city.city}`}>
          <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl text-center mb-10">
            {examLabel} Coaching in {city.city} — <span className="text-gradient-gold">FAQs</span>
          </h2>

          <div className="space-y-3">
            {city.faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className={`rounded-xl border transition-all duration-300 ${
                    isOpen
                      ? 'bg-background/50 backdrop-blur-xl border-primary/30 shadow-card'
                      : 'bg-background/25 backdrop-blur-lg border-border/40 hover:border-border/70'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className={`text-sm font-semibold transition-colors ${isOpen ? 'text-foreground' : 'text-foreground/80'}`}>
                      {faq.q}
                    </span>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }} className="flex-shrink-0">
                      <ChevronDown className={`w-4 h-4 ${isOpen ? 'text-primary' : 'text-muted-foreground'}`} />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-4">
                          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-3" />
                          <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* Internal Links */}
        <section className="max-w-5xl mx-auto px-6 pb-16">
          <h3 className="font-display font-bold text-foreground text-xl mb-6">Explore More</h3>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/"
              className="px-5 py-3 rounded-lg bg-card border border-border text-foreground text-sm hover:border-primary/40 transition-colors flex items-center gap-2"
            >
              <ArrowRight className="w-4 h-4 text-primary" /> Home — About MindPeak Institute
            </Link>
            <Link
              to="/courses"
              className="px-5 py-3 rounded-lg bg-card border border-border text-foreground text-sm hover:border-primary/40 transition-colors flex items-center gap-2"
            >
              <ArrowRight className="w-4 h-4 text-primary" /> All {examLabel} & {otherExamLabel} Courses
            </Link>
            {city.exams.includes(otherExam) && (
              <Link
                to={`/${otherExam}-coaching-in-${city.slug}`}
                className="px-5 py-3 rounded-lg bg-card border border-border text-foreground text-sm hover:border-primary/40 transition-colors flex items-center gap-2"
              >
                <ArrowRight className="w-4 h-4 text-primary" /> {otherExamLabel} Coaching in {city.city}
              </Link>
            )}
          </div>

          {/* Other City Links */}
          <h3 className="font-display font-bold text-foreground text-lg mt-10 mb-4">
            {examLabel} Coaching in Other Cities
          </h3>
          <div className="flex flex-wrap gap-2">
            {cities
              .filter((c) => c.slug !== city.slug && c.exams.includes(exam))
              .slice(0, 12)
              .map((c) => (
                <Link
                  key={c.slug}
                  to={`/${exam}-coaching-in-${c.slug}`}
                  className="px-4 py-2 rounded-full bg-card border border-border text-muted-foreground text-xs hover:border-primary/40 hover:text-primary transition-colors"
                >
                  {examLabel} Coaching in {c.city}
                </Link>
              ))}
          </div>
        </section>

        {/* Footer CTA */}
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
