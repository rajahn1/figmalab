"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export interface btnProps {
  label: string;
}

export default function Button({ label }: btnProps) {
  const buttonRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(buttonRef.current, {
      scale: 1.1,
      opacity: 0.9,
      duration: 0.5,
      ease: "power2.out",
    });
  };
  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  useGSAP(() => {});
  return (
    <button
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className=" text-white relative z-10 w-max lg:text-base font-bold bg-bg-button rounded-full xl:py-4 xl:px-8 lg:px-6 lg:py-3 xl:text-xl cursor-pointer shadow-[0_0_25px_1.3px_rgba(103,55,204,1)]"
    >
      {label}
    </button>
  );
}
