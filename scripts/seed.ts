import { existsSync } from "node:fs";
import path from "node:path";

import nextEnv from "@next/env";
import { getPayload } from "payload";

import { defaultLandingPage } from "@/lib/landing/default-content";
import type { LandingImage } from "@/lib/landing/types";
import { defaultStudioHome } from "@/lib/studio/default-content";

const { loadEnvConfig } = nextEnv;

function collectImages(value: unknown, images = new Map<string, LandingImage>()) {
  if (Array.isArray(value)) {
    value.forEach((item) => collectImages(item, images));
    return images;
  }

  if (!value || typeof value !== "object") return images;

  if (
    "src" in value &&
    "alt" in value &&
    "width" in value &&
    "height" in value &&
    typeof value.src === "string"
  ) {
    images.set(value.src, value as LandingImage);
    return images;
  }

  Object.values(value).forEach((item) => collectImages(item, images));
  return images;
}

const heading = (segments: typeof defaultLandingPage.hero.heading) =>
  segments.map((segment) => ({
    text: segment.text,
    style: segment.style ?? "default",
    breakBefore: segment.breakBefore ?? false,
  }));

const strings = (values: string[]) => values.map((text) => ({ text }));

async function main() {
  loadEnvConfig(process.cwd());

  const adminEmail = process.env.SEED_ADMIN_EMAIL;
  const adminPassword = process.env.SEED_ADMIN_PASSWORD;

  if (!process.env.DATABASE_MIGRATION_URL) {
    throw new Error("DATABASE_MIGRATION_URL é obrigatória para executar o seed.");
  }

  if (!adminEmail || !adminPassword) {
    throw new Error("SEED_ADMIN_EMAIL e SEED_ADMIN_PASSWORD são obrigatórias para o seed inicial.");
  }

  const { default: config } = await import("@payload-config");
  const payload = await getPayload({ config });

  try {
    const existingUsers = await payload.find({
      collection: "users",
      where: { email: { equals: adminEmail } },
      limit: 1,
      overrideAccess: true,
    });

    if (existingUsers.docs[0]) {
      await payload.update({
        collection: "users",
        id: existingUsers.docs[0].id,
        data: {
          name: process.env.SEED_ADMIN_NAME ?? "Administrador FigmaLab",
          role: "admin",
        },
        overrideAccess: true,
      });
    } else {
      await payload.create({
        collection: "users",
        data: {
          email: adminEmail,
          password: adminPassword,
          name: process.env.SEED_ADMIN_NAME ?? "Administrador FigmaLab",
          role: "admin",
        },
        overrideAccess: true,
      });
    }

    const editorEmail = process.env.SEED_EDITOR_EMAIL;
    const editorPassword = process.env.SEED_EDITOR_PASSWORD;
    if (editorEmail || editorPassword) {
      if (!editorEmail || !editorPassword) {
        throw new Error("Informe SEED_EDITOR_EMAIL e SEED_EDITOR_PASSWORD em conjunto.");
      }

      const existingEditors = await payload.find({
        collection: "users",
        where: { email: { equals: editorEmail } },
        limit: 1,
        overrideAccess: true,
      });

      if (existingEditors.docs[0]) {
        await payload.update({
          collection: "users",
          id: existingEditors.docs[0].id,
          data: {
            name: process.env.SEED_EDITOR_NAME ?? "Editora FigmaLab",
            role: "editor",
          },
          overrideAccess: true,
        });
      } else {
        await payload.create({
          collection: "users",
          data: {
            email: editorEmail,
            password: editorPassword,
            name: process.env.SEED_EDITOR_NAME ?? "Editora FigmaLab",
            role: "editor",
          },
          overrideAccess: true,
        });
      }
    }

    const mediaIDs = new Map<string, number>();

    const seedImages = collectImages(defaultLandingPage);
    collectImages(defaultStudioHome, seedImages);

    for (const [sourcePath, image] of seedImages) {
      const existingMedia = await payload.find({
        collection: "media",
        where: { seedKey: { equals: sourcePath } },
        limit: 1,
        overrideAccess: true,
      });

      if (existingMedia.docs[0]) {
        const media = await payload.update({
          collection: "media",
          id: existingMedia.docs[0].id,
          data: { alt: image.alt },
          overrideAccess: true,
        });
        mediaIDs.set(sourcePath, media.id);
        continue;
      }

      const filePath = path.resolve(process.cwd(), "public", sourcePath.replace(/^\//, ""));
      if (!existsSync(filePath)) throw new Error(`Arquivo do seed não encontrado: ${filePath}`);

      const media = await payload.create({
        collection: "media",
        data: { alt: image.alt, seedKey: sourcePath },
        filePath,
        overrideAccess: true,
      });
      mediaIDs.set(sourcePath, media.id);
    }

    const mediaID = (image: LandingImage) => {
      const id = mediaIDs.get(image.src);
      if (!id) throw new Error(`Mídia sem ID durante o seed: ${image.src}`);
      return id;
    };

    const content = defaultLandingPage;
    await payload.updateGlobal({
      slug: "landing-page",
      overrideAccess: true,
      data: {
        seo: {
          title: content.seo.title,
          description: content.seo.description,
          socialImage: content.seo.socialImage ? mediaID(content.seo.socialImage) : undefined,
        },
        settings: content.settings,
        hero: {
          ...content.hero,
          heading: heading(content.hero.heading),
          mobileImage: mediaID(content.hero.mobileImage),
          desktopImage: mediaID(content.hero.desktopImage),
        },
        comparison: {
          heading: heading(content.comparison.heading),
          negativePoints: strings(content.comparison.negativePoints),
          positivePoints: strings(content.comparison.positivePoints),
          choiceImage: mediaID(content.comparison.choiceImage),
        },
        method: {
          heading: heading(content.method.heading),
          paragraphs: strings(content.method.paragraphs),
          mobileBackground: mediaID(content.method.mobileBackground),
          desktopBackground: mediaID(content.method.desktopBackground),
        },
        receives: {
          heading: heading(content.receives.heading),
          mobileBackground: mediaID(content.receives.mobileBackground),
          desktopBackground: mediaID(content.receives.desktopBackground),
        },
        modules: {
          heading: heading(content.modules.heading),
          items: content.modules.items.map((module) => ({
            title: module.title,
            image: mediaID(module.image),
            lessons: strings(module.lessons),
          })),
        },
        certificate: {
          heading: heading(content.certificate.heading),
          description: content.certificate.description,
          image: mediaID(content.certificate.image),
        },
        gallery: {
          heading: content.gallery.heading,
          images: content.gallery.images.map((image) => ({ image: mediaID(image) })),
        },
        feedback: {
          headingStart: content.feedback.headingStart,
          headingEnd: content.feedback.headingEnd,
          images: content.feedback.images.map((image) => ({ image: mediaID(image) })),
        },
        offer: { benefits: strings(content.offer.benefits) },
        instructor: {
          heading: heading(content.instructor.heading),
          paragraphs: strings(content.instructor.paragraphs),
          mobileImage: mediaID(content.instructor.mobileImage),
          desktopImage: mediaID(content.instructor.desktopImage),
        },
        faq: {
          heading: heading(content.faq.heading),
          items: content.faq.items,
        },
        support: { heading: content.support.heading },
        footer: content.footer,
      },
    });

    const studio = defaultStudioHome;
    await payload.updateGlobal({
      slug: "studio-home",
      overrideAccess: true,
      data: {
        seo: {
          title: studio.seo.title,
          description: studio.seo.description,
          socialImage: studio.seo.socialImage ? mediaID(studio.seo.socialImage) : undefined,
        },
        navigation: studio.navigation,
        hero: {
          ...studio.hero,
          image: mediaID(studio.hero.image),
        },
        about: {
          heading: studio.about.heading,
          headingHighlight: studio.about.headingHighlight,
          paragraphs: strings(studio.about.paragraphs),
          image: mediaID(studio.about.image),
        },
        services: {
          headingStart: studio.services.headingStart,
          headingAccent: studio.services.headingAccent,
          items: studio.services.items.map((item) => ({
            ctaLabel: item.ctaLabel,
            url: item.url,
            image: mediaID(item.image),
          })),
        },
        products: {
          headingStart: studio.products.headingStart,
          headingAccent: studio.products.headingAccent,
          items: studio.products.items.map((item) => ({
            title: item.title,
            description: item.description,
            priceLabel: item.priceLabel,
            ctaLabel: item.ctaLabel,
            url: item.url,
            image: mediaID(item.image),
          })),
        },
        portfolio: {
          image: mediaID(studio.portfolio.image),
          behanceUrl: studio.portfolio.behanceUrl,
          behanceImage: studio.portfolio.behanceImage
            ? mediaID(studio.portfolio.behanceImage)
            : undefined,
          pinterestUrl: studio.portfolio.pinterestUrl,
          pinterestImage: studio.portfolio.pinterestImage
            ? mediaID(studio.portfolio.pinterestImage)
            : undefined,
        },
        social: {
          items: studio.favorites.images.map((image) => ({ image: mediaID(image) })),
        },
        footer: {
          copyright: studio.footer.boldText,
          regularText: studio.footer.regularText,
        },
      },
    });

    payload.logger.info(
      `Seed concluído: ${mediaIDs.size} mídias, a home do Studio e a landing page foram sincronizadas.`
    );
  } finally {
    await payload.destroy();
  }
}

main()
  .then(() => process.exit(0))
  .catch((error: unknown) => {
    console.error(error);
    process.exit(1);
  });
