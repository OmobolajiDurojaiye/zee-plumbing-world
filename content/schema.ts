import { z } from "zod";

export const ServiceSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  name: z.string(),
  shortDesc: z.string().max(200),
  longDesc: z.string().min(150),
  icon: z.enum([
    "wrench",
    "droplets",
    "flame",
    "waves",
    "siren",
    "bath",
    "pipette",
    "building",
    "shield-check",
    "thermometer",
    "gauge",
  ]),
  tone: z.enum(["navy", "sky", "blue", "mint", "orange", "coral", "cream", "green"]),
  featured: z.boolean().default(false),
  featuredOrder: z.number().optional(),
  enabled: z.boolean().default(true),
  image: z.string(), // portrait image for carousel
  cutout: z.string().optional(), // transparent object image for list rows
  process: z
    .array(
      z.object({
        step: z.number().optional(),
        title: z.string(),
        text: z.string(),
      })
    )
    .min(3)
    .max(5),
  faqs: z
    .array(
      z.object({
        q: z.string(),
        a: z.string(),
      })
    )
    .default([]),
  keywords: z.array(z.string()).default([]),
  category: z.enum(["popular", "emergency", "installation"]).default("popular"),
});

export const AreaSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  name: z.string(),
  state: z.string(),
  intro: z.string().min(150),
  landmarks: z.array(z.string()).default([]),
  nearby: z.array(z.string()).default([]),
  geo: z
    .object({
      lat: z.number(),
      lng: z.number(),
    })
    .optional(),
});

export const BusinessSchema = z.object({
  legalName: z.string(),
  brandName: z.string(),
  rcNumber: z.string().nullable().optional(), // TODO(client)
  foundedYear: z.number().nullable().optional(), // TODO(client)
  shortDescription: z.string(),
  longDescription: z.string(),
  address: z.object({
    street: z.string(),
    city: z.string(),
    state: z.string(),
    country: z.string(),
    postalCode: z.string().optional(),
  }),
});

export const ContactSchema = z.object({
  phone: z.string(), // E.164
  phoneDisplay: z.string(),
  whatsapp: z.string(), // digits only for wa.me
  email: z.string().email(),
  hours: z.string(),
  emergencyHours: z.string(),
});

export const SocialSchema = z.object({
  facebook: z.string().url().nullable().optional(),
  instagram: z.string().url().nullable().optional(),
  x: z.string().url().nullable().optional(),
  linkedin: z.string().url().nullable().optional(),
  youtube: z.string().url().nullable().optional(),
  tiktok: z.string().url().nullable().optional(),
  telegram: z.string().url().nullable().optional(),
});

export const TestimonialSchema = z.object({
  id: z.string(),
  name: z.string(),
  location: z.string(),
  quote: z.string(),
  photo: z.string().nullable().optional(),
  rating: z.number().min(1).max(5).default(5),
  service: z.string().optional(),
  date: z.string().optional(),
});

export const FaqItemSchema = z.object({
  q: z.string(),
  a: z.string(),
  category: z.string().optional(),
});

export const StatSchema = z.object({
  areasCount: z.number(),
  jobsCompleted: z.string(),
  satisfactionPercent: z.number(),
  emergencyAvailability: z.string(),
});

export type Service = z.infer<typeof ServiceSchema>;
export type Area = z.infer<typeof AreaSchema>;
export type Business = z.infer<typeof BusinessSchema>;
export type Contact = z.infer<typeof ContactSchema>;
export type Social = z.infer<typeof SocialSchema>;
export type Testimonial = z.infer<typeof TestimonialSchema>;
export type FaqItem = z.infer<typeof FaqItemSchema>;
export type Stat = z.infer<typeof StatSchema>;
