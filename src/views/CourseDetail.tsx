"use client";

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Link } from '@/components/RouterLink';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Users, Clock, BookOpen, Download, Calendar } from 'lucide-react';
import { getCourseBySlug, courses, type Course } from '@/data/coursesData';
import { useDemoModal } from '@/components/DemoBookingModal';
import { NCERTDownloadModal } from '@/components/NCERTDownloadModal';
import { StudyPlanSection } from '@/components/StudyPlanSection';
import { SEOHead } from '@/components/SEOHead';
import Image from 'next/image';
const logo = '/images/logo.jpeg';

const ease = [0.16, 1, 0.3, 1] as const;

/* ── JSON-LD builder ── */
function buildCourseJsonLd(course: Course) {
  const BASE = 'https://mindpeakinstitute.com';
  const url = `${BASE}/course/${course.slug}`;

  const courseSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.name,
    description: course.description,
    url,
    provider: {
      '@type': 'Organization',
      name: 'MindPeak Institute',
      url: BASE,
      logo: `${BASE}/images/logo.jpeg`,
      sameAs: [BASE],
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: course.duration,
      instructor: {
        '@type': 'Organization',
        name: 'MindPeak Institute',
      },
    },
    offers: {
      '@type': 'Offer',
      price: course.fee.replace(/[^0-9]/g, '').slice(0, -2) || '0',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url,
    },
    educationalLevel: course.category === 'foundation' ? 'Secondary' : 'Higher Secondary',
    inLanguage: 'en',
    about: course.targetExam,
  };

  if (course.syllabus?.length) {
    courseSchema.syllabusSections = course.syllabus.map(s => ({
      '@type': 'Syllabus',
      name: s.subject,
      description: s.modules.join(', '),
    }));
  }

  const schemas: object[] = [courseSchema];

  // BreadcrumbList
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Courses', item: `${BASE}/courses` },
      { '@type': 'ListItem', position: 3, name: course.name, item: url },
    ],
  });

  // FAQPage
  if (course.faqs?.length) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: course.faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }

  return schemas;
}

/* ── Related courses helper ── */
function getRelatedCourses(current: Course): Course[] {
  return courses
    .filter(c => c.slug !== current.slug)
    .sort((a, b) => {
      // Same category first, then same exam
      const aScore = (a.category === current.category ? 2 : 0) + (a.targetExam === current.targetExam ? 1 : 0);
      const bScore = (b.category === current.category ? 2 : 0) + (b.targetExam === current.targetExam ? 1 : 0);
      return bScore - aScore;
    })
    .slice(0, 4);
}

const CourseDetail = () => {
  const params = useParams();
  const slug = params.slug as string;
  const router = useRouter();
  const { openDemoModal } = useDemoModal();
  const [brochureBook, setBrochureBook] = useState<{ title: string; file: string } | null>(null);
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const course = getCourseBySlug(slug || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!course) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-display font-bold text-foreground mb-4 tracking-[-0.02em]">Course Not Found</h1>
          <p className="text-muted-foreground/70 mb-6 text-sm">The course you're looking for doesn't exist.</p>
          <Link to="/courses" className="text-primary/80 hover:text-primary transition-colors text-sm">← Back to Courses</Link>
        </div>
      </div>
    );
  }

  const Icon = course.icon;

  const handleDownloadBrochure = () => {
    if (course.brochure) {
      setBrochureBook(course.brochure);
      setBrochureModalOpen(true);
    }
  };

  const categoryLabel = {
    jee: 'JEE Program',
    neet: 'NEET Program',
    foundation: 'Foundation Program',
    crash: 'Crash Course',
    other: course.targetExam + ' Program',
  }[course.category];

  const jsonLd = buildCourseJsonLd(course);

  return (
    <>
      <SEOHead
        title={`${course.name} — MindPeak Institute`}
        description={course.description.slice(0, 160)}
        canonical={`https://mindpeakinstitute.com/course/${course.slug}`}
        jsonLd={jsonLd}
      />
      <NCERTDownloadModal isOpen={brochureModalOpen} onClose={() => setBrochureModalOpen(false)} book={brochureBook} />

      <div className="min-h-screen bg-background">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-2xl backdrop-saturate-[180%] border-b border-foreground/[0.06]">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <Image src={logo} alt="MindPeak Institute" className="w-9 h-9 rounded-full ring-1 ring-foreground/[0.08] group-hover:ring-primary/30 transition-all duration-500" width={36} height={36} priority />
              <span className="font-display font-semibold text-foreground text-sm tracking-[0.1em]">MINDPEAK</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-[12px] font-medium tracking-[0.15em] uppercase">Home</Link>
              <Link to="/courses" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-[12px] font-medium tracking-[0.15em] uppercase">Courses</Link>
              <button onClick={openDemoModal} className="px-6 py-2 bg-primary text-primary-foreground text-[11px] uppercase tracking-[0.15em] font-medium rounded-full hover:shadow-[0_0_30px_-8px_hsl(var(--primary)/0.4)] transition-all duration-500">Book Demo</button>
            </div>
          </div>
        </nav>

        {/* Back button */}
        <div className="pt-24 px-6">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => router.push('/courses')}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground/70 transition-colors duration-300 text-[12px] tracking-[0.1em] uppercase"
            >
              <ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.5} />
              All Courses
            </button>
          </div>
        </div>

        {/* Hero Section */}
        <section className="pt-10 pb-16 md:pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div
              className="flex flex-col md:flex-row gap-8 items-start"
            >
              {/* Course Icon/Logo */}
              <div className="shrink-0">
                {course.logo ? (
                  <div className="w-20 h-20 rounded-2xl overflow-hidden ring-1 ring-foreground/[0.08] bg-white/5">
                    <img src={course.logo} alt={course.name} width={80} height={80} loading="lazy" className="w-full h-full object-contain" />
                  </div>
                ) : (
                  <div className="w-20 h-20 rounded-2xl bg-foreground/[0.04] flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary/60" strokeWidth={1.5} />
                  </div>
                )}
              </div>

              {/* Course Title & Meta */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="h-px w-6 bg-primary/30" />
                  <span className="text-[11px] uppercase tracking-[0.3em] text-primary/60 font-medium">{categoryLabel}</span>
                </div>
                <h1 className="font-display font-bold text-foreground tracking-[-0.03em] mb-5" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
                  {course.name}
                </h1>

                {/* Meta line */}
                <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-8">
                  <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" strokeWidth={1.5} /> {course.mode}</span>
                  <span className="w-px h-3 bg-foreground/[0.08]" />
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" strokeWidth={1.5} /> {course.duration}</span>
                  <span className="w-px h-3 bg-foreground/[0.08]" />
                  <span className="text-primary/60 font-medium">{course.fee}</span>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={openDemoModal}
                    className="group inline-flex items-center gap-3 px-8 py-3.5 bg-primary text-primary-foreground text-[12px] uppercase tracking-[0.15em] font-medium rounded-full hover:shadow-[0_0_40px_-8px_hsl(var(--primary)/0.5)] transition-all duration-500"
                  >
                    Book Your Free Demo
                    <span className="w-5 h-5 rounded-full border border-current grid place-items-center transition-transform duration-500 group-hover:rotate-45">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.2" />
                      </svg>
                    </span>
                  </button>
                  {course.brochure && (
                    <button
                      onClick={handleDownloadBrochure}
                      className="inline-flex items-center gap-2 px-7 py-3.5 border border-foreground/[0.1] text-foreground/80 text-[12px] uppercase tracking-[0.15em] font-medium rounded-full hover:border-primary/20 hover:text-foreground transition-all duration-400"
                    >
                      <Download className="w-3.5 h-3.5" strokeWidth={1.5} />
                      Brochure
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── DYNAMIC STUDY PLAN (only for JEE/NEET courses) ───── */}
        {(course.category === 'jee' || course.category === 'neet') && (
          <StudyPlanSection
            examType={course.category === 'neet' ? 'NEET' : 'JEE'}
            themed
          />
        )}

        {/* Description */}
        <section className="px-6 pb-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7, ease }}
              className="p-8 md:p-10 rounded-2xl border border-foreground/[0.06] bg-foreground/[0.02]"
            >
              <h2 className="font-display font-semibold text-foreground text-lg mb-4 tracking-[-0.01em]">About This Course</h2>
              <p className="text-muted-foreground/70 leading-[1.8] text-sm sm:text-base">{course.description}</p>
            </motion.div>
          </div>
        </section>

        {/* What's Included */}
        <section className="px-6 pb-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="p-8 md:p-10 rounded-2xl border border-primary/10 bg-foreground/[0.02]"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-6 bg-primary/30" />
                <span className="text-[11px] uppercase tracking-[0.3em] text-primary/60 font-medium">Included</span>
              </div>
              <h2 className="font-display font-semibold text-foreground text-lg mb-7 tracking-[-0.01em]">What You Get</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.highlights.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.5, ease }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-foreground/[0.02] border border-foreground/[0.04]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                    <span className="text-foreground/80 text-sm leading-relaxed">{h}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Detailed Sections */}
        {course.detailedSections.map((section, i) => (
          <section key={i} className="px-6 pb-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, ease }}
                className="p-8 md:p-10 rounded-2xl border border-foreground/[0.04] bg-foreground/[0.01]"
              >
                <div className="flex items-start gap-4">
                  <span className="text-[11px] tracking-[0.15em] text-muted-foreground/40 font-medium mt-1 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="font-display font-semibold text-foreground text-base mb-3 tracking-[-0.01em]">{section.title}</h3>
                    <p className="text-muted-foreground/70 leading-[1.8] text-sm">{section.content}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        ))}

        {/* Results / Stats */}
        {course.results && course.results.length > 0 && (
          <section className="px-6 py-10">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease }}
                className="p-8 md:p-10 rounded-2xl border border-primary/10 bg-foreground/[0.02]"
              >
                <div className="flex items-center gap-3 mb-7">
                  <span className="h-px w-6 bg-primary/30" />
                  <span className="text-[11px] uppercase tracking-[0.3em] text-primary/60 font-medium">Results</span>
                </div>
                <h2 className="font-display font-semibold text-foreground text-lg mb-8 tracking-[-0.01em]">Our Results Speak</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {course.results.map((r, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06, duration: 0.5, ease }}
                      className="text-center p-5 rounded-xl bg-foreground/[0.02] border border-foreground/[0.04]"
                    >
                      <div className="text-2xl sm:text-3xl font-bold text-primary text-center tracking-tight">{r.value}</div>
                      <div className="text-muted-foreground text-xs">{r.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Syllabus */}
        {course.syllabus && course.syllabus.length > 0 && (
          <section className="px-6 pb-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease }}
                className="p-8 md:p-10 rounded-2xl border border-foreground/[0.06] bg-foreground/[0.02]"
              >
                <div className="flex items-center gap-3 mb-7">
                  <BookOpen className="w-4 h-4 text-primary/60" strokeWidth={1.5} />
                  <h2 className="font-display font-semibold text-foreground text-lg tracking-[-0.01em]">Detailed Syllabus</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {course.syllabus.map((subj, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06, duration: 0.5, ease }}
                      className="rounded-xl border border-foreground/[0.04] bg-foreground/[0.01] p-5"
                    >
                      <h3 className="text-primary/60 text-[11px] uppercase tracking-[0.2em] font-medium mb-3">{subj.subject}</h3>
                      <ul className="space-y-1.5">
                        {subj.modules.map((mod, j) => (
                          <li key={j} className="text-muted-foreground/70 text-sm flex items-start gap-2">
                            <span className="text-primary/40 mt-1 shrink-0">·</span>
                            {mod}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Weekly Schedule */}
        {course.weeklySchedule && course.weeklySchedule.length > 0 && (
          <section className="px-6 pb-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease }}
                className="p-8 md:p-10 rounded-2xl border border-foreground/[0.06] bg-foreground/[0.02]"
              >
                <div className="flex items-center gap-3 mb-7">
                  <Calendar className="w-4 h-4 text-primary/60" strokeWidth={1.5} />
                  <h2 className="font-display font-semibold text-foreground text-lg tracking-[-0.01em]">Sample Weekly Schedule</h2>
                </div>
                <div className="space-y-2">
                  {course.weeklySchedule.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04, duration: 0.5, ease }}
                      className={`flex items-center gap-4 p-4 rounded-xl border transition-colors duration-300 ${
                        item.day === 'Sunday'
                          ? 'border-foreground/[0.03] bg-foreground/[0.01] opacity-50'
                          : 'border-foreground/[0.04] bg-foreground/[0.02]'
                      }`}
                    >
                      <span className="w-20 shrink-0 text-primary/60 font-medium text-[11px] uppercase tracking-[0.1em]">{item.day}</span>
                      <span className="w-px h-4 bg-foreground/[0.06]" />
                      <span className="text-muted-foreground/70 text-sm">{item.activity}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Why Choose MindPeak */}
        {course.whyChoose && course.whyChoose.length > 0 && (
          <section className="px-6 pb-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease }}
                className="p-8 md:p-10 rounded-2xl border border-primary/10 bg-foreground/[0.02]"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-px w-6 bg-primary/30" />
                  <span className="text-[11px] uppercase tracking-[0.3em] text-primary/60 font-medium">Why Us</span>
                </div>
                <h2 className="font-display font-semibold text-foreground text-lg mb-7 tracking-[-0.01em]">Why Choose MindPeak</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {course.whyChoose.map((point, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04, duration: 0.5, ease }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-foreground/[0.02] border border-foreground/[0.04]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                      <span className="text-foreground/80 text-sm leading-relaxed">{point}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* FAQs */}
        {course.faqs && course.faqs.length > 0 && (
          <section className="px-6 pb-10">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease }}
              >
                <div className="flex items-center gap-3 mb-7">
                  <span className="h-px w-8 bg-foreground/10" />
                  <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-medium">FAQ</span>
                  <span className="h-px w-8 bg-foreground/10" />
                </div>
                <h2 className="font-display font-semibold text-foreground text-lg mb-8 tracking-[-0.01em] text-center">Frequently Asked Questions</h2>

                <div className="space-y-2 max-w-3xl mx-auto">
                  {course.faqs.map((faq, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04, duration: 0.5, ease }}
                      className="rounded-xl border border-foreground/[0.06] overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-foreground/[0.02] transition-colors duration-300"
                      >
                        <span className="text-foreground/80 font-medium text-sm">{faq.q}</span>
                        {/* Plus/Cross icon */}
                        <span className={`w-6 h-6 rounded-full border border-foreground/[0.08] grid place-items-center shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 0V10M0 5H10" stroke="currentColor" strokeWidth="1" className="text-muted-foreground/80" />
                          </svg>
                        </span>
                      </button>
                      <AnimatePresence>
                        {openFaq === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5">
                              <p className="text-muted-foreground/70 text-sm leading-[1.8]">{faq.a}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* ───── Related Courses ───── */}
        <section className="px-6 pb-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="p-8 md:p-10 rounded-2xl border border-foreground/[0.06] bg-foreground/[0.02]"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-6 bg-primary/30" />
                <span className="text-[11px] uppercase tracking-[0.3em] text-primary/60 font-medium">Explore More</span>
              </div>
              <h2 className="font-display font-semibold text-foreground text-lg mb-7 tracking-[-0.01em]">Related Courses</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {getRelatedCourses(course).map((rc) => (
                  <Link
                    key={rc.slug}
                    to={`/course/${rc.slug}`}
                    className="flex items-start gap-3 p-4 rounded-xl bg-foreground/[0.02] border border-foreground/[0.04] hover:border-primary/20 transition-colors duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                    <div>
                      <span className="text-foreground/80 text-sm font-medium block">{rc.name}</span>
                      <span className="text-muted-foreground/80 text-xs">{rc.duration} · {rc.mode} · {rc.fee}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ───── Internal Links ───── */}
        <section className="px-6 pb-8">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 md:p-10 rounded-2xl border border-foreground/[0.04] bg-foreground/[0.01]">
              <h2 className="font-display font-semibold text-foreground text-base mb-5 tracking-[-0.01em]">Useful Resources</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {course.category === 'jee' || course.category === 'crash' ? (
                  <>
                    <Link to="/jee-coaching" className="text-primary/70 hover:text-primary text-sm transition-colors">JEE Coaching Overview →</Link>
                    <Link to="/jee-practice" className="text-primary/70 hover:text-primary text-sm transition-colors">JEE Practice MCQs →</Link>
                    <Link to="/jee-pyq" className="text-primary/70 hover:text-primary text-sm transition-colors">JEE Previous Year Papers →</Link>
                    <Link to="/jee-rank-predictor" className="text-primary/70 hover:text-primary text-sm transition-colors">JEE Rank Predictor →</Link>
                    <Link to="/study-plan" className="text-primary/70 hover:text-primary text-sm transition-colors">Free Study Plan →</Link>
                    <Link to="/pricing" className="text-primary/70 hover:text-primary text-sm transition-colors">Pricing & Plans →</Link>
                    <Link to="/jee-crash-course" className="text-primary/70 hover:text-primary text-sm transition-colors">JEE Crash Course →</Link>
                    <Link to="/methodology" className="text-primary/70 hover:text-primary text-sm transition-colors">Our Methodology →</Link>
                    <Link to="/success-stories" className="text-primary/70 hover:text-primary text-sm transition-colors">Success Stories →</Link>
                  </>
                ) : course.category === 'neet' ? (
                  <>
                    <Link to="/neet-coaching" className="text-primary/70 hover:text-primary text-sm transition-colors">NEET Coaching Overview →</Link>
                    <Link to="/neet-practice" className="text-primary/70 hover:text-primary text-sm transition-colors">NEET Practice MCQs →</Link>
                    <Link to="/neet-pyq" className="text-primary/70 hover:text-primary text-sm transition-colors">NEET Previous Year Papers →</Link>
                    <Link to="/neet-rank-predictor" className="text-primary/70 hover:text-primary text-sm transition-colors">NEET Rank Predictor →</Link>
                    <Link to="/study-plan" className="text-primary/70 hover:text-primary text-sm transition-colors">Free Study Plan →</Link>
                    <Link to="/pricing" className="text-primary/70 hover:text-primary text-sm transition-colors">Pricing & Plans →</Link>
                    <Link to="/neet-crash-course" className="text-primary/70 hover:text-primary text-sm transition-colors">NEET Crash Course →</Link>
                    <Link to="/methodology" className="text-primary/70 hover:text-primary text-sm transition-colors">Our Methodology →</Link>
                    <Link to="/success-stories" className="text-primary/70 hover:text-primary text-sm transition-colors">Success Stories →</Link>
                  </>
                ) : (
                  <>
                    <Link to="/courses" className="text-primary/70 hover:text-primary text-sm transition-colors">All Courses →</Link>
                    <Link to="/jee-coaching" className="text-primary/70 hover:text-primary text-sm transition-colors">JEE Coaching →</Link>
                    <Link to="/neet-coaching" className="text-primary/70 hover:text-primary text-sm transition-colors">NEET Coaching →</Link>
                    <Link to="/pricing" className="text-primary/70 hover:text-primary text-sm transition-colors">Pricing & Plans →</Link>
                    <Link to="/methodology" className="text-primary/70 hover:text-primary text-sm transition-colors">Our Methodology →</Link>
                    <Link to="/success-stories" className="text-primary/70 hover:text-primary text-sm transition-colors">Success Stories →</Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="px-6 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
            >
              <h2 className="font-display font-bold text-foreground text-2xl sm:text-3xl mb-4 tracking-[-0.02em]">
                Ready to Start Your <span className="text-gradient-gold">Journey?</span>
              </h2>
              <p className="text-muted-foreground/70 text-sm mb-10 max-w-md mx-auto">
                Book a free demo session and experience the MindPeak difference firsthand.
              </p>
              <button
                onClick={openDemoModal}
                className="group inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground text-[13px] uppercase tracking-[0.15em] font-medium rounded-full hover:shadow-[0_0_40px_-8px_hsl(var(--primary)/0.5)] transition-all duration-500"
              >
                Book Your Free Demo
                <span className="w-5 h-5 rounded-full border border-current grid place-items-center transition-transform duration-500 group-hover:rotate-45">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </span>
              </button>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 px-6 text-center">
          <div className="h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent mb-8 max-w-4xl mx-auto" />
          <Link to="/courses" className="inline-flex items-center gap-2 text-muted-foreground/70 hover:text-foreground/80 transition-colors duration-300 text-[11px] tracking-[0.15em] uppercase mb-4">
            <ArrowLeft className="w-3 h-3" /> All Courses
          </Link>
          <p className="text-muted-foreground/70 text-[11px] tracking-[0.1em]">
            © {new Date().getFullYear()} MindPeak Institute. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default CourseDetail;
