import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "studio_home_services_items" DROP COLUMN "title";
  ALTER TABLE "studio_home_services_items" DROP COLUMN "description";
  ALTER TABLE "_studio_home_v_version_services_items" DROP COLUMN "title";
  ALTER TABLE "_studio_home_v_version_services_items" DROP COLUMN "description";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "studio_home_services_items" ADD COLUMN "title" varchar NOT NULL DEFAULT '';
  ALTER TABLE "studio_home_services_items" ADD COLUMN "description" varchar NOT NULL DEFAULT '';
  ALTER TABLE "_studio_home_v_version_services_items" ADD COLUMN "title" varchar NOT NULL DEFAULT '';
  ALTER TABLE "_studio_home_v_version_services_items" ADD COLUMN "description" varchar NOT NULL DEFAULT '';
  ALTER TABLE "studio_home_services_items" ALTER COLUMN "title" DROP DEFAULT;
  ALTER TABLE "studio_home_services_items" ALTER COLUMN "description" DROP DEFAULT;
  ALTER TABLE "_studio_home_v_version_services_items" ALTER COLUMN "title" DROP DEFAULT;
  ALTER TABLE "_studio_home_v_version_services_items" ALTER COLUMN "description" DROP DEFAULT;`)
}
