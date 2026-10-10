"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  X,
  Phone,
  ArrowRight,
  ArrowUpRight,
  Droplets,
  Flame,
  Wrench,
  Waves,
  AlertTriangle,
  Bath,
  Gauge,
  Building2,
  Users,
  Camera,
  HelpCircle,
  Mail,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { services, contact } from "@/content";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

// Map service icon identifier to corresponding Lucide icon
export function getServiceIcon(iconName: string, className = "w-5 h-5") {
  switch (iconName) {
    case "droplets":
      return <Droplets className={className} />;
    case "flame":
      return <Flame className={className} />;
    case "wrench":
      return <Wrench className={className} />;
    case "waves":
      return <Waves className={className} />;
    case "siren":
      return <AlertTriangle className={className} />;
    case "bath":
      return <Bath className={className} />;
    case "gauge":
      return <Gauge className={className} />;
    case "building":
      return <Building2 className={className} />;
    default:
      return <Wrench className={className} />;
  }
}

// Tone styles for 40px icon badges
export function getToneBadgeClasses(tone: string) {
  switch (tone) {
    case "blue":
      return "bg-blue text-white";
    case "navy":
      return "bg-navy text-white";
    case "orange":
      return "bg-orange text-white";
    case "coral":
      return "bg-coral text-white";
    case "sky":
      return "bg-sky text-navy";
    case "mint":
      return "bg-mint text-ink";
    case "green":
      return "bg-[#5FA83A] text-white";
    case "cream":
      return "bg-cream text-ink";
    default:
      return "bg-blue text-white";
  }
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300 py-3 sm:py-4",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-xs py-2.5 sm:py-3"
          : "bg-transparent"
      )}
    >
      <Container size="default">
        <div className="flex items-center justify-between">
          {/* Logo & Wordmark - exactly preserved */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue rounded-lg"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full shrink-0 group-hover:scale-105 transition-transform drop-shadow-xs">
              <Image
                src="/brand/logo-badge.png"
                alt="Zee Plumbing World Logo"
                fill
                sizes="44px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-[#060CA0] leading-none flex items-center gap-1.5">
                <span className="text-[#060CA0] tracking-tight">ZEE</span>
                <span className="text-[10px] font-bold text-white bg-[#056960] px-1.5 py-0.5 rounded-full uppercase tracking-wider shadow-2xs">
                  NIG LTD
                </span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-bold text-[#056960] mt-1">
                Plumbing World
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-6 lg:gap-8"
          >
            {/* Services Dropdown (Mega-Menu) */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 text-sm font-medium text-text/80 hover:text-blue transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue rounded-md"
                aria-expanded={activeDropdown === "services"}
              >
                <span>Services</span>
                <ChevronDown
                  className={cn(
                    "w-3.5 h-3.5 text-muted transition-transform duration-200",
                    activeDropdown === "services" && "rotate-180 text-blue"
                  )}
                />
              </button>

              {activeDropdown === "services" && (
                <div className="absolute top-full -left-20 w-[680px] lg:w-[720px] rounded-[24px] bg-white p-6 shadow-2xl border border-black/10 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  {/* Mega-menu Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-black/5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-muted">
                      Our Plumbing Services
                    </span>
                    <Link
                      href="/services"
                      onClick={() => setActiveDropdown(null)}
                      className="text-xs font-semibold text-blue hover:underline inline-flex items-center gap-1"
                    >
                      <span>View all services</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  {/* 2-Column Grid of Service Tiles */}
                  <div className="grid grid-cols-2 gap-2.5 mb-5">
                    {services.map((srv) => (
                      <Link
                        key={srv.slug}
                        href={`/services/${srv.slug}`}
                        onClick={() => setActiveDropdown(null)}
                        className="group flex items-center justify-between p-2.5 rounded-[16px] hover:bg-mist transition-all duration-200"
                      >
                        <div className="flex items-center gap-3 min-w-0 pr-2">
                          <div
                            className={cn(
                              "w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 shadow-2xs",
                              getToneBadgeClasses(srv.tone)
                            )}
                          >
                            {getServiceIcon(srv.icon, "w-4 h-4")}
                          </div>
                          <div className="min-w-0">
                            <div className="font-semibold text-xs sm:text-sm text-ink group-hover:text-blue transition-colors truncate">
                              {srv.name}
                            </div>
                            <div className="text-[11px] text-muted truncate">
                              {srv.shortDesc}
                            </div>
                          </div>
                        </div>

                        <div className="opacity-0 group-hover:opacity-100 transition-opacity text-blue shrink-0 pr-1">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Featured Emergency Bar */}
                  <div className="rounded-[18px] bg-navy text-white p-4 flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-orange shrink-0">
                        <AlertTriangle className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold leading-tight">
                          Plumbing Emergency in Abuja?
                        </div>
                        <div className="text-[11px] text-white/70">
                          Rapid on-duty technicians on standby 24/7
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        href={`tel:${contact.phone}`}
                        variant="orange"
                        size="sm"
                        iconLeft={<Phone className="w-3.5 h-3.5" />}
                        onClick={() => trackEvent("click_call", { location: "mega_menu" })}
                      >
                        Call Now
                      </Button>
                      <Button
                        href={buildWhatsAppLink({ message: "Hello Zee Plumbing World, I have an urgent plumbing emergency in Abuja." })}
                        variant="whatsapp"
                        size="sm"
                        iconLeft={<FaWhatsapp className="w-3.5 h-3.5 text-white" />}
                        onClick={() => trackEvent("click_whatsapp", { location: "mega_menu" })}
                      >
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* About us Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 text-sm font-medium text-text/80 hover:text-blue transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue rounded-md"
                aria-expanded={activeDropdown === "about"}
              >
                <span>About us</span>
                <ChevronDown
                  className={cn(
                    "w-3.5 h-3.5 text-muted transition-transform duration-200",
                    activeDropdown === "about" && "rotate-180 text-blue"
                  )}
                />
              </button>

              {activeDropdown === "about" && (
                <div className="absolute top-full left-0 w-72 rounded-[24px] bg-white p-4 shadow-xl border border-black/10 animate-in fade-in slide-in-from-top-2 duration-150 z-50 space-y-1.5">
                  <Link
                    href="/about"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-mist transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-full bg-blue/10 text-blue flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-ink group-hover:text-blue">
                        Our Story & Team
                      </div>
                      <div className="text-[11px] text-muted">Licensed Abuja plumbers</div>
                    </div>
                  </Link>

                  <Link
                    href="/gallery"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-mist transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-full bg-orange/10 text-orange flex items-center justify-center shrink-0">
                      <Camera className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-ink group-hover:text-blue">
                        Work Gallery
                      </div>
                      <div className="text-[11px] text-muted">Before & after photos</div>
                    </div>
                  </Link>

                  <Link
                    href="/faq"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-mist transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-full bg-mint/40 text-ink flex items-center justify-center shrink-0">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-ink group-hover:text-blue">
                        Common FAQs
                      </div>
                      <div className="text-[11px] text-muted">Warranties, pricing & response</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Contact Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("contact")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 text-sm font-medium text-text/80 hover:text-blue transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue rounded-md"
                aria-expanded={activeDropdown === "contact"}
              >
                <span>Contact</span>
                <ChevronDown
                  className={cn(
                    "w-3.5 h-3.5 text-muted transition-transform duration-200",
                    activeDropdown === "contact" && "rotate-180 text-blue"
                  )}
                />
              </button>

              {activeDropdown === "contact" && (
                <div className="absolute top-full right-0 w-80 rounded-[24px] bg-white p-4 shadow-xl border border-black/10 animate-in fade-in slide-in-from-top-2 duration-150 z-50 space-y-2">
                  <Link
                    href="/contact"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-mist transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-full bg-blue text-white flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-ink group-hover:text-blue">
                        Free Quote Form
                      </div>
                      <div className="text-[11px] text-muted">Get itemized pricing</div>
                    </div>
                  </Link>

                  <a
                    href={`tel:${contact.phone}`}
                    onClick={() => trackEvent("click_call", { location: "header_dropdown" })}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-mist transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-full bg-orange text-white flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-ink group-hover:text-blue">
                        Call {contact.phoneDisplay}
                      </div>
                      <div className="text-[11px] text-muted">24/7 direct phone hotline</div>
                    </div>
                  </a>

                  <a
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent("click_whatsapp", { location: "header_dropdown" })}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-mist transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
                      <FaWhatsapp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-ink group-hover:text-blue">
                        WhatsApp Live Chat
                      </div>
                      <div className="text-[11px] text-muted">Instant photo & video diagnostics</div>
                    </div>
                  </a>
                </div>
              )}
            </div>
          </nav>

          {/* Action CTA & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <Button
              href="/contact"
              variant="primary"
              size="md"
              withArrow
              className="hidden sm:inline-flex"
              onClick={() => trackEvent("cta_click", { label: "Get a Quote", location: "navbar" })}
            >
              Get a Quote
            </Button>

            {/* Mobile Menu Button with shorter bottom line */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl bg-mist border border-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
              aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-ink" />
              ) : (
                <div className="flex flex-col gap-1 w-5 items-end">
                  <span className="w-5 h-0.5 bg-ink rounded-full" />
                  <span className="w-5 h-0.5 bg-ink rounded-full" />
                  <span className="w-3.5 h-0.5 bg-blue rounded-full" />
                </div>
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer Navigation with 2-Column Services Icon Grid */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[60px] bottom-0 z-50 bg-white/95 backdrop-blur-md p-6 overflow-y-auto md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-5">
            {/* Top Navigation Links */}
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-lg font-semibold text-text py-2 border-b border-black/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Accordion for Services (2-Column Icon Grid) */}
              <div className="border-b border-black/5 pb-2">
                <button
                  type="button"
                  onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                  className="w-full flex items-center justify-between text-lg font-semibold text-text py-2"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-muted transition-transform",
                      mobileServicesExpanded && "rotate-180 text-blue"
                    )}
                  />
                </button>

                {mobileServicesExpanded && (
                  <div className="grid grid-cols-2 gap-2 pt-2 pb-3">
                    {services.map((srv) => (
                      <Link
                        key={srv.slug}
                        href={`/services/${srv.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-2 p-2 rounded-xl bg-mist border border-black/5 text-xs font-semibold text-ink"
                      >
                        <div
                          className={cn(
                            "w-7 h-7 rounded-full flex items-center justify-center shrink-0",
                            getToneBadgeClasses(srv.tone)
                          )}
                        >
                          {getServiceIcon(srv.icon, "w-3.5 h-3.5")}
                        </div>
                        <span className="truncate">{srv.name}</span>
                      </Link>
                    ))}
                    <div className="col-span-2 pt-1 text-center">
                      <Link
                        href="/services"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-xs font-semibold text-blue hover:underline"
                      >
                        View all services →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/areas"
                className="block text-lg font-semibold text-text py-2 border-b border-black/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                Abuja Coverage Areas
              </Link>

              <Link
                href="/about"
                className="block text-lg font-semibold text-text py-2 border-b border-black/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>

              <Link
                href="/gallery"
                className="block text-lg font-semibold text-text py-2 border-b border-black/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                Work Gallery
              </Link>

              <Link
                href="/faq"
                className="block text-lg font-semibold text-text py-2 border-b border-black/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>

              <Link
                href="/contact"
                className="block text-lg font-semibold text-text py-2 border-b border-black/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>

            {/* Direct Quick Actions */}
            <div className="pt-2 flex flex-col gap-3">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                withArrow
                className="w-full justify-between"
                onClick={() => {
                  trackEvent("cta_click", { label: "Get a Quote", location: "mobile_menu" });
                  setMobileMenuOpen(false);
                }}
              >
                Get a Quote
              </Button>

              <div className="grid grid-cols-2 gap-3">
                <Button
                  href={`tel:${contact.phone}`}
                  variant="orange"
                  size="md"
                  iconLeft={<Phone className="w-4 h-4" />}
                  className="w-full text-xs"
                  onClick={() => trackEvent("click_call", { location: "mobile_menu" })}
                >
                  Call Now
                </Button>
                <Button
                  href={buildWhatsAppLink()}
                  variant="whatsapp"
                  size="md"
                  iconLeft={<FaWhatsapp className="w-4 h-4 text-white" />}
                  className="w-full text-xs"
                  onClick={() => trackEvent("click_whatsapp", { location: "mobile_menu" })}
                >
                  WhatsApp
                </Button>
              </div>
            </div>

            <div className="mt-auto pt-4 text-center text-xs text-muted">
              <p>Zee Plumbing World Nig Ltd • Abuja, FCT</p>
              <p className="mt-1">{contact.emergencyHours}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
