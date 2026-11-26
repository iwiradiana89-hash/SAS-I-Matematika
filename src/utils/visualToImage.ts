import { QuestionVisual } from '../types';

/**
 * Mengonversi objek QuestionVisual menjadi string SVG mandiri lalu merender ke PNG DataURL
 * agar dapat disematkan ke dalam dokumen PDF Naskah Soal (jsPDF).
 */
export function buildQuestionVisualSvg(visual: QuestionVisual): {
  svg: string;
  width: number;
  height: number;
} {
  if (visual.kind === 'tens_ones') {
    const bundleW = visual.itemType === 'pencil' ? 76 : 38;
    const oneW = visual.itemType === 'pencil' ? 22 : 28;
    const totalW = Math.max(320, visual.tens * bundleW + visual.ones * oneW + 56);
    const height = 115;

    let inner = `<rect x="1" y="1" width="${totalW - 2}" height="${height - 2}" rx="12" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>`;
    let x = 18;

    for (let t = 0; t < visual.tens; t++) {
      if (visual.itemType === 'pencil') {
        inner += `<rect x="${x}" y="12" width="66" height="72" rx="8" fill="#FEF3C7" stroke="#F59E0B" stroke-width="1.4"/>`;
        for (let p = 0; p < 5; p++) {
          const px = x + 8 + p * 10;
          inner += `<rect x="${px}" y="22" width="6" height="36" fill="${p % 2 === 0 ? '#F59E0B' : '#FBBF24'}" stroke="#B45309" stroke-width="0.8"/>`;
          inner += `<polygon points="${px},22 ${px + 3},15 ${px + 6},22" fill="#FDE68A" stroke="#B45309" stroke-width="0.7"/>`;
        }
        inner += `<rect x="${x + 5}" y="38" width="56" height="6" rx="3" fill="#DC2626"/>`;
        inner += `<text x="${x + 33}" y="76" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#92400E">10</text>`;
        x += bundleW;
      } else {
        for (let r = 0; r < 10; r++) {
          inner += `<rect x="${x}" y="${10 + r * 9}" width="24" height="8" rx="1.5" fill="#3B82F6" stroke="#1D4ED8" stroke-width="0.9"/>`;
        }
        x += bundleW;
      }
    }

    x += 12;
    for (let o = 0; o < visual.ones; o++) {
      if (visual.itemType === 'pencil') {
        inner += `<rect x="${x}" y="32" width="7" height="38" rx="1" fill="#38BDF8" stroke="#0369A1" stroke-width="0.9"/>`;
        inner += `<polygon points="${x},32 ${x + 3.5},24 ${x + 7},32" fill="#FDE68A" stroke="#0369A1" stroke-width="0.8"/>`;
        inner += `<rect x="${x}" y="68" width="7" height="5" fill="#FB7185"/>`;
        x += oneW;
      } else {
        inner += `<rect x="${x}" y="74" width="20" height="20" rx="3" fill="#10B981" stroke="#047857" stroke-width="1.2"/>`;
        x += oneW;
      }
    }

    if (visual.caption) {
      inner += `<text x="${totalW / 2}" y="106" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#475569">${escapeXml(visual.caption)}</text>`;
    }

    return {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="${totalW}" height="${height}" viewBox="0 0 ${totalW} ${height}">${inner}</svg>`,
      width: totalW,
      height,
    };
  }

  if (visual.kind === 'compare_groups') {
    const width = 460;
    const height = 115;
    let inner = `<rect x="1" y="1" width="${width - 2}" height="${height - 2}" rx="12" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>`;

    const groups = [visual.left, visual.right];
    groups.forEach((grp, gIdx) => {
      const gx = gIdx === 0 ? 12 : 238;
      inner += `<rect x="${gx}" y="10" width="210" height="95" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.2"/>`;
      inner += `<text x="${gx + 105}" y="26" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#1E293B">${escapeXml(grp.label)}</text>`;
      const fruitColor = grp.item === 'orange' ? '#FB923C' : '#EF4444';
      const fruitStroke = grp.item === 'orange' ? '#C2410C' : '#991B1B';
      let cx = gx + 14;
      for (let t = 0; t < grp.tens; t++) {
        inner += `<rect x="${cx}" y="34" width="38" height="44" rx="5" fill="#F8FAFC" stroke="#CBD5E1" stroke-dasharray="3 2"/>`;
        for (let i = 0; i < 10; i++) {
          const fx = cx + 7 + (i % 5) * 6;
          const fy = 44 + Math.floor(i / 5) * 16;
          inner += `<circle cx="${fx}" cy="${fy}" r="2.6" fill="${fruitColor}" stroke="${fruitStroke}" stroke-width="0.6"/>`;
        }
        cx += 42;
      }
      for (let o = 0; o < grp.ones; o++) {
        const fx = cx + 6 + (o % 4) * 10;
        const fy = 44 + Math.floor(o / 4) * 14;
        inner += `<circle cx="${fx}" cy="${fy}" r="3.4" fill="${fruitColor}" stroke="${fruitStroke}" stroke-width="0.7"/>`;
      }
      inner += `<text x="${gx + 105}" y="96" text-anchor="middle" font-family="Arial, sans-serif" font-size="9" fill="#64748B">${grp.tens} puluhan + ${grp.ones} satuan</text>`;
    });

    return {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${inner}</svg>`,
      width,
      height,
    };
  }

  if (visual.kind === 'addition_groups') {
    const width = 440;
    const height = 108;
    let inner = `<rect x="1" y="1" width="${width - 2}" height="${height - 2}" rx="12" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>`;

    // Left box
    inner += `<rect x="12" y="10" width="185" height="88" rx="8" fill="#FFFFFF" stroke="#BFDBFE" stroke-width="1.2"/>`;
    inner += `<text x="104" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#1E40AF">${escapeXml(visual.leftLabel)}</text>`;
    for (let i = 0; i < visual.leftCount; i++) {
      const sx = 24 + (i % 9) * 18;
      const sy = 34 + Math.floor(i / 9) * 18;
      inner += `<circle cx="${sx + 6}" cy="${sy + 6}" r="5.5" fill="#3B82F6" stroke="#1D4ED8" stroke-width="1"/>`;
    }

    // Plus
    inner += `<circle cx="220" cy="54" r="14" fill="#2563EB"/>`;
    inner += `<text x="220" y="60" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#FFFFFF">+</text>`;

    // Right box
    inner += `<rect x="243" y="10" width="185" height="88" rx="8" fill="#FFFFFF" stroke="#FDE68A" stroke-width="1.2"/>`;
    inner += `<text x="335" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#92400E">${escapeXml(visual.rightLabel)}</text>`;
    for (let i = 0; i < visual.rightCount; i++) {
      const sx = 255 + (i % 9) * 18;
      const sy = 34 + Math.floor(i / 9) * 18;
      inner += `<circle cx="${sx + 6}" cy="${sy + 6}" r="5.5" fill="#FACC15" stroke="#CA8A04" stroke-width="1"/>`;
    }

    return {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${inner}</svg>`,
      width,
      height,
    };
  }

  if (visual.kind === 'subtraction_cross') {
    const cols = 8;
    const rows = Math.ceil(visual.total / cols);
    const width = 360;
    const height = rows * 34 + 34;
    let inner = `<rect x="1" y="1" width="${width - 2}" height="${height - 2}" rx="12" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>`;

    for (let i = 0; i < visual.total; i++) {
      const c = i % cols;
      const r = Math.floor(i / cols);
      const cx = 36 + c * 40;
      const cy = 24 + r * 32;
      const crossed = i >= visual.total - visual.crossCount;
      inner += `<circle cx="${cx}" cy="${cy}" r="11" fill="#FDBA74" stroke="#C2410C" stroke-width="1.2"/>`;
      inner += `<circle cx="${cx}" cy="${cy}" r="8.5" fill="#F472B6"/>`;
      inner += `<circle cx="${cx}" cy="${cy}" r="3.5" fill="#FFFFFF" stroke="#C2410C" stroke-width="1"/>`;
      if (crossed) {
        inner += `<line x1="${cx - 11}" y1="${cy - 11}" x2="${cx + 11}" y2="${cy + 11}" stroke="#DC2626" stroke-width="2.6" stroke-linecap="round"/>`;
        inner += `<line x1="${cx + 11}" y1="${cy - 11}" x2="${cx - 11}" y2="${cy + 11}" stroke="#DC2626" stroke-width="2.6" stroke-linecap="round"/>`;
      }
    }

    inner += `<text x="${width / 2}" y="${height - 10}" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#475569">${escapeXml(visual.itemLabel)} (${visual.crossCount} disilang merah)</text>`;

    return {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${inner}</svg>`,
      width,
      height,
    };
  }

  if (visual.kind === 'number_pattern') {
    const itemW = 54;
    const width = Math.max(300, visual.items.length * itemW + 32);
    const height = visual.caption ? 82 : 66;
    let inner = `<rect x="1" y="1" width="${width - 2}" height="${height - 2}" rx="12" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>`;

    visual.items.forEach((num, idx) => {
      const bx = 18 + idx * itemW;
      const isNull = num === null;
      const bg = isNull ? '#FEF3C7' : visual.style === 'train' ? '#2563EB' : '#FFFFFF';
      const stroke = isNull ? '#D97706' : visual.style === 'train' ? '#1E40AF' : '#6366F1';
      const fg = isNull ? '#92400E' : visual.style === 'train' ? '#FFFFFF' : '#0F172A';
      inner += `<rect x="${bx}" y="14" width="40" height="36" rx="8" fill="${bg}" stroke="${stroke}" stroke-width="1.6"/>`;
      inner += `<text x="${bx + 20}" y="38" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="${fg}">${isNull ? '?' : num}</text>`;
      if (idx < visual.items.length - 1) {
        inner += `<text x="${bx + 47}" y="37" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#94A3B8">→</text>`;
      }
    });

    if (visual.caption) {
      inner += `<text x="${width / 2}" y="${height - 10}" text-anchor="middle" font-family="Arial, sans-serif" font-size="9.5" font-weight="bold" fill="#475569">${escapeXml(visual.caption)}</text>`;
    }

    return {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${inner}</svg>`,
      width,
      height,
    };
  }

  if (visual.kind === 'sound_pattern') {
    const itemW = 58;
    const width = Math.max(320, visual.tokens.length * itemW + 24);
    const height = visual.caption ? 90 : 74;
    let inner = `<rect x="1" y="1" width="${width - 2}" height="${height - 2}" rx="12" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>`;

    visual.tokens.forEach((tok, idx) => {
      const bx = 14 + idx * itemW;
      const bgMap: Record<string, string> = {
        clap: '#DBEAFE',
        drum: '#FEE2E2',
        bell: '#FEF9C3',
        whistle: '#DCFCE7',
        unknown: '#FEF3C7',
      };
      const strokeMap: Record<string, string> = {
        clap: '#2563EB',
        drum: '#DC2626',
        bell: '#CA8A04',
        whistle: '#16A34A',
        unknown: '#D97706',
      };
      const iconTextMap: Record<string, string> = {
        clap: 'TEPUK',
        drum: 'DUK',
        bell: 'BEL',
        whistle: 'PRIT',
        unknown: '?',
      };
      inner += `<rect x="${bx}" y="10" width="50" height="52" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.2"/>`;
      inner += `<circle cx="${bx + 25}" cy="28" r="12" fill="${bgMap[tok.type]}" stroke="${strokeMap[tok.type]}" stroke-width="1.4"/>`;
      inner += `<text x="${bx + 25}" y="31" text-anchor="middle" font-family="Arial, sans-serif" font-size="7" font-weight="bold" fill="#1E293B">${iconTextMap[tok.type]}</text>`;
      inner += `<text x="${bx + 25}" y="54" text-anchor="middle" font-family="Arial, sans-serif" font-size="9" font-weight="bold" fill="#0F172A">${escapeXml(tok.label)}</text>`;
    });

    if (visual.caption) {
      inner += `<text x="${width / 2}" y="${height - 10}" text-anchor="middle" font-family="Arial, sans-serif" font-size="9.5" font-weight="bold" fill="#475569">${escapeXml(visual.caption)}</text>`;
    }

    return {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${inner}</svg>`,
      width,
      height,
    };
  }

  // shape_pattern
  const itemW = 54;
  const width = Math.max(320, visual.items.length * itemW + 24);
  const height = visual.caption ? 86 : 70;
  let inner = `<rect x="1" y="1" width="${width - 2}" height="${height - 2}" rx="12" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>`;

  visual.items.forEach((it, idx) => {
    const bx = 14 + idx * itemW;
    const cx = bx + 23;
    const cy = 32;
    const scale = it.size === 'large' ? 1.15 : it.size === 'small' ? 0.68 : 0.92;
    const r = Math.round(14 * scale);

    inner += `<rect x="${bx}" y="10" width="46" height="46" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.2"/>`;
    if (it.shape === 'unknown') {
      inner += `<rect x="${cx - 13}" y="${cy - 13}" width="26" height="26" rx="6" fill="#FEF3C7" stroke="#D97706" stroke-dasharray="3 2" stroke-width="1.5"/>`;
      inner += `<text x="${cx}" y="${cy + 5}" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#B45309">?</text>`;
    } else if (it.shape === 'circle') {
      inner += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${it.color}" stroke="#1E293B" stroke-width="1.4"/>`;
    } else if (it.shape === 'square') {
      inner += `<rect x="${cx - r}" y="${cy - r}" width="${r * 2}" height="${r * 2}" rx="3" fill="${it.color}" stroke="#1E293B" stroke-width="1.4"/>`;
    } else if (it.shape === 'triangle') {
      inner += `<polygon points="${cx},${cy - r} ${cx + r},${cy + r} ${cx - r},${cy + r}" fill="${it.color}" stroke="#1E293B" stroke-width="1.4"/>`;
    } else if (it.shape === 'star') {
      inner += `<polygon points="${cx},${cy - r} ${cx + r * 0.3},${cy - r * 0.3} ${cx + r},${cy - r * 0.2} ${cx + r * 0.45},${cy + r * 0.3} ${cx + r * 0.65},${cy + r} ${cx},${cy + r * 0.55} ${cx - r * 0.65},${cy + r} ${cx - r * 0.45},${cy + r * 0.3} ${cx - r},${cy - r * 0.2} ${cx - r * 0.3},${cy - r * 0.3}" fill="${it.color}" stroke="#1E293B" stroke-width="1.2"/>`;
    } else if (it.shape === 'heart') {
      inner += `<path d="M${cx} ${cy + r} C${cx} ${cy + r} ${cx - r} ${cy + r * 0.2} ${cx - r} ${cy - r * 0.3} C${cx - r} ${cy - r * 0.8} ${cx - r * 0.3} ${cy - r} ${cx} ${cy - r * 0.4} C${cx + r * 0.3} ${cy - r} ${cx + r} ${cy - r * 0.8} ${cx + r} ${cy - r * 0.3} C${cx + r} ${cy + r * 0.2} ${cx} ${cy + r} ${cx} ${cy + r} Z" fill="${it.color}" stroke="#1E293B" stroke-width="1.2"/>`;
    }
  });

  if (visual.caption) {
    inner += `<text x="${width / 2}" y="${height - 10}" text-anchor="middle" font-family="Arial, sans-serif" font-size="9.5" font-weight="bold" fill="#475569">${escapeXml(visual.caption)}</text>`;
  }

  return {
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${inner}</svg>`,
    width,
    height,
  };
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function renderQuestionVisualToPngDataUrl(
  visual: QuestionVisual
): Promise<{ dataUrl: string; width: number; height: number } | null> {
  if (typeof window === 'undefined' || typeof document === 'undefined') return null;

  const { svg, width, height } = buildQuestionVisualSvg(visual);
  const scale = 2;

  return new Promise((resolve) => {
    const img = new Image();
    const svgBlob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = width * scale;
        canvas.height = height * scale;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          URL.revokeObjectURL(url);
          resolve(null);
          return;
        }
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.scale(scale, scale);
        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL('image/png');
        URL.revokeObjectURL(url);
        resolve({ dataUrl, width, height });
      } catch {
        URL.revokeObjectURL(url);
        resolve(null);
      }
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
      resolve(null);
    };

    img.src = url;
  });
}
