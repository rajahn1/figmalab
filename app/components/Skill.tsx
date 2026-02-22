import Image from "next/image";
export interface Props {
  label: string;
  icon: string;
}

export default function Skill({ label, icon }: Props) {
  return (
    <div className="flex items-center gap-4">
      <Image src={icon} height={24} width={24} alt="icon check pink" />
      <span className="font-articulat xl:text-lg 2xl:text-2xl whitespace-pre-line leading-6">
        {label}
      </span>
    </div>
  );
}
