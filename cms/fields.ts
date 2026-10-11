import type { Field } from "payload";

import type { HeadingSegment, LandingImage } from "@/lib/landing/types";

export const headingField = (
  name: string,
  label: string,
  defaultValue: HeadingSegment[]
): Field => ({
  name,
  label,
  type: "array",
  required: true,
  minRows: 1,
  maxRows: 12,
  defaultValue,
  admin: {
    description: "Monte o título por trechos. Use ‘quebrar linha’ para controlar a composição.",
  },
  fields: [
    {
      name: "text",
      label: "Texto",
      type: "text",
      required: true,
      maxLength: 160,
    },
    {
      name: "style",
      label: "Estilo",
      type: "select",
      defaultValue: "default",
      required: true,
      options: [
        { label: "Padrão", value: "default" },
        { label: "Leve", value: "light" },
        { label: "Negrito", value: "bold" },
        { label: "Itálico", value: "italic" },
        { label: "Editorial", value: "editorial" },
        { label: "Editorial itálico", value: "editorialItalic" },
        { label: "Rosa", value: "pink" },
        { label: "Rosa itálico", value: "pinkItalic" },
      ],
    },
    {
      name: "breakBefore",
      label: "Quebrar linha antes",
      type: "checkbox",
      defaultValue: false,
    },
  ],
});

export const stringListField = (
  name: string,
  label: string,
  values: string[],
  options: { dbName?: string; maxRows?: number; minRows?: number; textarea?: boolean } = {}
): Field => {
  const itemField: Field = options.textarea
    ? {
        name: "text",
        label: "Texto",
        type: "textarea",
        required: true,
        maxLength: 1200,
      }
    : {
        name: "text",
        label: "Texto",
        type: "text",
        required: true,
        maxLength: 240,
      };

  return {
    name,
    dbName: options.dbName,
    label,
    type: "array",
    required: true,
    minRows: options.minRows ?? 1,
    maxRows: options.maxRows ?? 20,
    defaultValue: values.map((text) => ({ text })),
    fields: [itemField],
  };
};

export const uploadField = (
  name: string,
  label: string,
  image?: LandingImage,
  options: { required?: boolean } = {}
): Field => ({
  name,
  label,
  type: "upload",
  relationTo: "media",
  required: options.required ?? true,
  admin: image
    ? {
        description: `Referência atual: ${image.width}×${image.height}px.`,
      }
    : undefined,
});
