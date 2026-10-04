import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { business, contact } from "@/content";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact & Free Quote | Zee Plumbing World Nig Ltd",
  description:
    "Request an instant plumbing quote or call our 24/7 emergency dispatch team in Abuja. Fast doorstep solutions for leaks, tanks, and drain blockages.",
  path: "/contact",
});

interface ContactPageProps {
  searchParams: Promise<{ service?: string; area?: string }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { service, area } = await searchParams;

  return (
    <div className="py-8 sm:py-12">
      <Container size="default">
        {/* Page Hero */}
        <div className="bg-mist rounded-[28px] sm:rounded-[36px] p-8 sm:p-14 text-center max-w-4xl mx-auto mb-12 sm:mb-16 border border-black/5">
          <span className="text-xs uppercase tracking-wider font-semibold text-blue mb-2 block">
            We&apos;re Here to Help
          </span>
          <h1 className="text-3xl sm:text-5xl font-semibold text-text tracking-tight mb-4">
            Get a Fast Quote or Emergency Dispatch
          </h1>
          <p className="text-muted text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Fill out the form below for a transparent, itemized quote, or connect directly with our emergency plumber on WhatsApp or phone.
          </p>
        </div>

        {/* 2-Column Layout: Form (Left) & Direct Contact Details (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 items-start">
          {/* Left: Quote Form */}
          <div className="lg:col-span-7">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-text tracking-tight">
                Request a Plumbing Quote
              </h2>
              <p className="text-xs sm:text-sm text-muted mt-1">
                We typically respond within 15–30 minutes during service hours.
              </p>
            </div>
            <QuoteForm defaultService={service} defaultArea={area} />
          </div>

          {/* Right: Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-2xl font-semibold text-text tracking-tight mb-4">
              Direct Contact Lines
            </h2>

            {/* Phone Card (Orange Accent) */}
            <a
              href={`tel:${contact.phone}`}
              className="group block p-6 rounded-[24px] bg-orange text-white shadow-sm hover:scale-[1.01] transition-transform"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-white/80 uppercase tracking-wider font-semibold">
                    Call Directly
                  </span>
                  <div className="text-xl font-bold">{contact.phoneDisplay}</div>
                </div>
              </div>
              <p className="text-xs text-white/90">
                Tap to call now for immediate telephone guidance or priority dispatch.
              </p>
            </a>

            {/* WhatsApp Card (Green Accent) */}
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-[24px] bg-[#25D366] text-white shadow-sm hover:scale-[1.01] transition-transform"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <BrandIcon name="whatsapp" size={22} className="text-white" />
                </div>
                <div>
                  <span className="text-xs text-white/80 uppercase tracking-wider font-semibold">
                    WhatsApp 24/7
                  </span>
                  <div className="text-xl font-bold">Start Instant Chat</div>
                </div>
              </div>
              <p className="text-xs text-white/90">
                Send photos or video of the leak/issue for quick remote diagnostics.
              </p>
            </a>

            {/* Email & Hours (Cream Cards) */}
            <div className="p-6 rounded-[24px] bg-cream border border-black/5 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-blue/10 text-blue flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-muted uppercase tracking-wider block">
                    Operating Hours
                  </span>
                  <div className="text-sm font-semibold text-ink">{contact.hours}</div>
                  <div className="text-xs text-coral font-medium mt-0.5">
                    {contact.emergencyHours}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-black/5">
                <div className="w-9 h-9 rounded-full bg-orange/15 text-orange flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-muted uppercase tracking-wider block">
                    Workshop & Dispatch Hub
                  </span>
                  <div className="text-sm text-ink font-medium">
                    {business.address.street}, {business.address.city}, {business.address.state}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-black/5">
                <div className="w-9 h-9 rounded-full bg-mint/40 text-ink flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 text-ink" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-muted uppercase tracking-wider block">
                    Official Email
                  </span>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sm text-blue font-medium hover:underline"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Service Guarantee Banner */}
            <div className="p-5 rounded-[20px] bg-mist border border-black/5 text-xs text-muted leading-relaxed">
              <strong className="text-ink block font-semibold mb-1">
                ✓ Transparent Labor & Materials Policy
              </strong>
              All diagnostic site visits come with a written physical inspection report and clear pricing before commencement.
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
