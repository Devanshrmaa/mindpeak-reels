import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, Clock, BookOpen, Download, CheckCircle } from 'lucide-react';
import { getCourseBySlug } from '@/data/coursesData';
import { useDemoModal } from '@/components/DemoBookingModal';
import { NCERTDownloadModal } from '@/components/NCERTDownloadModal';
import logo from '@/assets/logo.jpeg';

const CourseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { openDemoModal } = useDemoModal();
  const [brochureBook, setBrochureBook] = useState<{ title: string; file: string } | null>(null);
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);

  const course = getCourseBySlug(slug || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!course) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-display font-bold text-foreground mb-4">Course Not Found</h1>
          <p className="text-muted-foreground mb-6">The course you're looking for doesn't exist.</p>
          <Link to="/courses" className="text-primary hover:underline">← Back to Courses</Link>
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
  }[course.category];

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
              <Link to="/courses" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium tracking-wider uppercase">Courses</Link>
              <button onClick={openDemoModal} className="px-6 py-2 border border-primary text-primary text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300">Book Your Free Demo</button>
            </div>
          </div>
        </nav>

        {/* Back button */}
        <div className="pt-24 px-6">
          <div className="max-w-5xl mx-auto">
            <button
              onClick={() => navigate('/courses')}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Courses
            </button>
          </div>
        </div>

        {/* Hero Section */}
        <section className="pt-8 pb-12 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col md:flex-row gap-8 items-start"
            >
              {/* Course Icon/Logo */}
              <div className="shrink-0">
                {course.logo ? (
                  <div className="w-24 h-24 rounded-2xl overflow-hidden ring-2 ring-border bg-white/10">
                    <img src={course.logo} alt={course.name} className="w-full h-full object-contain" />
                  </div>
                ) : (
                  <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-12 h-12 text-primary" />
                  </div>
                )}
              </div>

              {/* Course Title & Meta */}
              <div className="flex-1">
                <span className="text-primary text-xs font-bold uppercase tracking-widest">{categoryLabel}</span>
                <h1 className="font-display font-bold text-foreground text-3xl sm:text-4xl lg:text-5xl mt-2 mb-4">
                  {course.name}
                </h1>

                {/* Meta pills */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center gap-2">
                    <Users className="w-4 h-4" /> {course.mode}
                  </span>
                  <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center gap-2">
                    <Clock className="w-4 h-4" /> {course.duration}
                  </span>
                  <span className="px-4 py-2 rounded-full bg-accent/60 text-foreground text-sm font-bold">
                    {course.fee}
                  </span>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={openDemoModal}
                    className="px-8 py-3 bg-gradient-to-r from-gold to-gold-dark text-background font-bold text-sm rounded-full hover:scale-105 transition-transform shadow-gold-glow"
                  >
                    Book Your Free Demo
                  </button>
                  {course.brochure && (
                    <button
                      onClick={handleDownloadBrochure}
                      className="px-8 py-3 border border-primary text-primary font-bold text-sm rounded-full hover:bg-primary/10 transition-all flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Download Brochure
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Description */}
        <section className="px-6 pb-12">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="p-8 rounded-2xl border border-border bg-card/40 backdrop-blur-sm"
            >
              <h2 className="font-display font-bold text-foreground text-xl mb-4">About This Course</h2>
              <p className="text-muted-foreground leading-relaxed text-base">{course.description}</p>
            </motion.div>
          </div>
        </section>

        {/* What's Included */}
        <section className="px-6 pb-12">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-primary/20 bg-card/40 backdrop-blur-sm"
            >
              <h2 className="font-display font-bold text-foreground text-xl mb-6">What's Included</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.highlights.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-background/50"
                  >
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground text-sm">{h}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Detailed Sections */}
        {course.detailedSections.map((section, i) => (
          <section key={i} className="px-6 pb-8">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: 0.05 }}
                className="p-8 rounded-2xl border border-border bg-card/20"
              >
                <h3 className="font-display font-bold text-foreground text-lg mb-3">{section.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{section.content}</p>
              </motion.div>
            </div>
          </section>
        ))}

        {/* Bottom CTA */}
        <section className="px-6 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display font-bold text-foreground text-2xl sm:text-3xl mb-4">
                Ready to Start Your <span className="text-gradient-gold">Journey?</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Book a free demo session and experience the MindPeak difference firsthand.
              </p>
              <button
                onClick={openDemoModal}
                className="px-12 py-4 bg-gradient-to-r from-gold to-gold-dark text-background font-bold text-base rounded-full hover:scale-105 transition-transform shadow-gold-glow"
              >
                Book Your Free Demo
              </button>
            </motion.div>
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

export default CourseDetail;
