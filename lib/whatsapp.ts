import { contact } from "@/content";

interface WhatsAppOptions {
  number?: string;
  service?: string;
  area?: string;
  message?: string;
}

export function buildWhatsAppLink(options: WhatsAppOptions = {}): string {
  const num = (options.number || contact.whatsapp).replace(/\D/g, "");
  
  let msg = options.message;
  if (!msg) {
    if (options.service && options.area) {
      msg = `Hello Zee Plumbing World, I need assistance with ${options.service} in ${options.area}.`;
    } else if (options.service) {
      msg = `Hello Zee Plumbing World, I would like to inquire about your ${options.service} service.`;
    } else if (options.area) {
      msg = `Hello Zee Plumbing World, I am located in ${options.area} and need a professional plumber.`;
    } else {
      msg = "Hello Zee Plumbing World, I would like to get a quote for plumbing services.";
    }
  }

  return `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
}
