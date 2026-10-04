import React from "react";
import { cn } from "@/lib/utils";

interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  active?: boolean;
}

export function Pill({ children, active, className, ...props }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border transition-colors",
        active
          ? "bg-ink text-white border-ink"
          : "border-text/25 text-text bg-white/60 backdrop-blur-xs",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

interface TagPairProps {
  left: string;
  right: string;
  className?: string;
}

export function TagPair({ left, right, className }: TagPairProps) {
  return (
    <div className={cn("inline-flex items-center gap-1.5", className)}>
      <span className="text-sm text-text/80 select-none">✦</span>
      <div className="inline-flex items-center rounded-full border border-text/20 p-0.5 bg-white/80">
        <span className="px-2.5 py-0.5 text-xs font-medium text-text border-r border-text/15">
          {left}
        </span>
        <span className="px-2.5 py-0.5 text-xs font-medium text-muted">
          {right}
        </span>
      </div>
    </div>
  );
}
