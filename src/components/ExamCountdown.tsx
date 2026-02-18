import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Timer, Flame, AlertTriangle } from 'lucide-react';
import {
  getNextUpcomingExam,
  getDaysUntilExam,
  getPreparationPhase,
  getUrgencyLevel,
  type ExamKey,
} from '@/lib/examCalendar';
import { useDemoModal } from '@/components/DemoBookingModal';

interface ExamCountdownProps {
  /** Default "JEE" */
  exam?: 'JEE' | 'NEET';
}

const urgencyStyles = {
  low: 'border-blue-500/30 bg-blue-500/5 text-blue-400',
  medium: 'border-yellow-500/30 bg-yellow-500/5 text-yellow-400',
  high: 'border-orange-500/30 bg-orange-500/5 text-orange-400',
  critical: 'border-red-500/30 bg-red-500/5 text-red-400',
} as const;

const urgencyBadge = {
  low: 'bg-blue-500/10 text-blue-400',
  medium: 'bg-yellow-500/10 text-yellow-400',
  high: 'bg-orange-500/10 text-orange-400',
  critical: 'bg-red-500/10 text-red-400',
} as const;

export const ExamCountdown = ({ exam = 'JEE' }: ExamCountdownProps) => {
  const { openDemoModal } = useDemoModal();
  const [data, setData] = useState<{
    key: ExamKey;
    label: string;
    daysLeft: number;
    phase: string;
    urgency: 'low' | 'medium' | 'high' | 'critical';
  } | null>(null);

  useEffect(() => {
    const update = () => {
      const next = getNextUpcomingExam(exam);
      if (!next) return;
      setData({
        key: next.key,
        label: next.info.label,
        daysLeft: next.daysLeft,
        phase: getPreparationPhase(next.key),
        urgency: getUrgencyLevel(next.key),
      });
    };
    update();
    const interval = setInterval(update, 3_600_000); // hourly
    return () => clearInterval(interval);
  }, [exam]);

  if (!data || data.daysLeft <= 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`rounded-xl border p-4 sm:p-5 ${urgencyStyles[data.urgency]}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        {/* Days left */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-background/50">
            {data.urgency === 'critical' ? (
              <AlertTriangle className="w-6 h-6 animate-pulse" />
            ) : (
              <Timer className="w-6 h-6" />
            )}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-2xl sm:text-3xl">
                {data.daysLeft}
              </span>
              <span className="text-xs uppercase tracking-wider opacity-80">
                Days Left
              </span>
            </div>
            <p className="text-xs opacity-70">{data.label}</p>
          </div>
        </div>

        {/* Phase */}
        <div className="flex flex-col sm:items-end gap-1">
          <span
            className={`inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full ${urgencyBadge[data.urgency]}`}
          >
            <Flame className="w-3 h-3" />
            {data.phase}
          </span>
        </div>
      </div>

      {/* Critical urgency banner */}
      {data.urgency === 'critical' && (
        <div className="mt-3 pt-3 border-t border-current/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-xs font-medium">
            ⚠️ Exam is near! Book an intensive crash course NOW.
          </p>
          <button
            onClick={openDemoModal}
            className="text-xs font-bold uppercase tracking-wider px-4 py-2 bg-current/10 rounded hover:bg-current/20 transition-colors flex-shrink-0"
          >
            Enroll Now →
          </button>
        </div>
      )}
    </motion.div>
  );
};
