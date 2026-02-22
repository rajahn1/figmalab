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
        duration: 20, // ajuste a velocidade
        ease: "linear",
        repeat: -1,
        modifiers: {
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
        alt=""
        width={width}
        height={height}
        className="slide flex-shrink-0 w-full h-auto"
      />
      <Image
        src={pathImage}
        alt=""
        width={width}
        height={height}
        className="slide flex-shrink-0 w-full h-auto"
      />
    </div>
  );
}
