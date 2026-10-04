import React from "react";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Ring } from "@/components/ui/decor/DecorKit";
import { CtaBand } from "@/components/home/CtaBand";
import { areas } from "@/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Plumbing Coverage Areas in Abuja | Zee Plumbing World",
  description:
    "We provide 24/7 rapid plumbing response throughout Maitama, Asokoro, Wuse 2, Gwarinpa, Utako, and all districts across Abuja, FCT. Find your local technician.",
  path: "/areas",
});

export default function AreasPage() {
  return (
    <div className="py-8 sm:py-12">
      <Container size="default">
        {/* Page Hero with subtle decor */}
        <div className="relative bg-mist rounded-[28px] sm:rounded-[36px] p-8 sm:p-14 text-center max-w-4xl mx-auto mb-12 sm:mb-16 border border-black/5 overflow-hidden">
          <Ring className="absolute -top-14 -right-14 text-sky" size={240} opacity={0.3} />
          <Ring className="absolute -bottom-14 -left-14 text-blue" size={200} opacity={0.1} />

          <div className="relative z-10">
            <span className="text-xs uppercase tracking-wider font-semibold text-blue mb-2 block">
              Federal Capital Territory (FCT) Coverage
            </span>
            <h1 className="text-3xl sm:text-5xl font-semibold text-text tracking-tight mb-4">
              Plumbing Services by Location
            </h1>
            <p className="text-muted text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Our strategically positioned mobile plumbing response vans are equipped to handle routine plumbing installations and 24/7 emergency calls across Abuja.
            </p>
          </div>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {areas.map((area) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}`}
              className="group bg-cream hover:bg-[#eae3d5] p-6 sm:p-7 rounded-[24px] border border-black/5 transition-all duration-200 flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-blue uppercase tracking-wider mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{area.state}, Nigeria</span>
                </div>
                <h2 className="text-2xl font-semibold text-ink group-hover:text-blue transition-colors mb-2">
                  Plumber in {area.name}
                </h2>
                <p className="text-xs sm:text-sm text-muted line-clamp-3 leading-relaxed">
                  {area.intro}
                </p>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-black/5 mt-4">
                <span className="text-xs font-medium text-text">
                  Key landmarks: {area.landmarks.slice(0, 2).join(", ")}
                </span>
                <span className="w-8 h-8 rounded-full bg-ink text-white group-hover:bg-blue flex items-center justify-center transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <CtaBand />
      </Container>
    </div>
  );
}
