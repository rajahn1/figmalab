import Button from "../Button";
import Carousel from "../Carousel";
import ModuleSelector from "../ModuleSelector";

const images = [
  "/images/modulo-1.webp",
  "/images/modulo-2.webp",
  "/images/modulo-3.webp",
  "/images/modulo-4.webp",
  "/images/modulo-5.webp",
  "/images/modulo-6.webp",
  "/images/modulo-7.webp",
];

export default function CourseModules() {
  return (
    <section className="deferred-section bg-[#212121] px-8 py-8 md:py-20 2xl:py-32">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4">
        <h2 className="text-center font-articulat text-4xl leading-8 font-bold tracking-[-5%] text-white md:leading-14 lg:text-6xl lg:leading-12 xl:text-5xl xl:leading-11 2xl:text-6xl">
          Veja <span className="font-bold italic text-[#D82099]">tudo</span> que <br /> você vai
          <span className="font-editorial font-light italic"> aprender</span>
        </h2>
        <Carousel images={images} />
        <ModuleSelector />
        <div className="mt-6">
          <Button label="Eu quero fazer parte" size="xl" content_name="CTA Módulos" />
        </div>
      </div>
    </section>
  );
}
