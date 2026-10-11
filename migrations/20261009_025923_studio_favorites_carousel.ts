import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "studio_home_social_items" DROP COLUMN "title";
  ALTER TABLE "studio_home_social_items" DROP COLUMN "url";
  ALTER TABLE "studio_home" DROP COLUMN "social_heading_start";
  ALTER TABLE "studio_home" DROP COLUMN "social_heading_accent";
  ALTER TABLE "_studio_home_v_version_social_items" DROP COLUMN "title";
  ALTER TABLE "_studio_home_v_version_social_items" DROP COLUMN "url";
  ALTER TABLE "_studio_home_v" DROP COLUMN "version_social_heading_start";
  ALTER TABLE "_studio_home_v" DROP COLUMN "version_social_heading_accent";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "studio_home_social_items" ADD COLUMN "title" varchar DEFAULT 'Xodó' NOT NULL;
  ALTER TABLE "studio_home_social_items" ADD COLUMN "url" varchar DEFAULT 'https://example.com' NOT NULL;
  ALTER TABLE "studio_home" ADD COLUMN "social_heading_start" varchar DEFAULT 'Nossas' NOT NULL;
  ALTER TABLE "studio_home" ADD COLUMN "social_heading_accent" varchar DEFAULT 'redes' NOT NULL;
  ALTER TABLE "_studio_home_v_version_social_items" ADD COLUMN "title" varchar DEFAULT 'Xodó' NOT NULL;
  ALTER TABLE "_studio_home_v_version_social_items" ADD COLUMN "url" varchar DEFAULT 'https://example.com' NOT NULL;
  ALTER TABLE "_studio_home_v" ADD COLUMN "version_social_heading_start" varchar DEFAULT 'Nossas' NOT NULL;
  ALTER TABLE "_studio_home_v" ADD COLUMN "version_social_heading_accent" varchar DEFAULT 'redes' NOT NULL;
  ALTER TABLE "studio_home_social_items" ALTER COLUMN "title" DROP DEFAULT;
  ALTER TABLE "studio_home_social_items" ALTER COLUMN "url" DROP DEFAULT;
  ALTER TABLE "_studio_home_v_version_social_items" ALTER COLUMN "title" DROP DEFAULT;
  ALTER TABLE "_studio_home_v_version_social_items" ALTER COLUMN "url" DROP DEFAULT;`)
}
