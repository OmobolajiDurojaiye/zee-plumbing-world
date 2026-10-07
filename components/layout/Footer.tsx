import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react";
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa6";
import { Container } from "@/components/ui/Container";
import { BrandIcon, BrandName } from "@/components/ui/BrandIcon";
import { business, contact, services, areas, social } from "@/content";
import { credits } from "@/content/credits";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Social networks scaffolded
  const socialNetworks: { brand: BrandName; url: string | null | undefined; label: string }[] = [
    { brand: "whatsapp", url: buildWhatsAppLink(), label: "WhatsApp" },
    { brand: "facebook", url: social.facebook, label: "Facebook" },
    { brand: "instagram", url: social.instagram, label: "Instagram" },
    { brand: "x", url: social.x, label: "X (Twitter)" },
    { brand: "linkedin", url: social.linkedin, label: "LinkedIn" },
    { brand: "tiktok", url: social.tiktok, label: "TikTok" },
    { brand: "youtube", url: social.youtube, label: "YouTube" },
    { brand: "telegram", url: social.telegram, label: "Telegram" },
  ];

  const activeSocials = socialNetworks.filter((s) => s.url && s.url.length > 0);

  return (
    <footer className="bg-ink text-white pt-16 pb-28 sm:pb-12 rounded-t-[32px] sm:rounded-t-[40px] mt-16 sm:mt-24 border-t border-white/5">
      <Container size="default">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 drop-shadow-md">
                <Image
                  src="/brand/logo-badge.png"
                  alt="Zee Plumbing World Badge"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg text-white leading-tight flex items-center gap-1.5">
                  <span className="text-[#E5C158]">ZEE</span> PLUMBING WORLD
                  <span className="text-[10px] text-[#E5C158] bg-[#143D66] px-1.5 py-0.5 rounded-full font-bold tracking-wider border border-[#E5C158]/30">
                    NIG LTD
                  </span>
                </span>
                <span className="text-xs text-sky font-semibold tracking-wider">
                  Professional Plumbers
                </span>
              </div>
            </Link>

            <p className="text-sm text-white/70 max-w-sm leading-relaxed">
              {business.shortDescription}
            </p>

            <div className="pt-2 flex flex-col gap-2.5 text-xs text-white/80">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange shrink-0" />
                <span>{contact.emergencyHours}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky shrink-0" />
                <span>
                  {business.address.street}, {business.address.city}, {business.address.state}
                </span>
              </div>
            </div>

            {/* Social channels */}
            {activeSocials.length > 0 && (
              <div className="pt-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-white/60 block mb-2">
                  Connect With Us
                </span>
                <div className="flex items-center gap-2.5 flex-wrap">
                  {activeSocials.map((s) => (
                    <a
                      key={s.brand}
                      href={s.url!}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white hover:text-ink flex items-center justify-center transition-all duration-200"
                    >
                      <BrandIcon brand={s.brand} size={16} />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              {services.slice(0, 6).map((srv) => (
                <li key={srv.slug}>
                  <Link
                    href={`/services/${srv.slug}`}
                    className="hover:text-sky transition-colors"
                  >
                    {srv.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sky font-medium hover:underline inline-block pt-1"
                >
                  All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Areas We Serve */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Abuja Districts
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              {areas.slice(0, 8).map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas/${area.slug}`}
                    className="hover:text-sky transition-colors"
                  >
                    Plumber in {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/areas"
                  className="text-sky font-medium hover:underline inline-block pt-1"
                >
                  All {areas.length} Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Contact
            </h4>
            <div className="space-y-3 text-xs text-white/80">
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4 text-orange" />
                <div>
                  <div className="text-[10px] text-white/60">Call directly</div>
                  <div className="font-semibold text-white">{contact.phoneDisplay}</div>
                </div>
              </a>

              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                <div>
                  <div className="text-[10px] text-white/60">WhatsApp 24/7</div>
                  <div className="font-semibold text-white">Start instant chat</div>
                </div>
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Mail className="w-4 h-4 text-sky" />
                <div className="truncate">
                  <div className="text-[10px] text-white/60">Official Email</div>
                  <div className="font-medium text-white truncate">{contact.email}</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal, Links & Developer Credit */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>
            © {currentYear} {business.legalName}. All rights reserved.
            {business.rcNumber && (
              <span className="ml-2">RC: {business.rcNumber}</span>
            )}
          </p>

          {/* Built by Bolaji Credit */}
          <div className="flex items-center gap-2">
            <span>Designed & built by</span>
            <a
              href={credits.developer.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:underline"
            >
              {credits.developer.shortName}
            </a>
            <div className="flex items-center gap-1.5 ml-1">
              <a
                href={credits.developer.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${credits.developer.shortName} on LinkedIn`}
                className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#0A66C2] text-white flex items-center justify-center transition-colors"
              >
                <FaLinkedinIn className="w-3 h-3" />
              </a>
              <a
                href={credits.developer.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${credits.developer.shortName}'s portfolio`}
                className="w-6 h-6 rounded-full bg-white/10 hover:bg-blue text-white flex items-center justify-center transition-colors"
              >
                <Globe className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/faq" className="hover:text-white transition-colors">
              FAQs
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
