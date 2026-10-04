import React from "react";
import { cn } from "@/lib/utils";

// Inline house with water drop icon for the H1 headline: "Plumbing Experts at Your [icon] Door"
export function HouseDropIcon({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center align-middle mx-1 sm:mx-1.5 translate-y-[-2px]",
        className
      )}
      aria-hidden="true"
    >
      <svg
        className="w-[0.9em] h-[0.9em] text-blue stroke-current"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* House contour */}
        <path d="M5 19L22 6L39 19V38C39 39.1 38.1 40 37 40H7C5.9 40 5 39.1 5 38V19Z" fill="#EEF3F8" />
        {/* Water drop in center */}
        <path
          d="M22 17C22 17 16 23.5 16 27.5C16 30.8 18.7 33.5 22 33.5C25.3 33.5 28 30.8 28 27.5C28 23.5 22 17 22 17Z"
          fill="#1F6FD1"
          stroke="#1F6FD1"
          strokeWidth="2.5"
        />
      </svg>
    </span>
  );
}

// Swirl/loop decorations for Stats Bento tiles
export function SwirlGreen({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none select-none", className)}
      aria-hidden="true"
    >
      <path
        d="M20 180 C 20 60, 90 20, 130 50 C 170 80, 160 160, 110 160 C 60 160, 50 110, 80 80 C 110 50, 180 50, 190 120"
        stroke="#5FA83A"
        strokeWidth="32"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function SwirlOrange({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none select-none", className)}
      aria-hidden="true"
    >
      <path
        d="M170 20 C 80 20, 20 80, 20 130 C 20 170, 70 190, 120 170 C 170 150, 190 100, 170 50"
        stroke="#FF7A45"
        strokeWidth="34"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function ArcDecoration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none select-none", className)}
      aria-hidden="true"
    >
      <circle
        cx="140"
        cy="80"
        r="70"
        stroke="#E65D28"
        strokeWidth="28"
        fill="none"
      />
    </svg>
  );
}

// Flat modern hero vector illustrations matching Mendx
export function HeroLeftIllustration({ className }: { className?: string }) {
  return (
    <div className={cn("relative select-none pointer-events-none", className)} aria-hidden="true">
      <svg viewBox="0 0 140 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Person standing with service clipboard/sign */}
        <circle cx="70" cy="30" r="14" fill="#06142B" />
        <path d="M50 48 C 50 45, 90 45, 90 48 L 94 110 L 46 110 Z" fill="#1F6FD1" />
        {/* Pants */}
        <path d="M46 110 L 48 165 L 66 165 L 68 120 L 72 120 L 74 165 L 92 165 L 94 110 Z" fill="#06142B" />
        {/* Shoes */}
        <ellipse cx="57" cy="167" rx="12" ry="5" fill="#5FA83A" />
        <ellipse cx="83" cy="167" rx="12" ry="5" fill="#5FA83A" />
        {/* Arms holding blue board */}
        <path d="M50 56 L 25 80 L 32 90 L 52 70" fill="#1F6FD1" />
        <path d="M90 56 L 115 80 L 108 90 L 88 70" fill="#1F6FD1" />
        {/* Service sign/board */}
        <rect x="15" y="70" width="110" height="34" rx="6" fill="#1F6FD1" />
        <rect x="20" y="75" width="24" height="24" rx="12" fill="#FFFFFF" />
        <circle cx="32" cy="87" r="7" fill="#5FA83A" />
        <rect x="50" y="80" width="46" height="5" rx="2.5" fill="#FFFFFF" />
        <rect x="50" y="90" width="30" height="4" rx="2" fill="#BFE3F7" />
      </svg>
    </div>
  );
}

export function HeroRightIllustration({ className }: { className?: string }) {
  return (
    <div className={cn("relative select-none pointer-events-none", className)} aria-hidden="true">
      <svg viewBox="0 0 150 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Organic green ground shape */}
        <path
          d="M20 140 C 40 120, 110 120, 140 145 C 160 160, 120 175, 70 175 C 30 175, 10 155, 20 140 Z"
          fill="#5FA83A"
          opacity="0.35"
        />
        {/* Person seated with laptop */}
        <circle cx="85" cy="40" r="14" fill="#06142B" />
        {/* Torso */}
        <path d="M68 58 C 68 54, 102 54, 102 58 L 98 110 L 64 110 Z" fill="#FF7A45" />
        {/* Legs crossed */}
        <path d="M64 110 C 60 125, 45 135, 35 145 L 50 155 C 65 145, 80 135, 85 120 L 98 120 C 110 135, 125 145, 135 148 L 138 138 C 120 130, 108 120, 100 110 Z" fill="#06142B" />
        {/* Laptop */}
        <rect x="45" y="95" width="42" height="26" rx="3" fill="#1F6FD1" transform="rotate(-10 45 95)" />
        <rect x="42" y="118" width="46" height="5" rx="2" fill="#EEF3F8" />
      </svg>
    </div>
  );
}
