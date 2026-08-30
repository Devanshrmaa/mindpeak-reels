import { describe, it, expect } from 'vitest';
import { splitHeadlineOnCity, renderedHeadline } from '@/lib/heroHeadline';

describe('splitHeadlineOnCity', () => {
  /**
   * Regression: the previous implementation stripped the city out of the
   * sentence, appended it, then re-appended a hardcoded tail, so every city
   * page using the fallback headline rendered a mangled, duplicated H1 —
   * "Crack JEE from  — 1-on-1 mentors, a plan built around you.Coimbatore
   * — 1-on-1 mentors, a plan built around you." (live on production until
   * 2026-08-29).
   */
  it('keeps the sentence intact, with the city in place', () => {
    const h = 'Crack JEE from Coimbatore — 1-on-1 mentors, a plan built around you.';
    expect(renderedHeadline(h, 'Coimbatore')).toBe(h);
    const p = splitHeadlineOnCity(h, 'Coimbatore');
    expect(p.before).toBe('Crack JEE from ');
    expect(p.city).toBe('Coimbatore');
    expect(p.after).toBe(' — 1-on-1 mentors, a plan built around you.');
  });

  it('never duplicates the tail', () => {
    const h = 'Crack NEET from Mumbai — 1-on-1 mentors, a plan built around you.';
    const out = renderedHeadline(h, 'Mumbai');
    expect(out).toBe(h);
    expect(out.match(/1-on-1 mentors/g)).toHaveLength(1);
    expect(out).not.toContain('from  —');
  });

  it('handles a city appearing mid-sentence', () => {
    const h = 'Bangalore students clear JEE with a mentor, not a batch.';
    expect(renderedHeadline(h, 'Bangalore')).toBe(h);
    expect(splitHeadlineOnCity(h, 'Bangalore').before).toBe('');
  });

  it('degrades cleanly when the headline does not mention the city', () => {
    const h = 'A plan built around you, not a batch calendar.';
    expect(renderedHeadline(h, 'Kochi')).toBe(h);
    const p = splitHeadlineOnCity(h, 'Kochi');
    expect(p.city).toBe('');
    expect(p.before).toBe(h);
    expect(p.after).toBe('');
  });

  it('is safe with an empty city', () => {
    const h = 'Crack JEE — 1-on-1 mentors.';
    expect(renderedHeadline(h, '')).toBe(h);
  });
});
