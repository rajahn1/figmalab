import Image from "next/image";

export default function Separator() {
  const words = ["DESIGN", "CRIATIVIDADE", "ESTRÁTEGIA", "COMUNIDADE", "PROCESSOS", "ORGANIZAÇÃO"];
  return (
    <div className="bg-[#8950FF] flex justify-between py-4 px-8">
      {words.map((word) => (
        <div className="flex items-center gap-18" key={word}>
          <span className="text-bg-white">{word} </span>
          <Image src="icons/icon-estrela-white.svg" alt="icon estrela" width={24} height={24} />
        </div>
      ))}
    </div>
  );
}
