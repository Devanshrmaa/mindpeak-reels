/**
 * DeferredOverlays — groups non-critical overlay components for lazy loading.
 *
 * These are UI overlays (popups, floating buttons) that are NOT needed for
 * initial page render. By bundling them in a lazy-loaded module and deferring
 * render until after the browser is idle, we reduce the initial JS parse cost.
 */
import { SocialProofPopup } from './SocialProofPopup';
import { LanguagePopup } from './LanguagePopup';
import { WhatsAppFloat } from './WhatsAppFloat';
import { ExitIntentModal } from './ExitIntentModal';

export default function DeferredOverlays() {
  return (
    <>
      <SocialProofPopup />
      <LanguagePopup />
      <WhatsAppFloat />
      <ExitIntentModal />
    </>
  );
}
