// lib/fpixel.ts

export const FB_PIXEL_ID = "2102261693894083";

type MetaEventParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function event(name: string, params: MetaEventParams = {}) {
  if (typeof window === "undefined") return;

  window.fbq?.("track", name, params);
}
