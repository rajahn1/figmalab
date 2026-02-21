"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const images = [
  "/images/modulo-1.png",
  "/images/modulo-2.png",
  "/images/modulo-3.png",
  "/images/modulo-4.png",
  "/images/modulo-5.png",
  "/images/modulo-6.png",
];

export default function Carousel() {
  // Configura o Embla com loop infinito e autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 2000 }),
  ]);

  const prev = () => emblaApi && emblaApi.scrollPrev();
  const next = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="relative w-full max-w-6xl mx-auto p-4">
      {/* Container do Embla */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            // flex-[0_0_25%] garante que mostre exatamente 4 por vez (100% / 4)
            <div key={index} className="flex-[0_0_25%] min-w-0 px-1">
              <img
                src={src}
                alt={`Card ${index + 1}`}
                className="w-full h-90 xl:h-110 object-cover rounded-xl shadow-md"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute -left-15 top-1/2 -translate-y-1/2 text-white p-3 rounded-r-lg transition hover:cursor-pointer hover:opacity-90"
      >
        <img src="/icons/icon-arrow-left.svg" className="w-10" alt="Anterior" />
      </button>
      <button
        onClick={next}
        className="absolute -right-15 top-1/2 -translate-y-1/2 text-white p-3 rounded-l-lg transition hover:cursor-pointer hover:opacity-90"
      >
        <img src="/icons/icon-arrow-right.svg" className="w-10" alt="Próximo" />
      </button>
    </div>
  );
}
