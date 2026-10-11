import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "studio_home_services_items" ADD COLUMN "image_id" integer;
  ALTER TABLE "_studio_home_v_version_services_items" ADD COLUMN "image_id" integer;
  ALTER TABLE "studio_home_services_items" ADD CONSTRAINT "studio_home_services_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_studio_home_v_version_services_items" ADD CONSTRAINT "_studio_home_v_version_services_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "studio_home_services_items_image_idx" ON "studio_home_services_items" USING btree ("image_id");
  CREATE INDEX "_studio_home_v_version_services_items_image_idx" ON "_studio_home_v_version_services_items" USING btree ("image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "studio_home_services_items" DROP CONSTRAINT "studio_home_services_items_image_id_media_id_fk";
  
  ALTER TABLE "_studio_home_v_version_services_items" DROP CONSTRAINT "_studio_home_v_version_services_items_image_id_media_id_fk";
  
  DROP INDEX "studio_home_services_items_image_idx";
  DROP INDEX "_studio_home_v_version_services_items_image_idx";
  ALTER TABLE "studio_home_services_items" DROP COLUMN "image_id";
  ALTER TABLE "_studio_home_v_version_services_items" DROP COLUMN "image_id";`)
}
