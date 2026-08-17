import { getImageProps } from "next/image";
import Button from "../Button";
import HeroMotion from "./HeroMotion";

export default function Hero() {
  const { props: mobileHero } = getImageProps({
    src: "/images/section-hero-emi-mobile-3x.webp",
    alt: "Mulher branca de cabelos pretos segurando um iPad",
    width: 1440,
    height: 1164,
    sizes: "100vw",
    quality: 78,
  });
  const { props: desktopHero } = getImageProps({
    src: "/images/section-hero-emi-opt.webp",
    alt: "Mulher branca de cabelos pretos segurando um iPad",
    width: 1920,
    height: 1038,
    sizes: "100vw",
    quality: 78,
  });

  return (
    <section
      id="section-hero"
      className="relative scroll-smooth bg-[#EB3B6A] text-white lg:aspect-[1920/1037.13] lg:px-8 xl:pt-0 2xl:pt-12"
    >
      <picture className="relative block lg:absolute lg:inset-0">
        <source media="(min-width: 1024px)" srcSet={desktopHero.srcSet} sizes={desktopHero.sizes} />
        <img
          {...mobileHero}
          alt="Mulher branca de cabelos pretos segurando um iPad"
          fetchPriority="high"
          className="h-auto w-full lg:h-full lg:object-cover"
        />
      </picture>

      <div className="relative z-10 flex flex-col pt-0 lg:pt-8 xl:pt-8 2xl:pt-8">
        <div className="-mt-8 ml-0 flex flex-col gap-4 bg-[#EB3B6A] text-center lg:mt-56 lg:ml-32 lg:bg-transparent lg:text-start xl:ml-40 xl:gap-6 2xl:ml-56">
          <h1 className="font-editorial text-3xl leading-[92%] tracking-[-5%] xl:text-5xl 2xl:text-6xl">
            <span className="font-light">Aprenda</span> Figma do zero
            <br /> <span className="font-light">enquanto desenvolve um</span>
            <br />
            processo criativo <span className="font-light">de verdade.</span>
          </h1>
          <h2 className="text-center text-sm leading-4 font-normal lg:text-start xl:text-start xl:text-base xl:leading-6 2xl:text-xl">
            Chega de travar na frente da tela, depender <br />
            de referências do Pinterest ou criar layouts
            <br /> no improviso. No FigmaLab você aprende <br />
            exatamente como{" "}
            <span className="font-bold">
              pensar, organizar e <br />
              construir designs de posts
            </span>{" "}
            do início ao fim.
          </h2>
          <div className="mb-12 xl:mb-0">
            <Button size="md" label="Eu quero fazer parte" content_name="CTA Hero" />
          </div>
        </div>
      </div>
      <HeroMotion />
    </section>
  );
}
