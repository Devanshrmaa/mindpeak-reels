'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Scroll to top on every route change + clear chunk-reload flag on success.
 * Replaces the React Router ScrollToTop component.
 */
export function ScrollToTop() {
  const pathname = usePathname();
  useEffect(() => {
    window.scrollTo(0, 0);
    // If we reach here, the page loaded successfully — reset the chunk-reload guard
    try { sessionStorage.removeItem('mp_chunk_reload'); } catch {}
  }, [pathname]);
  return null;
}
