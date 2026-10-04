import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "dark" | "outline" | "orange" | "whatsapp" | "white";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  withArrow?: boolean;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external,
  withArrow = false,
  iconRight,
  iconLeft,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none rounded-[12px] select-none";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm sm:text-base px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
  }[size];

  const variantStyles = {
    primary:
      "bg-blue text-white hover:bg-blue-hover shadow-sm active:scale-[0.98]",
    dark:
      "bg-ink text-white hover:bg-black active:scale-[0.98]",
    outline:
      "border border-text/20 bg-transparent text-text hover:bg-black/5 active:scale-[0.98]",
    orange:
      "bg-orange text-white hover:bg-[#e08e16] shadow-sm active:scale-[0.98]",
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-sm active:scale-[0.98]",
    white:
      "bg-white text-ink hover:bg-cream active:scale-[0.98] border border-black/5",
  }[variant];

  const content = (
    <>
      {iconLeft && <span className="shrink-0">{iconLeft}</span>}
      <span>{children}</span>
      {withArrow && <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />}
      {iconRight && <span className="shrink-0">{iconRight}</span>}
    </>
  );

  if (href) {
    if (external || href.startsWith("tel:") || href.startsWith("https://wa.me") || href.startsWith("http")) {
      return (
        <a
          href={href}
          target={external || href.startsWith("https://wa.me") ? "_blank" : undefined}
          rel={external || href.startsWith("https://wa.me") ? "noopener noreferrer" : undefined}
          className={cn(baseStyles, sizeStyles, variantStyles, "group", className)}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={cn(baseStyles, sizeStyles, variantStyles, "group", className)}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn(baseStyles, sizeStyles, variantStyles, "group", className)}
      {...props}
    >
      {content}
    </button>
  );
}
