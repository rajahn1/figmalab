import Image from "next/image";

interface BlackFridayDateBadgeProps {
  variant?: "hero" | "offer";
}

export default function BlackFridayDateBadge({ variant = "hero" }: BlackFridayDateBadgeProps) {
  const isOffer = variant === "offer";

  return (
    <div
      className={`inline-flex items-center justify-center rounded-full border-[#DF3DA8] leading-none tracking-[-0.05em] text-white lg:justify-start lg:leading-[0.92] ${
        isOffer
          ? "h-5 gap-1 border px-1.5 py-0 text-[0.625rem] lg:min-h-[58px] lg:w-[386px] lg:gap-[17px] lg:border-[1.6px] lg:px-[31px] lg:py-2 lg:text-[2.122rem]"
          : "h-5 gap-1 border px-1.5 py-0 text-[0.625rem] lg:min-h-[38px] lg:gap-[10px] lg:border-[1.6px] lg:px-[25px] lg:py-1 lg:text-[1.325rem]"
      }`}
    >
      <Image
        src="/icons/icone-calendario.svg"
        alt=""
        width={isOffer ? 28 : 20}
        height={isOffer ? 29 : 21}
        aria-hidden="true"
        className={
          isOffer
            ? "size-[10px] shrink-0 lg:h-[29px] lg:w-7"
            : "size-[10px] shrink-0 lg:h-[18px] lg:w-[17px]"
        }
      />
      <span className="inline-flex h-full items-center whitespace-nowrap">11 a 20 de novembro</span>
    </div>
  );
}
