import Image from "next/image";

export default function Header() {
  return (
    <header
      id="header"
      className="bg-bg-black py-4 flex justify-between xl:px-24 2xl:px-60 px-10 items-center"
    >
      <div className="relative aspect-[133/25] w-16 xl:w-32 ">
        <Image
          className="h-auto w-full"
          src="/images/logo-figmalab.png"
          alt="logo figma lab"
          width={133}
          height={25}
          priority
        />
      </div>
      <div className="relative aspect-[127.34] w-20 xl:w-32">
        <Image
          className="w-full h-auto"
          src="/images/logotipo-2.svg"
          alt="header icon"
          height={30}
          width={127.34}
        />
      </div>
    </header>
  );
}
