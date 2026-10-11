import type { LandingPage, Media } from "@/payload-types";

import type { HeadingSegment, LandingImage, LandingPageContent } from "./types";

function toImage(value: number | Media | null | undefined, field: string): LandingImage {
  if (!value || typeof value === "number") {
    throw new Error(`A mídia “${field}” não foi populada. Consulte o Payload com depth >= 1.`);
  }

  if (!value.url || !value.width || !value.height) {
    throw new Error(`A mídia “${field}” não possui URL ou dimensões válidas.`);
  }

  return {
    src: value.url,
    alt: value.alt,
    width: value.width,
    height: value.height,
  };
}

function toHeading(segments: LandingPage["hero"]["heading"]): HeadingSegment[] {
  return segments.map(({ text, style, breakBefore }) => ({
    text,
    style,
    breakBefore: Boolean(breakBefore),
  }));
}

const toStrings = (items: Array<{ text: string }>): string[] => items.map(({ text }) => text);

export function fromPayloadLandingPage(page: LandingPage): LandingPageContent {
  return {
    seo: {
      title: page.seo.title,
      description: page.seo.description,
      socialImage: page.seo.socialImage
        ? toImage(page.seo.socialImage, "seo.socialImage")
        : undefined,
    },
    settings: { ...page.settings },
    hero: {
      heading: toHeading(page.hero.heading),
      description: page.hero.description,
      descriptionHighlight: page.hero.descriptionHighlight,
      mobileImage: toImage(page.hero.mobileImage, "hero.mobileImage"),
      desktopImage: toImage(page.hero.desktopImage, "hero.desktopImage"),
    },
    comparison: {
      heading: toHeading(page.comparison.heading),
      negativePoints: toStrings(page.comparison.negativePoints),
      positivePoints: toStrings(page.comparison.positivePoints),
      choiceImage: toImage(page.comparison.choiceImage, "comparison.choiceImage"),
    },
    method: {
      heading: toHeading(page.method.heading),
      paragraphs: toStrings(page.method.paragraphs),
      mobileBackground: toImage(page.method.mobileBackground, "method.mobileBackground"),
      desktopBackground: toImage(page.method.desktopBackground, "method.desktopBackground"),
    },
    receives: {
      heading: toHeading(page.receives.heading),
      mobileBackground: toImage(page.receives.mobileBackground, "receives.mobileBackground"),
      desktopBackground: toImage(page.receives.desktopBackground, "receives.desktopBackground"),
    },
    modules: {
      heading: toHeading(page.modules.heading),
      items: page.modules.items.map((module, index) => ({
        title: module.title,
        lessons: toStrings(module.lessons),
        image: toImage(module.image, `modules.items.${index}.image`),
      })),
    },
    certificate: {
      heading: toHeading(page.certificate.heading),
      description: page.certificate.description,
      image: toImage(page.certificate.image, "certificate.image"),
    },
    gallery: {
      heading: page.gallery.heading,
      images: page.gallery.images.map(({ image }, index) =>
        toImage(image, `gallery.images.${index}.image`)
      ),
    },
    feedback: {
      headingStart: page.feedback.headingStart,
      headingEnd: page.feedback.headingEnd,
      images: page.feedback.images.map(({ image }, index) =>
        toImage(image, `feedback.images.${index}.image`)
      ),
    },
    offer: {
      benefits: toStrings(page.offer.benefits),
    },
    instructor: {
      heading: toHeading(page.instructor.heading),
      paragraphs: toStrings(page.instructor.paragraphs),
      mobileImage: toImage(page.instructor.mobileImage, "instructor.mobileImage"),
      desktopImage: toImage(page.instructor.desktopImage, "instructor.desktopImage"),
    },
    faq: {
      heading: toHeading(page.faq.heading),
      items: page.faq.items.map(({ question, answer }) => ({ question, answer })),
    },
    support: { heading: page.support.heading },
    footer: { ...page.footer },
  };
}
