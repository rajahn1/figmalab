"use client";

import { useCallback, useEffect, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

import type { LandingImage } from "@/lib/landing/types";

export default function StudioFavoritesCarousel({ images }: { images: LandingImage[] }) {
  const autoplay = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      slidesToScroll: 1,
    },
    [autoplay.current]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const canAutoplay = emblaApi.scrollSnapList().length > 1;
    const updateAutoplay = () => {
      if (reducedMotion.matches) autoplay.current.stop();
      else if (canAutoplay) autoplay.current.play();
    };

    updateAutoplay();
    reducedMotion.addEventListener("change", updateAutoplay);

    return () => reducedMotion.removeEventListener("change", updateAutoplay);
  }, [emblaApi]);

  const scrollPrevious = useCallback(() => {
    emblaApi?.scrollPrev();
    autoplay.current.reset();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
    autoplay.current.reset();
  }, [emblaApi]);

  if (images.length === 0) return null;

  return (
    <div
      role="region"
      aria-label="Carrossel de xodós do Studio Emi"
      className="relative mx-auto w-full max-w-5xl px-10 sm:px-12"
    >
      <div ref={emblaRef} className="overflow-hidden">
        <div className="-ml-4 flex touch-pan-y">
          {images.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} de ${images.length}`}
              className="min-w-0 flex-[0_0_100%] pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 ? (
        <>
          <button
            type="button"
            aria-label="Ver xodós anteriores"
            onClick={scrollPrevious}
            className="absolute left-0 top-1/2 grid size-8 -translate-y-1/2 place-items-center transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:size-11"
          >
            <Image
              src="/icons/arrow-left-xodos.svg"
              alt=""
              width={29}
              height={29}
              className="size-[18px] sm:size-[29px]"
            />
          </button>
          <button
            type="button"
            aria-label="Ver próximos xodós"
            onClick={scrollNext}
            className="absolute right-0 top-1/2 grid size-8 -translate-y-1/2 place-items-center transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:size-11"
          >
            <Image
              src="/icons/arrow-right-xodos.svg"
              alt=""
              width={29}
              height={29}
              className="size-[18px] sm:size-[29px]"
            />
          </button>
        </>
      ) : null}
    </div>
  );
}
