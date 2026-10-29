import Image from "next/image";

const instructorImage =
  "https://pub-d51033f4b865409099cb79bce79a2581.r2.dev/figmalab/foto_prazer_sou_emi.webp";
const instructorMobileImage =
  "https://pub-d51033f4b865409099cb79bce79a2581.r2.dev/figmalab/foto_prazer_sou_emi_mobile.webp";

export default function BlackFridayInstructor() {
  return (
    <section className="bg-[#201F1F] px-5 pt-12 pb-4 text-white lg:pt-[47px] lg:pb-[109px]">
      <div className="mx-auto grid max-w-[1060px] items-start gap-10 lg:grid-cols-[508px_497px] lg:gap-[55px]">
        <Image
          src={instructorMobileImage}
          alt="Emi, fundadora do Studio Emi Design e criadora do FigmaLab"
          width={397}
          height={542}
          sizes="calc(100vw - 2.5rem)"
          className="order-2 h-auto w-full max-w-[397px] justify-self-center object-contain lg:hidden"
        />
        <Image
          src={instructorImage}
          alt="Emi, fundadora do Studio Emi Design e criadora do FigmaLab"
          width={508}
          height={731}
          sizes="(min-width: 1024px) 508px, 1px"
          className="hidden h-auto w-full max-w-[508px] justify-self-center object-contain lg:order-1 lg:block"
        />

        <div className="order-1 min-w-0 text-center lg:order-2 lg:text-left">
          <h2 className="leading-[0.85]">
            <span className="block font-windy text-[clamp(5.2rem,22vw,11.335rem)] font-normal tracking-[-0.02em] text-[#DF3DA8]">
              Prazer,
            </span>
            <span className="-mt-[0.17em] block whitespace-nowrap font-editorial text-[clamp(3.35rem,14vw,7.795rem)] font-light tracking-[-0.07em]">
              eu sou a Emi!
            </span>
          </h2>

          <div className="mt-8 space-y-6 font-articulat text-base leading-[1.2] tracking-[-0.02em] lg:space-y-8 lg:text-[1.608rem] lg:leading-[1.15]">
            <p>
              Sou designer há 5 anos, fundadora do Studio Emi Design e criadora do FigmaLab. Ao
              longo da minha trajetória, desenvolvi meu próprio processo criativo trabalhando com
              projetos reais para marcas de diferentes nichos.
            </p>

            <p>
              <strong className="font-bold">
                Foi a partir dessa experiência que criei o FigmaLab:
              </strong>{" "}
              para compartilhar não só como utilizar o Figma, mas também como pensar, pesquisar e
              tomar decisões para construir designs com mais intenção.
            </p>

            <p>
              Hoje, já{" "}
              <strong className="font-bold text-[#DF3DA8]">
                são mais de 350 designers na comunidade
              </strong>{" "}
              que estão desenvolvendo suas habilidades e explorando novas possibilidades criativas
              comigo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
