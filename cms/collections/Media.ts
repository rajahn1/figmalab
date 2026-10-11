import type { CollectionBeforeDeleteHook, CollectionConfig } from "payload";
import { APIError } from "payload";

import { authenticated } from "../access";
import {
  revalidateLandingAfterMediaDelete,
  revalidateLandingMedia,
} from "../hooks/revalidateLanding";

const MEDIA_KEYS = new Set([
  "socialImage",
  "mobileImage",
  "desktopImage",
  "choiceImage",
  "mobileBackground",
  "desktopBackground",
  "heroImage",
  "aboutImage",
  "backgroundImage",
  "image",
]);

const mediaID = (value: unknown): null | string => {
  if (typeof value === "number" || typeof value === "string") return String(value);
  if (value && typeof value === "object" && "id" in value) {
    const id = value.id;
    return typeof id === "number" || typeof id === "string" ? String(id) : null;
  }
  return null;
};

const containsMedia = (value: unknown, targetID: string, parentKey?: string): boolean => {
  if (MEDIA_KEYS.has(parentKey ?? "")) {
    if (Array.isArray(value)) return value.some((item) => mediaID(item) === targetID);
    return mediaID(value) === targetID;
  }

  if (Array.isArray(value)) return value.some((item) => containsMedia(item, targetID));
  if (!value || typeof value !== "object") return false;

  return Object.entries(value).some(([key, child]) => containsMedia(child, targetID, key));
};

const preventReferencedMediaDelete: CollectionBeforeDeleteHook = async ({ id, req }) => {
  const [landing, studioHome] = await Promise.all([
    req.payload.findGlobal({ slug: "landing-page", depth: 0, overrideAccess: true }),
    req.payload.findGlobal({ slug: "studio-home", depth: 0, overrideAccess: true }),
  ]);

  if (containsMedia(landing, String(id)) || containsMedia(studioHome, String(id))) {
    throw new APIError(
      "Esta imagem está em uso em uma página do site. Substitua a referência antes de excluí-la.",
      409,
      null,
      true
    );
  }
};

export const Media: CollectionConfig = {
  slug: "media",
  labels: {
    singular: "Mídia",
    plural: "Mídias",
  },
  admin: {
    group: "Conteúdo",
    useAsTitle: "alt",
    defaultColumns: ["filename", "alt", "updatedAt"],
  },
  access: {
    create: authenticated,
    read: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  graphQL: false,
  upload: {
    staticDir: "media",
    mimeTypes: ["image/jpeg", "image/png", "image/webp", "image/avif"],
    crop: true,
    focalPoint: true,
  },
  hooks: {
    beforeDelete: [preventReferencedMediaDelete],
    afterChange: [revalidateLandingMedia],
    afterDelete: [revalidateLandingAfterMediaDelete],
  },
  fields: [
    {
      name: "alt",
      label: "Texto alternativo",
      type: "text",
      required: true,
      maxLength: 240,
      admin: {
        description:
          "Descreva a imagem para leitores de tela ou identifique internamente a função decorativa.",
      },
    },
    {
      name: "seedKey",
      type: "text",
      unique: true,
      index: true,
      admin: {
        hidden: true,
      },
    },
  ],
};
