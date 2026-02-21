import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { PageFooter } from '@/components/PageFooter';
import { PageFAQ, buildFAQSchema } from '@/components/PageFAQ';
import type { FAQItem } from '@/components/PageFAQ';
import { useDemoModal } from '@/components/DemoBookingModal';
import {
  Calendar,
  BookOpen,
  Clock,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Zap,
  Target,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  IndianRupee,
  BarChart3,
  Brain,
} from 'lucide-react';
import { FreshnessBadge } from '@/components/FreshnessBadge';
import { getLastUpdated } from '@/lib/contentFreshness';
import {
  generateStudyPlan,
  getMonthsUntilExam,
  type ExamType,
  type StudyPlan as StudyPlanType,
  type MonthBlock,
} from '@/lib/studyPlanGenerator';
import { CURRENT_EXAM_YEAR } from '@/lib/examYears';

/* ─── FAQ ─── */
const faqs: FAQItem[] = [
  {
    question: 'How is the study plan personalised?',
    answer: 'The plan auto-calculates the months remaining until your target exam and distributes the entire syllabus into a phase-wise, month-by-month schedule. Once you enrol, your dedicated mentor customises this further based on your mock-test performance and learning speed.',
  },
  {
    question: 'Is the fee really prorated?',
    answer: 'Yes. If fewer months remain, you pay only for those months — calculated from our standard 1-year (₹1,30,000) or 2-year (₹2,30,000) programme rates. For 1-2 months, the 1-on-1 crash course rate of ₹30,000/subject + GST applies.',
  },
  {
    question: 'What if I want to start mid-month?',
    answer: 'You can start any day. The plan automatically adjusts. Your mentor will compress any partial first month into focused foundational sessions.',
  },
  {
    question: 'Can I switch between JEE and NEET plans?',
    answer: 'Absolutely. Toggle between JEE and NEET on this page to see both plans instantly. After enrollment, switching is possible within the first 2 weeks at no extra cost.',
  },
  {
    question: 'What happens in the crash course (1-2 months)?',
    answer: 'We focus exclusively on the top 40-50 high-weightage chapters, daily mock tests, rapid formula revision, and PYQ-based practice. The goal is maximum marks in minimum time.',
  },
];

/* ─── Tier badge helpers ─── */
function tierColor(tier: StudyPlanType['tier']) {
  switch (tier) {
    case 'crash':
      return 'from-red-500 to-orange-500';
    case 'intensive':
      return 'from-orange-500 to-amber-500';
    case 'standard':
      return 'from-blue-500 to-cyan-500';
    case 'extended':
      return 'from-indigo-500 to-purple-500';
  }
}

function tierIcon(tier: StudyPlanType['tier']) {
  switch (tier) {
    case 'crash':
      return Zap;
    case 'intensive':
      return TrendingUp;
    case 'standard':
      return Target;
    case 'extended':
      return GraduationCap;
  }
}

/* ─── Phase colour ring ─── */
function phaseRing(phase: string) {
  switch (phase) {
    case 'Crash':
      return 'border-red-500 bg-red-500/10 text-red-400';
    case 'Foundation':
      return 'border-blue-500 bg-blue-500/10 text-blue-400';
    case 'Intensive':
      return 'border-amber-500 bg-amber-500/10 text-amber-400';
    case 'Revision':
      return 'border-green-500 bg-green-500/10 text-green-400';
    case 'Mock Test & Fine-tuning':
      return 'border-purple-500 bg-purple-500/10 text-purple-400';
    default:
      return 'border-gray-500 bg-gray-500/10 text-gray-400';
  }
}

/* ─── Month Card ─── */
const MonthCard = ({ block }: { block: MonthBlock }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="bg-white/[0.04] border border-white/10 rounded-2xl overflow-hidden hover:border-amber-500/30 transition-colors"
    >
      {/* Header — always visible */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <div className="flex items-center gap-3 min-w-0">
          <span
            className={`flex-shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-bold ${phaseRing(block.phase)}`}
          >
            {block.month}
          </span>
          <div className="min-w-0">
            <p className="text-white font-semibold truncate">{block.label}</p>
            <p className="text-gray-400 text-sm">
              {block.weeklyHours} hrs/week · {block.mockTests} mock{block.mockTests > 1 ? 's' : ''}
            </p>
          </div>
        </div>
        {open ? (
          <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
        )}
      </button>

      {/* Expanded detail */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 space-y-4 border-t border-white/5 pt-4">
              {/* Subject-wise topics */}
              {block.subjects.map((subj) => (
                <div key={subj.name}>
                  <p className="text-amber-400 font-medium text-sm mb-1">{subj.name}</p>
                  <ul className="space-y-1">
                    {subj.topics.map((t, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 mt-0.5 text-green-500 flex-shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Tips */}
              <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-3">
                <p className="text-amber-500 font-medium text-xs uppercase tracking-wider mb-2">
                  Pro Tips
                </p>
                <ul className="space-y-1">
                  {block.tips.map((tip, i) => (
                    <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                      <Brain className="w-4 h-4 mt-0.5 text-amber-400 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* ═══════════════════════════════════════════════════════ */
/* ─── Page Component ─── */
/* ═══════════════════════════════════════════════════════ */

const StudyPlan = () => {
  const { openDemoModal } = useDemoModal();
  const [examType, setExamType] = useState<ExamType>('JEE');
  const [customMonths, setCustomMonths] = useState<number | null>(null);
  const [monthsInput, setMonthsInput] = useState<string>('');
  const [inputFocused, setInputFocused] = useState(false);
  const [inputError, setInputError] = useState('');

  const autoMonths = useMemo(() => getMonthsUntilExam(examType), [examType]);
  const months = customMonths ?? autoMonths;

  // When focused, show whatever the user typed (even empty). When not focused, show the current value.
  const displayInput = inputFocused ? monthsInput : String(months);

  const plan = useMemo(() => generateStudyPlan(examType, months), [examType, months]);

  const TierIcon = tierIcon(plan.tier);

  const freshness = getLastUpdated('study-plan');

  return (
    <>
      <SEOHead
        title={`${examType} Study Plan ${CURRENT_EXAM_YEAR} — Personalised ${months}-Month Roadmap | MindPeak`}
        description={`Auto-generated ${months}-month study plan for ${examType} ${CURRENT_EXAM_YEAR}. Month-by-month syllabus, prorated fee (${plan.fee}), mock-test schedule & crash course option. Start today.`}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: `${examType} Study Plan — ${months} Months`,
            description: plan.summary,
            provider: {
              '@type': 'EducationalOrganization',
              name: 'MindPeak Institute',
            },
          },
          buildFAQSchema(faqs),
        ]}
      />

      <div className="min-h-screen bg-[hsl(225,43%,7%)]">
        <Navbar />

        {/* ── Hero ── */}
        <section className="pt-28 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FreshnessBadge
              lastUpdated={freshness}
              verifiedFor={`${examType} ${CURRENT_EXAM_YEAR}`}
            />

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Your Personalised{' '}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                {examType} Study Plan
              </span>
            </h1>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              {plan.summary}
            </p>

            {/* ── Exam toggle ── */}
            <div className="flex items-center justify-center gap-3 mb-6">
              {(['JEE', 'NEET'] as const).map((e) => (
                <button
                  key={e}
                  onClick={() => {
                    setExamType(e);
                    setCustomMonths(null);
                  }}
                  className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
                    examType === e
                      ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/20'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {e}
                </button>
              ))}
            </div>

            {/* ── Month selector ── */}
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 max-w-md mx-auto">
              <label className="flex items-center justify-between text-sm text-gray-300 mb-3">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-amber-400" /> Months remaining
                </span>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={displayInput}
                  onFocus={() => {
                    setInputFocused(true);
                    setMonthsInput(String(months));
                    setInputError('');
                  }}
                  onChange={(e) => {
                    const raw = e.target.value.replace(/[^0-9]/g, '');
                    setMonthsInput(raw);
                    setInputError('');
                    const v = parseInt(raw);
                    if (!isNaN(v) && v >= 1 && v <= 24) {
                      setCustomMonths(v);
                    }
                  }}
                  onBlur={() => {
                    setInputFocused(false);
                    const v = parseInt(monthsInput);
                    if (monthsInput === '' || isNaN(v) || v < 1) {
                      setInputError('Enter a number between 1 and 24');
                      setCustomMonths(null);
                    } else if (v > 24) {
                      setCustomMonths(24);
                      setInputError('');
                    } else {
                      setInputError('');
                    }
                    setMonthsInput('');
                  }}
                  className={`w-16 bg-white/[0.06] border rounded-lg text-center text-amber-400 font-bold text-lg py-1 focus:outline-none transition ${
                    inputError ? 'border-red-500' : 'border-white/20 focus:border-amber-500'
                  }`}
                />
              </label>
              {inputError && (
                <p className="text-red-400 text-xs mt-1 text-right">{inputError}</p>
              )}
              <input
                type="range"
                min={1}
                max={24}
                value={months}
                onChange={(e) => {
                  setCustomMonths(parseInt(e.target.value));
                  setMonthsInput('');
                  setInputError('');
                }}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1 month</span>
                <span>12 months</span>
                <span>24 months</span>
              </div>
              {customMonths !== null && customMonths !== autoMonths && (
                <button
                  onClick={() => { setCustomMonths(null); setMonthsInput(''); setInputError(''); }}
                  className="mt-2 text-xs text-amber-500 underline"
                >
                  Reset to auto ({autoMonths} months)
                </button>
              )}
            </div>
          </div>
        </section>

        {/* ── Summary cards ── */}
        <section className="px-4 pb-12">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                icon: Clock,
                label: 'Duration',
                value: `${plan.totalMonths} month${plan.totalMonths > 1 ? 's' : ''}`,
              },
              {
                icon: IndianRupee,
                label: 'Prorated Fee',
                value: plan.fee,
              },
              {
                icon: BarChart3,
                label: 'Mock Tests',
                value: `${plan.months.reduce((s, m) => s + m.mockTests, 0)} total`,
              },
              {
                icon: TierIcon,
                label: 'Programme',
                value: plan.tierLabel,
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/[0.04] border border-white/10 rounded-2xl p-4 text-center"
              >
                <card.icon className="w-6 h-6 mx-auto mb-2 text-amber-400" />
                <p className="text-xs text-gray-400 uppercase tracking-wider">{card.label}</p>
                <p className="text-white font-bold mt-1 text-sm md:text-base">{card.value}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Tier badge ── */}
        <section className="px-4 pb-8">
          <div className="max-w-5xl mx-auto">
            <div
              className={`bg-gradient-to-r ${tierColor(plan.tier)} rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6`}
            >
              <TierIcon className="w-12 h-12 text-white flex-shrink-0" />
              <div className="text-center md:text-left flex-1">
                <h2 className="text-2xl font-bold text-white">{plan.tierLabel}</h2>
                <p className="text-white/80 mt-1 text-sm md:text-base">
                  {plan.tier === 'crash'
                    ? 'Maximum marks in minimum time — focuses on top 40-50 high-weightage chapters with daily mocks.'
                    : plan.tier === 'intensive'
                      ? 'Accelerated full-syllabus coverage. Your mentor compresses the curriculum without skipping any topic.'
                      : plan.tier === 'standard'
                        ? 'Balanced pace covering the complete syllabus with thorough revision and progressive mock intensity.'
                        : 'The gold standard — deep fundamentals, advanced problem-solving, and a final mock-test sprint.'}
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-white/60 text-xs uppercase">Fee</span>
                <span className="text-white font-bold text-xl">{plan.fee}</span>
                <button
                  onClick={openDemoModal}
                  className="mt-1 px-5 py-2 bg-white text-gray-900 font-semibold rounded-full text-sm hover:bg-gray-100 transition flex items-center gap-2"
                >
                  Book Free Trial <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Month-by-month plan ── */}
        <section className="px-4 pb-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
              Month-by-Month Roadmap
            </h2>
            <p className="text-gray-400 text-center mb-8 text-sm">
              Click any month to see the detailed syllabus & tips
            </p>

            <div className="grid md:grid-cols-2 gap-4 items-start">
              {plan.months.map((block) => (
                <MonthCard key={block.month} block={block} />
              ))}
            </div>
          </div>
        </section>

        {/* ── What's included ── */}
        <section className="px-4 pb-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              What's Included in Every Plan
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  icon: BookOpen,
                  title: 'Live 1-on-1 Classes',
                  desc: 'Daily sessions (6 days/week) with your dedicated mentor. Every session recorded.',
                },
                {
                  icon: BarChart3,
                  title: 'Performance Analytics',
                  desc: 'Weekly reports showing topic-wise accuracy, speed metrics, and improvement areas.',
                },
                {
                  icon: Brain,
                  title: 'Personalised Curriculum',
                  desc: 'Your mentor adapts the plan in real-time based on your mock-test performance.',
                },
                {
                  icon: Zap,
                  title: 'Instant Doubt Resolution',
                  desc: 'Unlimited doubts resolved on-the-spot during sessions + WhatsApp support.',
                },
                {
                  icon: Target,
                  title: 'Mock Tests (CBT)',
                  desc: `${plan.months.reduce((s, m) => s + m.mockTests, 0)}+ mock tests with NTA-pattern, with detailed post-test analysis.`,
                },
                {
                  icon: GraduationCap,
                  title: 'Curated Resources',
                  desc: 'HC Verma, Irodov, MS Chauhan, NCERT + 20 years of PYQ papers with solutions.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 hover:border-amber-500/30 transition"
                >
                  <item.icon className="w-8 h-8 text-amber-400 mb-3" />
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-4 pb-16">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Start Your {plan.totalMonths}-Month {examType} Journey
            </h2>
            <p className="text-gray-300 mb-6">
              Book a <strong>free trial class</strong> — experience 1-on-1 mentorship, then decide.
              No payment required upfront.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={openDemoModal}
                className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-amber-500/20 transition flex items-center gap-2"
              >
                Book Free Trial <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                to={`/course/${plan.courseSlug}`}
                className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white/10 transition flex items-center gap-2"
              >
                View Full Course Details <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-gray-500 text-xs mt-4">
              Plan fee: {plan.fee} for {plan.totalMonths} months · EMI options available
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="px-4 pb-16">
          <div className="max-w-3xl mx-auto">
            <PageFAQ
              heading="Study Plan"
              highlight="FAQs"
              items={faqs}
            />
          </div>
        </section>

        <PageFooter />
      </div>
    </>
  );
};

export default StudyPlan;
