import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "studio_home" ADD COLUMN "portfolio_behance_image_id" integer;
  ALTER TABLE "studio_home" ADD COLUMN "portfolio_pinterest_image_id" integer;
  ALTER TABLE "_studio_home_v" ADD COLUMN "version_portfolio_behance_image_id" integer;
  ALTER TABLE "_studio_home_v" ADD COLUMN "version_portfolio_pinterest_image_id" integer;
  ALTER TABLE "studio_home" ADD CONSTRAINT "studio_home_portfolio_behance_image_id_media_id_fk" FOREIGN KEY ("portfolio_behance_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "studio_home" ADD CONSTRAINT "studio_home_portfolio_pinterest_image_id_media_id_fk" FOREIGN KEY ("portfolio_pinterest_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_studio_home_v" ADD CONSTRAINT "_studio_home_v_version_portfolio_behance_image_id_media_id_fk" FOREIGN KEY ("version_portfolio_behance_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_studio_home_v" ADD CONSTRAINT "_studio_home_v_version_portfolio_pinterest_image_id_media_id_fk" FOREIGN KEY ("version_portfolio_pinterest_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "studio_home_portfolio_portfolio_behance_image_idx" ON "studio_home" USING btree ("portfolio_behance_image_id");
  CREATE INDEX "studio_home_portfolio_portfolio_pinterest_image_idx" ON "studio_home" USING btree ("portfolio_pinterest_image_id");
  CREATE INDEX "_studio_home_v_version_portfolio_version_portfolio_behan_idx" ON "_studio_home_v" USING btree ("version_portfolio_behance_image_id");
  CREATE INDEX "_studio_home_v_version_portfolio_version_portfolio_pinte_idx" ON "_studio_home_v" USING btree ("version_portfolio_pinterest_image_id");
  ALTER TABLE "studio_home" DROP COLUMN "portfolio_behance_label";
  ALTER TABLE "studio_home" DROP COLUMN "portfolio_pinterest_label";
  ALTER TABLE "_studio_home_v" DROP COLUMN "version_portfolio_behance_label";
  ALTER TABLE "_studio_home_v" DROP COLUMN "version_portfolio_pinterest_label";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "studio_home" DROP CONSTRAINT "studio_home_portfolio_behance_image_id_media_id_fk";
  
  ALTER TABLE "studio_home" DROP CONSTRAINT "studio_home_portfolio_pinterest_image_id_media_id_fk";
  
  ALTER TABLE "_studio_home_v" DROP CONSTRAINT "_studio_home_v_version_portfolio_behance_image_id_media_id_fk";
  
  ALTER TABLE "_studio_home_v" DROP CONSTRAINT "_studio_home_v_version_portfolio_pinterest_image_id_media_id_fk";
  
  DROP INDEX "studio_home_portfolio_portfolio_behance_image_idx";
  DROP INDEX "studio_home_portfolio_portfolio_pinterest_image_idx";
  DROP INDEX "_studio_home_v_version_portfolio_version_portfolio_behan_idx";
  DROP INDEX "_studio_home_v_version_portfolio_version_portfolio_pinte_idx";
  ALTER TABLE "studio_home" ADD COLUMN "portfolio_behance_label" varchar DEFAULT 'Portfólio Behance' NOT NULL;
  ALTER TABLE "studio_home" ADD COLUMN "portfolio_pinterest_label" varchar DEFAULT 'Portfólio Pinterest' NOT NULL;
  ALTER TABLE "_studio_home_v" ADD COLUMN "version_portfolio_behance_label" varchar DEFAULT 'Portfólio Behance' NOT NULL;
  ALTER TABLE "_studio_home_v" ADD COLUMN "version_portfolio_pinterest_label" varchar DEFAULT 'Portfólio Pinterest' NOT NULL;
  ALTER TABLE "studio_home" DROP COLUMN "portfolio_behance_image_id";
  ALTER TABLE "studio_home" DROP COLUMN "portfolio_pinterest_image_id";
  ALTER TABLE "_studio_home_v" DROP COLUMN "version_portfolio_behance_image_id";
  ALTER TABLE "_studio_home_v" DROP COLUMN "version_portfolio_pinterest_image_id";`)
}
