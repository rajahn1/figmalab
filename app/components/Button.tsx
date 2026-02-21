import Image from "next/image";

export interface btnProps {
  label: string;
}

export default function Button({ label }: btnProps) {
  return (
    <div className="relative inline-flex items-center justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] -z-10 pointer-events-none">
        <Image
          src="/images/layer-blur-button.png"
          alt="Efeito Blur"
          fill
          className="object-contain"
        />
      </div>

      <button className=" text-white relative z-10 w-max font-bold bg-bg-button rounded-full py-4 px-8 text-xl cursor-pointer">
        {label}
      </button>
    </div>
  );
}
