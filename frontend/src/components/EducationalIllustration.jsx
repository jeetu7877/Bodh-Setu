import React from 'react';

export const EducationalIllustration = () => {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-4/3 flex items-center justify-center p-4">
      {/* Soft Pastel Background Blobs */}
      <div className="absolute w-64 h-64 bg-purple-100/70 rounded-full blur-3xl -top-6 -left-6 pointer-events-none" />
      <div className="absolute w-64 h-64 bg-sky-100/70 rounded-full blur-3xl -bottom-6 -right-6 pointer-events-none" />
      <div className="absolute w-52 h-52 bg-emerald-100/60 rounded-full blur-2xl top-1/4 left-1/4 pointer-events-none" />

      {/* SVG Educational Illustration */}
      <svg
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-sm relative z-10"
      >
        {/* Decorative Floating Stars / Sparks */}
        <path d="M70 50L73 60L83 63L73 66L70 76L67 66L57 63L67 60L70 50Z" fill="#FDE047" opacity="0.9" />
        <path d="M330 70L332 78L340 80L332 82L330 90L328 82L320 80L328 78L330 70Z" fill="#F472B6" opacity="0.8" />
        <path d="M350 200L352 206L358 208L352 210L350 216L348 210L342 208L348 206L350 200Z" fill="#38BDF8" opacity="0.8" />
        <circle cx="50" cy="180" r="4" fill="#A78BFA" opacity="0.7" />
        <circle cx="360" cy="130" r="5" fill="#34D399" opacity="0.7" />

        {/* Bridge of Understanding (Setu) */}
        <path
          d="M60 230 C 130 140, 270 140, 340 230"
          stroke="#C7D2FE"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path
          d="M75 230 C 135 155, 265 155, 325 230"
          stroke="#E0E7FF"
          strokeWidth="4"
          strokeDasharray="6 6"
        />

        {/* Bridge Pillars */}
        <line x1="140" y1="180" x2="140" y2="240" stroke="#E2E8F0" strokeWidth="4" strokeLinecap="round" />
        <line x1="200" y1="165" x2="200" y2="240" stroke="#E2E8F0" strokeWidth="4" strokeLinecap="round" />
        <line x1="260" y1="180" x2="260" y2="240" stroke="#E2E8F0" strokeWidth="4" strokeLinecap="round" />

        {/* Floating Open Book of Wisdom */}
        <g transform="translate(145, 90)">
          {/* Left Page */}
          <path
            d="M55 45 C 35 38, 10 40, 0 45 L 0 10 C 10 5, 35 3, 55 10 Z"
            fill="#FFFFFF"
            stroke="#818CF8"
            strokeWidth="3"
          />
          {/* Right Page */}
          <path
            d="M55 45 C 75 38, 100 40, 110 45 L 110 10 C 100 5, 75 3, 55 10 Z"
            fill="#FFFFFF"
            stroke="#818CF8"
            strokeWidth="3"
          />
          {/* Bookmark Ribbon */}
          <path d="M55 10 L 55 55 L 48 48 L 42 55 L 42 10 Z" fill="#FB7185" />
          {/* Subtle text lines on book */}
          <line x1="10" y1="20" x2="45" y2="18" stroke="#E0E7FF" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="10" y1="28" x2="40" y2="26" stroke="#E0E7FF" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="65" y1="18" x2="100" y2="20" stroke="#E0E7FF" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="65" y1="26" x2="95" y2="28" stroke="#E0E7FF" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* Learning Alphabet & Shape Blocks (Mint Green & Lavender & Sky Blue) */}
        {/* Block 1: Mint Block */}
        <g transform="translate(80, 180)">
          <rect x="0" y="0" width="44" height="44" rx="10" fill="#A7F3D0" />
          <rect x="3" y="3" width="38" height="38" rx="8" fill="#ECFDF5" />
          <text x="14" y="28" fontFamily="system-ui, sans-serif" fontSize="22" fontWeight="800" fill="#059669">
            A
          </text>
        </g>

        {/* Block 2: Sky Blue Block */}
        <g transform="translate(275, 175)">
          <rect x="0" y="0" width="44" height="44" rx="10" fill="#BAE6FD" />
          <rect x="3" y="3" width="38" height="38" rx="8" fill="#F0F9FF" />
          <text x="14" y="28" fontFamily="system-ui, sans-serif" fontSize="22" fontWeight="800" fill="#0284C7">
            B
          </text>
        </g>

        {/* Center Heart Emblem of Understanding */}
        <circle cx="200" cy="115" r="20" fill="#EEF2FF" stroke="#6366F1" strokeWidth="2.5" />
        <path
          d="M200 123 C 193 115, 189 110, 192 106 C 195 102, 199 104, 200 107 C 201 104, 205 102, 208 106 C 211 110, 207 115, 200 123 Z"
          fill="#EC4899"
        />

        {/* Plant / Sprout of Growth */}
        <g transform="translate(193, 220)">
          <path d="M7 20 C 7 10, 2 5, 0 0 C 10 3, 14 10, 7 20 Z" fill="#34D399" />
          <path d="M7 20 C 7 12, 13 6, 16 2 C 14 9, 10 15, 7 20 Z" fill="#10B981" />
          <line x1="7" y1="20" x2="7" y2="28" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* Gentle Horizon Line */}
        <line x1="40" y1="248" x2="360" y2="248" stroke="#F1F5F9" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  );
};
