import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { renderToStaticMarkup } from 'react-dom/server';
import { PageFooter } from '@/components/PageFooter';
import { stateHubs } from '@/data/stateHubData';

/**
 * The site-wide footer is both the legal-page entry point and a deliberate
 * crawl path (state hubs, NEET PYQ unit hubs) for Spam Update recovery.
 * A redesign must not silently drop either.
 */

const hrefs = new Set(
  [...renderToStaticMarkup(<PageFooter />).matchAll(/href="([^"]+)"/g)].map((m) => m[1]),
);

describe('PageFooter', () => {
  it.each(['/privacy-policy', '/terms-and-conditions', '/refund-policy'])('links the legal page %s', (path) => {
    expect(hrefs.has(path)).toBe(true);
  });

  it('links every JEE and NEET state hub', () => {
    const missing = stateHubs
      .flatMap((h) => [`/jee-coaching-in-${h.slug}`, `/neet-coaching-in-${h.slug}`])
      .filter((p) => !hrefs.has(p));
    expect(missing).toEqual([]);
  });

  it('links the NEET PYQ unit hubs', () => {
    const units = [...hrefs].filter((h) => h.startsWith('/neet-pyq-') && h.includes('-unit-'));
    expect(units.length).toBeGreaterThanOrEqual(5);
  });

  it('renders the extra copyright text', () => {
    expect(renderToStaticMarkup(<PageFooter extra="NEET PYQ — Question 3." />)).toContain('NEET PYQ — Question 3.');
  });
});

describe('/privacy-policy', () => {
  it('is a real page, not redirected to the terms page', () => {
    const config = readFileSync(resolve(__dirname, '../../next.config.ts'), 'utf8');
    expect(config).not.toMatch(/source:\s*['"]\/privacy-policy['"]/);
  });
});
