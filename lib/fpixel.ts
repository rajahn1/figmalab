// lib/fpixel.ts

export const FB_PIXEL_ID = "2102261693894083";

declare global {
  interface Window {
    fbq?: (command: string, eventName: string, options?: Record<string, unknown>) => void;
  }
}

export const event = (name: string, options: Record<string, unknown> = {}) => {
  window.fbq?.("track", name, options);
};
