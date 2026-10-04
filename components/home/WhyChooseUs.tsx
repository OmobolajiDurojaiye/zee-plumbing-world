import React from "react";
import { Clock3, ShieldCheck, Wallet, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function WhyChooseUs() {
  const highlights = [
    {
      icon: <Clock3 className="w-4 h-4 text-orange" />,
      label: "24/7 On-Duty Dispatch",
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-green" />,
      label: "Verified & Licensed Pros",
    },
    {
      icon: <Wallet className="w-4 h-4 text-blue" />,
      label: "Transparent, Upfront Quotes",
    },
    {
      icon: <Zap className="w-4 h-4 text-orange" />,
      label: "Fast Response Across Abuja",
    },
  ];

  return (
    <div className="py-4">
      <Container size="default">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-cream/70 border border-black/5 text-xs sm:text-sm font-semibold text-text shadow-2xs"
            >
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-2xs">
                {item.icon}
              </div>
              <span className="truncate">{item.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
