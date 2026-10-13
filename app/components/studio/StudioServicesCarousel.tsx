"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";

import type { StudioService } from "@/lib/studio/types";

const isInternal = (url: string) => url.startsWith("/") || url.startsWith("#");

const serviceOrder = ["design de posts", "alinhamento visual", "docs editaveis"];

function getServiceOrder(service: StudioService) {
  const description = service.image.alt
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  const index = serviceOrder.findIndex((label) => description.includes(label));
  return index === -1 ? serviceOrder.length : index;
}

function ServiceLink({ service }: { service: StudioService }) {
  const className =
    "studio-cta mt-3 self-center bg-[#8B7BAA] text-white transition-colors hover:bg-[#806aa0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#181818]";

  if (isInternal(service.url)) {
    return (
      <Link href={service.url} className={className}>
        {service.ctaLabel}
      </Link>
    );
  }

  return (
    <a href={service.url} className={className} target="_blank" rel="noreferrer">
      {service.ctaLabel}
    </a>
  );
}

export default function StudioServicesCarousel({ services }: { services: StudioService[] }) {
  const orderedServices = [...services].sort(
    (firstService, secondService) =>
      getServiceOrder(firstService) - getServiceOrder(secondService)
  );
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { active: false },
    },
  });

  const scrollPrevious = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  if (orderedServices.length === 0) return null;

  return (
    <div
      role="region"
      aria-label="Carrossel de serviços do Studio Emi"
      className="relative mx-auto mt-8 w-full max-w-5xl px-10 sm:px-12 md:mt-14 md:px-0"
    >
      <div ref={emblaRef} className="overflow-hidden md:overflow-visible">
        <div className="-ml-4 flex touch-pan-y md:ml-0 md:grid md:grid-cols-3 md:gap-4">
          {orderedServices.map((service, index) => (
            <article
              key={`${service.image.src}-${service.url}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} de ${orderedServices.length}`}
              className="flex min-w-0 flex-[0_0_100%] flex-col pl-4 md:p-0"
            >
              <Image
                src={service.image.src}
                alt={service.image.alt}
                width={service.image.width}
                height={service.image.height}
                sizes="(max-width: 767px) 100vw, 33vw"
                className="h-auto w-full"
              />
              <ServiceLink service={service} />
            </article>
          ))}
        </div>
      </div>

      {orderedServices.length > 1 ? (
        <>
          <button
            type="button"
            aria-label="Ver serviço anterior"
            onClick={scrollPrevious}
            className="absolute left-0 top-1/2 grid size-8 -translate-y-1/2 place-items-center transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#201F1F] sm:size-11 md:hidden"
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
            aria-label="Ver próximo serviço"
            onClick={scrollNext}
            className="absolute right-0 top-1/2 grid size-8 -translate-y-1/2 place-items-center transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#201F1F] sm:size-11 md:hidden"
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
