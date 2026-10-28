import type { Metadata } from "next";

import BlackFridayOverview from "@/app/components/sections/BlackFridayOverview";
import BlackFridayFooter from "@/app/components/sections/BlackFridayFooter";
import BlackFridayReleaseSchedule from "@/app/components/sections/BlackFridayReleaseSchedule";
import CourseModules from "@/app/components/sections/CourseModules";
import FaqSupport from "@/app/components/sections/FaqSupport";
import Hero from "@/app/components/sections/Hero";
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
    <main className="black-friday-page max-w-screen bg-[#D82099] font-articulat text-[#313131]">
      <Hero />
      <BlackFridayOverview />
      <BlackFridayReleaseSchedule />
      <CourseModules data={content.modules} />
      <SocialProofOffer feedback={content.feedback} settings={content.settings} />
      <FaqSupport faq={content.faq} />
      <BlackFridayFooter settings={content.settings} />
    </main>
  );
}
