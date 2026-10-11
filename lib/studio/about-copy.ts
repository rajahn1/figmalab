export interface StudioAboutParagraphLayout {
  text: string;
  desktopLines: readonly string[];
  mobileLines: readonly string[];
  boldPhrases: readonly string[];
}

const firstDesktopLines = [
  "Por trás do olhar criativo do Studio Emi está a",
  "Emilize, formada em Design Gráfico há 5 anos e",
  "especializada na criação de designs",
  "estratégicos e criativos para as redes sociais.",
] as const;

const firstMobileLines = [
  "Por trás do olhar criativo do Studio Emi está a Emilize, formada",
  "em Design Gráfico há 5 anos e especializada na criação de",
  "designs estratégicos e criativos para as redes sociais.",
] as const;

const secondDesktopLines = [
  "Ao longo da sua trajetória, transformou o design",
  "em uma ferramenta para ajudar mulheres",
  "autênticas a construírem uma presença visual",
  "consistente e com personalidade.",
] as const;

const secondMobileLines = [
  "Ao longo da sua trajetória, transformou o design em uma",
  "ferramenta para ajudar mulheres autênticas a construírem",
  "uma presença visual consistente e com personalidade.",
] as const;

const thirdDesktopLines = [
  "Hoje, além de designer e fundadora do Studio",
  "Emi, também é idealizadora do FigmaLab, curso",
  "criado para designers que querem desenvolver",
  "seu processo criativo e dominar o Figma. A",
  "comunidade já reúne mais de 300 designers.",
] as const;

const thirdMobileLines = [
  "Hoje, além de designer e fundadora do Studio Emi, também é",
  "idealizadora do FigmaLab, curso criado para designers que",
  "querem desenvolver seu processo criativo e dominar o Figma.",
  "A comunidade já reúne mais de 300 designers.",
] as const;

export const studioAboutParagraphLayouts: readonly StudioAboutParagraphLayout[] = [
  {
    text: firstDesktopLines.join(" "),
    desktopLines: firstDesktopLines,
    mobileLines: firstMobileLines,
    boldPhrases: [
      "especializada na criação de designs estratégicos e criativos para as redes sociais.",
    ],
  },
  {
    text: secondDesktopLines.join(" "),
    desktopLines: secondDesktopLines,
    mobileLines: secondMobileLines,
    boldPhrases: [],
  },
  {
    text: thirdDesktopLines.join(" "),
    desktopLines: thirdDesktopLines,
    mobileLines: thirdMobileLines,
    boldPhrases: ["é idealizadora do FigmaLab, curso criado para designers"],
  },
] as const;

export const legacyStudioAboutParagraphs = [
  "Por trás do olhar criativo do Studio Emi está a Emi, formada em Design Gráfico há 5 anos e especializada na criação de designs estratégicos e criativos para as redes sociais.",
  "Ao longo da sua trajetória, transformou o design em uma ferramenta para dar vida a marcas autênticas e construir uma presença visual consistente e com personalidade.",
  "Hoje, além de designer e fundadora do Studio Emi, também é idealizadora do FigmaLab, curso criado para designers que querem desenvolver sua presença criativa com organização e estratégia.",
] as const;

const normalizeWhitespace = (text: string) => text.replace(/\s+/g, " ").trim();

export const upgradeLegacyStudioAboutParagraphs = (paragraphs: string[]) =>
  paragraphs.map((paragraph, index) =>
    normalizeWhitespace(paragraph) === normalizeWhitespace(legacyStudioAboutParagraphs[index] ?? "")
      ? (studioAboutParagraphLayouts[index]?.text ?? paragraph)
      : paragraph
  );
