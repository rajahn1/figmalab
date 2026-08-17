import Image from "next/image";
import Button from "../Button";

const questions = [
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

export default function FaqSupport() {
  return (
    <section className="deferred-section relative overflow-hidden bg-bg-black py-8 text-white md:py-20">
      <Image
        alt="lírio"
        src="/images/lirio.webp"
        width={129.16}
        height={134.28}
        className="absolute -bottom-4 -left-15 xl:-left-40 xl:w-84 2xl:w-100"
      />
      <Image
        alt="lírio"
        src="/images/lirio.webp"
        width={129.16}
        height={134.28}
        className="absolute -right-15 bottom-12 rotate-[-60deg] xl:-right-36 xl:bottom-80 xl:w-84 2xl:w-100"
      />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 md:gap-12">
        <h2 className="font-articulat text-4xl font-bold xl:text-8xl 2xl:text-9xl">
          Perguntas <span className="font-editorial font-light italic">frequentes</span>
        </h2>
        <div className="flex w-[88%] flex-col gap-4 md:w-full">
          {questions.map((faq) => (
            <details
              key={faq.question}
              name="figmalab-faq"
              className="group overflow-hidden rounded-lg bg-[#403F3F] text-sm font-articulat transition-all lg:text-lg xl:text-xl"
            >
              <summary className="flex w-full cursor-pointer list-none items-center justify-between px-4 py-3 text-left hover:bg-white/5 md:px-8 md:py-4 [&::-webkit-details-marker]:hidden">
                {faq.question}
                <Image
                  className="w-4 group-open:hidden md:w-8"
                  src="/icons/icon-down-faq.svg"
                  alt=""
                  height={32}
                  width={32}
                />
                <Image
                  className="hidden w-4 group-open:block md:w-8"
                  src="/icons/icon-up-faq.svg"
                  alt=""
                  height={32}
                  width={32}
                />
              </summary>
              <div className="bg-bg-pink p-4 pt-4 leading-4 text-balance text-white xl:leading-6 md:p-8">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
        <div className="mt-4 flex aspect-[334.26/171.53] w-94 justify-center gap-2 bg-[url('/images/pasta.png')] bg-cover bg-center bg-no-repeat xl:w-full xl:aspect-[1594/818] xl:items-center xl:gap-16 xl:bg-[url('/images/pasta-desktop.webp')]">
          <div className="mt-10">
            <h2 className="font-articulat text-4xl leading-7 font-bold text-[#F4EDE8] xl:text-8xl xl:leading-18">
              Ficou
              <br />
              com
              <br />
              alguma
              <br />
              <span className="text-[#353535]">dúvida</span>?
            </h2>
          </div>
          <div className="mt-10 flex flex-col gap-2 xl:gap-8">
            <p className="font-articulat text-xs leading-3 font-normal text-white xl:text-2xl xl:leading-6">
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
  );
}
