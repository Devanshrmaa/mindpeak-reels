import { describe, it, expect } from 'vitest';
import { slugifyQuestion, deduplicateSlugs } from '../lib/slugify';

describe('slugifyQuestion', () => {
  it('converts a plain English question to a slug', () => {
    // 'is', 'of' are stop words; 'calculate', 'newton', 'second', 'law', 'motion' are kept
    expect(slugifyQuestion('Calculate Newton second law of motion')).toBe(
      'calculate-newton-second-law-motion'
    );
  });

  it('strips HTML tags', () => {
    expect(slugifyQuestion('<p>velocity</p>')).toBe('velocity');
    expect(slugifyQuestion('<b>kinetic</b> <i>energy</i>')).toBe('kinetic-energy');
  });

  it('decodes common HTML entities', () => {
    expect(slugifyQuestion('Force &amp; acceleration')).toBe('force-acceleration');
    expect(slugifyQuestion('x&nbsp;equals&nbsp;y')).toBe('x-equals-y');
  });

  it('replaces Greek letters with their names', () => {
    expect(slugifyQuestion('Find value π')).toBe('find-value-pi');
    expect(slugifyQuestion('θ angle')).toBe('theta-angle');
    expect(slugifyQuestion('μ coefficient')).toBe('mu-coefficient');
    expect(slugifyQuestion('λ wavelength')).toBe('lambda-wavelength');
    expect(slugifyQuestion('ω angular speed')).toBe('omega-angular-speed');
    expect(slugifyQuestion('α particle')).toBe('alpha-particle');
    expect(slugifyQuestion('β decay')).toBe('beta-decay');
  });

  it('replaces math operators with words', () => {
    // '×' → 'x' (literal letter, not stop word)
    expect(slugifyQuestion('a × b')).toContain('x');
    // '÷' → 'div'
    expect(slugifyQuestion('dividend ÷ divisor')).toContain('div');
    expect(slugifyQuestion('a ≥ b')).toContain('gte');
    expect(slugifyQuestion('a ≤ b')).toContain('lte');
    expect(slugifyQuestion('a ≈ b')).toContain('approx');
    expect(slugifyQuestion('a ≠ b')).toContain('not-equal');
  });

  it('converts subscript and superscript digits', () => {
    expect(slugifyQuestion('H₂O molecule')).toBe('h2o-molecule');
    expect(slugifyQuestion('x² value')).toBe('x2-value');
    expect(slugifyQuestion('x³ cube')).toBe('x3-cube');
    expect(slugifyQuestion('CO₂ gas')).toBe('co2-gas');
  });

  it('handles special symbols: sqrt, infinity, integral', () => {
    expect(slugifyQuestion('√x derivative')).toBe('sqrtx-derivative');
    expect(slugifyQuestion('∞ limit')).toBe('infinity-limit');
    expect(slugifyQuestion('∫ f dx')).toBe('integral-f-dx');
  });

  it('removes stop words', () => {
    // 'the', 'of' are stop words; 'speed', 'car' are kept
    expect(slugifyQuestion('speed of the car')).toBe('speed-car');
    expect(slugifyQuestion('find value x')).toBe('find-value-x');
  });

  it('lowercases all output', () => {
    expect(slugifyQuestion('KINETIC ENERGY Formula')).toBe('kinetic-energy-formula');
  });

  it('truncates slug at ~60 chars at a word boundary', () => {
    const longQuestion =
      'Calculate total kinetic energy released when particle collides with another particle at high velocity conditions';
    const result = slugifyQuestion(longQuestion);
    expect(result.length).toBeLessThanOrEqual(60);
  });

  it('does not produce leading or trailing hyphens', () => {
    const result = slugifyQuestion('  velocity measurement  ');
    expect(result).not.toMatch(/^-|-$/);
  });

  it('collapses multiple hyphens into one', () => {
    // Middle dot '·' is replaced with '-'; consecutive ones collapse
    const result = slugifyQuestion('a · · b');
    expect(result).not.toContain('--');
  });

  it('returns "question" when input reduces to empty string', () => {
    expect(slugifyQuestion('')).toBe('question');
    expect(slugifyQuestion('<p></p>')).toBe('question');
  });

  it('handles degree symbol', () => {
    expect(slugifyQuestion('angle 45° measurement')).toBe('angle-45deg-measurement');
  });

  // NOTE: '→' maps to the word 'to', which is itself a stop word and gets stripped.
  // This means arrows currently disappear from slugs — a known limitation.
  it('arrow symbol maps to "to" which is then removed as a stop word', () => {
    expect(slugifyQuestion('reactant → product')).toBe('reactant-product');
  });

  it('handles ± symbol', () => {
    expect(slugifyQuestion('x ± 5')).toBe('x-plus-minus-5');
  });
});

describe('deduplicateSlugs', () => {
  it('returns unique slugs unchanged', () => {
    expect(deduplicateSlugs(['alpha', 'beta', 'gamma'])).toEqual([
      'alpha',
      'beta',
      'gamma',
    ]);
  });

  it('appends -2 to the second occurrence of a duplicate', () => {
    expect(deduplicateSlugs(['foo', 'foo'])).toEqual(['foo', 'foo-2']);
  });

  it('appends -2, -3 etc. for three or more duplicates', () => {
    expect(deduplicateSlugs(['foo', 'foo', 'foo'])).toEqual([
      'foo',
      'foo-2',
      'foo-3',
    ]);
  });

  it('handles duplicates that are non-adjacent', () => {
    expect(deduplicateSlugs(['a', 'b', 'a', 'c', 'a'])).toEqual([
      'a',
      'b',
      'a-2',
      'c',
      'a-3',
    ]);
  });

  it('handles an empty array', () => {
    expect(deduplicateSlugs([])).toEqual([]);
  });

  it('handles a single-element array', () => {
    expect(deduplicateSlugs(['only'])).toEqual(['only']);
  });

  it('treats different slugs as independent counters', () => {
    expect(deduplicateSlugs(['a', 'b', 'a', 'b', 'b'])).toEqual([
      'a',
      'b',
      'a-2',
      'b-2',
      'b-3',
    ]);
  });
});
