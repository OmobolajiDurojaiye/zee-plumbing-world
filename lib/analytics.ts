export type AnalyticsEvent =
  | "click_call"
  | "click_whatsapp"
  | "submit_quote"
  | "search_services"
  | "cta_click";

export function trackEvent(
  event: AnalyticsEvent,
  params?: Record<string, string | number | boolean | undefined>
) {
  if (typeof window === "undefined") return;

  // In development, log the event
  if (process.env.NODE_ENV !== "production") {
    // console.log(`[Analytics] ${event}`, params);
  }

  // Google Analytics 4 integration
  if (typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === "function") {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", event, params);
  }

  // Plausible integration
  if (
    typeof (window as unknown as { plausible?: (event: string, options?: { props: unknown }) => void })
      .plausible === "function"
  ) {
    (window as unknown as { plausible: (event: string, options?: { props: unknown }) => void }).plausible(
      event,
      { props: params }
    );
  }
}
