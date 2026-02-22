"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Button from "./components/Button";
import Image from "next/image";
import Bubble from "./components/Bubble";
import Card from "./components/Card";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import ModuleCard from "./components/ModuleCard";
import Separator from "./components/Separator";
import InfiniteCarousel from "./components/InfiniteCarousel";

gsap.registerPlugin(useGSAP);

export default function LandingPage() {
  const iconFigmaRef = useRef(null);
  const barFigmaHorizontalRef = useRef(null);
  const image1ref = useRef(null);
  const image2ref = useRef(null);

  useGSAP(() => {
    gsap.to(iconFigmaRef.current, {
      y: -30,
      opacity: 0.9,
      scale: 1.05,
      duration: 3,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(barFigmaHorizontalRef.current, {
      y: -30,
      opacity: 0.9,
      scale: 1.05,
      duration: 3,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(image1ref.current, {
      x: "100%",
      duration: 3,
      delay: 0.03,
      repeat: -1,
      ease: "linear",
    });
    gsap.fromTo(
      image2ref.current,
      {
        x: -window.innerWidth,
        duration: 3,
        repeat: -1,
        ease: "linear",
      },
      {
        x: 0,
        duration: 3,
        repeat: -1,
        ease: "linear",
      }
    );
  });

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

  const skills = [
    "Pensar estrategicamente\n antes de abrir o Figma;",
    "Analisar o briefing de\n design de post com olhar\n de especialista;",
    "Construir repertório e\n moodboards inteligentes;",
    "Aumentar seu repertório\n de estilos de design;",
    "Dominar o Figma do zero\n ao avançado;",
    "Transformar qualquer\n referência em arte autoral;",
    "Evoluir junto a uma\n comunidade de\n designers criativos.",
  ];

  const benefits = [
    "1 ano de acesso ao FigmaLab",
    "Treinamento de Figma do zero ao avançado",
    "Comunidade de networking no WhatsApp",
    "Atualizações do Figma e aulas práticas",
    "7 dias de garantia para se adaptar",
    "Certificado de conclusão",
    "Modelo de briefing de design de post",
    "PDF de curadoria de sites que uso",
    "Aulas práticas criando carrosséis",
  ];

  const modulosAulas = [
    {
      title: "Boas-vindas e o\n seu compromisso\n como designer",
      classes: [
        "Aula 1: Boas-vindas!",
        "Aula 2: Nossa comunidade de networking",
        "Aula 3: O pacto",
        "Aula 4: Raio-X do caos criativo",
        "Aula 5: Como navegar pelo curso",
      ],
    },
    {
      title: "A bússola\n criativa",
      classes: [
        'Aula 1: A mentira do "dom" da criatividade',
        "Aula 2: Os meus primeiros passos",
        "Aula 3: Decifrando o briefing do cliente",
        "Aula 4: O plano B do briefing",
        "Aula 5: Referência não é cópia!",
        "Aula 6: Refinando seu olhar",
        "Aula 7: Lab prático de referências",
        "Aula 8: Curadoria visual",
        "Aula 9: O fim do CTRL C + CTRL V",
      ],
    },
    {
      title: "O básico que\n funciona",
      classes: [
        "Aula 1: Os fundamentos do design",
        "Aula 2: Estilos de design",
        "Aula 3: Meu arsenal criativo",
      ],
    },
    {
      title: "Dominando\n o Figma",
      classes: [
        "Aula 1: Instalando o software",
        "Aula 2: Licença educacional",
        "Aula 3: Tour pelo queridinho",
        'Aula 4: Um tesouro chamado "Community"',
        "Aula 5: Organização é tempo!",
        "Aula 6: Lab colaborativo",
        "Aula 7: Pen e Pencil",
        "Aula 8: Textos e funcionalidades",
        "Aula 9: Cores, gradientes e kit de marca",
      ],
    },
    {
      title: "Técnicas\n avançadas\n no Figma",
      classes: [
        "Aula 1: Plugins",
        "Aula 2: Máscara de corte",
        'Aula 3: "Pathfinder" do Figma',
        "Aula 4: Auto Layout",
        "Aula 5: Constraints",
        "Aula 6: Componentes e Assets",
        "Aula 7: Modos de mesclagem",
        "Aula 8: Efeitos blur e glass",
        "Aula 9: Figma Draw",
        "Aula 10: Texto atrás da imagem",
      ],
    },
    {
      title: "Mão no\n mouse!",
      classes: [
        "Aula 1: Do briefing ao export: me veja criar do zero!",
        "Aula 2: Carrossel na prática 01 (nicho psicologia)",
        "Aula 3: Carrossel na prática 02 (nicho marketing)",
        "Aula 4: Carrossel na prática 03 (nicho design)",
        "Aula 5: Checklist da criatividade",
        "Aula 6: O próximo nível",
      ],
    },
  ];

  const [activeModule, setActiveModule] = useState(1);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="max-w-screen font-articulat text-[#313131]">
      <Header />
      {/* Seção 1 - Fundo Rosa */}
      <section className="relative bg-text-pink text-[#ffffff] xl:pt-12 lg:pt-0  px-8">
        <div className="max-w-7xl mx-auto bg-text-pink flex flex-col md:flex-row xl:items-center lg:pt-8 justify-center">
          <div className="flex flex-col gap-6 lg:pt-4">
            <h1 className="font-editorial text-4xl lg:text-5xl xl:text-6xl leading-[92%] tracking-[-5%]">
              Organize suas <br /> ideias e destrave seu
              <br /> processo criativo no <br />
              design de post.
            </h1>
            <h2 className="xl:text-xl lg:text-sm font-normal">
              Aprenda a <span className="font-bold">pensar como designer</span> e use o <br />
              Figma com inteligência. O FigmaLab transforma
              <br /> o seu caos criativo em <span className="font-bold">clareza</span>, a cópia em
              <br /> <span className="font-bold">autoria</span> e a tentativa em{" "}
              <span className="font-bold">método</span>, mesmo que <br />
              hoje você dependa 100% de referências prontas.
            </h2>
            <Button label="Eu quero fazer parte" />
          </div>
          <div className="sm:w-[400px] lg:w-[480px] xl:w-[610px] aspect-[2040/1900] relative flex xl:items-center xl:justify-center">
            <Image
              src="/images/section-hero-img.png"
              alt="Mulher branca de cabelos pretos segurando um ipad "
              width={2040}
              height={1900}
              className="z-10 w-full h-auto"
            />
            {/* <img src="/images/section-hero-img.png" className="w-[400px]" alt="teste" />*/}
            <Image
              src="/images/print-interface.png"
              alt="Interface do figma"
              width={178}
              height={184.5}
              className="lg:w-28 lg:top-24 lg:right-10 absolute z-0 xl:right-18 xl:top-40 xl:w-34 mix-blend-soft-light"
            />
            <Image
              ref={iconFigmaRef}
              src="/icons/icon-figma.png"
              alt="Icone do Figma"
              width={300}
              height={225}
              className="absolute lg:w-52 lg:right-5 lg:bottom-30 xl:right-15 xl:bottom-45 z-20"
            />
            <Image
              ref={barFigmaHorizontalRef}
              src="/images/barra-ferramentas-horizontal.png"
              alt="barra do figma horizontal"
              width={250}
              height={35}
              className="lg:w-48 lg:bottom-34 lg:left-9 absolute mix-blend-luminosity z-20 xl:w-52 xl:bottom-45 xl:left-15"
            />
          </div>
        </div>
      </section>

      {/* Seção 2 - Fundo Branco */}
      <section className="bg-[#f4ede8] py-20 px-8 leading-[94%]">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
          <h2 className="font-articulat text-5xl text-center">
            Hoje existem <span className="font-bold">dois caminhos</span> para
            <br /> quem trabalha com
            <span className="font-bold"> design de post:</span>
          </h2>
          <div className="w-full flex flex-col md:flex-row gap-8 justify-center">
            <div className="">
              <ul className="list-disc pl-5 space-y-2">
                {negativePoints.map((point, index) => (
                  <Bubble key={index} label={point} type="negative" />
                ))}
              </ul>
            </div>
            <div className="">
              <ul className="list-disc pl-5 space-y-2">
                {positivePoints.map((point, index) => (
                  <Bubble key={index} label={point} type="positive" />
                ))}
              </ul>
            </div>
          </div>
          <h2 className="text-center text-bg-black text-7xl font-extrabold leading-14 tracking-tighter">
            Qual caminho <br />
            <span className="relative inline-block">
              {/* você → atrás */}
              <span className="relative z-20">você</span>

              {/* imagem → meio */}
              <Image
                src="/images/mao.png"
                width={100}
                height={100}
                alt="dedo indicador"
                className="absolute right-60 -top-4 z-10 pointer-events-none"
              />

              {/* escolhe → frente */}
              <span className="relative z-0 text-text-pink ml-10">escolhe?</span>
            </span>
          </h2>
        </div>
      </section>

      {/* Seção 3 - Fundo Preto */}
      <section className="xl:h-240 lg:h-[700px] bg-[url('/images/section-bg-feedbacks.png')] bg-no-repeat bg-cover bg-center text-black py-20 px-8">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <div className="flex lg:mt-4 xl:mt-16 flex-col md:flex-row justify-end mr-24">
            <div className="flex flex-col items-start gap-4 justify-center">
              <h2 className="font-editorial text-6xl tracking-tighter">
                O problema não <br /> é talento, é falta
                <br /> de <span className="text-text-pink">método</span>.
              </h2>
              <span className="lg:text-lg xl:text-xl">
                Design não é dom, é processo. O<br /> FigmaLab é o resultado de anos
                <br /> organizando meu próprio método
                <br /> criativo de design para social media,
                <br /> validado em projetos reais. Aqui, você
                <br /> para de copiar e aprende a analisar,
                <br /> decidir e criar com consciência.
              </span>
              <span className="lg:text-lg xl:text-xl lg:mb-4 mb-8">
                Saia do amadorismo e domine o método
                <br /> que{" "}
                <span className="font-bold">
                  transforma criatividade travada
                  <br /> em design de post estratégico.
                </span>
              </span>
              <Button label="Quero entrar no Lab" />
            </div>
          </div>
        </div>
      </section>

      {/* Seção 4 */}
      <section className="bg-text-pink py-20 px-8 flex flex-col items-center">
        <div className="max-w-6xl flex xl:flex-col lg:flex-col md:flex-row xl:justify-center xl:items-center gap-3">
          <h2 className="font-editorial xl:text-7xl lg:text-6xl font-bold text-white text-center">
            O que você vai
            <br /> dominar no FigmaLab:
          </h2>

          <div className="flex relative">
            <div className="xl:mr-80 lg:mr-64">
              <Card
                data={skills}
                icon="/icons/icon-check-pink.svg"
                bgColor="bg-black"
                textColor="white"
              />
            </div>
            <div
              className="xl:w-260 absolute xl:-top-10 xl:left-30
                lg:top-10 lg:left-40
                md:top-16 md:left-20
                top-20 left-10"
            >
              <Image
                src="/images/mockup-notebooks.png"
                alt="Descrição da imagem"
                width={1400}
                height={980}
                className=" 
                w-full h-auto
                "
              />
            </div>
          </div>
          <div className="mt-8">
            <Button label="Eu quero isso" />
          </div>
        </div>
      </section>

      {/* Seção 5 - Módulos */}
      <section className="bg-bg-black py-20 px-8">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
          <h2 className="font-articulat xl:text-6xl lg:text-5xl font-bold text-white text-center">
            Veja tudo que <br /> você vai aprender:
          </h2>

          <Carousel />

          {/* Barra de Módulos */}
          <div className="flex gap-4 bg-bg-white rounded-full px-8 py-4 text-bg-blacK w-max overflow-x-auto xl:text-xl">
            {[1, 2, 3, 4, 5, 6].map((mod) => (
              <button
                key={mod}
                onClick={() => setActiveModule(mod)}
                className={`text-center hover:cursor-pointer px-6 py-2 rounded-full font-articulat transition ${activeModule === mod ? "bg-[#c9408f] text-white" : "text-[#313131]"}`}
              >
                MÓDULO {mod}
              </button>
            ))}
          </div>

          {/* Card do Módulo Ativo */}
          <ModuleCard
            module={activeModule}
            classes={modulosAulas[activeModule - 1].classes}
            title={modulosAulas[activeModule - 1].title}
          />

          <div className="mt-6">
            <Button label="Eu quero fazer parte" />
          </div>
        </div>
      </section>

      {/* Seção 6 */}
      <section className="bg-[url('/images/certificado-blobs.png')] bg-cover bg-center xl:h-180">
        <div className="ml-72 h-full flex flex-col justify-center gap-4 font-articulat">
          <h2 className="lg:text-6xl xl:text-7xl font-bold leading-14">
            <span className="text-text-pink">Certificado</span> <br /> de conclusão
          </h2>
          <p className="xl:text-2xl lg:text-lg font-light">
            Valide sua evolução e conquiste o<br /> reconhecimento oficial do seu domínio no
            <br /> Figma. Ao concluir sua jornada no Lab,
            <br /> você recebe certificações que comprovam
            <br />
            seu nível técnico e sua autoridade como
            <br /> designer estrategista no mercado.
          </p>
        </div>
      </section>
      <Separator />
      {/* Seção 7 - Galeria */}

      <section className="bg-text-pink py-20 text-white flex flex-col gap-8">
        {/* 1. CONTAINER DO TEXTO (Com limite de largura e centralizado) */}
        <div className="max-w-7xl mx-auto flex flex-col items-center px-4">
          {" "}
          {/* Adicionei px-4 para evitar colar nas bordas no mobile */}
          <div className="text-center flex flex-col gap-4">
            <h2 className="font-articulat xl:text-2xl lg:text-xl">
              Você pode continuar tentando, copiando, travando,
              <br /> duvidando ou pode aprender um processo que vai
              <br /> te acompanhar em qualquer projeto de design de
              <br /> post, qualquer cliente ou qualquer estilo gráfico.
            </h2>
            <h2 className="xl:text-6xl lg:text-5xl font-bold">
              Eu vou te mostrar o caminho.
              <br /> Mas a execução é sua.
            </h2>
            <span className="xl:text-3xl lg:text-2xl underline">
              Veja alguns carrosséis que eu
              <br /> vou te ensinar durante o curso:
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full mt-24">
          <InfiniteCarousel
            pathImage="/images/carrossel-1.png"
            width={1693.19}
            height={352.61}
            direction="forward"
          />
          <InfiniteCarousel
            pathImage="/images/carrossel-2.png"
            width={1693.18}
            height={352.61}
            direction="backward"
          />
          <InfiniteCarousel
            pathImage="/images/carrossel-3.png"
            width={2538.3}
            height={352.61}
            direction="forward"
          />
          <InfiniteCarousel
            pathImage="/images/carrossel-4.png"
            width={2256.7}
            height={352.61}
            direction="backward"
          />
        </div>
      </section>

      {/* Seção 8 - Preço e Bônus */}
      <section className="bg-[#f4ede8] py-20 px-8">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-12">
          <h2 className="font-editorial text-4xl font-bold text-center">
            Garantindo sua vaga hoje você terá acesso:
          </h2>
          <div className="w-full flex flex-col md:flex-row gap-8">
            <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="font-bold text-2xl mb-6 text-[#c9408f]">Bônus Exclusivos</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">✅ Bônus 1: Mentoria</li>
                <li className="flex items-center gap-2">✅ Bônus 2: E-book</li>
                <li className="flex items-center gap-2">✅ Bônus 3: Comunidade</li>
              </ul>
            </div>
            <div className="flex-1 bg-[#313131] text-white p-8 rounded-2xl shadow-lg flex flex-col justify-center items-center text-center">
              <h3 className="font-bold text-xl mb-2">Oferta Especial</h3>
              <p className="line-through text-gray-400">De R$ 997,00</p>
              <p className="text-5xl font-bold font-['PP_Editorial_New'] my-4 text-[#c9408f]">
                12x R$ 49,90
              </p>
              <button className="bg-[#6737cc] text-[#ffffff] w-full py-4 rounded-md font-bold mt-4 hover:opacity-90 transition">
                Comprar Agora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 9 */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 flex flex-col items-start gap-4">
            <h2 className="font-['PP_Editorial_New'] text-4xl font-bold">
              Quem vai te ensinar tudo isso?
            </h2>
            <h3 className="text-xl font-semibold">
              Hello, eu sou a Emi, fundadora do Studio Emi e designer há 4 anos.
            </h3>
            <p>
              Por muito tempo, acreditei que meu maior obstáculo era a falta de criatividade, quando
              na verdade o que me faltava era um método claro. O FigmaLab nasceu da organização do
              meu próprio processo criativo, validado em projetos reais que hoje me permitem faturar
              5 dígitos mensais com design para social media. Aqui, eu te ensino a pensar como
              designer estrategista, dominando a técnica para criar com total autoria e segurança.
              Minha missão é que o design transforme sua realidade assim como mudou a minha, tirando
              você da dependência de referências para conquistar autoridade. No meu lab criativo,
              você domina o processo lógico por trás de grandes criações no Figma. O objetivo é ir
              além de "posts bonitos" e alcançar o posicionamento necessário para ser uma
              profissional devidamente valorizada pelo mercado.
            </p>
          </div>
          <div className="flex-1 relative w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center">
            <Image
              src="/images/foto-emi.png"
              alt="Descrição da imagem"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Seção 10 - FAQ e Card Final */}
      <section className="bg-[#313131] text-white py-20 px-8">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-12">
          <h2 className="font-['PP_Editorial_New'] text-4xl font-bold">
            Perguntas Frequentes (FAQ)
          </h2>

          <div className="w-full flex flex-col gap-4">
            {[1, 2, 3, 4].map((faq) => (
              <div key={faq} className="bg-white/10 rounded-lg overflow-hidden transition-all">
                <button
                  onClick={() => toggleFaq(faq)}
                  className="w-full p-6 text-left flex justify-between items-center font-bold hover:bg-white/5"
                >
                  Pergunta número {faq}?
                  <span className="text-xl">{activeFaq === faq ? "▲" : "▼"}</span>
                </button>
                {activeFaq === faq && (
                  <div className="p-6 pt-0 text-gray-300">
                    Resposta detalhada para a pergunta {faq}.
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="w-full bg-[#c9408f] p-10 rounded-2xl flex flex-col items-center text-center gap-6 mt-10">
            <h2 className="font-['PP_Editorial_New'] text-4xl font-bold">Pronto para começar?</h2>
            <p className="text-lg">Subtítulo final de encerramento.</p>
            <button className="bg-[#6737cc] text-[#ffffff] px-10 py-5 rounded-md font-bold text-lg hover:opacity-90 transition shadow-xl">
              Quero Garantir Minha Vaga
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
