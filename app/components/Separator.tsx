"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Separator() {
  const words = ["DESIGN", "CRIATIVIDADE", "ESTRÁTEGIA", "COMUNIDADE", "PROCESSOS", "ORGANIZAÇÃO"];
  const marqueeRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50, // Move o container em 50% do seu próprio tamanho
        repeat: -1, // Faz o loop infinito
        duration: 20, // Tempo que leva para cruzar a tela (ajuste a velocidade aqui)
        ease: "linear", // Garante que o movimento seja constante, sem acelerar/desacelerar
      });
    });

    return () => ctx.revert(); // Limpa a animação se o componente for desmontado
  }, []);

  return (
    // overflow-hidden garante que a barra não crie rolagem horizontal na página
    <div className="bg-[#8950FF] py-4 xl:text-xl overflow-hidden flex w-full">
      {/* Container principal da animação (que possui w-max para não quebrar linha) */}
      <div ref={marqueeRef} className="flex w-max items-center gap-18">
        {/* GRUPO 1: Lista original */}
        <div className="flex items-center w-max gap-18">
          {words.map((word, index) => (
            <div className="flex items-center gap-18" key={`grupo1-${index}`}>
              <span className="text-bg-white whitespace-nowrap px-9">{word}</span>
              <Image src="icons/icon-estrela-white.svg" alt="icon estrela" width={24} height={24} />
            </div>
          ))}
        </div>

        {/* GRUPO 2: Cópia idêntica para o loop perfeito */}
        <div className="flex items-center w-max gap-18">
          {words.map((word, index) => (
            <div className="flex items-center gap-18" key={`grupo2-${index}`}>
              <span className="text-bg-white whitespace-nowrap px-9">{word}</span>
              <Image src="icons/icon-estrela-white.svg" alt="icon estrela" width={24} height={24} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
