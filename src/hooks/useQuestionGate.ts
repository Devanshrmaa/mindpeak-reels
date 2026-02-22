import { useState, useCallback, useEffect } from 'react';

const STORAGE_KEY = 'mp_gate_unlocked';
const VIEWED_KEY = 'mp_gate_viewed';
const FREE_LIMIT = 4;

/**
 * Hook that gates question access after the user has actually *viewed*
 * FREE_LIMIT distinct questions in the current browsing session.
 *
 * How it works:
 *  - We store an array of visited URL paths in sessionStorage.
 *  - Each unique path is only counted once (deduplication).
 *  - `isGated` starts as `false` on every mount, so the very first
 *    render **never** shows the popup. This is critical for users
 *    landing directly from Google.
 *  - After the component mounts, we record the visit and check if
 *    the user has exceeded their free quota. If so, `isGated`
 *    transitions to `true` and the popup appears.
 *
 * This means:
 *  - A brand-new visitor from Google always sees the question first.
 *  - After browsing 4 distinct questions, the 5th is gated.
 */
export function useQuestionGate(_questionIndex: number) {
  const isAlreadyUnlocked = (() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === '1';
    } catch {
      return false;
    }
  })();

  const [unlocked, setUnlocked] = useState(isAlreadyUnlocked);

  // Gate always starts false — never block the very first render
  const [isGated, setIsGated] = useState(false);

  // Current page path — unique identifier for this question
  const pagePath = typeof window !== 'undefined' ? window.location.pathname : '';

  useEffect(() => {
    if (unlocked) return;

    try {
      const raw = sessionStorage.getItem(VIEWED_KEY);
      const viewed: string[] = raw ? JSON.parse(raw) : [];

      // Add current path if not already tracked
      if (!viewed.includes(pagePath)) {
        viewed.push(pagePath);
        sessionStorage.setItem(VIEWED_KEY, JSON.stringify(viewed));
      }

      // Gate activates when user has viewed more than FREE_LIMIT pages
      if (viewed.length > FREE_LIMIT) {
        setIsGated(true);
      }
    } catch {
      // sessionStorage unavailable — never gate
    }
  }, [pagePath, unlocked]);

  const onUnlock = useCallback(() => {
    setUnlocked(true);
    setIsGated(false);
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // localStorage unavailable
    }
  }, []);

  return { isGated, onUnlock };
}
