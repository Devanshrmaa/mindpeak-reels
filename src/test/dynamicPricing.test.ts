import { describe, it, expect, vi, afterEach } from 'vitest';
import {
  getCurrentOffer,
  getDiscountedPrice,
  getSavingsAmount,
  formatINR,
} from '../lib/dynamicPricing';

afterEach(() => {
  vi.useRealTimers();
});

describe('getCurrentOffer', () => {
  it('returns a valid offer object with required fields', () => {
    const offer = getCurrentOffer();
    expect(offer).toHaveProperty('id');
    expect(offer).toHaveProperty('month');
    expect(offer).toHaveProperty('discount');
    expect(offer).toHaveProperty('title');
    expect(offer).toHaveProperty('description');
    expect(offer).toHaveProperty('urgency');
  });

  it('returns an offer whose month matches the current month', () => {
    const offer = getCurrentOffer();
    expect(offer.month).toBe(new Date().getMonth());
  });

  it('returns a January offer in January', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-01-15'));
    const offer = getCurrentOffer();
    expect(offer.id).toBe('jan-new-year');
    expect(offer.discount).toBe(20);
  });

  it('returns an October offer in October', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-10-01'));
    const offer = getCurrentOffer();
    expect(offer.id).toBe('oct-diwali');
    expect(offer.discount).toBe(25);
  });

  it('returns a March offer in March (highest discount at 25%)', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-03-10'));
    const offer = getCurrentOffer();
    expect(offer.id).toBe('mar-early-bird');
    expect(offer.discount).toBe(25);
  });

  it('discount value is between 1 and 100 for every month', () => {
    for (let month = 0; month < 12; month++) {
      vi.useFakeTimers();
      vi.setSystemTime(new Date(2026, month, 1));
      const offer = getCurrentOffer();
      expect(offer.discount).toBeGreaterThanOrEqual(1);
      expect(offer.discount).toBeLessThanOrEqual(100);
    }
  });
});

describe('getDiscountedPrice', () => {
  it('always returns the fixed floor price of ₹1,30,000', () => {
    expect(getDiscountedPrice(200000)).toBe(130000);
    expect(getDiscountedPrice(150000)).toBe(130000);
    expect(getDiscountedPrice(130000)).toBe(130000);
    expect(getDiscountedPrice(99999)).toBe(130000);
  });
});

describe('getSavingsAmount', () => {
  it('returns the difference between base and discounted price', () => {
    expect(getSavingsAmount(200000)).toBe(70000);
    expect(getSavingsAmount(160000)).toBe(30000);
  });

  it('returns 0 when base equals the floor price', () => {
    expect(getSavingsAmount(130000)).toBe(0);
  });

  it('returns a negative number when base is below the floor price', () => {
    // Negative savings = user would actually pay more than base; documents the edge case
    expect(getSavingsAmount(100000)).toBe(-30000);
  });
});

describe('formatINR', () => {
  it('formats a standard Indian lakh amount', () => {
    expect(formatINR(130000)).toBe('₹1,30,000');
  });

  it('formats zero', () => {
    expect(formatINR(0)).toBe('₹0');
  });

  it('starts with the rupee symbol', () => {
    expect(formatINR(50000)).toMatch(/^₹/);
  });

  it('formats a crore-range number with Indian grouping', () => {
    // 10,00,000 in en-IN locale
    expect(formatINR(1000000)).toBe('₹10,00,000');
  });
});
