import Image, { getImageProps } from "next/image";
import type { LandingPageContent } from "@/lib/landing/types";
import Bubble from "../Bubble";
import Button from "../Button";
import StyledHeading from "../StyledHeading";

interface MarketingIntroProps {
  comparison: LandingPageContent["comparison"];
  method: LandingPageContent["method"];
  receives: LandingPageContent["receives"];
  settings: LandingPageContent["settings"];
}

const methodIntroduction =
  "Design não é dom, é processo. O FigmaLab é o resultado de anos organizando meu próprio método criativo de design para social media, validado em projetos reais. Aqui, você para de copiar e aprende a analisar, decidir e criar com consciência.";

function MethodHeading({ heading }: { heading: LandingPageContent["method"]["heading"] }) {
  const plainHeading = heading.map(({ text }) => text.trim()).join(" ");

  if (plainHeading === "O problema não é talento, é falta de método") {
    return (
      <>
        O problema <br className="hidden md:block" />
        não é <br className="md:hidden" /> talento, é<br className="hidden md:block" /> falta de{" "}
        <span className="text-text-pink">método</span>.
      </>
    );
  }

  return <StyledHeading segments={heading} />;
}

function MethodParagraph({ paragraph, index }: { paragraph: string; index: number }) {
  if (index === 0 && paragraph.replace(/\s+/g, " ").trim() === methodIntroduction) {
    return (
      <p className="max-w-[35rem] text-center font-articulat text-xs leading-3 sm:text-base md:text-start lg:leading-4 xl:text-lg xl:leading-6 2xl:text-2xl">
        Design não é dom, é processo. O<br className="hidden md:block" /> FigmaLab
        <br className="md:hidden" /> é o resultado de anos
        <br className="hidden md:block" /> organizando meu
        <br className="md:hidden" /> próprio método
        <br className="hidden md:block" /> criativo de design para <br className="md:hidden" />
        social media,
        <br className="hidden md:block" /> validado em projetos reais.
        <br className="md:hidden" /> Aqui, você
        <br className="hidden md:block" /> para de copiar e aprende a
        <br className="md:hidden" /> analisar,
        <br className="hidden md:block" /> decidir e criar com consciência.
      </p>
    );
  }

  if (index === 1) {
    const highlight = "transforma criatividade travada em design de post estratégico.";
    const highlightIndex = paragraph.indexOf(highlight);

    if (highlightIndex >= 0) {
      const introduction = paragraph
        .slice(0, highlightIndex)
        .trim()
        .replace(/\s+que$/, "")
        .replace(/método$/, "método.");

      return (
        <p className="mt-2 max-w-[35rem] text-center text-xs leading-3 sm:text-base md:mb-8 md:text-start lg:leading-4 xl:mb-4 xl:text-lg xl:leading-6 2xl:text-2xl">
          {introduction}
          <br /> que{" "}
          <span className="font-bold">
            transforma criatividade travada
            <br className="hidden md:block" /> em <br className="md:hidden" />
            design de post estratégico.
          </span>
        </p>
      );
    }
  }

  return (
    <p
      className={`${index === 1 ? "mt-2 md:mb-8 xl:mb-4" : "font-articulat"} max-w-[35rem] whitespace-pre-line text-center text-xs leading-3 sm:text-base md:text-start lg:leading-4 xl:text-lg xl:leading-6 2xl:text-2xl`}
    >
      {paragraph}
    </p>
  );
}

export default function MarketingIntro({
  comparison,
  method,
  receives,
  settings,
}: MarketingIntroProps) {
  const comparisonHeading = comparison.heading.map((segment) => {
    const text = segment.text.trim();

    if (text === "para") return { ...segment, breakBefore: false };
    if (text === "quem trabalha com") return { ...segment, breakBefore: true };
    return segment;
  });

  const { props: mobileMethodBackground } = getImageProps({
    src: method.mobileBackground.src,
    alt: method.mobileBackground.alt,
    width: method.mobileBackground.width,
    height: method.mobileBackground.height,
    sizes: "100vw",
    quality: 78,
  });
  const { props: desktopMethodBackground } = getImageProps({
    src: method.desktopBackground.src,
    alt: method.desktopBackground.alt,
    width: method.desktopBackground.width,
    height: method.desktopBackground.height,
    sizes: "100vw",
    quality: 76,
  });
  const { props: mobileBenefitsBackground } = getImageProps({
    src: receives.mobileBackground.src,
    alt: receives.mobileBackground.alt,
    width: receives.mobileBackground.width,
    height: receives.mobileBackground.height,
    sizes: "100vw",
    quality: 78,
  });
  const { props: desktopBenefitsBackground } = getImageProps({
    src: receives.desktopBackground.src,
    alt: receives.desktopBackground.alt,
    width: receives.desktopBackground.width,
    height: receives.desktopBackground.height,
    sizes: "100vw",
    quality: 78,
  });

  return (
    <>
      <section className="deferred-section bg-[#212121] py-6 px-8 leading-[94%] md:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 md:gap-12">
          <h2 className="text-center font-articulat text-xl leading-5 text-bg-white md:leading-12 lg:text-4xl lg:leading-8 xl:text-5xl">
            <StyledHeading segments={comparisonHeading} />
          </h2>

          <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row md:items-start md:gap-8">
            <ul className="space-y-2">
              {comparison.negativePoints.map((point) => (
                <Bubble key={point} label={point} type="negative" />
              ))}
            </ul>
            <ul className="space-y-2">
              {comparison.positivePoints.map((point) => (
                <Bubble key={point} label={point} type="positive" />
              ))}
            </ul>
          </div>

          <Image
            alt={comparison.choiceImage.alt}
            src={comparison.choiceImage.src}
            width={comparison.choiceImage.width}
            height={comparison.choiceImage.height}
          />
        </div>
      </section>

      <section className="deferred-section relative flex justify-center pt-90 pb-6 text-black md:aspect-[4236/2471] md:items-center md:py-0">
        <picture className="absolute inset-0">
          <source
            media="(min-width: 768px)"
            srcSet={desktopMethodBackground.srcSet}
            sizes={desktopMethodBackground.sizes}
          />
          <img
            {...mobileMethodBackground}
            alt=""
            className="h-full w-full object-cover object-top md:object-contain"
            loading="lazy"
          />
        </picture>
        <div className="relative z-10 flex flex-col items-center gap-2 pb-0 md:mt-90 md:items-start md:gap-4 md:pb-0 lg:mt-20 lg:ml-110 xl:mt-0 xl:ml-120 2xl:ml-160">
          <h2 className="text-center font-editorial text-3xl leading-7 font-light tracking-tighter sm:text-5xl sm:leading-11 md:text-start md:leading-14 xl:text-5xl xl:leading-11 2xl:text-7xl 2xl:leading-16">
            <MethodHeading heading={method.heading} />
          </h2>
          {method.paragraphs.map((paragraph, index) => (
            <MethodParagraph key={paragraph} paragraph={paragraph} index={index} />
          ))}

          <div className="hidden md:block">
            <Button
              label={settings.defaultCtaLabel}
              href={settings.checkoutUrl}
              courseName={settings.courseName}
              trackingValue={settings.cashPrice}
              content_name="CTA O problema não é talento, é falta de método"
              size="xl"
            />
          </div>
          <div className="mt-6 md:hidden">
            <Button
              size="md"
              label={settings.defaultCtaLabel}
              href={settings.checkoutUrl}
              courseName={settings.courseName}
              trackingValue={settings.cashPrice}
              content_name="CTA O problema não é talento, é falta de método"
            />
          </div>
        </div>
      </section>

      <section className="deferred-section relative flex aspect-[1281/1548] flex-col items-center lg:aspect-[1920/1000]">
        <picture className="absolute inset-0">
          <source
            media="(min-width: 1024px)"
            srcSet={desktopBenefitsBackground.srcSet}
            sizes={desktopBenefitsBackground.sizes}
          />
          <img
            {...mobileBenefitsBackground}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </picture>
        <h2 className="relative z-10 pt-12 text-center font-articulat text-4xl leading-8 font-bold tracking-[-7%] text-white lg:text-5xl lg:leading-12 xl:pt-16 xl:text-6xl 2xl:pt-20 2xl:text-8xl 2xl:leading-20">
          <StyledHeading segments={receives.heading} />
        </h2>
      </section>
    </>
  );
}
