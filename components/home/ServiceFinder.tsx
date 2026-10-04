"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Search } from "lucide-react";
import { areas, services } from "@/content";
import { trackEvent } from "@/lib/analytics";

export function ServiceFinder() {
  const router = useRouter();
  const [selectedArea, setSelectedArea] = useState("");
  const [serviceQuery, setServiceQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    trackEvent("search_services", {
      area: selectedArea || "all",
      service: serviceQuery || "all",
    });

    // Check if query matches a known service slug
    const matchedService = services.find(
      (s) =>
        s.name.toLowerCase().includes(serviceQuery.toLowerCase().trim()) ||
        s.keywords.some((k) =>
          k.toLowerCase().includes(serviceQuery.toLowerCase().trim())
        )
    );

    if (matchedService && !selectedArea) {
      router.push(`/services/${matchedService.slug}`);
      return;
    }

    if (selectedArea && !serviceQuery) {
      router.push(`/areas/${selectedArea}`);
      return;
    }

    // Default to contact page with prefilled params
    const params = new URLSearchParams();
    if (selectedArea) params.set("area", selectedArea);
    if (serviceQuery) params.set("service", serviceQuery);
    router.push(`/contact?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto bg-white rounded-[18px] sm:rounded-full p-2 sm:p-2.5 shadow-md border border-black/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-2"
    >
      {/* Location Selector */}
      <div className="flex items-center gap-2 px-3 py-2 sm:py-1 rounded-xl sm:rounded-full bg-mist sm:bg-transparent border sm:border-r sm:border-black/10 border-transparent shrink-0">
        <MapPin className="w-4 h-4 text-blue shrink-0" />
        <select
          value={selectedArea}
          onChange={(e) => setSelectedArea(e.target.value)}
          className="bg-transparent text-xs sm:text-sm font-medium text-text focus:outline-none cursor-pointer pr-1"
          aria-label="Select service location"
        >
          <option value="">Location</option>
          {areas.map((a) => (
            <option key={a.slug} value={a.slug}>
              {a.name}
            </option>
          ))}
        </select>
      </div>

      {/* Service Input */}
      <div className="flex-1 px-3 py-2 sm:py-1">
        <input
          type="text"
          value={serviceQuery}
          onChange={(e) => setServiceQuery(e.target.value)}
          placeholder="What service are you looking for?"
          className="w-full bg-transparent text-xs sm:text-sm text-text placeholder:text-muted focus:outline-none"
          aria-label="What service are you looking for"
        />
      </div>

      {/* Search Button */}
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 bg-ink text-white hover:bg-black px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-full text-xs sm:text-sm font-medium transition-all active:scale-[0.98] shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
        aria-label="Search plumbing services"
      >
        <Search className="w-4 h-4" />
        <span>Search</span>
      </button>
    </form>
  );
}
