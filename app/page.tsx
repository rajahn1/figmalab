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
import CardPrice from "./components/CardPrice";
import Footer from "./components/Footer";

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

  const faq = [
    {
      question: "Isso é um curso de design de post no Figma?",
      answer:
        "Sim, o FigmaLab usa o Figma como base para ensinar o domínio do processo criativo e do pensamento estratégico aplicado ao design de posts.",
    },
    {
      question: "É para iniciantes?",
      answer:
        "Sim. E também para quem já cria, mas sente que falta clareza, criatividade e domínio do Figma.",
    },
    {
      question: "Quando vou ter acesso as aulas?",
      answer:
        "Acesse os dois primeiros módulos assim que sua inscrição for confirmada. O conteúdo completo será liberado em 7 dias, garantindo que você siga o cronograma ideal para absorver o método.",
    },
    {
      question: "Como vou ter acesso ao curso?",
      answer:
        "Assim que o pagamento for aprovado, você vai receber um e-mail com todos os dados de acesso à plataforma.",
    },
    {
      question: "Quanto tempo terei de acesso?",
      answer:
        "É válido por 12 meses, incluindo todas as atualizações feitas durante esse período. Ao final desse prazo, você poderá renovar o acesso, caso deseje continuar no Lab.",
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
      <section className="relative bg-text-pink text-[#ffffff] 2xl:pt-12 xl:pt-0  px-8">
        <div className="max-w-7xl mx-auto bg-text-pink flex flex-col md:flex-row xl:items-center xl:pt-8 2xl:pt-8 justify-center">
          <div className="flex flex-col gap-6">
            <h1 className="font-editorial text-4xl xl:text-5xl 2xl:text-6xl leading-[92%] tracking-[-5%]">
              Organize suas <br /> ideias e destrave seu
              <br /> processo criativo no <br />
              design de post.
            </h1>
            <h2 className="2xl:text-xl xl:text-base font-normal">
              Aprenda a <span className="font-bold">pensar como designer</span> e use o <br />
              Figma com inteligência. O FigmaLab transforma
              <br /> o seu caos criativo em <span className="font-bold">clareza</span>, a cópia em
              <br /> <span className="font-bold">autoria</span> e a tentativa em{" "}
              <span className="font-bold">método</span>, mesmo que <br />
              hoje você dependa 100% de referências prontas.
            </h2>
            <Button label="Eu quero fazer parte" />
          </div>
          <div className="sm:w-[400px] xl:w-[500px] 2xl:w-[610px] aspect-[2040/1900] relative flex xl:items-center xl:justify-center">
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
              className="xl:w-28 xl:top-26 xl:right-15 absolute z-0 2xl:right-18 2xl:top-40 2xl:w-34 mix-blend-soft-light"
            />
            <Image
              ref={iconFigmaRef}
              src="/icons/icon-figma.png"
              alt="Icone do Figma"
              width={300}
              height={225}
              className="absolute xl:w-52 xl:right-5 xl:bottom-30 2xl:right-15 2xl:bottom-45 z-20"
            />
            <Image
              ref={barFigmaHorizontalRef}
              src="/images/barra-ferramentas-horizontal.png"
              alt="barra do figma horizontal"
              width={250}
              height={35}
              className="xl:w-48 xl:bottom-34 xl:left-9 absolute mix-blend-luminosity z-20 2xl:w-52 2xl:bottom-45 2xl:left-15"
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

      {/* Seção 3 - Fundo Imagem Emilize */}
      <section className="2xl:h-240 bg-[url('/images/section-bg-feedbacks.png')] xl:bg-cover 2xl:bg-cover bg-no-repeat bg-center text-black py-20 px-8">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <div className="flex 2xl:mt-16 flex-col md:flex-row justify-end xl:px-32 2xl:mr-24">
            <div className="flex flex-col items-start gap-4 justify-center">
              <h2 className="font-editorial text-4xl xl:text-5xl 2xl:text-6xl tracking-tighter">
                O problema não <br /> é talento, é falta
                <br /> de <span className="text-text-pink">método</span>.
              </h2>
              <span className="xl:text-lg 2xl:text-xl">
                Design não é dom, é processo. O<br /> FigmaLab é o resultado de anos
                <br /> organizando meu próprio método
                <br /> criativo de design para social media,
                <br /> validado em projetos reais. Aqui, você
                <br /> para de copiar e aprende a analisar,
                <br /> decidir e criar com consciência.
              </span>
              <span className="xl:text-lg 2xl:text-xl xl:mb-4 mb-8">
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
          <h2 className="font-articulat 2xl:text-7xl xl:text-5xl font-bold text-white text-center">
            O que você vai
            <br /> dominar no FigmaLab
          </h2>
          <div className="flex relative">
            <div className="2xl:mr-80 xl:mr-64">
              <Card
                data={skills}
                icon="/icons/icon-check-pink.svg"
                bgColor="bg-black"
                textColor="white"
                type="first"
              />
            </div>
            <div
              className="2xl:w-260 absolute 2xl:-top-10 2xl:left-30
                xl:w-200 xl:-top-10 xl:left-25
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
            <Button label="Eu quero isso" size="xl" />
          </div>
        </div>
      </section>

      {/* Seção 5 - Módulos */}
      <section className="bg-bg-black py-20 px-8">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
          <h2 className="font-articulat 2xl:text-6xl xl:text-5xl font-bold text-white text-center">
            Veja tudo que <br /> você vai aprender:
          </h2>

          <Carousel />

          {/* Barra de Módulos */}
          <div className="flex gap-4 bg-bg-white rounded-full px-8 py-4 text-bg-blacK w-max overflow-x-auto 2xl:text-xl">
            {[1, 2, 3, 4, 5, 6].map((mod) => (
              <button
                key={mod}
                onClick={() => setActiveModule(mod)}
                className={`hover:opacity-90 text-center hover:cursor-pointer px-6 py-2 rounded-full font-articulat transition ${activeModule === mod ? "bg-[#c9408f] text-white" : "text-[#313131]"}`}
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
            <Button label="Eu quero fazer parte" size="xl" />
          </div>
        </div>
      </section>

      {/* Seção 6 */}
      <section className="bg-[url('/images/certificado-blobs.png')] bg-cover bg-center xl:h-120 2xl:h-180">
        <div className="2xl:ml-72 xl:ml-48 h-full flex flex-col justify-center gap-4 font-articulat">
          <h2 className="xl:text-6xl 2xl:text-7xl font-bold leading-14">
            <span className="text-text-pink">Certificado</span> <br /> de conclusão
          </h2>
          <p className="2xl:text-2xl xl:text-lg font-light">
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
            <h2 className="font-articulat 2xl:text-2xl xl:text-xl">
              Você pode continuar tentando, copiando, travando,
              <br /> duvidando ou pode aprender um processo que vai
              <br /> te acompanhar em qualquer projeto de design de
              <br /> post, qualquer cliente ou qualquer estilo gráfico.
            </h2>
            <h2 className="2xl:text-6xl xl:text-5xl font-bold">
              Eu vou te mostrar o caminho.
              <br /> Mas a execução é sua.
            </h2>
            <span className="2xl:text-3xl xl:text-2xl underline">
              Veja alguns carrosséis que eu
              <br /> vou te ensinar durante o curso:
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-1 w-full 2xl:mt-20">
          <InfiniteCarousel
            pathImage="/images/carrossel-1.png"
            width={4096}
            height={853}
            direction="forward"
          />
          <InfiniteCarousel
            pathImage="/images/carrossel-2.png"
            width={4096}
            height={853}
            direction="backward"
          />
          <InfiniteCarousel
            pathImage="/images/caro-3.png"
            width={4096}
            height={853}
            direction="forward"
          />
          <InfiniteCarousel
            pathImage="/images/caro-4.png"
            width={4096}
            height={853}
            direction="backward"
          />
        </div>
      </section>

      {/* Seção 8 - Preço e Bônus */}
      <section className="bg-bg-black text-white py-20 px-8">
        <div className="flex flex-col gap-12 items-center">
          <h2 className="font-articulat xl:text-5xl 2xl:text-6xl text-center">
            Garantindo sua vaga
            <br /> hoje <span className="font-bold"> você terá acesso</span>:
          </h2>
          <div className="flex gap-8">
            <Card
              bgColor="bg-white"
              data={benefits}
              icon="/icons/cursor-right-orange.svg"
              textColor="black"
              type="second"
            />
            <CardPrice />
          </div>
        </div>
      </section>

      {/* Seção 9 */}
      <section className="bg-white py-20 px-8 relative overflow-hidden">
        <svg
          className="absolute right-30 bottom-80"
          width="104"
          height="103"
          viewBox="0 0 104 103"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M87.968 12.3854C87.1975 11.7359 86.4617 11.3441 85.3423 10.9872C81.4044 9.73181 76.4051 11.1278 71.7595 14.7799C69.4348 16.6075 67.1586 18.9976 65.0246 21.8516C61.4535 26.6277 58.2028 32.8268 55.5908 39.842C54.5386 42.6679 54.2667 43.4769 53.2079 46.9332C52.6476 48.7621 52.1888 50.2442 52.1884 50.2267C52.188 50.2093 52.3259 49.4873 52.4949 48.6223C55.1412 35.0793 55.2267 23.564 52.7479 14.5956C52.3715 13.2337 51.4463 10.7332 50.8817 9.55172C49.4585 6.57376 47.7771 4.3042 45.7522 2.62815C44.3733 1.48674 43.1271 0.806925 41.5768 0.3504C40.5564 0.0498903 39.714 -0.0446272 38.6186 0.0186176C37.1569 0.103027 35.7339 0.593819 34.5302 1.42875C33.8745 1.88343 32.6385 3.17812 32.1159 3.95742C31.2253 5.2856 30.5047 7.20908 30.1805 9.12357C28.5749 18.6039 34.3336 31.7042 45.9432 44.9821C47.131 46.3406 49.9733 49.4151 50.6948 50.1219L51.3014 50.7162L50.5033 50.0431C50.0644 49.6728 49.0136 48.7865 48.1683 48.0735C37.6207 39.1764 27.7843 33.7249 18.8884 31.8464C16.6905 31.3822 14.5591 31.1724 12.4987 31.2174C8.91295 31.2956 6.10179 32.1002 3.79229 33.7092C2.98027 34.2749 1.81432 35.4684 1.30571 36.2544C-0.675477 39.3164 -0.391701 43.0375 2.08614 46.4862C2.6927 47.3304 4.63196 49.178 5.64545 49.8771C11.0266 53.5891 18.9267 55.3521 28.827 55.0502C34.7277 54.8703 40.2587 54.1087 47.3347 52.5019C48.6762 52.1973 49.7857 51.9475 49.8003 51.9467C49.8148 51.9459 49.7908 51.9831 49.7468 52.0291C49.7029 52.0752 49.6445 52.0915 49.617 52.0654C49.5897 52.0392 49.5574 52.064 49.5455 52.1203C49.5311 52.1885 49.5138 52.1839 49.4936 52.1065C49.4713 52.0214 49.4485 52.0253 49.4085 52.1212C49.3726 52.2072 49.3451 52.2185 49.3282 52.154C49.3128 52.0949 49.2835 52.0964 49.2545 52.1581C49.2281 52.2144 48.6878 52.4377 48.0538 52.6545C46.6342 53.1398 43.6672 54.2735 41.8915 55.0091C32.262 58.9985 24.4508 63.9349 19.4227 69.2087C17.023 71.7256 15.4399 73.9469 14.2196 76.5091C11.7217 81.7537 12.099 86.7916 15.2122 89.7609C16.9516 91.4199 19.2337 92.1845 22.0726 92.0591C25.4255 91.911 29.0314 90.2965 32.7818 87.2643C33.983 86.293 37.1194 83.0055 38.2433 81.5396C43.495 74.6892 47.5281 66.211 50.9336 54.8624C51.3367 53.5191 51.6744 52.4276 51.6842 52.4369C51.694 52.4463 51.6368 52.7637 51.5571 53.1424C51.4774 53.5212 51.2516 54.7098 51.0552 55.7839C48.1702 71.5666 48.8982 84.7376 53.14 93.4995C55.3504 98.0655 58.6308 101.297 62.1089 102.334C66.6032 103.675 70.7378 101.564 72.7482 96.9018C73.6206 94.879 74.0053 92.4679 73.9088 89.6281C73.7395 84.6477 72.1303 79.3582 68.9725 73.4021C65.5549 66.9558 60.5921 60.3571 53.9231 53.3917C53.203 52.6396 52.6134 52.0116 52.6128 51.9962C52.6122 51.9807 53.1626 52.4605 53.836 53.0624C57.8827 56.6799 63.9482 61.2202 67.9492 63.6266C70.9887 65.4547 71.9401 65.9724 74.6103 67.251C85.0026 72.2273 94.4027 72.8895 100.076 69.0451C100.912 68.4789 102.211 67.0919 102.688 66.2558C103.536 64.7716 103.882 63.461 103.845 61.8788C103.789 59.5278 102.792 57.3026 100.821 55.135C97.7843 51.7937 92.3543 49.3099 85.8016 48.2647C77.6442 46.9636 67.0503 47.7061 55.9121 50.3595C55.0152 50.5732 54.2729 50.7155 54.2625 50.6758C54.2521 50.636 54.3298 50.569 54.4352 50.5268C54.5405 50.4845 54.6344 50.4792 54.6437 50.5149C54.6531 50.5507 54.6875 50.5461 54.7204 50.5047C54.7532 50.4634 55.7451 50.0778 56.9246 49.6481C67.2243 45.8952 75.0132 41.6494 81.3349 36.3417C82.5131 35.3525 85.1057 32.7315 86.0329 31.5922C88.3097 28.7947 89.7344 26.2728 90.5355 23.6226C91.244 21.2788 91.3768 19.2568 90.9537 17.2573C90.5277 15.2435 89.6397 13.7946 87.968 12.3854ZM54.1057 50.6673C54.0946 50.7195 54.0419 50.7448 53.9884 50.7236C53.9189 50.6959 53.909 50.7043 53.9536 50.7528C54.0437 50.8509 54.1842 50.7961 54.1525 50.6752C54.1366 50.6139 54.1176 50.6108 54.1057 50.6673Z"
            fill="#EBE5E0"
          />
        </svg>

        <svg
          className="absolute bottom-0 right-0"
          width="158"
          height="331"
          viewBox="0 0 198 361"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M197.086 1.65225C189.239 7.41328 181.296 18.8787 176.226 31.7616C173.267 39.2816 170.699 49.3416 169.317 58.8192C167.926 68.3683 167.726 71.2225 167.577 83.6426C167.356 102.025 168.299 115.976 170.782 131.055C171.074 132.83 171.526 135.623 171.786 137.261C172.046 138.9 172.482 141.357 172.755 142.722C173.028 144.088 173.472 146.434 173.742 147.935C174.235 150.671 174.926 153.901 175.814 157.617C176.075 158.709 176.488 160.496 176.732 161.588C176.975 162.68 177.33 164.222 177.521 165.013C177.768 166.036 177.704 166.351 177.3 166.101C176.987 165.908 176.731 165.361 176.731 164.885C176.731 164.41 176.553 163.809 176.336 163.549C176.118 163.29 175.657 162.184 175.31 161.092C174.963 160 174.493 158.659 174.264 158.113C174.036 157.567 173.359 155.78 172.759 154.141C172.16 152.503 171.468 150.66 171.222 150.045C170.975 149.431 170.55 148.37 170.277 147.687C170.004 147.004 169.527 145.831 169.218 145.081C168.908 144.33 168.484 143.269 168.275 142.722C167.815 141.517 166.764 139.054 165.365 135.896C164.79 134.599 163.854 132.477 163.285 131.18C161.768 127.723 153.577 111.316 152.069 108.714C150.584 106.151 149.377 104.045 147.876 101.394C147.297 100.371 146.18 98.5997 145.393 97.4569C144.608 96.314 143.953 95.196 143.94 94.972C143.926 94.7481 143.032 93.3362 141.951 91.8344C140.87 90.3325 139.054 87.7633 137.914 86.125C136.774 84.4866 134.863 81.9174 133.666 80.4156C132.47 78.9138 131.139 77.2382 130.709 76.6921C124.758 69.1323 114.561 59.0575 107.509 53.7701C104.54 51.5434 101.529 49.4324 100.82 49.0789C100.111 48.7255 99.1951 48.1793 98.7855 47.8656C97.3889 46.7957 91.5941 43.8745 88.1114 42.4853C80.0125 39.2543 76.3932 38.5141 68.7491 38.523C61.6779 38.532 58.2528 39.2985 52.3656 42.1894C42.4636 47.0524 35.934 59.5877 36.8857 71.9086C37.4974 79.8312 41.2422 91.0971 45.2716 97.1366C46.0332 98.278 46.6562 99.4512 46.6562 99.7431C46.6562 100.036 46.8439 100.274 47.0728 100.274C47.3021 100.274 47.7519 100.849 48.0722 101.552C48.5572 102.617 51.2208 106.346 52.1244 107.225C52.2644 107.361 53.3764 108.702 54.5948 110.204C59.6473 116.43 67.7696 123.985 76.0542 130.164C81.1171 133.94 92.9942 141.978 93.5105 141.978C93.6927 141.978 96.4129 143.54 101.526 146.581C104.643 148.435 126.094 158.858 126.792 158.858C126.939 158.858 128.522 159.528 130.311 160.347C132.1 161.166 133.784 161.836 134.054 161.836C134.324 161.836 134.933 162.034 135.407 162.275C137.133 163.153 141.853 164.963 145.454 166.128C146.682 166.526 148.135 167.051 148.681 167.296C149.827 167.81 156.914 170.118 162.334 171.744C164.381 172.358 166.445 173.061 166.919 173.306C167.393 173.551 168.343 173.752 169.029 173.752C169.715 173.752 170.277 173.975 170.277 174.248C170.277 174.854 167.958 174.914 167.59 174.318C167.445 174.084 166.036 173.747 164.457 173.57C162.88 173.393 160.248 173.018 158.61 172.736C149.782 171.22 139.972 169.904 128.822 168.741C120.837 167.908 91.5122 167.584 84.3879 168.249C64.9278 170.068 51.5862 172.963 38.4645 178.213C31.8699 180.852 21.7946 186.601 17.6128 190.113C15.6359 191.773 8.93304 198.5 7.69633 200.065C5.76507 202.509 2.50476 208.694 1.70544 211.428C1.25763 212.96 0.688179 214.727 0.439448 215.354C-0.142911 216.825 -0.147875 225.982 0.432994 227.471C0.677753 228.098 1.16975 229.617 1.52721 230.846C4.81632 242.163 17.2628 250.955 33.8051 253.646C38.0663 254.339 49.7775 254.337 54.848 253.642C58.6192 253.126 65.8175 251.586 68.5009 250.723C69.1835 250.503 70.7474 250.041 71.9762 249.696C76.4484 248.442 86.1216 245.119 88.8204 243.91C92.4262 242.296 105.064 236.046 106.967 234.936C107.781 234.461 109.871 233.235 111.61 232.211C113.35 231.187 114.867 230.349 114.981 230.349C115.502 230.349 133.637 217.974 138.396 214.37C143.198 210.735 148.28 206.706 148.929 206.022C149.065 205.878 150.406 204.763 151.908 203.545C155.006 201.031 161.25 195.575 165.308 191.834C172.279 185.408 173.286 184.539 173.502 184.754C173.628 184.881 172.825 185.976 171.716 187.188C170.136 188.915 162.475 198.251 158.703 203.048C157.56 204.5 151.068 213.264 148.59 216.696C144.993 221.68 136.727 234.556 134.406 238.789C133.733 240.018 132.525 242.14 131.722 243.506C125.981 253.268 118.399 270.981 114.722 283.223C113.51 287.256 111.786 295.327 110.731 301.898C110.057 306.098 110.046 322.027 110.715 325.079C110.996 326.36 111.463 328.526 111.753 329.891C114.851 344.457 124.073 355.703 135.524 358.879C136.753 359.22 138.444 359.707 139.283 359.961C141.204 360.544 145.355 360.559 147.241 359.99C148.033 359.75 149.909 359.277 151.411 358.936C153.872 358.379 156.842 357.107 161.092 354.789C163.882 353.268 169.013 348.732 172.147 345.017C179.252 336.593 186.178 322.309 189.109 310.032C189.435 308.667 189.901 306.768 190.145 305.812C191.06 302.229 192.059 296.284 193.148 287.955C193.826 282.767 194.117 258.625 193.603 250.208C192.901 238.713 190.984 223.716 188.699 211.856C188.397 210.285 187.906 207.717 187.607 206.146C186.959 202.732 186.402 200.101 185.692 197.086C185.402 195.857 184.954 193.846 184.696 192.618C184.438 191.389 184.072 189.736 183.883 188.944C183.637 187.922 183.702 187.607 184.106 187.856C184.419 188.05 184.675 188.645 184.675 189.179C184.675 189.712 184.88 190.537 185.131 191.011C185.383 191.485 186.075 193.213 186.669 194.852C187.264 196.49 187.931 198.277 188.153 198.823C188.374 199.37 189.153 201.38 189.884 203.292C190.614 205.203 191.551 207.549 191.966 208.505C192.38 209.46 192.897 210.689 193.115 211.235C193.332 211.781 193.868 213.066 194.305 214.09C194.743 215.114 195.456 216.79 195.892 217.813C196.327 218.838 197.109 220.534 197.629 221.584C198.15 222.634 198.576 223.806 198.576 224.191C198.576 224.574 198.783 224.888 199.036 224.888C199.289 224.888 199.617 225.279 199.765 225.757C199.913 226.234 199.93 222.848 199.802 218.23C199.673 213.613 199.569 203.658 199.569 196.108V182.38L196.466 181.497C191.953 180.213 191.692 180.095 192.793 179.834C193.299 179.715 194.682 179.861 195.868 180.16C199.855 181.164 199.569 181.95 199.569 169.992V159.282L198.203 160.351C197.453 160.938 195.144 163.022 193.073 164.979C187.897 169.872 186.253 171.278 187.172 170.028C187.574 169.482 188.033 168.924 188.193 168.787C188.353 168.651 190.979 165.545 194.027 161.885L199.569 155.231V77.6095C199.569 34.9177 199.513 -0.00694953 199.445 1.03728e-06C199.377 0.00645513 198.315 0.750166 197.086 1.65225ZM0.175823 221.413C0.175823 224.553 0.256747 225.838 0.355048 224.267C0.453349 222.697 0.453349 220.128 0.355048 218.558C0.256747 216.988 0.175823 218.273 0.175823 221.413Z"
            fill="#EBE5E0"
          />
        </svg>

        <div className="2xl:max-w-6xl xl:max-w-5xl mx-auto flex md:flex-row items-center 2xl:gap-10">
          <div className="flex-1 flex flex-col items-start gap-4">
            <h2 className="font-editorial 2xl:text-7xl xl:text-5xl font-bold">
              {" "}
              <span className="text-text-pink">Quem</span> vai te
              <br /> ensinar tudo isso?
            </h2>
            <h3 className="xl:text-xl 2xl:text-3xl font-bold">
              Hello, eu sou a Emi, fundadora do
              <br /> Studio Emi e designer há 4 anos.
            </h3>
            <div className="flex flex-col gap-4 2xl:text-xl xl:text-lg">
              <p>
                Por muito tempo, acreditei que meu maior obstáculo era a<br /> falta de
                criatividade, quando na verdade o que me faltava
                <br /> era um método claro. O FigmaLab nasceu da organização
                <br /> do{" "}
                <span className="font-bold">
                  meu próprio processo criativo, validado em projetos
                  <br /> reais que hoje me permitem faturar 5 dígitos mensais
                  <br /> com design para social media.
                </span>{" "}
                Aqui, eu te ensino a pensar
                <br /> como designer estrategista, dominando a técnica para criar
                <br /> com total autoria e segurança.
              </p>
              <p>
                <span className="font-bold">
                  Minha missão é que o design transforme sua realidade
                  <br /> assim como mudou a minha,
                </span>
                tirando você da dependência
                <br /> de referências para conquistar autoridade. No meu lab
                <br /> criativo, você domina o processo lógico por trás de grandes
                <br /> criações no Figma. O objetivo é ir além de "posts bonitos" e <br />
                alcançar o posicionamento necessário para ser uma
                <br /> profissional devidamente valorizada pelo mercado.
              </p>
            </div>
          </div>
          <div className="flex-1 relative 2xl:w-full xl:h-150 2xl:h-180">
            <Image
              src="/images/foto-emi-sentada.png"
              alt="Mulher branca sentada"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Seção 10 - FAQ e Card Final */}
      <section className="bg-[url('/images/bg-faq.png')] bg-cover bg-no-repeat bg-center text-white py-20">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
          <h2 className="font-articulat 2xl:text-9xl xl:text-8xl font-extrabold">FAQ</h2>
          <div className="w-full flex flex-col gap-8">
            {faq.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#403F3F] lg:text-lg xl:text-xl rounded-lg overflow-hidden transition-all font-articulat"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-4 px-8 text-left flex justify-between items-center  hover:bg-white/5 hover:cursor-pointer"
                >
                  {faq.question}
                  {activeFaq == idx ? (
                    <Image src="/icons/icon-up-faq.svg" alt="icon up faq" height={32} width={32} />
                  ) : (
                    <Image
                      src="/icons/icon-down-faq.svg"
                      alt="icon up faq"
                      height={32}
                      width={32}
                    />
                  )}
                </button>
                {activeFaq === idx && (
                  <div className="p-8 pt-4 bg-bg-pink font-bold text-white">{faq.answer}.</div>
                )}
              </div>
            ))}
          </div>

          <div className="w-full bg-[#454545] p-10 py-20 rounded-2xl flex flex-col items-center text-center gap-6 mt-10 font-articulat">
            <h2 className="xl:text-6xl lg:text-5xl font-bold">Ainda com dúvidas?</h2>
            <p className="text-lg text-center">
              Se tiver qualquer dúvida sobre sua inscrição no FigmaLab, conte com nosso suporte
              exclusivo
              <br /> via WhatsApp. Nossa equipe está pronta para te atender e tirar todas as suas
              dúvidas.
            </p>
            <Button label="Fale com o suporte" type="secondary" />
          </div>
        </div>
      </section>
      <section className="bg-bg-black flex-col flex items-center gap-8 pb-48">
        <h2 className="font-articulat text-white text-center xl:text-5xl lg:text-4xl">
          Domine o <span className="font-bold">processo criativo estratégico</span> <br /> dentro do
          <span className="font-bold"> Figma</span>, a{" "}
          <span className="text-text-pink font-bold">
            ferramenta que
            <br /> mais cresce no mercado.
          </span>
        </h2>
        <Button label="Eu quero fazer parte" size="xl" />
      </section>
      <Footer />
    </div>
  );
}
