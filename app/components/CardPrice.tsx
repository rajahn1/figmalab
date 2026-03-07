import Button from "./Button";

export default function CardPrice() {
  return (
    <div className="flex flex-col bg-bg-white justify-center items-center gap-1 md:gap-2 font-articulat rounded-4xl border-text-pink border-4 md:w-lg md:py-0 py-6">
      {/*
      
      <h2 className="text-white text-xl font-extrabold bg-text-pink px-4 py-1 rounded-sm xl:text-xl 2xl:text-3xl text-center mb-6">
        OFERTA VÁLIDA POR 24H!
      </h2>
      <div className="relative">
        <svg
          className="
          absolute
          -left-2 md:-left-8
          top-1
          w-36
          sm:w-32
          md:w-56
          2xl:w-64
          h-auto
          "
          viewBox="0 0 228 25"
          fill="none"
        >
          <path d="M0.140747 22.9336L227.633 1.49311" stroke="#CC0A0A" strokeWidth="3" />
        </svg>
        <span className="text-bg-black text-3xl xl:text-2xl 2xl:text-4xl">de R$397</span>
      </div>
      */}

      <span className="text-[#9D9D9D] text-2xl xl:text-2xl 2xl:text-4xl">Por apenas 12x de</span>
      <div className="text-black font-extrabold relative ml-7">
        <span className="absolute text-3xl xl:text-2xl 2xl:text-3xl -left-9 md:-left-10 top-3">
          R$
        </span>
        <span className="text-8xl xl:text-7xl 2xl:text-[10rem] tracking-tighter">30,72</span>
      </div>
      <span className="font-semibold text-2xl text-[#9D9D9D] xl:text-2xl 2xl:text-5xl xl:mt-5">
        ou R$297 à vista
      </span>

      <div className="mt-4 xl:mt-14">
        <Button type="terciary" size="terciary" label="Garanta sua vaga" />
      </div>
    </div>
  );
}
