import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { join } from 'path';
import ts from 'typescript';
import { getChapterEnrichment } from '@/data/chapters/chapterEnrichments';

/**
 * Structural integrity guard for src/data/chapters/chapterEnrichments.ts.
 *
 * WHY THIS EXISTS
 * ───────────────
 * `chapterEnrichments.ts` is one giant `ENRICHMENTS` object literal that many
 * parallel "daily-content" branches append to. Git's line-based auto-merge has
 * repeatedly collapsed the near-identical `},` / `],` / `},` closing seams
 * between adjacent chapters, producing an unterminated array/object (and
 * sometimes duplicate slug keys). Because `next.config` sets
 * `typescript.ignoreBuildErrors: true`, a *type* error is tolerated — but this
 * is a *parse* error, so it slips into `main` and only blows up at Vercel build
 * time (production deploy down).
 *
 * This happened at least three times (PRs #153/#155/#159 era). These assertions
 * turn that silent, merge-time, EOF-only failure into a loud, local + CI test
 * failure on the exact file, before anything reaches `main`.
 */

const FILE = join(process.cwd(), 'src/data/chapters/chapterEnrichments.ts');

function parseSource(): ts.SourceFile {
  const src = readFileSync(FILE, 'utf-8');
  return ts.createSourceFile(FILE, src, ts.ScriptTarget.Latest, /* setParentNodes */ true);
}

/** Collect the top-level keys of the `ENRICHMENTS` object literal, in order. */
function enrichmentKeys(sf: ts.SourceFile): string[] {
  const keys: string[] = [];
  const visit = (node: ts.Node) => {
    if (
      ts.isVariableDeclaration(node) &&
      ts.isIdentifier(node.name) &&
      node.name.text === 'ENRICHMENTS' &&
      node.initializer &&
      ts.isObjectLiteralExpression(node.initializer)
    ) {
      for (const prop of node.initializer.properties) {
        if (ts.isPropertyAssignment(prop)) {
          if (ts.isStringLiteral(prop.name) || ts.isIdentifier(prop.name)) {
            keys.push(prop.name.text);
          }
        }
      }
    }
    ts.forEachChild(node, visit);
  };
  visit(sf);
  return keys;
}

describe('chapterEnrichments integrity', () => {
  it('parses with zero syntax errors (guards against merge-collapsed braces)', () => {
    const sf = parseSource();
    // `parseDiagnostics` is internal but stable; it is what surfaces the
    // unterminated-object/array errors a bad merge produces.
    const diags: ts.Diagnostic[] = (sf as unknown as { parseDiagnostics?: ts.Diagnostic[] }).parseDiagnostics ?? [];
    const messages = diags.map((d) => {
      const pos = typeof d.start === 'number' ? sf.getLineAndCharacterOfPosition(d.start) : { line: -1, character: 0 };
      return `line ${pos.line + 1}: ${ts.flattenDiagnosticMessageText(d.messageText, '\n')}`;
    });
    expect(messages, `Syntax errors in chapterEnrichments.ts:\n${messages.join('\n')}`).toHaveLength(0);
  });

  it('has no duplicate chapter slug keys (guards against merge-orphaned entries)', () => {
    const keys = enrichmentKeys(parseSource());
    const seen = new Set<string>();
    const dups: string[] = [];
    for (const k of keys) {
      if (seen.has(k)) dups.push(k);
      seen.add(k);
    }
    expect(keys.length, 'No ENRICHMENTS entries were found — parsing likely broke').toBeGreaterThan(0);
    expect(dups, `Duplicate chapter slug keys: ${dups.join(', ')}`).toHaveLength(0);
  });

  it('every entry is well-formed and resolvable at runtime', () => {
    const keys = enrichmentKeys(parseSource());
    const malformed: string[] = [];
    for (const slug of keys) {
      const e = getChapterEnrichment(slug);
      if (
        !e ||
        typeof e.overview !== 'string' ||
        !Array.isArray(e.examSplit) ||
        !Array.isArray(e.studyOrder) ||
        !Array.isArray(e.highYield) ||
        !Array.isArray(e.faqs)
      ) {
        malformed.push(slug);
      }
    }
    expect(malformed, `Malformed / unresolvable enrichment entries: ${malformed.join(', ')}`).toHaveLength(0);
  });
});
