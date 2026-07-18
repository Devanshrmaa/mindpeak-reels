import { describe, it, expect, vi, afterEach } from 'vitest';
import {
  getLiveStat,
  getLiveStatWithFluctuation,
  getStatSuffix,
  getAllLiveStats,
  formatStat,
} from '../lib/liveStats';

/**
 * Stats are STATIC by design (2026-07-15): the previous auto-increment
 * behaviour fabricated growing business numbers (students +50/month,
 * success rate +0.1%/month…). These tests assert the opposite invariant —
 * values never change with the clock.
 */

afterEach(() => {
  vi.useRealTimers();
});

const ALL_STATS = [
  'studentsEnrolled',
  'successRate',
  'airToppers',
  'mockTestsTaken',
  'yearsOfExcellence',
] as const;

describe('getLiveStat', () => {
  it('returns the configured static values', () => {
    expect(getLiveStat('studentsEnrolled')).toBe(500);
    expect(getLiveStat('successRate')).toBe(95);
    expect(getLiveStat('airToppers')).toBe(50);
    expect(getLiveStat('mockTestsTaken')).toBe(10000);
    expect(getLiveStat('yearsOfExcellence')).toBe(8);
  });

  it('does NOT change with the passage of time (no auto-increment)', () => {
    vi.useFakeTimers();
    const snapshots: number[][] = [];
    for (const date of ['2026-02-18', '2026-08-18', '2030-01-01', '2042-01-01']) {
      vi.setSystemTime(new Date(date));
      snapshots.push(ALL_STATS.map((s) => getLiveStat(s)));
    }
    for (const snap of snapshots.slice(1)) {
      expect(snap).toEqual(snapshots[0]);
    }
  });

  it('returns a non-negative integer for all stats', () => {
    for (const stat of ALL_STATS) {
      const value = getLiveStat(stat);
      expect(Number.isInteger(value)).toBe(true);
      expect(value).toBeGreaterThanOrEqual(0);
    }
  });
});

describe('getLiveStatWithFluctuation', () => {
  it('applies no fluctuation — returns exactly the static value', () => {
    vi.useFakeTimers();
    for (const date of ['2026-02-01', '2026-02-15', '2026-02-28']) {
      vi.setSystemTime(new Date(date));
      for (const stat of ALL_STATS) {
        expect(getLiveStatWithFluctuation(stat)).toBe(getLiveStat(stat));
      }
    }
  });
});

describe('getStatSuffix', () => {
  it('returns "+" for count-based stats', () => {
    expect(getStatSuffix('studentsEnrolled')).toBe('+');
    expect(getStatSuffix('airToppers')).toBe('+');
    expect(getStatSuffix('mockTestsTaken')).toBe('+');
    expect(getStatSuffix('yearsOfExcellence')).toBe('+');
  });

  it('returns "%" for successRate', () => {
    expect(getStatSuffix('successRate')).toBe('%');
  });
});

describe('getAllLiveStats', () => {
  it('returns all 5 stat keys', () => {
    const all = getAllLiveStats();
    expect(Object.keys(all)).toEqual(expect.arrayContaining([...ALL_STATS]));
  });

  it('matches individual getLiveStat calls', () => {
    const all = getAllLiveStats();
    for (const stat of ALL_STATS) {
      expect(all[stat]).toBe(getLiveStat(stat));
    }
  });
});

describe('formatStat', () => {
  it('formats successRate with % suffix', () => {
    expect(formatStat('successRate')).toBe('95%');
  });

  it('formats studentsEnrolled with + suffix', () => {
    expect(formatStat('studentsEnrolled')).toBe('500+');
  });

  it('formats mockTestsTaken with Indian locale grouping', () => {
    expect(formatStat('mockTestsTaken')).toBe('10,000+');
  });
});
