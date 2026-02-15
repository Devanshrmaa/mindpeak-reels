import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Users, Clock, BookOpen, Monitor, GraduationCap, Target, Zap, FlaskConical, Brain, Download, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDemoModal } from '@/components/DemoBookingModal';
import { NCERTDownloadModal } from '@/components/NCERTDownloadModal';
import { courses, testSeriesData, type Course } from '@/data/coursesData';
import logo from '@/assets/logo.jpeg';
import jeeLogo from '@/assets/jee-logo.jpeg';
import neetLogo from '@/assets/neet-logo.jpeg';
import foundationLogo from '@/assets/foundation-logo.png';

/* ───────── components ───────── */

const CourseCard = ({ course, index, onBookDemo, onDownloadBrochure }: { course: Course; index: number; onBookDemo: () => void; onDownloadBrochure: (brochure: { title: string; file: string }) => void }) => {
  const navigate = useNavigate();
  const Icon = course.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className={`rounded-2xl border border-border bg-gradient-to-br ${course.color || 'from-card/40 to-card/20'} backdrop-blur-sm overflow-hidden group cursor-pointer hover:border-primary/40 transition-colors`}
      onClick={() => navigate(`/course/${course.slug}`)}
    >
      <div className="w-full text-left p-6 sm:p-8 flex flex-col gap-4">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            {course.logo ? (
              <div className="w-12 h-12 rounded-xl overflow-hidden ring-1 ring-border bg-white/10 shrink-0">
                <img src={course.logo} alt={course.name} className="w-full h-full object-contain" />
              </div>
            ) : (
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6 text-primary" />
              </div>
            )}
            <div>
              <h3 className="font-display font-bold text-foreground text-lg sm:text-xl">{course.name}</h3>
              <p className="text-muted-foreground text-sm mt-1">{course.targetExam} • {course.duration}</p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-primary mt-1 group-hover:translate-x-1 transition-transform" />
        </div>

        {/* Meta pills */}
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wider uppercase flex items-center gap-1">
            <Users className="w-3 h-3" /> {course.mode}
          </span>
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wider uppercase flex items-center gap-1">
            <Clock className="w-3 h-3" /> {course.duration}
          </span>
          <span className="px-3 py-1 rounded-full bg-accent/60 text-foreground text-xs font-bold tracking-wider">
            {course.fee}
          </span>
        </div>

        {/* Short description */}
        <p className="text-muted-foreground text-sm line-clamp-2">{course.description}</p>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3 mt-2" onClick={e => e.stopPropagation()}>
          <button
            onClick={onBookDemo}
            className="px-6 py-2.5 bg-gradient-to-r from-gold to-gold-dark text-background font-bold text-xs rounded-full hover:scale-105 transition-transform shadow-gold-glow"
          >
            Book Free Demo
          </button>
          {course.brochure && (
            <button
              onClick={() => onDownloadBrochure(course.brochure!)}
              className="px-6 py-2.5 border border-primary text-primary font-bold text-xs rounded-full hover:bg-primary/10 transition-all flex items-center gap-2"
            >
              <Download className="w-3.5 h-3.5" />
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="MindPeak Institute" className="w-10 h-10 rounded-full" />
            <span className="font-display font-bold text-foreground text-lg tracking-wide">MINDPEAK</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium tracking-wider uppercase">Home</Link>
            <Link to="/courses" className="text-primary text-sm font-medium tracking-wider uppercase">Courses</Link>
            <button onClick={openDemoModal} className="px-6 py-2 border border-primary text-primary text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300">Book Your Free Demo</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-bold text-foreground mb-4"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
          >
            OUR <span className="text-gradient-gold">COURSES</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            From early foundation building to intensive crash programs — every course includes
            daily 1-on-1 classes, 6 days a week, with a dedicated mentor crafting your path to success.
          </motion.p>
        </div>
      </section>

      {/* MVP Course Highlights — JEE, NEET, Foundation */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              logo: jeeLogo,
              title: 'JEE Programs',
              desc: 'Comprehensive JEE Main + Advanced preparation with 1-on-1 mentoring, covering Physics, Chemistry & Mathematics. From 1-year intensive to 2-year mastery programs — designed to crack top IIT ranks.',
            },
            {
              logo: neetLogo,
              title: 'NEET Programs',
              desc: 'Complete NEET UG preparation with NCERT-first approach, dedicated Biology focus, and 1-on-1 daily sessions. Our students consistently achieve top ranks through conceptual clarity and rigorous practice.',
            },
            {
              logo: foundationLogo,
              title: 'Foundation (6th–10th)',
              desc: 'Start early, stay ahead. Our foundation courses build competitive-exam-ready thinking from class 6 onwards. Integrated board + competitive syllabus ensures students are prepared years before the actual exam.',
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-primary/20 bg-card/40 backdrop-blur-sm text-center"
            >
              <div className="w-16 h-16 rounded-xl overflow-hidden mx-auto mb-4 ring-2 ring-border bg-white/10">
                <img src={item.logo} alt={item.title} className="w-full h-full object-contain" />
              </div>
              <h3 className="font-display font-bold text-foreground text-xl mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* All Courses */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display font-bold text-foreground text-2xl sm:text-3xl mb-8"
          >
            ALL <span className="text-gradient-gold">COURSES</span>
          </motion.h2>

          <div className="grid grid-cols-1 gap-5">
            {courses.map((course, i) => (
              <CourseCard key={course.name} course={course} index={i} onBookDemo={openDemoModal} onDownloadBrochure={handleDownloadBrochure} />
            ))}
          </div>

          <p className="text-muted-foreground text-sm mt-6">
            Scholarship available — Terms & Conditions apply. GST extra where applicable.
          </p>
        </div>
      </section>

      {/* Test Series */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display font-bold text-foreground text-2xl sm:text-3xl mb-4"
          >
            TEST <span className="text-gradient-gold">SERIES</span>
          </motion.h2>
          <p className="text-muted-foreground text-base mb-8 max-w-2xl">
            All test series are <strong className="text-foreground">CBT-based (Computer Based Test)</strong>, replicating the exact exam interface of JEE and NEET. Practice in real exam conditions with detailed solutions and performance analytics.
          </p>

          <div className="rounded-2xl border border-border overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-4 bg-primary/10 text-primary text-xs sm:text-sm font-bold uppercase tracking-wider">
              <div className="p-4">Test Series</div>
              <div className="p-4">Exam</div>
              <div className="p-4">Duration</div>
              <div className="p-4">Fee</div>
            </div>
            {/* Rows */}
            {testSeriesData.map((ts, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`grid grid-cols-4 text-sm ${i % 2 === 0 ? 'bg-card/30' : 'bg-card/10'} border-t border-border`}
              >
                <div className="p-4 text-foreground font-medium">{ts.name}</div>
                <div className="p-4 text-muted-foreground">{ts.exam}</div>
                <div className="p-4 text-muted-foreground">{ts.duration}</div>
                <div className="p-4 text-primary font-bold">{ts.fee}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Monitor className="w-3 h-3 text-primary" /> CBT-based interface</span>
            <span>• Full syllabus tests</span>
            <span>• Chapter-wise tests</span>
            <span>• Detailed solutions</span>
            <span>• Performance analytics</span>
            <span>• Rank benchmarking</span>
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={openDemoModal}
              className="px-12 py-4 bg-gradient-to-r from-gold to-gold-dark text-background font-bold text-base rounded-full hover:scale-105 transition-transform shadow-gold-glow"
            >
              Book Your Free Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6 text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} MindPeak Institute. All rights reserved.
        </p>
      </footer>
    </div>
    </>
  );
};

export default Courses;
