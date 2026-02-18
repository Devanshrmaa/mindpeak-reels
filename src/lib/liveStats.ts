/**
 * Live Stats Utility
 * Auto-increments student numbers, success rates, rankings monthly
 * to show business growth. Google sees growing numbers = active, growing business.
 */

const BASE_DATE = new Date('2026-02-18');

interface StatConfig {
  baseValue: number;
  incrementPerMonth: number;
  maxValue?: number;
  /** Suffix displayed alongside the number */
  suffix?: string;
}

const stats = {
  studentsEnrolled: {
    baseValue: 500,
    incrementPerMonth: 50,
    maxValue: 10000,
    suffix: '+',
  },
  successRate: {
    baseValue: 95,
    incrementPerMonth: 0.1,
    maxValue: 99,
    suffix: '%',
  },
  airToppers: {
    baseValue: 50,
    incrementPerMonth: 5,
    maxValue: 500,
    suffix: '+',
  },
  mockTestsTaken: {
    baseValue: 10000,
    incrementPerMonth: 1000,
    suffix: '+',
  },
  yearsOfExcellence: {
    baseValue: 8,
    incrementPerMonth: 1 / 12, // +1 per year
    suffix: '+',
  },
} as const;

export type StatName = keyof typeof stats;

/**
 * Computes the months elapsed since the base date.
 */
function monthsSinceBase(): number {
  const now = new Date();
  return Math.max(
    0,
    (now.getFullYear() - BASE_DATE.getFullYear()) * 12 +
      (now.getMonth() - BASE_DATE.getMonth()),
  );
}

/**
 * Returns the auto-incremented stat value (rounded).
 */
export function getLiveStat(statName: StatName): number {
  const config: StatConfig = stats[statName];
  let value = config.baseValue + config.incrementPerMonth * monthsSinceBase();

  if (config.maxValue && value > config.maxValue) {
    value = config.maxValue;
  }

  return Math.round(value);
}

/**
 * Returns a stat with a small daily fluctuation (±2%) for realism.
 */
export function getLiveStatWithFluctuation(statName: StatName): number {
  const base = getLiveStat(statName);
  const dayOfMonth = new Date().getDate();
  const fluctuation = Math.sin(dayOfMonth) * 0.02;
  return Math.round(base * (1 + fluctuation));
}

/**
 * Returns the suffix string for a stat (e.g. '+', '%').
 */
export function getStatSuffix(statName: StatName): string {
  return stats[statName].suffix ?? '';
}

/**
 * Convenience: returns ALL live stats as a record.
 */
export function getAllLiveStats(): Record<StatName, number> {
  return {
    studentsEnrolled: getLiveStat('studentsEnrolled'),
    successRate: getLiveStat('successRate'),
    airToppers: getLiveStat('airToppers'),
    mockTestsTaken: getLiveStat('mockTestsTaken'),
    yearsOfExcellence: getLiveStat('yearsOfExcellence'),
  };
}

/**
 * Format a stat value for display with locale-aware formatting.
 */
export function formatStat(statName: StatName): string {
  const value = getLiveStat(statName);
  const suffix = getStatSuffix(statName);

  if (statName === 'successRate') {
    return `${value}${suffix}`;
  }

  return `${value.toLocaleString('en-IN')}${suffix}`;
}
