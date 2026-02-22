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
    <div className="flex justify-between items-center gap-16 bg-[#424242] rounded-2xl py-8 px-32 font-articulat h-85 xl:w-[895.146px] 2xl:w-[1010.98px]">
      <div className="flex flex-col gap-6 text-white">
        <div className="flex gap-1 text-center items-center">
          {" "}
          <span className="bg-bg-pink rounded-full px-8 py-1"> MÓDULO {module}</span>
          <Image
            src="icons/icon-estrela-pink.svg"
            width={32}
            height={32}
            alt="icone estrela com fundo rosa"
          />
        </div>
        <h2 className={`whitespace-pre-line text:2xl ${classText} font-semibold`}>{title}</h2>
      </div>
      <div className="flex flex-col gap-1 justify-center 2xl:text-base xl:text-sm">
        {classes.map((item: string, idx: number) => (
          <span key={idx} className="text-bg-white">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
