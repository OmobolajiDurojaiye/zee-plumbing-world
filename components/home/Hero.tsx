import React from "react";
import { Container } from "@/components/ui/Container";
import { ServiceFinder } from "./ServiceFinder";
import {
  HouseDropIcon,
  HeroLeftIllustration,
  HeroRightIllustration,
} from "@/components/ui/Icons";

export function Hero() {
  return (
    <section className="pt-2 sm:pt-4 pb-8 sm:pb-12">
      <Container size="default">
        {/* Rounded Mist Container */}
        <div className="relative bg-mist rounded-[28px] sm:rounded-[36px] px-6 py-12 sm:px-12 sm:py-20 lg:py-24 text-center overflow-hidden border border-black/5">
          {/* Left Flat Illustration (Desktop only) */}
          <div className="hidden lg:block absolute left-4 xl:left-8 bottom-6 w-32 xl:w-40 z-10">
            <HeroLeftIllustration />
          </div>

          {/* Right Flat Illustration (Desktop only) */}
          <div className="hidden lg:block absolute right-4 xl:right-8 bottom-6 w-36 xl:w-44 z-10">
            <HeroRightIllustration />
          </div>

          {/* Center Content */}
          <div className="relative z-20 max-w-3xl mx-auto flex flex-col items-center">
            {/* H1 with inline HouseDropIcon */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-semibold text-text tracking-tight leading-[1.04] mb-4 sm:mb-6 text-center">
              Plumbing Experts at
              <br className="hidden sm:inline" /> Your
              <HouseDropIcon />
              Door
            </h1>

            {/* Subtext */}
            <p className="text-muted text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed text-center">
              Expert Plumbing Services: Reliable, certified plumbing solutions delivered
              to your doorstep. Leak repairs, tank setups, and emergency fixes.
            </p>

            {/* Service Finder Bar */}
            <div className="w-full">
              <ServiceFinder />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
