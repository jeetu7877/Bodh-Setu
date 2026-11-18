import React from 'react';

export const MinimalIllustration = () => {
  return (
    <div className="w-full max-w-xs sm:max-w-sm mx-auto flex items-center justify-center p-2">
      <svg
        viewBox="0 0 320 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto text-slate-700"
        aria-hidden="true"
      >
        {/* Subtle geometric ground guide */}
        <line x1="30" y1="150" x2="290" y2="150" stroke="#E2E8F0" strokeWidth="1.5" strokeLinecap="round" />

        {/* Minimal Arch / Bridge of Setu */}
        <path
          d="M60 150 C 90 90, 230 90, 260 150"
          stroke="#0F766E"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="4 4"
        />

        {/* Stack of Educational Books - Clean Architectural Line Art */}
        <g transform="translate(75, 105)">
          {/* Base Book */}
          <rect x="0" y="30" width="70" height="15" rx="3" fill="#F8FAFC" stroke="#334155" strokeWidth="1.75" />
          <line x1="12" y1="30" x2="12" y2="45" stroke="#CBD5E1" strokeWidth="1.5" />

          {/* Middle Book */}
          <rect x="5" y="15" width="60" height="15" rx="3" fill="#F1F5F9" stroke="#334155" strokeWidth="1.75" />
          <line x1="15" y1="15" x2="15" y2="30" stroke="#0F766E" strokeWidth="1.5" />

          {/* Top Book */}
          <rect x="10" y="0" width="50" height="15" rx="3" fill="#FFFFFF" stroke="#334155" strokeWidth="1.75" />
          <line x1="18" y1="0" x2="18" y2="15" stroke="#CBD5E1" strokeWidth="1.5" />
        </g>

        {/* Open Workbook in Center with Bookmark */}
        <g transform="translate(160, 80)">
          {/* Left Page */}
          <path
            d="M45 42 C 30 36, 10 38, 0 42 L 0 10 C 10 6, 30 5, 45 10 Z"
            fill="#FFFFFF"
            stroke="#0F172A"
            strokeWidth="1.75"
          />
          {/* Right Page */}
          <path
            d="M45 42 C 60 36, 80 38, 90 42 L 90 10 C 80 6, 60 5, 45 10 Z"
            fill="#FFFFFF"
            stroke="#0F172A"
            strokeWidth="1.75"
          />
          {/* Center Spine */}
          <line x1="45" y1="10" x2="45" y2="42" stroke="#0F766E" strokeWidth="2" strokeLinecap="round" />
          {/* Minimal Content Lines */}
          <line x1="8" y1="18" x2="36" y2="17" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="8" y1="25" x2="32" y2="24" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="8" y1="32" x2="28" y2="31" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />

          <line x1="54" y1="17" x2="82" y2="18" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="54" y1="24" x2="78" y2="25" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="54" y1="31" x2="72" y2="32" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />

          {/* Bookmark Ribbon */}
          <path d="M45 10 L 45 48 L 40 44 L 35 48 L 35 10 Z" fill="#0D9488" />
        </g>

        {/* Pencil of Guidance */}
        <g transform="translate(142, 60) rotate(-35)">
          <rect x="0" y="0" width="8" height="42" rx="1.5" fill="#F8FAFC" stroke="#334155" strokeWidth="1.5" />
          <polygon points="0,42 8,42 4,50" fill="#E2E8F0" stroke="#334155" strokeWidth="1.5" />
          <polygon points="2,46 6,46 4,50" fill="#0F172A" />
        </g>

        {/* Small Plant of Growth */}
        <g transform="translate(250, 125)">
          <path d="M6 18 C 6 10, 2 5, 0 2 C 7 4, 10 9, 6 18 Z" fill="#0D9488" />
          <path d="M6 18 C 6 12, 10 7, 13 4 C 11 9, 8 13, 6 18 Z" fill="#14B8A6" />
          <line x1="6" y1="18" x2="6" y2="25" stroke="#0F766E" strokeWidth="1.75" strokeLinecap="round" />
        </g>

        {/* Minimal Sun / Insight Arc */}
        <circle cx="160" cy="45" r="14" fill="#F8FAFC" stroke="#0D9488" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="160" cy="45" r="4" fill="#0D9488" />
      </svg>
    </div>
  );
};
