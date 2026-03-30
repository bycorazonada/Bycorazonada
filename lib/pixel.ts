declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

export function trackViewContent(contentName: string) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "ViewContent", { content_name: contentName });
  }
}

export function trackLead() {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Lead");
  }
}

export function trackContact() {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Contact");
  }
}
