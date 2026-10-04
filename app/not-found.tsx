import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="py-20 sm:py-32">
      <Container size="narrow">
        <div className="bg-mist rounded-[28px] sm:rounded-[36px] p-8 sm:p-16 text-center border border-black/5 shadow-xs">
          <span className="text-6xl sm:text-8xl font-black text-blue tracking-tighter block mb-4">
            404
          </span>
          <h1 className="text-2xl sm:text-4xl font-semibold text-text tracking-tight mb-3">
            Pipe Disconnected (Page Not Found)
          </h1>
          <p className="text-muted text-sm sm:text-base max-w-md mx-auto mb-8">
            The page you are looking for may have been moved or is temporarily unavailable. Let&apos;s get you back on track.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button href="/" variant="primary" size="lg" withArrow>
              Return to Home
            </Button>
            <Button href="/services" variant="outline" size="lg">
              Browse Services
            </Button>
            <Button href="/contact" variant="dark" size="lg">
              Contact Desk
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
