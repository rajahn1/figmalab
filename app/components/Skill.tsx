import Image from "next/image";
export interface Props {
  label: string;
  icon: string;
  type: string;
  idx: number;
}

export default function Skill({ label, icon, type, idx }: Props) {
  const classBold = idx == 0 ? "font-bold" : "";
  return (
    <div className="flex items-center md:gap-4 gap-2">
      <Image className="md:w-6 w-7" src={icon} height={12.67} width={27.97} alt="icon check pink" />
      <span
        className={`font-articulat text-sm xl:text-lg 2xl:text-2xl whitespace-pre-line md:leading-6 leading-4 ${classBold}`}
      >
        {label}
      </span>
    </div>
  );
}
