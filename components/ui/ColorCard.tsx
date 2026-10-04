import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { IconBadge } from "./IconBadge";
import { cn } from "@/lib/utils";

export type CardTone = "navy" | "sky" | "blue" | "mint" | "orange" | "coral" | "cream" | "mist" | "green";

interface ColorCardProps {
  tone: CardTone;
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  badgeTone?: "white" | "dark" | "blue" | "sky" | "navy" | "mint" | "orange" | "cream";
  className?: string;
}

export function ColorCard({
  tone,
  icon,
  title,
  description,
  href,
  badgeTone,
  className,
}: ColorCardProps) {
  // Tone background colors & contrast-safe text colors
  const toneConfig: Record<
    CardTone,
    { bg: string; text: string; subtext: string; defaultBadgeTone: "white" | "dark" | "blue" | "navy" | "cream" }
  > = {
    navy: {
      bg: "bg-navy",
      text: "text-white",
      subtext: "text-white/80",
      defaultBadgeTone: "white",
    },
    sky: {
      bg: "bg-sky",
      text: "text-ink",
      subtext: "text-text/75",
      defaultBadgeTone: "navy",
    },
    blue: {
      bg: "bg-blue",
      text: "text-white",
      subtext: "text-white/85",
      defaultBadgeTone: "white",
    },
    mint: {
      bg: "bg-mint",
      text: "text-ink",
      subtext: "text-text/75",
      defaultBadgeTone: "dark",
    },
    green: {
      bg: "bg-[#2EA063]",
      text: "text-white",
      subtext: "text-white/90",
      defaultBadgeTone: "white",
    },
    orange: {
      bg: "bg-orange",
      text: "text-white",
      subtext: "text-white/90",
      defaultBadgeTone: "white",
    },
    coral: {
      bg: "bg-coral",
      text: "text-white",
      subtext: "text-white/90",
      defaultBadgeTone: "white",
    },
    cream: {
      bg: "bg-cream",
      text: "text-ink",
      subtext: "text-muted",
      defaultBadgeTone: "dark",
    },
    mist: {
      bg: "bg-mist",
      text: "text-ink",
      subtext: "text-muted",
      defaultBadgeTone: "blue",
    },
  };

  const config = toneConfig[tone] || toneConfig.navy;
  const effectiveBadgeTone = badgeTone || config.defaultBadgeTone;

  return (
    <Link
      href={href}
      className={cn(
        "group relative flex flex-col justify-between p-6 sm:p-7 rounded-[24px] min-h-[320px] sm:min-h-[360px] transition-all duration-300 hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 overflow-hidden select-none",
        config.bg,
        className
      )}
    >
      {/* Background Decor: Ring + Watermark Icon */}
      <div
        className={cn(
          "absolute -top-12 -right-12 w-32 h-32 rounded-full border-[18px] pointer-events-none transition-transform duration-500 group-hover:scale-105",
          tone === "navy" || tone === "blue" || tone === "orange" || tone === "coral"
            ? "border-white/10"
            : "border-black/5"
        )}
        aria-hidden="true"
      />
      {React.isValidElement(icon) && (
        <div
          className={cn(
            "absolute -bottom-6 -right-6 pointer-events-none select-none transition-transform duration-500 group-hover:scale-110",
            tone === "navy" || tone === "blue" || tone === "orange" || tone === "coral"
              ? "text-white opacity-[0.09]"
              : "text-ink opacity-[0.07]"
          )}
          aria-hidden="true"
        >
          {React.cloneElement(icon as React.ReactElement<{ className?: string }>, {
            className: "w-36 h-36 stroke-[1.25]",
          })}
        </div>
      )}

      {/* Top row: Icon badge + subtle hover arrow */}
      <div className="relative z-10 flex items-center justify-between">
        <IconBadge icon={icon} tone={effectiveBadgeTone} size="md" />
        <div
          className={cn(
            "w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1 group-hover:translate-x-0",
            tone === "navy" || tone === "blue" || tone === "orange" || tone === "coral"
              ? "bg-white/20 text-white"
              : "bg-black/10 text-ink"
          )}
        >
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

      {/* Middle: Title */}
      <div className="relative z-10 my-auto py-6">
        <h3
          className={cn(
            "text-2xl sm:text-[26px] font-semibold leading-[1.15] tracking-tight",
            config.text
          )}
        >
          {title}
        </h3>
      </div>

      {/* Bottom: Description */}
      <div className="relative z-10">
        <p className={cn("text-xs sm:text-sm leading-relaxed", config.subtext)}>
          {description}
        </p>
      </div>
    </Link>
  );
}
