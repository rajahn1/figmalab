import { revalidatePath, revalidateTag } from "next/cache";
import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
  GlobalAfterChangeHook,
} from "payload";
import { LANDING_CACHE_TAG } from "@/lib/landing/cache";
import { STUDIO_HOME_CACHE_TAG } from "@/lib/studio/cache";

const invalidate = (tag: string, path: string) => {
  try {
    revalidateTag(tag, "max");
    revalidatePath(path, "page");
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn("Não foi possível invalidar o cache da landing fora do runtime Next.", error);
    }
  }
};

const invalidateLanding = () => invalidate(LANDING_CACHE_TAG, "/figmalab");
const invalidateStudioHome = () => invalidate(STUDIO_HOME_CACHE_TAG, "/");

export const revalidateLandingGlobal: GlobalAfterChangeHook = ({ doc }) => {
  invalidateLanding();
  return doc;
};

export const revalidateStudioHomeGlobal: GlobalAfterChangeHook = ({ doc }) => {
  invalidateStudioHome();
  return doc;
};

export const revalidateLandingMedia: CollectionAfterChangeHook = ({ doc }) => {
  invalidateLanding();
  invalidateStudioHome();
  return doc;
};

export const revalidateLandingAfterMediaDelete: CollectionAfterDeleteHook = ({ doc }) => {
  invalidateLanding();
  invalidateStudioHome();
  return doc;
};
