import React from "react";
import { ShieldCheck, BadgeCheck, HeartHandshake } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SwirlGreen, SwirlOrange, ArcDecoration } from "@/components/ui/Icons";
import { stats } from "@/content";

export function StatsBento() {
  return (
    <section className="py-12 sm:py-16">
      <Container size="default">
        {/* Bento Grid: 12 cols on desktop, 1 col on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
          
          {/* Tile 1: Cream Wide Tile (Speed & Reliability) */}
          <div className="md:col-span-5 bg-cream text-text rounded-[24px] p-7 sm:p-8 flex flex-col justify-between min-h-[220px] sm:min-h-[260px] border border-black/5 shadow-xs">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink leading-tight max-w-xs">
              The secret to happy customers? Speed and reliability.
            </h3>
            <p className="text-xs sm:text-sm text-muted font-medium mt-4">
              Instant service, every time
            </p>
          </div>

          {/* Tile 2: Blue Tile (Areas Served) + Green Swirl */}
          <div className="md:col-span-7 relative bg-blue text-white rounded-[24px] p-7 sm:p-8 flex flex-col justify-between min-h-[220px] sm:min-h-[260px] overflow-hidden shadow-xs">
            {/* Huge Stat */}
            <div className="relative z-10">
              <span className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-none block">
                {stats.areasCount}
              </span>
            </div>

            <div className="relative z-10 max-w-sm mt-4">
              <p className="text-sm sm:text-base text-white/90 font-medium">
                That&apos;s how many areas we&apos;re serving (and counting!)
              </p>
            </div>

            {/* Absolute Green Swirl Decoration */}
            <div className="absolute -right-8 -top-10 sm:-right-4 sm:-top-8 w-48 sm:w-64 h-48 sm:h-64 pointer-events-none opacity-90">
              <SwirlGreen className="w-full h-full" />
            </div>
          </div>

          {/* Tile 3: Orange/Coral Tile (24/7 Availability) + Arc */}
          <div className="md:col-span-6 relative bg-coral text-white rounded-[24px] p-7 sm:p-8 flex flex-col justify-between min-h-[220px] sm:min-h-[260px] overflow-hidden shadow-xs">
            <div className="relative z-10">
              <span className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-none block">
                {stats.emergencyAvailability}
              </span>
            </div>

            <div className="relative z-10 mt-4">
              <p className="text-sm sm:text-base text-white/95 font-medium">
                Available anytime, anywhere you need us
              </p>
            </div>

            {/* Arc Decoration */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-40 sm:w-52 h-40 sm:h-52 pointer-events-none opacity-80">
              <ArcDecoration className="w-full h-full" />
            </div>
          </div>

          {/* Tile 4: Sky Tile (Jobs Completed) */}
          <div className="md:col-span-6 relative bg-sky text-navy rounded-[24px] p-7 sm:p-8 flex flex-col justify-between min-h-[220px] sm:min-h-[260px] shadow-xs">
            <div>
              <span className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-none block text-ink">
                {stats.jobsCompleted}
              </span>
            </div>

            <div className="mt-4">
              <p className="text-sm sm:text-base text-ink/80 font-medium">
                Jobs completed with verified satisfaction
              </p>
            </div>
          </div>

          {/* Tile 5: Mint/Green Wide Tile (Top-rated pros) */}
          <div className="md:col-span-7 relative bg-[#3DCD85] text-ink rounded-[24px] p-7 sm:p-8 flex items-center min-h-[160px] sm:min-h-[180px] overflow-hidden shadow-xs">
            <h3 className="relative z-10 text-2xl sm:text-3xl font-semibold tracking-tight text-ink leading-snug max-w-md">
              Top-rated pros, fast response, & fair pricing
            </h3>

            {/* Subtle loop decoration */}
            <div className="absolute -left-10 -bottom-10 w-44 h-44 rounded-full border-[28px] border-blue/25 pointer-events-none" />
            <div className="absolute -right-8 -top-10 w-48 h-48 rounded-full border-[28px] border-blue/25 pointer-events-none" />
          </div>

          {/* Tile 6: Dark Ink/Navy Tile (Trust over everything) */}
          <div className="md:col-span-5 relative bg-[#420E2C] sm:bg-[#34122C] text-white rounded-[24px] p-7 sm:p-8 flex flex-col justify-between min-h-[160px] sm:min-h-[180px] overflow-hidden shadow-xs">
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-[26px] font-semibold tracking-tight mb-3">
                Trust over everything
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-white/90">
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-coral/25 text-coral flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </span>
                  <span>Safety-first approach</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-coral/25 text-coral flex items-center justify-center shrink-0">
                    <BadgeCheck className="w-3.5 h-3.5" />
                  </span>
                  <span>Verified pros only</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-coral/25 text-coral flex items-center justify-center shrink-0">
                    <HeartHandshake className="w-3.5 h-3.5" />
                  </span>
                  <span>Customer-first mindset</span>
                </li>
              </ul>
            </div>

            {/* Orange loop accent */}
            <div className="absolute -right-6 -bottom-6 w-36 h-36 pointer-events-none opacity-80">
              <SwirlOrange className="w-full h-full" />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
