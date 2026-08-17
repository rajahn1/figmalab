import Image from "next/image";

export default function HeroMotion() {
  return (
    <div aria-hidden="true">
      <span className="hero-float absolute top-40 left-52 z-20 w-32 lg:w-72 xl:hidden">
        <Image src="/images/icon-figma-pink.webp" alt="" width={600} height={517} sizes="288px" />
      </span>
      <span className="hero-float absolute top-60 left-12 z-20 w-32 lg:w-50 xl:hidden">
        <Image src="/images/barra-horizontal-pink.png" alt="" width={250} height={35} />
      </span>
      <span className="hero-float absolute z-20 hidden lg:right-24 lg:bottom-10 lg:block lg:w-72 xl:right-31 xl:bottom-30 2xl:right-55 2xl:bottom-30">
        <Image src="/images/icon-figma-pink.webp" alt="" width={600} height={517} sizes="288px" />
      </span>
      <span className="hero-float absolute z-20 hidden lg:right-110 lg:bottom-35 lg:block lg:w-50 xl:right-120 xl:bottom-50 xl:w-52 2xl:right-160 2xl:bottom-50 2xl:w-72">
        <Image src="/images/barra-horizontal-pink.png" alt="" width={250} height={35} />
      </span>
    </div>
  );
}
