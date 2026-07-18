/**
 * DeferredOverlays — groups non-critical overlay components for lazy loading.
 *
 * These are UI overlays (popups, floating buttons) that are NOT needed for
 * initial page render. By bundling them in a lazy-loaded module and deferring
 * render until after the browser is idle, we reduce the initial JS parse cost.
 */
import { LanguagePopup } from './LanguagePopup';
import { WhatsAppFloat } from './WhatsAppFloat';
import { ExitIntentModal } from './ExitIntentModal';

// SocialProofPopup was removed 2026-07-15: it generated fictitious
// "X from <city> just enrolled" notifications from random name/city/course
// arrays — fabricated social proof is a trust and compliance liability.
export default function DeferredOverlays() {
  return (
    <>
      <LanguagePopup />
      <WhatsAppFloat />
      <ExitIntentModal />
    </>
  );
}
