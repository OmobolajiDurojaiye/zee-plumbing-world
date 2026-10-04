"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/home/CtaBand";
import { faqs } from "@/content";

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="py-8 sm:py-12">
      <Container size="narrow">
        {/* Page Hero */}
        <div className="bg-mist rounded-[28px] sm:rounded-[36px] p-8 sm:p-14 text-center mb-12 sm:mb-16 border border-black/5">
          <span className="text-xs uppercase tracking-wider font-semibold text-blue mb-2 block">
            Got Questions?
          </span>
          <h1 className="text-3xl sm:text-5xl font-semibold text-text tracking-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-muted text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            Everything you need to know about our response times, service warranty, transparent pricing, and booking process.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-cream rounded-[20px] sm:rounded-[24px] border border-black/5 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-base sm:text-lg text-ink">
                    {faq.q}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white text-ink flex items-center justify-center shrink-0 shadow-xs">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-muted text-xs sm:text-sm leading-relaxed border-t border-black/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <CtaBand />
      </Container>
    </div>
  );
}
