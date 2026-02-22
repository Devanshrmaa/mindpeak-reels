'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Navigate — client-side redirect component.
 * Drop-in replacement for react-router-dom's <Navigate>.
 * Uses Next.js router.replace() for seamless redirects.
 */
export function Navigate({ to, replace = false }: { to: string; replace?: boolean }) {
  const router = useRouter();
  useEffect(() => {
    if (replace) {
      router.replace(to);
    } else {
      router.push(to);
    }
  }, [to, replace, router]);
  return null;
}
