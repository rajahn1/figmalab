import type { Metadata } from "next";

import StudioHomePage from "@/app/components/studio/StudioHomePage";
import { getStudioHome } from "@/lib/studio/get-content";

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getStudioHome();

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

export default async function Page() {
  return <StudioHomePage content={await getStudioHome()} />;
}
