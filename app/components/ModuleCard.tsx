export interface Props {
  module: number;
  title: string;
  classes: readonly string[];
}
import Image from "next/image";
export default function ModuleCard(props: Props) {
  const { classes, module, title } = props;
  const classText = module === 1 ? "xl:text-4xl lg:text-3xl" : "xl:text-5xl lg:text-4xl";
  return (
    <div className="flex h-full w-full max-w-[210px] flex-col justify-center gap-1 rounded-2xl bg-[#424242] px-4 py-4 font-articulat md:h-85 md:max-w-[720px] md:flex-row md:items-center md:justify-between md:gap-16 md:px-32 md:py-8 lg:max-w-[1000px] xl:max-w-[1000px] xl:rounded-3xl 2xl:max-w-[1010.98px]">
      <div className="flex flex-col gap-2 md:gap-6 text-white">
        <div className="flex gap-1 text-center items-center">
          {" "}
          <span className="bg-bg-pink rounded-full px-4 md:text-base text-xs md:px-8 py-1 whitespace-nowrap">
            {" "}
            MÓDULO {module}
          </span>
          <Image
            src="/icons/icon-estrela-pink.svg"
            width={32}
            height={32}
            alt="icone estrela com fundo rosa"
            className="md:w-8 w-6"
          />
        </div>
        <h2
          className={`whitespace-pre-line text-lg leading-4 xl:leading-10 md:leading-8 md:text:2xl ${classText} font-semibold`}
        >
          {title}
        </h2>
      </div>
      <div className="flex flex-col xl:gap-1 justify-center text-[10px] 2xl:text-base xl:text-sm leading-4 xl:leading-4">
        {classes.map((item: string, idx: number) => (
          <span key={idx} className="text-bg-white">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
