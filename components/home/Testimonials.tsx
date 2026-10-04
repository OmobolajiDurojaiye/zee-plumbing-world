"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Swirl, DropletDecor } from "@/components/ui/decor/DecorKit";
import { testimonials } from "@/content";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex] || testimonials[0];

  const photos = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
  ];

  return (
    <section className="py-12 sm:py-16">
      <Container size="default">
        {/* Sparkle Header */}
        <div className="text-center mb-8 sm:mb-10 flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-text/75 uppercase tracking-wider">
          <span className="text-blue">✦</span>
          <span>People like you trust our service</span>
          <span className="text-blue">✦</span>
        </div>

        {/* Large Dark Ink Panel */}
        <div className="relative bg-ink text-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-12 lg:p-16 overflow-hidden shadow-lg">
          {/* Subtle Navy/Blue Swirl and Droplets */}
          <Swirl
            className="absolute -right-16 -top-16 text-blue"
            size={360}
            opacity={0.12}
          />
          <DropletDecor
            className="absolute right-12 bottom-8 text-sky"
            size={72}
            opacity={0.08}
          />
          <DropletDecor
            className="absolute left-8 top-10 text-blue"
            size={54}
            opacity={0.07}
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Stacked Rotated Cards Motif */}
            <div className="lg:col-span-5 flex items-center justify-center py-4">
              <div className="relative w-56 sm:w-64 aspect-[4/5]">
                {/* Back Rotated Card (Sky blue) */}
                <div className="absolute inset-0 rounded-[20px] bg-sky transform -rotate-6 transition-transform duration-300" />
                {/* Middle Rotated Card (Coral/Pink) */}
                <div className="absolute inset-0 rounded-[20px] bg-coral transform rotate-6 transition-transform duration-300" />
                {/* Front Card with Customer Photo */}
                <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-[#E27B58] border-2 border-white/20 shadow-md">
                  <Image
                    src={photos[currentIndex % photos.length] || ""}
                    alt={current?.name || "Customer"}
                    fill
                    sizes="(max-width: 768px) 220px, 260px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right: Quote, Author, Location & Navigation */}
            <div className="lg:col-span-7 flex flex-col justify-between min-h-[220px]">
              <div>
                <p className="text-xl sm:text-2xl lg:text-3xl font-normal leading-relaxed sm:leading-snug text-white/95">
                  &ldquo;{current?.quote}&rdquo;
                </p>

                <div className="mt-6 sm:mt-8">
                  <div className="font-semibold text-base sm:text-lg text-white">
                    {current?.name}
                  </div>
                  <div className="text-xs sm:text-sm text-white/60 mt-0.5">
                    {current?.location}
                  </div>
                </div>
              </div>

              {/* Prev / Next Circular Navigation Arrows */}
              <div className="flex items-center gap-3 mt-8 self-end">
                <button
                  type="button"
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border border-white/20 bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-blue text-white flex items-center justify-center hover:bg-blue-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
                  aria-label="Next testimonial"
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
