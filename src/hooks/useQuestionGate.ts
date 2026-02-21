import { useState, useCallback } from 'react';

const STORAGE_KEY = 'mp_gate_unlocked';
const FREE_LIMIT = 5;

/**
 * Hook that gates question access after the first FREE_LIMIT questions.
 *
 * @param questionIndex - 1-based index of the current question
 * @returns { isGated, onUnlock }
 *   - isGated: true when questionIndex > FREE_LIMIT and user hasn't submitted the form yet
 *   - onUnlock: callback to call after the form is successfully submitted
 */
export function useQuestionGate(questionIndex: number) {
  const isAlreadyUnlocked = (() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === '1';
    } catch {
      return false;
    }
  })();

  const [unlocked, setUnlocked] = useState(isAlreadyUnlocked);

  const needsGate = questionIndex > FREE_LIMIT && !unlocked;

  const onUnlock = useCallback(() => {
    setUnlocked(true);
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // localStorage unavailable
    }
  }, []);

  return { isGated: needsGate, onUnlock };
}
