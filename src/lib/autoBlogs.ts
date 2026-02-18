/**
 * Auto Blog Generation Utility
 * Automatically generates template-based blog entries each month.
 * Adds time-sensitive, keyword-rich content to the blog index.
 */

import type { BlogPost } from '@/data/blogData';
import { Target, BookOpen, Brain, Calendar, TrendingUp, Heart, Microscope, Zap, GraduationCap, Award, Flame, Star } from 'lucide-react';

/* ─── helpers ─── */

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function currentMonth(): string {
  return monthNames[new Date().getMonth()];
}

function currentYear(): number {
  return new Date().getFullYear();
}

/** Icons to rotate month-by-month */
const monthIcons = [
  Target, BookOpen, Brain, Calendar, TrendingUp, Heart,
  Microscope, Zap, GraduationCap, Award, Flame, Star,
];

/* ─── monthly JEE blog template ─── */

function jeeMonthlyPost(): BlogPost {
  const month = currentMonth();
  const year = currentYear();
  const m = new Date().getMonth();

  return {
    slug: `jee-${year}-preparation-${month.toLowerCase()}`,
    title: `JEE ${year} Preparation Strategy for ${month}`,
    excerpt: `Complete ${month} ${year} study plan for JEE aspirants — chapter priorities, mock test targets, and daily schedule optimized for this phase of preparation.`,
    category: 'JEE',
    tags: ['JEE Main', 'JEE Advanced', 'Monthly Strategy', month, String(year)],
    author: 'MindPeak Expert Team',
    publishDate: new Date(year, m, 1).toISOString().split('T')[0],
    readTime: '7 min read',
    icon: monthIcons[m],
    color: 'from-blue-500 to-cyan-500',
    content: `
# JEE ${year} Preparation Strategy for ${month}

As we enter ${month} ${year}, JEE aspirants need to adjust their preparation strategy. Here's your comprehensive guide for this month.

## Key Focus Areas for ${month} ${year}

### 1. Chapter Priorities
Based on the exam timeline, this month you should focus on completing or revising the highest-weightage chapters in Physics, Chemistry, and Mathematics. Prioritize chapters where you score below 60% accuracy in mock tests.

### 2. Mock Test Strategy
- Take **${2 + (m % 3)} full-length mock tests** this week
- Focus on chapters with highest error rates
- Analyze every mock — spend equal time reviewing as taking the test

### 3. Daily Schedule
- **6–8 AM**: Physics problem-solving
- **9–12 PM**: Chemistry (alternate Physical/Organic/Inorganic)
- **2–5 PM**: Mathematics intensive practice
- **7–9 PM**: Revision + doubt clearing with mentor

## ${month} Checklist
- Complete ${5 + (m % 4)} chapters this month
- Take ${4 + (m % 3)} full-length mocks
- Revise ${8 + (m % 5)} important topics
- Clear at least ${10 + m * 2} doubts with your mentor

## Get Personalized Help
Struggling with this month's targets? A 1-on-1 mentor can build a study plan tailored to YOUR pace and weak areas.
    `,
  };
}

/* ─── monthly NEET blog template ─── */

function neetMonthlyPost(): BlogPost {
  const month = currentMonth();
  const year = currentYear();
  const m = new Date().getMonth();

  return {
    slug: `neet-${year}-biology-strategy-${month.toLowerCase()}`,
    title: `NEET ${year} Biology Focus for ${month}`,
    excerpt: `${month} ${year} NEET Biology preparation guide — Botany priorities, Zoology focus, NCERT mastery plan, and practice question targets.`,
    category: 'NEET',
    tags: ['NEET UG', 'Biology', 'Monthly Strategy', month, String(year)],
    author: 'MindPeak Expert Team',
    publishDate: new Date(year, m, 1).toISOString().split('T')[0],
    readTime: '6 min read',
    icon: monthIcons[(m + 6) % 12],
    color: 'from-green-500 to-emerald-500',
    content: `
# NEET ${year} Biology Strategy for ${month}

${month} is a crucial month for NEET Biology preparation. Here's your comprehensive guide.

## ${month} ${year} Biology Priorities

### Botany Focus
Concentrate on high-yield Botany chapters this month. NCERT line-by-line reading is non-negotiable — label every diagram you encounter.

### Zoology Focus
Zoology topics for ${month} should emphasize Human Physiology chapters, which carry significant weightage in NEET.

### High-Yield Topics This Month
Focus on assertion-reason questions and diagram-based MCQs for maximum scoring potential.

## Practice Targets
- NCERT revision: minimum ${20 + m * 5} pages per day
- Previous year NEET questions: ${15 + m * 2} per day
- Full-length NEET mocks: ${2 + (m % 3)} this month

## ${month} Biology Checklist
- Complete ${4 + (m % 3)} Biology chapters
- Memorize ${10 + m * 2} key diagrams
- Solve ${100 + m * 20} Biology MCQs
- Revise all NCERT examples for covered chapters
    `,
  };
}

/* ─── study tip post ─── */

function monthlyStudyTipPost(): BlogPost {
  const month = currentMonth();
  const year = currentYear();
  const m = new Date().getMonth();

  const topics = [
    { title: 'Time Management', slug: 'time-management', color: 'from-purple-500 to-pink-500' },
    { title: 'Dealing with Exam Stress', slug: 'exam-stress-relief', color: 'from-orange-500 to-red-500' },
    { title: 'Effective Revision Techniques', slug: 'revision-techniques', color: 'from-teal-500 to-blue-500' },
    { title: 'Mock Test Strategy', slug: 'mock-test-strategy', color: 'from-yellow-500 to-orange-500' },
    { title: 'Building Study Habits', slug: 'building-study-habits', color: 'from-indigo-500 to-purple-500' },
    { title: 'Formula Memorization', slug: 'formula-memorization', color: 'from-pink-500 to-rose-500' },
    { title: 'Staying Motivated', slug: 'staying-motivated', color: 'from-emerald-500 to-teal-500' },
    { title: 'Parent Guide for JEE NEET', slug: 'parent-guide', color: 'from-blue-500 to-indigo-500' },
    { title: 'Board + Competitive Exam Balance', slug: 'board-exam-balance', color: 'from-cyan-500 to-blue-500' },
    { title: 'Last Month Preparation', slug: 'last-month-prep', color: 'from-red-500 to-orange-500' },
    { title: 'Post-Exam Analysis', slug: 'post-exam-analysis', color: 'from-green-500 to-teal-500' },
    { title: 'Year-End Review', slug: 'year-end-review', color: 'from-violet-500 to-purple-500' },
  ];

  const topic = topics[m % topics.length];

  return {
    slug: `${topic.slug}-${month.toLowerCase()}-${year}`,
    title: `${topic.title} — ${month} ${year} Guide`,
    excerpt: `Expert tips on ${topic.title.toLowerCase()} for JEE and NEET aspirants this ${month}.`,
    category: 'Study Tips',
    tags: ['Study Tips', topic.title, month, String(year)],
    author: 'MindPeak Expert Team',
    publishDate: new Date(year, m, 5).toISOString().split('T')[0],
    readTime: '5 min read',
    icon: monthIcons[(m + 3) % 12],
    color: topic.color,
    content: `
# ${topic.title} — ${month} ${year} Guide

As a JEE / NEET aspirant in ${month} ${year}, mastering ${topic.title.toLowerCase()} can make or break your preparation. Here are proven strategies from our expert mentors.

## Why ${topic.title} Matters Now
With competitive exams approaching, ${topic.title.toLowerCase()} becomes increasingly important. Students who master this aspect see a 15-25% improvement in their scores.

## Top 5 Tips for ${month}
1. Set specific, measurable daily targets
2. Use the Pomodoro technique (50-minute focus blocks)
3. Review your progress with your mentor weekly
4. Don't compare with peers — focus on personal improvement
5. Maintain a healthy sleep schedule (7-8 hours minimum)

## How MindPeak Helps
Your personal mentor helps you build a customized ${topic.title.toLowerCase()} framework tailored to your learning style and exam timeline.
    `,
  };
}

/**
 * Returns auto-generated blog posts for the current month.
 * These should be appended to the static blogPosts array.
 */
export function getAutoGeneratedBlogPosts(): BlogPost[] {
  return [jeeMonthlyPost(), neetMonthlyPost(), monthlyStudyTipPost()];
}
