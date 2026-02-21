import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-bg-black py-4 flex justify-between lg:px-24 xl:px-60">
      <Image
        className="h-auto w-24"
        src="/images/logo-figmalab.png"
        alt="logo figma lab"
        height={25}
        width={133}
      />
      <Image src="/images/logotipo-2.svg" alt="header icon" height={30} width={127.34} />
    </header>
  );
}
