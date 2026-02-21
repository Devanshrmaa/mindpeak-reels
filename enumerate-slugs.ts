import { buildAllPracticeSlugs } from "./src/data/practice/index";
import { buildAllPYQSlugs } from "./src/data/pyq/index";
import { buildAllNEETPracticeSlugs } from "./src/data/neet-practice/index";
import { buildAllNEETPYQSlugs } from "./src/data/neet-pyq/index";

const p = buildAllPracticeSlugs();
console.log("JEE_PRACTICE_TOTAL:", p.length);
console.log("JEE_PRACTICE_FIRST:", JSON.stringify(p.slice(0, 10).map(s => s.slug)));
console.log("JEE_PRACTICE_LAST:", JSON.stringify(p.slice(-5).map(s => s.slug)));

const q = buildAllPYQSlugs();
console.log("JEE_PYQ_TOTAL:", q.length);
console.log("JEE_PYQ_FIRST:", JSON.stringify(q.slice(0, 10).map(s => s.slug)));
console.log("JEE_PYQ_LAST:", JSON.stringify(q.slice(-5).map(s => s.slug)));

const np = buildAllNEETPracticeSlugs();
console.log("NEET_PRACTICE_TOTAL:", np.length);
console.log("NEET_PRACTICE_FIRST:", JSON.stringify(np.slice(0, 10).map(s => s.slug)));
console.log("NEET_PRACTICE_LAST:", JSON.stringify(np.slice(-5).map(s => s.slug)));

const nq = buildAllNEETPYQSlugs();
console.log("NEET_PYQ_TOTAL:", nq.length);
console.log("NEET_PYQ_FIRST:", JSON.stringify(nq.slice(0, 10).map(s => s.slug)));
console.log("NEET_PYQ_LAST:", JSON.stringify(nq.slice(-5).map(s => s.slug)));
