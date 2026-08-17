import Image from "next/image";

export default function Separator() {
  const words = ["DESIGN", "CRIATIVIDADE", "ESTRÁTEGIA", "COMUNIDADE", "PROCESSOS", "ORGANIZAÇÃO"];
  return (
    <div className="flex w-full overflow-hidden bg-[#EB3B6A] py-2 text-sm md:py-4 xl:text-xl">
      <div className="separator-marquee flex w-max items-center gap-4 md:gap-18">
        <div className="flex items-center w-max gap-4 md:gap-18">
          {words.map((word, index) => (
            <div className="flex items-center gap-4 md:gap-18" key={`grupo1-${index}`}>
              <span className="text-bg-white whitespace-nowrap px-9">{word}</span>
              <Image
                className="md:w-6 w-4"
                src="/icons/icon-estrela-white.svg"
                alt="icon estrela"
                width={24}
                height={24}
              />
            </div>
          ))}
        </div>

        <div className="flex items-center w-max gap-4 md:gap-18">
          {words.map((word, index) => (
            <div className="flex items-center gap-4 md:gap-18" key={`grupo2-${index}`}>
              <span className="text-bg-white whitespace-nowrap px-9">{word}</span>
              <Image
                className="md:w-6 w-4"
                src="/icons/icon-estrela-white.svg"
                alt="icon estrela"
                width={24}
                height={24}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
