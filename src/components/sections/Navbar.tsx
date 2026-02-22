import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ChevronRight, ArrowLeft } from 'lucide-react';
import { Link } from '@/components/RouterLink';
import { usePathname } from 'next/navigation';
import { useDemoModal } from '@/components/DemoBookingModal';
import Image from 'next/image';
const logo = '/images/logo.jpeg';

/* ── Practice mega-menu types & skeleton ── */
interface ChapterItem { name: string; slug: string; firstTopicSlug: string; firstQuestionSlug: string; }
interface SubjectItem { name: string; icon: string; slug: string; chapters: ChapterItem[]; }
interface ExamItem { label: string; slug: string; hubPath: string; color: string; bg: string; border: string; subjects: SubjectItem[]; }

/**
 * Skeleton data shown immediately — no question data needed.
 * Subjects/chapters populate once the user opens the Practice dropdown.
 */
const SKELETON_EXAMS: ExamItem[] = [
  { label: 'JEE', slug: 'jee', hubPath: '/jee-practice', color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/30', subjects: [] },
  { label: 'NEET', slug: 'neet', hubPath: '/neet-practice', color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/30', subjects: [] },
];

const navLinks = [
  { label: 'Home', href: '/#hero', isHash: true },
  { label: 'JEE Coaching', href: '/jee-coaching', isRoute: true },
  { label: 'NEET Coaching', href: '/neet-coaching', isRoute: true },
  { label: 'Practice', href: '#', isPractice: true },
  { label: 'Courses', href: '/courses', isRoute: true },
  { label: 'Pricing', href: '/pricing', isRoute: true },
  { label: 'Study Plan', href: '/study-plan', isRoute: true },
  { label: 'Blog', href: '/blog', isRoute: true },
  { label: 'Contact', href: '/contact', isRoute: true },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openDemoModal } = useDemoModal();
  const pathname = usePathname();
  const isHome = pathname === '/';

  /* ── Practice data — loaded lazily on dropdown interaction ── */
  const [practiceExams, setPracticeExams] = useState<ExamItem[]>(SKELETON_EXAMS);
  const practiceLoadedRef = useRef(false);

  const loadPracticeData = useCallback(() => {
    if (practiceLoadedRef.current) return;
    practiceLoadedRef.current = true;
    Promise.all([
      import('@/data/practice'),
      import('@/data/neet-practice'),
    ]).then(([practice, neetPractice]) => {
      practiceLoadedRef.current = true;
      setPracticeExams([
        {
          label: 'JEE',
          slug: 'jee',
          hubPath: '/jee-practice',
          color: 'text-orange-400',
          bg: 'bg-orange-500/10',
          border: 'border-orange-500/30',
          subjects: practice.subjectBanks.map((b: any) => ({
            name: b.subject,
            icon: b.icon,
            slug: b.slug,
            chapters: b.chapters.map((ch: any) => ({
              name: ch.name,
              slug: ch.slug,
              firstTopicSlug: ch.topics[0]?.slug ?? '',
              firstQuestionSlug: practice.getPracticeSlugByParams(b.slug, ch.slug, ch.topics[0]?.slug ?? '', 'easy', 1) ?? '',
            })),
          })),
        },
        {
          label: 'NEET',
          slug: 'neet',
          hubPath: '/neet-practice',
          color: 'text-green-400',
          bg: 'bg-green-500/10',
          border: 'border-green-500/30',
          subjects: neetPractice.neetSubjectBanks.map((b: any) => ({
            name: b.subject,
            icon: b.icon,
            slug: b.slug,
            chapters: b.chapters.map((ch: any) => ({
              name: ch.name,
              slug: ch.slug,
              firstTopicSlug: ch.topics[0]?.slug ?? '',
              firstQuestionSlug: neetPractice.getNEETPracticeSlugByParams(b.slug, ch.slug, ch.topics[0]?.slug ?? '', 'easy', 1) ?? '',
            })),
          })),
        },
      ]);
    }).catch(() => {
      practiceLoadedRef.current = false; // allow retry on failure
    });
  }, []);

  /* ── Desktop dropdown state ── */
  const [desktopDropdown, setDesktopDropdown] = useState(false);
  const [deskExam, setDeskExam] = useState<string | null>(null);
  const [deskSubject, setDeskSubject] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  /* ── Mobile drill-down state ── */
  const [mobileLevel, setMobileLevel] = useState<'root' | 'exam' | 'subject'>('root');
  const [mobExam, setMobExam] = useState<string | null>(null);
  const [mobSubject, setMobSubject] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* close desktop dropdown on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDesktopDropdown(false);
        setDeskExam(null);
        setDeskSubject(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  /* close menus on route change */
  useEffect(() => {
    setDesktopDropdown(false);
    setDeskExam(null);
    setDeskSubject(null);
    setMobileOpen(false);
    setMobileLevel('root');
  }, [pathname]);

  /* ── helpers ── */
  const activeExam = practiceExams.find((e) => e.slug === (deskExam ?? ''));
  const activeSubject = activeExam?.subjects.find((s) => s.slug === (deskSubject ?? ''));

  const mobActiveExam = practiceExams.find((e) => e.slug === (mobExam ?? ''));
  const mobActiveSubject = mobActiveExam?.subjects.find((s) => s.slug === (mobSubject ?? ''));

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        !isHome || scrolled
          ? 'bg-background/80 backdrop-blur-2xl backdrop-saturate-[180%] border-b border-foreground/[0.06]'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <Image src={logo} alt="MindPeak Institute" className="w-9 h-9 rounded-full ring-1 ring-foreground/[0.08] transition-shadow duration-500 group-hover:ring-primary/30" width={36} height={36} priority />
          <span className="font-display font-semibold text-foreground text-base tracking-[0.05em]">
            MINDPEAK
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) =>
            link.isPractice ? (
              /* ── Practice dropdown trigger ── */
              <div key="practice" className="relative" ref={dropdownRef}>
                <button
                  onMouseEnter={loadPracticeData}
                  onFocus={loadPracticeData}
                  onClick={() => {
                    loadPracticeData();
                    setDesktopDropdown(!desktopDropdown);
                    setDeskExam(null);
                    setDeskSubject(null);
                  }}
                  className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors text-xs font-medium tracking-wider uppercase whitespace-nowrap"
                >
                  Practice <ChevronDown className={`w-3 h-3 transition-transform ${desktopDropdown ? 'rotate-180' : ''}`} />
                </button>

                {/* ── Desktop Dropdown ── */}
                <AnimatePresence>
                  {desktopDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[340px] rounded-xl border border-border bg-background/95 backdrop-blur-xl shadow-2xl overflow-hidden"
                    >
                      {/* Level 1: JEE / NEET */}
                      {!deskExam && (
                        <div className="p-3 space-y-1">
                          <p className="text-[10px] uppercase tracking-wider text-muted-foreground px-3 pb-2 font-semibold">Choose Exam</p>
                          {practiceExams.map((exam) => (
                            <button
                              key={exam.slug}
                              onClick={() => setDeskExam(exam.slug)}
                              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-secondary/40 transition-colors text-left`}
                            >
                              <span className="font-display font-semibold text-foreground text-sm">{exam.label} Practice</span>
                              <ChevronRight className="w-4 h-4 text-muted-foreground" />
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Level 2: Subjects */}
                      {deskExam && !deskSubject && activeExam && (
                        <div className="p-3 space-y-1">
                          <button
                            onClick={() => setDeskExam(null)}
                            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors px-3 pb-2"
                          >
                            <ArrowLeft className="w-3 h-3" /> Back
                          </button>
                          <Link
                            to={activeExam.hubPath}
                            className={`block px-4 py-2 rounded-lg text-xs font-semibold ${activeExam.color} ${activeExam.bg} mb-2 text-center`}
                          >
                            View All {activeExam.label} Practice →
                          </Link>
                          {activeExam.subjects.map((subj) => (
                            <button
                              key={subj.slug}
                              onClick={() => setDeskSubject(subj.slug)}
                              className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-secondary/40 transition-colors text-left"
                            >
                              <span className="flex items-center gap-2">
                                <span className="text-lg">{subj.icon}</span>
                                <span className="text-sm font-medium text-foreground">{subj.name}</span>
                              </span>
                              <ChevronRight className="w-4 h-4 text-muted-foreground" />
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Level 3: Chapters/Topics */}
                      {deskExam && deskSubject && activeExam && activeSubject && (
                        <div className="p-3">
                          <button
                            onClick={() => setDeskSubject(null)}
                            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors px-3 pb-2"
                          >
                            <ArrowLeft className="w-3 h-3" /> {activeExam.label} Subjects
                          </button>
                          <p className="px-3 pb-2 text-xs font-semibold text-foreground flex items-center gap-1.5">
                            <span>{activeSubject.icon}</span> {activeSubject.name} — Topics
                          </p>
                          <div className="max-h-[50vh] overflow-y-auto space-y-0.5 pr-1">
                            {activeSubject.chapters.map((ch) => (
                              <Link
                                key={ch.slug}
                                to={ch.firstQuestionSlug ? `/${ch.firstQuestionSlug}` : activeExam.hubPath}
                                className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/40 transition-colors"
                              >
                                {ch.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : link.isRoute ? (
              <Link
                key={link.label}
                to={link.href}
                className="text-muted-foreground hover:text-primary transition-colors text-xs font-medium tracking-wider uppercase whitespace-nowrap"
              >
                {link.label}
              </Link>
            ) : link.isHash && isHome ? (
              <a
                key={link.label}
                href={link.href.replace('/', '')}
                className="text-muted-foreground hover:text-primary transition-colors text-xs font-medium tracking-wider uppercase whitespace-nowrap"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="text-muted-foreground hover:text-primary transition-colors text-xs font-medium tracking-wider uppercase whitespace-nowrap"
              >
                {link.label}
              </Link>
            )
          )}
          <button
            onClick={openDemoModal}
            className="px-5 py-2.5 bg-primary text-primary-foreground text-[11px] uppercase tracking-[0.15em] font-medium rounded-full hover:shadow-[0_0_20px_-4px_hsl(var(--primary)/0.4)] transition-all duration-500 whitespace-nowrap flex-shrink-0"
          >
            Book Free Demo
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => { setMobileOpen(!mobileOpen); setMobileLevel('root'); }}
          className="lg:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {/* ── Mobile Practice drill-down ── */}
              {mobileLevel === 'root' && (
                <>
                  {navLinks.map((link) =>
                    link.isPractice ? (
                      <button
                        key="practice"
                        onClick={() => { loadPracticeData(); setMobileLevel('exam'); }}
                        className="text-foreground text-lg font-display tracking-wider uppercase text-left flex items-center justify-between"
                      >
                        Practice <ChevronRight className="w-5 h-5 text-muted-foreground" />
                      </button>
                    ) : link.isRoute ? (
                      <Link
                        key={link.label}
                        to={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-foreground text-lg font-display tracking-wider uppercase"
                      >
                        {link.label}
                      </Link>
                    ) : link.isHash && isHome ? (
                      <a
                        key={link.label}
                        href={link.href.replace('/', '')}
                        onClick={() => setMobileOpen(false)}
                        className="text-foreground text-lg font-display tracking-wider uppercase"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        key={link.label}
                        to={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-foreground text-lg font-display tracking-wider uppercase"
                      >
                        {link.label}
                      </Link>
                    )
                  )}
                  <button
                    onClick={() => { setMobileOpen(false); openDemoModal(); }}
                    className="mt-2 px-6 py-3 border border-primary text-primary text-center uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all w-full"
                  >
                    Book Your Free Demo
                  </button>
                </>
              )}

              {/* ── Mobile: Choose JEE / NEET ── */}
              {mobileLevel === 'exam' && (
                <div className="space-y-3">
                  <button
                    onClick={() => setMobileLevel('root')}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <ArrowLeft className="w-4 h-4" /> Back to Menu
                  </button>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Choose Exam</p>
                  {practiceExams.map((exam) => (
                    <button
                      key={exam.slug}
                      onClick={() => { setMobExam(exam.slug); setMobileLevel('subject'); }}
                      className="w-full flex items-center justify-between px-4 py-4 rounded-xl border border-border bg-card/50 text-left"
                    >
                      <span className="font-display font-semibold text-foreground text-base">{exam.label} Practice</span>
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    </button>
                  ))}
                </div>
              )}

              {/* ── Mobile: Subjects → Topics ── */}
              {mobileLevel === 'subject' && mobActiveExam && (
                <div className="space-y-3">
                  <button
                    onClick={() => { setMobileLevel('exam'); setMobSubject(null); }}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <ArrowLeft className="w-4 h-4" /> {mobSubject ? `${mobActiveExam.label} Subjects` : 'Exams'}
                  </button>

                  {!mobSubject ? (
                    <>
                      <Link
                        to={mobActiveExam.hubPath}
                        onClick={() => setMobileOpen(false)}
                        className={`block px-4 py-3 rounded-xl text-sm font-semibold text-center ${mobActiveExam.color} ${mobActiveExam.bg} border ${mobActiveExam.border}`}
                      >
                        View All {mobActiveExam.label} Practice →
                      </Link>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Select Subject</p>
                      {mobActiveExam.subjects.map((subj) => (
                        <button
                          key={subj.slug}
                          onClick={() => setMobSubject(subj.slug)}
                          className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-border bg-card/50 text-left"
                        >
                          <span className="flex items-center gap-2">
                            <span className="text-xl">{subj.icon}</span>
                            <span className="font-medium text-foreground">{subj.name}</span>
                          </span>
                          <ChevronRight className="w-5 h-5 text-muted-foreground" />
                        </button>
                      ))}
                    </>
                  ) : mobActiveSubject ? (
                    <>
                      <button
                        onClick={() => setMobSubject(null)}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <ArrowLeft className="w-4 h-4" /> {mobActiveExam.label} Subjects
                      </button>
                      <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <span>{mobActiveSubject.icon}</span> {mobActiveSubject.name} — Topics
                      </p>
                      <div className="space-y-1 max-h-[50vh] overflow-y-auto">
                        {mobActiveSubject.chapters.map((ch) => (
                          <Link
                            key={ch.slug}
                            to={ch.firstQuestionSlug ? `/${ch.firstQuestionSlug}` : mobActiveExam.hubPath}
                            onClick={() => setMobileOpen(false)}
                            className="block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/40 transition-colors border border-transparent hover:border-border"
                          >
                            {ch.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : null}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
