"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export interface btnProps {
  label: string;
  size?: "sm" | "md" | "lg" | "xl" | "xxl" | "terciary";
  type?: "primary" | "secondary" | "terciary";
}

export default function Button({ label, size = "lg", type = "primary" }: btnProps) {
  let link =
    type == "primary" || type == "terciary"
      ? "https://pay.kiwify.com.br/eADN6hR"
      : "https://wa.me/message/KS4FVL6M7D6KL1";

  const handleOnClickBtn = () => {
    window.open(link, "_blank");
  };
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

  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-6 py-3 text-base md:px-8 md:py-4 md:text-xl",
    lg: "px-8 py-4 text-xl",
    xl: "md:px-10 md:py-5 md:text-2xl text-lg py-2 px-10",
    xxl: "px-12 py-6 text-3xl",
    terciary: "md:px-16 md:py-5 md:text-4xl text-lg py-2 px-10",
  };

  const bgClasses = {
    primary: "bg-bg-button shadow-[0_0_25px_1.3px_rgba(103,55,204,1)]",
    secondary: "bg-gradient-to-b from-[#D82099] to-[#DF65B5]",
    terciary: "bg-[#D82099] shadow-[0_0_25px_1.3px_rgba(216,32,153,1)]",
  };

  return (
    <button
      onClick={handleOnClickBtn}
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`text-white relative z-10 w-max font-bold ${bgClasses[type]} rounded-full cursor-pointer  ${sizeClasses[size]}`}
    >
      {label}
    </button>
  );
}
