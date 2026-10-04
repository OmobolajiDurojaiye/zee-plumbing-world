import { z } from "zod";
import {
  BusinessSchema,
  ContactSchema,
  SocialSchema,
  ServiceSchema,
  AreaSchema,
  TestimonialSchema,
  FaqItemSchema,
  StatSchema,
} from "./schema";

import { business as rawBusiness } from "./business";
import { contact as rawContact } from "./contact";
import { social as rawSocial } from "./social";
import { services as rawServices } from "./services";
import { areas as rawAreas } from "./areas";
import { testimonials as rawTestimonials } from "./testimonials";
import { faqs as rawFaqs } from "./faqs";
import { stats as rawStats } from "./stats";

// Validate all content at module load / build time
export const business = BusinessSchema.parse(rawBusiness);
export const contact = ContactSchema.parse(rawContact);
export const social = SocialSchema.parse(rawSocial);
export const services = z.array(ServiceSchema).parse(rawServices);
export const areas = z.array(AreaSchema).parse(rawAreas);
export const testimonials = z.array(TestimonialSchema).parse(rawTestimonials);
export const faqs = z.array(FaqItemSchema).parse(rawFaqs);
export const stats = {
  ...StatSchema.parse(rawStats),
  areasCount: areas.length,
};

// Helper selectors
export const featuredServices = services
  .filter((s) => s.featured && s.enabled)
  .sort((a, b) => (a.featuredOrder || 99) - (b.featuredOrder || 99));

export const enabledServices = services.filter((s) => s.enabled);

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getAreaBySlug(slug: string) {
  return areas.find((a) => a.slug === slug);
}
