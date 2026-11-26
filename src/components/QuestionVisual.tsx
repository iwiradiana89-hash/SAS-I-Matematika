import React from 'react';
import { QuestionVisual as QuestionVisualType } from '../types';

interface QuestionVisualProps {
  visual?: QuestionVisualType;
  compact?: boolean;
}

const PencilBundleSVG: React.FC<{ index: number }> = ({ index }) => (
  <svg width="72" height="82" viewBox="0 0 72 82" aria-label={`Ikat 10 pensil ke-${index + 1}`}>
    <rect x="4" y="6" width="64" height="70" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
    {[0, 1, 2, 3, 4].map((p) => (
      <g key={p} transform={`translate(${12 + p * 10}, 12)`}>
        <rect x="0" y="8" width="7" height="38" rx="1.5" fill={p % 2 === 0 ? '#F59E0B' : '#FBBF24'} stroke="#B45309" strokeWidth="0.9" />
        <polygon points="0,8 3.5,1 7,8" fill="#FDE68A" stroke="#B45309" strokeWidth="0.8" />
        <polygon points="2.3,3.5 3.5,1 4.7,3.5" fill="#1E293B" />
        <rect x="0" y="44" width="7" height="4" fill="#FB7185" />
      </g>
    ))}
    <rect x="9" y="34" width="54" height="7" rx="3.5" fill="#DC2626" />
    <text x="36" y="70" textAnchor="middle" fontSize="11" fontWeight="800" fill="#92400E">
      10 buah
    </text>
  </svg>
);

const SinglePencilSVG: React.FC<{ index: number }> = ({ index }) => (
  <svg width="20" height="58" viewBox="0 0 20 58" aria-label={`Pensil satuan ke-${index + 1}`}>
    <rect x="6" y="10" width="8" height="36" rx="1.5" fill="#38BDF8" stroke="#0369A1" strokeWidth="1" />
    <polygon points="6,10 10,2 14,10" fill="#FDE68A" stroke="#0369A1" strokeWidth="0.9" />
    <polygon points="8.5,4.8 10,2 11.5,4.8" fill="#1E293B" />
    <rect x="6" y="44" width="8" height="5" rx="1" fill="#FB7185" />
  </svg>
);

const TenBlockStackSVG: React.FC<{ index: number }> = ({ index }) => (
  <svg width="32" height="114" viewBox="0 0 32 114" aria-label={`Batang puluhan ke-${index + 1}`}>
    {Array.from({ length: 10 }).map((_, r) => (
      <rect
        key={r}
        x="4"
        y={4 + r * 10.5}
        width="24"
        height="10"
        rx="1.5"
        fill="#3B82F6"
        stroke="#1D4ED8"
        strokeWidth="1"
      />
    ))}
  </svg>
);

const SingleCubeSVG: React.FC<{ index: number }> = ({ index }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" aria-label={`Kubus satuan ke-${index + 1}`}>
    <rect x="2" y="2" width="20" height="20" rx="3" fill="#10B981" stroke="#047857" strokeWidth="1.4" />
  </svg>
);

const FruitIconSVG: React.FC<{ item: 'orange' | 'apple'; size?: number }> = ({ item, size = 22 }) => {
  if (item === 'orange') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24">
        <circle cx="12" cy="13" r="8.5" fill="#FB923C" stroke="#C2410C" strokeWidth="1.4" />
        <path d="M12 4.5 C13 2, 16 2, 16.5 4.5 C15 6, 13 5.5, 12 4.5 Z" fill="#16A34A" />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <circle cx="12" cy="13.5" r="8" fill="#EF4444" stroke="#991B1B" strokeWidth="1.4" />
      <line x1="12" y1="5.5" x2="12" y2="2.5" stroke="#78350F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 4.5 C14 2, 17 2.5, 17 5 C15 6, 13.5 5.5, 12 4.5 Z" fill="#22C55E" />
    </svg>
  );
};

const StarIconSVG: React.FC<{ color: string; stroke: string; size?: number }> = ({
  color,
  stroke,
  size = 22,
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <polygon
      points="12,2 14.9,8.6 22,9.3 16.6,14 18.2,21 12,17.3 5.8,21 7.4,14 2,9.3 9.1,8.6"
      fill={color}
      stroke={stroke}
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
  </svg>
);

const DonutSVG: React.FC<{ crossed?: boolean; index: number }> = ({ crossed, index }) => (
  <svg width="34" height="34" viewBox="0 0 34 34" aria-label={`Donat ke-${index + 1}`}>
    <circle cx="17" cy="17" r="13" fill="#FDBA74" stroke="#C2410C" strokeWidth="1.4" />
    <circle cx="17" cy="17" r="10.5" fill="#F472B6" />
    <circle cx="17" cy="17" r="4.5" fill="#FFFFFF" stroke="#C2410C" strokeWidth="1.2" />
    {crossed && (
      <g>
        <line x1="4" y1="4" x2="30" y2="30" stroke="#DC2626" strokeWidth="3.2" strokeLinecap="round" />
        <line x1="30" y1="4" x2="4" y2="30" stroke="#DC2626" strokeWidth="3.2" strokeLinecap="round" />
      </g>
    )}
  </svg>
);

const SoundTokenSVG: React.FC<{
  type: 'clap' | 'drum' | 'bell' | 'whistle' | 'unknown';
}> = ({ type }) => {
  if (type === 'unknown') {
    return (
      <svg width="42" height="42" viewBox="0 0 42 42">
        <rect x="3" y="3" width="36" height="36" rx="10" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" strokeDasharray="4 3" />
        <text x="21" y="27" textAnchor="middle" fontSize="20" fontWeight="900" fill="#B45309">
          ?
        </text>
      </svg>
    );
  }
  if (type === 'clap') {
    return (
      <svg width="42" height="42" viewBox="0 0 42 42">
        <circle cx="21" cy="21" r="18" fill="#DBEAFE" stroke="#2563EB" strokeWidth="1.8" />
        <text x="21" y="27" textAnchor="middle" fontSize="20">
          👏
        </text>
      </svg>
    );
  }
  if (type === 'drum') {
    return (
      <svg width="42" height="42" viewBox="0 0 42 42">
        <circle cx="21" cy="21" r="18" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1.8" />
        <rect x="11" y="15" width="20" height="13" rx="3" fill="#EF4444" stroke="#7F1D1D" strokeWidth="1.4" />
        <ellipse cx="21" cy="15" rx="10" ry="3.2" fill="#FEF3C7" stroke="#7F1D1D" strokeWidth="1.2" />
        <line x1="15" y1="18" x2="21" y2="27" stroke="#FEF3C7" strokeWidth="1.4" />
        <line x1="27" y1="18" x2="21" y2="27" stroke="#FEF3C7" strokeWidth="1.4" />
      </svg>
    );
  }
  if (type === 'bell') {
    return (
      <svg width="42" height="42" viewBox="0 0 42 42">
        <circle cx="21" cy="21" r="18" fill="#FEF9C3" stroke="#CA8A04" strokeWidth="1.8" />
        <path
          d="M21 9 C16 9, 13 13, 13 18 L11 25 L31 25 L29 18 C29 13, 26 9, 21 9 Z"
          fill="#FACC15"
          stroke="#854D0E"
          strokeWidth="1.5"
        />
        <circle cx="21" cy="28" r="2.8" fill="#854D0E" />
      </svg>
    );
  }
  // whistle
  return (
    <svg width="42" height="42" viewBox="0 0 42 42">
      <circle cx="21" cy="21" r="18" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.8" />
      <path
        d="M12 18 L27 18 L27 23 L21 23 A5 5 0 1 1 12 20 Z"
        fill="#22C55E"
        stroke="#14532D"
        strokeWidth="1.5"
      />
      <circle cx="16.5" cy="23.5" r="2" fill="#DCFCE7" />
    </svg>
  );
};

const ShapeTokenSVG: React.FC<{
  shape: 'triangle' | 'circle' | 'square' | 'star' | 'heart' | 'unknown';
  color: string;
  size?: 'large' | 'small' | 'normal';
}> = ({ shape, color, size = 'normal' }) => {
  const boxSize = size === 'large' ? 50 : size === 'small' ? 30 : 42;
  if (shape === 'unknown') {
    return (
      <svg width="42" height="42" viewBox="0 0 42 42">
        <rect x="3" y="3" width="36" height="36" rx="10" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" strokeDasharray="4 3" />
        <text x="21" y="27" textAnchor="middle" fontSize="20" fontWeight="900" fill="#B45309">
          ?
        </text>
      </svg>
    );
  }
  return (
    <svg width={boxSize} height={boxSize} viewBox="0 0 42 42">
      {shape === 'circle' && (
        <circle cx="21" cy="21" r="16" fill={color} stroke="#1E293B" strokeWidth="1.8" />
      )}
      {shape === 'square' && (
        <rect x="6" y="6" width="30" height="30" rx="4" fill={color} stroke="#1E293B" strokeWidth="1.8" />
      )}
      {shape === 'triangle' && (
        <polygon points="21,5 37,35 5,35" fill={color} stroke="#1E293B" strokeWidth="1.8" strokeLinejoin="round" />
      )}
      {shape === 'star' && (
        <polygon
          points="21,4 25.8,14.6 37.5,16 28.8,24 31,35.5 21,29.8 11,35.5 13.2,24 4.5,16 16.2,14.6"
          fill={color}
          stroke="#1E293B"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      )}
      {shape === 'heart' && (
        <path
          d="M21 35 C21 35 6 25.5 6 15.5 C6 10.8 9.8 7.5 14 7.5 C17 7.5 19.6 9.3 21 11.8 C22.4 9.3 25 7.5 28 7.5 C32.2 7.5 36 10.8 36 15.5 C36 25.5 21 35 21 35 Z"
          fill={color}
          stroke="#1E293B"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
};

export const QuestionVisual: React.FC<QuestionVisualProps> = ({ visual, compact = false }) => {
  if (!visual) return null;

  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-slate-50/90 ${
        compact ? 'p-3 my-2' : 'p-4 sm:p-5 mb-5'
      }`}
    >
      {visual.kind === 'tens_ones' && (
        <div className="space-y-2.5">
          <div className="flex flex-wrap items-end justify-center gap-4">
            {/* Puluhan */}
            <div className="flex flex-wrap items-end gap-2 bg-white px-3.5 py-2.5 rounded-xl border border-slate-200">
              {Array.from({ length: visual.tens }).map((_, idx) =>
                visual.itemType === 'pencil' ? (
                  <PencilBundleSVG key={idx} index={idx} />
                ) : (
                  <TenBlockStackSVG key={idx} index={idx} />
                )
              )}
            </div>
            {/* Satuan */}
            {visual.ones > 0 && (
              <div className="flex flex-wrap items-end gap-1.5 bg-white px-3.5 py-2.5 rounded-xl border border-slate-200">
                {Array.from({ length: visual.ones }).map((_, idx) =>
                  visual.itemType === 'pencil' ? (
                    <SinglePencilSVG key={idx} index={idx} />
                  ) : (
                    <SingleCubeSVG key={idx} index={idx} />
                  )
                )}
              </div>
            )}
          </div>
          {visual.caption && (
            <p className="text-center text-xs font-semibold text-slate-600">{visual.caption}</p>
          )}
        </div>
      )}

      {visual.kind === 'compare_groups' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[visual.left, visual.right].map((grp, gIdx) => (
            <div
              key={gIdx}
              className="bg-white rounded-xl border border-slate-200 p-3 flex flex-col items-center gap-2"
            >
              <span className="text-xs font-extrabold text-slate-800 px-2.5 py-0.5 rounded-full bg-slate-100">
                {grp.label}
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {Array.from({ length: grp.tens }).map((_, tIdx) => (
                  <div
                    key={tIdx}
                    className="p-1.5 rounded-lg border border-dashed border-slate-300 bg-slate-50 grid grid-cols-5 gap-0.5"
                    title="1 kelompok isi 10"
                  >
                    {Array.from({ length: 10 }).map((__, i) => (
                      <FruitIconSVG key={i} item={grp.item} size={14} />
                    ))}
                  </div>
                ))}
                <div className="flex flex-wrap gap-1 p-1.5">
                  {Array.from({ length: grp.ones }).map((_, oIdx) => (
                    <FruitIconSVG key={oIdx} item={grp.item} size={16} />
                  ))}
                </div>
              </div>
              <span className="text-[11px] font-semibold text-slate-500">
                {grp.tens} kelompok puluhan + {grp.ones} satuan
              </span>
            </div>
          ))}
        </div>
      )}

      {visual.kind === 'addition_groups' && (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="bg-white rounded-xl border border-blue-200 p-3 flex flex-col items-center gap-2">
            <span className="text-[11px] font-bold text-blue-800">{visual.leftLabel}</span>
            <div className="grid grid-cols-5 gap-1">
              {Array.from({ length: visual.leftCount }).map((_, i) => (
                <StarIconSVG key={i} color="#3B82F6" stroke="#1D4ED8" size={18} />
              ))}
            </div>
          </div>

          <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-black text-lg flex items-center justify-center shrink-0">
            +
          </div>

          <div className="bg-white rounded-xl border border-amber-200 p-3 flex flex-col items-center gap-2">
            <span className="text-[11px] font-bold text-amber-800">{visual.rightLabel}</span>
            <div className="grid grid-cols-5 gap-1">
              {Array.from({ length: visual.rightCount }).map((_, i) =>
                visual.icon === 'sticker' ? (
                  <svg key={i} width="18" height="18" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="#FDE047" stroke="#CA8A04" strokeWidth="1.4" />
                    <circle cx="9" cy="10" r="1.3" fill="#713F12" />
                    <circle cx="15" cy="10" r="1.3" fill="#713F12" />
                    <path d="M8.5 14.5 Q12 17.5 15.5 14.5" fill="none" stroke="#713F12" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ) : (
                  <StarIconSVG key={i} color="#FACC15" stroke="#CA8A04" size={18} />
                )
              )}
            </div>
          </div>
        </div>
      )}

      {visual.kind === 'subtraction_cross' && (
        <div className="space-y-2">
          <div className="bg-white rounded-xl border border-slate-200 p-3 flex flex-wrap justify-center gap-2">
            {Array.from({ length: visual.total }).map((_, i) => (
              <DonutSVG key={i} index={i} crossed={i >= visual.total - visual.crossCount} />
            ))}
          </div>
          <p className="text-center text-xs font-semibold text-slate-600">
            {visual.itemLabel} ({visual.crossCount} diberi tanda silang merah)
          </p>
        </div>
      )}

      {visual.kind === 'number_pattern' && (
        <div className="space-y-2.5">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {visual.items.map((num, idx) => (
              <React.Fragment key={idx}>
                <div
                  className={`min-w-[46px] h-12 px-3 rounded-xl flex items-center justify-center font-black text-base border-2 shadow-2xs ${
                    num === null
                      ? 'bg-amber-100 border-amber-500 border-dashed text-amber-800'
                      : visual.style === 'train'
                      ? 'bg-blue-600 border-blue-800 text-white'
                      : 'bg-white border-indigo-400 text-slate-900'
                  }`}
                >
                  {num === null ? '?' : num}
                </div>
                {idx < visual.items.length - 1 && (
                  <span className="text-slate-400 font-bold text-sm">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
          {visual.caption && (
            <p className="text-center text-xs font-semibold text-slate-600">{visual.caption}</p>
          )}
        </div>
      )}

      {visual.kind === 'sound_pattern' && (
        <div className="space-y-2.5">
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {visual.tokens.map((tok, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-1 bg-white px-2.5 py-2 rounded-xl border border-slate-200 min-w-[58px]"
              >
                <SoundTokenSVG type={tok.type} />
                <span className="text-[11px] font-extrabold text-slate-800">{tok.label}</span>
              </div>
            ))}
          </div>
          {visual.caption && (
            <p className="text-center text-xs font-semibold text-slate-600">{visual.caption}</p>
          )}
        </div>
      )}

      {visual.kind === 'shape_pattern' && (
        <div className="space-y-2.5">
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {visual.items.map((it, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center gap-1 bg-white px-2.5 py-2 rounded-xl border border-slate-200 min-w-[56px] min-h-[64px]"
              >
                <ShapeTokenSVG shape={it.shape} color={it.color} size={it.size} />
                {it.label && (
                  <span className="text-[10px] font-bold text-slate-600">{it.label}</span>
                )}
              </div>
            ))}
          </div>
          {visual.caption && (
            <p className="text-center text-xs font-semibold text-slate-600">{visual.caption}</p>
          )}
        </div>
      )}
    </div>
  );
};
