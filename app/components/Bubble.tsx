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
    <div className={`rounded-full ${variant.className} p-3 flex items-center gap-4`}>
      <Image src={variant.icon} alt="Icon" width={32} height={32} />
      <span>{label}</span>
    </div>
  );
}
