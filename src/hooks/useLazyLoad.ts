import { useEffect, useRef, useState } from 'react';

/**
 * Intersection Observer hook for lazy-loading heavy sections.
 * Returns a ref to attach to the container and a boolean for visibility.
 * Once visible, stays visible (no re-hiding).
 *
 * @param threshold - Visibility threshold (0–1). Default 0.1 (10% visible).
 * @param rootMargin - Loads content N px before entering viewport. Default '100px'.
 */
export function useLazyLoad(threshold = 0.1, rootMargin = '100px') {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isVisible] as const;
}
