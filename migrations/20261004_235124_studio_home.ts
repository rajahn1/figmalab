import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "studio_home_navigation_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"anchor" varchar NOT NULL
  );
  
  CREATE TABLE "studio_home_about_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "studio_home_services_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"cta_label" varchar NOT NULL,
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE "studio_home_marquee" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "studio_home_products_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"price_label" varchar NOT NULL,
  	"cta_label" varchar NOT NULL,
  	"url" varchar NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE "studio_home_social_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"url" varchar NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE "studio_home" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"seo_title" varchar DEFAULT 'Studio Emi — Design para marcas criativas' NOT NULL,
  	"seo_description" varchar DEFAULT 'Studio de design feito por mulheres, para mulheres. Conheça nossos serviços, produtos e cursos.' NOT NULL,
  	"seo_social_image_id" integer,
  	"navigation_brand_label" varchar DEFAULT 'Studio Emi' NOT NULL,
  	"hero_line_one" varchar DEFAULT 'Boas ideias' NOT NULL,
  	"hero_line_two" varchar DEFAULT 'merecem um olhar' NOT NULL,
  	"hero_accent" varchar DEFAULT 'criativo' NOT NULL,
  	"hero_credit" varchar DEFAULT 'Criado por Studio Emi' NOT NULL,
  	"hero_cta_label" varchar DEFAULT 'Fale com a gente' NOT NULL,
  	"hero_cta_url" varchar DEFAULT 'https://wa.me/5500000000000' NOT NULL,
  	"hero_image_id" integer NOT NULL,
  	"about_heading" varchar DEFAULT 'Somos um estúdio de design feito por mulheres,' NOT NULL,
  	"about_heading_highlight" varchar DEFAULT 'para mulheres.' NOT NULL,
  	"about_image_id" integer NOT NULL,
  	"services_heading_start" varchar DEFAULT 'Nossos' NOT NULL,
  	"services_heading_accent" varchar DEFAULT 'serviços' NOT NULL,
  	"products_heading_start" varchar DEFAULT 'Nossos' NOT NULL,
  	"products_heading_accent" varchar DEFAULT 'produtos' NOT NULL,
  	"portfolio_heading" varchar DEFAULT 'Confira nosso portfólio de design' NOT NULL,
  	"portfolio_behance_label" varchar DEFAULT 'Portfólio Behance' NOT NULL,
  	"portfolio_behance_url" varchar DEFAULT 'https://www.behance.net/' NOT NULL,
  	"portfolio_pinterest_label" varchar DEFAULT 'Portfólio Pinterest' NOT NULL,
  	"portfolio_pinterest_url" varchar DEFAULT 'https://www.pinterest.com/' NOT NULL,
  	"social_heading_start" varchar DEFAULT 'Nossas' NOT NULL,
  	"social_heading_accent" varchar DEFAULT 'redes' NOT NULL,
  	"footer_copyright" varchar DEFAULT 'Studio Emi Design' NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_studio_home_v_version_navigation_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"anchor" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_studio_home_v_version_about_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_studio_home_v_version_services_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"cta_label" varchar NOT NULL,
  	"url" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_studio_home_v_version_marquee" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_studio_home_v_version_products_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"price_label" varchar NOT NULL,
  	"cta_label" varchar NOT NULL,
  	"url" varchar NOT NULL,
  	"image_id" integer NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_studio_home_v_version_social_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"url" varchar NOT NULL,
  	"image_id" integer NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_studio_home_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_seo_title" varchar DEFAULT 'Studio Emi — Design para marcas criativas' NOT NULL,
  	"version_seo_description" varchar DEFAULT 'Studio de design feito por mulheres, para mulheres. Conheça nossos serviços, produtos e cursos.' NOT NULL,
  	"version_seo_social_image_id" integer,
  	"version_navigation_brand_label" varchar DEFAULT 'Studio Emi' NOT NULL,
  	"version_hero_line_one" varchar DEFAULT 'Boas ideias' NOT NULL,
  	"version_hero_line_two" varchar DEFAULT 'merecem um olhar' NOT NULL,
  	"version_hero_accent" varchar DEFAULT 'criativo' NOT NULL,
  	"version_hero_credit" varchar DEFAULT 'Criado por Studio Emi' NOT NULL,
  	"version_hero_cta_label" varchar DEFAULT 'Fale com a gente' NOT NULL,
  	"version_hero_cta_url" varchar DEFAULT 'https://wa.me/5500000000000' NOT NULL,
  	"version_hero_image_id" integer NOT NULL,
  	"version_about_heading" varchar DEFAULT 'Somos um estúdio de design feito por mulheres,' NOT NULL,
  	"version_about_heading_highlight" varchar DEFAULT 'para mulheres.' NOT NULL,
  	"version_about_image_id" integer NOT NULL,
  	"version_services_heading_start" varchar DEFAULT 'Nossos' NOT NULL,
  	"version_services_heading_accent" varchar DEFAULT 'serviços' NOT NULL,
  	"version_products_heading_start" varchar DEFAULT 'Nossos' NOT NULL,
  	"version_products_heading_accent" varchar DEFAULT 'produtos' NOT NULL,
  	"version_portfolio_heading" varchar DEFAULT 'Confira nosso portfólio de design' NOT NULL,
  	"version_portfolio_behance_label" varchar DEFAULT 'Portfólio Behance' NOT NULL,
  	"version_portfolio_behance_url" varchar DEFAULT 'https://www.behance.net/' NOT NULL,
  	"version_portfolio_pinterest_label" varchar DEFAULT 'Portfólio Pinterest' NOT NULL,
  	"version_portfolio_pinterest_url" varchar DEFAULT 'https://www.pinterest.com/' NOT NULL,
  	"version_social_heading_start" varchar DEFAULT 'Nossas' NOT NULL,
  	"version_social_heading_accent" varchar DEFAULT 'redes' NOT NULL,
  	"version_footer_copyright" varchar DEFAULT 'Studio Emi Design' NOT NULL,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "studio_home_navigation_links" ADD CONSTRAINT "studio_home_navigation_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."studio_home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "studio_home_about_paragraphs" ADD CONSTRAINT "studio_home_about_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."studio_home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "studio_home_services_items" ADD CONSTRAINT "studio_home_services_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."studio_home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "studio_home_marquee" ADD CONSTRAINT "studio_home_marquee_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."studio_home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "studio_home_products_items" ADD CONSTRAINT "studio_home_products_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "studio_home_products_items" ADD CONSTRAINT "studio_home_products_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."studio_home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "studio_home_social_items" ADD CONSTRAINT "studio_home_social_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "studio_home_social_items" ADD CONSTRAINT "studio_home_social_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."studio_home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "studio_home" ADD CONSTRAINT "studio_home_seo_social_image_id_media_id_fk" FOREIGN KEY ("seo_social_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "studio_home" ADD CONSTRAINT "studio_home_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "studio_home" ADD CONSTRAINT "studio_home_about_image_id_media_id_fk" FOREIGN KEY ("about_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_studio_home_v_version_navigation_links" ADD CONSTRAINT "_studio_home_v_version_navigation_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_studio_home_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_studio_home_v_version_about_paragraphs" ADD CONSTRAINT "_studio_home_v_version_about_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_studio_home_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_studio_home_v_version_services_items" ADD CONSTRAINT "_studio_home_v_version_services_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_studio_home_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_studio_home_v_version_marquee" ADD CONSTRAINT "_studio_home_v_version_marquee_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_studio_home_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_studio_home_v_version_products_items" ADD CONSTRAINT "_studio_home_v_version_products_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_studio_home_v_version_products_items" ADD CONSTRAINT "_studio_home_v_version_products_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_studio_home_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_studio_home_v_version_social_items" ADD CONSTRAINT "_studio_home_v_version_social_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_studio_home_v_version_social_items" ADD CONSTRAINT "_studio_home_v_version_social_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_studio_home_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_studio_home_v" ADD CONSTRAINT "_studio_home_v_version_seo_social_image_id_media_id_fk" FOREIGN KEY ("version_seo_social_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_studio_home_v" ADD CONSTRAINT "_studio_home_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_studio_home_v" ADD CONSTRAINT "_studio_home_v_version_about_image_id_media_id_fk" FOREIGN KEY ("version_about_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "studio_home_navigation_links_order_idx" ON "studio_home_navigation_links" USING btree ("_order");
  CREATE INDEX "studio_home_navigation_links_parent_id_idx" ON "studio_home_navigation_links" USING btree ("_parent_id");
  CREATE INDEX "studio_home_about_paragraphs_order_idx" ON "studio_home_about_paragraphs" USING btree ("_order");
  CREATE INDEX "studio_home_about_paragraphs_parent_id_idx" ON "studio_home_about_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "studio_home_services_items_order_idx" ON "studio_home_services_items" USING btree ("_order");
  CREATE INDEX "studio_home_services_items_parent_id_idx" ON "studio_home_services_items" USING btree ("_parent_id");
  CREATE INDEX "studio_home_marquee_order_idx" ON "studio_home_marquee" USING btree ("_order");
  CREATE INDEX "studio_home_marquee_parent_id_idx" ON "studio_home_marquee" USING btree ("_parent_id");
  CREATE INDEX "studio_home_products_items_order_idx" ON "studio_home_products_items" USING btree ("_order");
  CREATE INDEX "studio_home_products_items_parent_id_idx" ON "studio_home_products_items" USING btree ("_parent_id");
  CREATE INDEX "studio_home_products_items_image_idx" ON "studio_home_products_items" USING btree ("image_id");
  CREATE INDEX "studio_home_social_items_order_idx" ON "studio_home_social_items" USING btree ("_order");
  CREATE INDEX "studio_home_social_items_parent_id_idx" ON "studio_home_social_items" USING btree ("_parent_id");
  CREATE INDEX "studio_home_social_items_image_idx" ON "studio_home_social_items" USING btree ("image_id");
  CREATE INDEX "studio_home_seo_seo_social_image_idx" ON "studio_home" USING btree ("seo_social_image_id");
  CREATE INDEX "studio_home_hero_hero_image_idx" ON "studio_home" USING btree ("hero_image_id");
  CREATE INDEX "studio_home_about_about_image_idx" ON "studio_home" USING btree ("about_image_id");
  CREATE INDEX "_studio_home_v_version_navigation_links_order_idx" ON "_studio_home_v_version_navigation_links" USING btree ("_order");
  CREATE INDEX "_studio_home_v_version_navigation_links_parent_id_idx" ON "_studio_home_v_version_navigation_links" USING btree ("_parent_id");
  CREATE INDEX "_studio_home_v_version_about_paragraphs_order_idx" ON "_studio_home_v_version_about_paragraphs" USING btree ("_order");
  CREATE INDEX "_studio_home_v_version_about_paragraphs_parent_id_idx" ON "_studio_home_v_version_about_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "_studio_home_v_version_services_items_order_idx" ON "_studio_home_v_version_services_items" USING btree ("_order");
  CREATE INDEX "_studio_home_v_version_services_items_parent_id_idx" ON "_studio_home_v_version_services_items" USING btree ("_parent_id");
  CREATE INDEX "_studio_home_v_version_marquee_order_idx" ON "_studio_home_v_version_marquee" USING btree ("_order");
  CREATE INDEX "_studio_home_v_version_marquee_parent_id_idx" ON "_studio_home_v_version_marquee" USING btree ("_parent_id");
  CREATE INDEX "_studio_home_v_version_products_items_order_idx" ON "_studio_home_v_version_products_items" USING btree ("_order");
  CREATE INDEX "_studio_home_v_version_products_items_parent_id_idx" ON "_studio_home_v_version_products_items" USING btree ("_parent_id");
  CREATE INDEX "_studio_home_v_version_products_items_image_idx" ON "_studio_home_v_version_products_items" USING btree ("image_id");
  CREATE INDEX "_studio_home_v_version_social_items_order_idx" ON "_studio_home_v_version_social_items" USING btree ("_order");
  CREATE INDEX "_studio_home_v_version_social_items_parent_id_idx" ON "_studio_home_v_version_social_items" USING btree ("_parent_id");
  CREATE INDEX "_studio_home_v_version_social_items_image_idx" ON "_studio_home_v_version_social_items" USING btree ("image_id");
  CREATE INDEX "_studio_home_v_version_seo_version_seo_social_image_idx" ON "_studio_home_v" USING btree ("version_seo_social_image_id");
  CREATE INDEX "_studio_home_v_version_hero_version_hero_image_idx" ON "_studio_home_v" USING btree ("version_hero_image_id");
  CREATE INDEX "_studio_home_v_version_about_version_about_image_idx" ON "_studio_home_v" USING btree ("version_about_image_id");
  CREATE INDEX "_studio_home_v_created_at_idx" ON "_studio_home_v" USING btree ("created_at");
  CREATE INDEX "_studio_home_v_updated_at_idx" ON "_studio_home_v" USING btree ("updated_at");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "studio_home_navigation_links" CASCADE;
  DROP TABLE "studio_home_about_paragraphs" CASCADE;
  DROP TABLE "studio_home_services_items" CASCADE;
  DROP TABLE "studio_home_marquee" CASCADE;
  DROP TABLE "studio_home_products_items" CASCADE;
  DROP TABLE "studio_home_social_items" CASCADE;
  DROP TABLE "studio_home" CASCADE;
  DROP TABLE "_studio_home_v_version_navigation_links" CASCADE;
  DROP TABLE "_studio_home_v_version_about_paragraphs" CASCADE;
  DROP TABLE "_studio_home_v_version_services_items" CASCADE;
  DROP TABLE "_studio_home_v_version_marquee" CASCADE;
  DROP TABLE "_studio_home_v_version_products_items" CASCADE;
  DROP TABLE "_studio_home_v_version_social_items" CASCADE;
  DROP TABLE "_studio_home_v" CASCADE;`)
}
