

## Add Real Educational Content to Every Page

### The Problem
Three page types have thin, templated content that could trigger Google's Helpful Content penalty:

1. **Topic Pages (~1,300)**: The "Concept Overview" says *"X is a fundamental sub-topic within Y"* — never explains what X actually IS
2. **Revision Notes (~150)**: Just lists topic links and formulas — no actual revision content
3. **Programmatic Blogs (~5,000)**: Template prose with *"Students who master X typically see a 15-20% improvement"* repeated across every post

### The Fix: Per-Topic Educational Content Data

Add a new data layer with **real, unique educational content** for every topic — definitions, explanations, worked examples, key facts, and real-world applications. This data feeds into Topic Pages, Revision Notes, and enriches blogs.

#### New Data Structure

Extend `ChapterData` with per-topic content objects:

```text
ChapterData {
  ...existing fields,
  topicContent: {
    [topicName]: {
      definition: string,        // "Projectile motion is the motion of..."
      explanation: string,        // 3-4 sentences explaining the concept
      keyFact: string,           // One surprising/memorable fact
      workedExample: {           // A real solved problem
        problem: string,
        solution: string,
        answer: string
      },
      realWorldApp: string,      // Real-world application
      mnemonics?: string,        // Memory aids
      ncertRef?: string          // "NCERT Class 11, Ch 4, pg 67"
    }
  }
}
```

#### Content for All 149 Chapters (~1,300 topics)

Each chapter file gets real educational content per topic. Example for Kinematics:

- **Motion in a Straight Line**: Definition of position, displacement, instantaneous velocity. Worked example: "A car accelerates from 0 to 72 km/h in 10s. Find displacement." NCERT ref: Class 11 Ch 3.
- **Projectile Motion**: Parabolic path derivation, independence of horizontal/vertical components. Worked example: "A ball thrown at 30° with 20 m/s — find range, max height, time of flight." Key fact: "All projectiles follow parabolas regardless of mass (ignoring air resistance)."
- **Relative Motion**: Frame of reference concept, velocity addition. Worked example: river-boat crossing problem.

This is **not AI filler** — each topic gets a specific definition, a specific solved numerical, and a specific NCERT page reference.

### Files to Create/Modify

| File | Change |
|---|---|
| `src/data/chapters/jeePhysics.ts` | Add `topicContent` with real content for all 22 chapters (~176 topics) |
| `src/data/chapters/jeeChemistry.ts` | Add `topicContent` for 30 chapters (~240 topics) |
| `src/data/chapters/jeeMaths.ts` | Add `topicContent` for 23 chapters (~184 topics) |
| `src/data/chapters/neetBiology.ts` | Add `topicContent` for 34 chapters (~272 topics) |
| `src/data/chapters/neetPhysics.ts` | Add `topicContent` for 15 chapters (~120 topics) |
| `src/data/chapters/neetChemistry.ts` | Add `topicContent` for 25 chapters (~200 topics) |
| `src/data/chapterData.ts` | Extend `ChapterData` interface with `topicContent` |
| `src/views/TopicPage.tsx` | Replace generic "X is a fundamental sub-topic" with real definition, explanation, worked example, key fact |
| `src/views/RevisionNotesPage.tsx` | Add concept summary + key fact for each topic instead of just links |

### What Changes in Topic Pages

**Before** (generic):
> "Projectile Motion is a fundamental sub-topic within Kinematics for JEE Main & Advanced. It forms part of the Physics syllabus that carries 4-6% overall weightage."

**After** (real content):
> "Projectile motion is the curved path an object follows when launched near Earth's surface under the influence of gravity alone. The key insight is that horizontal and vertical motions are completely independent — horizontal velocity remains constant (no air resistance), while vertical motion has constant acceleration g = 9.8 m/s² downward. The trajectory is always a parabola described by y = x·tan θ − gx²/(2u²cos²θ)."

Plus a worked example box:
> **Solved Example:** A ball is thrown at 30° to the horizontal with initial speed 20 m/s. Find the range.
> **Solution:** R = u²sin2θ/g = (400 × sin60°)/9.8 = (400 × 0.866)/9.8 = **35.3 m**

### What Changes in Revision Notes

**Before**: Just a list of topic names as links
**After**: Each topic shows a 2-line concept summary + key formula + the worked example from topicContent

### Implementation Approach

Due to the volume (~1,200 topic entries across 6 files), this will be done in batches:
1. First: JEE Physics (22 chapters) — the most formula-heavy, biggest impact
2. Then: JEE Chemistry + Maths
3. Then: NEET subjects

Each topic entry is ~150-200 words of genuine educational content (definition + explanation + worked example + key fact + NCERT ref). Total new content: ~200,000 words of real educational material.

