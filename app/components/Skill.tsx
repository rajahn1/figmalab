import Image from "next/image";
export interface Props {
  label: string;
  icon: string;
}

export default function Skill({ label, icon }: Props) {
  return (
    <div className="flex items-center md:gap-4 gap-2">
      <Image className="md:w-6 w-4" src={icon} height={24} width={24} alt="icon check pink" />
      <span className="font-articulat text-sm xl:text-lg 2xl:text-2xl whitespace-pre-line md:leading-6 leading-4">
        {label}
      </span>
    </div>
  );
}
