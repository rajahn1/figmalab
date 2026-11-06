import Image from "next/image";

import type { LandingPageContent } from "@/lib/landing/types";
import BlackFridayTicker from "../BlackFridayTicker";
import Button from "../Button";
import CarouselFeedbacks from "../CarouselFeedbacks";
import BlackFridayInstructor from "./BlackFridayInstructor";
import BlackFridayOffer from "./BlackFridayOffer";

interface SocialProofOfferProps {
  feedback: LandingPageContent["feedback"];
  settings: LandingPageContent["settings"];
}

export default function SocialProofOffer({ feedback, settings }: SocialProofOfferProps) {
  return (
    <>
      <section className="relative z-10 flex flex-col items-center overflow-visible bg-[#D82099] px-6 pt-16 pb-10 text-white lg:px-0 lg:pt-[63px] lg:pb-[45px]">
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

        <h2 className="mx-auto w-full max-w-[340px] sm:max-w-[520px] lg:max-w-[980px]">
          <Image
            src="/icons/quem-aprende-mao-no-mouse.svg"
            alt="Quem aprende, coloca a mão no mouse e começa a evoluir"
            width={980}
            height={185}
            className="h-auto w-full"
          />
        </h2>

        <div className="-mt-1 w-full lg:mt-3">
          <CarouselFeedbacks images={feedback.images} />
        </div>
      </section>
      <BlackFridayTicker />
      <BlackFridayOffer settings={settings} />
      <BlackFridayInstructor />
    </>
  );
}
