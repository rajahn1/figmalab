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
      <header className="mx-auto flex max-w-[1062px] flex-col items-center gap-4 px-5 pt-4 sm:flex-row sm:justify-between lg:px-0 lg:pt-5">
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
            className="size-6 lg:size-[33px]"
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

      <div className="mx-auto grid max-w-[1062px] px-6 pt-6 pb-10 lg:grid-cols-[450px_586px] lg:gap-[26px] lg:px-0 lg:pt-[52px] lg:pb-[55px]">
        <div className="relative z-10 order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
          <div className="w-full">
            <h1 className="flex h-[clamp(5.5rem,26vw,8.75rem)] items-center justify-center whitespace-nowrap leading-[0.92] tracking-[-0.05em] lg:justify-start">
              <span className="text-[clamp(3.8rem,17vw,6.723rem)] font-bold">Black</span>
              <span className="-ml-[0.16em] translate-y-[-0.03em] font-windy text-[clamp(5rem,23vw,9.18rem)] font-normal text-[#DF3DA8]">
                Lab
              </span>
            </h1>

            <div className="mt-1 flex items-center justify-center gap-2 lg:gap-[10px]">
              <p className="inline-flex h-5 translate-y-px items-center justify-center whitespace-nowrap text-center text-[0.82rem] leading-none tracking-[-0.05em] sm:text-[1rem] lg:h-auto lg:translate-y-0 lg:text-[1.374rem] lg:leading-[0.92]">
                DO STUDIO EMI
              </p>
              <BlackFridayDateBadge />
            </div>
          </div>

          <div
            className="mt-6 h-px w-[88%] bg-[#585858] lg:mt-[19px] lg:w-[395px]"
            aria-hidden="true"
          />

          <h2 className="mt-8 max-w-[350px] font-editorial text-[clamp(2.55rem,11vw,4.106rem)] leading-[1.04] font-light tracking-[-0.07em] lg:mt-[22px] lg:max-w-[398px]">
            Domine o Figma de
            <br />
            uma vez por todas
            <br />
            com <strong className="font-normal text-[#DF3DA8]">R$70 OFF</strong> !
          </h2>

          <p className="mt-5 max-w-[350px] text-[1rem] leading-[1.18] tracking-[-0.01em] sm:text-[1.125rem] lg:mt-[5px] lg:max-w-[431px] lg:text-[1.464rem] lg:leading-[1.108]">
            Aprenda a dominar o Figma e{" "}
            <strong className="font-bold">
              desenvolver seu processo criativo para criar posts e carrosséis com mais autonomia
            </strong>{" "}
            e criatividade. Aproveite a Black Friday para{" "}
            <strong className="font-bold">
              entrar no FigmaLab por um valor especial, por tempo limitado!
            </strong>
          </p>

          <div className="mt-[31px] lg:mt-6">
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

        <div className="relative order-1 mt-4 h-[360px] w-full max-w-[420px] justify-self-center sm:h-[520px] sm:max-w-[620px] lg:order-2 lg:mt-[31px] lg:h-[664px] lg:w-[686px] lg:max-w-none lg:justify-self-start">
          <div
            aria-hidden="true"
            className="absolute bottom-[4%] left-[1%] h-[13%] w-[96%] rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.65)_0%,rgba(0,0,0,0)_72%)] lg:bottom-[4.5%] lg:left-[1.75%] lg:w-[85.7%]"
          />
          <Image
            src={`${r2AssetBase}/emi_com_estrelas.webp`}
            alt="Emi sentada, cercada por flores rosas"
            width={1366}
            height={1497}
            priority
            quality={100}
            sizes="(max-width: 639px) 92vw, (max-width: 1023px) 620px, 610px"
            className="absolute top-[2%] left-[8%] h-auto w-[88%] max-w-none drop-shadow-[0_30px_30px_rgba(0,0,0,0.25)] lg:top-0 lg:left-[1.3%] lg:w-[610px]"
          />
          <Image
            src={`${r2AssetBase}/cupom.webp`}
            alt="Cupom de R$70 de desconto"
            width={772}
            height={330}
            priority
            quality={100}
            sizes="(max-width: 639px) 46vw, (max-width: 1023px) 280px, 290px"
            className="black-friday-float absolute top-[55%] left-0 h-auto w-[48%] max-w-none lg:top-[366px] lg:left-[9px] lg:w-[290px]"
          />
          <div className="black-friday-float black-friday-float-delayed absolute top-[50%] right-[2%] w-[25%] lg:top-[332px] lg:right-auto lg:left-[388px] lg:flex lg:h-[188px] lg:w-[151px] lg:items-center lg:justify-center">
            <Image
              src={`${r2AssetBase}/icone_figma.webp`}
              alt="Ícone tridimensional do Figma em rosa"
              width={402}
              height={499}
              priority
              quality={100}
              sizes="(max-width: 639px) 24vw, (max-width: 1023px) 145px, 136px"
              className="h-auto w-full max-w-none lg:h-[169px] lg:w-[136px] lg:rotate-[10deg]"
            />
          </div>
        </div>
      </div>

      <BlackFridayTicker />
    </section>
  );
}
