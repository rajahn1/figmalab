import Image from "next/image";
export interface Props {
  label: string;
  icon: string;
}

export default function Skill({ label, icon }: Props) {
  return (
    <div className="flex items-center gap-4">
      <Image src={icon} height={28} width={28} alt="icon check pink" />
      <span className="font-articulat lg:text-lg xl:text-2xl whitespace-pre-line leading-6">
        {label}
      </span>
    </div>
  );
}
