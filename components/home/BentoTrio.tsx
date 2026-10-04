import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CircleArrowButton } from "@/components/ui/CircleArrowButton";
import { stats } from "@/content";

export function BentoTrio() {
  return (
    <section className="py-6 sm:py-8">
      <Container size="default">
        {/* Desktop Grid: 3 equal height columns; Mobile: horizontal snap scroll */}
        <div className="flex overflow-x-auto sm:overflow-visible gap-4 sm:gap-6 pb-4 sm:pb-0 snap-x snap-mandatory scrollbar-none sm:grid sm:grid-cols-3 sm:items-stretch">
          
          {/* Card 1 (Left): Tradesperson at work */}
          <div className="min-w-[280px] sm:min-w-0 flex-1 snap-center group relative rounded-[24px] overflow-hidden min-h-[360px] sm:min-h-[420px] bg-mist flex flex-col justify-end p-5 sm:p-6 border border-black/5 shadow-xs">
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop"
              alt="Plumbing tradesperson at work"
              fill
              sizes="(max-width: 768px) 85vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Bottom Caption & Arrow Button */}
            <div className="relative z-10 flex items-end justify-between gap-3 w-full">
              <span className="text-white font-medium text-base sm:text-lg leading-tight max-w-[180px]">
                Fast booking, instant help
              </span>
              <CircleArrowButton
                href="/contact"
                tone="white"
                size="md"
                ariaLabel="Book fast plumbing help"
              />
            </div>
          </div>

          {/* Card 2 (Middle): Split column */}
          <div className="min-w-[280px] sm:min-w-0 flex-1 snap-center flex flex-col gap-4 sm:gap-5 min-h-[360px] sm:min-h-[420px]">
            {/* Upper Image Card */}
            <div className="group relative flex-1 rounded-[24px] overflow-hidden min-h-[220px] bg-mist flex flex-col justify-end p-5 sm:p-6 border border-black/5 shadow-xs">
              <Image
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop"
                alt="Skilled plumbing technician"
                fill
                sizes="(max-width: 768px) 85vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="relative z-10 flex items-end justify-between gap-3 w-full">
                <span className="text-white font-medium text-base sm:text-lg leading-tight max-w-[190px]">
                  Skilled experts, reliable service
                </span>
                <CircleArrowButton
                  href="/services"
                  tone="white"
                  size="md"
                  ariaLabel="View skilled plumbing services"
                />
              </div>
            </div>

            {/* Lower Stat Card: Solid brand-blue with avatars and 98% */}
            <div className="bg-blue text-white rounded-[24px] p-5 sm:p-6 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                {/* Overlapping circular avatars */}
                <div className="flex -space-x-3 shrink-0">
                  <div className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-sky">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop"
                      alt="Customer"
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-mint">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop"
                      alt="Customer"
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-bold tracking-tight leading-none">
                    {stats.satisfactionPercent}%
                  </div>
                  <div className="text-xs text-white/80 font-medium mt-0.5">
                    Customer satisfaction
                  </div>
                </div>
              </div>

              <Link
                href="/about"
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
                aria-label="Learn about our customer guarantee"
              >
                <span className="text-xs font-semibold">↗</span>
              </Link>
            </div>
          </div>

          {/* Card 3 (Right): Easy, on-demand */}
          <div className="min-w-[280px] sm:min-w-0 flex-1 snap-center group relative rounded-[24px] overflow-hidden min-h-[360px] sm:min-h-[420px] bg-mist flex flex-col justify-end p-5 sm:p-6 border border-black/5 shadow-xs">
            <Image
              src="https://images.unsplash.com/photo-1505798577917-a65157d3320a?q=80&w=800&auto=format&fit=crop"
              alt="Plumber fixing installation on-demand"
              fill
              sizes="(max-width: 768px) 85vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="relative z-10 flex items-end justify-between gap-3 w-full">
              <span className="text-white font-medium text-base sm:text-lg leading-tight max-w-[180px]">
                Safe, easy, on-demand
              </span>
              <CircleArrowButton
                href="/services/emergency-plumbing"
                tone="white"
                size="md"
                ariaLabel="View on-demand emergency services"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
