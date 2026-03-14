"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, Monitor, Download, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from '@/components/RouterLink';
import { useRouter } from 'next/navigation';
import { useDemoModal } from '@/components/DemoBookingModal';
import { NCERTDownloadModal } from '@/components/NCERTDownloadModal';
import { courses, testSeriesData, type Course } from '@/data/coursesData';
import Image from 'next/image';
const logo = '/images/logo.jpeg';
const jeeLogo = '/images/jee-logo.jpeg';
const neetLogo = '/images/neet-logo.jpeg';
const foundationLogo = '/images/foundation-logo.png';

const ease = [0.16, 1, 0.3, 1] as const;

/* ───────── course card ───────── */

const CourseCard = ({ course, index, onBookDemo, onDownloadBrochure }: { course: Course; index: number; onBookDemo: () => void; onDownloadBrochure: (brochure: { title: string; file: string }) => void }) => {
  const router = useRouter();
  const Icon = course.icon;
  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.04, duration: 0.7, ease }}
      className="group relative rounded-2xl border border-foreground/[0.06] bg-foreground/[0.02] overflow-hidden cursor-pointer hover:border-primary/15 hover:bg-foreground/[0.04] transition-all duration-500"
      onClick={() => router.push(`/course/${course.slug}`)}
    >
      <div className="w-full text-left p-7 sm:p-8 flex flex-col gap-5">
        {/* Number tag */}
        <span className="absolute top-5 right-6 text-[11px] tracking-[0.15em] text-muted-foreground/40 font-medium">{num}</span>

        {/* Header row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            {course.logo ? (
              <div className="w-12 h-12 rounded-xl overflow-hidden ring-1 ring-foreground/[0.08] bg-white/5 shrink-0">
                <img src={course.logo} alt={course.name} className="w-full h-full object-contain" loading="lazy" />
              </div>
            ) : (
              <div className="w-12 h-12 rounded-xl bg-foreground/[0.04] flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-primary/60" strokeWidth={1.5} />
              </div>
            )}
            <div>
              <h3 className="font-display font-semibold text-foreground text-lg tracking-[-0.01em]">{course.name}</h3>
              <p className="text-muted-foreground text-xs mt-1">{course.targetExam} · {course.duration}</p>
            </div>
          </div>
          <span className="w-8 h-8 rounded-full border border-foreground/[0.08] grid place-items-center mt-0.5 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-[-45deg]">
            <ArrowRight className="w-3.5 h-3.5 text-foreground/60" />
          </span>
        </div>

        {/* Meta line */}
        <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
          <span className="flex items-center gap-1.5"><Users className="w-3 h-3" strokeWidth={1.5} /> {course.mode}</span>
          <span className="w-px h-3 bg-foreground/[0.06]" />
          <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" strokeWidth={1.5} /> {course.duration}</span>
          <span className="w-px h-3 bg-foreground/[0.06]" />
          <span className="text-primary/70 font-medium">{course.fee}</span>
        </div>

        {/* Short description */}
        <p className="text-muted-foreground/70 text-sm leading-relaxed line-clamp-2">{course.description}</p>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3 pt-1" onClick={e => e.stopPropagation()}>
          <button
            onClick={onBookDemo}
            className="group/btn relative inline-flex items-center gap-2 px-7 py-2.5 bg-primary text-primary-foreground text-[11px] uppercase tracking-[0.15em] font-medium rounded-full hover:shadow-[0_0_30px_-8px_hsl(var(--primary)/0.4)] transition-all duration-500"
          >
            Book Free Demo
          </button>
          {course.brochure && (
            <button
              onClick={() => onDownloadBrochure(course.brochure!)}
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-foreground/[0.1] text-foreground/80 text-[11px] uppercase tracking-[0.15em] font-medium rounded-full hover:border-primary/20 hover:text-foreground transition-all duration-400"
            >
              <Download className="w-3 h-3" strokeWidth={1.5} />
              Brochure
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

/* ───────── page ───────── */

const Courses = () => {
  const { openDemoModal } = useDemoModal();
  const [brochureBook, setBrochureBook] = useState<{ title: string; file: string } | null>(null);
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleDownloadBrochure = (brochure: { title: string; file: string }) => {
    setBrochureBook(brochure);
    setBrochureModalOpen(true);
  };

  return (
    <>
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
            <Link to="/courses" className="text-foreground text-[12px] font-medium tracking-[0.15em] uppercase">Courses</Link>
            <button onClick={openDemoModal} className="px-6 py-2 bg-primary text-primary-foreground text-[11px] uppercase tracking-[0.15em] font-medium rounded-full hover:shadow-[0_0_30px_-8px_hsl(var(--primary)/0.4)] transition-all duration-500">Book Demo</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-36 pb-20 md:pb-28 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-8 bg-foreground/10" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-medium">Programs</span>
              <span className="h-px w-8 bg-foreground/10" />
            </div>
            <h1 className="font-display font-bold text-foreground tracking-[-0.03em] mb-5" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              Our <span className="text-gradient-gold">Courses</span>
            </h1>
          </div>
          <p
            className="text-muted-foreground/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            From early foundation building to intensive crash programs — every course includes
            daily 1-on-1 classes, 6 days a week, with a dedicated mentor.
          </p>
        </div>
      </section>

      {/* MVP Course Highlights — JEE, NEET, Foundation */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              logo: jeeLogo,
              title: 'JEE Programs',
              num: '01',
              desc: 'Comprehensive JEE Main + Advanced preparation with 1-on-1 mentoring, covering Physics, Chemistry & Mathematics.',
            },
            {
              logo: neetLogo,
              title: 'NEET Programs',
              num: '02',
              desc: 'Complete NEET UG preparation with NCERT-first approach, dedicated Biology focus, and 1-on-1 daily sessions.',
            },
            {
              logo: foundationLogo,
              title: 'Foundation',
              num: '03',
              desc: 'Class 6th–10th. Build competitive-exam-ready thinking early with integrated board + competitive syllabus.',
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.7, ease }}
              className="group relative p-7 rounded-2xl border border-foreground/[0.06] bg-foreground/[0.02] text-center hover:border-primary/15 hover:bg-foreground/[0.04] transition-all duration-500"
            >
              <span className="absolute top-4 right-5 text-[11px] tracking-[0.15em] text-muted-foreground/40 font-medium">{item.num}</span>
              <div className="w-14 h-14 rounded-xl overflow-hidden mx-auto mb-5 ring-1 ring-foreground/[0.08] bg-white/5">
                <img src={item.logo} alt={item.title} className="w-full h-full object-contain" loading="lazy" />
              </div>
              <h3 className="font-display font-semibold text-foreground text-lg mb-2 tracking-[-0.01em]">{item.title}</h3>
              <p className="text-muted-foreground/70 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* All Courses */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-foreground/10" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-medium">Catalog</span>
            </div>
            <h2 className="font-display font-bold text-foreground text-2xl sm:text-3xl tracking-[-0.02em]">
              All <span className="text-gradient-gold">Courses</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-4">
            {courses.map((course, i) => (
              <CourseCard key={course.name} course={course} index={i} onBookDemo={openDemoModal} onDownloadBrochure={handleDownloadBrochure} />
            ))}
          </div>

          <p className="text-muted-foreground/70 text-xs tracking-[0.05em] mt-6">
            Scholarship available — Terms & Conditions apply. GST extra where applicable.
          </p>
        </div>
      </section>

      {/* Test Series */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-foreground/10" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-medium">Practice</span>
            </div>
            <h2 className="font-display font-bold text-foreground text-2xl sm:text-3xl tracking-[-0.02em] mb-3">
              Test <span className="text-gradient-gold">Series</span>
            </h2>
            <p className="text-muted-foreground/70 text-sm max-w-xl leading-relaxed">
              All test series are <span className="text-foreground/80">CBT-based</span>, replicating the exact exam interface of JEE and NEET.
            </p>
          </motion.div>

          <div className="rounded-2xl border border-foreground/[0.06] overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-4 bg-foreground/[0.03] text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
              <div className="p-4 sm:p-5">Test Series</div>
              <div className="p-4 sm:p-5">Exam</div>
              <div className="p-4 sm:p-5">Duration</div>
              <div className="p-4 sm:p-5">Fee</div>
            </div>
            {/* Rows */}
            {testSeriesData.map((ts, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.5, ease }}
                className="grid grid-cols-4 text-sm border-t border-foreground/[0.04] hover:bg-foreground/[0.02] transition-colors duration-300"
              >
                <div className="p-4 sm:p-5 text-foreground/80 font-medium text-xs sm:text-sm">{ts.name}</div>
                <div className="p-4 sm:p-5 text-muted-foreground/70 text-xs sm:text-sm">{ts.exam}</div>
                <div className="p-4 sm:p-5 text-muted-foreground/70 text-xs sm:text-sm">{ts.duration}</div>
                <div className="p-4 sm:p-5 text-primary/80 font-medium text-xs sm:text-sm">{ts.fee}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.1em] text-muted-foreground/70">
            <span className="flex items-center gap-1"><Monitor className="w-3 h-3" strokeWidth={1.5} /> CBT-based</span>
            <span>· Full syllabus</span>
            <span>· Chapter-wise</span>
            <span>· Solutions</span>
            <span>· Analytics</span>
            <span>· Rank benchmarking</span>
          </div>

          <div className="mt-14 text-center">
            <button
              onClick={openDemoModal}
              className="group relative inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground text-[13px] uppercase tracking-[0.15em] font-medium rounded-full hover:shadow-[0_0_40px_-8px_hsl(var(--primary)/0.5)] transition-all duration-500"
            >
              Book Your Free Demo
              <span className="w-5 h-5 rounded-full border border-current grid place-items-center transition-transform duration-500 group-hover:rotate-45">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 text-center">
        <div className="h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent mb-8 max-w-4xl mx-auto" />
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground/70 hover:text-foreground/80 transition-colors duration-300 text-[11px] tracking-[0.15em] uppercase mb-4">
          <ArrowLeft className="w-3 h-3" /> Back to Home
        </Link>
        <p className="text-muted-foreground/70 text-[11px] tracking-[0.1em]">
          © {new Date().getFullYear()} MindPeak Institute. All rights reserved.
        </p>
      </footer>
    </div>
    </>
  );
};

export default Courses;
