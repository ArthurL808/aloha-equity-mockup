// Thin wrapper around the Meta pixel. The base snippet and the first PageView
// live in index.html; everything else goes through here so each conversion
// event can only fire once per page load.

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const alreadyFired = new Set<string>();

export function trackOnce(event: "InitiateCheckout" | "Lead"): void {
  if (alreadyFired.has(event)) return;
  alreadyFired.add(event);
  try {
    window.fbq?.("track", event);
  } catch {
    // Never let a blocked pixel break the quiz.
  }
}

export function trackPageView(): void {
  try {
    window.fbq?.("track", "PageView");
  } catch {
    // ignore
  }
}
