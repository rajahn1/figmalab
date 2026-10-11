export type HeadingStyle =
  | "default"
  | "light"
  | "bold"
  | "italic"
  | "editorial"
  | "editorialItalic"
  | "pink"
  | "pinkItalic";

export interface HeadingSegment {
  text: string;
  style?: HeadingStyle;
  breakBefore?: boolean;
}

export interface LandingImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface CourseModule {
  title: string;
  lessons: string[];
  image: LandingImage;
}

export interface LandingPageContent {
  seo: {
    title: string;
    description: string;
    socialImage?: LandingImage;
  };
  settings: {
    courseName: string;
    checkoutUrl: string;
    supportUrl: string;
    currency: "BRL";
    cashPrice: number;
    installmentCount: number;
    installmentAmount: number;
    defaultCtaLabel: string;
    purchaseCtaLabel: string;
    supportCtaLabel: string;
  };
  hero: {
    heading: HeadingSegment[];
    description: string;
    descriptionHighlight: string;
    mobileImage: LandingImage;
    desktopImage: LandingImage;
  };
  comparison: {
    heading: HeadingSegment[];
    negativePoints: string[];
    positivePoints: string[];
    choiceImage: LandingImage;
  };
  method: {
    heading: HeadingSegment[];
    paragraphs: string[];
    mobileBackground: LandingImage;
    desktopBackground: LandingImage;
  };
  receives: {
    heading: HeadingSegment[];
    mobileBackground: LandingImage;
    desktopBackground: LandingImage;
  };
  modules: {
    heading: HeadingSegment[];
    items: CourseModule[];
  };
  certificate: {
    heading: HeadingSegment[];
    description: string;
    image: LandingImage;
  };
  gallery: {
    heading: string;
    images: LandingImage[];
  };
  feedback: {
    headingStart: string;
    headingEnd: string;
    images: LandingImage[];
  };
  offer: {
    benefits: string[];
  };
  instructor: {
    heading: HeadingSegment[];
    paragraphs: string[];
    mobileImage: LandingImage;
    desktopImage: LandingImage;
  };
  faq: {
    heading: HeadingSegment[];
    items: Array<{ question: string; answer: string }>;
  };
  support: {
    heading: string;
  };
  footer: {
    companyName: string;
    rightsText: string;
    backToTopLabel: string;
  };
}
