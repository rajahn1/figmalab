import type { LandingImage } from "@/lib/landing/types";

export interface StudioService {
  ctaLabel: string;
  url: string;
  image: LandingImage;
}

export interface StudioProduct {
  title: string;
  description: string;
  priceLabel: string;
  ctaLabel: string;
  url: string;
  image: LandingImage;
}

export interface StudioHomeContent {
  seo: {
    title: string;
    description: string;
    socialImage?: LandingImage;
  };
  navigation: {
    brandLabel: string;
    links: Array<{ label: string; anchor: string }>;
  };
  hero: {
    lineOne: string;
    lineTwo: string;
    accent: string;
    credit: string;
    ctaLabel: string;
    ctaUrl: string;
    image: LandingImage;
  };
  about: {
    heading: string;
    headingHighlight: string;
    paragraphs: string[];
    image: LandingImage;
  };
  services: {
    headingStart: string;
    headingAccent: string;
    items: StudioService[];
  };
  products: {
    headingStart: string;
    headingAccent: string;
    items: StudioProduct[];
  };
  portfolio: {
    image: LandingImage;
    behanceUrl: string;
    behanceImage?: LandingImage;
    pinterestUrl: string;
    pinterestImage?: LandingImage;
  };
  favorites: {
    images: LandingImage[];
  };
  footer: {
    boldText: string;
    regularText: string;
  };
}
