"use client";

import { useState, useMemo } from 'react';
import { Link } from '@/components/RouterLink';
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
  Award,
  Users,
  FileText,
  Lightbulb,
  Shield,
  Star,
  MessageCircle,
  PlayCircle,
  PieChart,
  AlertCircle,
  Flame,
} from 'lucide-react';
import { FreshnessBadge } from '@/components/FreshnessBadge';
import { getLastUpdated } from '@/lib/contentFreshness';
import {
  generateStudyPlan,
  getMonthsUntilExam,
  getDailySchedule,
  getSubjectWeightage,
  getPhaseBreakdown,
  getMilestones,
  type ExamType,
  type StudyPlan as StudyPlanType,
  type MonthBlock,
  type DailyScheduleBlock,
} from '@/lib/studyPlanGenerator';

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
  {
    question: 'How many mock tests are included?',
    answer: 'The number of mocks scales with your plan duration — ranging from 6+ mocks in crash courses to 40+ mocks in extended plans. All mocks follow the latest NTA pattern with detailed post-test analysis by your mentor.',
  },
  {
    question: 'Do I get study material?',
    answer: 'Yes. Every plan includes curated digital study materials — NCERT solutions, HC Verma / Irodov solutions (JEE), 20 years of PYQ papers with step-by-step solutions, formula sheets, and topic-wise problem sets. Physical books are recommended but not provided.',
  },
  {
    question: 'What is the cancellation and refund policy?',
    answer: 'You can cancel within the first 7 days for a full refund (minus payment gateway charges). After 7 days, a prorated refund for unused months is provided. The free trial class has no obligations whatsoever.',
  },
  {
    question: 'How are classes conducted?',
    answer: 'All classes are live 1-on-1 sessions via Google Meet / Zoom. Every session is recorded and shared for revision. Your mentor is available on WhatsApp for doubts outside class hours.',
  },
  {
    question: 'Can parents track progress?',
    answer: 'Yes. Parents receive weekly progress reports via WhatsApp/email — including attendance, mock scores, topic completion %, and mentor remarks. A monthly parent-mentor call is also included.',
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
      return 'border-red-500 bg-red-500/10 text-red-600';
    case 'Foundation':
      return 'border-blue-500 bg-blue-500/10 text-blue-600';
    case 'Intensive':
      return 'border-amber-500 bg-amber-500/10 text-amber-600';
    case 'Revision':
      return 'border-green-500 bg-green-500/10 text-green-600';
    case 'Mock Test & Fine-tuning':
      return 'border-purple-500 bg-purple-500/10 text-purple-600';
    default:
      return 'border-gray-500 bg-gray-500/10 text-muted-foreground';
  }
}

function phaseBorder(phase: string) {
  switch (phase) {
    case 'Crash':
      return 'border-l-red-500';
    case 'Foundation':
      return 'border-l-blue-500';
    case 'Intensive':
      return 'border-l-amber-500';
    case 'Revision':
      return 'border-l-green-500';
    case 'Mock Test & Fine-tuning':
      return 'border-l-purple-500';
    default:
      return 'border-l-gray-500';
  }
}

function scheduleTypeBg(type: DailyScheduleBlock['type']) {
  switch (type) {
    case 'study':
      return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
    case 'break':
      return 'bg-green-500/10 text-green-600 border-green-500/20';
    case 'test':
      return 'bg-red-500/10 text-red-600 border-red-500/20';
    case 'revision':
      return 'bg-amber-500/10 text-amber-600 border-amber-500/20';
    case 'self-study':
      return 'bg-purple-500/10 text-purple-600 border-purple-500/20';
  }
}

/* ─── Month Card ─── */
const MonthCard = ({ block, index }: { block: MonthBlock; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className={`bg-card border border-border border-l-4 ${phaseBorder(block.phase)} rounded-2xl overflow-hidden hover:border-amber-500/30 hover:bg-card transition-all group`}
    >
      {/* Header — always visible */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <div className="flex items-center gap-3 min-w-0">
          <span
            className={`flex-shrink-0 w-11 h-11 rounded-full border-2 flex items-center justify-center text-sm font-bold ${phaseRing(block.phase)} group-hover:scale-110 transition-transform`}
          >
            {block.month}
          </span>
          <div className="min-w-0">
            <p className="text-foreground font-semibold truncate">{block.label}</p>
            <div className="flex items-center gap-3 text-muted-foreground text-sm">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {block.weeklyHours} hrs/week
              </span>
              <span className="flex items-center gap-1">
                <FileText className="w-3.5 h-3.5" />
                {block.mockTests} mock{block.mockTests > 1 ? 's' : ''}
              </span>
            </div>
          </div>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
        </motion.div>
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
            <div className="px-5 pb-5 space-y-4 border-t border-border pt-4">
              {/* Subject-wise topics */}
              <div className="grid sm:grid-cols-3 gap-4">
                {block.subjects.map((subj) => (
                  <div key={subj.name} className="bg-white/[0.03] rounded-xl p-3">
                    <p className="text-amber-600 font-medium text-sm mb-2 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      {subj.name}
                    </p>
                    <ul className="space-y-1.5">
                      {subj.topics.map((t, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 mt-0.5 text-green-500 flex-shrink-0" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Tips */}
              <div className="bg-gradient-to-r from-amber-500/5 to-orange-500/5 border border-amber-500/20 rounded-xl p-4">
                <p className="text-amber-500 font-semibold text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4" />
                  Pro Tips for This Phase
                </p>
                <ul className="space-y-1.5">
                  {block.tips.map((tip, i) => (
                    <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                      <Brain className="w-4 h-4 mt-0.5 text-amber-600 flex-shrink-0" />
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
  const dailySchedule = useMemo(() => getDailySchedule(plan.tier), [plan.tier]);
  const weightage = useMemo(() => getSubjectWeightage(examType), [examType]);
  const phases = useMemo(() => getPhaseBreakdown(plan), [plan]);
  const milestones = useMemo(() => getMilestones(plan), [plan]);

  const TierIcon = tierIcon(plan.tier);
  const totalMocks = plan.months.reduce((s, m) => s + m.mockTests, 0);

  const freshness = getLastUpdated('study-plan');

  return (
    <>
      <SEOHead
        title={`${examType} Study Plan ${plan.examYear} — Personalised ${months}-Month Roadmap | MindPeak`}
        description={`Auto-generated ${months}-month study plan for ${examType} ${plan.examYear}. Month-by-month syllabus, prorated fee (${plan.fee}), mock-test schedule & crash course option. Start today.`}
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

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* ── Hero ── */}
        <section className="relative pt-28 pb-20 px-4 overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-border rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-border rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <FreshnessBadge
              lastUpdated={freshness}
              verifiedFor={`${examType} ${plan.examYear}`}
            />

            <motion.h1
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5 leading-tight"
            >
              Your Personalised{' '}
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                {examType} Study Plan
              </span>
            </motion.h1>

            <motion.p
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10"
            >
              {plan.summary}
            </motion.p>

            {/* ── Exam toggle ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-3 mb-8"
            >
              {(['JEE', 'NEET'] as const).map((e) => (
                <button
                  key={e}
                  onClick={() => {
                    setExamType(e);
                    setCustomMonths(null);
                  }}
                  className={`px-8 py-3 rounded-full font-semibold text-sm transition-all ${
                    examType === e
                      ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-foreground shadow-lg shadow-amber-500/25 scale-105'
                      : 'bg-card text-muted-foreground hover:bg-secondary border border-border hover:border-white/20'
                  }`}
                >
                  {e === 'JEE' ? 'JEE Main & Advanced' : 'NEET UG'}
                </button>
              ))}
            </motion.div>

            {/* ── Month selector ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card backdrop-blur-sm border border-border rounded-2xl p-6 max-w-md mx-auto shadow-xl shadow-black/10"
            >
              <label className="flex items-center justify-between text-sm text-gray-300 mb-3">
                <span className="flex items-center gap-2 font-medium">
                  <Calendar className="w-4 h-4 text-amber-600" /> Months remaining
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
                  className={`w-16 bg-card border rounded-lg text-center text-amber-600 font-bold text-lg py-1.5 focus:outline-none transition ${
                    inputError ? 'border-red-500' : 'border-white/20 focus:border-amber-500'
                  }`}
                />
              </label>
              {inputError && (
                <p className="text-red-600 text-xs mt-1 text-right">{inputError}</p>
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
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>1 month</span>
                <span>12 months</span>
                <span>24 months</span>
              </div>
              {customMonths !== null && customMonths !== autoMonths && (
                <button
                  onClick={() => { setCustomMonths(null); setMonthsInput(''); setInputError(''); }}
                  className="mt-2 text-xs text-amber-500 underline hover:text-amber-600 transition"
                >
                  Reset to auto ({autoMonths} months)
                </button>
              )}
            </motion.div>
          </div>
        </section>

        {/* ── Summary cards ── */}
        <section className="px-4 pb-14">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              {
                icon: Clock,
                label: 'Duration',
                value: `${plan.totalMonths} month${plan.totalMonths > 1 ? 's' : ''}`,
                gradient: 'from-blue-500/20 to-cyan-500/20',
              },
              {
                icon: IndianRupee,
                label: 'Prorated Fee',
                value: plan.fee,
                gradient: 'from-green-500/20 to-emerald-500/20',
              },
              {
                icon: BarChart3,
                label: 'Mock Tests',
                value: `${totalMocks} total`,
                gradient: 'from-purple-500/20 to-pink-500/20',
              },
              {
                icon: TierIcon,
                label: 'Programme',
                value: plan.tierLabel.split(' ')[0],
                gradient: 'from-amber-500/20 to-orange-500/20',
              },
              {
                icon: BookOpen,
                label: 'Weekly Hours',
                value: `${plan.months[0]?.weeklyHours ?? 20} hrs`,
                gradient: 'from-red-500/20 to-rose-500/20',
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`relative bg-gradient-to-br ${card.gradient} border border-border rounded-2xl p-5 text-center overflow-hidden group hover:border-amber-500/30 transition-colors`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="relative">
                  <card.icon className="w-7 h-7 mx-auto mb-2 text-amber-600 group-hover:scale-110 transition-transform" />
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">{card.label}</p>
                  <p className="text-foreground font-bold mt-1 text-sm md:text-base">{card.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Tier badge ── */}
        <section className="px-4 pb-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`relative bg-gradient-to-r ${tierColor(plan.tier)} rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 overflow-hidden`}
            >
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-card rounded-full blur-3xl" />
              <div className="relative flex-shrink-0 w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center">
                <TierIcon className="w-10 h-10 text-foreground" />
              </div>
              <div className="relative text-center md:text-left flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">{plan.tierLabel}</h2>
                <p className="text-muted-foreground mt-2 text-sm md:text-base leading-relaxed max-w-xl">
                  {plan.tier === 'crash'
                    ? 'Maximum marks in minimum time — focuses on top 40-50 high-weightage chapters with daily mocks.'
                    : plan.tier === 'intensive'
                      ? 'Accelerated full-syllabus coverage. Your mentor compresses the curriculum without skipping any topic.'
                      : plan.tier === 'standard'
                        ? 'Balanced pace covering the complete syllabus with thorough revision and progressive mock intensity.'
                        : 'The gold standard — deep fundamentals, advanced problem-solving, and a final mock-test sprint.'}
                </p>
              </div>
              <div className="relative flex flex-col items-center gap-3">
                <span className="text-muted-foreground text-xs uppercase tracking-wider">Fee</span>
                <span className="text-foreground font-bold text-2xl">{plan.fee}</span>
                <button
                  onClick={openDemoModal}
                  className="mt-1 px-6 py-2.5 bg-foreground text-background font-semibold rounded-full text-sm hover:bg-foreground/90 transition flex items-center gap-2 shadow-lg"
                >
                  Book Free Trial <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Phase Overview Timeline ── */}
        <section className="px-4 pb-16">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Phase-Wise <span className="text-amber-600">Breakdown</span>
              </h2>
              <p className="text-muted-foreground text-sm">Your {months}-month journey at a glance</p>
            </motion.div>

            {/* Phase bar */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex rounded-full overflow-hidden h-4 mb-6"
              style={{ transformOrigin: 'left' }}
            >
              {phases.map((phase, i) => (
                <div
                  key={i}
                  className="h-full relative group cursor-default"
                  style={{ width: `${phase.percentage}%`, backgroundColor: phase.color }}
                  title={`${phase.name}: ${phase.months} month${phase.months > 1 ? 's' : ''}`}
                >
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none z-10">
                    {phase.name}: {phase.months}mo
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Phase cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {phases.map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-5 hover:border-white/20 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-4 h-4 rounded-full flex-shrink-0"
                      style={{ backgroundColor: phase.color }}
                    />
                    <h3 className="text-foreground font-semibold">{phase.name}</h3>
                    <span className="ml-auto text-muted-foreground text-sm font-medium">
                      {phase.months} mo · {phase.percentage}%
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{phase.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Milestones */}
            {milestones.length > 0 && (
              <div className="mt-8 relative">
                <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/50 via-amber-500/20 to-transparent" />
                <div className="space-y-4">
                  {milestones.map((ms, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-4 pl-0"
                    >
                      <div className="relative flex-shrink-0 w-12 h-12 bg-amber-500/10 border-2 border-amber-500/30 rounded-full flex items-center justify-center z-10">
                        <span className="text-amber-600 font-bold text-sm">M{ms.month}</span>
                      </div>
                      <div className="pt-1">
                        <p className="text-foreground font-semibold text-sm">{ms.title}</p>
                        <p className="text-muted-foreground text-sm">{ms.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ── Exam Pattern & Subject Weightage ── */}
        <section className="px-4 pb-16">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                {examType} <span className="text-amber-600">Exam Pattern</span> & Weightage
              </h2>
              <p className="text-muted-foreground text-sm">
                {weightage.examPattern} · {weightage.examDuration}
              </p>
            </motion.div>

            {/* Exam stats bar */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { label: 'Total Questions', value: weightage.totalQuestions, icon: FileText },
                { label: 'Total Marks', value: weightage.totalMarks, icon: Award },
                { label: 'Duration', value: weightage.examDuration, icon: Clock },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-card border border-border rounded-xl p-4 text-center"
                >
                  <stat.icon className="w-5 h-5 mx-auto mb-1.5 text-amber-600" />
                  <p className="text-foreground font-bold text-lg">{stat.value}</p>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Subject weightage cards */}
            <div className="grid md:grid-cols-3 gap-4">
              {weightage.subjects.map((subj, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-5 hover:border-amber-500/20 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-foreground font-semibold text-lg">{subj.subject}</h3>
                    <span className="text-amber-600 font-bold text-2xl">{subj.percentage}%</span>
                  </div>
                  {/* Visual bar */}
                  <div className="w-full bg-secondary rounded-full h-2 mb-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${subj.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.15, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                    />
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span>{subj.totalQuestions} Qs</span>
                    <span>{subj.totalMarks} marks</span>
                  </div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Key Topics</p>
                  <ul className="space-y-1">
                    {subj.keyTopics.map((topic, j) => (
                      <li key={j} className="text-gray-300 text-sm flex items-center gap-2">
                        <PieChart className="w-3 h-3 text-amber-500/60 flex-shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Month-by-month plan ── */}
        <section className="px-4 pb-16">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Month-by-Month <span className="text-amber-600">Roadmap</span>
              </h2>
              <p className="text-muted-foreground text-sm">
                Click any month to see the detailed syllabus, topics & pro tips
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4 items-start">
              {plan.months.map((block, idx) => (
                <MonthCard key={block.month} block={block} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Typical Day Schedule ── */}
        <section className="px-4 pb-16">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Your Typical <span className="text-amber-600">Day</span>
              </h2>
              <p className="text-muted-foreground text-sm">
                {plan.tierLabel} — {plan.months[0]?.weeklyHours ?? 20} hours/week schedule
              </p>
            </motion.div>

            {/* Schedule legend */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              {[
                { type: 'study' as const, label: 'Live Class' },
                { type: 'self-study' as const, label: 'Self-Practice' },
                { type: 'test' as const, label: 'Mock Test' },
                { type: 'revision' as const, label: 'Revision' },
                { type: 'break' as const, label: 'Break' },
              ].map((item) => (
                <span
                  key={item.type}
                  className={`${scheduleTypeBg(item.type)} border text-xs px-3 py-1 rounded-full`}
                >
                  {item.label}
                </span>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              {dailySchedule.map((block, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -15 : 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className={`flex items-center gap-4 ${scheduleTypeBg(block.type)} border rounded-xl px-4 py-3`}
                >
                  <span className="text-sm font-mono font-semibold w-16 flex-shrink-0">{block.time}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-foreground text-sm font-medium truncate">{block.activity}</p>
                  </div>
                  <span className="text-xs text-muted-foreground flex-shrink-0">{block.duration}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What's Included ── */}
        <section className="px-4 pb-16">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                What's <span className="text-amber-600">Included</span> in Every Plan
              </h2>
              <p className="text-muted-foreground text-sm">Everything you need to crack {examType} — nothing extra to buy</p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  icon: PlayCircle,
                  title: 'Live 1-on-1 Classes',
                  desc: 'Daily sessions (6 days/week) with your dedicated mentor. Every session recorded for revision.',
                  highlight: '6 days/week',
                },
                {
                  icon: BarChart3,
                  title: 'Performance Analytics',
                  desc: 'Weekly reports showing topic-wise accuracy, speed metrics, and improvement areas.',
                  highlight: 'Weekly reports',
                },
                {
                  icon: Brain,
                  title: 'Personalised Curriculum',
                  desc: 'Your mentor adapts the plan in real-time based on your mock-test performance.',
                  highlight: 'Real-time adaptation',
                },
                {
                  icon: MessageCircle,
                  title: 'Instant Doubt Resolution',
                  desc: 'Unlimited doubts resolved on-the-spot during sessions + WhatsApp support 7 days a week.',
                  highlight: '24/7 WhatsApp',
                },
                {
                  icon: Target,
                  title: 'Mock Tests (CBT)',
                  desc: `${totalMocks}+ NTA-pattern mock tests with detailed post-test analysis by your mentor.`,
                  highlight: `${totalMocks}+ mocks`,
                },
                {
                  icon: GraduationCap,
                  title: 'Curated Resources',
                  desc: 'HC Verma, Irodov, MS Chauhan, NCERT + 20 years of PYQ papers with solutions.',
                  highlight: '20 years PYQs',
                },
                {
                  icon: Users,
                  title: 'Parent Progress Reports',
                  desc: 'Weekly progress updates for parents via WhatsApp/email with mentor remarks.',
                  highlight: 'Weekly updates',
                },
                {
                  icon: Shield,
                  title: 'Free Trial — Zero Risk',
                  desc: 'Attend a free 1-on-1 trial class before committing. No payment, no obligations.',
                  highlight: 'No obligations',
                },
                {
                  icon: IndianRupee,
                  title: 'EMI Options Available',
                  desc: 'Easy monthly installments. Pay as you learn — no lump-sum required upfront.',
                  highlight: 'Pay monthly',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="bg-card border border-border rounded-2xl p-5 hover:border-amber-500/20 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                      <item.icon className="w-5 h-5 text-amber-600" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-foreground font-semibold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                      <span className="inline-block mt-2 text-xs text-amber-600/80 bg-amber-500/10 px-2 py-0.5 rounded-full">
                        {item.highlight}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why MindPeak (Comparison) ── */}
        <section className="px-4 pb-16">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Why <span className="text-amber-600">MindPeak</span> Study Plan?
              </h2>
              <p className="text-muted-foreground text-sm">See the difference 1-on-1 mentorship makes</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Without */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6"
              >
                <h3 className="text-red-600 font-semibold text-lg mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Self-Study / Generic Coaching
                </h3>
                <ul className="space-y-3">
                  {[
                    'Same pace for all — no personalisation',
                    'Large batches — doubts go unanswered',
                    'Generic study material & schedule',
                    'No individual performance tracking',
                    'Fixed fee regardless of time remaining',
                    'One-size-fits-all mock schedule',
                    'No mentor accountability',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="text-red-600 mt-0.5 flex-shrink-0">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* With MindPeak */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-green-500/5 border border-green-500/20 rounded-2xl p-6 relative overflow-hidden"
              >
                <div className="absolute top-3 right-3">
                  <span className="text-xs bg-green-500/20 text-green-600 px-2 py-1 rounded-full font-medium flex items-center gap-1">
                    <Star className="w-3 h-3" /> Recommended
                  </span>
                </div>
                <h3 className="text-green-600 font-semibold text-lg mb-4 flex items-center gap-2">
                  <Flame className="w-5 h-5" />
                  MindPeak 1-on-1 Mentorship
                </h3>
                <ul className="space-y-3">
                  {[
                    'Fully personalised pace & curriculum',
                    '1-on-1 dedicated mentor — every doubt resolved',
                    'Auto-generated plan based on months remaining',
                    'Weekly performance analytics & parent reports',
                    'Prorated fee — pay only for months you need',
                    `${totalMocks}+ mock tests with detailed analysis`,
                    'Mentor accountable for your results',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Success Metrics ── */}
        <section className="px-4 pb-16">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/[0.04] to-white/[0.02] border border-border rounded-3xl p-8 md:p-10"
            >
              <h2 className="text-2xl font-bold text-foreground text-center mb-8">
                Our <span className="text-amber-600">Track Record</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: '92%', label: 'Students improved scores', icon: TrendingUp },
                  { value: '3000+', label: 'Students mentored', icon: Users },
                  { value: '4.8/5', label: 'Average student rating', icon: Star },
                  { value: '85%', label: 'Qualify in first attempt', icon: Award },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center"
                  >
                    <stat.icon className="w-6 h-6 mx-auto mb-2 text-amber-600" />
                    <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-4 pb-16">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-3xl p-8 md:p-14 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-amber-500/5 via-transparent to-orange-500/5" />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl" />

              <div className="relative">
                <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                  Start Your {plan.totalMonths}-Month {examType} Journey
                </h2>
                <p className="text-gray-300 mb-8 text-lg max-w-lg mx-auto">
                  Book a <strong>free trial class</strong> — experience 1-on-1 mentorship, then decide.
                  No payment required upfront.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={openDemoModal}
                    className="px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-foreground font-semibold rounded-full hover:shadow-xl hover:shadow-amber-500/25 transition-all hover:scale-105 flex items-center gap-2 text-lg"
                  >
                    Book Free Trial <ArrowRight className="w-5 h-5" />
                  </button>
                  <Link
                    to={`/course/${plan.courseSlug}`}
                    className="px-8 py-4 bg-card border border-border text-foreground rounded-full hover:bg-secondary transition flex items-center gap-2"
                  >
                    View Full Course <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
                <p className="text-muted-foreground text-sm mt-6">
                  Plan fee: {plan.fee} for {plan.totalMonths} months · EMI options available · 7-day refund policy
                </p>
              </div>
            </motion.div>
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
