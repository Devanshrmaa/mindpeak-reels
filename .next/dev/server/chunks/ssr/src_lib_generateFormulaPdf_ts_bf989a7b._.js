module.exports = [
"[project]/src/lib/generateFormulaPdf.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// jsPDF is dynamically imported to keep it out of the main bundle (~300KB)
__turbopack_context__.s([
    "generateFormulaPdf",
    ()=>generateFormulaPdf
]);
/**
 * Fetch a font file and return as base64 string for jsPDF embedding.
 */ async function fetchFontBase64(url) {
    const res = await fetch(url);
    const buf = await res.arrayBuffer();
    const bytes = new Uint8Array(buf);
    let binary = '';
    for(let i = 0; i < bytes.length; i++){
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}
function loadImage(src) {
    return new Promise((resolve, reject)=>{
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = ()=>resolve(img);
        img.onerror = reject;
        img.src = src;
    });
}
async function generateFormulaPdf(data) {
    // Load jsPDF dynamically + font + logo in parallel
    const [{ jsPDF }, fontBase64, logoImg] = await Promise.all([
        __turbopack_context__.A("[project]/node_modules/jspdf/dist/jspdf.node.min.js [app-ssr] (ecmascript, async loader)"),
        fetchFontBase64('/fonts/NotoSans-Regular.ttf'),
        loadImage('/images/mindpeak-logo-pdf.jpeg').catch(()=>null)
    ]);
    const pdf = new jsPDF('p', 'mm', 'a4');
    // Register Noto Sans (Unicode-capable)
    pdf.addFileToVFS('NotoSans-Regular.ttf', fontBase64);
    pdf.addFont('NotoSans-Regular.ttf', 'NotoSans', 'normal');
    const FONT = 'NotoSans';
    const W = 210, H = 297, ML = 15, CW = W - ML - 15, BM = 18;
    let y = 0;
    const navy = [
        13,
        17,
        38
    ];
    const gold = [
        212,
        175,
        55
    ];
    const white = [
        255,
        255,
        255
    ];
    const lightGray = [
        180,
        185,
        200
    ];
    const dimText = [
        140,
        148,
        170
    ];
    const cardBg = [
        22,
        28,
        55
    ];
    const cardBorder = [
        40,
        48,
        80
    ];
    const freqColors = {
        'must-know': [
            220,
            50,
            50
        ],
        'high': [
            230,
            150,
            20
        ],
        'medium': [
            50,
            120,
            230
        ],
        'low': [
            100,
            110,
            130
        ]
    };
    const freqLabels = {
        'must-know': 'MUST KNOW',
        'high': 'HIGH',
        'medium': 'MEDIUM',
        'low': 'LOW'
    };
    const freqCounts = {
        'must-know': 0,
        high: 0,
        medium: 0,
        low: 0
    };
    data.chapters.forEach((ch)=>ch.formulas.forEach((f)=>{
            freqCounts[f.freq]++;
        }));
    // Helpers
    function setFont(size, style = 'normal') {
        pdf.setFont(FONT, style);
        pdf.setFontSize(size);
    }
    function bg() {
        pdf.setFillColor(...navy);
        pdf.rect(0, 0, W, H, 'F');
    }
    function footer() {
        setFont(6.5);
        pdf.setTextColor(...dimText);
        pdf.text('MindPeak Institute  |  mindpeakinstitute.com  |  +91 82194 57704', W / 2, H - 6, {
            align: 'center'
        });
    }
    function newPage() {
        pdf.addPage();
        bg();
        footer();
        setFont(10);
        pdf.setTextColor(...white);
        y = 15;
    }
    function need(h) {
        if (y + h > H - BM) newPage();
    }
    function split(text, maxW, size, style = 'normal') {
        setFont(size, style);
        return pdf.splitTextToSize(text, maxW);
    }
    // ── Cover ──
    bg();
    pdf.setFillColor(...gold);
    pdf.rect(0, 0, W, 3, 'F');
    // Logo
    y = 40;
    const logoSize = 30;
    if (logoImg) {
        pdf.addImage(logoImg, 'JPEG', W / 2 - logoSize / 2, y - logoSize / 2, logoSize, logoSize);
    } else {
        pdf.setFillColor(...gold);
        pdf.circle(W / 2, y, 13, 'F');
        setFont(15, 'bold');
        pdf.setTextColor(...navy);
        pdf.text('MP', W / 2, y + 5.5, {
            align: 'center'
        });
    }
    // Title
    y = 75;
    setFont(26, 'bold');
    pdf.setTextColor(...white);
    pdf.text(data.heroHeading, W / 2, y, {
        align: 'center'
    });
    y += 12;
    setFont(20, 'bold');
    pdf.setTextColor(...gold);
    pdf.text(data.heroHighlight, W / 2, y, {
        align: 'center'
    });
    y += 10;
    setFont(13);
    pdf.setTextColor(...lightGray);
    pdf.text(`${data.exam} ${new Date().getFullYear()}`, W / 2, y, {
        align: 'center'
    });
    // Stats
    y += 18;
    const stats = [
        {
            label: 'Total Formulas',
            value: `${data.totalFormulas}+`
        },
        {
            label: 'Chapters',
            value: `${data.chapters.length}`
        },
        {
            label: 'Must-Know',
            value: `${freqCounts['must-know']}`
        }
    ];
    const sw = CW / 3;
    stats.forEach((st, i)=>{
        const cx = ML + sw * i + sw / 2;
        pdf.setFillColor(...cardBg);
        pdf.roundedRect(ML + sw * i + 3, y - 8, sw - 6, 22, 3, 3, 'F');
        setFont(17, 'bold');
        pdf.setTextColor(...gold);
        pdf.text(st.value, cx, y + 2, {
            align: 'center'
        });
        setFont(7.5);
        pdf.setTextColor(...dimText);
        pdf.text(st.label, cx, y + 9, {
            align: 'center'
        });
    });
    // Description
    y += 28;
    const descLines = split(data.heroParagraph, CW - 20, 9.5);
    pdf.setTextColor(...lightGray);
    pdf.text(descLines, W / 2, y, {
        align: 'center'
    });
    // Legend
    y += descLines.length * 4.5 + 12;
    setFont(8, 'bold');
    pdf.setTextColor(...white);
    pdf.text('FREQUENCY LEGEND', ML + 4, y);
    y += 6;
    const tags = [
        'must-know',
        'high',
        'medium',
        'low'
    ];
    tags.forEach((tag, i)=>{
        const cx = ML + 4 + i * 44;
        pdf.setFillColor(...freqColors[tag]);
        pdf.roundedRect(cx, y - 3, 3.5, 3.5, 0.5, 0.5, 'F');
        setFont(6.5);
        pdf.setTextColor(...lightGray);
        pdf.text(`${freqLabels[tag]} (${freqCounts[tag]})`, cx + 5, y);
    });
    // Cover bottom
    y = H - 45;
    pdf.setFillColor(...gold);
    pdf.rect(ML, y, CW, 0.4, 'F');
    y += 7;
    setFont(10, 'bold');
    pdf.setTextColor(...gold);
    pdf.text('MINDPEAK INSTITUTE', W / 2, y, {
        align: 'center'
    });
    y += 5;
    setFont(8);
    pdf.setTextColor(...lightGray);
    pdf.text('Personalized 1-on-1 JEE & NEET Coaching', W / 2, y, {
        align: 'center'
    });
    footer();
    // ── Formula Pages ──
    data.chapters.forEach((chapter, chIdx)=>{
        newPage();
        // Chapter header bar
        pdf.setFillColor(...gold);
        pdf.roundedRect(ML, y, CW, 14, 2, 2, 'F');
        setFont(11, 'bold');
        pdf.setTextColor(...navy);
        pdf.text(`${chIdx + 1}. ${chapter.name}`, ML + 5, y + 9);
        setFont(8, 'bold');
        pdf.text(`${chapter.formulas.length} formulas`, ML + CW - 30, y + 9);
        y += 19;
        // Two-column formula cards
        const gap = 4;
        const colW = (CW - gap) / 2;
        const textW = colW - 14;
        for(let i = 0; i < chapter.formulas.length; i += 2){
            const left = chapter.formulas[i];
            const right = i + 1 < chapter.formulas.length ? chapter.formulas[i + 1] : null;
            const calcH = (f)=>{
                const nl = split(f.name, textW, 8.5, 'bold').length;
                const el = split(f.expression, textW, 8).length;
                const notL = f.note ? split(f.note, textW - 4, 6.5, 'italic').length : 0;
                return 10 + nl * 4 + el * 4.5 + (notL > 0 ? notL * 3.5 + 3 : 0) + 4;
            };
            const lh = calcH(left);
            const rh = right ? calcH(right) : 0;
            const rowH = Math.max(lh, rh);
            need(rowH + 3);
            const drawCard = (f, x, h)=>{
                // Card bg
                pdf.setFillColor(...cardBg);
                pdf.roundedRect(x, y, colW, h, 2, 2, 'F');
                pdf.setDrawColor(...cardBorder);
                pdf.setLineWidth(0.3);
                pdf.roundedRect(x, y, colW, h, 2, 2, 'S');
                // Left accent
                pdf.setFillColor(...freqColors[f.freq]);
                pdf.rect(x, y + 2, 1.2, h - 4, 'F');
                // Badge
                const badgeW = freqLabels[f.freq].length * 1.8 + 6;
                pdf.setFillColor(...freqColors[f.freq]);
                pdf.roundedRect(x + colW - badgeW - 3, y + 3, badgeW, 5, 1, 1, 'F');
                setFont(5.5, 'bold');
                pdf.setTextColor(...white);
                pdf.text(freqLabels[f.freq], x + colW - badgeW / 2 - 3, y + 6.5, {
                    align: 'center'
                });
                // Name
                let fy = y + 9;
                setFont(8.5, 'bold');
                pdf.setTextColor(...white);
                const nameL = split(f.name, textW, 8.5, 'bold');
                nameL.forEach((line)=>{
                    pdf.text(line, x + 5, fy);
                    fy += 4;
                });
                // Expression (now renders Unicode symbols natively!)
                fy += 1.5;
                setFont(8);
                pdf.setTextColor(...gold);
                const exprL = split(f.expression, textW, 8);
                exprL.forEach((line)=>{
                    pdf.text(line, x + 5, fy);
                    fy += 4.5;
                });
                // Note
                if (f.note) {
                    fy += 1.5;
                    setFont(6.5, 'italic');
                    pdf.setTextColor(...dimText);
                    const noteL = split(f.note, textW - 4, 6.5, 'italic');
                    noteL.forEach((line)=>{
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
        setFont(12, 'bold');
        pdf.setTextColor(...navy);
        pdf.text('Pro Tips from Top Scorers', ML + 5, y + 8);
        y += 18;
        data.proTips.forEach((tip, i)=>{
            const tipLines = split(tip, CW - 20, 8.5);
            const tipH = tipLines.length * 4.5 + 8;
            need(tipH + 3);
            pdf.setFillColor(...cardBg);
            pdf.roundedRect(ML, y, CW, tipH, 2, 2, 'F');
            pdf.setDrawColor(...cardBorder);
            pdf.setLineWidth(0.3);
            pdf.roundedRect(ML, y, CW, tipH, 2, 2, 'S');
            pdf.setFillColor(...gold);
            pdf.circle(ML + 8, y + tipH / 2, 4, 'F');
            setFont(9, 'bold');
            pdf.setTextColor(...navy);
            pdf.text(`${i + 1}`, ML + 8, y + tipH / 2 + 3, {
                align: 'center'
            });
            setFont(8.5);
            pdf.setTextColor(...lightGray);
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
        pdf.setFillColor(...gold);
        pdf.circle(W / 2, y, 16, 'F');
        setFont(17, 'bold');
        pdf.setTextColor(...navy);
        pdf.text('MP', W / 2, y + 6, {
            align: 'center'
        });
    }
    y += 28;
    setFont(22, 'bold');
    pdf.setTextColor(...white);
    pdf.text('MINDPEAK INSTITUTE', W / 2, y, {
        align: 'center'
    });
    y += 10;
    setFont(11);
    pdf.setTextColor(...gold);
    pdf.text('Personalized 1-on-1 JEE & NEET Coaching', W / 2, y, {
        align: 'center'
    });
    y += 18;
    setFont(10);
    pdf.setTextColor(...lightGray);
    [
        'Book your FREE demo class today!',
        '',
        'mindpeakinstitute.com',
        'WhatsApp: +91 82194 57704',
        'info@mindpeakinstitute.com'
    ].forEach((line)=>{
        pdf.text(line, W / 2, y, {
            align: 'center'
        });
        y += 6;
    });
    y += 8;
    pdf.setFillColor(...gold);
    pdf.roundedRect(W / 2 - 30, y, 60, 11, 3, 3, 'F');
    setFont(9, 'bold');
    pdf.setTextColor(...navy);
    pdf.text('BOOK FREE DEMO', W / 2, y + 7.5, {
        align: 'center'
    });
    const filename = `MindPeak-${data.exam}-${data.subject}-Formula-Sheet-${new Date().getFullYear()}.pdf`;
    pdf.save(filename);
}
}),
];

//# sourceMappingURL=src_lib_generateFormulaPdf_ts_bf989a7b._.js.map