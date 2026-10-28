import type { LandingImage } from "./types";

const fixedImage = (src: string, alt: string, width: number, height: number): LandingImage => ({
  src,
  alt,
  width,
  height,
});

/**
 * Brand artwork shipped with the application.
 *
 * These images must not depend on Payload media: they are part of the landing
 * page design and need to remain available even when the CMS or R2 is offline.
 */
export const fixedLandingImages = {
  certificate: fixedImage(
    "/images/certificado-mock-opt.webp",
    "Certificado de conclusão",
    922,
    699
  ),
  instructorMobile: fixedImage(
    "/images/quem-vai-te-ensinar-mobile.webp",
    "Emi, criadora do FigmaLab",
    553,
    590
  ),
  instructorDesktop: fixedImage(
    "/images/quem-vai-te-ensinar-desktop.webp",
    "Emi, criadora do FigmaLab",
    1908,
    2001
  ),
  lily: fixedImage("/images/lirio.webp", "", 384, 382),
};
