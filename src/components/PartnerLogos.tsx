import React from "react";

export function CardiffAndValeLogo() {
  return (
    <svg
      viewBox="0 0 320 90"
      className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity"
      aria-label="Cardiff and Vale College Logo"
    >
      {/* Abstract Fan Shapes on the right/center */}
      <g transform="translate(195, 5)">
        {/* Blue Petal */}
        <path
          d="M 5,42 C 10,10 40,0 72,0 C 72,25 60,45 42,48 Z"
          fill="#0084D1"
        />
        {/* Green Center Overlap */}
        <path
          d="M 42,48 C 55,30 65,22 83,26 C 85,45 80,68 64,74 C 54,64 46,55 42,48 Z"
          fill="#007F43"
        />
        {/* Yellow-Green Right Arc */}
        <path
          d="M 83,26 C 98,22 118,25 128,32 C 112,46 95,68 85,73 C 86,55 86,40 83,26 Z"
          fill="#B5D732"
        />
      </g>
      
      {/* Text Group on the left */}
      <g transform="translate(0, 15)">
        <text
          x="0"
          y="32"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="700"
          fontSize="24"
          fill="#2C2C2C"
          letterSpacing="-0.03em"
        >
          Cardiff and Vale College
        </text>
        <text
          x="0"
          y="54"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="500"
          fontSize="21"
          fill="#5C5C5C"
          letterSpacing="-0.03em"
        >
          Coleg Caerdydd a'r Fro
        </text>
      </g>
    </svg>
  );
}

export function CowshedLogo() {
  return (
    <svg
      viewBox="0 0 160 60"
      className="h-9 w-auto opacity-80 hover:opacity-100 transition-opacity"
      aria-label="Cowshed Logo"
    >
      <text
        x="10"
        y="42"
        fontFamily="Georgia, Cambria, 'Times New Roman', Times, serif"
        fontSize="34"
        fontWeight="normal"
        fill="#000000"
        letterSpacing="-0.03em"
      >
        cowshed
      </text>
    </svg>
  );
}

export function LewisSilkinLogo() {
  return (
    <svg
      viewBox="0 0 240 60"
      className="h-9 w-auto opacity-80 hover:opacity-100 transition-opacity"
      aria-label="Lewis Silkin Logo"
    >
      {/* Decorative spectrum cross petals */}
      <g transform="translate(10, 10)">
        {/* Top/Left Petal (Yellow/Orange) */}
        <path d="M 16,16 C 16,5 25,2 30,8 C 30,13 25,20 16,20 Z" fill="#FFA500" />
        <path d="M 16,16 C 5,16 2,25 8,30 C 13,30 20,25 20,16 Z" fill="#E52E2D" />
        {/* Bottom/Right Petal (Purple/Blue/Teal/Green) */}
        <path d="M 24,24 C 24,35 15,38 10,32 C 10,27 15,20 24,20 Z" fill="#98227E" />
        <path d="M 24,24 C 35,24 38,15 32,10 C 27,10 20,15 20,24 Z" fill="#00A69C" />
        {/* Inner small core */}
        <circle cx="20" cy="20" r="3" fill="#FFFFFF" />
      </g>

      {/* Font Family Sans Serif Bold All Caps */}
      <text
        x="65"
        y="38"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="21"
        fontWeight="800"
        fill="#000000"
        letterSpacing="0.08em"
      >
        LEWIS SILKIN
      </text>
    </svg>
  );
}

export function MullanyFundLogo() {
  return (
    <svg
      viewBox="0 0 280 60"
      className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity"
      aria-label="The Mullany Fund Logo"
    >
      {/* Circle people hug emblem on left */}
      <g transform="translate(8, 10)">
        {/* Blue Curves */}
        <path d="M 5,20 C 5,12 15,10 20,15 C 20,25 15,30 5,30 Z" fill="#005691" />
        <path d="M 20,15 C 25,10 35,12 35,20 C 35,30 25,25 20,15 Z" fill="#005691" />
        <path d="M 5,20 C 5,30 15,35 20,35 C 25,35 35,30 35,20" stroke="#005691" strokeWidth="3" fill="none" />
        
        {/* Yellow Dots/Hands */}
        <circle cx="20" cy="8" r="4.5" fill="#FFBA15" />
        <circle cx="4" cy="20" r="4.5" fill="#FFBA15" />
        <circle cx="36" cy="20" r="4.5" fill="#FFBA15" />
        <circle cx="20" cy="32" r="4.5" fill="#005691" />
      </g>

      {/* Text Group */}
      <g transform="translate(62, 5)">
        <text
          x="0"
          y="26"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="23"
          fontWeight="700"
          fill="#2C2C2C"
          letterSpacing="-0.02em"
        >
          The Mullany Fund
        </text>
        <text
          x="0"
          y="42"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="13"
          fontWeight="400"
          fill="#6E6E6E"
          letterSpacing="0.02em"
        >
          A social mobility charity
        </text>
      </g>
    </svg>
  );
}

export function BrowneJacobsonLogo() {
  return (
    <svg
      viewBox="0 0 180 60"
      className="h-9 w-auto opacity-80 hover:opacity-100 transition-opacity"
      aria-label="Browne Jacobson Logo"
    >
      {/* Two rows of Browne Jacobson in dark plum */}
      <text
        x="5"
        y="25"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="25"
        fontWeight="800"
        fill="#4A132C"
        letterSpacing="-0.03em"
      >
        Browne
      </text>
      <text
        x="30"
        y="50"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="25"
        fontWeight="800"
        fill="#4A132C"
        letterSpacing="-0.03em"
      >
        Jacobson
      </text>
    </svg>
  );
}

export function StudySmarterLogo() {
  return (
    <svg
      viewBox="0 0 280 80"
      className="h-9 w-auto opacity-80 hover:opacity-100 transition-opacity"
      aria-label="StudySmarter Logo"
    >
      <defs>
        <linearGradient id="studySmarterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0CD2C6" />
          <stop offset="100%" stopColor="#0066CC" />
        </linearGradient>
      </defs>
      {/* Graduation Cap / Isometric Cube Logo */}
      <g transform="translate(10, 15)">
        {/* Top Diamond */}
        <path
          d="M 32,5 L 60,19 L 32,33 L 4,19 Z"
          fill="none"
          stroke="url(#studySmarterGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Under Lines */}
        <path
          d="M 16,25 L 16,39 C 16,45 24,47 32,47 C 40,47 48,45 48,39 L 48,25"
          fill="none"
          stroke="url(#studySmarterGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Central Vertical Line */}
        <path
          d="M 32,19 L 32,47"
          fill="none"
          stroke="url(#studySmarterGrad)"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>
      {/* Text */}
      <text
        x="80"
        y="46"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="24"
        fontWeight="600"
        fill="#243C56"
        letterSpacing="-0.03em"
      >
        StudySmarter
      </text>
    </svg>
  );
}

export function AdmiralLogo() {
  return (
    <svg
      viewBox="0 0 240 80"
      className="h-9 w-auto opacity-80 hover:opacity-100 transition-opacity"
      aria-label="Admiral Logo"
    >
      {/* Pink/Magenta crescent swoosh */}
      <path
        d="M 38,15 C 10,24 2,52 32,68 C 50,75 68,66 76,57 C 58,64 40,64 32,57 C 18,48 22,31 40,24 C 48,20 57,22 62,25 C 57,18 48,14 38,15 Z"
        fill="#C00060"
      />
      {/* Deep Blue italicized strong font */}
      <text
        x="44"
        y="53"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontStyle="italic"
        fontWeight="900"
        fontSize="34"
        fill="#00439C"
        letterSpacing="-0.04em"
      >
        Admiral
      </text>
    </svg>
  );
}

export default function PartnerLogos() {
  return (
    <div className="w-full space-y-4 pt-4">
      <div className="flex flex-col space-y-2">
        <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#2E536B]">
          Early collaboration partners and contributors
        </span>
        <div className="h-[2px] w-12 bg-[#3AB03A]/40" />
        <p className="text-sm sm:text-base text-[#51615a] leading-relaxed pt-1.5 max-w-3xl font-sans">
          These partners are part of a wider growing network of employers, funders, educators, charities, community organisations and civic stakeholders contributing to the work.
        </p>
        <div className="pt-2">
          <button
            onClick={() => {
              const elem = document.getElementById("preview-sec-get-involved");
              if (elem) elem.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-xs sm:text-sm text-[#2E536B] hover:text-[#2BB7BA] font-bold uppercase tracking-wider underline underline-offset-4 cursor-pointer transition-colors inline-flex items-center gap-1.5"
          >
            <span>See how to get involved</span>
            <span className="text-[#3AB03A]">&rarr;</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5 items-center justify-items-center bg-[#faf9f6]/40 p-5 rounded border border-[#969696]/20">
        <div className="flex items-center justify-center p-2 rounded h-14 w-full bg-white/70 shadow-xs border border-gray-100">
          <CardiffAndValeLogo />
        </div>
        <div className="flex items-center justify-center p-2 rounded h-14 w-full bg-white/70 shadow-xs border border-gray-100">
          <CowshedLogo />
        </div>
        <div className="flex items-center justify-center p-2 rounded h-14 w-full bg-white/70 shadow-xs border border-gray-100">
          <LewisSilkinLogo />
        </div>
        <div className="flex items-center justify-center p-2 rounded h-14 w-full bg-white/70 shadow-xs border border-gray-100">
          <MullanyFundLogo />
        </div>
        <div className="flex items-center justify-center p-2 rounded h-14 w-full bg-white/70 shadow-xs border border-gray-100">
          <BrowneJacobsonLogo />
        </div>
        <div className="flex items-center justify-center p-2 rounded h-14 w-full bg-white/70 shadow-xs border border-gray-100">
          <StudySmarterLogo />
        </div>
        <div className="flex items-center justify-center p-2 rounded h-14 w-full bg-white/70 shadow-xs border border-gray-100 col-span-2 md:col-span-1">
          <AdmiralLogo />
        </div>
      </div>
    </div>
  );
}
