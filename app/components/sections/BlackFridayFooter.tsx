import Image from "next/image";

import type { LandingPageContent } from "@/lib/landing/types";
import Button from "../Button";

interface BlackFridayFooterProps {
  settings: LandingPageContent["settings"];
}

export default function BlackFridayFooter({ settings }: BlackFridayFooterProps) {
  return (
    <footer className="bg-[#201F1F] px-5 pt-10 pb-4 font-articulat text-white lg:pt-[54px]">
      <div className="mx-auto max-w-[1060px]">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-6">
          <Image src="/icons/figmalab-icon.svg" alt="FigmaLab" width={188} height={54} />

          <div className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row sm:gap-[10px]">
            <p className="max-w-[201px] text-center text-[clamp(1.25rem,3vw,1.682rem)] leading-[0.91] font-bold tracking-[-0.02em] sm:text-left">
              Ainda ficou alguma dúvida?
            </p>
            <Button
              label="Fale com o comercial"
              href={settings.supportUrl}
              courseName={settings.courseName}
              type="blackFridaySupport"
              content_name="CTA Comercial Black Friday"
              size="blackFridaySupport"
            />
          </div>
        </div>

        <div className="mt-10 h-px w-full bg-[#585858] lg:mt-[49px]" aria-hidden="true" />

        <div className="mt-[7px] flex items-center justify-between gap-6">
          <p className="text-[clamp(0.75rem,2vw,0.969rem)] leading-[1.25] tracking-[-0.03em]">
            <strong className="font-extrabold">Studio Emi Design 2026</strong>{" "}
            <span>Todos os direitos reservados</span>
          </p>

          <a
            href="#section-hero"
            aria-label="Voltar para o início da página"
            className="shrink-0 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#DF3DA8]"
          >
            <Image
              src="/icons/icon-arrow-up-black.svg"
              alt=""
              width={23.449}
              height={23.449}
              aria-hidden="true"
              className="rotate-180"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
