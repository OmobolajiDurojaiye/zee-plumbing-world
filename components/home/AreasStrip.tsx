import React from "react";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { WaveDivider } from "@/components/ui/decor/DecorKit";
import { areas } from "@/content";

export function AreasStrip() {
  const displayedAreas = areas.slice(0, 10);

  return (
    <section className="py-8 sm:py-12">
      <Container size="default">
        <div className="relative bg-cream rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-12 overflow-hidden border border-black/5">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-xs">
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted mb-1">
                <MapPin className="w-3.5 h-3.5 text-blue" />
                <span>Coverage Zones</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-text tracking-tight">
                Areas we serve in Abuja
              </h3>
            </div>

            <div className="flex-1 flex flex-wrap gap-2.5 sm:gap-3">
              {displayedAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-white hover:bg-mist hover:border-blue/40 text-xs sm:text-sm font-medium text-text transition-colors group shadow-xs"
                >
                  <span>Plumber in {area.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-muted group-hover:text-blue group-hover:translate-x-0.5 transition-all" />
                </Link>
              ))}
              <Link
                href="/areas"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue bg-blue/5 hover:bg-blue text-blue hover:text-white text-xs sm:text-sm font-semibold transition-all group"
              >
                <span>View all {areas.length} areas →</span>
              </Link>
            </div>
          </div>

          {/* Subtle Wave along bottom */}
          <div className="absolute inset-x-0 bottom-0 pointer-events-none opacity-40">
            <WaveDivider color="#E8ECEF" />
          </div>
        </div>
      </Container>
    </section>
  );
}
