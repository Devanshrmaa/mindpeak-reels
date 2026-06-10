"use client";

import type { CSSProperties, ReactNode } from "react";
import { S } from "./theme";

type Kind = "primary" | "gold" | "outline" | "outlineLight";

interface MpButtonProps {
  kind?: Kind;
  children: ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
}

/**
 * Pill button used across the redesigned homepage. Variants mirror the design
 * handoff: solid navy (primary), gold CTA, and two outline treatments.
 */
export function MpButton({ kind = "primary", children, onClick, style }: MpButtonProps) {
  const base: CSSProperties = {
    fontFamily: S.body,
    fontSize: 15,
    fontWeight: 600,
    padding: "14px 28px",
    borderRadius: S.btnRadius,
    cursor: "pointer",
    border: "1.5px solid transparent",
    transition: "opacity 120ms ease",
    display: "inline-block",
    whiteSpace: "nowrap",
  };
  const kinds: Record<Kind, CSSProperties> = {
    primary: { background: S.navy, color: S.cream },
    gold: { background: S.goldBtn, color: S.navyDeep, fontWeight: 700 },
    outline: { background: "transparent", color: S.navy, borderColor: S.navy },
    outlineLight: { background: "transparent", color: S.cream, borderColor: "rgba(251,247,239,0.4)" },
  };
  return (
    <button
      onClick={onClick}
      onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.88"; }}
      onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
      style={{ ...base, ...kinds[kind], ...style }}
    >
      {children}
    </button>
  );
}
