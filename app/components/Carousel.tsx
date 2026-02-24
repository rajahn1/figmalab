"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const images = [
  "/images/modulo-1.webp",
  "/images/modulo-2.webp",
  "/images/modulo-3.webp",
  "/images/modulo-4.webp",
  "/images/modulo-5.webp",
  "/images/modulo-6.webp",
];

export default function Carousel() {
  // Configura o Embla com loop infinito e autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 2000 }),
  ]);

  const prev = () => emblaApi && emblaApi.scrollPrev();
  const next = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="relative w-full 2xl:max-w-6xl xl:max-w-5xl md:mx-auto p-4">
      {/* Container do Embla */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            // flex-[0_0_25%] garante que mostre exatamente 4 por vez (100% / 4)
            <div
              key={index}
              className="
                flex-[0_0_50%]     /* mobile: 1.25 imagens visíveis */
                sm:flex-[0_0_50%]  /* celular grande */
                md:flex-[0_0_50%] /* tablet: 3 */
                lg:flex-[0_0_25%]  /* desktop: 4 */
                min-w-0
                px-2
              "
            >
              <Image
                src={src}
                alt={`Card ${index + 1}`}
                width={1086}
                height={1628}
                className=" w-full
                h-auto
                object-contain
                md:object-cover
                rounded-xl
                shadow-md"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute -left-4 md:-left-15 top-1/2 -translate-y-1/2 text-white p-3 rounded-r-lg transition hover:cursor-pointer hover:opacity-90 hover:scale-105"
      >
        <img src="/icons/icon-arrow-left.svg" className="md:w-10 w-4" alt="Anterior" />
      </button>
      <button
        onClick={next}
        className="absolute -right-4 md:-right-15 top-1/2 -translate-y-1/2 text-white p-3 rounded-l-lg transition hover:cursor-pointer hover:opacity-90 hover:scale-105"
      >
        <img src="/icons/icon-arrow-right.svg" className="md:w-10 w-4" alt="Próximo" />
      </button>
    </div>
  );
}
