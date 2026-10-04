import React from "react";
import { Hero } from "@/components/home/Hero";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { BentoTrio } from "@/components/home/BentoTrio";
import { TopServices } from "@/components/home/TopServices";
import { EssentialsCarousel } from "@/components/home/EssentialsCarousel";
import { StatsBento } from "@/components/home/StatsBento";
import { Testimonials } from "@/components/home/Testimonials";
import { PopularServicesList } from "@/components/home/PopularServicesList";
import { AreasStrip } from "@/components/home/AreasStrip";
import { CtaBand } from "@/components/home/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildLocalBusinessJsonLd } from "@/lib/seo";

export default function HomePage() {
  const localBusinessData = buildLocalBusinessJsonLd();

  return (
    <>
      <JsonLd data={localBusinessData} />
      <Hero />
      <WhyChooseUs />
      <BentoTrio />
      <TopServices />
      <EssentialsCarousel />
      <StatsBento />
      <Testimonials />
      <PopularServicesList />
      <AreasStrip />
      <CtaBand />
    </>
  );
}
