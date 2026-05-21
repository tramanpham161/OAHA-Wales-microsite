import React from "react";

interface OahaLogoProps {
  className?: string;
  size?: number | string;
}

export default function OahaLogo({ className = "", size = "40" }: OahaLogoProps) {
  return (
    <svg
      id="oaha-svg-logo"
      viewBox="0 0 260 200"
      width={size}
      height={typeof size === "number" ? size * (200 / 260) : undefined}
      className={`inline-block select-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Top Left Teal Square */}
      <rect x="0" y="0" width="100" height="100" fill="#2EBBB8" />
      
      {/* Top Right Green Square */}
      <rect x="160" y="0" width="100" height="100" fill="#3AB03A" />
      
      {/* Bottom Left Orange Square */}
      <rect x="0" y="100" width="100" height="100" fill="#FF9900" />
      
      {/* Bottom Right Grey Square */}
      <rect x="160" y="100" width="100" height="100" fill="#9E9E9E" />
      
      {/* "O" Circle in the upper white space */}
      <circle cx="130" cy="50" r="32" stroke="#000000" strokeWidth="11" fill="none" />
      
      {/* "A" "H" "A" lines in the bottom half */}
      {/* Left A */}
      <line x1="12" y1="200" x2="50" y2="100" stroke="#000000" strokeWidth="11" strokeLinecap="square" />
      <line x1="50" y1="100" x2="88" y2="200" stroke="#000000" strokeWidth="11" strokeLinecap="square" />
      
      {/* Middle H vertical bars */}
      <line x1="114" y1="100" x2="114" y2="200" stroke="#000000" strokeWidth="11" strokeLinecap="square" />
      <line x1="146" y1="100" x2="146" y2="200" stroke="#000000" strokeWidth="11" strokeLinecap="square" />
      
      {/* Right A */}
      <line x1="172" y1="200" x2="210" y2="100" stroke="#000000" strokeWidth="11" strokeLinecap="square" />
      <line x1="210" y1="100" x2="248" y2="200" stroke="#000000" strokeWidth="11" strokeLinecap="square" />
      
      {/* Continuous horizontal baseline connect bar across bottom row */}
      {/* Centered vertically in AHA baseline (around y = 168) */}
      <line x1="12" y1="168" x2="248" y2="168" stroke="#000000" strokeWidth="11" strokeLinecap="square" />
    </svg>
  );
}
