import Image from "next/image";

const instructorImage =
  "https://pub-d51033f4b865409099cb79bce79a2581.r2.dev/figmalab/foto_prazer_sou_emi.webp";

export default function BlackFridayInstructor() {
  return (
    <section className="bg-[#201F1F] px-5 pt-12 pb-16 text-white lg:pt-[47px] lg:pb-[109px]">
      <div className="mx-auto grid max-w-[1060px] items-start gap-10 lg:grid-cols-[508px_497px] lg:gap-[55px]">
        <Image
          src={instructorImage}
          alt="Emi, fundadora do Studio Emi Design e criadora do FigmaLab"
          width={508}
          height={731}
          sizes="(max-width: 1023px) 94vw, 508px"
          className="h-auto w-full max-w-[508px] justify-self-center object-contain"
        />

        <div className="min-w-0">
          <h2 className="whitespace-nowrap leading-[0.85]">
            <span className="block font-windy text-[clamp(6.5rem,25vw,11.335rem)] font-normal tracking-[-0.02em] text-[#DF3DA8]">
              Prazer,
            </span>
            <span className="-mt-[0.17em] block font-editorial text-[clamp(4.25rem,16vw,7.795rem)] font-light tracking-[-0.07em]">
              eu sou a Emi!
            </span>
          </h2>

          <div className="mt-8 space-y-8 font-articulat text-[clamp(1.125rem,3.2vw,1.608rem)] leading-[1.15] tracking-[-0.02em]">
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
