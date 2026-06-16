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
import CarouselFeedbacks from "./components/CarouselFeedbacks";

gsap.registerPlugin(useGSAP);

export default function LandingPage() {
  const iconFigmaRef = useRef(null);
  const barFigmaHorizontalRef = useRef(null);

  const iconFigmaRefMobile = useRef(null);
  const barFigmaHorizontalRefMobile = useRef(null);

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

    gsap.to(barFigmaHorizontalRefMobile.current, {
      y: -15,
      opacity: 0.9,
      scale: 1.05,
      duration: 3,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(iconFigmaRefMobile.current, {
      y: -15,
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

  const imagesModulos = [
    "/images/modulo-1.webp",
    "/images/modulo-2.webp",
    "/images/modulo-3.webp",
    "/images/modulo-4.webp",
    "/images/modulo-5.webp",
    "/images/modulo-6.webp",
  ];

  const imagesFeedbacks = [
    "/images/FEEDBACK01.webp",
    "/images/FEEDBACK02.webp",
    "/images/FEEDBACK03.webp",
    "/images/FEEDBACK04.webp",
    "/images/FEEDBACK05.webp",
    "/images/FEEDBACK06.webp",
    "/images/FEEDBACK07.webp",
    "/images/FEEDBACK08.webp",
  ];

  const negativePoints = [
    "Continuar criando no improviso",
    "Travar no frame em branco",
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
        "Aula 7: Pen, Pencil e Figma Draw",
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
        "Aula 2: Carrossel na prática 01",
        "Aula 3: Carrossel na prática 02",
        "Aula 4: Carrossel na prática 03",
        "Aula 5: Checklist da criatividade",
        "Aula 6: O próximo nível",
      ],
    },
    {
      title: "Bônus!",
      classes: [
        "Aulão de alinhamento visual: Tudo o que você precisa saber para adicionar esse serviço na sua esteira!",
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
      {/*<Header /> */}
      {/* Seção 1 - Fundo Rosa */}
      <section
        id="section-hero"
        className=" text-[#ffffff] 2xl:pt-12 xl:pt-0 lg:px-8 lg:bg-[url('/images/section-hero-emi-opt.webp')] bg-cover bg-no-repeat bg-center aspect-[1920/1037.13] relative scroll-smooth"
      >
        <div className="flex flex-col md:flex-row pt-0 lg:pt-8 xl:pt-8 2xl:pt-8 bg-[#EB3B6A] lg:bg-transparent">
          {/*  MOBILE */}
          <div className="xl:hidden lg:hidden relative">
            <Image
              src="/images/section-hero-emi-mobile-1.webp"
              alt="Mulher branca de cabelos pretos segurando um ipad"
              width={480}
              height={388}
              priority
              className="z-10"
            />
            {/* <img src="/images/section-hero-img.png" className="w-[400px]" alt="teste" />*/}
          </div>

          <div className="bg-[#EB3B6A] lg:bg-transparent -mt-8 flex flex-col gap-6 text-center lg:text-start lg:mt-56 lg:ml-32 ml-0">
            <h1 className="font-editorial text-3xl xl:text-5xl 2xl:text-6xl leading-[92%] tracking-[-5%]">
              <span className="font-light">Aprenda</span> Figma do zero
              <br /> <span className="font-light">enquanto desenvolve um</span>
              <br />
              processo criativo <span className="font-light">de verdade.</span>
            </h1>
            <h2 className="font-articulat 2xl:text-xl xl:text-base text-sm font-normal xl:text-start text-center xl:leading-6 leading-4">
              Chega de travar na frente da tela, depender <br />
              de referências do Pinterest ou criar layouts
              <br /> no improviso. No FigmaLab você aprende <br />
              exatamente como{" "}
              <span className="font-bold">
                pensar, organizar e <br />
                construir designs de posts
              </span>{" "}
              do início ao fim.
            </h2>
            <div className="xl:mb-0 mb-12">
              <Button size="md" label="Eu quero fazer parte" content_name="CTA Hero" />
            </div>
          </div>
        </div>
        <Image
          ref={iconFigmaRef}
          src="/icons/icon-figma-pink.svg"
          alt="Icone do Figma"
          width={300}
          height={225}
          className="w-0 lg:w-72 absolute xl:w-72 xl:right-31 xl:bottom-30 2xl:right-55 2xl:bottom-30 z-20"
        />
        <Image
          ref={barFigmaHorizontalRef}
          src="/images/barra-horizontal-pink.png"
          alt="barra do figma horizontal"
          width={250}
          height={35}
          className="w-0 lg:w-50 xl:w-52 xl:bottom-50 xl:right-120 absolute mix-blend-luminosity z-20 2xl:w-72 2xl:bottom-50 2xl:right-160"
        />
      </section>

      {/* Seção 2 - Fundo Branco */}
      <section className="bg-[#212121] py-8 md:py-20 px-8 leading-[94%]">
        <div className="max-w-6xl md:mx-auto flex flex-col items-center gap-6 md:gap-12">
          <h2 className="font-articulat text-xl xl:text-5xl text-center md:leading-12 leading-5 text-bg-white">
            Hoje existem <span className="font-bold">dois caminhos</span> para
            <br /> quem trabalha com
            <span className="font-bold"> design de post:</span>
          </h2>

          <div className="w-full flex flex-col md:flex-row gap-4 md:gap-8 items-center md:items-start justify-center">
            <div className="">
              <ul className="space-y-2">
                {negativePoints.map((point, index) => (
                  <Bubble key={index} label={point} type="negative" />
                ))}
              </ul>
            </div>
            <div className="">
              <ul className="space-y-2">
                {positivePoints.map((point, index) => (
                  <Bubble key={index} label={point} type="positive" />
                ))}
              </ul>
            </div>
          </div>

          <div>
            <Image
              alt="Qual caminho voce escolhe"
              src={"/icons/qual-caminho-voce-escolhe.png"}
              width={773}
              height={207}
            />
          </div>
        </div>
      </section>

      {/* Seção 3 - Fundo Imagem Emilize */}

      <section className="flex items-end justify-center md:items-center aspect-800/1478 md:aspect-4236/2471 bg-[url('/images/bg-mobile-feedbacks.webp')] md:bg-[url('/images/section-bg-feedbacks-desktop.webp')] xl:bg-contain bg-contain bg-no-repeat bg-center text-black">
        <div className="md:ml-auto md:w-1/2 md:items-start items-center flex flex-col gap-3 md:gap-4 md:pb-0 pb-[10%]">
          <h2 className="md:text-start text-center font-editorial text-3xl sm:text-5xl xl:text-5xl 2xl:text-6xl tracking-tighter leading-7 sm:leading-11 md:leading-14 font-light xl:leading-11 2xl:leading-14">
            O problema <br className="hidden md:block" />
            não é <br className="md:hidden" /> talento, é<br className="hidden md:block" /> falta de{" "}
            <span className="text-text-pink">método</span>.
          </h2>
          <span className="text-xs text-center md:text-start xl:text-lg 2xl:text-xl sm:text-base leading-3 xl:leading-6 font-articulat">
            Design não é dom, é processo. O<br className="hidden md:block" /> FigmaLab
            <br className="md:hidden" /> é o resultado de anos
            <br className="hidden md:block" /> organizando meu
            <br className="md:hidden" /> próprio método
            <br className="hidden md:block" /> criativo de design para <br className="md:hidden" />
            social media,
            <br className="hidden md:block" /> validado em projetos reais.
            <br className="md:hidden" /> Aqui, você
            <br className="hidden md:block" /> para de copiar e aprende a
            <br className="md:hidden" /> analisar,
            <br className="hidden md:block" /> decidir e criar com consciência.
          </span>
          <span className="text-xs text-center md:text-start xl:text-lg 2xl:text-xl xl:mb-4 md:mb-8 sm:text-base leading-3 xl:leading-6">
            Saia do amadorismo e domine o método.
            <br />
            que{" "}
            <span className="font-bold">
              transforma criatividade travada
              <br className="hidden md:block" /> em <br className="md:hidden" />
              design de post estratégico.
            </span>
          </span>

          <div className="hidden md:block">
            <Button
              label="Eu quero fazer parte"
              content_name="CTA O problema não é talento, é falta de método"
            />
          </div>
          <div className="md:hidden py-4">
            <Button
              size="md"
              label="Eu quero fazer parte"
              content_name="CTA O problema não é talento, é falta de método"
            />
          </div>
        </div>
      </section>

      {/* Seção 4 */}
      <section className="flex flex-col items-center bg-[url('/images/section-beneficios-mobile.webp')] lg:bg-[url('/images/section-beneficios-opt.webp')] bg-cover bg-no-repeat bg-center aspect-[427/516] lg:aspect-[1920/1080]">
        <h2 className="font-articulat text-4xl 2xl:text-7xl xl:text-6xl font-bold text-white text-center lg:leading-12 leading-8 tracking-[-7%] pt-12 xl:pt-16 2xl:pt-30">
          O que você <span className="font-editorial italic font-light">recebe</span> <br /> no
          FigmaLab
        </h2>
      </section>
      <div className="bg-[#D82099] hidden xl:block h-24 w-full"></div>

      {/* Seção 5 - Módulos */}
      <section className="bg-[#212121] py-8 md:py-20 px-8 2xl:py-32 ">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
          <h2 className="font-articulat text-4xl xl:leading-11 leading-8 lg:leading-5 md:leading-14 2xl:text-6xl xl:text-5xl font-bold text-white text-center tracking-[-5%]">
            Veja <span className="text-[#D82099] font-bold italic">tudo</span> que <br /> você vai
            <span className="italic font-light font-editorial"> aprender</span>
          </h2>

          <Carousel images={imagesModulos} />

          <div className="flex md:flex-col md:gap-8 gap-2">
            {/* Barra de Módulos */}
            <div className="md:h-full h-[320px] justify-center flex md:flex-row flex-col gap-5 px-2 md:gap-4 bg-bg-white rounded-xl text-xs md:rounded-full md:px-8 md:py-4 text-bg-black shrink-0 overflow-x-auto md:text-xl xl:text-sm">
              {[1, 2, 3, 4, 5, 6, 7].map((mod) => (
                <button
                  key={mod}
                  onClick={() => setActiveModule(mod)}
                  // Adicionado: whitespace-nowrap e shrink-0
                  className={`hover:opacity-90 text-center hover:cursor-pointer px-3 md:px-6 md:py-2 py-1 rounded-full font-articulat transition whitespace-nowrap shrink-0 ${activeModule === mod ? "bg-[#c9408f] text-white" : "text-[#313131]"}`}
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
          </div>

          <div className="mt-6">
            <Button label="Eu quero fazer parte" size="xl" content_name="CTA Módulos" />
          </div>
        </div>
      </section>

      {/* Seção 6 */}
      <section className="xl:h-120 2xl:h-180 bg-[#F4EDE8]">
        <div className="relative 2xl:ml-72 xl:ml-48 h-full flex flex-col justify-center gap-2 md:gap-4 font-articulat items-center md:items-start md:py-0 py-12 md:pb-0 pb-68">
          <h2 className="xl:text-6xl 2xl:text-8xl 2xl:leading-19 font-light xl:leading-12 md:leading-14 leading-8 md:text-start text-center text-4xl font-editorial">
            <span className="text-text-pink">Certificado</span> <br className="hidden lg:block" />{" "}
            de <span className="italic">conclusão</span>
          </h2>
          <p className="2xl:text-2xl 2xl:leading-7 xl:text-lg text-xs md:text-start text-center font-light leading-4 xl:leading-5">
            Ao concluir sua jornada no FigmaLab, <br />
            você recebe certificado de conclusão
            <br /> para registrar sua evolução e tudo o<br /> que aprendeu ao longo do curso.
          </p>
          <Image
            src="/images/certificado-mock-opt.webp"
            width={922}
            height={699}
            alt="Certificado Mobile"
            className="absolute xl:top-10 xl:left-128 top-40 left-1/8 w-72 xl:w-[520px] 2xl:w-[720px] 2xl:left-156"
          />
        </div>
      </section>
      <Separator />
      {/* Seção 7 - Galeria */}

      <section className=" text-white flex flex-col gap-4 xl:gap-12 bg-[#212121]">
        {/* 1. CONTAINER DO TEXTO (Com limite de largura e centralizado) */}
        <div className="max-w-7xl mx-auto flex flex-col items-center px-4 pt-10 lg:pt-16">
          {" "}
          {/* Adicionei px-4 para evitar colar nas bordas no mobile */}
          <div className="flex bg-[#F4EDE8] rounded-4xl rounded-e-[38px] items-center">
            <div className="bg-[#F4EDE8] text-black pr-2 pl-6 rounded-s-3xl leading-3 lg:leading-5 text-[9px] lg:text-xl xl:pr-8 xl:pl-14">
              <span>
                Você pode continuar tentando,
                <br /> travando, duvidando... ou pode
                <br /> aprender um{" "}
                <span className="font-bold">
                  processo que vai te
                  <br /> acompanhar em qualquer projeto
                </span>{" "}
                de
                <br /> design de post, cliente ou estilo gráfico.
              </span>
            </div>
            <div className="font-editorial font-light text-[22px] px-4 leading-5.5 lg:text-4xl bg-[#EB3B6A] py-4 lg:py-8 lg:px-8 rounded-4xl rounded-tl-none lg:leading-8">
              <h2>
                Eu vou te mostrar
                <br /> o caminho, mas a
                <br /> <span className="italic font-light">execução</span> é sua.
              </h2>
            </div>
          </div>
          <h2 className="font-articulat font-semibold text-center lg:text-5xl text-2xl leading-6 mt-8 lg:mt-16 lg:leading-10">
            Veja os carrosséis que você <br />
            vai aprender no curso
          </h2>
        </div>

        <div className="flex flex-col  w-full">
          <InfiniteCarousel
            pathImage="/images/carrossel-5.webp"
            width={4096}
            height={853}
            direction="forward"
          />
          <InfiniteCarousel
            pathImage="/images/carrossel-6.webp"
            width={4096}
            height={853}
            direction="backward"
          />
          <InfiniteCarousel
            pathImage="/images/carrossel-7.webp"
            width={4096}
            height={853}
            direction="forward"
          />
          <InfiniteCarousel
            pathImage="/images/carrossel-8.webp"
            width={4096}
            height={853}
            direction="backward"
          />
        </div>
      </section>
      {/* FEEDBACKS */}
      <section className="bg-text-pink flex flex-col items-center justify-center gap-2 lg:gap-8 py-8 md:py-20 relative">
        <Image
          src="/images/ferramentas-figma-2.png"
          alt="ferramentas figma"
          width={162}
          height={978}
          className="absolute top-4 xl:w-16 left-0 mix-blend-lighten hidden xl:block"
        />
        <Image
          src="/images/ferramentas-figma-2.png"
          alt="ferramentas figma"
          width={162}
          height={978}
          className="absolute rotate-180 xl:w-16 right-0 bottom-4 mix-blend-lighten hidden xl:block"
        />
        <div className="flex mt-4 gap-8 xl:gap-32 items-center justify-center font-editorial font-bold text-4xl  xl:text-8xl xl:leading-13 2xl:text-9xl 2xl:leading-16 leading-7 md:leading-6 text-white relative">
          <h2 className="font-articulat">Feed</h2>
          <Image
            className="w-11 xl:w-36 xl:left-50 xl:-top-8 -top-1 left-18 absolute 2xl:left-64 2xl:w-42 2xl:-top-12"
            src={"/images/emoji-feedbacks.webp"}
            alt="icon coracao"
            width={406.07}
            height={372.8}
          />
          <h2 className="italic font-light">backs</h2>
        </div>
        <CarouselFeedbacks images={imagesFeedbacks} />
        {/*
        <div className="bg-[#C00E83] lg:rounded-4xl lg:py-16 lg:px-24 py-1 px-4 rounded-lg max-w-[320px]">
        </div>
          */}
      </section>

      {/* Seção 8 - Preço e Bônus */}
      <section className="bg-bg-black text-white py-8 md:py-20 px-8 xl:py-32">
        <div className="flex flex-col md:gap-12 gap-4 items-center xl:items-center">
          <div className="flex justify-center items-center md:flex-row flex-col gap-8 md:gap-8 xl:gap-12 2xl:gap-20 ">
            <div className="flex xl:items-start gap-4 flex-col items-center">
              <Image
                alt="Figma Lab Logo"
                src={"/icons/logo-figma-lab.svg"}
                width={238.53}
                height={57.86}
                className="xl:hidden"
              />
              <Image
                alt="Figma Lab Logo"
                src={"/images/FigmaLabLogo-desktop.webp"}
                width={670.29}
                height={165.03}
                className="hidden xl:block w-100"
              />
              <Card
                bgColor="bg-white"
                data={benefits}
                icon="/icons/check-box-icon.svg"
                textColor="black"
                type="second"
              />
            </div>
            <div className="flex flex-col items-center gap-4 xl:gap-8">
              <CardPrice />
              <Image
                src={"/icons/kiwify-compra-segura.svg"}
                alt="logo kiwify"
                width={140.84}
                height={14.3}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seção 9 */}
      <section className="bg-[#F4EDE8] py-8 md:py-20 px-8 relative overflow-hidden xl:py-30 2xl:py-36">
        {/*  ESTRELAS */}
        <div className="absolute rotate-45 bottom-40 -left-10 xl:-left-16 xl:bottom-140">
          <Image
            src={"/icons/estrela-negra.svg"}
            width={90}
            height={32}
            alt="estrela icone negra"
            className="object-contain xl:w-36"
          />
        </div>

        <div className="absolute bottom-70 left-2 rotate-[-136.35deg] xl:bottom-124">
          <Image
            src={"/icons/estrela-negra.svg"}
            width={40}
            height={32}
            alt="estrela icone negra"
            className="object-contain xl:w-12"
          />
        </div>

        <div className="absolute rotate-12 bottom-10 -right-10 xl:-right-12">
          <Image
            src={"/icons/estrela-negra.svg"}
            width={90}
            height={32}
            alt="estrela icone negra"
            className="object-contain xl:w-36"
          />
        </div>

        <div className="absolute bottom-40 right-2 rotate-[-43.65deg] xl:bottom-55 xl:right-6">
          <Image
            src={"/icons/estrela-negra.svg"}
            width={40}
            height={32}
            alt="estrela icone negra"
            className="object-contain"
          />
        </div>

        {/*  FIM ESTRELAS */}
        <div className="2xl:max-w-6xl gap-8 xl:max-w-5xl md:mx-auto flex-col flex md:flex-row items-center 2xl:gap-10 xl:flex-row-reverse xl:gap-12">
          <div className="md:flex-1 flex flex-col items-center md:items-start gap-2 xl:gap-4">
            <h2 className="font-articulat font-bold 2xl:text-7xl text-4xl xl:text-7xl md:text-start text-center md:leading-none xl:leading-14 leading-8 tracking-[-6%]">
              {" "}
              <span className="text-text-pink">Quem</span> vai <br className="hidden xl:block" /> te
              <br className="xl:hidden" />{" "}
              <span className="font-editorial italic font-light">ensinar</span>
              <br className="hidden xl:block" /> tudo isso?
            </h2>
            <div className="flex flex-col gap-4 2xl:text-xl xl:text-lg text-[11px] text-center md:text-start text-balance leading-3 lg:leading-6 font-articulat">
              <p>
                Prazer, eu sou a Emi, designer, fundadora do
                <br /> Studio Emi Design e criadora do FigmaLab. Nos
                <br /> últimos 4 anos desenvolvi projetos para mais de
                <br /> 200 nichos diferentes e uma das maiores lições
                <br />
                que aprendi é que designers não travam por falta
                <br /> de criatividade, travam por falta de processo.
              </p>
              <p>
                Eu também já fiquei perdida na frente da tela, sem
                <br /> saber como transformar referências em layouts
                <br /> criativos e estratégicos. Foi organizando meu
                <br /> processo criativo e dominando o Figma que
                <br /> minha forma de criar mudou completamente. E<br /> hoje ensino esse mesmo
                caminho para outras
                <br /> designers dentro do FigmaLab.
              </p>
            </div>
          </div>
          <div className="relative mr-4 xl:mr-0 xl:w-[580px] w-[272px] h-[290.56px] xl:mt-16 xl:flex xl:items-center">
            <Image
              src="/images/quem-vai-te-ensinar-mobile.webp"
              alt="Mulher branca sentada"
              fill
              className="object-cover xl:hidden"
            />
            <Image
              src="/images/quem-vai-te-ensinar-desktop.webp"
              alt="Mulher branca sentada"
              width={938.96}
              height={985.58}
              className="object-cover hidden xl:block"
            />
          </div>
        </div>
      </section>

      {/* Seção 10 - FAQ e Card Final */}
      <section className="relative text-white md:py-20 py-8 overflow-hidden bg-bg-black relative">
        <Image
          alt="lirio"
          src={"/images/lirio.webp"}
          width={129.16}
          height={134.28}
          className="absolute bottom-0 -left-15 xl:w-80 xl:-left-40 2xl:w-100"
        />
        <Image
          alt="lirio"
          src={"/images/lirio.webp"}
          width={129.16}
          height={134.28}
          className="absolute bottom-20 rotate-[-60deg] -right-15 xl:w-80 xl:bottom-80 xl:-right-36 2xl:w-100"
        />
        <div className="md:max-w-6xl md:mx-auto flex flex-col items-center gap-6 md:gap-12">
          <h2 className="font-articulat 2xl:text-9xl xl:text-8xl font-bold text-4xl">
            Perguntas <span className="font-editorial font-light italic">frequentes</span>
          </h2>
          <div className="md:w-full w-[88%] flex flex-col gap-8">
            {faq.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#403F3F] text-sm lg:text-lg xl:text-xl rounded-lg overflow-hidden transition-all font-articulat"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-4 py-3 md:py-4 md:px-8 text-left flex justify-between items-center  hover:bg-white/5 hover:cursor-pointer"
                >
                  {faq.question}
                  {activeFaq == idx ? (
                    <Image
                      className="md:w-8 w-4"
                      src="/icons/icon-up-faq.svg"
                      alt="icon up faq"
                      height={32}
                      width={32}
                    />
                  ) : (
                    <Image
                      className="md:w-8 w-4"
                      src="/icons/icon-down-faq.svg"
                      alt="icon up faq"
                      height={32}
                      width={32}
                    />
                  )}
                </button>
                {activeFaq === idx && (
                  <div className="leading-4 xl:leading-6 text-balance md:p-8 p-4 pt-4 bg-bg-pink text-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex xl:bg-[url('/images/pasta-desktop.webp')] bg-[url('/images/pasta.png')] bg-cover bg-center bg-no-repeat aspect-[334.26/171.53] xl:aspect-[1594/818] w-94 xl:items-center justify-center xl:gap-16 gap-2 mt-4 xl:w-full">
            <div className="mt-10 ">
              <h2 className="font-articulat font-bold text-[#F4EDE8] xl:text-8xl xl:leading-18 text-4xl leading-7">
                Ficou
                <br /> com
                <br /> alguma
                <br /> <span className="text-[#353535]">dúvida</span>?
              </h2>
            </div>
            <div className="flex flex-col gap-2 mt-10 xl:gap-8">
              <p className="font-articulat text-white text-xs xl:text-2xl xl:leading-6 leading-3 font-normal">
                Se tiver qualquer dúvida sobre
                <br /> sua inscrição no FigmaLab, conte
                <br /> com nosso suporte exclusivo via
                <br /> WhatsApp. Nossa equipe está
                <br /> pronta para te atender e tirar
                <br /> todas as suas dúvidas.
              </p>
              <Button
                label="Fale com o suporte"
                type="support"
                content_name="CTA WhatsApp"
                size="support"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
