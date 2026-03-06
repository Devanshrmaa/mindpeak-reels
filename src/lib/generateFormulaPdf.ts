import { jsPDF } from 'jspdf';
import type { FormulaSheetData, FrequencyTag } from '@/data/formulaSheetData';

/**
 * Generates a branded MindPeak formula sheet PDF from the formula data.
 * Dark navy + gold aesthetic matching the website branding.
 */
export function generateFormulaPdf(data: FormulaSheetData): void {
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageW = 210;
  const pageH = 297;
  const marginL = 14;
  const marginR = 14;
  const contentW = pageW - marginL - marginR;
  let y = 0;

  // Brand colors
  const navy = [13, 17, 38] as const;       // hsl(225,43%,7%) approx
  const gold = [212, 175, 55] as const;      // #D4AF37
  const white = [255, 255, 255] as const;
  const lightGray = [180, 185, 200] as const;
  const dimText = [140, 148, 170] as const;
  const cardBg = [20, 25, 50] as const;

  const freqColors: Record<FrequencyTag, readonly [number, number, number]> = {
    'must-know': [239, 68, 68],   // red
    'high': [245, 158, 11],       // amber
    'medium': [59, 130, 246],     // blue
    'low': [107, 114, 128],       // gray
  };

  const freqLabels: Record<FrequencyTag, string> = {
    'must-know': '★ MUST KNOW',
    'high': '● HIGH',
    'medium': '◐ MEDIUM',
    'low': '○ LOW',
  };

  function addPage() {
    pdf.addPage();
    drawPageBg();
    drawFooter();
    y = 15;
  }

  function checkSpace(needed: number) {
    if (y + needed > pageH - 20) {
      addPage();
    }
  }

  function drawPageBg() {
    pdf.setFillColor(...navy);
    pdf.rect(0, 0, pageW, pageH, 'F');
  }

  function drawFooter() {
    pdf.setFontSize(7);
    pdf.setTextColor(...dimText);
    pdf.text('MindPeak Institute — mindpeakinstitute.com — Personalized JEE & NEET Coaching', pageW / 2, pageH - 8, { align: 'center' });
    pdf.text(`© ${new Date().getFullYear()} MindPeak Institute. All rights reserved.`, pageW / 2, pageH - 4, { align: 'center' });
  }

  // ─── Page 1: Cover ───
  drawPageBg();

  // Gold accent line at top
  pdf.setFillColor(...gold);
  pdf.rect(0, 0, pageW, 3, 'F');

  // Logo area
  y = 40;
  pdf.setFillColor(...gold);
  pdf.circle(pageW / 2, y, 12, 'F');
  pdf.setFontSize(14);
  pdf.setTextColor(...navy);
  pdf.setFont('helvetica', 'bold');
  pdf.text('MP', pageW / 2, y + 5, { align: 'center' });

  // Title
  y = 70;
  pdf.setFontSize(28);
  pdf.setTextColor(...white);
  pdf.setFont('helvetica', 'bold');
  pdf.text(data.heroHeading, pageW / 2, y, { align: 'center' });

  y += 12;
  pdf.setFontSize(22);
  pdf.setTextColor(...gold);
  pdf.text(data.heroHighlight, pageW / 2, y, { align: 'center' });

  y += 12;
  pdf.setFontSize(14);
  pdf.setTextColor(...lightGray);
  pdf.text(data.exam + ' ' + new Date().getFullYear(), pageW / 2, y, { align: 'center' });

  // Stats bar
  y += 20;
  const statsY = y;
  const statW = contentW / 3;

  // Count frequencies
  const freqCounts: Record<string, number> = { 'must-know': 0, high: 0, medium: 0, low: 0 };
  data.chapters.forEach(ch => ch.formulas.forEach(f => { freqCounts[f.freq]++; }));

  const stats = [
    { label: 'Total Formulas', value: String(data.totalFormulas) + '+' },
    { label: 'Chapters', value: String(data.chapters.length) },
    { label: 'Must-Know', value: String(freqCounts['must-know']) },
  ];

  stats.forEach((stat, i) => {
    const cx = marginL + statW * i + statW / 2;
    pdf.setFillColor(...cardBg);
    pdf.roundedRect(marginL + statW * i + 3, statsY - 8, statW - 6, 22, 3, 3, 'F');
    pdf.setFontSize(18);
    pdf.setTextColor(...gold);
    pdf.setFont('helvetica', 'bold');
    pdf.text(stat.value, cx, statsY + 2, { align: 'center' });
    pdf.setFontSize(8);
    pdf.setTextColor(...dimText);
    pdf.setFont('helvetica', 'normal');
    pdf.text(stat.label, cx, statsY + 9, { align: 'center' });
  });

  // Description
  y = statsY + 30;
  pdf.setFontSize(10);
  pdf.setTextColor(...lightGray);
  pdf.setFont('helvetica', 'normal');
  const descLines = pdf.splitTextToSize(data.heroParagraph, contentW - 20);
  pdf.text(descLines, pageW / 2, y, { align: 'center' });

  // Frequency legend
  y += descLines.length * 5 + 15;
  pdf.setFontSize(9);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(...white);
  pdf.text('FREQUENCY LEGEND:', marginL + 5, y);
  y += 7;

  (['must-know', 'high', 'medium', 'low'] as FrequencyTag[]).forEach((tag, i) => {
    const cx = marginL + 5 + i * 45;
    pdf.setFillColor(...freqColors[tag]);
    pdf.circle(cx, y - 1.5, 2, 'F');
    pdf.setFontSize(7);
    pdf.setTextColor(...lightGray);
    pdf.setFont('helvetica', 'normal');
    pdf.text(`${freqLabels[tag]} (${freqCounts[tag]})`, cx + 4, y);
  });

  // Branding at bottom of cover
  y = pageH - 40;
  pdf.setFillColor(...gold);
  pdf.rect(marginL, y, contentW, 0.5, 'F');
  y += 8;
  pdf.setFontSize(10);
  pdf.setTextColor(...gold);
  pdf.setFont('helvetica', 'bold');
  pdf.text('MINDPEAK INSTITUTE', pageW / 2, y, { align: 'center' });
  y += 6;
  pdf.setFontSize(8);
  pdf.setTextColor(...lightGray);
  pdf.setFont('helvetica', 'normal');
  pdf.text('Personalized 1-on-1 JEE & NEET Coaching', pageW / 2, y, { align: 'center' });
  y += 5;
  pdf.text('mindpeakinstitute.com | +91 82194 57704', pageW / 2, y, { align: 'center' });

  drawFooter();

  // ─── Formula Pages ───
  data.chapters.forEach((chapter, chIdx) => {
    addPage();

    // Chapter header
    pdf.setFillColor(...gold);
    pdf.rect(marginL, y, contentW, 0.8, 'F');
    y += 6;

    pdf.setFontSize(14);
    pdf.setTextColor(...gold);
    pdf.setFont('helvetica', 'bold');
    pdf.text(`${chIdx + 1}. ${chapter.name}`, marginL, y);

    y += 4;
    pdf.setFontSize(8);
    pdf.setTextColor(...dimText);
    pdf.setFont('helvetica', 'normal');
    pdf.text(`${chapter.formulas.length} formulas`, marginL, y);
    y += 8;

    // Formulas in 2-column layout
    const colW = (contentW - 4) / 2;
    let col = 0;
    let rowStartY = y;

    chapter.formulas.forEach((formula) => {
      // Estimate height needed
      const nameLines = pdf.splitTextToSize(formula.name, colW - 8);
      const exprLines = pdf.splitTextToSize(formula.expression, colW - 8);
      const noteLines = formula.note ? pdf.splitTextToSize(formula.note, colW - 12) : [];
      const cardH = 8 + nameLines.length * 4 + exprLines.length * 4.5 + (noteLines.length > 0 ? noteLines.length * 3.5 + 2 : 0) + 4;

      if (col === 0) {
        checkSpace(cardH + 2);
        rowStartY = y;
      } else if (y + cardH > pageH - 20) {
        // Reset to next row
        col = 0;
        y = rowStartY;
        checkSpace(cardH + 2);
        rowStartY = y;
      }

      const x = marginL + col * (colW + 4);

      // Card background
      pdf.setFillColor(...cardBg);
      pdf.roundedRect(x, y, colW, cardH, 2, 2, 'F');

      // Frequency badge
      const badgeColor = freqColors[formula.freq];
      pdf.setFillColor(...badgeColor);
      pdf.roundedRect(x + colW - 22, y + 2, 20, 5, 1, 1, 'F');
      pdf.setFontSize(5);
      pdf.setTextColor(...white);
      pdf.setFont('helvetica', 'bold');
      pdf.text(freqLabels[formula.freq], x + colW - 12, y + 5.5, { align: 'center' });

      // Formula name
      let fy = y + 7;
      pdf.setFontSize(8.5);
      pdf.setTextColor(...white);
      pdf.setFont('helvetica', 'bold');
      nameLines.forEach((line: string) => {
        pdf.text(line, x + 4, fy);
        fy += 4;
      });

      // Expression
      fy += 1;
      pdf.setFontSize(9);
      pdf.setTextColor(...gold);
      pdf.setFont('courier', 'normal');
      exprLines.forEach((line: string) => {
        pdf.text(line, x + 4, fy);
        fy += 4.5;
      });

      // Note
      if (noteLines.length > 0) {
        fy += 1;
        pdf.setFontSize(7);
        pdf.setTextColor(...dimText);
        pdf.setFont('helvetica', 'italic');
        noteLines.forEach((line: string) => {
          pdf.text('💡 ' + line, x + 4, fy);
          fy += 3.5;
        });
      }

      if (col === 0) {
        col = 1;
      } else {
        col = 0;
        y = Math.max(y + cardH + 3, rowStartY + cardH + 3);
      }
    });

    // If we ended on col=1, advance y
    if (col === 1) {
      y = rowStartY + 25 + 3; // approximate
    }
  });

  // ─── Pro Tips Page ───
  if (data.proTips && data.proTips.length > 0) {
    addPage();

    pdf.setFontSize(16);
    pdf.setTextColor(...gold);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Pro Tips from Top Scorers', marginL, y);
    y += 10;

    data.proTips.forEach((tip, i) => {
      checkSpace(15);
      pdf.setFillColor(...cardBg);
      const tipLines = pdf.splitTextToSize(tip, contentW - 16);
      const tipH = tipLines.length * 5 + 6;
      pdf.roundedRect(marginL, y, contentW, tipH, 2, 2, 'F');

      pdf.setFontSize(10);
      pdf.setTextColor(...gold);
      pdf.setFont('helvetica', 'bold');
      pdf.text(`${i + 1}`, marginL + 5, y + 6);

      pdf.setFontSize(8.5);
      pdf.setTextColor(...lightGray);
      pdf.setFont('helvetica', 'normal');
      pdf.text(tipLines, marginL + 12, y + 6);

      y += tipH + 3;
    });
  }

  // ─── Back Cover ───
  addPage();
  y = pageH / 2 - 30;

  pdf.setFillColor(...gold);
  pdf.circle(pageW / 2, y, 15, 'F');
  pdf.setFontSize(16);
  pdf.setTextColor(...navy);
  pdf.setFont('helvetica', 'bold');
  pdf.text('MP', pageW / 2, y + 6, { align: 'center' });

  y += 25;
  pdf.setFontSize(20);
  pdf.setTextColor(...white);
  pdf.setFont('helvetica', 'bold');
  pdf.text('MINDPEAK INSTITUTE', pageW / 2, y, { align: 'center' });

  y += 10;
  pdf.setFontSize(11);
  pdf.setTextColor(...gold);
  pdf.setFont('helvetica', 'normal');
  pdf.text('Personalized 1-on-1 JEE & NEET Coaching', pageW / 2, y, { align: 'center' });

  y += 15;
  pdf.setFontSize(10);
  pdf.setTextColor(...lightGray);
  const cta = [
    'Book your FREE demo class today!',
    '',
    'Website: mindpeakinstitute.com',
    'WhatsApp: +91 82194 57704',
    'Email: info@mindpeakinstitute.com',
  ];
  cta.forEach(line => {
    pdf.text(line, pageW / 2, y, { align: 'center' });
    y += 6;
  });

  y += 10;
  pdf.setFillColor(...gold);
  pdf.roundedRect(pageW / 2 - 35, y, 70, 12, 3, 3, 'F');
  pdf.setFontSize(10);
  pdf.setTextColor(...navy);
  pdf.setFont('helvetica', 'bold');
  pdf.text('BOOK FREE DEMO', pageW / 2, y + 8, { align: 'center' });

  // Save
  const filename = `MindPeak-${data.exam}-${data.subject}-Formula-Sheet-${new Date().getFullYear()}.pdf`;
  pdf.save(filename);
}
