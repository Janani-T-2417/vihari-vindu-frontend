export const WHATSAPP_PRIMARY = "919121025777";
export const WHATSAPP_DISPLAY_PRIMARY = "9121025777";
export const WHATSAPP_DISPLAY_SECONDARY = "9121023555";

export const DEFAULT_WHATSAPP_MESSAGE = `Hello Vihari Vindu,

I would like to know more about your rooms and food services.

I am contacting through your website.`;

export function buildWhatsAppUrl(message: string, phone: string = WHATSAPP_PRIMARY) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppWebUrl(message: string, phone: string = WHATSAPP_PRIMARY) {
  return `https://web.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
}

/**
 * Opens WhatsApp in a new browser tab. Works on desktop and mobile.
 * Falls back to top-level navigation if the popup is blocked (e.g. inside
 * an iframe/preview), ensuring the link escapes the frame.
 */
export function openWhatsApp(message: string, phone: string = WHATSAPP_PRIMARY) {
  const url = buildWhatsAppUrl(message, phone);
  try {
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (win) {
      win.opener = null;
      return;
    }
  } catch {
    /* ignore and fall through */
  }
  // Fallback: escape iframe / preview by navigating top frame.
  try {
    if (window.top && window.top !== window.self) {
      window.top.location.href = url;
      return;
    }
  } catch {
    /* cross-origin top — fall through */
  }
  window.location.href = url;
}
