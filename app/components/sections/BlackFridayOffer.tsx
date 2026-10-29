import Image from "next/image";

import type { LandingPageContent } from "@/lib/landing/types";
import BlackFridayDateBadge from "../BlackFridayDateBadge";
import Button from "../Button";

const emiOpportunityImage =
  "https://pub-d51033f4b865409099cb79bce79a2581.r2.dev/figmalab/emi_oportunidade.webp";

interface BlackFridayOfferProps {
  settings: LandingPageContent["settings"];
}

function PriceCard({ settings }: BlackFridayOfferProps) {
  return (
    <div className="relative w-full max-w-[340px] rounded-[22px] border border-[#DF3DA8] bg-[#201F1F] px-4 pt-6 pb-5 font-articulat text-white sm:max-w-[480px] sm:rounded-[26px] sm:px-11 sm:pt-[30px] sm:pb-[25px]">
      <div className="relative mx-auto w-fit text-center text-[1.5rem] leading-[0.668] tracking-[-0.03em] text-[#979090] sm:text-[2.358rem]">
        De R$ 297
        <Image
          src="/icons/black-friday-price-strike.svg"
          alt=""
          width={172}
          height={22}
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 h-auto w-[106%] -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <div className="mt-2 flex items-end justify-center sm:mt-4 lg:mt-6">
        <div className="mb-[5px] w-[50px] shrink-0 tracking-[-0.05em] sm:mb-[6px] sm:w-[66px]">
          <p className="text-[0.78rem] leading-[0.78] font-medium text-[#585858] sm:text-[1.142rem] sm:leading-[0.72] lg:leading-[0.92]">
            Por
            <br />
            apenas
            <br />
            12x de
          </p>
          <p className="mt-3 text-[2rem] leading-[0.55] font-semibold text-[#F4EDE8] sm:text-[3.291rem]">
            R$
          </p>
        </div>
        <p className="text-[4.6rem] leading-[0.7] font-extrabold tracking-[-0.07em] text-[#F4EDE8] sm:text-[8.388rem]">
          23,48
        </p>
      </div>

      <p className="mt-4 text-center text-[1.1rem] leading-none font-medium tracking-[-0.02em] text-[#585858] sm:text-[1.872rem]">
        ou <strong className="font-bold text-[#F4EDE8]">R$227</strong> à vista
      </p>

      <div className="mt-6 w-full sm:mt-8">
        <Button
          type="blackFriday"
          size="blackFridayOffer"
          label="Eu quero aproveitar!"
          href={settings.checkoutUrl}
          courseName={settings.courseName}
          trackingValue={227}
          content_name="CTA Oferta Black Friday"
        />
      </div>

      <div className="mt-6 grid grid-cols-3 border-t border-[#585858] pt-3 text-center text-[#F4EDE8] sm:mt-8 sm:pt-4">
        <div className="flex min-h-[54px] flex-col items-center justify-center px-2">
          <strong className="text-[clamp(1.2rem,5vw,1.543rem)] leading-[0.9] tracking-[-0.07em]">
            1 ano
          </strong>
          <span className="text-[clamp(0.62rem,2.5vw,0.735rem)] leading-[0.92] tracking-[-0.07em]">
            de acesso
          </span>
        </div>
        <div className="flex min-h-[54px] flex-col items-center justify-center border-x border-[#585858] px-2">
          <strong className="text-[clamp(1.2rem,5vw,1.543rem)] leading-[0.9] tracking-[-0.07em]">
            7 dias
          </strong>
          <span className="text-[clamp(0.62rem,2.5vw,0.735rem)] leading-[0.92] tracking-[-0.07em]">
            de garantia
          </span>
        </div>
        <div className="flex min-h-[54px] flex-col items-center justify-center px-2">
          <Image
            src="/icons/logo-kiwify.svg"
            alt="Kiwify"
            width={71}
            height={19}
            className="h-auto w-[clamp(3.25rem,13vw,4.438rem)]"
          />
          <span className="mt-1 text-[clamp(0.62rem,2.5vw,0.735rem)] leading-[0.92] tracking-[-0.07em]">
            compra segura
          </span>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-[-4px] left-1/2 h-[7px] w-[47%] -translate-x-1/2 rounded-full bg-[#DF3DA8]"
      />
    </div>
  );
}

export default function BlackFridayOffer({ settings }: BlackFridayOfferProps) {
  return (
    <section id="oferta" className="overflow-hidden bg-[#201F1F] pt-14 text-white lg:pt-20">
      <div className="mx-auto grid w-full max-w-[1090px] items-center px-6 lg:grid-cols-[450px_668px] lg:px-0">
        <div className="relative z-10 text-center lg:pt-[14px] lg:text-left">
          <h2 className="mx-auto max-w-[340px] font-editorial text-[2.75rem] leading-[0.94] font-light tracking-[-0.06em] sm:text-[3.25rem] lg:mx-0 lg:w-max lg:max-w-none lg:whitespace-nowrap lg:text-[4.384rem] lg:leading-[0.91]">
            A oportunidade
            <br />
            de investir no seu
            <br />
            desenvolvimento por
            <br />
            um{" "}
            <span className="relative inline-block tracking-[-0.014em]">
              <span className="relative z-10">valor especial.</span>
              <span
                aria-hidden="true"
                className="absolute right-0 bottom-[0.12em] left-0 z-0 h-[0.105em] bg-[#DF3DA8]"
              />
            </span>
          </h2>

          <div className="mx-auto mt-8 max-w-[340px] space-y-5 text-base leading-[1.2] tracking-[-0.02em] lg:mx-0 lg:max-w-[393px] lg:text-[1.608rem] lg:leading-[1.15]">
            <p>
              Você não precisa continuar acumulando referências sem saber o que fazer com elas, nem
              depender de um momento de inspiração para começar seus projetos.
            </p>
            <p>
              O FigmaLab reúne processo criativo, fundamentos do design, domínio da ferramenta e
              prática em uma única jornada.
            </p>
          </div>
        </div>

        <div className="relative mt-8 w-full max-w-[668px] justify-self-center lg:mt-0 lg:-ml-7 lg:justify-self-start">
          <Image
            src={emiOpportunityImage}
            alt="Emi sentada em uma cesta do Figma com cupons da Black Friday"
            width={1337}
            height={1250}
            quality={100}
            sizes="(max-width: 1023px) 94vw, 668px"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>

      <div className="mx-auto mt-10 w-[calc(100%-2rem)] max-w-[1721px] rounded-[10px] bg-black px-4 py-10 sm:rounded-[50px] sm:px-8 lg:mt-[51px] lg:px-0 lg:py-[96px]">
        <div className="mx-auto grid max-w-[1090px] items-center gap-8 lg:grid-cols-[555px_480px] lg:gap-[55px]">
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="w-full max-w-[272px] sm:max-w-[420px] lg:max-w-[555px]">
              <Image
                src="/icons/aproveite-a-black-lab-mobile.svg"
                alt="Aproveite a BlackLab para entrar no FigmaLab!"
                width={272}
                height={168}
                className="h-auto w-full sm:hidden"
              />
              <Image
                src="/icons/aproveite-a-black-lab.svg"
                alt="Aproveite a BlackLab para entrar no FigmaLab!"
                width={555}
                height={341}
                className="hidden h-auto w-full sm:block"
              />
            </h2>

            <div className="mt-10 hidden items-center gap-2 lg:flex">
              <p className="max-w-[156px] text-[clamp(1.4rem,4vw,2.148rem)] leading-[0.92] tracking-[-0.05em] uppercase">
                Oferta válida de
              </p>
              <BlackFridayDateBadge variant="offer" />
            </div>
          </div>

          <PriceCard settings={settings} />

          <div className="flex items-center justify-center gap-1.5 lg:hidden">
            <p className="shrink-0 text-left text-[0.72rem] leading-[0.9] tracking-[-0.05em] uppercase">
              <span className="block">Oferta</span>
              <span className="block whitespace-nowrap">válida de</span>
            </p>
            <BlackFridayDateBadge variant="offer" />
          </div>
        </div>
      </div>
    </section>
  );
}
