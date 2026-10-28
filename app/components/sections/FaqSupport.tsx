import Image from "next/image";
import type { LandingPageContent } from "@/lib/landing/types";
import BlackFridayTicker from "../BlackFridayTicker";

interface FaqSupportProps {
  faq: LandingPageContent["faq"];
}

export default function FaqSupport({ faq }: FaqSupportProps) {
  return (
    <section className="deferred-section relative overflow-hidden bg-[#201F1F] pt-8 text-white md:pt-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 md:gap-12">
        <h2 className="whitespace-nowrap font-articulat text-[clamp(1.75rem,7vw,5.9375rem)] font-bold">
          Perguntas <span className="font-articulat text-[#DF3DA8]">frequentes</span>
        </h2>
        <div className="flex w-[88%] flex-col gap-4 md:w-full">
          {faq.items.map((item) => (
            <details
              key={item.question}
              name="figmalab-faq"
              className="group overflow-hidden rounded-lg bg-[#403F3F] text-sm font-articulat transition-colors open:bg-transparent lg:text-lg xl:text-xl"
            >
              <summary className="flex w-full cursor-pointer list-none items-center justify-between px-4 py-3 text-left transition-colors hover:bg-white/5 group-open:bg-[#D82099] group-open:hover:bg-[#D82099] md:px-8 md:py-4 [&::-webkit-details-marker]:hidden">
                {item.question}
                <Image
                  className="w-4 group-open:hidden md:w-8"
                  src="/icons/icon-down-faq.svg"
                  alt=""
                  height={32}
                  width={32}
                />
                <Image
                  className="hidden w-4 group-open:block md:w-8"
                  src="/icons/icon-up-faq.svg"
                  alt=""
                  height={32}
                  width={32}
                />
              </summary>
              <div className="bg-transparent p-4 pt-4 leading-4 text-balance text-white xl:leading-6 md:p-8">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>

      <div className="mt-12 md:mt-20">
        <BlackFridayTicker />
      </div>
    </section>
  );
}
