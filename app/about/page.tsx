import React from "react";
import { ShieldCheck, Users, Wrench, CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/home/CtaBand";
import { Ring, Swirl } from "@/components/ui/decor/DecorKit";
import { business } from "@/content";
import { developer } from "@/content/credits";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Us | Zee Plumbing World Nig Ltd",
  description:
    "Learn about Zee Plumbing World Nig Ltd — trusted plumbing engineering contractors in Abuja delivering speed, technical precision, and verified safety.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="py-8 sm:py-12">
      <Container size="default">
        {/* Hero with subtle decor */}
        <div className="relative bg-mist rounded-[28px] sm:rounded-[36px] p-8 sm:p-14 text-center max-w-4xl mx-auto mb-14 border border-black/5 overflow-hidden">
          <Ring className="absolute -top-12 -left-12 text-orange" size={220} opacity={0.15} />
          <Ring className="absolute -bottom-16 -right-16 text-blue" size={260} opacity={0.1} />

          <div className="relative z-10">
            <span className="text-xs uppercase tracking-wider font-semibold text-blue mb-2 block">
              Our Story & Craft
            </span>
            <h1 className="text-3xl sm:text-5xl font-semibold text-text tracking-tight mb-4">
              Reliable Engineering, Friendly Doorstep Service
            </h1>
            <p className="text-muted text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              {business.longDescription}
            </p>
          </div>
        </div>

        {/* Company Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-cream rounded-[24px] p-7 border border-black/5 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue/10 text-blue flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-ink mb-2">Vetted Technicians</h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Every plumber on our crew undergoes rigorous technical testing in modern PPR fusion welding, drain snaking, and local safety standards.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-black/5 text-xs font-semibold text-blue">
              100% Background Checked
            </div>
          </div>

          <div className="bg-cream rounded-[24px] p-7 border border-black/5 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-orange/10 text-orange flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-ink mb-2">Modern Diagnostic Gear</h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                We invest in non-destructive acoustic listening sensors, motorized augers, and high-precision pressure testing rigs to solve problems without breaking walls.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-black/5 text-xs font-semibold text-orange">
              Zero Guesswork
            </div>
          </div>

          <div className="bg-cream rounded-[24px] p-7 border border-black/5 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-green/10 text-green flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-ink mb-2">Workmanship Guarantee</h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                We stand behind our installations. If a pipe joint or fixture installed by us leaks within our warranty term, we repair it promptly at zero cost.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-black/5 text-xs font-semibold text-green">
              Guaranteed Satisfaction
            </div>
          </div>
        </div>

        {/* Brand Values Panel */}
        <div className="relative bg-ink text-white rounded-[28px] sm:rounded-[36px] p-8 sm:p-14 mb-16 shadow-lg overflow-hidden">
          <Swirl className="absolute -right-20 -bottom-20 text-blue" size={320} opacity={0.12} />
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs uppercase tracking-wider font-semibold text-sky mb-2 block">
              Core Principles
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight mb-6">
              Trust Over Everything
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-white/80">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-sky shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Transparent, Upfront Pricing:</strong>
                  No sudden surprises or hidden costs. We quote labor and verified materials before turning a single wrench.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-sky shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Spotless Cleanup:</strong>
                  We respect your residence. Our team uses protective shoe covers and wipes down work areas upon task completion.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-sky shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">24/7 Rapid Response:</strong>
                  Emergency plumbing breakdowns do not wait for business hours. Our on-duty vans are ready day and night.
                </div>
              </div>
            </div>
          </div>
        </div>

        <CtaBand />

        {/* Subtle Website by Bolaji Credit Line per §5 */}
        <div className="mt-12 text-center text-xs text-muted">
          <span>Website designed & engineered by </span>
          <a
            href={developer.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text hover:text-blue hover:underline font-medium"
          >
            {developer.shortName} · {developer.website.replace("https://", "")}
          </a>
        </div>
      </Container>
    </div>
  );
}
