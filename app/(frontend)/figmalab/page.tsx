import type { Metadata } from "next";

import Footer from "@/app/components/Footer";
import CertificateGallery from "@/app/components/sections/CertificateGallery";
import CourseModules from "@/app/components/sections/CourseModules";
import FaqSupport from "@/app/components/sections/FaqSupport";
import Hero from "@/app/components/sections/Hero";
import MarketingIntro from "@/app/components/sections/MarketingIntro";
import SocialProofOffer from "@/app/components/sections/SocialProofOffer";
import { getLandingPage } from "@/lib/landing/get-content";

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getLandingPage();

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL ?? "http://localhost:3000"),
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.title,
      description: seo.description,
      images: seo.socialImage
        ? [
            {
              url: seo.socialImage.src,
              width: seo.socialImage.width,
              height: seo.socialImage.height,
              alt: seo.socialImage.alt,
            },
          ]
        : undefined,
    },
  };
}

export default async function FigmaLabPage() {
  const content = await getLandingPage();

  return (
    <main className="max-w-screen bg-[#D82099] font-articulat text-[#313131]">
      <Hero data={content.hero} settings={content.settings} />
      <MarketingIntro
        comparison={content.comparison}
        method={content.method}
        receives={content.receives}
        settings={content.settings}
      />
      <CourseModules data={content.modules} settings={content.settings} />
      <CertificateGallery certificate={content.certificate} gallery={content.gallery} />
      <SocialProofOffer
        feedback={content.feedback}
        offer={content.offer}
        instructor={content.instructor}
        settings={content.settings}
      />
      <FaqSupport faq={content.faq} support={content.support} settings={content.settings} />
      <Footer data={content.footer} />
    </main>
  );
}
