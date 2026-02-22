"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".slide", {
        xPercent: direction === "forward" ? -100 : 100,
        duration: 10, // ajuste a velocidade
        ease: "linear",
        repeat: -1,
        modifiers: {
          // wrap sempre entre -100 e 0 para garantir continuidade
          xPercent: gsap.utils.wrap(-100, 0),
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [direction]);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden flex">
      <Image
        src={pathImage}
        alt="carrossel 1"
        width={width}
        height={height}
        className="slide flex-shrink-0 w-full h-[352px] object-cover"
      />
      <Image
        src={pathImage}
        alt="carrossel 2"
        width={width}
        height={height}
        className="slide flex-shrink-0 w-full h-[352px] object-cover"
      />
    </div>
  );
}
