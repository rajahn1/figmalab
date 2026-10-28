import Button from "../Button";
import Carousel from "../Carousel";
import ModuleSelector from "../ModuleSelector";
import type { LandingPageContent } from "@/lib/landing/types";

interface CourseModulesProps {
  data: LandingPageContent["modules"];
  settings: LandingPageContent["settings"];
}

export default function CourseModules({ data, settings }: CourseModulesProps) {
  return (
    <section
      id="modulos"
      className="deferred-section bg-[#212121] px-8 py-8 md:py-20 2xl:py-32"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4">
        <h2 className="text-center font-articulat text-4xl leading-8 font-bold tracking-[-5%] text-white md:leading-14 lg:text-6xl lg:leading-12 xl:text-5xl xl:leading-11 2xl:text-6xl">
          <span className="block whitespace-nowrap">
            Nossa{" "}
            <span className="font-windy inline-block text-[1.34em] leading-[0.81] font-normal text-[#DF3DA8]">
              trilha
            </span>
          </span>
          <span className="block">de aprendizado</span>
        </h2>
        <Carousel images={data.items.map((module) => module.image)} />
        <ModuleSelector modules={data.items} />
        <div className="mt-6">
          <Button
            label={settings.defaultCtaLabel}
            href={settings.checkoutUrl}
            courseName={settings.courseName}
            trackingValue={settings.cashPrice}
            size="xl"
            content_name="CTA Módulos"
          />
        </div>
      </div>
    </section>
  );
}
