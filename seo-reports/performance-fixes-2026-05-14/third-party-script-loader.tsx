/**
 * Third-Party Script Loading Patterns — 2026-05-14
 * MindPeak Institute — mindpeakinstitute.com
 *
 * STATUS: Current third-party strategy is optimal.
 * Only Google Analytics (deferred) is loaded — no blockers.
 *
 * These patterns are reference implementations for any NEW scripts
 * that may be added in future (chat widget, payment SDK, etc.).
 */

import { useEffect } from 'react';

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CURRENT SCRIPTS — All optimal
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//
// Google Analytics (G-MM0L1F7JJ6) + Google Ads (AW-17962731707):
// - Deferred to: first user interaction (pointerdown/keydown/touchstart/scroll)
//   OR 6s requestIdleCallback — whichever comes first
// - Impact on LCP: 0ms  |  TBT: 0ms  |  INP: 0ms
// - Implementation: app/layout.tsx lines 242–284
//
// All other third-party scripts: NONE
// - No chat widget (Tawk/Crisp)
// - No Facebook Pixel
// - No Razorpay on every page
// - No Hotjar / Clarity
// - No YouTube embeds
// - No Google Maps

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PATTERN A: Load on first user interaction (chat widget, support)
// Use when: the script is only useful after the user engages
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function useDeferredScript(src: string, id: string) {
  useEffect(() => {
    if (document.getElementById(id)) return;

    let loaded = false;

    function load() {
      if (loaded) return;
      loaded = true;
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.id = id;
      document.body.appendChild(script);
    }

    const events = ['pointerdown', 'keydown', 'touchstart', 'scroll'] as const;
    events.forEach(e => window.addEventListener(e, load, { passive: true, once: true }));

    const idleId =
      'requestIdleCallback' in window
        ? requestIdleCallback(load, { timeout: 6000 })
        : setTimeout(load, 6000);

    return () => {
      events.forEach(e => window.removeEventListener(e, load));
      if ('cancelIdleCallback' in window) {
        cancelIdleCallback(idleId as number);
      } else {
        clearTimeout(idleId as number);
      }
    };
  }, [src, id]);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PATTERN B: Load after 5s (non-critical widgets)
// Use when: the script is a nice-to-have (social proof popup, etc.)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function useDelayedScript(src: string, delayMs = 5000) {
  useEffect(() => {
    const timer = setTimeout(() => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    }, delayMs);
    return () => clearTimeout(timer);
  }, [src, delayMs]);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PATTERN C: Razorpay — load only on checkout pages
// Never load Razorpay globally; it adds ~40KB to every page
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function useRazorpay(onLoad?: () => void) {
  useEffect(() => {
    if ((window as Window & { Razorpay?: unknown }).Razorpay) {
      onLoad?.();
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => onLoad?.();
    document.body.appendChild(script);
  }, [onLoad]);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PATTERN D: Chat widget (Tawk.to or Crisp)
// Only load AFTER user scrolls 50% or after 10s — never on load
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function useChatWidget(tawkPropertyId: string) {
  useEffect(() => {
    let loaded = false;

    function loadTawk() {
      if (loaded) return;
      loaded = true;

      const s1 = document.createElement('script');
      s1.async = true;
      s1.src = `https://embed.tawk.to/${tawkPropertyId}/default`;
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      document.body.appendChild(s1);
    }

    // Load after user scrolls past 50%
    function onScroll() {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrolled > 0.5) {
        loadTawk();
        window.removeEventListener('scroll', onScroll);
      }
    }

    // Fallback: load after 10 seconds
    const fallback = setTimeout(loadTawk, 10000);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      clearTimeout(fallback);
      window.removeEventListener('scroll', onScroll);
    };
  }, [tawkPropertyId]);
}

export { useDeferredScript, useDelayedScript, useRazorpay, useChatWidget };
