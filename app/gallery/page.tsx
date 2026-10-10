import React from "react";
import { Container } from "@/components/ui/Container";
import { Ring } from "@/components/ui/decor/DecorKit";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { CtaBand } from "@/components/home/CtaBand";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Completed Projects & Construction Plumbing Gallery | Zee Plumbing World",
  description:
    "Explore certified civil construction plumbing, rough-in drainage, high-pressure PPR manifolds, and completed luxury bathroom installations across Abuja, Nigeria.",
  path: "/gallery",
  image: "/brand/opengraph-image.png",
});

export default function GalleryPage() {
  return (
    <div className="py-8 sm:py-12">
      <Container size="default">
        {/* Page Hero */}
        <div className="relative bg-mist rounded-[28px] sm:rounded-[36px] p-8 sm:p-14 text-center max-w-4xl mx-auto mb-12 sm:mb-16 border border-black/5 overflow-hidden">
          <Ring className="absolute -top-14 -right-14 text-[#056960]" size={240} opacity={0.15} />
          <Ring className="absolute -bottom-14 -left-14 text-blue" size={200} opacity={0.1} />

          <div className="relative z-10">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#056960] mb-2 block">
              Certified Engineering Portfolio
            </span>
            <h1 className="text-3xl sm:text-5xl font-semibold text-text tracking-tight mb-4">
              Real Site Execution & Completed Works
            </h1>
            <p className="text-muted text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Explore our verified construction rough-in drainage, electro-fused PPR distribution manifolds, and luxury residential sanitary installations executed across Abuja by Zee Plumbing World Nig Ltd.
            </p>
          </div>
        </div>

        {/* Gallery Grid with Interactive Category Tabs */}
        <div className="mb-16">
          <GalleryGrid />
        </div>

        <CtaBand />
      </Container>
    </div>
  );
}
