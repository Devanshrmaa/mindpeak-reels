"use client";

import { Navbar } from '@/components/sections/Navbar';
import { Link } from '@/components/RouterLink';
import { ArrowLeft } from 'lucide-react';

const TermsAndConditions = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 pt-28 pb-16">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <h1 className="font-display font-bold text-foreground text-3xl sm:text-4xl mb-2">Terms & Conditions</h1>
        <p className="text-muted-foreground text-sm mb-10">MindPeakInstitute.com</p>

        <div className="prose prose-invert max-w-none space-y-8 text-foreground/90 text-sm leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">1. Introduction</h2>
            <p>Welcome to MindPeak Institute. These Terms & Conditions ("Terms") govern your access to and use of our website, online classes, content, and services (collectively, the "Services"). By using the Services you agree to be bound by these Terms. If you do not agree, do not use the Services.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">2. Definitions</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Student / User</strong> — any person who registers for or uses the Services.</li>
              <li><strong>Tutor</strong> — a person engaged by MindPeak to deliver classes.</li>
              <li><strong>Content</strong> — lesson materials, videos, PDFs, tests, and any materials provided.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">3. Eligibility</h2>
            <p>You must be at least 18 years old to register. If you are under 18, a parent or legal guardian must create the account and accept these Terms on your behalf.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">4. Scope of Services</h2>
            <p>MindPeak provides personalised 1-on-1 and group coaching for competitive exams (JEE, NEET, etc.) and related study materials. Course outlines, schedules, and duration are described on the course page and may be updated from time to time.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">5. Registration & Accounts</h2>
            <p>You must provide accurate information during registration. You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account. Notify us immediately of any unauthorized use.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">6. Fees, Payments & Billing</h2>
            <p>Fees for each course are shown on the course page or invoice. Payment must be made in advance according to the selected plan. We accept Cash, Card or Bank Transfer. All fees are non-refundable except as expressly provided in Section 7. Taxes are the responsibility of the payer.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">7. Refunds & Cancellations</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Trial / Free demo:</strong> Single free trial session allowed per user.</li>
              <li><strong>Monthly subscriptions:</strong> Cancel before the next billing cycle to avoid further charges; fees already paid are non-refundable.</li>
              <li><strong>Course cancellations by MindPeak:</strong> If MindPeak cancels a paid course, we will offer a pro rata refund or an alternative course of equal value.</li>
              <li><strong>No-shows & Rescheduling:</strong> Students who do not join a live session without 24 hours' notice forfeit that session.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">8. Scheduling & Session Rules</h2>
            <p>Classes are scheduled as per the timetable. Requests for schedule changes must be made at least 24 hours in advance. MindPeak may change the assigned tutor; where a change materially affects the service, we will consult the student and offer alternatives.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">9. Intellectual Property</h2>
            <p>All Content is owned or licensed by MindPeak Institute. You may access Content for personal, non-commercial educational use only. You must not copy, modify, distribute, sell, or create derivative works of the Content without written permission.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">10. Use Conduct & Prohibited Uses</h2>
            <p>You agree not to: abuse tutors, submit fraudulent information, attempt to hack or interfere with the platform, or request tutors to complete academic work that violates institutional rules.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">11. Disclaimers & No Guarantee of Results</h2>
            <p>MindPeak provides educational services and study materials but does not guarantee exam results, admissions, or scores. Outcomes depend on multiple factors beyond our control.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">12. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, MindPeak and its affiliates will not be liable for indirect, incidental, special, consequential, or punitive damages, or for any loss of profits, data, or revenue arising from your use of the Services. Our aggregate liability for direct damages will not exceed the fees paid by you in the preceding 6 months.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">13. Indemnification</h2>
            <p>You agree to indemnify and hold MindPeak harmless from any claim, loss, liability, or expense (including reasonable legal fees) arising from your breach of these Terms or your misuse of the Services.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">14. Third-party Links & Materials</h2>
            <p>We may provide links to third-party sites. MindPeak is not responsible for the content or practices of those sites and linking does not imply endorsement.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">15. Privacy & Data Protection</h2>
            <p>Personal data is handled in accordance with our Privacy Policy. By using the Services you consent to data collection and use as described there.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">16. Modifications to Terms</h2>
            <p>MindPeak reserves the right to update these Terms at any time. We will notify registered users of material changes via email or dashboard notice. Continued use of the Services after changes constitutes acceptance.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">17. Termination</h2>
            <p>MindPeak may suspend or terminate your account for breach of these Terms. Upon termination, your right to access Content ceases immediately. Clauses that by their nature should survive (e.g., IP, limitation of liability, indemnification) will continue in force.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">18. Governing Law & Disputes</h2>
            <p>These Terms are governed by the laws of India. Any dispute shall be subject to the exclusive jurisdiction of the courts in Kota, Rajasthan.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">19. Contact</h2>
            <p>For questions about these Terms, contact us at <a href="mailto:mindpeak@mindpeakinstitute.com" className="text-primary hover:underline">mindpeak@mindpeakinstitute.com</a>.</p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default TermsAndConditions;
