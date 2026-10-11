import type { Field, GlobalConfig } from "payload";

import { authenticated } from "../access";
import { stringListField, uploadField } from "../fields";
import { revalidateStudioHomeGlobal } from "../hooks/revalidateLanding";
import { defaultStudioHome } from "@/lib/studio/default-content";

const content = defaultStudioHome;

const httpsOrInternal = (value: null | string | undefined) =>
  value?.startsWith("https://") || value?.startsWith("/") || "Informe uma URL HTTPS ou interna.";

const linkFields: Field[] = [
  { name: "label", label: "Rótulo", type: "text", required: true, maxLength: 60 },
  {
    name: "anchor",
    label: "Âncora",
    type: "text",
    required: true,
    maxLength: 60,
    admin: { description: "Sem #. Exemplo: produtos" },
  },
];

export const StudioHome: GlobalConfig = {
  slug: "studio-home",
  label: "Home Studio Emi",
  admin: {
    group: "Conteúdo",
    description: "Página inicial do Studio Emi publicada na rota principal do site.",
  },
  access: {
    read: authenticated,
    update: authenticated,
  },
  graphQL: false,
  versions: { max: 50 },
  hooks: { afterChange: [revalidateStudioHomeGlobal] },
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
          name: "navigation",
          label: "Navegação",
          fields: [
            {
              name: "brandLabel",
              label: "Nome da marca",
              type: "text",
              required: true,
              defaultValue: content.navigation.brandLabel,
            },
            {
              name: "links",
              label: "Links do menu",
              type: "array",
              required: true,
              minRows: 1,
              maxRows: 8,
              defaultValue: content.navigation.links,
              fields: linkFields,
            },
          ],
        },
        {
          name: "hero",
          label: "Hero",
          fields: [
            { name: "lineOne", label: "Primeira linha", type: "text", required: true, defaultValue: content.hero.lineOne },
            { name: "lineTwo", label: "Segunda linha", type: "text", required: true, defaultValue: content.hero.lineTwo },
            { name: "accent", label: "Assinatura rosa", type: "text", required: true, defaultValue: content.hero.accent },
            { name: "credit", label: "Crédito", type: "text", required: true, defaultValue: content.hero.credit },
            { name: "ctaLabel", label: "Texto do botão", type: "text", required: true, defaultValue: content.hero.ctaLabel },
            { name: "ctaUrl", label: "URL do botão", type: "text", required: true, defaultValue: content.hero.ctaUrl, validate: httpsOrInternal },
            uploadField("image", "Imagem da Emi", content.hero.image),
          ],
        },
        {
          name: "about",
          label: "Sobre",
          fields: [
            { name: "heading", label: "Título", type: "textarea", required: true, defaultValue: content.about.heading },
            { name: "headingHighlight", label: "Destaque do título", type: "text", required: true, defaultValue: content.about.headingHighlight },
            stringListField("paragraphs", "Parágrafos", content.about.paragraphs, { textarea: true, maxRows: 6 }),
            uploadField("image", "Imagem institucional", content.about.image),
          ],
        },
        {
          name: "services",
          label: "Serviços",
          fields: [
            { name: "headingStart", label: "Início do título", type: "text", required: true, defaultValue: content.services.headingStart },
            { name: "headingAccent", label: "Destaque do título", type: "text", required: true, defaultValue: content.services.headingAccent },
            {
              name: "items",
              label: "Serviços",
              type: "array",
              required: true,
              minRows: 1,
              maxRows: 8,
              defaultValue: content.services.items,
              fields: [
                { name: "ctaLabel", label: "Texto do botão", type: "text", required: true },
                { name: "url", label: "URL", type: "text", required: true, validate: httpsOrInternal },
                {
                  name: "image",
                  label: "Imagem do serviço",
                  type: "upload",
                  relationTo: "media",
                  admin: {
                    description:
                      "Arte exibida acima do botão. Recomendação: todas as imagens com a mesma proporção.",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "products",
          label: "Produtos",
          fields: [
            { name: "headingStart", label: "Início do título", type: "text", required: true, defaultValue: content.products.headingStart },
            { name: "headingAccent", label: "Destaque do título", type: "text", required: true, defaultValue: content.products.headingAccent },
            {
              name: "items",
              label: "Produtos e cursos",
              type: "array",
              required: true,
              minRows: 1,
              maxRows: 12,
              defaultValue: content.products.items.map((item) => ({
                title: item.title,
                description: item.description,
                priceLabel: item.priceLabel,
                ctaLabel: item.ctaLabel,
                url: item.url,
              })),
              fields: [
                { name: "title", label: "Título", type: "text", required: true },
                { name: "description", label: "Descrição", type: "textarea", required: true, maxLength: 700 },
                { name: "priceLabel", label: "Preço ou observação", type: "text", required: true },
                { name: "ctaLabel", label: "Texto do botão", type: "text", required: true },
                { name: "url", label: "URL", type: "text", required: true, validate: httpsOrInternal },
                { name: "image", label: "Imagem", type: "upload", relationTo: "media", required: true },
              ],
            },
          ],
        },
        {
          name: "portfolio",
          label: "Portfólio",
          fields: [
            uploadField("image", "Imagem do portfólio", content.portfolio.image, {
              required: false,
            }),
            { name: "behanceUrl", label: "URL do Behance", type: "text", required: true, defaultValue: content.portfolio.behanceUrl, validate: httpsOrInternal },
            {
              name: "behanceImage",
              label: "Imagem do Behance",
              type: "upload",
              relationTo: "media",
              admin: { description: "Arte clicável exibida no lugar do antigo botão." },
            },
            { name: "pinterestUrl", label: "URL do Pinterest", type: "text", required: true, defaultValue: content.portfolio.pinterestUrl, validate: httpsOrInternal },
            {
              name: "pinterestImage",
              label: "Imagem do Pinterest",
              type: "upload",
              relationTo: "media",
              admin: { description: "Arte clicável exibida no lugar do antigo botão." },
            },
          ],
        },
        {
          name: "social",
          label: "Xodós",
          fields: [
            {
              name: "items",
              label: "Imagens do carrossel",
              type: "array",
              required: true,
              minRows: 1,
              maxRows: 15,
              admin: {
                description: "Adicione até 15 imagens. O site exibe três por vez no desktop.",
              },
              fields: [
                { name: "image", label: "Imagem", type: "upload", relationTo: "media", required: true },
              ],
            },
          ],
        },
        {
          name: "footer",
          label: "Rodapé",
          fields: [
            { name: "copyright", label: "Texto em negrito", type: "text", required: true, defaultValue: content.footer.boldText },
            { name: "regularText", label: "Texto normal", type: "text", required: true, defaultValue: content.footer.regularText },
          ],
        },
      ],
    },
  ],
};
