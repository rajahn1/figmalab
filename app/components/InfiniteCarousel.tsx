import Image from "next/image";

export interface Props {
  pathImage: string;
  width: number;
  height: number;
  direction: "forward" | "backward";
}

export default function InfiniteCarousel({
  pathImage,
  width,
  height,
  direction = "forward",
}: Props) {
  const animationClass = direction === "forward" ? "marquee-forward" : "marquee-backward";

  return (
    <div className="relative flex w-full overflow-hidden">
      <Image
        src={pathImage}
        alt=""
        width={width}
        height={height}
        sizes="100vw"
        className={`${animationClass} h-auto w-full flex-shrink-0`}
      />
      <Image
        src={pathImage}
        alt=""
        width={width}
        height={height}
        sizes="100vw"
        className={`${animationClass} h-auto w-full flex-shrink-0`}
      />
    </div>
  );
}
