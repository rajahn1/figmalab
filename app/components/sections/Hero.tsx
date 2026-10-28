import { getImageProps } from "next/image";
import type { CSSProperties } from "react";
import type { LandingPageContent } from "@/lib/landing/types";
import Button from "../Button";
import StyledHeading from "../StyledHeading";
import HeroMotion from "./HeroMotion";

interface HeroProps {
  data: LandingPageContent["hero"];
  settings: LandingPageContent["settings"];
}

export default function Hero({ data, settings }: HeroProps) {
  const { props: mobileHero } = getImageProps({
    src: data.mobileImage.src,
    alt: data.mobileImage.alt,
    width: data.mobileImage.width,
    height: data.mobileImage.height,
    sizes: "100vw",
    quality: 100,
  });
  const { props: desktopHero } = getImageProps({
    src: data.desktopImage.src,
    alt: data.desktopImage.alt,
    width: data.desktopImage.width,
    height: data.desktopImage.height,
    sizes: "100vw",
    quality: 100,
  });

  return (
    <section
      id="section-hero"
      className="relative scroll-smooth bg-[#EB3B6A] text-white lg:aspect-[var(--desktop-hero-aspect)] lg:px-8 xl:pt-0 2xl:pt-12"
      style={
        {
          "--desktop-hero-aspect": `${data.desktopImage.width} / ${data.desktopImage.height}`,
        } as CSSProperties
      }
    >
      <picture className="relative block lg:absolute lg:inset-0">
        <source
          media="(min-width: 1024px)"
          srcSet={desktopHero.srcSet ?? desktopHero.src}
          sizes={desktopHero.sizes}
        />
        <img
          {...mobileHero}
          alt={data.mobileImage.alt}
          fetchPriority="high"
          className="h-auto w-full lg:h-full lg:object-cover"
        />
      </picture>

      <div className="relative z-10 flex flex-col pt-0 lg:pt-8 xl:pt-8 2xl:pt-8">
        <div className="-mt-8 ml-0 flex flex-col gap-4 bg-[#EB3B6A] text-center lg:mt-56 lg:ml-32 lg:bg-transparent lg:text-start xl:ml-40 xl:gap-6 2xl:ml-56">
          <h1 className="font-editorial text-3xl leading-[92%] tracking-[-5%] xl:text-5xl 2xl:text-6xl">
            <StyledHeading segments={data.heading} />
          </h1>
          <h2 className="whitespace-pre-line text-center text-sm leading-4 font-normal lg:text-start xl:text-start xl:text-base xl:leading-6 2xl:text-xl">
            {data.description}{" "}
            <span className="font-bold whitespace-pre-line">{data.descriptionHighlight}</span>
          </h2>
          <div className="mb-12 xl:mb-0">
            <Button
              size="md"
              label={settings.defaultCtaLabel}
              href={settings.checkoutUrl}
              courseName={settings.courseName}
              trackingValue={settings.cashPrice}
              content_name="CTA Hero"
            />
          </div>
        </div>
      </div>
      <HeroMotion />
    </section>
  );
}
