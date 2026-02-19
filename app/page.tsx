import Image from "next/image";
import Button from "./components/Button";
import Bubble from "./components/Bubble";
import Card from "./components/Card";
import ModulesBar from "./components/ModulesBar";
import ModuleCard from "./components/ModulesCard";
import Separator from "./components/Separator";

export default function Home() {
  const negativePoints = [
    "Continuar criando no improviso",
    "Travar no frame me branco",
    "Depender 100% das referências",
    'Sentir que "falta criatividade"',
    "Demorar 3h em um design simples",
  ];

  const positivePoints = [
    "Desenvolver um processo criativo",
    "Saber exatamente por onde começar",
    "Analisar briefing com clareza",
    "Criar de forma autoral",
    "Dominar o Figma com fluidez",
  ];

  return (
    <div className="flex flex-col">
      <main className="flex bg-bg-pink p-32">
        <section className="flex flex-col gap-16 w-1/2">
          <h1 className="text-4xl font-bold">
            Organize suas ideias e destrave seu processo criativo.
          </h1>
          <p>
            Aprenda a pensar como designer e use o Figma com inteligência. O FigmaLab transforma o
            seu caos criativo em clareza, a cópia em autoria e a tentativa em método, mesmo que hoje
            você dependa 100% de referências prontas.
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
      <section>
        <h2 className="text-bg-black my-8">
          Hoje existem dois caminhos para quem trabalha com design:
        </h2>
        <div className="flex">
          <div className="flex flex-col gap-2">
            {negativePoints.map((point, index) => (
              <Bubble key={index} label={point} type="negative" />
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {positivePoints.map((point, index) => (
              <Bubble key={index} label={point} type="positive" />
            ))}
          </div>
        </div>
        <div className="">
          <h2 className="text-bg-black text-5xl font-bold">
            Qual caminho{" "}
            <span className="relative inline-block">
              {/* você → atrás */}
              <span className="relative z-20">você</span>

              {/* imagem → meio */}
              <Image
                src="/images/mao.png"
                width={72}
                height={80}
                alt="dedo indicador"
                className="absolute right-47 -top-2 z-10 pointer-events-none"
              />

              {/* escolhe → frente */}
              <span className="relative z-0 text-text-pink ml-8">escolhe?</span>
            </span>
          </h2>
        </div>
      </section>
      <section className="relative p-32">
        <Image
          src="/images/section-bg-feedbacks.png"
          alt=""
          fill
          className="object-cover -z-10"
          priority
        />
        <div className="flex gap-16">
          <Image src="/images/emi-foto-ia.png" width={320} height={320} alt="Feedbacks" />
          <div className="flex flex-col">
            <h2 className="text-6xl">
              O problema não é talento, é falta de <span className="text-text-pink">método</span>.
            </h2>
            <span>
              Design não é dom, é processo. O FigmaLab é o resultado de anos organizando meu próprio
              método criativo, validado em projetos reais. Aqui, você para de copiar e aprende a
              analisar, decidir e criar com consciência.
            </span>
            <span>
              Saia do amadorismo e domine o método que transforma criatividade travada em design
              estratégico.
            </span>
          </div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 mt-16">
          <Button label="Quero entrar no Lab" />
        </div>
      </section>
      <section className="bg-bg-pink flex">
        <Image src="icons/icon-down.svg" width={32} height={32} alt="icon arrow down" />
        <div>
          <h2 className="text-5xl">O que você vai dominar no FigmaLab:</h2>
          <Card />
          <Button label="Eu quero isso" />
        </div>
        <Image width={700} alt="mockups" height={700} src="/images/emi-foto-ia.png" />
      </section>

      <section className="bg-bg-black">
        <h2 className="text-5xl">Veja tudo que você vai aprender:</h2>
        <div className="flex">
          <Image src="/icons/icon-arrow-left.svg" width={32} height={32} alt="icon arrow left" />
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <Image src="/icons/icon-arrow-right.svg" width={32} height={32} alt="icon arrow left" />
        </div>
        <ModulesBar />
        <ModuleCard
          classes={["aula 1: xpto", "aula 2: piti"]}
          module={1}
          title="Boas vindas e o seu compromisso como designer"
        />
        <Button label="Eu quero fazer parte" />
      </section>
      <Separator />
    </div>
  );
}
