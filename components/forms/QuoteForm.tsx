"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, AlertCircle, Phone, Send, Loader2 } from "lucide-react";
import { services, areas, contact } from "@/content";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { Button } from "@/components/ui/Button";
import { BrandIcon } from "@/components/ui/BrandIcon";

const quoteFormSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z
    .string()
    .min(9, "Please enter a valid phone number")
    .regex(/^[+]?[0-9\s-]{9,16}$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  area: z.string().min(1, "Please select your location / area"),
  message: z.string().max(1000).optional(),
  urgent: z.boolean(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must agree before submitting" }),
  }),
  company: z.string().max(0, "Spam detected").optional(), // Honeypot field
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

interface QuoteFormProps {
  defaultService?: string;
  defaultArea?: string;
}

export function QuoteForm({ defaultService = "", defaultArea = "" }: QuoteFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedData, setSubmittedData] = useState<QuoteFormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      service: defaultService,
      area: defaultArea,
      urgent: false,
      company: "",
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit quote request.");
      }

      setSubmittedData(data);
      setStatus("success");
      trackEvent("submit_quote", {
        service: data.service,
        area: data.area,
        urgent: data.urgent,
      });
      reset();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please call or WhatsApp us directly.";
      setErrorMessage(msg);
      setStatus("error");
    }
  };

  if (status === "success" && submittedData) {
    const selectedServiceName =
      services.find((s) => s.slug === submittedData.service)?.name || submittedData.service;
    const selectedAreaName =
      areas.find((a) => a.slug === submittedData.area)?.name || submittedData.area;

    return (
      <div className="bg-cream rounded-[24px] p-8 sm:p-10 border border-black/5 text-center animate-in fade-in duration-300">
        <div className="w-14 h-14 bg-green/20 text-green rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-green" />
        </div>
        <h3 className="text-2xl font-bold text-ink mb-2">Quote Request Received!</h3>
        <p className="text-muted text-sm sm:text-base max-w-md mx-auto mb-6">
          Thank you, <span className="font-semibold text-text">{submittedData.name}</span>. Our lead plumber
          will review your request for <span className="font-semibold text-text">{selectedServiceName}</span> in{" "}
          <span className="font-semibold text-text">{selectedAreaName}</span> and contact you shortly.
        </p>

        <div className="p-4 rounded-xl bg-white border border-black/5 max-w-sm mx-auto mb-6">
          <p className="text-xs text-muted mb-3 font-medium">
            Need faster assistance? Connect directly on WhatsApp with your prefilled details:
          </p>
          <Button
            href={buildWhatsAppLink({
              service: selectedServiceName,
              area: selectedAreaName,
              message: `Hello Zee Plumbing World, I just submitted a quote request for ${selectedServiceName} in ${selectedAreaName}. Name: ${submittedData.name}, Phone: ${submittedData.phone}.`,
            })}
            variant="whatsapp"
            size="md"
            iconLeft={<BrandIcon name="whatsapp" size={16} className="text-white" />}
            className="w-full text-xs"
          >
            Chat on WhatsApp Now
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-xs text-blue hover:underline font-medium"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-cream rounded-[24px] p-6 sm:p-10 border border-black/5 shadow-xs space-y-5"
      noValidate
    >
      {/* Honeypot field (hidden from view) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("company")}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-text mb-1.5">
            Full Name <span className="text-coral">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="e.g. Babatunde Adeleke"
            className="w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-text text-sm focus:outline-none focus:ring-2 focus:ring-blue"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name && (
            <p className="text-xs text-coral mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-text mb-1.5">
            Phone Number <span className="text-coral">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="e.g. 0803 123 4567"
            className="w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-text text-sm focus:outline-none focus:ring-2 focus:ring-blue"
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-xs text-coral mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Service */}
        <div>
          <label htmlFor="service" className="block text-xs font-semibold text-text mb-1.5">
            Select Service <span className="text-coral">*</span>
          </label>
          <select
            id="service"
            className="w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-text text-sm focus:outline-none focus:ring-2 focus:ring-blue cursor-pointer"
            aria-invalid={!!errors.service}
            {...register("service")}
          >
            <option value="">Choose a service...</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="text-xs text-coral mt-1">{errors.service.message}</p>
          )}
        </div>

        {/* Area */}
        <div>
          <label htmlFor="area" className="block text-xs font-semibold text-text mb-1.5">
            Your Location / Area <span className="text-coral">*</span>
          </label>
          <select
            id="area"
            className="w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-text text-sm focus:outline-none focus:ring-2 focus:ring-blue cursor-pointer"
            aria-invalid={!!errors.area}
            {...register("area")}
          >
            <option value="">Select coverage area...</option>
            {areas.map((a) => (
              <option key={a.slug} value={a.slug}>
                {a.name} ({a.state})
              </option>
            ))}
            <option value="other">Other Abuja / FCT Outskirts</option>
          </select>
          {errors.area && (
            <p className="text-xs text-coral mt-1">{errors.area.message}</p>
          )}
        </div>
      </div>

      {/* Email (Optional) */}
      <div>
        <label htmlFor="email" className="block text-xs font-semibold text-text mb-1.5">
          Email Address <span className="text-muted font-normal">(optional)</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="your.email@example.com"
          className="w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-text text-sm focus:outline-none focus:ring-2 focus:ring-blue"
          aria-invalid={!!errors.email}
          {...register("email")}
        />
        {errors.email && (
          <p className="text-xs text-coral mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-text mb-1.5">
          Briefly Describe the Issue <span className="text-muted font-normal">(optional)</span>
        </label>
        <textarea
          id="message"
          rows={3}
          placeholder="e.g., Leaking pipe under bathroom sink, water heater not turning on, etc."
          className="w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-text text-sm focus:outline-none focus:ring-2 focus:ring-blue resize-none"
          {...register("message")}
        />
      </div>

      {/* Urgent Emergency Toggle */}
      <div className="flex items-center gap-3 p-3 rounded-xl bg-white/70 border border-black/5">
        <input
          id="urgent"
          type="checkbox"
          className="w-4 h-4 rounded text-orange focus:ring-orange cursor-pointer"
          {...register("urgent")}
        />
        <label htmlFor="urgent" className="text-xs font-medium text-text cursor-pointer select-none">
          <span className="font-semibold text-coral">This is an urgent emergency</span> (immediate pipe burst or flooding)
        </label>
      </div>

      {/* Consent Checkbox */}
      <div className="space-y-1">
        <div className="flex items-start gap-2.5">
          <input
            id="consent"
            type="checkbox"
            className="w-4 h-4 rounded mt-0.5 text-blue focus:ring-blue cursor-pointer"
            {...register("consent")}
          />
          <label htmlFor="consent" className="text-xs text-muted cursor-pointer select-none">
            I agree to allow Zee Plumbing World to contact me regarding this service quote.
          </label>
        </div>
        {errors.consent && (
          <p className="text-xs text-coral">{errors.consent.message}</p>
        )}
      </div>

      {/* Error Banner */}
      {status === "error" && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-600 mt-0.5" />
          <div className="space-y-2">
            <p>{errorMessage}</p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={`tel:${contact.phone}`}
                className="inline-flex items-center gap-1 font-semibold text-ink underline"
              >
                <Phone className="w-3 h-3 text-orange" />
                Call {contact.phoneDisplay}
              </a>
              <span>or</span>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-green underline"
              >
                <BrandIcon name="whatsapp" size={12} className="text-[#25D366]" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === "submitting"}
        iconRight={
          status === "submitting" ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Send className="w-4 h-4" />
          )
        }
        className="w-full justify-center"
      >
        {status === "submitting" ? "Submitting Request..." : "Request Your Free Quote"}
      </Button>
    </form>
  );
}
