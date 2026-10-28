import Image from "next/image";

import BlackFridayDateBadge from "../BlackFridayDateBadge";
import BlackFridayTicker from "../BlackFridayTicker";
import Button from "../Button";

const r2AssetBase = "https://pub-d51033f4b865409099cb79bce79a2581.r2.dev/figmalab";

const navigationLinks = [
  { label: "Para quem é", href: "#para-quem-e" },
  { label: "O que você recebe", href: "#o-que-voce-recebe" },
  { label: "Módulos", href: "#modulos" },
  { label: "Oferta", href: "#oferta" },
];

export default function Hero() {
  return (
    <section id="section-hero" className="overflow-hidden bg-[#201F1F] font-articulat text-white">
      <header className="mx-auto flex max-w-[1062px] flex-col items-center gap-5 px-5 pt-5 sm:flex-row sm:justify-between lg:px-0 lg:pt-[69px]">
        <a
          href="https://www.instagram.com/studioemi.design/"
          target="_blank"
          rel="noreferrer noopener"
          className="flex shrink-0 items-center gap-2 text-sm font-normal focus-visible:rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#DF3DA8] lg:text-[20px]"
        >
          <Image
            src="/icons/studio-emi-mark.svg"
            alt=""
            width={33}
            height={33}
            aria-hidden="true"
          />
          @studioemi.design
        </a>

        <nav
          aria-label="Navegação da landing page"
          className="flex w-full items-center justify-center gap-x-5 gap-y-2 overflow-x-auto whitespace-nowrap pb-1 text-xs sm:w-auto sm:justify-end lg:gap-8 lg:text-base"
        >
          {navigationLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors hover:text-[#DF3DA8] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#DF3DA8] ${index === 0 ? "text-[#DF3DA8]" : "text-white"}`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <div className="mx-auto grid max-w-[1062px] px-5 pt-10 pb-12 lg:grid-cols-[450px_586px] lg:gap-[26px] lg:px-0 lg:pt-[55px] lg:pb-[71px]">
        <div className="relative z-10 flex flex-col items-start">
          <div className="w-full">
            <h1 className="flex h-[clamp(6.4rem,30vw,9.375rem)] items-center whitespace-nowrap leading-[0.92] tracking-[-0.05em]">
              <span className="text-[clamp(4.5rem,20vw,7.451rem)] font-bold">Black</span>
              <span className="-ml-[0.16em] translate-y-[-0.03em] font-windy text-[clamp(6rem,27vw,10.175rem)] font-normal text-[#DF3DA8]">
                Lab
              </span>
            </h1>

            <div className="mt-[3px] flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-[10px]">
              <p className="whitespace-nowrap text-[clamp(1.15rem,5vw,1.668rem)] leading-[0.92] tracking-[-0.05em]">
                DO STUDIO EMI
              </p>
              <BlackFridayDateBadge />
            </div>
          </div>

          <div className="mt-[31px] h-px w-full bg-[#585858]" aria-hidden="true" />

          <h2 className="mt-[38px] max-w-[441px] font-editorial text-[clamp(3rem,12vw,4.551rem)] leading-[1.04] font-light tracking-[-0.07em]">
            Domine o Figma de
            <br />
            uma vez por todas
            <br />
            com <strong className="font-normal text-[#DF3DA8]">R$70 OFF</strong>!
          </h2>

          <p className="mt-[25px] max-w-[438px] text-[clamp(1.125rem,5vw,1.732rem)] leading-[1.108] tracking-[-0.01em]">
            Aprenda a dominar o Figma e{" "}
            <strong className="font-bold">
              desenvolver seu processo criativo para criar posts e carrosséis com mais autonomia
            </strong>{" "}
            e criatividade. Aproveite a Black Friday para{" "}
            <strong className="font-bold">
              entrar no FigmaLab por um valor especial, por tempo limitado!
            </strong>
          </p>

          <div className="mt-[31px]">
            <Button
              label="Eu quero aproveitar!"
              href="https://pay.kiwify.com.br/eADN6hR"
              courseName="FigmaLab"
              trackingValue={227}
              content_name="CTA Hero Black Friday"
              size="blackFriday"
              type="blackFriday"
            />
          </div>
        </div>

        <div className="relative mt-12 h-[430px] w-full max-w-[686px] justify-self-center sm:h-[610px] lg:mt-[81px] lg:h-[748px] lg:w-[686px] lg:max-w-none lg:justify-self-start">
          <div
            aria-hidden="true"
            className="absolute bottom-[4%] left-[1%] h-[13%] w-[96%] rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.65)_0%,rgba(0,0,0,0)_72%)] lg:bottom-[4.5%]"
          />
          <Image
            src={`${r2AssetBase}/emi_com_estrelas.webp`}
            alt="Emi sentada, cercada por flores rosas"
            width={994}
            height={1123}
            priority
            sizes="(max-width: 639px) 92vw, (max-width: 1023px) 620px, 640px"
            className="absolute top-[2%] left-[8%] h-auto w-[88%] max-w-none drop-shadow-[0_30px_30px_rgba(0,0,0,0.25)] lg:top-[-1%] lg:left-[6.1%] lg:w-[670px]"
          />
          <Image
            src={`${r2AssetBase}/cupom.webp`}
            alt="Cupom de R$70 de desconto"
            width={772}
            height={330}
            priority
            sizes="(max-width: 639px) 46vw, (max-width: 1023px) 280px, 327px"
            className="black-friday-float absolute top-[55%] left-0 h-auto w-[48%] max-w-none lg:top-[55.1%] lg:w-[327px]"
          />
          <Image
            src={`${r2AssetBase}/icone_figma.webp`}
            alt="Ícone tridimensional do Figma em rosa"
            width={402}
            height={499}
            priority
            sizes="(max-width: 639px) 24vw, (max-width: 1023px) 145px, 170px"
            className="black-friday-float black-friday-float-delayed absolute top-[50%] right-[2%] h-auto w-[25%] max-w-none lg:top-[50.1%] lg:right-[0.7%] lg:w-[170px]"
          />
        </div>
      </div>

      <BlackFridayTicker />
    </section>
  );
}
