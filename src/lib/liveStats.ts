/**
 * Site stats — STATIC, owner-maintained.
 * ───────────────────────────────────────
 * These were previously auto-incremented monthly (students +50/mo, success
 * rate +0.1%/mo toward 99, "AIR toppers" +5/mo…) with a daily ±2%
 * "fluctuation for realism". Fabricated growing numbers are exactly the
 * class of deceptive signal the March 2026 spam-update recovery exists to
 * eliminate — a success rate that inflates itself is indefensible in a
 * reconsideration review.
 *
 * Values below are the site's standing marketing claims, frozen. Update
 * them MANUALLY when real numbers change. (Flagged for owner verification:
 * `yearsOfExcellence`.)
 */

const stats = {
  studentsEnrolled: { value: 500, suffix: '+' },
  successRate: { value: 95, suffix: '%' },
  airToppers: { value: 50, suffix: '+' },
  mockTestsTaken: { value: 10000, suffix: '+' },
  yearsOfExcellence: { value: 8, suffix: '+' },
} as const;

export type StatName = keyof typeof stats;

/** Returns the static stat value. */
export function getLiveStat(statName: StatName): number {
  return stats[statName].value;
}

/** Kept for API compatibility — no fluctuation, returns the static value. */
export function getLiveStatWithFluctuation(statName: StatName): number {
  return getLiveStat(statName);
}

/** Returns the suffix string for a stat (e.g. '+', '%'). */
export function getStatSuffix(statName: StatName): string {
  return stats[statName].suffix ?? '';
}

/** Convenience: returns ALL stats as a record. */
export function getAllLiveStats(): Record<StatName, number> {
  return {
    studentsEnrolled: getLiveStat('studentsEnrolled'),
    successRate: getLiveStat('successRate'),
    airToppers: getLiveStat('airToppers'),
    mockTestsTaken: getLiveStat('mockTestsTaken'),
    yearsOfExcellence: getLiveStat('yearsOfExcellence'),
  };
}

/** Format a stat value for display with locale-aware formatting. */
export function formatStat(statName: StatName): string {
  const value = getLiveStat(statName);
  const suffix = getStatSuffix(statName);
  if (statName === 'successRate') {
    return `${value}${suffix}`;
  }
  return `${value.toLocaleString('en-IN')}${suffix}`;
}
