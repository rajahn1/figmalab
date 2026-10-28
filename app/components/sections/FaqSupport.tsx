import Image from "next/image";
import { fixedLandingImages } from "@/lib/landing/fixed-images";
import type { LandingPageContent } from "@/lib/landing/types";
import Button from "../Button";
import StyledHeading from "../StyledHeading";

interface FaqSupportProps {
  faq: LandingPageContent["faq"];
  support: LandingPageContent["support"];
  settings: LandingPageContent["settings"];
}

export default function FaqSupport({ faq, support, settings }: FaqSupportProps) {
  const lily = fixedLandingImages.lily;

  return (
    <section className="deferred-section relative overflow-hidden bg-bg-black py-8 text-white md:py-20">
      <Image
        alt={lily.alt}
        src={lily.src}
        width={lily.width}
        height={lily.height}
        className="absolute -bottom-4 -left-15 w-[129px] xl:-left-40 xl:w-84 2xl:w-100"
      />
      <Image
        alt={lily.alt}
        src={lily.src}
        width={lily.width}
        height={lily.height}
        className="absolute -right-15 bottom-12 w-[129px] rotate-[-60deg] xl:-right-36 xl:bottom-80 xl:w-84 2xl:w-100"
      />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 md:gap-12">
        <h2 className="font-articulat text-4xl font-bold xl:text-8xl 2xl:text-9xl">
          <StyledHeading segments={faq.heading} />
        </h2>
        <div className="flex w-[88%] flex-col gap-4 md:w-full">
          {faq.items.map((item) => (
            <details
              key={item.question}
              name="figmalab-faq"
              className="group overflow-hidden rounded-lg bg-[#403F3F] text-sm font-articulat transition-all lg:text-lg xl:text-xl"
            >
              <summary className="flex w-full cursor-pointer list-none items-center justify-between px-4 py-3 text-left hover:bg-white/5 md:px-8 md:py-4 [&::-webkit-details-marker]:hidden">
                {item.question}
                <Image
                  className="w-4 group-open:hidden md:w-8"
                  src="/icons/icon-down-faq.svg"
                  alt=""
                  height={32}
                  width={32}
                />
                <Image
                  className="hidden w-4 group-open:block md:w-8"
                  src="/icons/icon-up-faq.svg"
                  alt=""
                  height={32}
                  width={32}
                />
              </summary>
              <div className="bg-bg-pink p-4 pt-4 leading-4 text-balance text-white xl:leading-6 md:p-8">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
        <div className="mt-4 flex aspect-[334.26/171.53] w-94 justify-center gap-2 bg-[url('/images/pasta.png')] bg-cover bg-center bg-no-repeat xl:w-full xl:aspect-[1594/818] xl:items-center xl:gap-16 xl:bg-[url('/images/pasta-desktop.webp')]">
          <div className="mt-10">
            <h2 className="font-articulat text-4xl leading-7 font-bold text-[#F4EDE8] xl:text-8xl xl:leading-18">
              {support.heading.split("\n").map((line, index) => (
                <span key={`${line}-${index}`}>
                  {index > 0 ? <br /> : null}
                  <span
                    className={
                      index === support.heading.split("\n").length - 1 ? "text-[#353535]" : ""
                    }
                  >
                    {line}
                  </span>
                </span>
              ))}
            </h2>
          </div>
          <div className="mt-10 flex flex-col gap-2 xl:gap-8">
            <p className="font-articulat text-xs leading-3 font-normal text-white xl:text-2xl xl:leading-6">
              Se tiver qualquer dúvida sobre
              <br /> sua inscrição no FigmaLab, conte
              <br /> com nosso suporte exclusivo via
              <br /> WhatsApp. Nossa equipe está
              <br /> pronta para te atender e tirar
              <br /> todas as suas dúvidas.
            </p>
            <Button
              label={settings.supportCtaLabel}
              href={settings.supportUrl}
              courseName={settings.courseName}
              type="support"
              content_name="CTA WhatsApp"
              size="support"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
