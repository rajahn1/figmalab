import Image from "next/image";

export default function BlackFridayReleaseSchedule() {
  return (
    <section className="bg-[#8B7BAA] px-5 py-12 font-articulat text-white lg:h-[625px] lg:px-0 lg:py-0">
      <h2 className="mx-auto text-center text-[clamp(3rem,8vw,5.9375rem)] leading-[0.81] font-bold tracking-[-0.08em] lg:max-w-[942px] lg:pt-[61px]">
        <span className="block">Como funciona a</span>
        <span className="block text-[#201F1F]">liberação das aulas</span>
      </h2>

      <div className="mx-auto mt-10 max-w-[1063px] lg:mt-[69px]">
        <div className="flex items-center">
          <Image
            src="/icons/icone-pen-branco.svg"
            alt=""
            width={73}
            height={73}
            aria-hidden="true"
            className="size-12 shrink-0 lg:size-[72px]"
          />

          <span className="h-1 min-w-4 flex-1 bg-white" aria-hidden="true" />

          <span className="mx-3 shrink-0 text-center text-[clamp(1.5rem,3vw,2.4605rem)] leading-[0.92] tracking-[-0.05em] lg:mx-[29px] lg:w-[89px]">
            7 dias
          </span>

          <span
            className="min-w-4 flex-1 border-t-4 border-dotted border-[#6B5791]"
            aria-hidden="true"
          />

          <Image
            src="/icons/icone-cadeado.svg"
            alt=""
            width={73}
            height={73}
            aria-hidden="true"
            className="size-12 shrink-0 lg:size-[72px]"
          />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-6 lg:gap-0">
          <article className="max-w-[360px] text-left">
            <h3 className="text-[clamp(1.25rem,3vw,2.5229rem)] leading-[0.92] font-bold tracking-[-0.05em]">
              2 módulos liberados de imediato!
            </h3>
            <p className="mt-[7px] text-[clamp(0.875rem,1.8vw,1.3872rem)] leading-[0.98] tracking-[-0.03em]">
              Assim que sua compra for confirmada, você terá{" "}
              <strong className="font-bold">acesso aos 2 primeiros módulos do curso</strong> para
              já começar a estruturar seu processo criativo.
            </p>
          </article>

          <article className="ml-auto max-w-[291px] text-right">
            <h3 className="text-[clamp(1.25rem,3vw,2.5229rem)] leading-[0.92] font-bold tracking-[-0.05em]">
              Curso completo liberado!
            </h3>
            <p className="mt-[7px] text-[clamp(0.875rem,1.8vw,1.3872rem)] leading-[0.98] tracking-[-0.03em]">
              O restante das aulas são{" "}
              <strong className="font-bold">liberadas automaticamente após 7 dias</strong>, para
              você concluir sua jornada de aprendizado.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
