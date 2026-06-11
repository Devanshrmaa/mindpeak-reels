"use client";

import { useDemoModal } from "@/components/DemoBookingModal";
import { FadeInView } from "@/components/FadeInView";

interface CtaBannerProps {
  eyebrow?: string;
  heading: string;
  /** Rendered after `heading` with the gold gradient treatment. */
  highlight?: string;
  sub: string;
  buttonLabel: string;
}

/**
 * Closing call-to-action banner — the navy gradient card with gold glow and
 * ring ornaments from the homepage contact section, packaged for inner pages.
 * Opens the demo booking modal.
 */
export function CtaBanner({ eyebrow = "Free demo · zero commitment", heading, highlight, sub, buttonLabel }: CtaBannerProps) {
  const { openDemoModal } = useDemoModal();
  const cream = "hsl(43 60% 96%)";
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-24">
      <FadeInView className="max-w-4xl mx-auto">
        <div
          className="relative overflow-hidden rounded-3xl text-center px-6 sm:px-12 py-14 sm:py-16"
          style={{
            background: "linear-gradient(150deg, hsl(224 50% 21%) 0%, hsl(222 53% 16%) 100%)",
            boxShadow: "0 34px 80px hsl(222 53% 16% / 0.32)",
          }}
        >
          {/* ambient glow + ring ornaments */}
          <div aria-hidden className="absolute pointer-events-none" style={{ top: -150, right: -120, width: 440, height: 440, borderRadius: "50%", background: "radial-gradient(circle, hsl(var(--gold-light) / 0.20) 0%, transparent 65%)" }} />
          <div aria-hidden className="absolute pointer-events-none" style={{ bottom: -180, left: -110, width: 400, height: 400, borderRadius: "50%", border: "1px solid hsl(43 60% 96% / 0.08)" }} />
          <div aria-hidden className="absolute pointer-events-none" style={{ bottom: -120, left: -50, width: 280, height: 280, borderRadius: "50%", border: "1px solid hsl(43 60% 96% / 0.06)" }} />

          <div className="eyebrow eyebrow-center relative mb-5" style={{ color: "hsl(var(--gold-light))" }}>{eyebrow}</div>
          <h2 className="relative font-display font-bold text-2xl sm:text-3xl md:text-4xl tracking-[-0.02em] mb-4" style={{ color: cream }}>
            {heading}{highlight ? <> <span className="text-gradient-gold">{highlight}</span></> : null}
          </h2>
          <p className="relative text-sm sm:text-base leading-[1.7] max-w-lg mx-auto mb-9" style={{ color: "hsl(43 60% 96% / 0.65)" }}>
            {sub}
          </p>
          <button
            onClick={openDemoModal}
            className="group relative w-full sm:w-auto btn-pill btn-pill-gold px-10 py-4 text-[13px] uppercase tracking-[0.15em]"
          >
            {buttonLabel}
            <span className="w-5 h-5 rounded-full border border-current grid place-items-center transition-transform duration-500 group-hover:rotate-45">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.2" /></svg>
            </span>
          </button>
        </div>
      </FadeInView>
    </section>
  );
}
