import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const GENERIC_LINK_RE = />\s*(learn more|read more|click here|more)\s*</i;

function collectTsxFiles(dir: string): string[] {
  const results: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      results.push(...collectTsxFiles(full));
    } else if (full.endsWith('.tsx')) {
      results.push(full);
    }
  }
  return results;
}

describe('Descriptive link text audit', () => {
  const dirs = ['src/components', 'src/views'];

  for (const dir of dirs) {
    const files = collectTsxFiles(dir);
    for (const file of files) {
      it(`${file} should not contain generic link text`, () => {
        const content = readFileSync(file, 'utf-8');
        const lines = content.split('\n');
        const violations: string[] = [];

        lines.forEach((line, idx) => {
          // Only flag anchor/Link/button elements with generic text
          if (
            (line.includes('<a ') || line.includes('<Link') || line.includes('<button')) &&
            GENERIC_LINK_RE.test(line)
          ) {
            violations.push(`Line ${idx + 1}: ${line.trim()}`);
          }
          // Check for generic text as child content (multiline)
          if (GENERIC_LINK_RE.test(line) && !line.includes('//') && !line.includes('*')) {
            // Check surrounding context for anchor
            const context = lines.slice(Math.max(0, idx - 3), idx + 1).join('\n');
            if (/<(a |Link |button )/.test(context)) {
              violations.push(`Line ${idx + 1}: ${line.trim()}`);
            }
          }
        });

        expect(violations, `Generic link text found:\n${violations.join('\n')}`).toHaveLength(0);
      });
    }
  }
});
