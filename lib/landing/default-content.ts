import type { HeadingSegment, LandingImage, LandingPageContent } from "./types";
import { fixedLandingImages } from "./fixed-images";

const image = (src: string, alt: string, width: number, height: number): LandingImage => ({
  src,
  alt,
  width,
  height,
});

export const defaultLandingPage: LandingPageContent = {
  seo: {
    title: "Figma Lab",
    description: "Landing page do curso FigmaLab",
    socialImage: image(
      "/images/section-hero-emi-opt.webp",
      "Mulher branca de cabelos pretos segurando um iPad",
      1920,
      1038
    ),
  },
  settings: {
    courseName: "FigmaLab",
    checkoutUrl: "https://pay.kiwify.com.br/eADN6hR",
    supportUrl: "https://wa.me/message/KS4FVL6M7D6KL1",
    currency: "BRL",
    cashPrice: 297,
    installmentCount: 12,
    installmentAmount: 30.72,
    defaultCtaLabel: "Eu quero fazer parte",
    purchaseCtaLabel: "Quero entrar no FigmaLab!",
    supportCtaLabel: "Fale com o suporte",
  },
  hero: {
    heading: [
      { text: "Aprenda", style: "light" },
      { text: " Figma do zero" },
      { text: "enquanto desenvolve um", style: "light", breakBefore: true },
      { text: "processo criativo", breakBefore: true },
      { text: " de verdade.", style: "light" },
    ],
    description:
      "Chega de travar na frente da tela, depender\nde referências do Pinterest ou criar layouts\nno improviso. No FigmaLab você aprende\nexatamente como",
    descriptionHighlight: "pensar, organizar e\nconstruir designs de posts",
    mobileImage: image(
      "/images/section-hero-emi-mobile-3x.webp",
      "Mulher branca de cabelos pretos segurando um iPad",
      1440,
      1164
    ),
    desktopImage: image(
      "/images/section-hero-emi-opt.webp",
      "Mulher branca de cabelos pretos segurando um iPad",
      1920,
      1038
    ),
  },
  comparison: {
    heading: [
      { text: "Hoje existem " },
      { text: "dois caminhos", style: "bold" },
      { text: " para" },
      { text: "quem trabalha com", breakBefore: true },
      { text: " design de post:", style: "bold" },
    ],
    negativePoints: [
      "Continuar criando no improviso",
      "Travar no frame em branco",
      "Depender 100% das referências",
      'Sentir que "falta criatividade"',
      "Demorar 3h em um design simples",
    ],
    positivePoints: [
      "Desenvolver um processo criativo",
      "Saber exatamente por onde começar",
      "Analisar briefing com clareza",
      "Criar de forma autoral",
      "Dominar o Figma com fluidez",
    ],
    choiceImage: image(
      "/icons/qual-caminho-voce-escolhe.png",
      "Qual caminho você escolhe",
      773,
      207
    ),
  },
  method: {
    heading: [
      { text: "O problema" },
      { text: "não é talento, é", breakBefore: true },
      { text: "falta de ", breakBefore: true },
      { text: "método", style: "pink" },
    ],
    paragraphs: [
      "Design não é dom, é processo. O FigmaLab é o resultado de anos organizando meu próprio método criativo de design para social media, validado em projetos reais. Aqui, você para de copiar e aprende a analisar, decidir e criar com consciência.",
      "Saia do amadorismo e domine o método.\nque transforma criatividade travada em design de post estratégico.",
    ],
    mobileBackground: image(
      "/images/bg-mobile-feedbacks.webp",
      "Fundo decorativo da seção sobre o método",
      800,
      1478
    ),
    desktopBackground: image(
      "/images/section-bg-feedbacks-desktop-optimized.webp",
      "Fundo decorativo da seção sobre o método",
      4236,
      2471
    ),
  },
  receives: {
    heading: [
      { text: "O que você " },
      { text: "recebe", style: "editorialItalic" },
      { text: "no FigmaLab", breakBefore: true },
    ],
    mobileBackground: image(
      "/images/section-beneficios-mobile-2x.webp",
      "Fundo decorativo da seção de benefícios",
      1281,
      1548
    ),
    desktopBackground: image(
      "/images/section-beneficios-opt.webp",
      "Fundo decorativo da seção de benefícios",
      1920,
      1000
    ),
  },
  modules: {
    heading: [
      { text: "Veja " },
      { text: "tudo", style: "pinkItalic" },
      { text: " que" },
      { text: "você vai ", breakBefore: true },
      { text: "aprender", style: "editorialItalic" },
    ],
    items: [
      {
        title: "Boas-vindas e o\n seu compromisso\n como designer",
        image: image("/images/modulo-1.webp", "Capa do módulo 1", 1086, 1628),
        lessons: [
          "Aula 1: Boas-vindas!",
          "Aula 2: Nossa comunidade de networking",
          "Aula 3: O pacto",
          "Aula 4: Raio-X do caos criativo",
          "Aula 5: Como navegar pelo curso",
        ],
      },
      {
        title: "A bússola\n criativa",
        image: image("/images/modulo-2.webp", "Capa do módulo 2", 1086, 1628),
        lessons: [
          'Aula 1: A mentira do "dom" da criatividade',
          "Aula 2: Os meus primeiros passos",
          "Aula 3: Decifrando o briefing do cliente",
          "Aula 4: O plano B do briefing",
          "Aula 5: Referência não é cópia!",
          "Aula 6: Refinando seu olhar",
          "Aula 7: Lab prático de referências",
          "Aula 8: Curadoria visual",
          "Aula 9: O fim do CTRL C + CTRL V",
        ],
      },
      {
        title: "O básico que\n funciona",
        image: image("/images/modulo-3.webp", "Capa do módulo 3", 1086, 1628),
        lessons: [
          "Aula 1: Os fundamentos do design",
          "Aula 2: Estilos de design",
          "Aula 3: Meu arsenal criativo",
        ],
      },
      {
        title: "Dominando\n o Figma",
        image: image("/images/modulo-4.webp", "Capa do módulo 4", 1086, 1628),
        lessons: [
          "Aula 1: Instalando o software",
          "Aula 2: Licença educacional",
          "Aula 3: Tour pelo queridinho",
          'Aula 4: Um tesouro chamado "Community"',
          "Aula 5: Organização é tempo!",
          "Aula 6: Lab colaborativo",
          "Aula 7: Pen, Pencil e Figma Draw",
          "Aula 8: Textos e funcionalidades",
          "Aula 9: Cores, gradientes e kit de marca",
          "Aula 10: Como exportar um documento em PDF",
        ],
      },
      {
        title: "Técnicas\n avançadas\n no Figma",
        image: image("/images/modulo-5.webp", "Capa do módulo 5", 1086, 1628),
        lessons: [
          "Aula 1: Plugins",
          "Aula 2: Máscara de corte",
          'Aula 3: "Pathfinder" do Figma',
          "Aula 4: Auto Layout",
          "Aula 5: Constraints",
          "Aula 6: Componentes e Assets",
          "Aula 7: Modos de mesclagem",
          "Aula 8: Efeitos blur e glass",
          "Aula 9: Texto atrás da imagem",
          "Aula 10: Stickers",
          "Aula 11: Mockups",
          "Aula 12: Texto distorcido",
          "Aula 13: Filtros do Photoshop no Figma",
          "Aula 14: Texto em perspectiva",
        ],
      },
      {
        title: "Mão no\n mouse!",
        image: image("/images/modulo-6.webp", "Capa do módulo 6", 1086, 1628),
        lessons: [
          "Aula 1: Do briefing ao export: me veja criar do zero!",
          "Aula 2: Carrossel na prática 01",
          "Aula 3: Carrossel na prática 02",
          "Aula 4: Carrossel na prática 03",
          "Aula 5: Carrossel na prática 04",
          "Aula 6: Checklist da criatividade",
        ],
      },
      {
        title: "Bônus!",
        image: image("/images/modulo-7.webp", "Capa do módulo 7", 1086, 1628),
        lessons: [
          "Aulão de alinhamento visual: Tudo o que você precisa saber para adicionar esse serviço na sua esteira!",
        ],
      },
    ],
  },
  certificate: {
    heading: [
      { text: "Certificado", style: "pink" },
      { text: "de ", breakBefore: true },
      { text: "conclusão", style: "italic" },
    ],
    description:
      "Ao concluir sua jornada no FigmaLab,\nvocê recebe certificado de conclusão\npara registrar sua evolução e tudo o\nque aprendeu ao longo do curso.",
    image: fixedLandingImages.certificate,
  },
  gallery: {
    heading: "Veja os carrosséis que você\nvai aprender no curso",
    images: [
      image("/images/carrossel-5.webp", "Exemplo de carrossel 1", 4096, 853),
      image("/images/carrossel-6.webp", "Exemplo de carrossel 2", 4096, 853),
      image("/images/carrossel-7.webp", "Exemplo de carrossel 3", 4096, 853),
      image("/images/carrossel-8.webp", "Exemplo de carrossel 4", 4096, 853),
    ],
  },
  feedback: {
    headingStart: "Feed",
    headingEnd: "backs",
    images: [
      image("/images/FEEDBACK01.webp", "Feedback de aluna 1", 373, 261),
      image("/images/FEEDBACK02.webp", "Feedback de aluna 2", 352, 323),
      image("/images/FEEDBACK03.webp", "Feedback de aluna 3", 348, 393),
      image("/images/FEEDBACK04.webp", "Feedback de aluna 4", 348, 273),
      image("/images/FEEDBACK05.webp", "Feedback de aluna 5", 500, 735),
      image("/images/FEEDBACK06.webp", "Feedback de aluna 6", 452, 709),
      image("/images/FEEDBACK07.webp", "Feedback de aluna 7", 527, 853),
      image("/images/FEEDBACK08.webp", "Feedback de aluna 8", 549, 843),
    ],
  },
  offer: {
    benefits: [
      "1 ano de acesso ao FigmaLab",
      "Treinamento de Figma do zero ao avançado",
      "Comunidade de networking no WhatsApp",
      "Atualizações do Figma e aulas práticas",
      "7 dias de garantia para se adaptar",
      "Certificado de conclusão",
      "Modelo de briefing de design de post",
      "PDF de curadoria de sites que uso",
      "Aulas práticas criando carrosséis",
    ],
  },
  instructor: {
    heading: [
      { text: "Quem", style: "pink" },
      { text: " vai" },
      { text: "te ", breakBefore: true },
      { text: "ensinar", style: "editorialItalic" },
      { text: " tudo isso?", breakBefore: true },
    ],
    paragraphs: [
      "Prazer, eu sou a Emi, designer, fundadora do Studio Emi Design e criadora do FigmaLab. Nos últimos 4 anos desenvolvi projetos para mais de 200 nichos diferentes e uma das maiores lições que aprendi é que designers não travam por falta de criatividade, travam por falta de processo.",
      "Eu também já fiquei perdida na frente da tela, sem saber como transformar referências em layouts criativos e estratégicos. Foi organizando meu processo criativo e dominando o Figma que minha forma de criar mudou completamente. E hoje ensino esse mesmo caminho para outras designers dentro do FigmaLab.",
    ],
    mobileImage: fixedLandingImages.instructorMobile,
    desktopImage: fixedLandingImages.instructorDesktop,
  },
  faq: {
    heading: [{ text: "Perguntas " }, { text: "frequentes", style: "editorialItalic" }],
    items: [
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
    ],
  },
  support: {
    heading: "Ficou\ncom\nalguma\ndúvida?",
  },
  footer: {
    companyName: "Studio Emi Design",
    rightsText: "Todos os direitos reservados",
    backToTopLabel: "Voltar para o topo",
  },
};

export const cloneHeading = (segments: HeadingSegment[]): HeadingSegment[] =>
  segments.map((segment) => ({ ...segment }));
