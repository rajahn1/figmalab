import Image, { getImageProps } from "next/image";
import Bubble from "../Bubble";
import Button from "../Button";

const negativePoints = [
  "Continuar criando no improviso",
  "Travar no frame em branco",
  "Depender 100% das referências",
  'Sentir que "falta criatividade"',
  "Demorar 3h em um design simples",
];

const positivePoints = [
  "Desenvolver um processo criativo",
  "Saber exatamente por onde começar",
  "Analisar briefing com clareza",
  "Criar de forma autoral",
  "Dominar o Figma com fluidez",
];

export default function MarketingIntro() {
  const { props: mobileMethodBackground } = getImageProps({
    src: "/images/bg-mobile-feedbacks.webp",
    alt: "",
    width: 800,
    height: 1478,
    sizes: "100vw",
    quality: 78,
  });
  const { props: desktopMethodBackground } = getImageProps({
    src: "/images/section-bg-feedbacks-desktop-optimized.webp",
    alt: "",
    width: 4236,
    height: 2471,
    sizes: "100vw",
    quality: 76,
  });
  const { props: mobileBenefitsBackground } = getImageProps({
    src: "/images/section-beneficios-mobile-2x.webp",
    alt: "",
    width: 1281,
    height: 1548,
    sizes: "100vw",
    quality: 78,
  });
  const { props: desktopBenefitsBackground } = getImageProps({
    src: "/images/section-beneficios-opt.webp",
    alt: "",
    width: 1920,
    height: 1000,
    sizes: "100vw",
    quality: 78,
  });

  return (
    <>
      <section className="deferred-section bg-[#212121] py-6 px-8 leading-[94%] md:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 md:gap-12">
          <h2 className="text-center font-articulat text-xl leading-5 text-bg-white md:leading-12 lg:text-4xl lg:leading-8 xl:text-5xl">
            Hoje existem <span className="font-bold">dois caminhos</span> para
            <br /> quem trabalha com
            <span className="font-bold"> design de post:</span>
          </h2>

          <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row md:items-start md:gap-8">
            <ul className="space-y-2">
              {negativePoints.map((point) => (
                <Bubble key={point} label={point} type="negative" />
              ))}
            </ul>
            <ul className="space-y-2">
              {positivePoints.map((point) => (
                <Bubble key={point} label={point} type="positive" />
              ))}
            </ul>
          </div>

          <Image
            alt="Qual caminho você escolhe"
            src="/icons/qual-caminho-voce-escolhe.png"
            width={773}
            height={207}
          />
        </div>
      </section>

      <section className="deferred-section relative flex aspect-[800/1478] justify-center text-black md:aspect-[4236/2471] md:items-center">
        <picture className="absolute inset-0">
          <source
            media="(min-width: 768px)"
            srcSet={desktopMethodBackground.srcSet}
            sizes={desktopMethodBackground.sizes}
          />
          <img
            {...mobileMethodBackground}
            alt=""
            className="h-full w-full object-contain"
            loading="lazy"
          />
        </picture>
        <div className="relative z-10 mt-90 flex flex-col items-center gap-2 pb-0 md:items-start md:gap-4 md:pb-0 lg:mt-20 lg:ml-110 xl:mt-0 xl:ml-120 2xl:ml-160">
          <h2 className="text-center font-editorial text-3xl leading-7 font-light tracking-tighter sm:text-5xl sm:leading-11 md:text-start md:leading-14 xl:text-5xl xl:leading-11 2xl:text-7xl 2xl:leading-16">
            O problema <br className="hidden md:block" />
            não é <br className="md:hidden" /> talento, é<br className="hidden md:block" /> falta de{" "}
            <span className="text-text-pink">método</span>.
          </h2>
          <span className="text-center font-articulat text-xs leading-3 sm:text-base md:text-start lg:leading-4 xl:text-lg xl:leading-6 2xl:text-2xl">
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
          </span>
          <span className="mt-2 text-center text-xs leading-3 sm:text-base md:mb-8 md:text-start lg:leading-4 xl:mb-4 xl:text-lg xl:leading-6 2xl:text-2xl">
            Saia do amadorismo e domine o método.
            <br />
            que{" "}
            <span className="font-bold">
              transforma criatividade travada
              <br className="hidden md:block" /> em <br className="md:hidden" />
              design de post estratégico.
            </span>
          </span>

          <div className="hidden md:block">
            <Button
              label="Eu quero fazer parte"
              content_name="CTA O problema não é talento, é falta de método"
              size="xl"
            />
          </div>
          <div className="mt-6 md:hidden">
            <Button
              size="md"
              label="Eu quero fazer parte"
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
          O que você <span className="font-editorial font-light italic">recebe</span> <br /> no
          FigmaLab
        </h2>
      </section>
    </>
  );
}
