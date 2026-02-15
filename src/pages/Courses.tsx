import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Users, Clock, BookOpen, Monitor, GraduationCap, Target, Zap, FlaskConical, Brain, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDemoModal } from '@/components/DemoBookingModal';
import { NCERTDownloadModal } from '@/components/NCERTDownloadModal';
import logo from '@/assets/logo.jpeg';
import jeeLogo from '@/assets/jee-logo.jpeg';
import neetLogo from '@/assets/neet-logo.jpeg';
import foundationLogo from '@/assets/foundation-logo.png';

/* ───────── course data ───────── */

interface Course {
  name: string;
  targetExam: string;
  duration: string;
  mode: string;
  fee: string;
  icon: typeof Users;
  color?: string;
  description: string;
  highlights: string[];
  logo?: string;
  brochure?: { title: string; file: string };
}

const courses: Course[] = [
  {
    name: 'JEE Main Target 2028',
    targetExam: 'JEE Main + Advanced',
    duration: '2 Years',
    mode: '1-on-1',
    fee: '₹2,30,000 + GST',
    icon: Target,
    logo: jeeLogo,
    description:
      'A comprehensive 2-year program designed for students starting early in their JEE preparation journey. This course covers the complete JEE Main and Advanced syllabus with a deep-concept approach. Each student receives a personalized study roadmap, daily 1-on-1 classes (6 days a week) with short focused sessions, weekly mock tests, and regular performance analytics. The curriculum is structured to build a rock-solid foundation in Physics, Chemistry, and Mathematics while progressively advancing to competition-level problem solving.',
    highlights: [
      '1-on-1 daily class, 6 days/week (short focused sessions)',
      'Complete PCM syllabus coverage for JEE Main + Advanced',
      'Weekly mock tests with detailed performance analytics',
      'Personalized study roadmap & doubt resolution',
      'Regular parent-mentor progress meetings',
    ],
    brochure: { title: 'JEE Main Target 2028 Brochure', file: '/brochures/class-11-jee.pdf' },
  },
  {
    name: 'NEET Target 2028',
    targetExam: 'NEET UG',
    duration: '2 Years',
    mode: '1-on-1',
    fee: '₹2,30,000 + GST',
    icon: FlaskConical,
    logo: neetLogo,
    description:
      'A thorough 2-year NEET UG preparation program with dedicated 1-on-1 mentoring. Covers the entire NEET syllabus across Physics, Chemistry, and Biology with special emphasis on NCERT mastery and application-based questions. Daily short focused 1-on-1 sessions (6 days/week) ensure consistent progress. The program includes systematic revision cycles, topic-wise test series, and NCERT line-by-line analysis to help students build the conceptual depth required for top NEET ranks.',
    highlights: [
      '1-on-1 daily class, 6 days/week (short focused sessions)',
      'NCERT line-by-line analysis & concept mapping',
      'Complete PCB syllabus with application-based focus',
      'Regular full-length mock tests mimicking NEET pattern',
      'Biology diagram practice & assertion-reason training',
    ],
    brochure: { title: 'NEET Target 2028 Brochure', file: '/brochures/neet-2year.pdf' },
  },
  {
    name: 'JEE Target 2027',
    targetExam: 'JEE Main + Advanced',
    duration: '1 Year',
    mode: '1-on-1',
    fee: '₹1,30,000 + GST',
    icon: Zap,
    logo: jeeLogo,
    description:
      'An intensive 1-year JEE preparation program for students in their final year before the exam. This accelerated course focuses on completing the syllabus efficiently while dedicating significant time to revision, problem-solving, and exam strategy. Daily 1-on-1 short classes (6 days/week) ensure focused, high-quality learning. Includes previous year paper analysis, advanced problem-solving workshops, and time management training tailored to JEE patterns.',
    highlights: [
      '1-on-1 daily class, 6 days/week (short focused sessions)',
      'Accelerated syllabus completion with revision cycles',
      'Previous year paper analysis & pattern recognition',
      'Advanced problem-solving & shortcut techniques',
      'Exam strategy & time management coaching',
    ],
    brochure: { title: 'JEE Target 2027 Brochure', file: '/brochures/jee-main-adv.pdf' },
  },
  {
    name: 'NEET Target 2027',
    targetExam: 'NEET UG',
    duration: '1 Year',
    mode: '1-on-1',
    fee: '₹1,30,000 + GST',
    icon: FlaskConical,
    logo: neetLogo,
    description:
      'A focused 1-year NEET UG program designed for students looking to maximize their score in the upcoming exam. The course emphasizes high-yield topics, NCERT-based conceptual clarity, and extensive practice with NEET-level questions. With daily short 1-on-1 sessions (6 days/week), students receive individualized attention to strengthen weak areas and sharpen exam readiness through topic-wise and full-length tests.',
    highlights: [
      '1-on-1 daily class, 6 days/week (short focused sessions)',
      'High-yield topic prioritization for maximum score impact',
      'NCERT mastery with extra reference material',
      'Extensive MCQ practice & error analysis',
      'Full-length mock tests with NEET-identical interface',
    ],
    brochure: { title: 'NEET Target 2027 Brochure', file: '/brochures/neet-2year.pdf' },
  },
  {
    name: 'Subject Crash Course',
    targetExam: 'PCM / PCB',
    duration: '1–2 Months',
    mode: 'Batch of 2–5 students',
    fee: '₹18,000 per subject',
    icon: Zap,
    color: 'from-orange-500/20 to-orange-500/5',
    description:
      'A rapid subject-specific crash course designed to cover or revise an entire subject in 1–2 months. Ideal for students who need focused help in a particular subject like Physics, Chemistry, Mathematics, or Biology. Conducted in small batches of 2–5 students for semi-personalized attention. Daily classes are longer in duration to ensure intensive coverage. Includes condensed notes, formula sheets, and subject-specific mock tests.',
    highlights: [
      '1 daily class, 6 days/week (longer intensive sessions)',
      'Small batch of 2–5 students for focused learning',
      'Condensed notes & formula/concept sheets provided',
      'Subject-specific mock tests & rapid revision cycles',
      'Ideal for quick revision before exams',
    ],
    brochure: { title: 'Subject Crash Course Brochure', file: '/brochures/class-12-jee.pdf' },
  },
  {
    name: '1-on-1 Crash Program',
    targetExam: 'JEE / NEET',
    duration: '1–2 Months',
    mode: '1-on-1',
    fee: '₹30,000 + GST per subject',
    icon: Zap,
    color: 'from-red-500/20 to-red-500/5',
    description:
      'The most intensive short-term program at MindPeak — a fully personalized 1-on-1 crash course lasting 1–2 months. Each daily class is longer in duration to maximize coverage in the limited timeframe. Perfect for last-minute exam preparation, this program focuses on high-yield topics, rapid problem-solving drills, exam temperament building, and strategic revision. Your dedicated mentor crafts a day-by-day plan targeting your specific weak areas for maximum score improvement.',
    highlights: [
      '1-on-1 daily class, 6 days/week (longer intensive sessions)',
      'Custom day-by-day plan targeting weak areas',
      'High-yield topic focus for maximum score impact',
      'Rapid problem-solving drills & timed practice',
      'Exam temperament & last-minute strategy coaching',
    ],
    brochure: { title: '1-on-1 Crash Program Brochure', file: '/brochures/class-12-jee.pdf' },
  },
  {
    name: '6th Foundation',
    targetExam: 'IIT/NEET',
    duration: '1 Year',
    mode: '1-on-1',
    fee: '₹1,00,000 + GST',
    icon: GraduationCap,
    logo: foundationLogo,
    description:
      'Start the journey early! The 6th Foundation course builds a strong conceptual base in Science and Mathematics aligned with future IIT-JEE and NEET preparation. Through daily short 1-on-1 sessions (6 days/week), students develop analytical thinking, scientific curiosity, and problem-solving habits from a young age. The curriculum goes beyond school textbooks to introduce Olympiad-level thinking and application-based learning.',
    highlights: [
      '1-on-1 daily class, 6 days/week (short focused sessions)',
      'Strong Science & Math foundation for future competitive exams',
      'Olympiad-level thinking & logical reasoning',
      'Fun, engaging teaching methods for young learners',
      'Regular assessments & progress reports for parents',
    ],
    brochure: { title: '6th Foundation Brochure', file: '/brochures/foundation-class-8.pdf' },
  },
  {
    name: '7th Foundation',
    targetExam: 'IIT/NEET',
    duration: '1 Year',
    mode: '1-on-1',
    fee: '₹1,00,000 + GST',
    icon: GraduationCap,
    logo: foundationLogo,
    description:
      'Building on the 6th Foundation, this course deepens conceptual understanding in Physics, Chemistry, Biology, and Mathematics. Daily short 1-on-1 sessions (6 days/week) introduce more advanced problem types while keeping the learning engaging and age-appropriate. Students develop the discipline and study habits that will serve them through their competitive exam journey.',
    highlights: [
      '1-on-1 daily class, 6 days/week (short focused sessions)',
      'Deepened PCM/PCB concepts beyond school level',
      'Introduction to competitive exam question patterns',
      'Habit-building for consistent study routines',
      'Monthly progress assessments with mentor feedback',
    ],
    brochure: { title: '7th Foundation Brochure', file: '/brochures/foundation-class-8.pdf' },
  },
  {
    name: '8th Foundation',
    targetExam: 'IIT/NEET',
    duration: '1 Year',
    mode: '1-on-1',
    fee: '₹1,00,000 + GST',
    icon: GraduationCap,
    logo: foundationLogo,
    description:
      'The 8th Foundation program bridges the gap between school-level science and the rigorous demands of competitive exams. Students begin tackling problems that require multi-concept application, a critical skill for JEE and NEET. Daily short 1-on-1 sessions (6 days/week) ensure personalized pacing with a dedicated mentor guiding every step of the way.',
    highlights: [
      '1-on-1 daily class, 6 days/week (short focused sessions)',
      'Multi-concept application problems introduced',
      'Bridge between school science & competitive-level rigor',
      'NTSE & Olympiad preparation integrated',
      'Personalized pacing based on student capability',
    ],
    brochure: { title: '8th Foundation Brochure', file: '/brochures/foundation-class-8.pdf' },
  },
  {
    name: '9th Foundation',
    targetExam: 'IIT/NEET',
    duration: '1 Year',
    mode: '1-on-1',
    fee: '₹1,10,000 + GST',
    icon: GraduationCap,
    logo: foundationLogo,
    description:
      'Class 9 is where competitive exam preparation truly begins. This foundation course aligns CBSE/State board curriculum with JEE and NEET-level concepts. Daily short 1-on-1 sessions (6 days/week) cover both board syllabus and competitive topics in an integrated manner, saving time and building deep understanding. Students start solving previous year foundation-level questions and develop exam-taking skills.',
    highlights: [
      '1-on-1 daily class, 6 days/week (short focused sessions)',
      'Integrated board + competitive syllabus coverage',
      'Previous year foundation-level question practice',
      'Exam-taking skills & time management basics',
      'Strong preparation for 10th boards & beyond',
    ],
    brochure: { title: '9th Foundation Brochure', file: '/brochures/foundation-class-9.pdf' },
  },
  {
    name: '10th Foundation',
    targetExam: 'IIT/NEET',
    duration: '1 Year',
    mode: '1-on-1',
    fee: '₹1,10,000 + GST',
    icon: GraduationCap,
    logo: foundationLogo,
    description:
      'The 10th Foundation course is the final stepping stone before students enter the intense 11th-12th competitive preparation phase. It ensures board exam excellence while building the conceptual arsenal needed for JEE/NEET. Daily short 1-on-1 sessions (6 days/week) cover the complete 10th syllabus with competitive-level depth, preparing students to hit the ground running in 11th class.',
    highlights: [
      '1-on-1 daily class, 6 days/week (short focused sessions)',
      'Board exam mastery + competitive concept depth',
      'Smooth transition preparation for 11th-level content',
      'Pre-JEE/NEET topic introduction for head start',
      'Complete 10th syllabus with advanced applications',
    ],
    brochure: { title: '10th Foundation Brochure', file: '/brochures/foundation-class-10.pdf' },
  },
];

interface TestSeries {
  name: string;
  exam: string;
  duration: string;
  fee: string;
}

const testSeriesData: TestSeries[] = [
  { name: 'NEET Test Series', exam: 'NEET UG', duration: '4 Months', fee: '₹3,000' },
  { name: 'JEE Test Series', exam: 'JEE Main', duration: '4 Months', fee: '₹3,000' },
  { name: 'NEET Test Series', exam: 'NEET UG', duration: '1 Year', fee: '₹6,000' },
  { name: 'JEE Test Series', exam: 'JEE Main', duration: '1 Year', fee: '₹6,000' },
  { name: 'NEET Integrated Test Series', exam: 'NEET UG', duration: '2 Years', fee: '₹11,000' },
  { name: 'JEE Integrated Test Series', exam: 'JEE Main + Advanced', duration: '2 Years', fee: '₹11,000' },
];

/* ───────── components ───────── */

const CourseCard = ({ course, index, onBookDemo, onDownloadBrochure }: { course: Course; index: number; onBookDemo: () => void; onDownloadBrochure: (brochure: { title: string; file: string }) => void }) => {
  const [open, setOpen] = useState(false);
  const Icon = course.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className={`rounded-2xl border border-border bg-gradient-to-br ${course.color || 'from-card/40 to-card/20'} backdrop-blur-sm overflow-hidden`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-6 sm:p-8 flex flex-col gap-4 cursor-pointer select-none"
      >
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
          <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown className="w-5 h-5 text-primary mt-1" />
          </motion.div>
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
      </button>

      {/* Expandable detail */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-border">
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-5">{course.description}</p>
              <h4 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-3">What's Included</h4>
              <ul className="space-y-2">
                {course.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <BookOpen className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={onBookDemo}
                  className="px-8 py-3 bg-gradient-to-r from-gold to-gold-dark text-background font-bold text-sm rounded-full hover:scale-105 transition-transform shadow-gold-glow"
                >
                  Book Your Free Demo
                </button>
                {course.brochure && (
                  <button
                    onClick={() => onDownloadBrochure(course.brochure!)}
                    className="px-8 py-3 border border-primary text-primary font-bold text-sm rounded-full hover:bg-primary/10 transition-all flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download Brochure
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
