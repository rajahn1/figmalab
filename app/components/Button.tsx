"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export interface btnProps {
  label: string;
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
  type?: "primary" | "secondary";
}

export default function Button({ label, size = "lg", type = "primary" }: btnProps) {
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
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-xl",
    xl: "px-10 py-5 text-2xl",
    xxl: "px-12 py-6 text-3xl",
  };

  const bgClasses = {
    primary: "bg-bg-button shadow-[0_0_25px_1.3px_rgba(103,55,204,1)]",
    secondary: "bg-gradient-to-b from-[#D82099] to-[#DF65B5]",
  };

  return (
    <button
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`text-white relative z-10 w-max font-bold ${bgClasses[type]} rounded-full cursor-pointer  ${sizeClasses[size]}`}
    >
      {label}
    </button>
  );
}
