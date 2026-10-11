import { postgresAdapter } from "@payloadcms/db-postgres";
import { s3Storage } from "@payloadcms/storage-s3";
import { pt } from "@payloadcms/translations/languages/pt";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildConfig } from "payload";
import sharp from "sharp";

import { Media } from "./cms/collections/Media";
import { Users } from "./cms/collections/Users";
import { LandingPage } from "./cms/globals/LandingPage";
import { StudioHome } from "./cms/globals/StudioHome";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const isMigrating = process.env.PAYLOAD_MIGRATING === "true";
const databaseUrl =
  (isMigrating ? process.env.DATABASE_MIGRATION_URL : process.env.DATABASE_URL) ??
  "postgresql://payload:payload@127.0.0.1:5432/payload";

const r2PublicUrl = process.env.R2_PUBLIC_URL?.replace(/\/$/, "");
const hasR2Config = Boolean(
  process.env.R2_BUCKET &&
  process.env.R2_ACCESS_KEY_ID &&
  process.env.R2_SECRET_ACCESS_KEY &&
  process.env.R2_ENDPOINT &&
  r2PublicUrl
);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: " — Studio Emi CMS",
    },
  },
  collections: [Users, Media],
  globals: [StudioHome, LandingPage],
  graphQL: {
    disable: true,
  },
  db: postgresAdapter({
    pool: {
      connectionString: databaseUrl,
      // Payload authentication can need a second client while resolving the
      // current user and its sessions. A single-client pool caused acquisition
      // timeouts on /admin/login, so keep the runtime pool at the minimum that
      // supports that flow.
      max: isMigrating ? 4 : 2,
      connectionTimeoutMillis: 10_000,
      idleTimeoutMillis: 20_000,
      ssl: databaseUrl.includes("supabase") ? { rejectUnauthorized: false } : undefined,
    },
    migrationDir: path.resolve(dirname, "migrations"),
    // The Supabase schema is managed exclusively by versioned migrations.
    // Keeping Drizzle push disabled also prevents development requests from
    // introspecting/mutating the schema through the one-connection runtime pool.
    push: false,
  }),
  i18n: {
    fallbackLanguage: "pt",
    supportedLanguages: { pt },
  },
  plugins: [
    s3Storage({
      enabled: hasR2Config,
      alwaysInsertFields: true,
      bucket: process.env.R2_BUCKET ?? "figmalab-media",
      clientUploads: {
        access: ({ req }) => Boolean(req.user),
      },
      collections: {
        media: {
          prefix: "landing",
          disablePayloadAccessControl: true,
          generateFileURL: ({ filename: mediaFilename, prefix }) => {
            const key = [prefix, mediaFilename].filter(Boolean).join("/");
            return `${r2PublicUrl}/${key}`;
          },
        },
      },
      config: {
        credentials: {
          accessKeyId: process.env.R2_ACCESS_KEY_ID ?? "local",
          secretAccessKey: process.env.R2_SECRET_ACCESS_KEY ?? "local",
        },
        endpoint: process.env.R2_ENDPOINT,
        region: "auto",
      },
    }),
  ],
  secret: process.env.PAYLOAD_SECRET ?? "development-only-change-me",
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL ?? "http://localhost:3000",
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
});
