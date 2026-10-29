import Image from "next/image";

export default function BlackFridayReleaseSchedule() {
  return (
    <section className="bg-[#8B7BAA] px-6 py-12 font-articulat text-white lg:h-[625px] lg:px-0 lg:py-0">
      <h2 className="mx-auto max-w-[340px] text-center text-[2.45rem] leading-[0.86] font-bold tracking-[-0.07em] sm:text-[3rem] lg:max-w-[942px] lg:pt-[61px] lg:text-[5.9375rem] lg:leading-[0.81] lg:tracking-[-0.08em]">
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

        <div className="mt-6 grid auto-rows-fr grid-cols-2 items-stretch gap-6 lg:gap-0">
          <article className="grid h-full max-w-[360px] grid-rows-[auto_1fr] text-left lg:grid-rows-none">
            <h3 className="text-base leading-[0.92] font-bold tracking-[-0.05em] lg:text-[2.5229rem]">
              <span className="block whitespace-nowrap lg:inline lg:whitespace-normal">
                2 módulos liberados
              </span>{" "}
              <span className="block lg:inline">de imediato!</span>
            </h3>
            <p className="mt-0.5 text-[0.7rem] leading-[1.05] tracking-[-0.03em] lg:hidden">
              <span className="block whitespace-nowrap">Compra confirmada: você</span>
              <span className="block whitespace-nowrap">recebe os 2 primeiros</span>
              <span className="block whitespace-nowrap">módulos e já começa seu</span>
              <span className="block whitespace-nowrap">processo criativo.</span>
            </p>
            <p className="mt-[7px] hidden text-[1.3872rem] leading-[0.98] tracking-[-0.03em] lg:block">
              Assim que sua compra for confirmada, você terá{" "}
              <strong className="font-bold">acesso aos 2 primeiros módulos do curso</strong> para já
              começar a estruturar seu processo criativo.
            </p>
          </article>

          <article className="ml-auto grid h-full max-w-[291px] grid-rows-[auto_1fr] text-right lg:grid-rows-none">
            <h3 className="text-[1.1rem] leading-[0.92] font-bold tracking-[-0.05em] lg:text-[2.5229rem]">
              Curso completo liberado!
            </h3>
            <p className="mt-0.5 text-[0.7rem] leading-[1.05] tracking-[-0.03em] lg:hidden">
              <span className="block whitespace-nowrap">Após 7 dias, as aulas</span>
              <span className="block whitespace-nowrap">restantes são liberadas</span>
              <span className="block whitespace-nowrap">automaticamente para</span>
              <span className="block whitespace-nowrap">concluir sua jornada.</span>
            </p>
            <p className="mt-[7px] hidden text-[1.3872rem] leading-[0.98] tracking-[-0.03em] lg:block">
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
