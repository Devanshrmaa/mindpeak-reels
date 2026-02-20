/**
 * Shuffles practice question options so the correct answer isn't always A.
 * Run: node scripts/shuffle-answers.mjs
 */
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const PRACTICE_DIR = join(process.cwd(), 'src/data/practice');

// Fisher-Yates shuffle returning the permutation mapping
function shuffledIndices() {
  const arr = [0, 1, 2, 3];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Match question objects: { q: '...', o: ['...','...','...','...'], a: N, s: '...' }
// We process line-by-line to handle the compact single-line format used in the data files
function processFile(filePath) {
  const content = readFileSync(filePath, 'utf-8');
  let modified = false;
  let changeCount = 0;

  // Match patterns like: o: ['opt1', 'opt2', 'opt3', 'opt4'], a: 0,
  // The options can contain escaped quotes, special chars, etc.
  const result = content.replace(
    /o: \[([^\]]+)\], a: (\d)/g,
    (match, optionsStr, answerStr) => {
      const answerIdx = parseInt(answerStr);
      
      // Parse the 4 options - they're single-quoted strings separated by commas
      // We need to handle escaped quotes inside options
      const options = [];
      let current = '';
      let inQuote = false;
      let escaped = false;
      
      for (const ch of optionsStr) {
        if (escaped) {
          current += ch;
          escaped = false;
          continue;
        }
        if (ch === '\\') {
          current += ch;
          escaped = true;
          continue;
        }
        if (ch === "'" && !inQuote) {
          inQuote = true;
          continue;
        }
        if (ch === "'" && inQuote) {
          inQuote = false;
          options.push(current);
          current = '';
          continue;
        }
        if (inQuote) {
          current += ch;
        }
      }

      if (options.length !== 4) {
        // Skip if we can't parse exactly 4 options
        return match;
      }

      // Generate a random permutation
      const perm = shuffledIndices();
      
      // Find where the correct answer ends up
      const newAnswerIdx = perm.indexOf(answerIdx);
      
      // Reorder options
      const newOptions = perm.map(i => options[i]);
      
      // Only modify if the answer position actually changed
      if (newAnswerIdx !== answerIdx) {
        modified = true;
        changeCount++;
      }

      const newOptionsStr = newOptions.map(o => `'${o}'`).join(', ');
      return `o: [${newOptionsStr}], a: ${newAnswerIdx}`;
    }
  );

  if (modified) {
    writeFileSync(filePath, result, 'utf-8');
  }
  
  return changeCount;
}

// Process all data files (not index.ts or types.ts)
const files = readdirSync(PRACTICE_DIR)
  .filter(f => f.endsWith('.ts') && f !== 'index.ts' && f !== 'types.ts');

let totalChanges = 0;
for (const file of files) {
  const filePath = join(PRACTICE_DIR, file);
  const changes = processFile(filePath);
  console.log(`${file}: ${changes} questions shuffled`);
  totalChanges += changes;
}

console.log(`\nTotal: ${totalChanges} questions had their answer positions randomised.`);
