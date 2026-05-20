/**
 * MindPeak Institute — Outreach Email Sender
 * Uses Hostinger SMTP (smtp.hostinger.com:465)
 *
 * Setup:
 *   1. Create .env.local in project root:
 *      OUTREACH_SMTP_USER=devansh@mindpeakinstitute.com
 *      OUTREACH_SMTP_PASS=your_email_password
 *
 *   2. Run:
 *      node --env-file=.env.local scripts/send-outreach.mjs
 *
 *   Dry run (preview only, no emails sent):
 *      DRY_RUN=true node --env-file=.env.local scripts/send-outreach.mjs
 *
 *   Send a single target by ID:
 *      TARGET_ID=2 node --env-file=.env.local scripts/send-outreach.mjs
 */

import nodemailer from 'nodemailer';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const TARGETS_FILE = join(ROOT, 'seo-reports/outreach-targets.json');
const STATUS_FILE = join(ROOT, 'seo-reports/outreach-sent.json');

const DRY_RUN = process.env.DRY_RUN === 'true';
const TARGET_ID = process.env.TARGET_ID ? parseInt(process.env.TARGET_ID, 10) : null;
const SMTP_USER = process.env.OUTREACH_SMTP_USER;
const SMTP_PASS = process.env.OUTREACH_SMTP_PASS;
const FROM_NAME = 'Devansh | MindPeak Institute';

function loadStatus() {
  if (existsSync(STATUS_FILE)) {
    return JSON.parse(readFileSync(STATUS_FILE, 'utf-8'));
  }
  return {};
}

function saveStatus(status) {
  writeFileSync(STATUS_FILE, JSON.stringify(status, null, 2));
}

function formatStatusKey(target) {
  return `${target.id}_${target.site.replace(/\./g, '_')}`;
}

async function main() {
  if (!SMTP_USER || !SMTP_PASS) {
    console.error('\n❌  Missing SMTP credentials.');
    console.error('   Create .env.local with:');
    console.error('   OUTREACH_SMTP_USER=devansh@mindpeakinstitute.com');
    console.error('   OUTREACH_SMTP_PASS=your_email_password\n');
    process.exit(1);
  }

  const allTargets = JSON.parse(readFileSync(TARGETS_FILE, 'utf-8'));
  const emailTargets = allTargets.filter(t => t.contact.method === 'email');
  const formTargets = allTargets.filter(t => t.contact.method === 'form');
  const status = loadStatus();

  const targets = TARGET_ID
    ? emailTargets.filter(t => t.id === TARGET_ID)
    : emailTargets;

  if (targets.length === 0) {
    console.log(TARGET_ID
      ? `\n⚠️  No email target found with ID ${TARGET_ID} (it may be a contact-form target).`
      : '\n⚠️  No email targets found.'
    );
    process.exit(0);
  }

  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('  MindPeak Institute — Outreach Email Sender');
  console.log(`  Mode: ${DRY_RUN ? '🔍 DRY RUN (no emails sent)' : '📤 LIVE SEND'}`);
  console.log(`  From: ${SMTP_USER}`);
  console.log(`  Targets: ${targets.length} email / ${formTargets.length} form (manual)`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  let transporter;
  if (!DRY_RUN) {
    transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    try {
      await transporter.verify();
      console.log('✅  SMTP connection verified\n');
    } catch (err) {
      console.error('❌  SMTP connection failed:', err.message);
      console.error('   Check your credentials and that SMTP is enabled in Hostinger hPanel.\n');
      process.exit(1);
    }
  }

  let sent = 0;
  let skipped = 0;
  let failed = 0;

  for (const target of targets) {
    const key = formatStatusKey(target);
    const alreadySent = status[key]?.sentAt;

    if (alreadySent) {
      console.log(`⏭️   #${target.id} ${target.site} — already sent on ${alreadySent}, skipping`);
      skipped++;
      continue;
    }

    console.log(`📧  #${target.id} ${target.site}`);
    console.log(`    To:      ${target.contact.to}`);
    console.log(`    Subject: ${target.subject}`);

    if (DRY_RUN) {
      console.log(`    [DRY RUN — not sent]\n`);
      continue;
    }

    try {
      await transporter.sendMail({
        from: `"${FROM_NAME}" <${SMTP_USER}>`,
        to: target.contact.to,
        subject: target.subject,
        text: target.body,
      });

      status[key] = {
        id: target.id,
        site: target.site,
        to: target.contact.to,
        subject: target.subject,
        sentAt: new Date().toISOString(),
      };
      saveStatus(status);

      console.log(`    ✅  Sent\n`);
      sent++;

      // 3-second gap between sends to avoid rate limits
      await new Promise(r => setTimeout(r, 3000));
    } catch (err) {
      console.error(`    ❌  Failed: ${err.message}\n`);
      failed++;
    }
  }

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  if (DRY_RUN) {
    console.log(`  DRY RUN complete — ${targets.length} emails previewed, 0 sent`);
  } else {
    console.log(`  Done: ${sent} sent, ${skipped} skipped (already sent), ${failed} failed`);
  }

  if (formTargets.length > 0 && !TARGET_ID) {
    console.log(`\n  ⚠️  ${formTargets.length} targets require MANUAL contact form submission:`);
    for (const t of formTargets) {
      console.log(`     #${t.id} ${t.site} — ${t.contact.url}`);
    }
  }
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
}

main();
