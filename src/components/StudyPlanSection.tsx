/**
 * Embeddable Study Plan Preview Section
 * ──────────────────────────────────────
 * Compact version of the full /study-plan page.
 * Shows a dynamic study-plan preview for JEE or NEET, and links
 * to the full planner page. Designed to drop into any page.
 */

import { useMemo } from 'react';
import { Link } from '@/components/RouterLink';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  TrendingUp,
  ArrowRight,
  Zap,
  Target,
  GraduationCap,
  IndianRupee,
  BarChart3,
  CheckCircle,
} from 'lucide-react';
import {
  generateStudyPlan,
  getMonthsUntilExam,
  type ExamType,
  type StudyPlan,
} from '@/lib/studyPlanGenerator';
import { CURRENT_EXAM_YEAR } from '@/lib/examYears';
import { useDemoModal } from '@/components/DemoBookingModal';

/* ─── Tier helpers ─── */
function tierGradient(tier: StudyPlan['tier']) {
  switch (tier) {
    case 'crash':
      return 'from-red-500/20 to-orange-500/20 border-red-500/30';
    case 'intensive':
      return 'from-orange-500/20 to-amber-500/20 border-orange-500/30';
    case 'standard':
      return 'from-blue-500/20 to-cyan-500/20 border-blue-500/30';
    case 'extended':
      return 'from-indigo-500/20 to-purple-500/20 border-indigo-500/30';
    default:
      return 'from-blue-500/20 to-cyan-500/20 border-blue-500/30';
  }
}

function tierIcon(tier: StudyPlan['tier']) {
  switch (tier) {
    case 'crash':
      return Zap;
    case 'intensive':
      return TrendingUp;
    case 'standard':
      return Target;
    case 'extended':
      return GraduationCap;
    default:
      return Target;
  }
}

/* ─── Props ─── */
interface StudyPlanSectionProps {
  /** Which exam to show the plan for */
  examType: ExamType;
  /** Optional: override the auto-detected months remaining */
  monthsOverride?: number;
  /** Extra heading text (replaces default) */
  heading?: string;
  /** Use the light/dark-aware design tokens (for pages with bg-background) */
  themed?: boolean;
}

export const StudyPlanSection = ({
  examType,
  monthsOverride,
  heading,
  themed = false,
}: StudyPlanSectionProps) => {
  const { openDemoModal } = useDemoModal();
  const months = monthsOverride ?? getMonthsUntilExam(examType);
  const plan = useMemo(() => generateStudyPlan(examType, months), [examType, months]);
  const TierIcon = tierIcon(plan.tier);

  // Show first 3 months as a preview
  const previewMonths = plan.months.slice(0, 3);

  const cardBg = themed ? 'bg-secondary/40 border-border' : 'bg-white/[0.04] border-white/10';
  const text = themed ? 'text-foreground' : 'text-white';
  const textMuted = themed ? 'text-muted-foreground' : 'text-gray-400';
  const textAccent = themed ? 'text-primary' : 'text-amber-400';

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className={`font-display font-bold text-xl sm:text-2xl md:text-3xl ${text} mb-3`}>
            {heading || (
              <>
                Your Personalised{' '}
                <span className={themed ? 'text-gradient-gold' : 'bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent'}>
                  {examType} {CURRENT_EXAM_YEAR} Study Plan
                </span>
              </>
            )}
          </h2>
          <p className={`${textMuted} text-sm sm:text-base max-w-2xl mx-auto`}>
            {months} months until {examType} {CURRENT_EXAM_YEAR} — your personalised {plan.tierLabel} is ready.
            Curriculum, fee, and schedule auto-adjust based on time remaining.
          </p>
        </motion.div>

        {/* ── Tier banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`bg-gradient-to-r ${tierGradient(plan.tier)} border rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-4 mb-8`}
        >
          <TierIcon className={`w-10 h-10 ${textAccent} flex-shrink-0`} />
          <div className="flex-1 text-center sm:text-left">
            <h3 className={`font-bold text-lg ${text}`}>{plan.tierLabel}</h3>
            <p className={`${textMuted} text-sm mt-0.5`}>{plan.summary.slice(0, 150)}…</p>
          </div>
          <div className="flex flex-col items-center gap-1 flex-shrink-0">
            <span className={`${textMuted} text-xs uppercase`}>Prorated Fee</span>
            <span className={`${text} font-bold text-xl`}>{plan.fee}</span>
          </div>
        </motion.div>

        {/* ── Quick stats ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {[
            { icon: Clock, label: 'Duration', value: `${plan.totalMonths} months` },
            { icon: IndianRupee, label: 'Fee', value: plan.fee },
            { icon: BarChart3, label: 'Mock Tests', value: `${plan.months.reduce((s, m) => s + m.mockTests, 0)} total` },
            { icon: Calendar, label: 'Weekly Hours', value: `${plan.months[0]?.weeklyHours ?? 20} hrs` },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`${cardBg} border rounded-xl p-3.5 text-center`}
            >
              <stat.icon className={`w-5 h-5 mx-auto mb-1.5 ${textAccent}`} />
              <p className={`${textMuted} text-[10px] uppercase tracking-wider`}>{stat.label}</p>
              <p className={`${text} font-semibold text-sm mt-0.5`}>{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* ── Preview: first 3 months ── */}
        <div className="space-y-3 mb-8">
          <h3 className={`font-bold text-base ${text} mb-1`}>
            Plan Preview — First {previewMonths.length} Months
          </h3>
          {previewMonths.map((block) => (
            <motion.div
              key={block.month}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: block.month * 0.08 }}
              className={`${cardBg} border rounded-xl p-4`}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className={`w-8 h-8 rounded-full border-2 ${textAccent} border-current flex items-center justify-center text-xs font-bold flex-shrink-0`}>
                  {block.month}
                </span>
                <div>
                  <p className={`${text} font-semibold text-sm`}>{block.label}</p>
                  <p className={`${textMuted} text-xs`}>
                    {block.weeklyHours} hrs/week · {block.mockTests} mock{block.mockTests > 1 ? 's' : ''}
                  </p>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-2">
                {block.subjects.map((subj) => (
                  <div key={subj.name}>
                    <p className={`${textAccent} text-xs font-medium mb-1`}>{subj.name}</p>
                    <ul className="space-y-0.5">
                      {subj.topics.slice(0, 3).map((t, i) => (
                        <li key={i} className={`flex items-start gap-1.5 ${textMuted} text-xs`}>
                          <CheckCircle className="w-3 h-3 mt-0.5 text-green-500 flex-shrink-0" />
                          <span className="line-clamp-1">{t}</span>
                        </li>
                      ))}
                      {subj.topics.length > 3 && (
                        <li className={`${textMuted} text-xs pl-5`}>
                          +{subj.topics.length - 3} more
                        </li>
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
          {plan.months.length > 3 && (
            <p className={`${textMuted} text-xs text-center`}>
              + {plan.months.length - 3} more months in the full plan
            </p>
          )}
        </div>

        {/* ── CTAs ── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/study-plan"
            className="w-full sm:w-auto px-7 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-amber-500/20 transition flex items-center justify-center gap-2 text-sm"
          >
            View Full {months}-Month Plan <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            onClick={openDemoModal}
            className={`w-full sm:w-auto px-7 py-3 ${themed ? 'border border-border text-foreground hover:border-primary hover:text-primary' : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'} rounded-full transition flex items-center justify-center gap-2 text-sm`}
          >
            Book Free Trial <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
