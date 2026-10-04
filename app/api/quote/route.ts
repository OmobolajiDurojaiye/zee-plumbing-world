import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { contact } from "@/content";

const quotePayloadSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(9),
  email: z.string().email().optional().or(z.literal("")),
  service: z.string().min(1),
  area: z.string().min(1),
  message: z.string().max(1000).optional(),
  urgent: z.boolean().default(false),
  consent: z.literal(true),
  company: z.string().max(0).optional(), // honeypot
});

// In-memory rate limit map (fallback if Upstash Redis not configured)
const rateLimitMap = new Map<string, { count: number; expiresAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.expiresAt) {
    rateLimitMap.set(ip, { count: 1, expiresAt: now + 10 * 60 * 1000 }); // 10 min window
    return false;
  }

  if (record.count >= 5) {
    return true;
  }

  record.count += 1;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again or call us directly." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const parsed = quotePayloadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data provided.", details: parsed.error.format() },
        { status: 400 }
      );
    }

    const { name, phone, email, service, area, message, urgent, company } = parsed.data;

    // Honeypot spam trap
    if (company && company.length > 0) {
      // Silently accept to mislead bots
      return NextResponse.json({ ok: true });
    }

    // In production with RESEND_API_KEY:
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      const recipient = process.env.QUOTE_TO_EMAIL || contact.email;
      const sender = process.env.QUOTE_FROM_EMAIL || "quotes@zeeplumbingworld.com";
      const subject = `${urgent ? "[URGENT] " : ""}[Quote Request] ${service} - ${area} - ${name}`;

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: sender,
          to: [recipient],
          reply_to: email || undefined,
          subject,
          text: `
Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}
Service: ${service}
Area: ${area}
Emergency Urgent: ${urgent ? "YES" : "No"}
Message:
${message || "No additional notes"}
          `.trim(),
        }),
      });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error. Please call us directly." },
      { status: 500 }
    );
  }
}
