import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CircleArrowButtonProps {
  tone?: "white" | "dark" | "blue" | "translucent";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  ariaLabel?: string;
  onClick?: () => void;
}

export function CircleArrowButton({
  tone = "dark",
  size = "md",
  href,
  className,
  ariaLabel = "View details",
  onClick,
}: CircleArrowButtonProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  }[size];

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  }[size];

  const toneClasses = {
    white: "bg-white text-ink shadow-sm hover:bg-cream",
    dark: "bg-ink text-white hover:bg-black",
    blue: "bg-blue text-white hover:bg-blue-hover",
    translucent: "bg-white/20 backdrop-blur-xs text-white hover:bg-white/30",
  }[tone];

  const baseClasses = cn(
    "rounded-full inline-flex items-center justify-center transition-all duration-200 group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2",
    sizeClasses,
    toneClasses,
    className
  );

  const icon = (
    <ArrowUpRight
      className={cn(
        iconSizes,
        "transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      )}
    />
  );

  if (href) {
    if (href.startsWith("http") || href.startsWith("tel:") || href.startsWith("https://wa.me")) {
      return (
        <a
          href={href}
          aria-label={ariaLabel}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
        >
          {icon}
        </a>
      );
    }
    return (
      <Link href={href} aria-label={ariaLabel} className={baseClasses}>
        {icon}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={baseClasses}
    >
      {icon}
    </button>
  );
}
