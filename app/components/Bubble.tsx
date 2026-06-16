import Image from "next/image";
export interface Props {
  type: "positive" | "negative";
  label: string;
}
export default function Bubble({ type, label }: Props) {
  const variants = {
    positive: {
      icon: "/icons/icon-check.svg",
      className: "bg-[#D82099] text-white",
    },
    negative: {
      icon: "/icons/icon-x.svg",
      className: "bg-[#353535] text-white",
    },
  };

  const variant = variants[type];
  return (
    <div
      className={`rounded-full text-sm lg:text-lg xl:text-xl ${variant.className} px-2 py-2 w-80 md:w-120 md:px-4 md:pr-14 md:py-5 flex items-center gap-2 md:gap-4`}
    >
      <Image className="lg:w-5" src={variant.icon} alt="Icon" width={16} height={16} />
      <span>{label}</span>
    </div>
  );
}
