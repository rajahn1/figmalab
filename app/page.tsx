import Image from "next/image";
import Button from "./components/Button";

export default function Home() {
  return (
    <main className="flex bg-bg-pink">
      <section className="flex flex-col gap-16 w-1/2">
        <h1 className="text-4xl font-bold">
          Organize suas ideias e destrave seu processo criativo.
        </h1>
        <p>
          Aprenda a pensar como designer e use o Figma com inteligência. O FigmaLab transforma o seu
          caos criativo em clareza, a cópia em autoria e a tentativa em método, mesmo que hoje você
          dependa 100% de referências prontas.
        </p>
        <Button label="Eu quero fazer parte" />
      </section>
      <section className="w-1/2">
        <Image
          alt="Uma mulher jovem de cabelos pretos e casaco rosa com uma blusa branca"
          src="/images/foto-emi.png"
          width={750}
          height={750}
        />
      </section>
    </main>
  );
}
