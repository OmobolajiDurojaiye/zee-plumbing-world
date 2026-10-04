import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { CtaBand } from "@/components/home/CtaBand";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Project Gallery | Zee Plumbing World",
  description:
    "Explore before and after transformations, luxury bathroom installations, PPR water manifolds, and commercial piping projects across Abuja.",
  path: "/gallery",
});

export default function GalleryPage() {
  const galleryItems = [
    {
      title: "Wall-Hung Concealed Toilet & Vanity Installation",
      category: "Bathroom Upgrade",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Precision Copper & PPR Manifold Repiping",
      category: "Pipe Installation",
      image: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Overhead Storage Tank & Booster Pump Connection",
      category: "Water Supply",
      image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Luxury Rainfall Shower & Channel Drain Fitting",
      category: "Bathroom Upgrade",
      image: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Acoustic Leak Detection & Repair in Maitama Residence",
      category: "Leak Repair",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Multi-Stage Borehole Filtration System Setup",
      category: "Water Treatment",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="py-8 sm:py-12">
      <Container size="default">
        {/* Page Hero */}
        <div className="bg-mist rounded-[28px] sm:rounded-[36px] p-8 sm:p-14 text-center max-w-4xl mx-auto mb-14 border border-black/5">
          <span className="text-xs uppercase tracking-wider font-semibold text-blue mb-2 block">
            Craftsmanship Portfolio
          </span>
          <h1 className="text-3xl sm:text-5xl font-semibold text-text tracking-tight mb-4">
            Our Work in Real Nigerian Homes
          </h1>
          <p className="text-muted text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            See the standard of plumbing execution delivered by our technicians: clean alignments, durable pressure fittings, and flawless bathroom finishes.
          </p>
        </div>

        {/* Before & After Interactive Showcase */}
        <div className="mb-16">
          <div className="max-w-xl mb-6">
            <span className="text-xs uppercase tracking-wider font-semibold text-muted">
              Interactive Comparison
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-text tracking-tight mt-1">
              Before & After Transformations
            </h2>
            <p className="text-muted text-xs sm:text-sm mt-1">
              Drag the slider to compare corroded piping vs. newly heat-fused PPR manifolds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BeforeAfter
              title="Corroded Galvanized Lines vs. Heat-Fused PPR Piping"
              beforeImage="https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=800&auto=format&fit=crop"
              afterImage="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop"
            />
            <BeforeAfter
              title="Old Leaking Trap vs. Modern Sanitary Vanity Installation"
              beforeImage="https://images.unsplash.com/photo-1505798577917-a65157d3320a?q=80&w=800&auto=format&fit=crop"
              afterImage="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop"
            />
          </div>
        </div>

        {/* Masonry / Grid of Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-text mb-6">Recent Project Installations</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                className="group bg-mist rounded-[24px] overflow-hidden border border-black/5 flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-text text-[11px] font-semibold px-2.5 py-1 rounded-full">
                    {item.category}
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-base text-text leading-snug">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <CtaBand />
      </Container>
    </div>
  );
}
