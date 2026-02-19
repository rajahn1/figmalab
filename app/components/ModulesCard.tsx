export interface Props {
  module: number;
  title: string;
  classes: string[];
}
import Image from "next/image";
export default function ModuleCard(props: Props) {
  const { classes, module, title } = props;
  return (
    <div className="flex gap-16 bg-[#424242] rounded-2xl py-8 px-14 w-max">
      <div className="flex flex-col gap-2">
        <div className="flex gap-1 items-center">
          {" "}
          <span className="bg-bg-pink rounded-full px-4 py-1"> Módulo {module}</span>
          <Image
            src="icons/icon-estrela-pink.svg"
            width={32}
            height={32}
            alt="icone estrela com fundo rosa"
          />
        </div>
        <h2 className="text-3xl">{title}</h2>
      </div>
      <div className="flex flex-col">
        {classes.map((item: string, idx: number) => (
          <span key={idx} className="text-bg-white">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
