import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zee-plumbing-world.com"),
  title: "Plumber in Abuja | Zee Plumbing World – 24/7 Plumbing Services",
  description:
    "Fast, reliable plumbing delivered to your doorstep in Abuja, FCT. Emergency leak repairs, tank installations, drainage and bathroom fittings.",
  authors: [{ name: "Omobolaji Durojaiye", url: "https://bolaji.tech" }],
  creator: "Omobolaji Durojaiye",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/logo-badge.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Plumber in Abuja | Zee Plumbing World – 24/7 Plumbing Services",
    description:
      "Fast, reliable plumbing delivered to your doorstep in Abuja, FCT. Emergency leak repairs, tank installations, drainage and bathroom fittings.",
    url: "https://zee-plumbing-world.com",
    siteName: "Zee Plumbing World Nig Ltd",
    images: [
      {
        url: "/brand/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Zee Plumbing World Nig Ltd - Abuja Plumbing Experts",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plumber in Abuja | Zee Plumbing World – 24/7 Plumbing Services",
    description:
      "Fast, reliable plumbing delivered to your doorstep in Abuja, FCT. Emergency leak repairs, tank installations, drainage and bathroom fittings.",
    images: ["/brand/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-text antialiased selection:bg-sky selection:text-ink">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-ink focus:text-white focus:rounded-btn"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
