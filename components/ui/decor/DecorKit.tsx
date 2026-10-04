import React from "react";
import { cn } from "@/lib/utils";

interface DecorProps {
  className?: string;
  color?: string;
  size?: number | string;
  opacity?: number;
}

export function Ring({ className, color = "currentColor", size = 180, opacity = 1 }: DecorProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none select-none shrink-0", className)}
      style={{ opacity }}
      aria-hidden="true"
    >
      <circle
        cx="80"
        cy="80"
        r="60"
        stroke={color}
        strokeWidth="24"
        fill="none"
      />
    </svg>
  );
}

export function Swirl({ className, color = "currentColor", size = 200, opacity = 1 }: DecorProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none select-none shrink-0", className)}
      style={{ opacity }}
      aria-hidden="true"
    >
      <path
        d="M20 180 C 20 60, 90 20, 130 50 C 170 80, 160 160, 110 160 C 60 160, 50 110, 80 80 C 110 50, 180 50, 190 120"
        stroke={color}
        strokeWidth="28"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function DropletDecor({ className, color = "currentColor", size = 80, opacity = 1 }: DecorProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none select-none shrink-0", className)}
      style={{ opacity }}
      aria-hidden="true"
    >
      <path
        d="M22 6C22 6 11 18 11 25.5C11 31.5 15.9 36.5 22 36.5C28.1 36.5 33 31.5 33 25.5C33 18 22 6 22 6Z"
        fill={color}
      />
    </svg>
  );
}

export function DotGrid({ className, color = "#0B3F7A", opacity = 0.1 }: DecorProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none select-none w-28 h-28 shrink-0", className)}
      style={{ opacity }}
      aria-hidden="true"
    >
      <pattern id="dot-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="3" cy="3" r="2.5" fill={color} />
      </pattern>
      <rect width="120" height="120" fill="url(#dot-pattern)" />
    </svg>
  );
}

export function WaveDivider({ className, color = "#EEF3F8" }: { className?: string; color?: string }) {
  return (
    <div className={cn("w-full overflow-hidden leading-none select-none pointer-events-none", className)} aria-hidden="true">
      <svg
        viewBox="0 0 1200 64"
        preserveAspectRatio="none"
        className="w-full h-10 sm:h-14 block"
        fill={color}
      >
        <path d="M0,0 C150,45 350,-20 500,25 C650,70 900,10 1200,35 L1200,64 L0,64 Z" />
      </svg>
    </div>
  );
}
