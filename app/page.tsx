"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Button from "./components/Button";
import Image from "next/image";
import Bubble from "./components/Bubble";
import Card from "./components/Card";
gsap.registerPlugin(useGSAP);

export default function LandingPage() {
  const iconFigmaRef = useRef(null);
  useGSAP(() => {
    gsap.to(iconFigmaRef.current, {
      y: -30,
      opacity: 0.9,
      scale: 1.05,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
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
    "Pensar estrategicamente antes de abrir o Figma;",
    "Analisar o briefing com olhar de especialista;",
    "Construir repertório e moodboards inteligentes;",
    "Aumentar seu repertório de estilos de design;",
    "Dominar o Figma do zero ao avançado;",
    "Transformar qualquer referência em arte autoral;",
    "Evoluir junto a uma comunidade de designers criativos.",
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

  const [activeModule, setActiveModule] = useState(1);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="w-full font-articulat text-[#313131]">
      {/* Seção 1 - Fundo Rosa */}
      <section className="relative bg-text-pink text-[#ffffff] pt-20 px-8">
        <Image
          className="mix-blend-lighten absolute top-0 left-0 rotate-180"
          src="/images/barra-ferramentas-vertical.png"
          alt="barra de ferramentas do figma"
          height={9.73}
          width={51.67}
        />
        <Image
          className="mix-blend-lighten absolute bottom-0 right-0"
          src="/images/barra-ferramentas-vertical.png"
          alt="barra de ferramentas do figma"
          height={9.73}
          width={51.67}
        />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 flex flex-col items-start gap-6">
            <h1 className="font-editorial text-7xl">
              Organize suas <br /> ideias e destrave seu
              <br /> processo criativo no <br />
              design de post.
            </h1>
            <h2 className="text-xl">
              Aprenda a <span className="font-bold">pensar como designer</span> e use o <br />
              Figma com inteligência. O FigmaLab transforma o seu caos criativo em{" "}
              <span className="font-bold">clareza</span>, a cópia em{" "}
              <span className="font-bold">autoria</span> e a tentativa em{" "}
              <span className="font-bold">método</span>, mesmo que hoje você dependa 100% de
              referências prontas.
            </h2>
            <Button label="Quero entrar para o Lab" />
          </div>
          <div className="relative flex-1 flex items-center justify-center">
            <Image
              src="/images/section-hero-img.png"
              alt="Mulher branca de cabelos pretos segurando um ipad "
              width={700}
              height={800}
              priority
              className="z-10"
            />
            <Image
              src="/images/print-interface.png"
              alt="Interface do figma"
              width={178}
              height={184.5}
              className="absolute z-0 -right-11 top-45 mix-blend-soft-light"
            />
            <Image
              ref={iconFigmaRef}
              src="/icons/icon-figma.png"
              alt="Icone do Figma"
              width={300}
              height={225}
              className="absolute -right-15 bottom-50 z-20"
            />
          </div>
        </div>
      </section>

      {/* Seção 2 - Fundo Branco */}
      <section className="bg-[#f4ede8] py-20 px-8">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
          <h2 className="font-articulat text-5xl text-center">
            Hoje existem <span className="font-bold">dois caminhos</span> para
            <br /> quem trabalha com
            <span className="font-bold"> design de post:</span>
          </h2>
          <div className="w-full flex flex-col md:flex-row gap-8 justify-center">
            <div className="flex-1">
              <ul className="list-disc pl-5 space-y-2">
                {negativePoints.map((point, index) => (
                  <Bubble key={index} label={point} type="negative" />
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <ul className="list-disc pl-5 space-y-2">
                {positivePoints.map((point, index) => (
                  <Bubble key={index} label={point} type="positive" />
                ))}
              </ul>
            </div>
          </div>
          <h2 className="text-bg-black text-7xl font-extrabold">
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
                className="absolute right-68 -top-2 z-10 pointer-events-none"
              />

              {/* escolhe → frente */}
              <span className="relative z-0 text-text-pink ml-10">escolhe?</span>
            </span>
          </h2>
        </div>
      </section>

      {/* Seção 3 - Fundo Preto */}
      <section className="bg-[url('/images/section-bg-feedbacks.png')] bg-cover bg-center text-[#ffffff] py-20 px-8">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 relative w-full h-80 bg-white/10 rounded-lg flex items-center justify-center">
              <Image
                src="/images/foto-emi.png"
                alt="Descrição da imagem"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 flex flex-col items-start gap-4">
              <h2 className="font-editorial text-6xl">
                O problema não <br /> é talento, é falta
                <br /> de <span className="text-text-pink">método</span>.
              </h2>
              <span className="text-lg">
                Design não é dom, é processo. O<br /> FigmaLab é o resultado de anos
                <br /> organizando meu próprio método
                <br /> criativo de design para social media
                <br />, validado em projetos reais. Aqui, você
                <br /> para de copiar e aprende a analisar,
                <br /> decidir e criar com consciência.
              </span>
              <span className="text-lg">
                Saia do amadorismo e domine o método
                <br /> que{" "}
                <span className="font-bold">
                  transforma criatividade travada
                  <br /> em design de post estratégico.
                </span>
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            <Button label="Quero entrar para o Lab" />
          </div>
        </div>
      </section>

      {/* Seção 4 */}
      <section className="bg-[#f4ede8] py-20 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 flex flex-col items-start gap-6">
            <h2 className="font-['PP_Editorial_New'] text-4xl font-bold">
              O que você vai dominar no FigmaLab:
            </h2>
            <Card
              data={skills}
              icon="/icons/icon-check-pink.svg"
              bgColor="bg-black"
              textColor="white"
            />
            <Button label="Eu quero fazer parte" />
          </div>
          <div className="flex-1 relative w-full h-80 bg-[#313131]/10 rounded-lg flex items-center justify-center">
            <Image
              src="/images/foto-emi.png"
              alt="Descrição da imagem"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Seção 5 - Módulos */}
      <section className="bg-bg-black py-20 px-8">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
          <h2 className="font-['PP_Editorial_New'] text-4xl font-bold text-white">
            Veja tudo que você vai aprender:
          </h2>

          {/* Carrossel Falso */}
          <div className="w-full flex items-center justify-between bg-gray-100 p-4 rounded-lg h-40">
            <button className="p-2 bg-white rounded-full shadow">←</button>
            <span>[Fotos do Carrossel]</span>
            <button className="p-2 bg-white rounded-full shadow">→</button>
          </div>

          {/* Barra de Módulos */}
          <div className="flex gap-4 bg-bg-white rounded-full px-8 py-4 text-bg-blacK w-max overflow-x-auto">
            {[1, 2, 3, 4, 5].map((mod) => (
              <button
                key={mod}
                onClick={() => setActiveModule(mod)}
                className={`px-6 py-2 rounded-full font-bold transition ${activeModule === mod ? "bg-[#c9408f] text-white" : "bg-gray-200 text-[#313131]"}`}
              >
                Módulo {mod}
              </button>
            ))}
          </div>

          {/* Card do Módulo Ativo */}
          <div className="w-full flex flex-col md:flex-row bg-[#f4ede8] rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <div className="flex-1 p-8 bg-[#313131] text-white flex flex-col justify-center items-start">
              <span className="text-5xl mb-4">📦</span>
              <h3 className="text-2xl font-bold">Módulo {activeModule}</h3>
              <p>Título descritivo do módulo.</p>
            </div>
            <div className="flex-1 p-8">
              <h4 className="font-bold mb-4 text-lg">Aulas:</h4>
              <ul className="space-y-3">
                <li className="p-3 bg-white rounded shadow-sm">Aula 1 - Introdução</li>
                <li className="p-3 bg-white rounded shadow-sm">Aula 2 - Conceitos</li>
                <li className="p-3 bg-white rounded shadow-sm">Aula 3 - Prática</li>
              </ul>
            </div>
          </div>

          <Button label="Eu quero fazer parte" />
        </div>
      </section>

      {/* Seção 6 */}
      <section className="bg-[#f4ede8] py-20 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 flex flex-col items-start gap-4">
            <h2 className="font-['PP_Editorial_New'] text-4xl font-bold">
              Certificado de conclusão
            </h2>
            <p className="text-lg">
              Valide sua evolução e conquiste o reconhecimento oficial do seu domínio no Figma. Ao
              concluir sua jornada no Lab, você recebe certificações que comprovam seu nível técnico
              e sua autoridade como designer estrategista no mercado.
            </p>
          </div>
          <div className="flex-1 relative w-full h-80 bg-[#313131]/10 rounded-lg flex items-center justify-center">
            <Image
              src="/images/foto-emi.png"
              alt="Descrição da imagem"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Seção 7 - Galeria */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
          <div className="text-center">
            <h2 className="font-['PP_Editorial_New'] text-4xl font-bold">
              Eu vou te mostrar o caminho. Mas a execução é sua.
            </h2>
            <p className="mt-2 text-lg underline">
              Veja alguns carrosséis que eu vou te ensinar durante o curso:
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 w-full">
            {/* 3 linhas x 6 cards = 18 itens */}
            {Array.from({ length: 18 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center shadow-sm"
              >
                [Img {i + 1}]
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 8 - Preço e Bônus */}
      <section className="bg-[#f4ede8] py-20 px-8">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-12">
          <h2 className="font-['PP_Editorial_New'] text-4xl font-bold text-center">
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
