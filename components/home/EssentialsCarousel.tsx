"use client";

import React, { useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TagPair } from "@/components/ui/Pill";
import { Ring, DotGrid } from "@/components/ui/decor/DecorKit";
import { services } from "@/content";

// Frame colors cycling as seen in the Mendx essentials carousel
const frameColors = [
  "bg-[#7C3E2D]", // Warm brick/brown
  "bg-blue",      // Action blue
  "bg-[#D9829B]", // Rose pink
  "bg-coral",     // Coral orange
  "bg-[#4D7E9D]", // Slate water blue
  "bg-[#3D6942]", // Forest green
];

// Verified photography from Zee Plumbing World site works
const carouselPhotos = [
  "/images/jobs/1.jpeg",
  "/images/jobs/2.jpeg",
  "/images/jobs/3.jpeg",
  "/images/jobs/4.jpeg",
  "/images/jobs/5.jpeg",
  "/images/jobs/1.jpeg",
];

export function EssentialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-10 sm:py-14 overflow-hidden">
      <Container size="default">
        <div className="relative bg-mist rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-12 overflow-hidden border border-black/5">
          {/* Faint Ring & DotGrid in corners */}
          <Ring className="absolute -top-16 -right-16 text-blue" size={260} opacity={0.12} />
          <div className="absolute -bottom-6 -left-6 opacity-40 pointer-events-none">
            <DotGrid color="#0B3F7A" opacity={0.2} />
          </div>

          <div className="relative z-10">
            {/* Header */}
            <SectionHeading
              tags={<TagPair left="Our" right="Services" />}
              title="Plumbing essentials"
              description="Explore Zee plumbing essentials — expert pipe repairs, drain maintenance, AC & water heater plumbing, and fast doorstep solutions."
            />

            {/* Carousel Container with Overlaid Arrow Buttons */}
            <div className="relative">
          {/* Embla Viewport */}
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex gap-4 sm:gap-6">
              {services.map((service, index) => {
                const frameBg = frameColors[index % frameColors.length];
                const photo = carouselPhotos[index % carouselPhotos.length];

                return (
                  <div
                    key={service.slug}
                    className="flex-[0_0_260px] sm:flex-[0_0_290px] md:flex-[0_0_310px] min-w-0"
                  >
                    <Link
                      href={`/services/${service.slug}`}
                      className={`group block p-3 rounded-[24px] ${frameBg} transition-transform duration-300 hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue`}
                    >
                      {/* Top Label */}
                      <div className="px-2 py-2 flex items-center justify-between">
                        <span className="text-white font-medium text-sm sm:text-base tracking-tight truncate">
                          {service.name}
                        </span>
                      </div>

                      {/* Framed Photo */}
                      <div className="relative aspect-[3/4] w-full rounded-[18px] overflow-hidden bg-mist/20">
                        <Image
                          src={photo || ""}
                          alt={service.name}
                          fill
                          sizes="(max-width: 768px) 260px, 310px"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Prev/Next Navigation Controls */}
          <div className="flex items-center justify-end gap-3 mt-6 sm:mt-8">
            <button
              type="button"
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full border border-black/15 bg-white text-ink flex items-center justify-center hover:bg-mist transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              className="w-10 h-10 rounded-full bg-blue text-white flex items-center justify-center hover:bg-blue-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
              aria-label="Next slide"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </Container>
</section>
  );
}
