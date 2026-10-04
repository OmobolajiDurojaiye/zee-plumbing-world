import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhone(phone: string): string {
  // If starts with +234, format as 0XXX XXX XXXX for local Nigerian display
  const cleaned = phone.replace(/[^\d+]/g, "");
  if (cleaned.startsWith("+234") && cleaned.length === 14) {
    return `0${cleaned.slice(4, 7)} ${cleaned.slice(7, 10)} ${cleaned.slice(10)}`;
  }
  return phone;
}
