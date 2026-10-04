import React from "react";
import { Waves, Flame, Wrench, Droplets } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TagPair } from "@/components/ui/Pill";
import { Button } from "@/components/ui/Button";
import { ColorCard } from "@/components/ui/ColorCard";
import { featuredServices } from "@/content";

export function TopServices() {
  const iconMap: Record<string, React.ReactNode> = {
    waves: <Waves className="w-5 h-5" />,
    flame: <Flame className="w-5 h-5" />,
    wrench: <Wrench className="w-5 h-5" />,
    pipette: <Droplets className="w-5 h-5" />,
  };

  return (
    <section className="py-12 sm:py-16">
      <Container size="default">
        {/* Section Heading matching Mendx */}
        <SectionHeading
          tags={<TagPair left="Popular" right="New" />}
          title="Check out our top services for you."
          description="Discover top on-demand plumbing services: expert leak diagnostics, water heater setups, drain unblocking, and pipe renewals."
          action={
            <Button
              href="/services"
              variant="dark"
              size="md"
              withArrow
              aria-label="Explore all plumbing services"
            >
              Explore Now
            </Button>
          }
        />

        {/* 4 Colored Cards Grid (or horizontal scroll on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {featuredServices.slice(0, 4).map((service) => (
            <ColorCard
              key={service.slug}
              tone={service.tone}
              icon={iconMap[service.icon] || <Wrench className="w-5 h-5" />}
              title={service.name}
              description={service.shortDesc}
              href={`/services/${service.slug}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
