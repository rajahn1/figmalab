import Image from "next/image";
import BlackFridayTicker from "../BlackFridayTicker";

const faqItems = [
  {
    question: "Preciso saber usar o Figma para fazer o curso?",
    answer:
      "Não! O FigmaLab começa do zero e avança para recursos e técnicas mais elaborados. Também é indicado para quem já utiliza a ferramenta e deseja desenvolver o processo criativo.",
  },
  {
    question: "Quando recebo acesso às aulas?",
    answer:
      "Após a confirmação do pagamento, você recebe as informações de acesso por e-mail. Os dois primeiros módulos são liberados de imediato e o restante dos módulos após 7 dias.",
  },
  {
    question: "Por quanto tempo tenho acesso?",
    answer:
      "O acesso ao FigmaLab é válido por 1 ano, incluindo as atualizações disponibilizadas durante esse período.",
  },
  {
    question: "O curso tem certificado?",
    answer: "Sim! Você recebe um certificado de conclusão ao finalizar o curso.",
  },
  {
    question: "Até quando posso aproveitar o desconto?",
    answer:
      "A BlackLab acontece de 23 a 27 de novembro. Após o encerramento da campanha, a condição especial de R$ 227 deixa de estar disponível.",
  },
] as const;

export default function FaqSupport() {
  return (
    <section className="deferred-section relative overflow-hidden bg-[#201F1F] pt-4 text-white md:pt-10 lg:pt-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 md:gap-12">
        <h2 className="whitespace-nowrap font-articulat text-[clamp(1.75rem,7vw,5.9375rem)] font-bold">
          Perguntas <span className="font-articulat text-[#DF3DA8]">frequentes</span>
        </h2>
        <div className="flex w-[88%] flex-col gap-4 md:w-full">
          {faqItems.map((item) => (
            <details
              key={item.question}
              name="figmalab-faq"
              className="group overflow-hidden rounded-lg bg-[#403F3F] text-sm font-articulat transition-colors open:bg-transparent lg:text-lg xl:text-xl"
            >
              <summary className="flex w-full cursor-pointer list-none items-center justify-between px-4 py-3 text-left transition-colors hover:bg-white/5 group-open:bg-[#D82099] group-open:hover:bg-[#D82099] md:px-8 md:py-4 [&::-webkit-details-marker]:hidden">
                {item.question}
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
              <div className="bg-transparent p-4 pt-4 leading-4 text-balance text-white xl:leading-6 md:p-8">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>

      <div className="mt-12 md:mt-20">
        <BlackFridayTicker />
      </div>
    </section>
  );
}
