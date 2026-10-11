import type { Media, StudioHome } from "@/payload-types";
import type { LandingImage } from "@/lib/landing/types";

import { upgradeLegacyStudioAboutParagraphs } from "./about-copy";
import { defaultStudioHome } from "./default-content";
import type { StudioHomeContent } from "./types";

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

const toStrings = (items: Array<{ text: string }>) => items.map(({ text }) => text);

export function fromPayloadStudioHome(page: StudioHome): StudioHomeContent {
  return {
    seo: {
      title: page.seo.title,
      description: page.seo.description,
      socialImage: page.seo.socialImage
        ? toImage(page.seo.socialImage, "seo.socialImage")
        : undefined,
    },
    navigation: {
      brandLabel: page.navigation.brandLabel,
      links: page.navigation.links.map(({ label, anchor }) => ({ label, anchor })),
    },
    hero: {
      ...page.hero,
      image: toImage(page.hero.image, "hero.image"),
    },
    about: {
      heading: page.about.heading,
      headingHighlight: page.about.headingHighlight,
      paragraphs: upgradeLegacyStudioAboutParagraphs(toStrings(page.about.paragraphs)),
      image: toImage(page.about.image, "about.image"),
    },
    services: {
      headingStart: page.services.headingStart,
      headingAccent: page.services.headingAccent,
      items: page.services.items.map((item, index) => ({
        ctaLabel: item.ctaLabel,
        url: item.url,
        image: item.image
          ? toImage(item.image, `services.items.${index}.image`)
          : defaultStudioHome.services.items[index]?.image ??
            defaultStudioHome.services.items[0].image,
      })),
    },
    products: {
      headingStart: page.products.headingStart,
      headingAccent: page.products.headingAccent,
      items: page.products.items.map((item, index) => ({
        title: item.title,
        description: item.description,
        priceLabel: item.priceLabel,
        ctaLabel: item.ctaLabel,
        url: item.url,
        image: toImage(item.image, `products.items.${index}.image`),
      })),
    },
    portfolio: {
      image: page.portfolio.image
        ? toImage(page.portfolio.image, "portfolio.image")
        : defaultStudioHome.portfolio.image,
      behanceUrl: page.portfolio.behanceUrl,
      behanceImage: page.portfolio.behanceImage
        ? toImage(page.portfolio.behanceImage, "portfolio.behanceImage")
        : undefined,
      pinterestUrl: page.portfolio.pinterestUrl,
      pinterestImage: page.portfolio.pinterestImage
        ? toImage(page.portfolio.pinterestImage, "portfolio.pinterestImage")
        : undefined,
    },
    favorites: {
      images: page.social.items.map((item, index) =>
        toImage(item.image, `social.items.${index}.image`)
      ),
    },
    footer: {
      boldText: page.footer.copyright,
      regularText: page.footer.regularText,
    },
  };
}
