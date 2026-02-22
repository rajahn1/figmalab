import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex justify-center md:justify-between md:px-24 md:py-6 py-3 bg-text-pink items-center text-white md:text-base text-[10px]">
      <span>
        <span className="font-bold">Studio Emi Design 2026</span> &copy; Todos os direitos
        reservados
      </span>
      <a href="#header" className="items-center gap-4 hidden md:flex">
        <span>Voltar para o topo</span>
        <Image
          src="/icons/icon-arrow-up-pink.svg"
          alt="Icon arrow up"
          className="w-6"
          width={24}
          height={24}
        />
      </a>
    </footer>
  );
}
