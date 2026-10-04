"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { services } from "@/content";
import { cn } from "@/lib/utils";

type CategoryTab = "popular" | "emergency" | "installation";

interface CutoutVisualProps {
  category: string;
  name: string;
}

// Clean graphic representation for plumbing items in the popular list rows
function CutoutVisual({ name }: CutoutVisualProps) {
  // SVG representations of plumbing equipment
  if (name.includes("Drain") || name.includes("Blockage")) {
    return (
      <div className="w-12 h-12 flex items-center justify-center text-orange">
        <svg viewBox="0 0 32 32" className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 4V16M10 20C10 16.6863 12.6863 14 16 14C19.3137 14 22 16.6863 22 20H10Z" fill="#F59E1B" fillOpacity="0.2" />
          <path d="M12 20H20V24H12V20Z" fill="#06142B" />
        </svg>
      </div>
    );
  }

  if (name.includes("Heater") || name.includes("Tank")) {
    return (
      <div className="w-12 h-12 flex items-center justify-center text-coral">
        <svg viewBox="0 0 32 32" className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="8" y="6" width="16" height="20" rx="8" fill="#FF7A45" fillOpacity="0.2" />
          <circle cx="16" cy="18" r="3" fill="#FF7A45" />
          <path d="M16 6V3M13 3H19" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  if (name.includes("Leak") || name.includes("Borehole")) {
    return (
      <div className="w-12 h-12 flex items-center justify-center text-blue">
        <svg viewBox="0 0 32 32" className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 4 C16 4 8 13 8 19 A8 8 0 0 0 24 19 C24 13 16 4 16 4 Z" fill="#1F6FD1" fillOpacity="0.25" />
          <path d="M12 18 C13 22 19 22 20 18" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  return (
    <div className="w-12 h-12 flex items-center justify-center text-navy">
      <svg viewBox="0 0 32 32" className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 12 L16 4 L22 10 L14 18 Z" fill="#0B3F7A" fillOpacity="0.2" />
        <path d="M14 18 L26 30" strokeLinecap="round" strokeWidth="3" />
      </svg>
    </div>
  );
}

export function PopularServicesList() {
  const [activeTab, setActiveTab] = useState<CategoryTab>("popular");

  const tabs: { id: CategoryTab; label: string }[] = [
    { id: "popular", label: "Popular Services" },
    { id: "emergency", label: "Emergency Services" },
    { id: "installation", label: "Installations" },
  ];

  const filteredServices = services.filter((srv) => {
    if (activeTab === "popular") return srv.category === "popular" || srv.featured;
    if (activeTab === "emergency") return srv.category === "emergency" || srv.slug.includes("leak");
    return srv.category === "installation" || srv.category === "popular";
  });

  return (
    <section className="py-12 sm:py-16">
      <Container size="default">
        {/* Large Typography Tab Headers matching Mendx */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8 sm:mb-12">
          {tabs.map((tab, idx) => {
            const isActive = activeTab === tab.id;
            return (
              <React.Fragment key={tab.id}>
                <button
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "text-2xl sm:text-3xl lg:text-[36px] font-semibold tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue rounded-lg py-1",
                    isActive
                      ? "text-blue"
                      : "text-text/25 hover:text-text/50"
                  )}
                >
                  {tab.label}
                </button>
                {idx < tabs.length - 1 && (
                  <span className="text-text/20 text-2xl hidden sm:inline select-none">
                    •
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* 2-Column Grid of Cream Rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {filteredServices.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group bg-cream hover:bg-[#ede5d8] transition-colors rounded-[20px] sm:rounded-[24px] p-4 sm:p-5 flex items-center justify-between gap-4 border border-black/5"
            >
              {/* Left: Service Title */}
              <div className="flex-1 pr-2">
                <span className="font-semibold text-base sm:text-lg text-ink group-hover:text-blue transition-colors">
                  {service.name}
                </span>
                <p className="text-xs text-muted line-clamp-1 mt-0.5">
                  {service.shortDesc}
                </p>
              </div>

              {/* Center-Right: Cutout Product / Tool Visual */}
              <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                <CutoutVisual category={service.category} name={service.name} />
              </div>

              {/* Far Right: Dark Circular Button with Arrow */}
              <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-ink text-white flex items-center justify-center group-hover:bg-blue transition-colors">
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
