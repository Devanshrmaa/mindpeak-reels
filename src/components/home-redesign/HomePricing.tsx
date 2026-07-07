"use client";

import type { CSSProperties } from "react";
import { Check } from "lucide-react";
import { tiers } from "@/data/pricingData";
import { S } from "./theme";
import { MpButton, MpEyebrow } from "./MpButton";

const dd = (i: number, base = 0.09) => ({ "--d": `${i * base}s` } as CSSProperties);

export function MpPricing({ onCta }: { onCta: () => void }) {
  return (
    <section id="pricing" className="mp-x" style={{ padding: "0 48px 96px" }}>
      <div data-reveal style={{ maxWidth: 720, marginBottom: 44 }}>
        <MpEyebrow>Plans</MpEyebrow>
        <h2 style={{ fontFamily: S.disp, fontSize: "clamp(30px, 3.6vw, 44px)", fontWeight: S.dispWeight, letterSpacing: "-0.02em", margin: "0 0 16px", color: S.navy, lineHeight: 1.08 }}>
          What it costs to have a personal mentor
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.65, color: S.inkSoft, maxWidth: 560, margin: 0 }}>
          One flat fee, no batch dependency, no hidden add-ons. Every plan includes daily
          1-on-1 live classes and a dedicated mentor from day one.
        </p>
      </div>

      <div className="mp-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18, alignItems: "stretch" }}>
        {tiers.map((tier, i) => {
          const highlighted = Boolean(tier.highlight);
          return (
            <div
              key={tier.name}
              data-reveal
              data-tilt="3"
              className={`mp-tilt mp-spot${highlighted ? " mp-spot-dark" : ""}${highlighted ? "" : " mp-glass-card"}`}
              style={{
                ...dd(i),
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                borderRadius: 22,
                padding: "32px 28px 28px",
                background: highlighted ? S.gradNavy : undefined,
                border: highlighted ? "1px solid rgba(212,168,75,0.45)" : undefined,
                color: highlighted ? S.cream : undefined,
                boxShadow: highlighted ? "0 26px 60px rgba(26,54,93,0.26)" : undefined,
              }}
            >
              {highlighted && (
                <div aria-hidden style={{ position: "absolute", top: -110, right: -90, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,168,75,0.22) 0%, rgba(212,168,75,0) 65%)", pointerEvents: "none" }} />
              )}
              <div style={{ position: "relative" }}>
                {tier.badge && (
                  <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: S.navyDeep, background: S.gradGold, borderRadius: 999, padding: "5px 12px", marginBottom: 14 }}>{tier.badge}</span>
                )}
                <h3 style={{ fontFamily: S.disp, fontSize: 23, fontWeight: 600, margin: "0 0 6px", color: highlighted ? S.cream : S.navy }}>{tier.name}</h3>
                <div style={{ fontSize: 13.5, color: highlighted ? S.creamSoft : S.inkSoft, marginBottom: 18 }}>{tier.target}</div>

                <div style={{ display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap", marginBottom: 4 }}>
                  <span style={{ fontFamily: S.disp, fontSize: 30, fontWeight: 700, color: highlighted ? S.goldBtn : S.gold }}>{tier.price}</span>
                  {tier.originalPrice && (
                    <span style={{ fontSize: 14, color: highlighted ? "rgba(251,247,239,0.5)" : S.inkSoft, textDecoration: "line-through" }}>{tier.originalPrice}</span>
                  )}
                </div>
                <div style={{ fontSize: 13, color: highlighted ? S.creamSoft : S.inkSoft, marginBottom: tier.discountTag ? 8 : 22 }}>{tier.period}</div>
                {tier.discountTag && (
                  <div style={{ display: "inline-block", fontSize: 11.5, fontWeight: 700, color: S.goldInk, background: highlighted ? "rgba(212,168,75,0.18)" : S.goldSoft, borderRadius: 999, padding: "3px 10px", marginBottom: 22 }}>{tier.discountTag}</div>
                )}

                <ul style={{ listStyle: "none", margin: "0 0 26px", padding: 0, flexGrow: 1 }}>
                  {tier.features.slice(0, 6).map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 9, padding: "6px 0", fontSize: 14, lineHeight: 1.5, color: highlighted ? "rgba(251,247,239,0.92)" : S.inkSoft }}>
                      <Check style={{ width: 15, height: 15, flexShrink: 0, marginTop: 3, color: highlighted ? S.goldBtn : S.gold }} strokeWidth={2.4} />
                      {f}
                    </li>
                  ))}
                </ul>

                <MpButton kind={highlighted ? "gold" : "outline"} onClick={onCta} style={{ width: "100%", padding: "13px 20px" }}>
                  Book a free demo
                </MpButton>
              </div>
            </div>
          );
        })}
      </div>

      <div data-reveal style={{ marginTop: 32, textAlign: "center" }}>
        <a href="/pricing" className="mp-arrow-link" style={{ fontWeight: 600, color: S.navy, textDecoration: "none", fontSize: 15 }}>
          See full plan comparison &amp; crash courses <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}
