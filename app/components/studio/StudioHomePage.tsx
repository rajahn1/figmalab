import Image from "next/image";
import Link from "next/link";

import {
  studioAboutParagraphLayouts,
  type StudioAboutParagraphLayout,
  upgradeLegacyStudioAboutParagraphs,
} from "@/lib/studio/about-copy";
import type { StudioHomeContent } from "@/lib/studio/types";
import StudioFavoritesCarousel from "./StudioFavoritesCarousel";
import StudioServicesCarousel from "./StudioServicesCarousel";

const isInternal = (url: string) => url.startsWith("/") || url.startsWith("#");

function StudioLink({
  url,
  className,
  children,
}: {
  url: string;
  className: string;
  children: React.ReactNode;
}) {
  if (isInternal(url)) {
    return (
      <Link href={url} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a href={url} className={className} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

const studioTickerItems = ["Alinhamento visual", "Criatividade", "Organização", "Design de post"];

const aboutBoldPhrases = [
  "especializada na criação de designs estratégicos e criativos para as redes sociais.",
  "é idealizadora do FigmaLab, curso criado para designers",
];

function AboutLine({
  fullText,
  line,
  boldPhrases,
}: {
  fullText: string;
  line: string;
  boldPhrases: readonly string[];
}) {
  const lineStart = fullText.indexOf(line);
  const lineEnd = lineStart + line.length;
  const boldRanges = boldPhrases
    .map((phrase) => {
      const start = fullText.indexOf(phrase);
      return { start, end: start + phrase.length };
    })
    .filter(({ start }) => start >= 0);
  const boundaries = new Set([lineStart, lineEnd]);

  boldRanges.forEach(({ start, end }) => {
    if (start > lineStart && start < lineEnd) boundaries.add(start);
    if (end > lineStart && end < lineEnd) boundaries.add(end);
  });

  const positions = [...boundaries].sort((a, b) => a - b);

  return (
    <span className="block whitespace-nowrap">
      {positions.slice(0, -1).map((start, index) => {
        const end = positions[index + 1];
        const segment = fullText.slice(start, end);
        const isBold = boldRanges.some((range) => start >= range.start && start < range.end);

        return isBold ? (
          <strong key={`${start}-${end}`} className="font-bold text-white">
            {segment}
          </strong>
        ) : (
          <span key={`${start}-${end}`}>{segment}</span>
        );
      })}
    </span>
  );
}

function ResponsiveAboutParagraph({ layout }: { layout: StudioAboutParagraphLayout }) {
  return (
    <p>
      <span className="sr-only">{layout.text}</span>
      <span aria-hidden="true" className="md:hidden">
        {layout.mobileLines.map((line) => (
          <AboutLine
            key={line}
            fullText={layout.text}
            line={line}
            boldPhrases={layout.boldPhrases}
          />
        ))}
      </span>
      <span aria-hidden="true" className="hidden md:inline">
        {layout.desktopLines.map((line) => (
          <AboutLine
            key={line}
            fullText={layout.text}
            line={line}
            boldPhrases={layout.boldPhrases}
          />
        ))}
      </span>
    </p>
  );
}

function AboutParagraph({ text, index }: { text: string; index: number }) {
  const layout = studioAboutParagraphLayouts[index];

  if (layout?.text === text) return <ResponsiveAboutParagraph layout={layout} />;

  const boldPhrase = aboutBoldPhrases.find((phrase) => text.includes(phrase));

  if (!boldPhrase) return <p>{text}</p>;

  const phraseStart = text.indexOf(boldPhrase);

  return (
    <p>
      {text.slice(0, phraseStart)}
      <strong className="font-bold text-white">{boldPhrase}</strong>
      {text.slice(phraseStart + boldPhrase.length)}
    </p>
  );
}

function ProductPriceLabel({ label }: { label: string }) {
  const normalizedLabel = label.replace(/acesso imediato/gi, "acesso vitalício");
  const [primary, ...details] = normalizedLabel.split(/\s*[·•]\s*/);
  const detail = details.join(" · ");
  const isPrice = /^R\$\s*/i.test(primary);

  return (
    <div className="inline-flex items-center rounded-[5px] border border-[#DF3DA8] px-2 py-1 font-articulat text-[8px] leading-3 text-[#fff] md:rounded-[6px] md:px-3 md:py-2 md:text-[14px] md:leading-5">
      {isPrice ? (
        <strong className="text-[11px] leading-3 font-bold text-[#fff] md:text-[20px] md:leading-6">
          {primary}
        </strong>
      ) : (
        <span className="text-[8px] text-[#fff] md:text-[14px]">{primary}</span>
      )}
      {detail ? (
        <>
          <span
            aria-hidden="true"
            className="mx-1 text-[10px] leading-none text-[#fff] md:mx-2 md:text-lg"
          >
            •
          </span>
          <span className="text-[8px] text-[#fff] md:text-[14px]">{detail}</span>
        </>
      ) : null}
    </div>
  );
}

function SectionHeading({
  start,
  accent,
  dark = false,
}: {
  start: string;
  accent: string;
  dark?: boolean;
}) {
  return (
    <h2
      className={`studio-feature-title flex items-baseline justify-center whitespace-nowrap text-center font-articulat font-light ${dark ? "text-white" : "text-[#171717]"}`}
    >
      <span className="studio-feature-title-accent font-windy mr-[0.12em] inline-block leading-none text-studio-pink">
        {start}
      </span>
      <span className="font-editorial">{accent}</span>
    </h2>
  );
}

export default function StudioHomePage({ content }: { content: StudioHomeContent }) {
  const heroLineTwoWords = content.hero.lineTwo.trim().split(/\s+/);
  const desktopHeroLineTwo = heroLineTwoWords[0] ?? "";
  const desktopHeroLineThree = heroLineTwoWords.slice(1).join(" ");
  const mobileHeroLineTwo = heroLineTwoWords.slice(0, 2).join(" ");
  const mobileHeroLineThree = heroLineTwoWords.slice(2).join(" ");
  const aboutTitleWords = `${content.about.heading} ${content.about.headingHighlight}`
    .trim()
    .split(/\s+/);
  const desktopAboutLines = [
    aboutTitleWords.slice(0, 2).join(" "),
    aboutTitleWords.slice(2, 5).join(" "),
    aboutTitleWords.slice(5, 8).join(" "),
    aboutTitleWords.slice(8).join(" "),
  ];
  const mobileAboutLines = [
    aboutTitleWords.slice(0, 4).join(" "),
    aboutTitleWords.slice(4, 8).join(" "),
    aboutTitleWords.slice(8).join(" "),
  ];
  const aboutParagraphs = upgradeLegacyStudioAboutParagraphs(content.about.paragraphs);

  return (
    <main className="bg-[#181818] font-articulat text-white">
      <section className="studio-noise studio-noise-mobile-off relative isolate overflow-hidden bg-[#201F1F] md:min-h-[700px] md:bg-[#181818]">
        <header className="relative z-20 mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 md:flex-row md:gap-0 md:px-10 md:py-6">
          <a
            href="#inicio"
            className="flex items-center gap-1.5 font-articulat text-[11px] font-normal md:gap-2 md:text-sm"
          >
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-[17px] md:size-[23px]"
            >
              <circle cx="11.5" cy="11.5" r="11.5" fill="#D82099" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.6728 5.00287C11.5497 5.01043 11.4515 5.03788 11.3222 5.10082C10.8675 5.32227 10.5427 5.86814 10.4397 6.58393C10.3882 6.94213 10.3885 7.34604 10.4406 7.77902C10.5278 8.50359 10.7635 9.32711 11.1248 10.169C11.2703 10.5081 11.3145 10.6027 11.5127 10.9982C11.6175 11.2075 11.7021 11.3775 11.7006 11.3759C11.6991 11.3744 11.6503 11.2988 11.5922 11.208C10.6827 9.78517 9.71763 8.75822 8.74062 8.1734C8.59225 8.08459 8.29912 7.9413 8.14933 7.88437C7.77178 7.74086 7.43118 7.6819 7.1103 7.70451C6.89179 7.7199 6.72401 7.76496 6.54817 7.85547C6.43242 7.91505 6.34984 7.97783 6.25818 8.07595C6.13587 8.20689 6.05132 8.37054 6.01524 8.54614C5.99558 8.64179 5.99548 8.86084 6.01503 8.97399C6.04834 9.16683 6.14699 9.39803 6.27999 9.59495C6.93855 10.5701 8.555 11.2438 10.7046 11.439C10.9245 11.459 11.4359 11.4912 11.5595 11.4928L11.6634 11.4942L11.5359 11.502C11.4657 11.5063 11.2978 11.5166 11.1627 11.5248C9.47722 11.6278 8.14571 11.9759 7.19927 12.5609C6.96543 12.7054 6.75897 12.8669 6.58031 13.0449C6.26938 13.3547 6.0884 13.6634 6.01979 14.0009C5.99566 14.1196 5.99321 14.3238 6.01456 14.4364C6.09775 14.8748 6.43717 15.1804 6.94788 15.2765C7.07291 15.3 7.40069 15.2998 7.54948 15.2762C8.33953 15.1504 9.18803 14.6392 10.0392 13.7763C10.5466 13.2619 10.972 12.7273 11.4629 11.9874C11.556 11.8471 11.6332 11.7313 11.6344 11.73C11.6356 11.7287 11.6366 11.734 11.6366 11.7418C11.6366 11.7496 11.6328 11.7559 11.6282 11.7559C11.6236 11.7559 11.6228 11.7609 11.6265 11.7669C11.631 11.7741 11.6291 11.7752 11.6207 11.77C11.6116 11.7644 11.6099 11.7666 11.6144 11.7785C11.6185 11.7892 11.617 11.7925 11.6101 11.7882C11.6037 11.7843 11.6013 11.7869 11.6039 11.7948C11.6063 11.802 11.5773 11.8674 11.5395 11.9402C11.4548 12.103 11.2878 12.454 11.1927 12.6692C10.6769 13.8358 10.4021 14.9327 10.4023 15.8244C10.4024 16.2499 10.4498 16.5804 10.5582 16.9103C10.78 17.5857 11.2389 18 11.7654 18C12.0595 18 12.3262 17.8749 12.567 17.6241C12.8514 17.3277 13.0344 16.8802 13.1104 16.2949C13.1347 16.1075 13.1348 15.5514 13.1105 15.3267C12.9969 14.2765 12.638 13.185 11.981 11.8924C11.9033 11.7394 11.841 11.6143 11.8426 11.6143C11.8443 11.6143 11.866 11.6472 11.891 11.6875C11.9159 11.7277 11.9963 11.8521 12.0696 11.9638C13.1472 13.6051 14.3241 14.7099 15.4398 15.1276C16.0212 15.3452 16.5847 15.3543 16.9803 15.1524C17.4915 14.8915 17.6793 14.3553 17.4636 13.7727C17.37 13.5199 17.2004 13.2739 16.952 13.0305C16.5163 12.6038 15.9271 12.2713 15.1444 12.0106C14.2972 11.7284 13.3004 11.5632 12.1215 11.5097C11.9942 11.5039 11.889 11.4981 11.8876 11.4968C11.8863 11.4955 11.9755 11.4915 12.086 11.4879C12.7499 11.4664 13.6705 11.3562 14.2281 11.2314C14.6516 11.1365 14.7796 11.102 15.1241 10.9897C16.4647 10.5526 17.353 9.81727 17.5307 8.99761C17.5569 8.8769 17.5548 8.64437 17.5264 8.53001C17.4761 8.32699 17.3961 8.18167 17.2591 8.04473C17.0557 7.84123 16.7794 7.72844 16.4218 7.70289C15.8707 7.66352 15.18 7.90221 14.5115 8.36312C13.6792 8.9369 12.8038 9.89745 12.0416 11.0732C11.9802 11.1679 11.9265 11.2432 11.9222 11.2405C11.9179 11.2379 11.9191 11.2254 11.9249 11.2127C11.9307 11.2001 11.9385 11.1917 11.9424 11.1941C11.9462 11.1965 11.9489 11.1931 11.9483 11.1867C11.9477 11.1803 12.003 11.0623 12.0711 10.9247C12.6662 9.72239 12.9974 8.68853 13.1089 7.68456C13.1296 7.49745 13.1378 7.04636 13.1237 6.86716C13.0891 6.42712 13.0022 6.08346 12.8493 5.78111C12.7141 5.51372 12.5551 5.32344 12.3487 5.18211C12.1409 5.03976 11.9399 4.98646 11.6728 5.00287ZM11.9076 11.253C11.911 11.2586 11.9085 11.2653 11.902 11.2679C11.8935 11.2713 11.8933 11.2729 11.9013 11.2734C11.9176 11.2745 11.9254 11.2578 11.9124 11.2498C11.9058 11.2457 11.9039 11.247 11.9076 11.253Z"
                fill="#201F1F"
              />
            </svg>

            {content.navigation.brandLabel}
          </a>
          <nav
            aria-label="Navegação principal"
            className="flex w-full items-center justify-center gap-[clamp(0.75rem,4vw,1.75rem)] whitespace-nowrap text-[10px] sm:text-xs md:w-auto md:gap-7"
          >
            {content.navigation.links.map((link) => (
              <a key={link.anchor} href={`#${link.anchor}`} className="hover:text-[#ed1593]">
                {link.label}
              </a>
            ))}
          </nav>
        </header>

        <div
          id="inicio"
          className="relative mx-auto grid max-w-6xl px-5 pb-8 pt-2 md:min-h-[590px] md:grid-cols-2 md:items-stretch md:px-10 md:pb-0 md:pt-6"
        >
          <div className="relative z-10 order-2 mt-6 flex flex-col items-center justify-center pb-4 text-center md:order-1 md:mt-0 md:h-[590px] md:items-start md:pb-0 md:pr-6 md:text-left">
            <h1 className="max-w-2xl font-editorial text-[clamp(3rem,14vw,3.5rem)] font-light leading-[0.8] tracking-[-0.05em] md:hidden">
              <span className="block">{content.hero.lineOne}</span>
              <span className="block">{mobileHeroLineTwo}</span>
              <span className="studio-hero-accent-line flex items-baseline whitespace-nowrap">
                <span>{mobileHeroLineThree}</span>
                <span className="studio-hero-accent-word font-windy ml-[0.12em] text-[1.35em] leading-none text-studio-pink">
                  {content.hero.accent}
                </span>
              </span>
            </h1>
            <h1 className="hidden max-w-2xl font-editorial text-[clamp(3.5rem,7vw,7rem)] font-light leading-[0.78] tracking-[-0.055em] md:block">
              <span className="block">{content.hero.lineOne}</span>
              <span className="block">{desktopHeroLineTwo}</span>
              <span className="block">{desktopHeroLineThree}</span>
              <span className="font-windy block translate-y-[-32%] text-[clamp(5.5rem,11vw,10rem)] text-studio-pink">
                {content.hero.accent}
              </span>
            </h1>
            <div className="flex w-full justify-center md:justify-start">
              <Image
                src={"/icons/created-by-studio-emi.svg"}
                height={28.44}
                width={201.46}
                alt="created by studio emi"
                className="studio-signature-mark"
              />
            </div>
            <StudioLink
              url={content.hero.ctaUrl}
              className="studio-cta studio-hero-cta mt-5 self-center bg-studio-pink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:mt-6 md:self-start"
            >
              {content.hero.ctaLabel}
            </StudioLink>
          </div>

          <div className="relative order-1 h-[360px] md:order-2 md:h-[590px]">
            <Image
              src="/icons/hero-star.svg"
              alt=""
              width={183}
              height={206}
              aria-hidden="true"
              className="studio-hero-star absolute left-[13%] top-[33.5%] z-0 h-auto w-20 md:left-[clamp(1rem,4.6vw,5.5rem)] md:w-[clamp(5rem,9vw,8rem)]"
            />
            <Image
              src="/icons/hero-star.svg"
              alt=""
              width={183}
              height={206}
              aria-hidden="true"
              className="studio-hero-star absolute right-[6%] top-[9%] z-0 h-auto w-24 md:right-[clamp(0.25rem,1vw,1.25rem)] md:w-[clamp(7rem,11vw,11.4375rem)]"
            />
            <Image
              src="/icons/hero-star.svg"
              alt=""
              width={183}
              height={206}
              aria-hidden="true"
              className="studio-hero-star absolute right-[clamp(2.75rem,5vw,5rem)] bottom-[34%] z-0 h-auto w-12 md:bottom-[39%] md:w-[clamp(4rem,4.2vw,5rem)]"
            />
            <Image
              src={content.hero.image.src}
              alt={content.hero.image.alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="relative z-10 object-contain object-center"
            />
          </div>
        </div>
      </section>

      <section
        id="sobre"
        className="bg-[#201F1F] px-5 pt-10 pb-16 md:bg-[#9782b4] md:px-10 md:py-28"
      >
        <div className="mx-auto grid w-full min-w-0 max-w-5xl gap-9 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-12">
          <div className="order-2 min-w-0 text-center md:order-1 md:text-left">
            <h2 className="studio-section-title mx-auto max-w-xl text-center font-light md:hidden">
              <span className="block whitespace-nowrap">{mobileAboutLines[0]}</span>
              <span className="block whitespace-nowrap">{mobileAboutLines[1]}</span>
              <strong className="block whitespace-nowrap font-semibold">
                {mobileAboutLines[2]}
              </strong>
            </h2>
            <h2 className="studio-section-title hidden max-w-xl font-light md:block">
              <span className="block whitespace-nowrap">{desktopAboutLines[0]}</span>
              <span className="block whitespace-nowrap">{desktopAboutLines[1]}</span>
              <span className="block whitespace-nowrap">{desktopAboutLines[2]}</span>
              <strong className="block whitespace-nowrap font-semibold">
                {desktopAboutLines[3]}
              </strong>
            </h2>
            <div className="studio-body-copy studio-paragraph-copy mx-auto mt-5 max-w-xl space-y-[18px] text-center text-white/90 md:mx-0 md:mt-5 md:space-y-5 md:text-left">
              {aboutParagraphs.map((paragraph, index) => (
                <AboutParagraph key={`${index}-${paragraph}`} text={paragraph} index={index} />
              ))}
            </div>
          </div>
          <div className="order-1 flex w-full min-w-0 flex-col items-center gap-3 md:order-2 md:gap-6">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden md:max-w-none">
              <Image
                src={content.about.image.src}
                alt={content.about.image.alt}
                fill
                sizes="(max-width: 768px) 90vw, 35vw"
                className="object-contain"
              />
            </div>
            <div className="w-full max-w-[280px] md:max-w-none">
              <Image
                src={"/images/barra_figma.webp"}
                alt="barra figma"
                height={42.04}
                width={457}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="bg-[#F4EDE8] px-5 py-14 text-[#201F1F] md:px-10 md:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            start={content.services.headingStart}
            accent={content.services.headingAccent}
          />
          <StudioServicesCarousel services={content.services.items} />
        </div>
      </section>

      <div className="font-articulat overflow-hidden border-y border-white/20 bg-[#ed1593] py-3 text-md font-light uppercase tracking-[0.12em]">
        <div className="studio-ticker flex w-max items-center gap-6 whitespace-nowrap">
          {[...studioTickerItems, ...studioTickerItems, ...studioTickerItems].map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center gap-6">
              {item}
              <Image
                src="/icons/icon-estrela-white.svg"
                alt=""
                width={23}
                height={26}
                aria-hidden="true"
                className="h-4 w-auto shrink-0"
              />
            </span>
          ))}
        </div>
      </div>

      <section id="produtos" className="bg-[#201F1F] px-5 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            start={content.products.headingStart}
            accent={content.products.headingAccent}
            dark
          />
          <div className="mt-10 space-y-4 md:mt-14">
            {content.products.items.map((product) => (
              <article
                key={product.title}
                className="relative flex flex-col rounded-[16px] border-[1.5px] border-[#949292] px-5 py-5 font-articulat text-[#fff] md:grid md:grid-cols-[minmax(0,1fr)_150px] md:items-center md:gap-3 md:rounded-[24px] md:px-10 md:py-[30px] lg:grid-cols-[minmax(0,1fr)_385px] lg:gap-12"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-1 left-1/2 h-[6px] w-[88px] -translate-x-1/2 rounded-full bg-[#8B7BAA] md:-left-1 md:top-1/2 md:h-[146px] md:w-[7px] md:translate-x-0 md:-translate-y-1/2"
                />
                <div className="flex flex-col items-center justify-center text-center md:items-stretch md:text-left">
                  <h3 className="font-articulat text-[1.35rem] leading-tight font-bold tracking-[-0.04em] text-[#fff] md:text-[2.75rem]">
                    {product.title}
                  </h3>
                  <p className="studio-body-copy studio-product-copy mt-1 max-w-3xl font-articulat font-normal text-[#fff] md:line-clamp-3 md:max-w-[34rem]">
                    {product.description}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-1 md:mt-6 md:gap-3">
                    <StudioLink
                      url={product.url}
                      className="inline-flex w-[78px] shrink-0 items-center justify-center whitespace-nowrap rounded-[5px] bg-studio-pink px-2 py-1.5 text-center font-articulat text-[10px] leading-3 font-normal text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:w-[150px] md:rounded-[6px] md:px-5 md:py-2 md:text-[20px] md:leading-6"
                    >
                      {product.ctaLabel}
                    </StudioLink>
                    <ProductPriceLabel label={product.priceLabel} />
                  </div>
                </div>
                <div className="relative mt-5 aspect-[385/266] w-full max-w-[640px] self-center overflow-hidden rounded-[10px] md:mt-0 md:max-w-none md:self-auto md:rounded-[16px] lg:h-[266px] lg:w-[385px] lg:justify-self-end">
                  <Image
                    src={product.image.src}
                    alt={product.image.alt}
                    fill
                    sizes="(max-width: 767px) calc(100vw - 80px), (max-width: 1023px) 150px, 385px"
                    className="object-cover"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="portfolio"
        className="bg-cover bg-center bg-no-repeat px-5 py-24 text-[#181818] md:px-10 md:py-20"
        style={{
          backgroundImage:
            'url("https://pub-d51033f4b865409099cb79bce79a2581.r2.dev/home/fundo_nuvens.webp")',
        }}
      >
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <Image
            src={content.portfolio.image.src}
            alt={content.portfolio.image.alt}
            width={content.portfolio.image.width}
            height={content.portfolio.image.height}
            sizes="(max-width: 768px) 100vw, 1024px"
            className="h-auto w-[92%] md:w-full"
          />
          <div className="mt-6 flex w-full max-w-2xl flex-nowrap justify-center gap-3 md:mt-8 md:gap-8">
            {content.portfolio.behanceImage ? (
              <StudioLink
                url={content.portfolio.behanceUrl}
                className="studio-portfolio-button group block max-w-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#181818]"
              >
                <Image
                  src={content.portfolio.behanceImage.src}
                  alt={content.portfolio.behanceImage.alt}
                  width={content.portfolio.behanceImage.width}
                  height={content.portfolio.behanceImage.height}
                  sizes="(max-width: 767px) 36vw, 320px"
                  className="h-auto w-full transition-transform group-hover:scale-[1.02]"
                />
              </StudioLink>
            ) : null}
            {content.portfolio.pinterestImage ? (
              <StudioLink
                url={content.portfolio.pinterestUrl}
                className="studio-portfolio-button group block max-w-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#181818]"
              >
                <Image
                  src={content.portfolio.pinterestImage.src}
                  alt={content.portfolio.pinterestImage.alt}
                  width={content.portfolio.pinterestImage.width}
                  height={content.portfolio.pinterestImage.height}
                  sizes="(max-width: 767px) 36vw, 320px"
                  className="h-auto w-full transition-transform group-hover:scale-[1.02]"
                />
              </StudioLink>
            ) : null}
          </div>
        </div>
      </section>

      <section className="studio-noise bg-[#181818] px-5 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading start="Nossos" accent="xodós" dark />
          <div className="mt-10 md:mt-14">
            <StudioFavoritesCarousel images={content.favorites.images} />
          </div>
          <div className="mt-10 flex items-center justify-between gap-4 md:mt-12 md:gap-6">
            <div className="flex min-w-0 flex-1 justify-start">
              <Image
                src="/images/barra_figma.webp"
                alt="Barra do Figma"
                width={686}
                height={64}
                className="h-auto w-full max-w-[190px] md:max-w-[457px]"
              />
            </div>
            <Image
              src="/icons/created-by-studio-emi.svg"
              alt="Created by Studio Emi"
              width={202}
              height={29}
              className="studio-signature-mark-compact shrink-0"
            />
          </div>
        </div>
      </section>

      <footer className="studio-body-copy font-articulat flex min-h-8 items-center justify-center gap-1 bg-[#D82099] px-5 py-4 text-center text-white md:px-10">
        <strong className="font-bold">{content.footer.boldText}</strong>
        <span className="font-normal">{content.footer.regularText}</span>
      </footer>
    </main>
  );
}
