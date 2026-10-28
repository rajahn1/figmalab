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
    <div className="relative w-full max-w-[480px] rounded-[26px] border border-[#DF3DA8] bg-[#201F1F] px-5 pt-7 pb-6 font-articulat text-white sm:px-11 sm:pt-[30px] sm:pb-[25px]">
      <div className="relative mx-auto w-fit text-center text-[clamp(1.75rem,8vw,2.358rem)] leading-[0.668] tracking-[-0.03em] text-[#979090]">
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

      <div className="mt-4 flex items-end justify-center">
        <div className="mb-[6px] w-[66px] shrink-0 tracking-[-0.05em]">
          <p className="text-[clamp(0.9rem,4vw,1.142rem)] leading-[0.72] font-medium text-[#585858]">
            Por
            <br />
            apenas
            <br />
            12x de
          </p>
          <p className="mt-3 text-[clamp(2.25rem,10vw,3.291rem)] leading-[0.55] font-semibold text-[#F4EDE8]">
            R$
          </p>
        </div>
        <p className="text-[clamp(5.4rem,25vw,8.388rem)] leading-[0.7] font-extrabold tracking-[-0.07em] text-[#F4EDE8]">
          23,48
        </p>
      </div>

      <p className="mt-4 text-center text-[clamp(1.25rem,6vw,1.872rem)] leading-none font-medium tracking-[-0.02em] text-[#585858]">
        ou <strong className="font-bold text-[#F4EDE8]">R$227</strong> à vista
      </p>

      <div className="mt-8 w-full">
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

      <div className="mt-8 grid grid-cols-3 border-t border-[#585858] pt-4 text-center text-[#F4EDE8]">
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
    <section
      id="oferta"
      className="overflow-hidden bg-[#201F1F] pt-14 pb-16 text-white lg:pt-20 lg:pb-[109px]"
    >
      <div className="mx-auto grid w-full max-w-[1090px] items-center px-5 lg:grid-cols-[450px_668px] lg:px-0">
        <div className="relative z-10 lg:pt-[14px]">
          <h2 className="font-editorial text-[clamp(3.25rem,11vw,4.384rem)] leading-[0.91] font-light tracking-[-0.06em]">
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
                className="absolute right-0 bottom-[0.04em] left-0 h-[0.105em] bg-[#DF3DA8]"
              />
            </span>
          </h2>

          <p className="mt-8 max-w-[393px] text-[clamp(1.125rem,4vw,1.608rem)] leading-[1.15] tracking-[-0.02em]">
            Você não precisa continuar acumulando referências sem saber o que fazer com elas, nem
            depender de um momento de inspiração para começar seus projetos. O FigmaLab reúne
            processo criativo, fundamentos do design, domínio da ferramenta e prática em uma única
            jornada.
          </p>
        </div>

        <div className="relative mt-8 w-full max-w-[668px] justify-self-center lg:mt-0 lg:-ml-7 lg:justify-self-start">
          <Image
            src={emiOpportunityImage}
            alt="Emi sentada em uma cesta do Figma com cupons da Black Friday"
            width={668}
            height={624}
            sizes="(max-width: 1023px) 94vw, 668px"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>

      <div className="mx-auto mt-10 w-[calc(100%-2rem)] max-w-[1721px] rounded-[50px] bg-black px-5 py-12 sm:px-8 lg:mt-[51px] lg:px-0 lg:py-[96px]">
        <div className="mx-auto grid max-w-[1090px] items-center gap-12 lg:grid-cols-[555px_480px] lg:gap-[55px]">
          <div className="flex flex-col items-start">
            <h2 className="font-articulat text-[clamp(3.5rem,8vw,5rem)] leading-[0.91] font-extrabold tracking-[-0.07em]">
              <span className="block">Aproveite</span>
              <span className="block whitespace-nowrap">
                a Black
                <span className="font-windy inline-block font-normal tracking-[-0.04em] text-[#DF3DA8]">
                  Lab
                </span>
              </span>
              <span className="block">para entrar</span>
              <span className="block whitespace-nowrap">no FigmaLab!</span>
            </h2>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-2 lg:mt-[42px]">
              <p className="max-w-[156px] text-[clamp(1.4rem,4vw,2.148rem)] leading-[0.92] tracking-[-0.05em] uppercase">
                Oferta válida de
              </p>
              <BlackFridayDateBadge variant="offer" />
            </div>
          </div>

          <PriceCard settings={settings} />
        </div>
      </div>
    </section>
  );
}
