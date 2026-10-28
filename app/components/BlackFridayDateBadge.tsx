import Image from "next/image";

interface BlackFridayDateBadgeProps {
  variant?: "hero" | "offer";
}

export default function BlackFridayDateBadge({ variant = "hero" }: BlackFridayDateBadgeProps) {
  const isOffer = variant === "offer";

  return (
    <div
      className={`flex items-center rounded-full border-[#DF3DA8] leading-[0.92] tracking-[-0.05em] text-white ${
        isOffer
          ? "min-h-12 gap-3 border-[2.5px] px-5 py-2 text-[clamp(1.25rem,4.6vw,2.122rem)] lg:min-h-[58px] lg:w-[386px] lg:gap-[17px] lg:px-[31px]"
          : "min-h-[41px] gap-3 border-2 px-5 py-1.5 text-[clamp(1rem,4.5vw,1.506rem)] sm:px-[22px]"
      }`}
    >
      <Image
        src="/icons/icone-calendario.svg"
        alt=""
        width={isOffer ? 28 : 20}
        height={isOffer ? 29 : 21}
        aria-hidden="true"
        className={isOffer ? "h-[29px] w-7 shrink-0" : "h-[21px] w-5 shrink-0"}
      />
      <span className="whitespace-nowrap">11 a 20 de novembro</span>
    </div>
  );
}
