import Image from "next/image";
import InfiniteCarousel from "../InfiniteCarousel";
import Separator from "../Separator";

export default function CertificateGallery() {
  return (
    <>
      <section className="deferred-section bg-[#F4EDE8] xl:h-120 lg:h-120 2xl:h-180">
        <div className="relative flex h-full flex-col items-center justify-center gap-1 py-12 pb-68 font-articulat md:items-start md:gap-4 md:py-0 md:pb-0 lg:ml-36 xl:ml-48 2xl:ml-72">
          <h2 className="text-center font-editorial text-3xl leading-8 font-light tracking-tighter md:text-start md:leading-14 lg:text-5xl xl:text-6xl xl:leading-12 2xl:text-8xl 2xl:leading-19">
            <span className="text-text-pink">Certificado</span> <br className="hidden lg:block" />{" "}
            de <span className="italic">conclusão</span>
          </h2>
          <p className="text-center text-xs leading-3 font-light md:text-start lg:text-lg lg:leading-4 xl:text-lg xl:leading-5 2xl:text-2xl 2xl:leading-7">
            Ao concluir sua jornada no FigmaLab, <br />
            você recebe certificado de conclusão
            <br /> para registrar sua evolução e tudo o<br /> que aprendeu ao longo do curso.
          </p>
          <Image
            src="/images/certificado-mock-opt.webp"
            width={922}
            height={699}
            alt="Certificado Mobile"
            className="absolute top-40 left-1/8 w-72 lg:top-10 lg:left-124 lg:w-[520px] xl:top-10 xl:left-128 xl:w-[520px] 2xl:left-156 2xl:w-[720px]"
          />
        </div>
      </section>
      <Separator />

      <section className="deferred-section flex flex-col gap-4 bg-[#212121] text-white xl:gap-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-4 pt-10 lg:pt-16">
          <div className="flex items-center rounded-4xl rounded-e-[38px] bg-[#F4EDE8]">
            <div className="rounded-s-3xl bg-[#F4EDE8] pr-2 pl-6 text-[9px] leading-3 text-black lg:pl-14 lg:text-xl lg:leading-5 xl:pr-8">
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
            <div className="rounded-4xl rounded-tl-none bg-[#EB3B6A] px-4 py-4 font-editorial text-[22px] leading-5.5 font-light lg:px-8 lg:py-8 lg:text-4xl lg:leading-8">
              <h2>
                Eu vou te mostrar
                <br /> o caminho, mas a
                <br /> <span className="font-light italic">execução</span> é sua.
              </h2>
            </div>
          </div>
          <h2 className="mt-8 text-center font-articulat text-2xl leading-6 font-semibold lg:mt-16 lg:text-5xl lg:leading-10">
            Veja os carrosséis que você <br />
            vai aprender no curso
          </h2>
        </div>
        <div className="flex w-full flex-col">
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
    </>
  );
}
