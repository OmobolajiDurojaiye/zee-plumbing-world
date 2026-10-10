import { Metadata } from "next";
import { business, contact, areas, social } from "@/content";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://zee-plumbing-world.com";

interface MetadataOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

export function buildMetadata({
  title,
  description,
  path = "",
  image = "/brand/logo-badge.png",
}: MetadataOptions): Metadata {
  const url = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  const fullTitle = `${title} | Zee Plumbing World`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: business.legalName,
      images: [
        {
          url: image.startsWith("http") ? image : `${SITE_URL}${image}`,
          width: 1200,
          height: 630,
          alt: `${business.legalName} logo and preview`,
        },
      ],
      locale: "en_NG",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.startsWith("http") ? image : `${SITE_URL}${image}`],
    },
  };
}

export function buildLocalBusinessJsonLd() {
  const socialLinks = Object.values(social).filter(
    (link): link is string => typeof link === "string" && link.length > 0
  );

  return {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: business.brandName,
    legalName: business.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/brand/logo-badge.png`,
    image: `${SITE_URL}/brand/logo-badge.png`,
    telephone: contact.phone,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: "Abuja",
      addressRegion: "FCT",
      addressCountry: "NG",
      postalCode: business.address.postalCode,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Abuja",
      },
      ...areas.map((a) => ({
        "@type": "AdministrativeArea",
        name: `${a.name}, Abuja`,
      })),
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    sameAs: socialLinks.length > 0 ? socialLinks : undefined,
    priceRange: "₦₦",
  };
}
