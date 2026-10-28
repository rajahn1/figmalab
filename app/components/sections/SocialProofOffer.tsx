import Image from "next/image";
import type { LandingPageContent } from "@/lib/landing/types";
import BlackFridayTicker from "../BlackFridayTicker";
import Button from "../Button";
import CarouselFeedbacks from "../CarouselFeedbacks";
import StyledHeading from "../StyledHeading";
import BlackFridayOffer from "./BlackFridayOffer";

interface SocialProofOfferProps {
  feedback: LandingPageContent["feedback"];
  instructor: LandingPageContent["instructor"];
  settings: LandingPageContent["settings"];
}

function InstructorHeading({ heading }: { heading: LandingPageContent["instructor"]["heading"] }) {
  const plainHeading = heading
    .map(({ text }) => text.trim())
    .join(" ")
    .replace(/\s+/g, " ");

  if (plainHeading === "Quem vai te ensinar tudo isso?") {
    return (
      <>
        <span className="text-text-pink">Quem</span> vai <br className="hidden md:block" />
        te
        <br className="md:hidden" />{" "}
        <span className="font-editorial font-light italic">ensinar</span>{" "}
        <br className="hidden md:block" />
        tudo isso?
      </>
    );
  }

  return <StyledHeading segments={heading} />;
}

export default function SocialProofOffer({
  feedback,
  instructor,
  settings,
}: SocialProofOfferProps) {
  return (
    <>
      <section className="relative z-10 flex flex-col items-center overflow-visible bg-[#D82099] px-4 pt-20 pb-10 text-white lg:px-0 lg:pt-[63px] lg:pb-[45px]">
        <div className="absolute top-0 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <Button
            label="Quero ser FigmaLover"
            href={settings.checkoutUrl}
            courseName={settings.courseName}
            trackingValue={settings.cashPrice}
            size="blackFridayBridge"
            type="blackFridayPurple"
            content_name="CTA Módulos Black Friday"
          />
        </div>

        <h2 className="mx-auto max-w-[979px] text-center font-articulat text-[clamp(2.75rem,7vw,5.9375rem)] leading-[0.81] font-bold tracking-[-0.08em]">
          <span className="block lg:whitespace-nowrap">
            Quem{" "}
            <span className="font-windy inline-block text-[1.426em] leading-[0.81] font-normal tracking-[-0.04em] text-[#201F1F]">
              aprende
            </span>
            , coloca a mão
          </span>
          <span className="block lg:whitespace-nowrap">no mouse e começa a evoluir</span>
        </h2>

        <div className="mt-3 w-full">
          <CarouselFeedbacks images={feedback.images} />
        </div>
      </section>
      <BlackFridayTicker />
      <BlackFridayOffer settings={settings} />

      <section className="deferred-section relative overflow-hidden bg-[#F4EDE8] px-8 py-8 md:py-20 xl:py-30 2xl:py-36">
        <div className="absolute bottom-40 -left-10 rotate-45 xl:-left-16 xl:bottom-140">
          <Image
            src="/icons/estrela-negra.svg"
            width={90}
            height={32}
            alt="estrela ícone negra"
            className="object-contain xl:w-36"
          />
        </div>
        <div className="absolute bottom-70 left-2 rotate-[-136.35deg] xl:bottom-124">
          <Image
            src="/icons/estrela-negra.svg"
            width={40}
            height={32}
            alt="estrela ícone negra"
            className="object-contain xl:w-12"
          />
        </div>
        <div className="absolute right-2 bottom-40 rotate-[-43.65deg] xl:right-6 xl:bottom-55">
          <Image
            src="/icons/estrela-negra.svg"
            width={40}
            height={32}
            alt="estrela ícone negra"
            className="object-contain"
          />
        </div>
        <div className="absolute -right-10 bottom-10 rotate-12 xl:-right-12">
          <Image
            src="/icons/estrela-negra.svg"
            width={90}
            height={32}
            alt="estrela ícone negra"
            className="object-contain xl:w-36"
          />
        </div>
        <div className="mx-auto flex flex-col items-center gap-8 md:flex-row 2xl:max-w-6xl 2xl:gap-10 xl:max-w-5xl xl:flex-row-reverse xl:gap-12">
          <div className="flex flex-1 flex-col items-center gap-2 md:items-start xl:gap-4">
            <h2 className="text-center font-articulat text-4xl leading-8 font-bold tracking-[-6%] md:text-start md:leading-none xl:text-7xl xl:leading-14 2xl:text-7xl">
              <InstructorHeading heading={instructor.heading} />
            </h2>
            <div className="flex flex-col gap-4 text-center font-articulat text-[11px] leading-3 text-balance md:text-start lg:leading-6 xl:text-lg 2xl:text-xl">
              {instructor.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="relative mr-4 h-[290.56px] w-[272px] xl:mt-16 xl:mr-0 xl:flex xl:w-[580px] xl:items-center">
            <Image
              src={instructor.mobileImage.src}
              alt={instructor.mobileImage.alt}
              fill
              className="object-cover xl:hidden"
            />
            <Image
              src={instructor.desktopImage.src}
              alt={instructor.desktopImage.alt}
              width={instructor.desktopImage.width}
              height={instructor.desktopImage.height}
              className="hidden object-cover xl:block"
            />
          </div>
        </div>
      </section>
    </>
  );
}
