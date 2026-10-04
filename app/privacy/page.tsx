import React from "react";
import { Container } from "@/components/ui/Container";
import { business, contact } from "@/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy | Zee Plumbing World Nig Ltd",
  description: "Privacy policy describing how customer quote data is handled securely.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container size="narrow">
        <div className="bg-mist rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 mb-10 border border-black/5">
          <h1 className="text-3xl sm:text-4xl font-semibold text-text tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-muted">
            Last updated: October 2024 • {business.legalName}
          </p>
        </div>

        <div className="prose max-w-none text-muted text-sm sm:text-base space-y-6 leading-relaxed bg-cream rounded-[24px] p-8 sm:p-10 border border-black/5">
          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold text-ink">
              1. Information We Collect
            </h2>
            <p>
              When you submit a quote request or contact our customer desk, we collect only the essential information necessary to deliver plumbing services: your full name, contact phone number, email address (if provided), service requested, and service location.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold text-ink">
              2. How Your Information Is Used
            </h2>
            <p>
              We use your contact details solely to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Prepare and deliver accurate plumbing labor and materials quotes.</li>
              <li>Dispatch qualified technicians to your premises.</li>
              <li>Provide updates regarding service arrival times and follow-up quality checks.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold text-ink">
              3. Data Protection
            </h2>
            <p>
              We do not sell, rent, or trade your personal information to third-party advertisers. All customer communications are handled strictly by authorized personnel.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold text-ink">
              4. Contact Us
            </h2>
            <p>
              If you have any questions regarding this policy or wish to request data deletion, contact us at{" "}
              <a href={`mailto:${contact.email}`} className="text-blue font-medium hover:underline">
                {contact.email}
              </a>{" "}
              or call {contact.phoneDisplay}.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
