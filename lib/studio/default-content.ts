import type { StudioHomeContent } from "./types";
import { studioAboutParagraphLayouts } from "./about-copy";

export const defaultStudioHome: StudioHomeContent = {
  seo: {
    title: "Studio Emi — Design para marcas criativas",
    description:
      "Studio de design feito por mulheres, para mulheres. Conheça nossos serviços, produtos e cursos.",
    socialImage: {
      src: "https://pub-d51033f4b865409099cb79bce79a2581.r2.dev/landing/20346bb5-578b-4949-8aa1-d964ad7412d7/hero_home.webp",
      alt: "Emi, fundadora do Studio Emi",
      width: 786,
      height: 929,
    },
  },
  navigation: {
    brandLabel: "Studio Emi",
    links: [
      { label: "Sobre", anchor: "sobre" },
      { label: "Serviços", anchor: "servicos" },
      { label: "Produtos", anchor: "produtos" },
      { label: "Portfólio", anchor: "portfolio" },
    ],
  },
  hero: {
    lineOne: "Boas ideias",
    lineTwo: "merecem um olhar",
    accent: "criativo",
    credit: "Criado por Studio Emi",
    ctaLabel: "Fale com a gente",
    ctaUrl: "https://wa.me/5500000000000",
    image: {
      src: "/images/foto-emi-sentada.webp",
      alt: "Emi trabalhando em seu notebook",
      width: 786,
      height: 929,
    },
  },
  about: {
    heading: "Somos um estúdio de design feito por mulheres,",
    headingHighlight: "para mulheres.",
    paragraphs: studioAboutParagraphLayouts.map(({ text }) => text),
    image: {
      src: "/images/quem-vai-te-ensinar-desktop.webp",
      alt: "Emi, designer e fundadora do Studio Emi",
      width: 1600,
      height: 900,
    },
  },
  services: {
    headingStart: "Nossos",
    headingAccent: "serviços",
    items: [
      {
        ctaLabel: "Solicite orçamento",
        url: "https://wa.me/5500000000000",
        image: {
          src: "/images/carrossel-5.webp",
          alt: "Exemplos de design de posts criados pelo Studio Emi",
          width: 3838,
          height: 685,
        },
      },
      {
        ctaLabel: "Solicite orçamento",
        url: "https://wa.me/5500000000000",
        image: {
          src: "/images/carrossel-6.webp",
          alt: "Exemplos de alinhamento visual criados pelo Studio Emi",
          width: 3838,
          height: 685,
        },
      },
      {
        ctaLabel: "Solicite orçamento",
        url: "https://wa.me/5500000000000",
        image: {
          src: "/images/carrossel-7.webp",
          alt: "Exemplos de materiais editáveis criados pelo Studio Emi",
          width: 3838,
          height: 685,
        },
      },
    ],
  },
  products: {
    headingStart: "Nossos",
    headingAccent: "produtos",
    items: [
      {
        title: "FigmaLab",
        description:
          "Nosso curso para designers que querem aprender Figma e desenvolver um processo criativo para criar designs de posts com mais autonomia.",
        priceLabel: "Conheça o curso",
        ctaLabel: "Quero entrar",
        url: "/figmalab",
        image: {
          src: "/images/pasta-desktop.webp",
          alt: "Materiais do curso FigmaLab",
          width: 1600,
          height: 900,
        },
      },
      {
        title: "Guia de Fontes",
        description:
          "Uma curadoria com mais de 250 fontes para ampliar seu repertório tipográfico e facilitar a busca por novas opções para seus projetos.",
        priceLabel: "R$49 · acesso vitalício",
        ctaLabel: "Eu quero",
        url: "https://pay.kiwify.com.br/",
        image: {
          src: "/images/carrossel-5.webp",
          alt: "Prévia do Guia de Fontes",
          width: 1080,
          height: 1080,
        },
      },
      {
        title: "Proposta Comercial",
        description:
          "Modelo de proposta comercial para designers apresentarem seus serviços e processos de forma profissional, editável no Canva.",
        priceLabel: "R$49 · acesso vitalício",
        ctaLabel: "Eu quero",
        url: "https://pay.kiwify.com.br/",
        image: {
          src: "/images/carrossel-6.webp",
          alt: "Prévia do modelo de Proposta Comercial",
          width: 1080,
          height: 1080,
        },
      },
      {
        title: "Curadoria de Plugins",
        description:
          "Uma seleção com mais de 60 plugins do Figma que ajudam a explorar novas possibilidades e agilizar diferentes etapas da criação.",
        priceLabel: "R$49 · acesso vitalício",
        ctaLabel: "Eu quero",
        url: "https://pay.kiwify.com.br/",
        image: {
          src: "/images/carrossel-7.webp",
          alt: "Prévia da Curadoria de Plugins",
          width: 1080,
          height: 1080,
        },
      },
    ],
  },
  portfolio: {
    image: {
      src: "/images/carrossel-8.webp",
      alt: "Seleção de projetos de design do Studio Emi",
      width: 3838,
      height: 685,
    },
    behanceUrl: "https://www.behance.net/",
    pinterestUrl: "https://www.pinterest.com/",
  },
  favorites: {
    images: [
      {
        src: "/images/FEEDBACK01.webp",
        alt: "Publicação do Studio Emi",
        width: 1080,
        height: 1920,
      },
      {
        src: "/images/FEEDBACK02.webp",
        alt: "Conteúdo criativo da Emi",
        width: 1080,
        height: 1920,
      },
      {
        src: "/images/FEEDBACK03.webp",
        alt: "Projeto do Studio Emi",
        width: 1080,
        height: 1920,
      },
    ],
  },
  footer: {
    boldText: "Studio Emi Design",
    regularText: "Todos os direitos reservados.",
  },
};
