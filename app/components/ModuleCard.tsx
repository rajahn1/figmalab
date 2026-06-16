export interface Props {
  module: number;
  title: string;
  classes: string[];
}
import Image from "next/image";
export default function ModuleCard(props: Props) {
  const { classes, module, title } = props;
  const classText = module == 1 ? "xl:text-4xl lg:text-3xl" : "xl:text-5xl lg:text-4xl";
  return (
    <div className="flex md:flex-row gap-1 flex-col justify-center md:justify-between md:items-center md:gap-16 bg-[#424242] rounded-2xl py-4 md:py-8 md:px-32 px-4 font-articulat md:h-85 xl:rounded-3xl xl:w-[1000px] 2xl:w-[1010.98px] w-[210px]">
      <div className="flex flex-col gap-4 md:gap-6 text-white">
        <div className="flex gap-1 text-center items-center">
          {" "}
          <span className="bg-bg-pink rounded-full px-4 md:text-base text-xs md:px-8 py-1 whitespace-nowrap">
            {" "}
            MÓDULO {module}
          </span>
          <Image
            src="icons/icon-estrela-pink.svg"
            width={32}
            height={32}
            alt="icone estrela com fundo rosa"
            className="md:w-8 w-6"
          />
        </div>
        <h2
          className={`whitespace-pre-line text-lg leading-4 md:leading-8 md:text:2xl ${classText} font-semibold`}
        >
          {title}
        </h2>
      </div>
      <div className="flex flex-col gap-1 justify-center text-xs 2xl:text-base xl:text-sm leading-4 xl:leading-6">
        {classes.map((item: string, idx: number) => (
          <span key={idx} className="text-bg-white">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
