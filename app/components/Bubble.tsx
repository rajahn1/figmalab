import Image from "next/image";
export interface Props {
  type: "positive" | "negative";
  label: string;
}
export default function Bubble({ type, label }: Props) {
  const variants = {
    positive: {
      icon: "/icons/icon-check.svg",
      className: "bg-bg-pink text-white",
    },
    negative: {
      icon: "/icons/icon-x.svg",
      className: "bg-bg-black text-white",
    },
  };

  const variant = variants[type];
  return (
    <div
      className={`rounded-full lg:text-lg xl:text-xl ${variant.className} px-4 pr-14 py-5 flex items-center gap-4`}
    >
      <Image className="lg:w-5" src={variant.icon} alt="Icon" width={16} height={16} />
      <span>{label}</span>
    </div>
  );
}
