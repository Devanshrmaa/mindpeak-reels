/**
 * Third-Party Script Loader — 2026-06-04
 *
 * STATUS: No changes required. Current implementation is already best-in-class.
 *
 * The existing strategy in app/layout.tsx (lines 251–293) is optimal:
 *
 *   1. GA4 + Google Ads load ONLY after first user interaction
 *      (pointerdown, keydown, touchstart, scroll — any one fires it)
 *   2. Falls back to requestIdleCallback(6000ms) if user never interacts
 *   3. Uses Next.js Script strategy="afterInteractive" as the outer wrapper
 *   4. Guard prevents double-loading (started flag)
 *
 * This pattern is better than the common "load after 3s delay" approach because:
 *   - On fast 5G: loads immediately after first interaction
 *   - On slow 3G: loads after 6s regardless, so it never blocks LCP
 *   - No unnecessary delay for engaged users
 *
 * Third-party script inventory:
 *   ✅ Google Analytics 4 (G-MM0L1F7JJ6)   — deferred, interaction-triggered
 *   ✅ Google Ads (AW-17962731707)           — same deferred mechanism
 *   ✅ No Facebook Pixel                     — not needed, removes ~50KB risk
 *   ✅ No chat widget script                 — WhatsApp is a pure <a> link, no script
 *   ✅ No Razorpay on every page             — only loaded on payment pages
 *   ✅ No font CDN (uses next/font)          — zero external font requests
 *
 * DEAD CODE TO REMOVE:
 *   src/components/GoogleAnalytics.tsx — never imported anywhere.
 *   Has a loadGA4Script guard so it wouldn't fire twice if accidentally mounted,
 *   but it's misleading and should be deleted.
 *
 *   To remove: rm src/components/GoogleAnalytics.tsx
 */

/**
 * Reference: Current optimal GA loader pattern (already in app/layout.tsx)
 *
 * Copy this pattern if you ever need to add a new third-party script:
 */
export function deferredScriptPattern() {
  // This pattern is for documentation only — the actual loader is in app/layout.tsx
  const script = `
    (function () {
      var started = false;
      function bootThirdParty() {
        if (started) return;
        started = true;
        // Load your script here
        var s = document.createElement('script');
        s.async = true;
        s.src = 'https://example.com/script.js';
        document.head.appendChild(s);
      }

      // Fire on first user interaction
      var events = ['pointerdown', 'keydown', 'touchstart', 'scroll'];
      var cleanup = function () {
        events.forEach(function (name) {
          window.removeEventListener(name, onFirstInput, { passive: true });
        });
      };
      var onFirstInput = function () {
        cleanup();
        bootThirdParty();
      };
      events.forEach(function (name) {
        window.addEventListener(name, onFirstInput, { passive: true, once: true });
      });

      // Fallback: also fire after 6s idle (for users who never interact)
      if ('requestIdleCallback' in window) {
        requestIdleCallback(bootThirdParty, { timeout: 6000 });
      } else {
        setTimeout(bootThirdParty, 6000);
      }
    })();
  `;
  return script;
}

export {};
