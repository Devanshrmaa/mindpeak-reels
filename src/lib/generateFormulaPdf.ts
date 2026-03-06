import { jsPDF } from 'jspdf';
import type { FormulaSheetData, FrequencyTag } from '@/data/formulaSheetData';

/**
 * Sanitize Unicode characters that jsPDF's built-in fonts can't render.
 */
function sanitize(text: string): string {
  const map: Record<string, string> = {
    // Subscripts
    '\u2080': '0', '\u2081': '1', '\u2082': '2', '\u2083': '3', '\u2084': '4',
    '\u2085': '5', '\u2086': '6', '\u2087': '7', '\u2088': '8', '\u2089': '9',
    '\u2090': 'a', '\u2091': 'e', '\u2092': 'o', '\u2093': 'x', '\u2095': 'h',
    '\u2096': 'k', '\u2097': 'l', '\u2098': 'm', '\u2099': 'n', '\u209A': 'p',
    '\u209B': 's', '\u209C': 't', '\u1D62': 'i', '\u2C7C': 'j',
    // Superscripts
    '\u2070': '^0', '\u00B9': '^1', '\u00B2': '^2', '\u00B3': '^3', '\u2074': '^4',
    '\u2075': '^5', '\u2076': '^6', '\u2077': '^7', '\u2078': '^8', '\u2079': '^9',
    '\u207A': '^+', '\u207B': '^-', '\u207F': '^n',
    // Greek (short forms for readability)
    '\u0394': 'D', '\u03B1': 'a', '\u03B2': 'b', '\u03B3': 'y',
    '\u03B4': 'd', '\u03B5': 'e', '\u03B7': 'n', '\u03B8': 'O',
    '\u03BA': 'k', '\u03BB': 'L', '\u03BC': 'u', '\u03BD': 'v',
    '\u03C0': 'pi', '\u03C1': 'p', '\u03C3': 's', '\u03C4': 't',
    '\u03C6': 'f', '\u03C7': 'X', '\u03C8': 'Y', '\u03C9': 'w',
    '\u03D5': 'f', '\u03A3': 'E', '\u03A9': 'O', '\u03A6': 'F',
    '\u03A0': 'P', '\u039B': 'A',
    // Symbols & math operators
    '\u2212': '-',  // MINUS SIGN — critical!
    '\u2192': '->', '\u2190': '<-', '\u2265': '>=', '\u2264': '<=', '\u2260': '!=',
    '\u00B7': '.', '\u2219': '.', '\u00D7': 'x', '\u00F7': '/',
    '\u221A': 'sqrt', '\u221E': 'inf', '\u2211': 'Sum', '\u222B': 'Int',
    '\u2248': '~=', '\u00B0': 'deg', '\u212B': 'A',
    '\u2013': '-', '\u2014': '-', '\u00BD': '1/2',
    '\u2153': '1/3', '\u2154': '2/3', '\u00BC': '1/4', '\u00BE': '3/4',
    '\u2022': '.', '\u220F': 'Prod', '\u2261': '===',
    '\u00B1': '+-',  // plus-minus
    '\u2032': "'",   // prime
    '\u2033': "''",  // double prime
    '\u00B5': 'u',   // micro sign
    '\u2026': '...', // ellipsis
    '\u201C': '"', '\u201D': '"', '\u2018': "'", '\u2019': "'",
  };
  let r = text;
  for (const [u, a] of Object.entries(map)) r = r.replaceAll(u, a);
  // Strip any remaining non-ASCII chars that jsPDF can't render
  r = r.replace(/[^\x00-\x7F]/g, '?');
  return r;
}

const s = sanitize; // shorthand

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

export async function generateFormulaPdf(data: FormulaSheetData): Promise<void> {
  let logoImg: HTMLImageElement | null = null;
  try { logoImg = await loadImage('/images/mindpeak-logo-pdf.jpeg'); } catch { /* fallback to text */ }
  const pdf = new jsPDF('p', 'mm', 'a4');
  const W = 210, H = 297, ML = 15, CW = W - ML - 15, BM = 18;
  let y = 0;

  const navy: [number, number, number] = [13, 17, 38];
  const gold: [number, number, number] = [212, 175, 55];
  const white: [number, number, number] = [255, 255, 255];
  const lightGray: [number, number, number] = [180, 185, 200];
  const dimText: [number, number, number] = [140, 148, 170];
  const cardBg: [number, number, number] = [22, 28, 55];
  const cardBorder: [number, number, number] = [40, 48, 80];

  const freqColors: Record<FrequencyTag, [number, number, number]> = {
    'must-know': [220, 50, 50], 'high': [230, 150, 20],
    'medium': [50, 120, 230], 'low': [100, 110, 130],
  };
  const freqLabels: Record<FrequencyTag, string> = {
    'must-know': 'MUST KNOW', 'high': 'HIGH', 'medium': 'MEDIUM', 'low': 'LOW',
  };

  const freqCounts: Record<string, number> = { 'must-know': 0, high: 0, medium: 0, low: 0 };
  data.chapters.forEach(ch => ch.formulas.forEach(f => { freqCounts[f.freq]++; }));

  function bg() { pdf.setFillColor(...navy); pdf.rect(0, 0, W, H, 'F'); }
  function footer() {
    pdf.setFontSize(6.5); pdf.setTextColor(...dimText);
    pdf.setFont('helvetica', 'normal');
    pdf.text('MindPeak Institute  |  mindpeakinstitute.com  |  +91 82194 57704', W / 2, H - 6, { align: 'center' });
  }
  function newPage() {
    pdf.addPage();
    bg();
    footer();
    // Reset font state for new page content
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(10);
    pdf.setTextColor(...white);
    y = 15;
  }
  function need(h: number) { if (y + h > H - BM) newPage(); }

  // Wrapper to always sanitize + set font before splitTextToSize
  function splitSafe(text: string, maxW: number, fontSize: number, style: string = 'normal'): string[] {
    pdf.setFont('helvetica', style);
    pdf.setFontSize(fontSize);
    return pdf.splitTextToSize(s(text), maxW);
  }

  // ── Cover ──
  bg();
  pdf.setFillColor(...gold);
  pdf.rect(0, 0, W, 3, 'F');

  y = 40;
  const logoSize = 30;
  if (logoImg) {
    pdf.addImage(logoImg, 'JPEG', W / 2 - logoSize / 2, y - logoSize / 2, logoSize, logoSize);
  } else {
    pdf.setFillColor(...gold);
    pdf.circle(W / 2, y, 13, 'F');
    pdf.setFontSize(15); pdf.setTextColor(...navy); pdf.setFont('helvetica', 'bold');
    pdf.text('MP', W / 2, y + 5.5, { align: 'center' });
  }

  y = 75;
  pdf.setFontSize(26); pdf.setTextColor(...white); pdf.setFont('helvetica', 'bold');
  pdf.text(s(data.heroHeading), W / 2, y, { align: 'center' });
  y += 12;
  pdf.setFontSize(20); pdf.setTextColor(...gold);
  pdf.text(s(data.heroHighlight), W / 2, y, { align: 'center' });
  y += 10;
  pdf.setFontSize(13); pdf.setTextColor(...lightGray); pdf.setFont('helvetica', 'normal');
  pdf.text(s(`${data.exam} ${new Date().getFullYear()}`), W / 2, y, { align: 'center' });

  // Stats
  y += 18;
  const stats = [
    { label: 'Total Formulas', value: `${data.totalFormulas}+` },
    { label: 'Chapters', value: `${data.chapters.length}` },
    { label: 'Must-Know', value: `${freqCounts['must-know']}` },
  ];
  const sw = CW / 3;
  stats.forEach((st, i) => {
    const cx = ML + sw * i + sw / 2;
    pdf.setFillColor(...cardBg);
    pdf.roundedRect(ML + sw * i + 3, y - 8, sw - 6, 22, 3, 3, 'F');
    pdf.setFontSize(17); pdf.setTextColor(...gold); pdf.setFont('helvetica', 'bold');
    pdf.text(st.value, cx, y + 2, { align: 'center' });
    pdf.setFontSize(7.5); pdf.setTextColor(...dimText); pdf.setFont('helvetica', 'normal');
    pdf.text(st.label, cx, y + 9, { align: 'center' });
  });

  // Description
  y += 28;
  const descLines = splitSafe(data.heroParagraph, CW - 20, 9.5);
  pdf.setTextColor(...lightGray);
  pdf.text(descLines, W / 2, y, { align: 'center' });

  // Legend
  y += descLines.length * 4.5 + 12;
  pdf.setFontSize(8); pdf.setFont('helvetica', 'bold'); pdf.setTextColor(...white);
  pdf.text('FREQUENCY LEGEND', ML + 4, y);
  y += 6;
  const tags: FrequencyTag[] = ['must-know', 'high', 'medium', 'low'];
  tags.forEach((tag, i) => {
    const cx = ML + 4 + i * 44;
    pdf.setFillColor(...freqColors[tag]);
    pdf.roundedRect(cx, y - 3, 3.5, 3.5, 0.5, 0.5, 'F');
    pdf.setFontSize(6.5); pdf.setTextColor(...lightGray); pdf.setFont('helvetica', 'normal');
    pdf.text(`${freqLabels[tag]} (${freqCounts[tag]})`, cx + 5, y);
  });

  // Cover bottom
  y = H - 45;
  pdf.setFillColor(...gold); pdf.rect(ML, y, CW, 0.4, 'F');
  y += 7;
  pdf.setFontSize(10); pdf.setTextColor(...gold); pdf.setFont('helvetica', 'bold');
  pdf.text('MINDPEAK INSTITUTE', W / 2, y, { align: 'center' });
  y += 5;
  pdf.setFontSize(8); pdf.setTextColor(...lightGray); pdf.setFont('helvetica', 'normal');
  pdf.text('Personalized 1-on-1 JEE & NEET Coaching', W / 2, y, { align: 'center' });
  footer();

  // ── Formula Pages ──
  data.chapters.forEach((chapter, chIdx) => {
    newPage();

    // Chapter header bar
    pdf.setFillColor(...gold);
    pdf.roundedRect(ML, y, CW, 14, 2, 2, 'F');
    pdf.setFontSize(11); pdf.setTextColor(...navy); pdf.setFont('helvetica', 'bold');
    pdf.text(s(`${chIdx + 1}. ${chapter.name}`), ML + 5, y + 9);
    pdf.setFontSize(8);
    pdf.text(`${chapter.formulas.length} formulas`, ML + CW - 30, y + 9);
    y += 19;

    // Two-column formula cards
    const gap = 4;
    const colW = (CW - gap) / 2;
    const textW = colW - 14;

    for (let i = 0; i < chapter.formulas.length; i += 2) {
      const left = chapter.formulas[i];
      const right = i + 1 < chapter.formulas.length ? chapter.formulas[i + 1] : null;

      const calcH = (f: typeof left) => {
        const nl = splitSafe(f.name, textW, 8.5, 'bold').length;
        const el = splitSafe(f.expression, textW, 8, 'normal').length;
        const notL = f.note ? splitSafe(f.note, textW - 4, 6.5, 'italic').length : 0;
        return 10 + nl * 4 + el * 4.5 + (notL > 0 ? notL * 3.5 + 3 : 0) + 4;
      };

      const lh = calcH(left);
      const rh = right ? calcH(right) : 0;
      const rowH = Math.max(lh, rh);
      need(rowH + 3);

      const drawCard = (f: typeof left, x: number, h: number) => {
        pdf.setFillColor(...cardBg);
        pdf.roundedRect(x, y, colW, h, 2, 2, 'F');
        pdf.setDrawColor(...cardBorder); pdf.setLineWidth(0.3);
        pdf.roundedRect(x, y, colW, h, 2, 2, 'S');

        // Left accent
        pdf.setFillColor(...freqColors[f.freq]);
        pdf.rect(x, y + 2, 1.2, h - 4, 'F');

        // Badge
        const badgeW = freqLabels[f.freq].length * 1.8 + 6;
        pdf.setFillColor(...freqColors[f.freq]);
        pdf.roundedRect(x + colW - badgeW - 3, y + 3, badgeW, 5, 1, 1, 'F');
        pdf.setFontSize(5.5); pdf.setTextColor(...white); pdf.setFont('helvetica', 'bold');
        pdf.text(freqLabels[f.freq], x + colW - badgeW / 2 - 3, y + 6.5, { align: 'center' });

        // Name
        let fy = y + 9;
        pdf.setFontSize(8.5); pdf.setTextColor(...white); pdf.setFont('helvetica', 'bold');
        const nameL = splitSafe(f.name, textW, 8.5, 'bold');
        nameL.forEach((line: string) => { pdf.text(line, x + 5, fy); fy += 4; });

        // Expression
        fy += 1.5;
        pdf.setFontSize(8); pdf.setTextColor(...gold); pdf.setFont('helvetica', 'normal');
        const exprL = splitSafe(f.expression, textW, 8, 'normal');
        exprL.forEach((line: string) => { pdf.text(line, x + 5, fy); fy += 4.5; });

        // Note
        if (f.note) {
          fy += 1.5;
          pdf.setFontSize(6.5); pdf.setTextColor(...dimText); pdf.setFont('helvetica', 'italic');
          const noteL = splitSafe(f.note, textW - 4, 6.5, 'italic');
          noteL.forEach((line: string) => { pdf.text('> ' + line, x + 5, fy); fy += 3.5; });
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
    pdf.setFontSize(12); pdf.setTextColor(...navy); pdf.setFont('helvetica', 'bold');
    pdf.text('Pro Tips from Top Scorers', ML + 5, y + 8);
    y += 18;

    data.proTips.forEach((tip, i) => {
      pdf.setFont('helvetica', 'normal'); pdf.setFontSize(8.5);
      const tipLines = pdf.splitTextToSize(s(tip), CW - 20);
      const tipH = tipLines.length * 4.5 + 8;
      need(tipH + 3);

      pdf.setFillColor(...cardBg);
      pdf.roundedRect(ML, y, CW, tipH, 2, 2, 'F');
      pdf.setDrawColor(...cardBorder); pdf.setLineWidth(0.3);
      pdf.roundedRect(ML, y, CW, tipH, 2, 2, 'S');

      pdf.setFillColor(...gold);
      pdf.circle(ML + 8, y + tipH / 2, 4, 'F');
      pdf.setFontSize(9); pdf.setTextColor(...navy); pdf.setFont('helvetica', 'bold');
      pdf.text(`${i + 1}`, ML + 8, y + tipH / 2 + 3, { align: 'center' });

      pdf.setFontSize(8.5); pdf.setTextColor(...lightGray); pdf.setFont('helvetica', 'normal');
      pdf.text(tipLines, ML + 16, y + 7);
      y += tipH + 3;
    });
  }

  // ── Back Cover ──
  newPage();
  y = H / 2 - 40;
  const backLogoSize = 36;
  if (logoImg) {
    pdf.addImage(logoImg, 'JPEG', W / 2 - backLogoSize / 2, y - backLogoSize / 2, backLogoSize, backLogoSize);
  } else {
    pdf.setFillColor(...gold); pdf.circle(W / 2, y, 16, 'F');
    pdf.setFontSize(17); pdf.setTextColor(...navy); pdf.setFont('helvetica', 'bold');
    pdf.text('MP', W / 2, y + 6, { align: 'center' });
  }

  y += 28;
  pdf.setFontSize(22); pdf.setTextColor(...white); pdf.setFont('helvetica', 'bold');
  pdf.text('MINDPEAK INSTITUTE', W / 2, y, { align: 'center' });
  y += 10;
  pdf.setFontSize(11); pdf.setTextColor(...gold); pdf.setFont('helvetica', 'normal');
  pdf.text('Personalized 1-on-1 JEE & NEET Coaching', W / 2, y, { align: 'center' });

  y += 18;
  pdf.setFontSize(10); pdf.setTextColor(...lightGray);
  ['Book your FREE demo class today!', '', 'mindpeakinstitute.com', 'WhatsApp: +91 82194 57704', 'info@mindpeakinstitute.com'].forEach(line => {
    pdf.text(line, W / 2, y, { align: 'center' }); y += 6;
  });

  y += 8;
  pdf.setFillColor(...gold); pdf.roundedRect(W / 2 - 30, y, 60, 11, 3, 3, 'F');
  pdf.setFontSize(9); pdf.setTextColor(...navy); pdf.setFont('helvetica', 'bold');
  pdf.text('BOOK FREE DEMO', W / 2, y + 7.5, { align: 'center' });

  const filename = `MindPeak-${data.exam}-${data.subject}-Formula-Sheet-${new Date().getFullYear()}.pdf`;
  pdf.save(filename);
}
