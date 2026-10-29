import Image from "next/image";

import Carousel from "../Carousel";
import ModuleSelector from "../ModuleSelector";
import type { LandingPageContent } from "@/lib/landing/types";

interface CourseModulesProps {
  data: LandingPageContent["modules"];
}

export default function CourseModules({ data }: CourseModulesProps) {
  return (
    <section
      id="modulos"
      className="deferred-section bg-[#212121] px-6 py-10 md:px-8 md:py-20 2xl:py-32"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4">
        <h2 className="w-full max-w-[300px] sm:max-w-[420px] lg:max-w-[587px]">
          <Image
            src="/icons/nossa-trilha-aprendizado.svg"
            alt="Nossa trilha de aprendizado"
            width={587}
            height={184}
            className="h-auto w-full"
          />
        </h2>
        <Carousel images={data.items.map((module) => module.image)} />
        <ModuleSelector modules={data.items} />
      </div>
    </section>
  );
}
