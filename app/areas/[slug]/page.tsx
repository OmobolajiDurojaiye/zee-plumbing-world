import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { Ring } from "@/components/ui/decor/DecorKit";
import { CtaBand } from "@/components/home/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { areas, services, contact, getAreaBySlug } from "@/content";
import { buildMetadata } from "@/lib/seo";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export const dynamicParams = false;

export async function generateStaticParams() {
  return areas.map((area) => ({
    slug: area.slug,
  }));
}

interface AreaPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: AreaPageProps) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) return {};

  return buildMetadata({
    title: `Plumber in ${area.name}, Abuja | Zee Plumbing World`,
    description: `Need an expert plumber in ${area.name}, Abuja? We provide rapid leak repairs, tank plumbing, bathroom installations, and emergency drain clearing.`,
    path: `/areas/${area.slug}`,
  });
}

export default async function AreaDetailPage({ params }: AreaPageProps) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area) {
    notFound();
  }

  const nearbyAreas = areas.filter((a) => a.slug !== area.slug);

  const areaJsonLd = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: `Zee Plumbing World - ${area.name}`,
    telephone: contact.phone,
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${area.name}, Abuja, FCT, Nigeria`,
    },
    geo: area.geo
      ? {
          "@type": "GeoCoordinates",
          latitude: area.geo.lat,
          longitude: area.geo.lng,
        }
      : undefined,
  };

  return (
    <div className="py-6 sm:py-10">
      <JsonLd data={areaJsonLd} />

      <Container size="default">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-muted flex items-center gap-2">
          <Link href="/" className="hover:text-blue transition-colors">Home</Link>
          <span>/</span>
          <Link href="/areas" className="hover:text-blue transition-colors">Areas</Link>
          <span>/</span>
          <span className="text-text font-medium">{area.name}</span>
        </nav>

        {/* Hero Mist Panel */}
        <div className="relative bg-mist rounded-[28px] sm:rounded-[36px] p-6 sm:p-12 lg:p-16 mb-12 sm:mb-16 border border-black/5 overflow-hidden">
          <Ring className="absolute -top-16 -right-16 text-sky" size={260} opacity={0.3} />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue/10 text-blue mb-4">
              <MapPin className="w-3.5 h-3.5" />
              <span>Abuja Service District</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-text tracking-tight mb-5 leading-[1.08]">
              Plumber in {area.name}
            </h1>
            <p className="text-muted text-sm sm:text-base md:text-lg mb-8 leading-relaxed">
              {area.intro}
            </p>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <Button
                href={`/contact?area=${area.slug}`}
                variant="primary"
                size="lg"
                withArrow
              >
                Request a Plumber in {area.name}
              </Button>
              <Button
                href={buildWhatsAppLink({ area: area.name })}
                variant="whatsapp"
                size="lg"
                iconLeft={<BrandIcon name="whatsapp" size={16} className="text-white" />}
              >
                WhatsApp Chat
              </Button>
              <Button
                href={`tel:${contact.phone}`}
                variant="outline"
                size="lg"
                iconLeft={<Phone className="w-4 h-4 text-orange" />}
              >
                Call {contact.phoneDisplay}
              </Button>
            </div>
          </div>
        </div>

        {/* Key Landmarks */}
        {area.landmarks.length > 0 && (
          <section className="mb-14 p-6 sm:p-8 bg-cream rounded-[24px] border border-black/5">
            <h3 className="text-base font-semibold text-text mb-3">
              Frequently Served Estates & Landmarks in {area.name}:
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {area.landmarks.map((landmark, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full bg-white border border-black/10 text-xs font-medium text-text"
                >
                  📍 {landmark}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Available Services in this Area */}
        <section className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted">
              Doorstep Coverage
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-text tracking-tight mt-1">
              Plumbing Services Available in {area.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.slice(0, 6).map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group p-5 rounded-[20px] bg-white border border-black/10 hover:border-blue transition-all flex flex-col justify-between min-h-[160px]"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck className="w-4 h-4 text-green" />
                    <span className="text-xs font-medium text-muted uppercase">Verified Tech</span>
                  </div>
                  <h3 className="font-semibold text-base text-ink group-hover:text-blue transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs text-muted line-clamp-2 mt-1">
                    {service.shortDesc}
                  </p>
                </div>
                <div className="pt-3 flex items-center justify-between text-xs font-medium text-blue border-t border-black/5 mt-3">
                  <span>Book in {area.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Nearby Areas */}
        <section className="mb-16 p-6 sm:p-8 bg-mist/60 rounded-[24px] border border-black/5">
          <h3 className="text-base font-semibold text-text mb-4">
            Also Serving Nearby Locations:
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {nearbyAreas.map((nearby) => (
              <Link
                key={nearby.slug}
                href={`/areas/${nearby.slug}`}
                className="px-3.5 py-1.5 rounded-full bg-white border border-black/10 text-xs font-medium text-text hover:border-blue transition-colors"
              >
                Plumber in {nearby.name}
              </Link>
            ))}
          </div>
        </section>

        <CtaBand />
      </Container>
    </div>
  );
}
