"use client";

import { Navbar } from '@/components/sections/Navbar';
import { Link } from '@/components/RouterLink';
import { ArrowLeft } from 'lucide-react';

const RefundPolicy = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 pt-28 pb-16">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <h1 className="font-display font-bold text-foreground text-3xl sm:text-4xl mb-2">Refund Policy</h1>
        <p className="text-muted-foreground text-sm mb-10">MindPeakInstitute.com</p>

        <div className="prose prose-invert max-w-none space-y-8 text-foreground/90 text-sm leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">1. Trial / Free Demo</h2>
            <p>A single free trial session is allowed per user. No payment is required for the trial, so no refund applies.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">2. Monthly Subscriptions</h2>
            <p>Cancel before the next billing cycle to avoid further charges. Fees already paid for the current billing period are non-refundable.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">3. Course Cancellations by MindPeak</h2>
            <p>If MindPeak cancels a paid course, we will offer a pro rata refund or an alternative course of equal value at the student's choice.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">4. No-Shows & Rescheduling</h2>
            <p>Students who do not join a live session without providing at least 24 hours' notice forfeit that session. No refund will be issued for missed sessions without prior notice.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">5. Refund Processing</h2>
            <p>Approved refunds will be processed within 7–10 business days and credited to the original payment method.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">6. How to Request a Refund</h2>
            <p>To request a refund, email us at <a href="mailto:mindpeak@mindpeakinstitute.com" className="text-primary hover:underline">mindpeak@mindpeakinstitute.com</a> with your registered name, course details, and reason for the refund request.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">7. Contact</h2>
            <p>For any questions regarding this Refund Policy, please contact us at <a href="mailto:mindpeak@mindpeakinstitute.com" className="text-primary hover:underline">mindpeak@mindpeakinstitute.com</a> or call +91 82194 57704.</p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default RefundPolicy;
