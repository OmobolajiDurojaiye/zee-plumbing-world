"use client";

import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { contact } from "@/content";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

export function FloatingActions() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide when focused on inputs in contact page
    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT")
      ) {
        setVisible(false);
      }
    };

    const handleFocusOut = () => {
      setVisible(true);
    };

    document.addEventListener("focusin", handleFocusIn);
    document.addEventListener("focusout", handleFocusOut);

    return () => {
      document.removeEventListener("focusin", handleFocusIn);
      document.removeEventListener("focusout", handleFocusOut);
    };
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Quick contact shortcuts"
      className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-30 flex flex-col gap-3.5 items-end pointer-events-auto select-none"
    >
      {/* WhatsApp Button with pulse ring */}
      <div className="relative group">
        <span
          className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 blur-xs group-hover:opacity-75 transition duration-300 animate-pulse motion-reduce:animate-none"
          aria-hidden="true"
        />
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("click_whatsapp", { location: "floating" })}
          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
          aria-label="Chat with Zee Plumbing World on WhatsApp"
        >
          <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </a>
      </div>

      {/* Direct Phone Call Button */}
      <div className="relative group">
        <a
          href={`tel:${contact.phone}`}
          onClick={() => trackEvent("click_call", { location: "floating" })}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-orange text-white flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange"
          aria-label={`Call Zee Plumbing World at ${contact.phoneDisplay}`}
        >
          <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
      </div>
    </aside>
  );
}
