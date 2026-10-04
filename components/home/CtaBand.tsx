import React from "react";
import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { Ring } from "@/components/ui/decor/DecorKit";
import { contact } from "@/content";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function CtaBand() {
  return (
    <section className="py-8 sm:py-12">
      <Container size="default">
        <div className="relative bg-navy text-white rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-md">
          {/* Subtle background glow/water wave */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-blue/20 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-sky/15 blur-3xl pointer-events-none" />

          {/* Large Cropped Rings in Mendx style */}
          <Ring
            className="absolute -right-16 -top-16 text-blue"
            size={320}
            opacity={0.25}
          />
          <Ring
            className="absolute -right-8 -bottom-24 text-orange"
            size={260}
            opacity={0.2}
          />

          <div className="relative z-10 max-w-2xl">
            <span className="text-xs uppercase tracking-wider font-semibold text-sky mb-2 block">
              Instant Doorstep Dispatch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white mb-4">
              Got a leak? We&apos;re a call away.
            </h2>
            <p className="text-white/80 text-sm sm:text-base mb-8 max-w-lg leading-relaxed">
              Don&apos;t wait for minor drips to cause major structural water damage. Leaks, burst pipes and blockages fixed fast across Abuja.
            </p>

            {/* 3 Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Button
                href={`tel:${contact.phone}`}
                variant="orange"
                size="lg"
                iconLeft={<Phone className="w-4 h-4" />}
              >
                Call {contact.phoneDisplay}
              </Button>

              <Button
                href={buildWhatsAppLink()}
                variant="whatsapp"
                size="lg"
                iconLeft={<BrandIcon name="whatsapp" size={16} className="text-white" />}
              >
                WhatsApp Us
              </Button>

              <Button
                href="/contact"
                variant="white"
                size="lg"
                withArrow
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
