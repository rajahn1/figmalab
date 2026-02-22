import Button from "./Button";

export default function CardPrice() {
  return (
    <div className="flex flex-col bg-bg-white justify-center items-center gap-2 font-articulat rounded-4xl border-text-pink border-4 w-lg">
      <h2 className="text-white font-extrabold bg-text-pink px-4 py-1 rounded-sm xl:text-xl 2xl:text-3xl text-center mb-6">
        OFERTA VÁLIDA POR 24H!
      </h2>
      <div className="relative">
        <svg
          className="absolute -left-8 top-1"
          width="228"
          height="25"
          viewBox="0 0 228 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.140747 22.9336L227.633 1.49311" stroke="#CC0A0A" strokeWidth="3" />
        </svg>
        <span className="text-bg-black xl:text-2xl 2xl:text-4xl">de R$297</span>
      </div>
      <span className="text-[#9D9D9D] xl:text-2xl 2xl:text-4xl">Por apenas 12x de</span>
      <div className="text-black font-extrabold relative">
        <span className="absolute xl:text-2xl 2xl:text-3xl -left-10 top-3">R$</span>
        <span className="xl:text-7xl 2xl:text-9xl tracking-tighter">20,37</span>
      </div>
      <span className="font-semibold text-[#9D9D9D] xl:text-2xl 2xl:text-4xl">
        ou R$197 à vista
      </span>
      <div className="mt-4">
        <Button size="xl" label="Garanta na pré-venda" />
      </div>
    </div>
  );
}
