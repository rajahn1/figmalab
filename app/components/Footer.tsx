import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex justify-between px-24 py-6 bg-text-pink items-center text-white">
      <span>
        <span className="font-bold">Studio Emi Design 2026</span> &copy; Todos os direitos
        reservados
      </span>
      <a href="#header" className="flex items-center gap-4">
        <span>Voltar para o topo</span>
        <Image src="/icons/icon-arrow-up-pink.svg" alt="Icon arrow up" width={24} height={24} />
      </a>
    </footer>
  );
}
