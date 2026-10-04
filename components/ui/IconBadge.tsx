import React from "react";
import { cn } from "@/lib/utils";

interface IconBadgeProps {
  icon: React.ReactNode;
  tone?: "white" | "dark" | "blue" | "sky" | "navy" | "mint" | "orange" | "cream";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function IconBadge({
  icon,
  tone = "dark",
  size = "md",
  className,
}: IconBadgeProps) {
  const sizeClasses = {
    sm: "w-8 h-8 [&>svg]:w-4 [&>svg]:h-4",
    md: "w-10 h-10 [&>svg]:w-5 [&>svg]:h-5",
    lg: "w-12 h-12 [&>svg]:w-6 [&>svg]:h-6",
  }[size];

  const toneClasses = {
    white: "bg-white text-ink shadow-xs",
    dark: "bg-ink text-white",
    blue: "bg-blue text-white",
    sky: "bg-sky text-navy",
    navy: "bg-navy text-white",
    mint: "bg-mint text-ink",
    orange: "bg-orange text-white",
    cream: "bg-cream text-ink",
  }[tone];

  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center shrink-0",
        sizeClasses,
        toneClasses,
        className
      )}
    >
      {icon}
    </div>
  );
}
