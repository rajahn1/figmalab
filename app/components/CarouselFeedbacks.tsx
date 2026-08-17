"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export interface CarouselImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface Props {
  images: readonly CarouselImage[];
}

export default function CarouselFeedbacks(props: Props) {
  const { images } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 2,
      breakpoints: {
        "(min-width: 769px)": { slidesToScroll: 3 },
      },
    },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  const prev = () => emblaApi && emblaApi.scrollPrev();
  const next = () => emblaApi && emblaApi.scrollNext();

  // Função para navegar até um índice específico (clicar na bolinha)
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  // Função que atualiza o estado da bolinha ativa
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    // Inicializa as "snaps" (as páginas de fato)
    setScrollSnaps(emblaApi.scrollSnapList());

    // Escuta o evento de seleção do Embla
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    // Cleanup
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full 2xl:max-w-6xl xl:max-w-5xl lg:max-w-4xl max-w-[320px] md:mx-auto px-2 py-2">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((image) => (
            <div
              key={image.src}
              className="flex-[0_0_50%] xl:flex-[0_0_33.33%] min-w-0 px-2 flex items-center justify-center"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(min-width: 1280px) 33vw, 50vw"
                className="h-auto w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Botões de Navegação */}
      <button
        type="button"
        aria-label="Ver feedbacks anteriores"
        onClick={prev}
        className="absolute -left-5 md:-left-15 top-1/2 -translate-y-1/2 text-white p-3 transition hover:cursor-pointer"
      >
        <Image
          src="/icons/arrow-left-feedback.svg"
          width={40}
          height={40}
          className="w-3 md:w-10"
          alt=""
        />
      </button>
      <button
        type="button"
        aria-label="Ver próximos feedbacks"
        onClick={next}
        className="absolute -right-5 md:-right-15 top-1/2 -translate-y-1/2 text-white p-3 transition hover:cursor-pointer"
      >
        <Image
          src="/icons/arrow-right-feedback.svg"
          width={40}
          height={40}
          className="w-3 md:w-10"
          alt=""
        />
      </button>

      {/* --- PAGINAÇÃO (BOLINHAS) --- */}
      <div className="flex justify-center lg:gap-2 gap-1 mt-4 lg:mt-8">
        {scrollSnaps.map((_, index) => (
          <button
            type="button"
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-1 w-1 lg:h-2 lg:w-2 rounded-full transition-colors duration-300 ${
              index === selectedIndex ? "bg-[#B40679]" : "bg-[#D5D0D4]"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
