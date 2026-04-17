import { describe, it, expect, vi, afterEach } from 'vitest';
import {
  getLiveStat,
  getLiveStatWithFluctuation,
  getStatSuffix,
  getAllLiveStats,
  formatStat,
} from '../lib/liveStats';

const BASE_DATE = new Date('2026-02-18');

afterEach(() => {
  vi.useRealTimers();
});

describe('getLiveStat', () => {
  it('returns the base value at the base date (0 months elapsed)', () => {
    vi.useFakeTimers();
    vi.setSystemTime(BASE_DATE);
    expect(getLiveStat('studentsEnrolled')).toBe(500);
    expect(getLiveStat('successRate')).toBe(95);
    expect(getLiveStat('airToppers')).toBe(50);
    expect(getLiveStat('mockTestsTaken')).toBe(10000);
    expect(getLiveStat('yearsOfExcellence')).toBe(8);
  });

  it('increments studentsEnrolled by 50 per month', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-04-18')); // 2 months after base
    expect(getLiveStat('studentsEnrolled')).toBe(600);
  });

  it('increments airToppers by 5 per month', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-05-18')); // 3 months after base
    expect(getLiveStat('airToppers')).toBe(65);
  });

  it('increments mockTestsTaken by 1000 per month', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-04-18')); // 2 months
    expect(getLiveStat('mockTestsTaken')).toBe(12000);
  });

  it('caps studentsEnrolled at 10,000', () => {
    vi.useFakeTimers();
    // (10000 - 500) / 50 = 190 months to reach max
    vi.setSystemTime(new Date('2042-01-01'));
    expect(getLiveStat('studentsEnrolled')).toBe(10000);
  });

  it('caps successRate at 99', () => {
    vi.useFakeTimers();
    // (99 - 95) / 0.1 = 40 months = ~3.3 years after base
    vi.setSystemTime(new Date('2029-07-01'));
    expect(getLiveStat('successRate')).toBe(99);
  });

  it('caps airToppers at 500', () => {
    vi.useFakeTimers();
    // (500 - 50) / 5 = 90 months after base
    vi.setSystemTime(new Date('2033-09-01'));
    expect(getLiveStat('airToppers')).toBe(500);
  });

  it('mockTestsTaken has no cap — grows indefinitely', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2040-01-01')); // ~167 months after base
    const value = getLiveStat('mockTestsTaken');
    expect(value).toBeGreaterThan(10000);
  });

  it('returns a rounded integer for all stats', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-07-01'));
    for (const stat of ['studentsEnrolled', 'successRate', 'airToppers', 'mockTestsTaken', 'yearsOfExcellence'] as const) {
      const value = getLiveStat(stat);
      expect(Number.isInteger(value)).toBe(true);
    }
  });

  it('never returns a negative value', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2020-01-01')); // before base date
    for (const stat of ['studentsEnrolled', 'successRate', 'airToppers', 'mockTestsTaken', 'yearsOfExcellence'] as const) {
      expect(getLiveStat(stat)).toBeGreaterThanOrEqual(0);
    }
  });
});

describe('getLiveStatWithFluctuation', () => {
  it('returns a value close to the base stat (within ±3%)', () => {
    vi.useFakeTimers();
    vi.setSystemTime(BASE_DATE);
    const base = getLiveStat('studentsEnrolled');
    const fluctuated = getLiveStatWithFluctuation('studentsEnrolled');
    const pctDiff = Math.abs(fluctuated - base) / base;
    expect(pctDiff).toBeLessThanOrEqual(0.03);
  });

  it('returns an integer', () => {
    vi.useFakeTimers();
    vi.setSystemTime(BASE_DATE);
    expect(Number.isInteger(getLiveStatWithFluctuation('mockTestsTaken'))).toBe(true);
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
    vi.useFakeTimers();
    vi.setSystemTime(BASE_DATE);
    const all = getAllLiveStats();
    expect(Object.keys(all)).toEqual(
      expect.arrayContaining([
        'studentsEnrolled',
        'successRate',
        'airToppers',
        'mockTestsTaken',
        'yearsOfExcellence',
      ])
    );
  });

  it('matches individual getLiveStat calls', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-06-01'));
    const all = getAllLiveStats();
    expect(all.studentsEnrolled).toBe(getLiveStat('studentsEnrolled'));
    expect(all.successRate).toBe(getLiveStat('successRate'));
    expect(all.airToppers).toBe(getLiveStat('airToppers'));
    expect(all.mockTestsTaken).toBe(getLiveStat('mockTestsTaken'));
    expect(all.yearsOfExcellence).toBe(getLiveStat('yearsOfExcellence'));
  });
});

describe('formatStat', () => {
  it('formats successRate without locale separators but with % suffix', () => {
    vi.useFakeTimers();
    vi.setSystemTime(BASE_DATE);
    expect(formatStat('successRate')).toBe('95%');
  });

  it('formats studentsEnrolled with locale grouping and + suffix', () => {
    vi.useFakeTimers();
    vi.setSystemTime(BASE_DATE);
    expect(formatStat('studentsEnrolled')).toBe('500+');
  });

  it('formats mockTestsTaken with Indian locale grouping', () => {
    vi.useFakeTimers();
    vi.setSystemTime(BASE_DATE);
    expect(formatStat('mockTestsTaken')).toBe('10,000+');
  });
});
