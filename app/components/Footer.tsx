import Image from "next/image";
import type { LandingPageContent } from "@/lib/landing/types";

export default function Footer({ data }: { data: LandingPageContent["footer"] }) {
  return (
    <footer className="flex justify-center md:justify-between md:px-24 md:py-6 py-3 bg-[#EB3B6A] items-center text-white md:text-base text-[10px]">
      <span>
        <span className="font-bold">
          {data.companyName} {new Date().getFullYear()}
        </span>{" "}
        &copy; {data.rightsText}
      </span>
      <a href="#section-hero" className="items-center gap-4 hidden md:flex scroll-smooth">
        <span>{data.backToTopLabel}</span>
        <Image
          src="/icons/icon-arrow-up-pink.svg"
          alt="Icon arrow up"
          className="w-6"
          width={24}
          height={24}
        />
      </a>
    </footer>
  );
}
