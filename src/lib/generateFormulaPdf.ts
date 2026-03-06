import { jsPDF } from 'jspdf';
import type { FormulaSheetData, FrequencyTag } from '@/data/formulaSheetData';

/**
 * Generates a branded MindPeak formula sheet PDF.
 * Clean single-column layout with proper page breaks.
 */
export function generateFormulaPdf(data: FormulaSheetData): void {
  const pdf = new jsPDF('p', 'mm', 'a4');
  const W = 210;
  const H = 297;
  const ML = 15;
  const MR = 15;
  const CW = W - ML - MR;
  const bottomMargin = 18;
  let y = 0;

  // Brand colors
  const navy: [number, number, number] = [13, 17, 38];
  const gold: [number, number, number] = [212, 175, 55];
  const white: [number, number, number] = [255, 255, 255];
  const lightGray: [number, number, number] = [180, 185, 200];
  const dimText: [number, number, number] = [140, 148, 170];
  const cardBg: [number, number, number] = [22, 28, 55];
  const cardBorder: [number, number, number] = [40, 48, 80];

  const freqColors: Record<FrequencyTag, [number, number, number]> = {
    'must-know': [220, 50, 50],
    'high': [230, 150, 20],
    'medium': [50, 120, 230],
    'low': [100, 110, 130],
  };

  const freqLabels: Record<FrequencyTag, string> = {
    'must-know': 'MUST KNOW',
    'high': 'HIGH',
    'medium': 'MEDIUM',
    'low': 'LOW',
  };

  // Count frequencies
  const freqCounts: Record<string, number> = { 'must-know': 0, high: 0, medium: 0, low: 0 };
  data.chapters.forEach(ch => ch.formulas.forEach(f => { freqCounts[f.freq]++; }));

  function bg() {
    pdf.setFillColor(...navy);
    pdf.rect(0, 0, W, H, 'F');
  }

  function footer() {
    pdf.setFontSize(6.5);
    pdf.setTextColor(...dimText);
    pdf.text('MindPeak Institute  |  mindpeakinstitute.com  |  +91 82194 57704', W / 2, H - 6, { align: 'center' });
  }

  function newPage() {
    pdf.addPage();
    bg();
    footer();
    y = 15;
  }

  function need(h: number) {
    if (y + h > H - bottomMargin) newPage();
  }

  // ── Cover ──
  bg();
  pdf.setFillColor(...gold);
  pdf.rect(0, 0, W, 3, 'F');

  // Logo circle
  y = 45;
  pdf.setFillColor(...gold);
  pdf.circle(W / 2, y, 13, 'F');
  pdf.setFontSize(15);
  pdf.setTextColor(...navy);
  pdf.setFont('helvetica', 'bold');
  pdf.text('MP', W / 2, y + 5.5, { align: 'center' });

  // Title
  y = 75;
  pdf.setFontSize(26);
  pdf.setTextColor(...white);
  pdf.text(data.heroHeading, W / 2, y, { align: 'center' });
  y += 12;
  pdf.setFontSize(20);
  pdf.setTextColor(...gold);
  pdf.text(data.heroHighlight, W / 2, y, { align: 'center' });
  y += 10;
  pdf.setFontSize(13);
  pdf.setTextColor(...lightGray);
  pdf.text(`${data.exam} ${new Date().getFullYear()}`, W / 2, y, { align: 'center' });

  // Stats
  y += 18;
  const stats = [
    { label: 'Total Formulas', value: `${data.totalFormulas}+` },
    { label: 'Chapters', value: `${data.chapters.length}` },
    { label: 'Must-Know', value: `${freqCounts['must-know']}` },
  ];
  const sw = CW / 3;
  stats.forEach((s, i) => {
    const cx = ML + sw * i + sw / 2;
    pdf.setFillColor(...cardBg);
    pdf.roundedRect(ML + sw * i + 3, y - 8, sw - 6, 22, 3, 3, 'F');
    pdf.setFontSize(17);
    pdf.setTextColor(...gold);
    pdf.setFont('helvetica', 'bold');
    pdf.text(s.value, cx, y + 2, { align: 'center' });
    pdf.setFontSize(7.5);
    pdf.setTextColor(...dimText);
    pdf.setFont('helvetica', 'normal');
    pdf.text(s.label, cx, y + 9, { align: 'center' });
  });

  // Description
  y += 28;
  pdf.setFontSize(9.5);
  pdf.setTextColor(...lightGray);
  pdf.setFont('helvetica', 'normal');
  const descLines = pdf.splitTextToSize(data.heroParagraph, CW - 20);
  pdf.text(descLines, W / 2, y, { align: 'center' });

  // Legend
  y += descLines.length * 4.5 + 12;
  pdf.setFontSize(8);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(...white);
  pdf.text('FREQUENCY LEGEND', ML + 4, y);
  y += 6;
  const tags: FrequencyTag[] = ['must-know', 'high', 'medium', 'low'];
  tags.forEach((tag, i) => {
    const cx = ML + 4 + i * 44;
    pdf.setFillColor(...freqColors[tag]);
    pdf.roundedRect(cx, y - 3, 3.5, 3.5, 0.5, 0.5, 'F');
    pdf.setFontSize(6.5);
    pdf.setTextColor(...lightGray);
    pdf.setFont('helvetica', 'normal');
    pdf.text(`${freqLabels[tag]} (${freqCounts[tag]})`, cx + 5, y);
  });

  // Cover bottom
  y = H - 45;
  pdf.setFillColor(...gold);
  pdf.rect(ML, y, CW, 0.4, 'F');
  y += 7;
  pdf.setFontSize(10);
  pdf.setTextColor(...gold);
  pdf.setFont('helvetica', 'bold');
  pdf.text('MINDPEAK INSTITUTE', W / 2, y, { align: 'center' });
  y += 5;
  pdf.setFontSize(8);
  pdf.setTextColor(...lightGray);
  pdf.setFont('helvetica', 'normal');
  pdf.text('Personalized 1-on-1 JEE & NEET Coaching', W / 2, y, { align: 'center' });
  footer();

  // ── Formula Pages ──
  data.chapters.forEach((chapter, chIdx) => {
    newPage();

    // Chapter header bar
    pdf.setFillColor(...gold);
    pdf.roundedRect(ML, y, CW, 14, 2, 2, 'F');
    pdf.setFontSize(11);
    pdf.setTextColor(...navy);
    pdf.setFont('helvetica', 'bold');
    pdf.text(`${chIdx + 1}. ${chapter.name}`, ML + 5, y + 9);
    pdf.setFontSize(8);
    pdf.text(`${chapter.formulas.length} formulas`, ML + CW - 30, y + 9);
    y += 19;

    // Two-column formula cards
    const gap = 4;
    const colW = (CW - gap) / 2;

    for (let i = 0; i < chapter.formulas.length; i += 2) {
      const left = chapter.formulas[i];
      const right = i + 1 < chapter.formulas.length ? chapter.formulas[i + 1] : null;

      // Calculate heights for both cards
      const calcH = (f: typeof left) => {
        const nl = pdf.splitTextToSize(f.name, colW - 10).length;
        const el = pdf.splitTextToSize(f.expression, colW - 10).length;
        const notL = f.note ? pdf.splitTextToSize(f.note, colW - 14).length : 0;
        return 10 + nl * 4 + el * 5 + (notL > 0 ? notL * 3.5 + 3 : 0) + 4;
      };

      const lh = calcH(left);
      const rh = right ? calcH(right) : 0;
      const rowH = Math.max(lh, rh);

      need(rowH + 3);

      // Draw card
      const drawCard = (f: typeof left, x: number, h: number) => {
        // Card bg with subtle border
        pdf.setFillColor(...cardBg);
        pdf.roundedRect(x, y, colW, h, 2, 2, 'F');
        pdf.setDrawColor(...cardBorder);
        pdf.setLineWidth(0.3);
        pdf.roundedRect(x, y, colW, h, 2, 2, 'S');

        // Left accent line
        pdf.setFillColor(...freqColors[f.freq]);
        pdf.rect(x, y + 2, 1.2, h - 4, 'F');

        // Frequency badge (top right)
        const badgeW = freqLabels[f.freq].length * 1.8 + 6;
        pdf.setFillColor(...freqColors[f.freq]);
        pdf.roundedRect(x + colW - badgeW - 3, y + 3, badgeW, 5, 1, 1, 'F');
        pdf.setFontSize(5.5);
        pdf.setTextColor(...white);
        pdf.setFont('helvetica', 'bold');
        pdf.text(freqLabels[f.freq], x + colW - badgeW / 2 - 3, y + 6.5, { align: 'center' });

        // Formula name
        let fy = y + 9;
        pdf.setFontSize(8.5);
        pdf.setTextColor(...white);
        pdf.setFont('helvetica', 'bold');
        const nameL = pdf.splitTextToSize(f.name, colW - 10);
        nameL.forEach((line: string) => {
          pdf.text(line, x + 5, fy);
          fy += 4;
        });

        // Expression
        fy += 1.5;
        pdf.setFontSize(9);
        pdf.setTextColor(...gold);
        pdf.setFont('helvetica', 'normal');
        const exprL = pdf.splitTextToSize(f.expression, colW - 10);
        exprL.forEach((line: string) => {
          pdf.text(line, x + 5, fy);
          fy += 5;
        });

        // Note
        if (f.note) {
          fy += 1.5;
          pdf.setFontSize(6.5);
          pdf.setTextColor(...dimText);
          pdf.setFont('helvetica', 'italic');
          const noteL = pdf.splitTextToSize(f.note, colW - 14);
          noteL.forEach((line: string) => {
            pdf.text('> ' + line, x + 5, fy);
            fy += 3.5;
          });
        }
      };

      drawCard(left, ML, rowH);
      if (right) drawCard(right, ML + colW + gap, rowH);

      y += rowH + 3;
    }
  });

  // ── Pro Tips ──
  if (data.proTips?.length) {
    newPage();
    pdf.setFillColor(...gold);
    pdf.roundedRect(ML, y, CW, 12, 2, 2, 'F');
    pdf.setFontSize(12);
    pdf.setTextColor(...navy);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Pro Tips from Top Scorers', ML + 5, y + 8);
    y += 18;

    data.proTips.forEach((tip, i) => {
      const tipLines = pdf.splitTextToSize(tip, CW - 20);
      const tipH = tipLines.length * 4.5 + 8;
      need(tipH + 3);

      pdf.setFillColor(...cardBg);
      pdf.roundedRect(ML, y, CW, tipH, 2, 2, 'F');
      pdf.setDrawColor(...cardBorder);
      pdf.setLineWidth(0.3);
      pdf.roundedRect(ML, y, CW, tipH, 2, 2, 'S');

      // Number circle
      pdf.setFillColor(...gold);
      pdf.circle(ML + 8, y + tipH / 2, 4, 'F');
      pdf.setFontSize(9);
      pdf.setTextColor(...navy);
      pdf.setFont('helvetica', 'bold');
      pdf.text(`${i + 1}`, ML + 8, y + tipH / 2 + 3, { align: 'center' });

      // Tip text
      pdf.setFontSize(8.5);
      pdf.setTextColor(...lightGray);
      pdf.setFont('helvetica', 'normal');
      pdf.text(tipLines, ML + 16, y + 7);

      y += tipH + 3;
    });
  }

  // ── Back Cover ──
  newPage();
  y = H / 2 - 35;

  pdf.setFillColor(...gold);
  pdf.circle(W / 2, y, 16, 'F');
  pdf.setFontSize(17);
  pdf.setTextColor(...navy);
  pdf.setFont('helvetica', 'bold');
  pdf.text('MP', W / 2, y + 6, { align: 'center' });

  y += 28;
  pdf.setFontSize(22);
  pdf.setTextColor(...white);
  pdf.text('MINDPEAK INSTITUTE', W / 2, y, { align: 'center' });

  y += 10;
  pdf.setFontSize(11);
  pdf.setTextColor(...gold);
  pdf.setFont('helvetica', 'normal');
  pdf.text('Personalized 1-on-1 JEE & NEET Coaching', W / 2, y, { align: 'center' });

  y += 18;
  pdf.setFontSize(10);
  pdf.setTextColor(...lightGray);
  ['Book your FREE demo class today!', '', 'mindpeakinstitute.com', 'WhatsApp: +91 82194 57704', 'info@mindpeakinstitute.com'].forEach(line => {
    pdf.text(line, W / 2, y, { align: 'center' });
    y += 6;
  });

  y += 8;
  pdf.setFillColor(...gold);
  pdf.roundedRect(W / 2 - 30, y, 60, 11, 3, 3, 'F');
  pdf.setFontSize(9);
  pdf.setTextColor(...navy);
  pdf.setFont('helvetica', 'bold');
  pdf.text('BOOK FREE DEMO', W / 2, y + 7.5, { align: 'center' });

  // Save
  const filename = `MindPeak-${data.exam}-${data.subject}-Formula-Sheet-${new Date().getFullYear()}.pdf`;
  pdf.save(filename);
}
