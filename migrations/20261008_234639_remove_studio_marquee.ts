import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "studio_home_marquee" CASCADE;
  DROP TABLE "_studio_home_v_version_marquee" CASCADE;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "studio_home_marquee" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "_studio_home_v_version_marquee" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  ALTER TABLE "studio_home_marquee" ADD CONSTRAINT "studio_home_marquee_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."studio_home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_studio_home_v_version_marquee" ADD CONSTRAINT "_studio_home_v_version_marquee_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_studio_home_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "studio_home_marquee_order_idx" ON "studio_home_marquee" USING btree ("_order");
  CREATE INDEX "studio_home_marquee_parent_id_idx" ON "studio_home_marquee" USING btree ("_parent_id");
  CREATE INDEX "_studio_home_v_version_marquee_order_idx" ON "_studio_home_v_version_marquee" USING btree ("_order");
  CREATE INDEX "_studio_home_v_version_marquee_parent_id_idx" ON "_studio_home_v_version_marquee" USING btree ("_parent_id");`)
}
