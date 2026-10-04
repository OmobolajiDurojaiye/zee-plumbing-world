import React from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaTiktok,
  FaYoutube,
  FaLinkedinIn,
  FaTelegram,
} from "react-icons/fa6";
import { cn } from "@/lib/utils";

export type BrandName =
  | "whatsapp"
  | "facebook"
  | "instagram"
  | "x"
  | "tiktok"
  | "youtube"
  | "linkedin"
  | "telegram";

interface BrandIconProps {
  brand?: BrandName;
  name?: BrandName;
  className?: string;
  size?: number | string;
}

export const brandColors: Record<BrandName, string> = {
  whatsapp: "#25D366",
  facebook: "#1877F2",
  instagram: "#E4405F",
  x: "#000000",
  tiktok: "#000000",
  youtube: "#FF0000",
  linkedin: "#0A66C2",
  telegram: "#229ED9",
};

export function BrandIcon({ brand, name, className, size = 16 }: BrandIconProps) {
  const effectiveBrand = brand || name || "whatsapp";
  const iconProps = {
    className: cn("shrink-0", className),
    size,
  };

  switch (effectiveBrand) {
    case "whatsapp":
      return <FaWhatsapp {...iconProps} />;
    case "facebook":
      return <FaFacebookF {...iconProps} />;
    case "instagram":
      return <FaInstagram {...iconProps} />;
    case "x":
      return <FaXTwitter {...iconProps} />;
    case "tiktok":
      return <FaTiktok {...iconProps} />;
    case "youtube":
      return <FaYoutube {...iconProps} />;
    case "linkedin":
      return <FaLinkedinIn {...iconProps} />;
    case "telegram":
      return <FaTelegram {...iconProps} />;
    default:
      return null;
  }
}
