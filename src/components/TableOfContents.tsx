"use client";

import { useState } from 'react';
import { ChevronDown, List } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface TocItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TocItem[];
  title?: string;
}

/**
 * Collapsible Table of Contents with anchor jump links.
 * Renders as a sticky-friendly nav element for long-form SEO pages.
 * Google can extract these as "jump to" sitelinks in SERPs.
 */
export const TableOfContents = ({ items, title = 'Table of Contents' }: TableOfContentsProps) => {
  const [open, setOpen] = useState(false);

  if (items.length < 3) return null;

  return (
    <nav
      aria-label="Table of Contents"
      className="rounded-xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden mb-10"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 hover:bg-secondary/20 transition-colors"
        aria-expanded={open}
      >
        <div className="flex items-center gap-3">
          <List className="w-5 h-5 text-primary" />
          <span className="font-display font-semibold text-foreground text-sm">{title}</span>
          <span className="text-xs text-muted-foreground">({items.length} sections)</span>
        </div>
        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <ol className="px-5 pb-4 space-y-1 list-decimal list-inside">
              {items.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors leading-relaxed"
                    onClick={() => {
                      const el = document.getElementById(item.id);
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

/**
 * Helper: converts a heading string into a URL-safe anchor ID.
 */
export function toAnchorId(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 60);
}
