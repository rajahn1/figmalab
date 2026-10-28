import Image from "next/image";

const cafeTabletUrl =
  "https://pub-d51033f4b865409099cb79bce79a2581.r2.dev/figmalab/cafe_tablet.webp";

const audienceItems = [
  {
    before: "Para quem está iniciando e quer ",
    emphasis: "dominar o Figma do zero ao avançado.",
    after: "",
    heightClass: "lg:h-[79px]",
  },
  {
    before: "Para quem quer ",
    emphasis: "migrar do Canva para o Figma",
    after: " e ter mais possibilidades na criação dos seus projetos.",
    heightClass: "lg:h-[106px]",
  },
  {
    before: "Para ",
    emphasis: "designers experientes que querem deixar o Photoshop",
    after: " e experimentar um fluxo de trabalho mais ágil no Figma.",
    heightClass: "lg:h-[111px]",
  },
  {
    before: "Para quem ",
    emphasis: "trava na hora de criar",
    after: " e precisa estruturar um processo criativo para saber por onde começar.",
    heightClass: "lg:h-[106px]",
  },
  {
    before: "Para quem ",
    emphasis: "depende demais do Pinterest",
    after: " e quer aprender a analisar referências e transformá-las em designs autorais.",
    heightClass: "lg:h-[108px]",
  },
  {
    before: "Para quem ",
    emphasis: "sente que seus designs estão sempre iguais",
    after: " e quer ampliar o repertório.",
    heightClass: "lg:h-[92px]",
  },
];

const benefitItems = [
  {
    emphasis: "Curso completo de Figma:",
    text: " do zero aos recursos e técnicas mais avançadas.",
  },
  {
    emphasis: "Processo criativo:",
    text: " aprenda a analisar briefings, explorar referências e tomar decisões visuais.",
  },
  {
    emphasis: "Aulas práticas:",
    text: " acompanhe a criação de carrosséis do zero e aplique o que aprendeu.",
  },
  {
    emphasis: "Técnicas criativas:",
    text: " explore filtros, máscaras, mockups e outros recursos para seus projetos.",
  },
  {
    emphasis: "Bônus Aulão de Alinhamento Visual:",
    text: " conheça as etapas desse serviço e como estruturá-lo no seu estúdio.",
  },
  {
    emphasis: "Materiais de apoio:",
    text: " modelo de briefing e PDF com curadoria de sites para referências e recursos visuais.",
  },
  {
    emphasis: "Comunidade no WhatsApp:",
    text: " conecte-se com outras designers e troque experiências.",
  },
  {
    emphasis: "Certificado de conclusão e 1 ano de acesso",
    text: " ao curso.",
  },
];

export default function BlackFridayOverview() {
  return (
    <section className="bg-[#201F1F] font-articulat text-white">
      <div
        id="para-quem-e"
        className="mx-auto grid max-w-[1264px] items-start gap-10 px-5 pt-14 pb-24 lg:grid-cols-[633px_518px] lg:gap-[11px] lg:px-0 lg:pt-[54px] lg:pb-[111px]"
      >
        <Image
          src={cafeTabletUrl}
          alt="Dois tablets exibindo o conteúdo do FigmaLab ao lado de uma xícara de café"
          width={950}
          height={1197}
          quality={100}
          sizes="(max-width: 1023px) 92vw, 633px"
          className="h-auto w-full max-w-[633px] justify-self-center lg:h-full lg:w-auto lg:max-w-none lg:justify-self-end lg:self-stretch"
        />

        <div className="w-full max-w-[518px] justify-self-center lg:justify-self-start">
          <h2>
            <Image
              src="/icons/para-quem-figmalab.svg"
              alt="Para quem é o FigmaLab?"
              width={481}
              height={219}
              className="h-auto w-full max-w-[481px]"
            />
          </h2>

          <ul className="mt-6 lg:mt-[34px]">
            {audienceItems.map((item, index) => (
              <li
                key={item.emphasis}
                className={`grid grid-cols-[45px_1fr] items-center gap-3 py-[14px] text-[clamp(1.125rem,2vw,1.623rem)] leading-[0.96] tracking-[-0.04em] lg:py-0 ${item.heightClass} ${index < audienceItems.length - 1 ? "border-b border-[#515151]" : ""}`}
              >
                <Image
                  src="/icons/icon-pen.svg"
                  alt=""
                  width={45}
                  height={45}
                  aria-hidden="true"
                  className="shrink-0"
                />
                <p>
                  {item.before}
                  <strong className="font-bold">{item.emphasis}</strong>
                  {item.after}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div id="o-que-voce-recebe" className="px-5 pb-[70px]">
        <h2 className="mx-auto max-w-[948px] text-center text-[clamp(3rem,7vw,5.9375rem)] leading-[0.81] font-bold tracking-[-0.08em]">
          <span className="text-[#DF3DA8]">Muito mais</span> do que aulas
          <br className="hidden sm:block" /> sobre uma ferramenta.
        </h2>

        <div className="mx-auto mt-[51px] grid max-w-[1061px] grid-cols-1 gap-[14px_19px] sm:grid-cols-2 lg:grid-cols-4">
          {benefitItems.map((item, index) => (
            <article
              key={item.emphasis}
              className="relative mx-auto aspect-square w-full max-w-[251px] rounded-[25px] bg-[#D82099] text-center text-[clamp(1.25rem,2vw,1.743rem)] leading-[0.95] tracking-[-0.04em] lg:h-[250px] lg:aspect-auto"
            >
              <div
                className="absolute top-4 left-[21px] flex items-center gap-[3px]"
                aria-hidden="true"
              >
                <span className="size-[5.5px] rounded-full bg-white" />
                <span className="size-[5.5px] rounded-full bg-white" />
                <span className="size-[5.5px] rounded-full bg-white" />
              </div>
              <Image
                src="/icons/icon-square-star.svg"
                alt=""
                width={26}
                height={26}
                aria-hidden="true"
                className="absolute top-4 right-[21px]"
              />
              <p
                className={`absolute right-[15px] left-[15px] ${index < 4 ? "top-[56px]" : "top-[51px]"}`}
              >
                <strong className="font-bold">{item.emphasis}</strong>
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
