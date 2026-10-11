import type { GlobalConfig } from "payload";

import { authenticated } from "../access";
import { headingField, stringListField, uploadField } from "../fields";
import { revalidateLandingGlobal } from "../hooks/revalidateLanding";
import { defaultLandingPage } from "@/lib/landing/default-content";

const content = defaultLandingPage;

export const LandingPage: GlobalConfig = {
  slug: "landing-page",
  label: "Landing Page",
  admin: {
    group: "Conteúdo",
    description: "Conteúdo publicado diretamente na landing page do FigmaLab.",
  },
  access: {
    read: authenticated,
    update: authenticated,
  },
  graphQL: false,
  versions: {
    max: 50,
  },
  hooks: {
    afterChange: [revalidateLandingGlobal],
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          name: "seo",
          label: "SEO",
          fields: [
            {
              name: "title",
              label: "Título",
              type: "text",
              required: true,
              maxLength: 70,
              defaultValue: content.seo.title,
            },
            {
              name: "description",
              label: "Descrição",
              type: "textarea",
              required: true,
              maxLength: 170,
              defaultValue: content.seo.description,
            },
            uploadField("socialImage", "Imagem social", content.seo.socialImage, {
              required: false,
            }),
          ],
        },
        {
          name: "settings",
          label: "Oferta e links",
          fields: [
            {
              name: "courseName",
              label: "Nome do curso",
              type: "text",
              required: true,
              defaultValue: content.settings.courseName,
            },
            {
              name: "checkoutUrl",
              label: "URL do checkout",
              type: "text",
              required: true,
              defaultValue: content.settings.checkoutUrl,
              validate: (value: null | string | undefined) =>
                value?.startsWith("https://") || "Informe uma URL HTTPS.",
            },
            {
              name: "supportUrl",
              label: "URL do suporte",
              type: "text",
              required: true,
              defaultValue: content.settings.supportUrl,
              validate: (value: null | string | undefined) =>
                value?.startsWith("https://") || "Informe uma URL HTTPS.",
            },
            {
              type: "row",
              fields: [
                {
                  name: "cashPrice",
                  label: "Preço à vista",
                  type: "number",
                  required: true,
                  min: 0,
                  defaultValue: content.settings.cashPrice,
                },
                {
                  name: "installmentCount",
                  label: "Quantidade de parcelas",
                  type: "number",
                  required: true,
                  min: 1,
                  max: 24,
                  defaultValue: content.settings.installmentCount,
                },
                {
                  name: "installmentAmount",
                  label: "Valor da parcela",
                  type: "number",
                  required: true,
                  min: 0,
                  defaultValue: content.settings.installmentAmount,
                },
              ],
            },
            {
              name: "currency",
              label: "Moeda",
              type: "select",
              required: true,
              defaultValue: "BRL",
              options: [{ label: "Real brasileiro (BRL)", value: "BRL" }],
            },
            {
              name: "defaultCtaLabel",
              label: "CTA padrão",
              type: "text",
              required: true,
              defaultValue: content.settings.defaultCtaLabel,
            },
            {
              name: "purchaseCtaLabel",
              label: "CTA da oferta",
              type: "text",
              required: true,
              defaultValue: content.settings.purchaseCtaLabel,
            },
            {
              name: "supportCtaLabel",
              label: "CTA do suporte",
              type: "text",
              required: true,
              defaultValue: content.settings.supportCtaLabel,
            },
          ],
        },
        {
          name: "hero",
          label: "Hero",
          fields: [
            headingField("heading", "Título", content.hero.heading),
            {
              name: "description",
              label: "Descrição",
              type: "textarea",
              required: true,
              defaultValue: content.hero.description,
            },
            {
              name: "descriptionHighlight",
              label: "Trecho em destaque",
              type: "textarea",
              required: true,
              defaultValue: content.hero.descriptionHighlight,
            },
            uploadField("mobileImage", "Imagem mobile", content.hero.mobileImage),
            uploadField("desktopImage", "Imagem desktop", content.hero.desktopImage),
          ],
        },
        {
          name: "comparison",
          label: "Comparação",
          fields: [
            headingField("heading", "Título", content.comparison.heading),
            stringListField(
              "negativePoints",
              "Caminho negativo",
              content.comparison.negativePoints,
              {
                dbName: "cmp_negative",
                maxRows: 8,
              }
            ),
            stringListField(
              "positivePoints",
              "Caminho positivo",
              content.comparison.positivePoints,
              {
                dbName: "cmp_positive",
                maxRows: 8,
              }
            ),
            uploadField("choiceImage", "Imagem de fechamento", content.comparison.choiceImage),
          ],
        },
        {
          name: "method",
          label: "Método",
          fields: [
            headingField("heading", "Título", content.method.heading),
            stringListField("paragraphs", "Parágrafos", content.method.paragraphs, {
              maxRows: 4,
              textarea: true,
            }),
            uploadField("mobileBackground", "Fundo mobile", content.method.mobileBackground),
            uploadField("desktopBackground", "Fundo desktop", content.method.desktopBackground),
          ],
        },
        {
          name: "receives",
          label: "O que recebe",
          fields: [
            headingField("heading", "Título", content.receives.heading),
            uploadField("mobileBackground", "Fundo mobile", content.receives.mobileBackground),
            uploadField("desktopBackground", "Fundo desktop", content.receives.desktopBackground),
          ],
        },
        {
          name: "modules",
          label: "Módulos",
          fields: [
            headingField("heading", "Título da seção", content.modules.heading),
            {
              name: "items",
              label: "Módulos",
              type: "array",
              required: true,
              minRows: 1,
              maxRows: 12,
              fields: [
                {
                  name: "title",
                  label: "Título",
                  type: "textarea",
                  required: true,
                  maxLength: 180,
                },
                uploadField("image", "Capa do módulo"),
                stringListField("lessons", "Aulas", [], { maxRows: 30 }),
              ],
            },
          ],
        },
        {
          name: "certificate",
          label: "Certificado",
          fields: [
            headingField("heading", "Título", content.certificate.heading),
            {
              name: "description",
              label: "Descrição",
              type: "textarea",
              required: true,
              defaultValue: content.certificate.description,
            },
            uploadField("image", "Imagem do certificado", content.certificate.image),
          ],
        },
        {
          name: "gallery",
          label: "Galeria",
          fields: [
            {
              name: "heading",
              label: "Título da galeria",
              type: "textarea",
              required: true,
              defaultValue: content.gallery.heading,
            },
            {
              name: "images",
              label: "Faixas da galeria",
              type: "array",
              required: true,
              minRows: 1,
              maxRows: 8,
              fields: [uploadField("image", "Imagem")],
            },
          ],
        },
        {
          name: "feedback",
          label: "Feedbacks",
          fields: [
            {
              name: "headingStart",
              label: "Início do título",
              type: "text",
              required: true,
              defaultValue: content.feedback.headingStart,
            },
            {
              name: "headingEnd",
              label: "Fim do título",
              type: "text",
              required: true,
              defaultValue: content.feedback.headingEnd,
            },
            {
              name: "images",
              label: "Imagens de feedback",
              type: "array",
              required: true,
              minRows: 1,
              maxRows: 20,
              fields: [uploadField("image", "Imagem")],
            },
          ],
        },
        {
          name: "offer",
          label: "Oferta",
          fields: [
            stringListField("benefits", "Benefícios", content.offer.benefits, { maxRows: 20 }),
          ],
        },
        {
          name: "instructor",
          label: "Professora",
          fields: [
            headingField("heading", "Título", content.instructor.heading),
            stringListField("paragraphs", "Biografia", content.instructor.paragraphs, {
              maxRows: 4,
              textarea: true,
            }),
            uploadField("mobileImage", "Imagem mobile", content.instructor.mobileImage),
            uploadField("desktopImage", "Imagem desktop", content.instructor.desktopImage),
          ],
        },
        {
          name: "faq",
          label: "FAQ",
          fields: [
            headingField("heading", "Título", content.faq.heading),
            {
              name: "items",
              label: "Perguntas",
              type: "array",
              required: true,
              minRows: 1,
              maxRows: 20,
              fields: [
                {
                  name: "question",
                  label: "Pergunta",
                  type: "text",
                  required: true,
                  maxLength: 240,
                },
                {
                  name: "answer",
                  label: "Resposta",
                  type: "textarea",
                  required: true,
                  maxLength: 1600,
                },
              ],
            },
          ],
        },
        {
          name: "support",
          label: "Suporte",
          fields: [
            {
              name: "heading",
              label: "Título",
              type: "textarea",
              required: true,
              defaultValue: content.support.heading,
            },
          ],
        },
        {
          name: "footer",
          label: "Rodapé",
          fields: [
            {
              name: "companyName",
              label: "Empresa",
              type: "text",
              required: true,
              defaultValue: content.footer.companyName,
            },
            {
              name: "rightsText",
              label: "Texto legal",
              type: "text",
              required: true,
              defaultValue: content.footer.rightsText,
            },
            {
              name: "backToTopLabel",
              label: "Voltar ao topo",
              type: "text",
              required: true,
              defaultValue: content.footer.backToTopLabel,
            },
          ],
        },
      ],
    },
  ],
};
