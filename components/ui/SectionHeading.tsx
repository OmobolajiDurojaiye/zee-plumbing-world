import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  tags?: React.ReactNode;
  title: string | React.ReactNode;
  description?: string;
  action?: React.ReactNode;
  align?: "between" | "center" | "left";
  className?: string;
}

export function SectionHeading({
  tags,
  title,
  description,
  action,
  align = "between",
  className,
}: SectionHeadingProps) {
  if (align === "center") {
    return (
      <div className={cn("text-center max-w-2xl mx-auto mb-10 sm:mb-12", className)}>
        {tags && <div className="mb-3">{tags}</div>}
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-text tracking-tight leading-[1.1]">
          {title}
        </h2>
        {description && (
          <p className="mt-3 text-muted text-sm sm:text-base leading-relaxed">
            {description}
          </p>
        )}
        {action && <div className="mt-6">{action}</div>}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 sm:mb-12",
        className
      )}
    >
      <div className="max-w-xl">
        {tags && <div className="mb-3">{tags}</div>}
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-text tracking-tight leading-[1.1]">
          {title}
        </h2>
      </div>

      {(description || action) && (
        <div className="max-w-md flex flex-col items-start md:items-end gap-3 text-left md:text-right">
          {description && (
            <p className="text-muted text-xs sm:text-sm leading-relaxed">
              {description}
            </p>
          )}
          {action && <div className="pt-1">{action}</div>}
        </div>
      )}
    </div>
  );
}
