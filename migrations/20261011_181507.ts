import { MigrateUpArgs, MigrateDownArgs, sql } from "@payloadcms/db-postgres";

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   UPDATE "landing_page_comparison_heading"
  SET "break_before" = false
  WHERE trim("text") = 'para';
  UPDATE "landing_page_method_paragraphs"
  SET "text" = 'Saia do amadorismo e domine o método.
que transforma criatividade travada em design de post estratégico.'
  WHERE "text" = 'Saia do amadorismo e domine o método que transforma criatividade travada em design de post estratégico.';
  DROP TABLE "landing_page_gallery_statement" CASCADE;
  DROP TABLE "_landing_page_v_version_gallery_statement" CASCADE;
  ALTER TABLE "landing_page" DROP COLUMN "gallery_callout";
  ALTER TABLE "landing_page" DROP COLUMN "gallery_callout_highlight";
  ALTER TABLE "_landing_page_v" DROP COLUMN "version_gallery_callout";
  ALTER TABLE "_landing_page_v" DROP COLUMN "version_gallery_callout_highlight";
  DROP TYPE "public"."enum_landing_page_gallery_statement_style";
  DROP TYPE "public"."enum__landing_page_v_version_gallery_statement_style";`);
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_landing_page_gallery_statement_style" AS ENUM('default', 'light', 'bold', 'italic', 'editorial', 'editorialItalic', 'pink', 'pinkItalic');
  CREATE TYPE "public"."enum__landing_page_v_version_gallery_statement_style" AS ENUM('default', 'light', 'bold', 'italic', 'editorial', 'editorialItalic', 'pink', 'pinkItalic');
  CREATE TABLE "landing_page_gallery_statement" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"style" "enum_landing_page_gallery_statement_style" DEFAULT 'default' NOT NULL,
  	"break_before" boolean DEFAULT false
  );
  
  CREATE TABLE "_landing_page_v_version_gallery_statement" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"style" "enum__landing_page_v_version_gallery_statement_style" DEFAULT 'default' NOT NULL,
  	"break_before" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  ALTER TABLE "landing_page" ADD COLUMN "gallery_callout" varchar DEFAULT 'Você pode continuar tentando, travando, duvidando... ou pode aprender um processo que vai te acompanhar em qualquer projeto de design de post, cliente ou estilo gráfico.' NOT NULL;
  ALTER TABLE "landing_page" ADD COLUMN "gallery_callout_highlight" varchar DEFAULT 'processo que vai te acompanhar em qualquer projeto' NOT NULL;
  ALTER TABLE "_landing_page_v" ADD COLUMN "version_gallery_callout" varchar DEFAULT 'Você pode continuar tentando, travando, duvidando... ou pode aprender um processo que vai te acompanhar em qualquer projeto de design de post, cliente ou estilo gráfico.' NOT NULL;
  ALTER TABLE "_landing_page_v" ADD COLUMN "version_gallery_callout_highlight" varchar DEFAULT 'processo que vai te acompanhar em qualquer projeto' NOT NULL;
  ALTER TABLE "landing_page_gallery_statement" ADD CONSTRAINT "landing_page_gallery_statement_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_landing_page_v_version_gallery_statement" ADD CONSTRAINT "_landing_page_v_version_gallery_statement_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_landing_page_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "landing_page_gallery_statement_order_idx" ON "landing_page_gallery_statement" USING btree ("_order");
  CREATE INDEX "landing_page_gallery_statement_parent_id_idx" ON "landing_page_gallery_statement" USING btree ("_parent_id");
  CREATE INDEX "_landing_page_v_version_gallery_statement_order_idx" ON "_landing_page_v_version_gallery_statement" USING btree ("_order");
  CREATE INDEX "_landing_page_v_version_gallery_statement_parent_id_idx" ON "_landing_page_v_version_gallery_statement" USING btree ("_parent_id");
  UPDATE "landing_page_comparison_heading"
  SET "break_before" = true
  WHERE trim("text") = 'para';
  UPDATE "landing_page_method_paragraphs"
  SET "text" = 'Saia do amadorismo e domine o método que transforma criatividade travada em design de post estratégico.'
  WHERE "text" = 'Saia do amadorismo e domine o método.
que transforma criatividade travada em design de post estratégico.';`);
}
