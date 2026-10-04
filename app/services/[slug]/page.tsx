import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone, ArrowRight, HelpCircle, PhoneCall, Search, Wrench, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { Ring } from "@/components/ui/decor/DecorKit";
import { CtaBand } from "@/components/home/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { services, areas, contact, getServiceBySlug } from "@/content";
import { buildMetadata } from "@/lib/seo";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export const dynamicParams = false;

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return buildMetadata({
    title: `${service.name} in Abuja`,
    description: service.shortDesc,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    description: service.longDesc,
    provider: {
      "@type": "Plumber",
      name: "Zee Plumbing World Nig Ltd",
      telephone: contact.phone,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Abuja",
      },
      ...areas.map((a) => ({
        "@type": "AdministrativeArea",
        name: `${a.name}, Abuja`,
      })),
    ],
  };

  return (
    <div className="py-6 sm:py-10">
      <JsonLd data={serviceJsonLd} />

      <Container size="default">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-muted flex items-center gap-2">
          <Link href="/" className="hover:text-blue transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-blue transition-colors">Services</Link>
          <span>/</span>
          <span className="text-text font-medium">{service.name}</span>
        </nav>

        {/* Hero Mist Panel */}
        <div className="relative bg-mist rounded-[28px] sm:rounded-[36px] p-6 sm:p-12 lg:p-16 mb-12 sm:mb-16 border border-black/5 overflow-hidden">
          <Ring className="absolute -top-16 -right-16 text-blue" size={260} opacity={0.12} />
          <div className="relative z-10 max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue/10 text-blue mb-4">
              Doorstep Plumbing Service
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-text tracking-tight mb-5 leading-[1.08]">
              {service.name} in Abuja
            </h1>
            <p className="text-muted text-sm sm:text-base md:text-lg mb-8 leading-relaxed">
              {service.longDesc}
            </p>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <Button
                href={`/contact?service=${service.slug}`}
                variant="primary"
                size="lg"
                withArrow
              >
                Get a Fast Quote
              </Button>
              <Button
                href={buildWhatsAppLink({ service: service.name })}
                variant="whatsapp"
                size="lg"
                iconLeft={<BrandIcon name="whatsapp" size={16} className="text-white" />}
              >
                Chat on WhatsApp
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

        {/* Process Steps */}
        <section className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted">
              How We Work
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-text tracking-tight mt-1">
              Our 4-Step Precision Process
            </h2>
          </div>

          {(() => {
            const stepIcons = [PhoneCall, Search, Wrench, CheckCircle2];
            return (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {service.process.map((step, idx) => {
                  const StepIcon = stepIcons[idx % stepIcons.length] ?? Wrench;
                  return (
                    <div
                      key={idx}
                      className="bg-cream rounded-[24px] p-6 border border-black/5 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-8 h-8 rounded-full bg-blue text-white font-bold text-xs flex items-center justify-center">
                            {idx + 1}
                          </div>
                          <div className="w-8 h-8 rounded-full bg-blue/10 text-blue flex items-center justify-center">
                            <StepIcon className="w-4 h-4" />
                          </div>
                        </div>
                        <h3 className="font-semibold text-base sm:text-lg text-ink mb-2">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted leading-relaxed">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })()}
        </section>

        {/* Service FAQs */}
        {service.faqs.length > 0 && (
          <section className="mb-16">
            <div className="mb-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                Common Questions
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-text tracking-tight mt-1">
                Frequently Asked Questions about {service.name}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-mist/70 rounded-[20px] p-6 border border-black/5 space-y-2"
                >
                  <div className="flex items-start gap-2.5">
                    <HelpCircle className="w-4 h-4 text-blue shrink-0 mt-0.5" />
                    <h3 className="font-semibold text-sm sm:text-base text-text">
                      {faq.q}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-muted pl-6 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Coverage Areas Chips */}
        <section className="mb-16 p-6 sm:p-8 bg-cream/70 rounded-[24px] border border-black/5">
          <h3 className="text-lg font-semibold text-text mb-4">
            Available across all prime Abuja districts:
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="px-3.5 py-1.5 rounded-full bg-white border border-black/10 text-xs font-medium text-text hover:border-blue transition-colors"
              >
                {service.name} in {area.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Related Services */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-text">
              Related Plumbing Services
            </h3>
            <Link href="/services" className="text-xs font-semibold text-blue hover:underline">
              View all services →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                href={`/services/${rel.slug}`}
                className="p-5 rounded-[20px] bg-white border border-black/10 hover:border-blue transition-all group flex items-center justify-between"
              >
                <div>
                  <div className="font-semibold text-sm sm:text-base text-text group-hover:text-blue transition-colors">
                    {rel.name}
                  </div>
                  <p className="text-xs text-muted line-clamp-1 mt-0.5">{rel.shortDesc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted group-hover:text-blue group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </section>

        <CtaBand />
      </Container>
    </div>
  );
}
