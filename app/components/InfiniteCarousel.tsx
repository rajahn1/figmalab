import Image from "next/image";
import type { LandingImage } from "@/lib/landing/types";

export interface Props {
  image: LandingImage;
  direction: "forward" | "backward";
}

export default function InfiniteCarousel({ image, direction = "forward" }: Props) {
  const animationClass = direction === "forward" ? "marquee-forward" : "marquee-backward";

  return (
    <div className="relative flex w-full overflow-hidden">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes="100vw"
        className={`${animationClass} h-auto w-full flex-shrink-0`}
      />
      <Image
        src={image.src}
        alt=""
        aria-hidden="true"
        width={image.width}
        height={image.height}
        sizes="100vw"
        className={`${animationClass} h-auto w-full flex-shrink-0`}
      />
    </div>
  );
}
