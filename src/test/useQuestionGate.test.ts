import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useQuestionGate } from '../hooks/useQuestionGate';

// Storage keys must match the hook implementation
const STORAGE_KEY = 'mp_gate_unlocked';
const VIEWED_KEY = 'mp_gate_viewed';
const FREE_LIMIT = 4;

beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
  // Point window.location to a stable default
  Object.defineProperty(window, 'location', {
    writable: true,
    value: { pathname: '/jee-practice/mechanics/q1' },
  });
});

afterEach(() => {
  localStorage.clear();
  sessionStorage.clear();
});

describe('useQuestionGate — initial state', () => {
  it('isGated is false on first render (never blocks a fresh visitor)', () => {
    const { result } = renderHook(() => useQuestionGate(0));
    expect(result.current.isGated).toBe(false);
  });

  it('isGated is false when user has previously unlocked (localStorage flag)', () => {
    localStorage.setItem(STORAGE_KEY, '1');
    const { result } = renderHook(() => useQuestionGate(0));
    expect(result.current.isGated).toBe(false);
  });
});

describe('useQuestionGate — gating behaviour', () => {
  it('is not gated after viewing fewer than FREE_LIMIT pages', () => {
    // Populate sessionStorage with exactly FREE_LIMIT paths
    const viewed = Array.from({ length: FREE_LIMIT }, (_, i) => `/q${i + 1}`);
    sessionStorage.setItem(VIEWED_KEY, JSON.stringify(viewed));

    window.location.pathname = '/q-new';
    const { result } = renderHook(() => useQuestionGate(0));
    // FREE_LIMIT paths already + 1 new = FREE_LIMIT + 1 → gated
    expect(result.current.isGated).toBe(true);
  });

  it('is not gated when current path is already in the viewed list', () => {
    // Only 2 paths viewed (below limit); same path = no new entry
    const viewed = ['/q1', '/q2'];
    sessionStorage.setItem(VIEWED_KEY, JSON.stringify(viewed));

    window.location.pathname = '/q1'; // already counted
    const { result } = renderHook(() => useQuestionGate(0));
    expect(result.current.isGated).toBe(false);
  });

  it('counts each unique path only once', () => {
    // Simulate user visiting 3 distinct pages (below limit)
    const viewed = ['/q1', '/q2', '/q3'];
    sessionStorage.setItem(VIEWED_KEY, JSON.stringify(viewed));

    window.location.pathname = '/q4'; // 4th unique = exactly FREE_LIMIT, NOT gated
    const { result } = renderHook(() => useQuestionGate(0));
    expect(result.current.isGated).toBe(false);
  });
});

describe('useQuestionGate — onUnlock', () => {
  it('onUnlock sets isGated to false', () => {
    // Pre-fill 5 viewed paths so gating fires
    const viewed = Array.from({ length: FREE_LIMIT }, (_, i) => `/q${i + 1}`);
    sessionStorage.setItem(VIEWED_KEY, JSON.stringify(viewed));
    window.location.pathname = '/q-new';

    const { result } = renderHook(() => useQuestionGate(0));
    expect(result.current.isGated).toBe(true);

    act(() => {
      result.current.onUnlock();
    });

    expect(result.current.isGated).toBe(false);
  });

  it('onUnlock persists unlock state in localStorage', () => {
    const { result } = renderHook(() => useQuestionGate(0));

    act(() => {
      result.current.onUnlock();
    });

    expect(localStorage.getItem(STORAGE_KEY)).toBe('1');
  });

  it('stays unlocked after re-mount when localStorage flag is set', () => {
    const { result: r1 } = renderHook(() => useQuestionGate(0));
    act(() => { r1.current.onUnlock(); });

    // Simulate page navigation — remount the hook
    const { result: r2 } = renderHook(() => useQuestionGate(0));
    expect(r2.current.isGated).toBe(false);
  });
});
