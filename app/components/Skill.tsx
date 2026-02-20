import Image from "next/image";
export interface Props {
  label: string;
  icon: string;
}

export default function Skill({ label, icon }: Props) {
  return (
    <div className="flex items-center gap-2">
      <Image src={icon} height={38} width={38} alt="icon check pink" />
      <span className="text-lg">{label}</span>
    </div>
  );
}
