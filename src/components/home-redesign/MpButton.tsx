"use client";

import type { CSSProperties, ReactNode } from "react";
import { S } from "./theme";

type Kind = "primary" | "gold" | "outline" | "outlineLight";

interface MpButtonProps {
  kind?: Kind;
  children: ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
  className?: string;
}

/**
 * Pill button used across the redesigned homepage. Variants mirror the design
 * handoff: solid navy (primary), gold CTA, and two outline treatments.
 * Hover lift / shadow / focus-visible behaviour lives in the scoped CSS block
 * in `src/views/HomeRedesign.tsx` (`.mp-btn*` rules) so it can use transitions
 * and pseudo-classes that inline styles cannot express.
 */
export function MpButton({ kind = "primary", children, onClick, style, className }: MpButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`mp-btn mp-btn-${kind}${className ? ` ${className}` : ""}`}
      style={style}
    >
      {children}
    </button>
  );
}

/**
 * Small uppercase section label with a gold rule — the editorial "eyebrow"
 * that opens each major section of the redesigned homepage.
 */
export function MpEyebrow({ children, light = false, style }: { children: ReactNode; light?: boolean; style?: CSSProperties }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: light ? S.goldBtn : S.gold,
        marginBottom: 18,
        ...style,
      }}
    >
      <span aria-hidden style={{ width: 28, height: 2, background: light ? S.goldBtn : S.gold, borderRadius: 2 }} />
      {children}
    </div>
  );
}
