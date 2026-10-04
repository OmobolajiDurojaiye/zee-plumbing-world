import React from "react";
import { Container } from "@/components/ui/Container";
import { ColorCard } from "@/components/ui/ColorCard";
import { CtaBand } from "@/components/home/CtaBand";
import { Ring, DotGrid } from "@/components/ui/decor/DecorKit";
import { services } from "@/content";
import { buildMetadata } from "@/lib/seo";
import {
  Droplets,
  Flame,
  Wrench,
  Waves,
  AlertTriangle,
  Bath,
  Gauge,
  Building2,
} from "lucide-react";

export const metadata = buildMetadata({
  title: "Professional Plumbing Services in Abuja",
  description:
    "Explore our complete range of certified plumbing solutions: leak detection, water heater installation, pipe replacement, drainage clearing, and 24/7 emergencies.",
  path: "/services",
});

const serviceIconMap: Record<string, React.ReactNode> = {
  droplets: <Droplets className="w-5 h-5" />,
  pipette: <Droplets className="w-5 h-5" />,
  flame: <Flame className="w-5 h-5" />,
  waves: <Waves className="w-5 h-5" />,
  wrench: <Wrench className="w-5 h-5" />,
  "alert-triangle": <AlertTriangle className="w-5 h-5" />,
  bath: <Bath className="w-5 h-5" />,
  gauge: <Gauge className="w-5 h-5" />,
  "building-2": <Building2 className="w-5 h-5" />,
};

export default function ServicesPage() {
  return (
    <div className="py-8 sm:py-12">
      <Container size="default">
        {/* Page Hero with subtle decor */}
        <div className="relative bg-mist rounded-[28px] sm:rounded-[36px] p-8 sm:p-14 text-center max-w-4xl mx-auto mb-12 sm:mb-16 border border-black/5 overflow-hidden">
          <Ring className="absolute -top-12 -right-12 text-blue" size={200} opacity={0.12} />
          <div className="absolute -bottom-6 -left-6 opacity-30 pointer-events-none">
            <DotGrid color="#0B3F7A" opacity={0.2} />
          </div>

          <div className="relative z-10">
            <span className="text-xs uppercase tracking-wider font-semibold text-blue mb-2 block">
              Comprehensive Plumbing Catalogue
            </span>
            <h1 className="text-3xl sm:text-5xl font-semibold text-text tracking-tight mb-4">
              Certified Doorstep Plumbing Services
            </h1>
            <p className="text-muted text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              From precision non-invasive leak detection to complete residential repiping and luxury bathroom fittings, our licensed plumbers guarantee lasting craftsmanship across Abuja.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {services.map((service) => (
            <ColorCard
              key={service.slug}
              tone={service.tone}
              icon={serviceIconMap[service.icon] || <Wrench className="w-5 h-5" />}
              title={service.name}
              description={service.shortDesc}
              href={`/services/${service.slug}`}
            />
          ))}
        </div>

        <CtaBand />
      </Container>
    </div>
  );
}
