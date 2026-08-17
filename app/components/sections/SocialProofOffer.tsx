import Image from "next/image";
import Card from "../Card";
import CardPrice from "../CardPrice";
import CarouselFeedbacks from "../CarouselFeedbacks";

const feedbackImages = [
  { src: "/images/FEEDBACK01.webp", width: 373, height: 261, alt: "Feedback de aluna 1" },
  { src: "/images/FEEDBACK02.webp", width: 352, height: 323, alt: "Feedback de aluna 2" },
  { src: "/images/FEEDBACK03.webp", width: 348, height: 393, alt: "Feedback de aluna 3" },
  { src: "/images/FEEDBACK04.webp", width: 348, height: 273, alt: "Feedback de aluna 4" },
  { src: "/images/FEEDBACK05.webp", width: 500, height: 735, alt: "Feedback de aluna 5" },
  { src: "/images/FEEDBACK06.webp", width: 452, height: 709, alt: "Feedback de aluna 6" },
  { src: "/images/FEEDBACK07.webp", width: 527, height: 853, alt: "Feedback de aluna 7" },
  { src: "/images/FEEDBACK08.webp", width: 549, height: 843, alt: "Feedback de aluna 8" },
];

const benefits = [
  "1 ano de acesso ao FigmaLab",
  "Treinamento de Figma do zero ao avançado",
  "Comunidade de networking no WhatsApp",
  "Atualizações do Figma e aulas práticas",
  "7 dias de garantia para se adaptar",
  "Certificado de conclusão",
  "Modelo de briefing de design de post",
  "PDF de curadoria de sites que uso",
  "Aulas práticas criando carrosséis",
];

export default function SocialProofOffer() {
  return (
    <>
      <section className="deferred-section relative flex flex-col items-center justify-center gap-2 bg-text-pink py-8 md:py-20 lg:gap-8">
        <Image
          src="/images/ferramentas-figma-2.png"
          alt="ferramentas figma"
          width={162}
          height={978}
          className="absolute top-4 left-0 hidden mix-blend-lighten xl:block xl:w-16"
        />
        <Image
          src="/images/ferramentas-figma-2.png"
          alt="ferramentas figma"
          width={162}
          height={978}
          className="absolute right-0 bottom-4 hidden rotate-180 mix-blend-lighten xl:block xl:w-16"
        />
        <div className="relative mt-4 flex items-center justify-center gap-10 font-editorial text-5xl leading-7 font-bold text-white md:leading-6 xl:gap-32 xl:text-8xl xl:leading-13 2xl:text-9xl 2xl:leading-16">
          <h2 className="font-articulat">Feed</h2>
          <Image
            className="absolute -top-3 left-24 w-14 xl:-top-8 xl:left-50 xl:w-36 2xl:-top-12 2xl:left-64 2xl:w-42"
            src="/images/emoji-feedbacks.webp"
            alt="ícone coração"
            width={406.07}
            height={372.8}
          />
          <h2 className="font-light italic">backs</h2>
        </div>
        <CarouselFeedbacks images={feedbackImages} />
      </section>

      <section className="deferred-section bg-bg-black px-8 py-8 text-white md:py-20 xl:py-32">
        <div className="flex flex-col items-center gap-4 md:gap-12 xl:items-center">
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-8 xl:gap-12 2xl:gap-20">
            <div className="flex flex-col items-center gap-4 xl:items-start">
              <Image
                alt="Figma Lab Logo"
                src="/icons/logo-figma-lab.svg"
                width={238.53}
                height={57.86}
                className="xl:hidden"
              />
              <Image
                alt="Figma Lab Logo"
                src="/images/FigmaLabLogo-desktop.webp"
                width={670.29}
                height={165.03}
                className="hidden w-100 xl:block"
              />
              <Card data={benefits} icon="/icons/check-box-icon.svg" />
            </div>
            <div className="flex flex-col items-center gap-4 xl:gap-8">
              <CardPrice />
              <Image
                src="/icons/kiwify-compra-segura.svg"
                alt="logo kiwify"
                width={140.84}
                height={14.3}
              />
            </div>
          </div>
        </div>
      </section>

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
              <span className="text-text-pink">Quem</span> vai <br className="hidden xl:block" /> te
              <br className="xl:hidden" />{" "}
              <span className="font-editorial font-light italic">ensinar</span>
              <br className="hidden xl:block" /> tudo isso?
            </h2>
            <div className="flex flex-col gap-4 text-center font-articulat text-[11px] leading-3 text-balance md:text-start lg:leading-6 xl:text-lg 2xl:text-xl">
              <p>
                Prazer, eu sou a Emi, designer, fundadora do
                <br /> Studio Emi Design e criadora do FigmaLab. Nos
                <br /> últimos 4 anos desenvolvi projetos para mais de
                <br /> 200 nichos diferentes e uma das maiores lições
                <br /> que aprendi é que designers não travam por falta
                <br /> de criatividade, travam por falta de processo.
              </p>
              <p>
                Eu também já fiquei perdida na frente da tela, sem
                <br /> saber como transformar referências em layouts
                <br /> criativos e estratégicos. Foi organizando meu
                <br /> processo criativo e dominando o Figma que
                <br /> minha forma de criar mudou completamente. E<br /> hoje ensino esse mesmo
                caminho para outras
                <br /> designers dentro do FigmaLab.
              </p>
            </div>
          </div>
          <div className="relative mr-4 h-[290.56px] w-[272px] xl:mt-16 xl:mr-0 xl:flex xl:w-[580px] xl:items-center">
            <Image
              src="/images/quem-vai-te-ensinar-mobile.webp"
              alt="Mulher branca sentada"
              fill
              className="object-cover xl:hidden"
            />
            <Image
              src="/images/quem-vai-te-ensinar-desktop.webp"
              alt="Mulher branca sentada"
              width={938.96}
              height={985.58}
              className="hidden object-cover xl:block"
            />
          </div>
        </div>
      </section>
    </>
  );
}
