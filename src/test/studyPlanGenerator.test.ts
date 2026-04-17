import { describe, it, expect } from 'vitest';
import {
  generateStudyPlan,
  getDailySchedule,
  getPhaseBreakdown,
  getMilestones,
  getSubjectWeightage,
  type StudyPlan,
} from '../lib/studyPlanGenerator';

// ── Tier boundary tests ──────────────────────────────────────────────────────

describe('generateStudyPlan — tier selection', () => {
  it('assigns "crash" tier for 1 month', () => {
    expect(generateStudyPlan('JEE', 1).tier).toBe('crash');
  });

  it('assigns "crash" tier for 2 months', () => {
    expect(generateStudyPlan('JEE', 2).tier).toBe('crash');
  });

  it('assigns "intensive" tier for 3 months', () => {
    expect(generateStudyPlan('JEE', 3).tier).toBe('intensive');
  });

  it('assigns "intensive" tier for 6 months', () => {
    expect(generateStudyPlan('NEET', 6).tier).toBe('intensive');
  });

  it('assigns "standard" tier for 7 months', () => {
    expect(generateStudyPlan('JEE', 7).tier).toBe('standard');
  });

  it('assigns "standard" tier for 12 months', () => {
    expect(generateStudyPlan('NEET', 12).tier).toBe('standard');
  });

  it('assigns "extended" tier for 13 months', () => {
    expect(generateStudyPlan('JEE', 13).tier).toBe('extended');
  });

  it('assigns "extended" tier for 24 months', () => {
    expect(generateStudyPlan('NEET', 24).tier).toBe('extended');
  });

  it('clamps input above 24 to 24 months', () => {
    const plan = generateStudyPlan('JEE', 30);
    expect(plan.totalMonths).toBe(24);
    expect(plan.tier).toBe('extended');
  });

  it('clamps input of 0 to 1 month', () => {
    const plan = generateStudyPlan('JEE', 0);
    expect(plan.totalMonths).toBe(1);
    expect(plan.tier).toBe('crash');
  });
});

// ── Fee calculation tests ────────────────────────────────────────────────────

describe('generateStudyPlan — fee calculation', () => {
  it('crash course fee = premiumCrashPerSubject × 3 for JEE (3 subjects)', () => {
    const plan = generateStudyPlan('JEE', 1);
    // 30000 × 3 = 90000
    expect(plan.feeNumeric).toBe(90000);
  });

  it('crash course fee = premiumCrashPerSubject × 3 for NEET (3 subjects)', () => {
    const plan = generateStudyPlan('NEET', 2);
    expect(plan.feeNumeric).toBe(90000);
  });

  it('fee string starts with ₹ and ends with GST', () => {
    const plan = generateStudyPlan('JEE', 6);
    expect(plan.fee).toMatch(/^₹/);
    expect(plan.fee).toMatch(/GST$/);
  });

  it('intensive 4-month plan has 40% premium over standard per-month rate', () => {
    // Base: 130000/12 per month. 4 months × 1.4 premium = round(130000/12 × 4 × 1.4 / 1000) × 1000
    const plan = generateStudyPlan('JEE', 4);
    const expected = Math.round((130000 / 12) * 4 * 1.4 / 1000) * 1000;
    expect(plan.feeNumeric).toBe(expected);
  });

  it('intensive 6-month plan has 25% premium', () => {
    const plan = generateStudyPlan('JEE', 6);
    const expected = Math.round((130000 / 12) * 6 * 1.25 / 1000) * 1000;
    expect(plan.feeNumeric).toBe(expected);
  });

  it('standard 12-month plan has no premium (1:1 with annual fee)', () => {
    const plan = generateStudyPlan('JEE', 12);
    // 12 months with no premium → full 130000
    expect(plan.feeNumeric).toBe(130000);
  });

  it('extended plan fee is always a multiple of 1000', () => {
    for (const months of [13, 18, 20, 24]) {
      const plan = generateStudyPlan('JEE', months);
      expect(plan.feeNumeric % 1000).toBe(0);
    }
  });

  it('feeNumeric is always a positive number', () => {
    for (const months of [1, 3, 7, 12, 18, 24]) {
      const plan = generateStudyPlan('NEET', months);
      expect(plan.feeNumeric).toBeGreaterThan(0);
    }
  });
});

// ── Month structure tests ────────────────────────────────────────────────────

describe('generateStudyPlan — month structure', () => {
  it('months array length equals totalMonths', () => {
    for (const n of [1, 3, 6, 12, 24]) {
      const plan = generateStudyPlan('JEE', n);
      expect(plan.months).toHaveLength(n);
    }
  });

  it('month numbers are 1-indexed and sequential', () => {
    const plan = generateStudyPlan('JEE', 6);
    plan.months.forEach((m, i) => {
      expect(m.month).toBe(i + 1);
    });
  });

  it('each month has subjects for all 3 JEE subjects', () => {
    const plan = generateStudyPlan('JEE', 6);
    for (const m of plan.months) {
      const subjectNames = m.subjects.map((s) => s.name);
      expect(subjectNames).toContain('Physics');
      expect(subjectNames).toContain('Chemistry');
      expect(subjectNames).toContain('Mathematics');
    }
  });

  it('each month has subjects for all 3 NEET subjects', () => {
    const plan = generateStudyPlan('NEET', 6);
    for (const m of plan.months) {
      const subjectNames = m.subjects.map((s) => s.name);
      expect(subjectNames).toContain('Physics');
      expect(subjectNames).toContain('Chemistry');
      expect(subjectNames).toContain('Biology');
    }
  });

  it('each month has at least 1 mock test', () => {
    const plan = generateStudyPlan('JEE', 12);
    for (const m of plan.months) {
      expect(m.mockTests).toBeGreaterThanOrEqual(1);
    }
  });

  it('crash tier always has 3 mock tests per month', () => {
    const plan = generateStudyPlan('JEE', 2);
    for (const m of plan.months) {
      expect(m.mockTests).toBe(3);
    }
  });

  it('crash tier has 40 weekly hours', () => {
    const plan = generateStudyPlan('JEE', 1);
    expect(plan.months[0].weeklyHours).toBe(40);
  });

  it('intensive tier has 30 weekly hours', () => {
    const plan = generateStudyPlan('JEE', 4);
    expect(plan.months[0].weeklyHours).toBe(30);
  });

  it('standard/extended tiers have 20 weekly hours', () => {
    const plan = generateStudyPlan('JEE', 12);
    expect(plan.months[0].weeklyHours).toBe(20);
  });

  it('each month has non-empty tips', () => {
    const plan = generateStudyPlan('JEE', 6);
    for (const m of plan.months) {
      expect(m.tips.length).toBeGreaterThan(0);
    }
  });

  it('label includes month number and phase', () => {
    const plan = generateStudyPlan('JEE', 12);
    expect(plan.months[0].label).toMatch(/Month 1/);
    expect(plan.months[0].label).toMatch(/Foundation/);
  });
});

// ── Phase progression tests ──────────────────────────────────────────────────

describe('generateStudyPlan — phase progression', () => {
  it('crash plan uses only "Crash" phase', () => {
    const plan = generateStudyPlan('JEE', 2);
    const phases = new Set(plan.months.map((m) => m.phase));
    expect(phases.has('Crash')).toBe(true);
    expect(phases.size).toBe(1);
  });

  it('12-month plan contains Foundation, Intensive, Revision phases', () => {
    const plan = generateStudyPlan('JEE', 12);
    const phases = new Set(plan.months.map((m) => m.phase));
    expect(phases.has('Foundation')).toBe(true);
    expect(phases.has('Intensive')).toBe(true);
    expect(phases.has('Revision')).toBe(true);
  });

  it('first month of a 12-month plan is Foundation', () => {
    expect(generateStudyPlan('JEE', 12).months[0].phase).toBe('Foundation');
  });

  it('last month of a 12-month plan is "Mock Test & Fine-tuning"', () => {
    const plan = generateStudyPlan('JEE', 12);
    expect(plan.months[plan.months.length - 1].phase).toBe('Mock Test & Fine-tuning');
  });
});

// ── Subject topic coverage ───────────────────────────────────────────────────

describe('generateStudyPlan — topic distribution', () => {
  it('all 15 Physics topics appear across a 12-month JEE plan', () => {
    const plan = generateStudyPlan('JEE', 12);
    const physicsBodies = plan.months.flatMap(
      (m) => m.subjects.find((s) => s.name === 'Physics')?.topics ?? []
    );
    // Revision topics are prefixed with "Revise: "; strip to get base topic
    const baseTopics = physicsBodies.map((t) => t.replace(/^Revise: /, ''));
    const uniqueTopics = new Set(baseTopics);
    expect(uniqueTopics.size).toBe(15);
  });

  it('revision months contain "Revise:" prefix topics', () => {
    const plan = generateStudyPlan('JEE', 12);
    const revisionMonths = plan.months.filter((m) => m.phase === 'Revision' || m.phase === 'Mock Test & Fine-tuning');
    const hasReviseTopics = revisionMonths.some((m) =>
      m.subjects.some((s) => s.topics.some((t) => t.startsWith('Revise:')))
    );
    expect(hasReviseTopics).toBe(true);
  });
});

// ── getDailySchedule ─────────────────────────────────────────────────────────

describe('getDailySchedule', () => {
  it('crash schedule has more daily hours than standard', () => {
    const crash = getDailySchedule('crash');
    const standard = getDailySchedule('standard');
    expect(crash.length).toBeGreaterThan(standard.length);
  });

  it('all schedule blocks have required fields', () => {
    for (const tier of ['crash', 'intensive', 'standard', 'extended'] as const) {
      const schedule = getDailySchedule(tier);
      for (const block of schedule) {
        expect(block).toHaveProperty('time');
        expect(block).toHaveProperty('activity');
        expect(block).toHaveProperty('duration');
        expect(block.type).toMatch(/^(study|break|test|revision|self-study)$/);
      }
    }
  });

  it('extended tier returns the same schedule as standard', () => {
    expect(getDailySchedule('extended')).toEqual(getDailySchedule('standard'));
  });
});

// ── getPhaseBreakdown ────────────────────────────────────────────────────────

describe('getPhaseBreakdown', () => {
  it('returns phases summing to 100% of total months', () => {
    const plan = generateStudyPlan('JEE', 12);
    const breakdown = getPhaseBreakdown(plan);
    const totalMonths = breakdown.reduce((sum, p) => sum + p.months, 0);
    expect(totalMonths).toBe(plan.totalMonths);
  });

  it('percentages round to roughly 100', () => {
    const plan = generateStudyPlan('JEE', 12);
    const breakdown = getPhaseBreakdown(plan);
    const totalPct = breakdown.reduce((sum, p) => sum + p.percentage, 0);
    expect(totalPct).toBeGreaterThanOrEqual(95);
    expect(totalPct).toBeLessThanOrEqual(105);
  });

  it('each phase has a name, color, and description', () => {
    const plan = generateStudyPlan('JEE', 12);
    const breakdown = getPhaseBreakdown(plan);
    for (const phase of breakdown) {
      expect(phase.name).toBeTruthy();
      expect(phase.color).toMatch(/^#/);
      expect(phase.description).toBeTruthy();
    }
  });
});

// ── getMilestones ────────────────────────────────────────────────────────────

describe('getMilestones', () => {
  it('crash plan has 2 milestones', () => {
    const plan = generateStudyPlan('JEE', 2);
    expect(getMilestones(plan)).toHaveLength(2);
  });

  it('standard plan has 4 milestones', () => {
    const plan = generateStudyPlan('JEE', 12);
    expect(getMilestones(plan)).toHaveLength(4);
  });

  it('first milestone is always month 1', () => {
    for (const months of [1, 6, 12, 24]) {
      const plan = generateStudyPlan('JEE', months);
      expect(getMilestones(plan)[0].month).toBe(1);
    }
  });

  it('last milestone is always the final month', () => {
    const plan = generateStudyPlan('JEE', 12);
    const milestones = getMilestones(plan);
    expect(milestones[milestones.length - 1].month).toBe(plan.totalMonths);
  });
});

// ── getSubjectWeightage ──────────────────────────────────────────────────────

describe('getSubjectWeightage', () => {
  it('JEE weightage has 3 subjects totalling 90 questions and 300 marks', () => {
    const { subjects, totalQuestions, totalMarks } = getSubjectWeightage('JEE');
    expect(subjects).toHaveLength(3);
    expect(totalQuestions).toBe(90);
    expect(totalMarks).toBe(300);
  });

  it('NEET weightage has 3 subjects totalling 200 questions and 800 marks', () => {
    const { subjects, totalQuestions, totalMarks } = getSubjectWeightage('NEET');
    expect(subjects).toHaveLength(3);
    expect(totalQuestions).toBe(200);
    expect(totalMarks).toBe(800);
  });

  it('JEE subject percentages sum to 100', () => {
    const { subjects } = getSubjectWeightage('JEE');
    const total = subjects.reduce((sum, s) => sum + s.percentage, 0);
    expect(total).toBe(100);
  });

  it('NEET Biology has the highest weightage (50%)', () => {
    const { subjects } = getSubjectWeightage('NEET');
    const bio = subjects.find((s) => s.subject === 'Biology');
    expect(bio?.percentage).toBe(50);
  });
});
