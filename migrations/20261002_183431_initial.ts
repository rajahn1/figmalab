import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_users_role" AS ENUM('admin', 'editor');
  CREATE TYPE "public"."enum_landing_page_hero_heading_style" AS ENUM('default', 'light', 'bold', 'italic', 'editorial', 'editorialItalic', 'pink', 'pinkItalic');
  CREATE TYPE "public"."enum_landing_page_comparison_heading_style" AS ENUM('default', 'light', 'bold', 'italic', 'editorial', 'editorialItalic', 'pink', 'pinkItalic');
  CREATE TYPE "public"."enum_landing_page_method_heading_style" AS ENUM('default', 'light', 'bold', 'italic', 'editorial', 'editorialItalic', 'pink', 'pinkItalic');
  CREATE TYPE "public"."enum_landing_page_receives_heading_style" AS ENUM('default', 'light', 'bold', 'italic', 'editorial', 'editorialItalic', 'pink', 'pinkItalic');
  CREATE TYPE "public"."enum_landing_page_modules_heading_style" AS ENUM('default', 'light', 'bold', 'italic', 'editorial', 'editorialItalic', 'pink', 'pinkItalic');
  CREATE TYPE "public"."enum_landing_page_certificate_heading_style" AS ENUM('default', 'light', 'bold', 'italic', 'editorial', 'editorialItalic', 'pink', 'pinkItalic');
  CREATE TYPE "public"."enum_landing_page_gallery_statement_style" AS ENUM('default', 'light', 'bold', 'italic', 'editorial', 'editorialItalic', 'pink', 'pinkItalic');
  CREATE TYPE "public"."enum_landing_page_instructor_heading_style" AS ENUM('default', 'light', 'bold', 'italic', 'editorial', 'editorialItalic', 'pink', 'pinkItalic');
  CREATE TYPE "public"."enum_landing_page_faq_heading_style" AS ENUM('default', 'light', 'bold', 'italic', 'editorial', 'editorialItalic', 'pink', 'pinkItalic');
  CREATE TYPE "public"."enum_landing_page_settings_currency" AS ENUM('BRL');
  CREATE TYPE "public"."enum__landing_page_v_version_hero_heading_style" AS ENUM('default', 'light', 'bold', 'italic', 'editorial', 'editorialItalic', 'pink', 'pinkItalic');
  CREATE TYPE "public"."enum__landing_page_v_version_comparison_heading_style" AS ENUM('default', 'light', 'bold', 'italic', 'editorial', 'editorialItalic', 'pink', 'pinkItalic');
  CREATE TYPE "public"."enum__landing_page_v_version_method_heading_style" AS ENUM('default', 'light', 'bold', 'italic', 'editorial', 'editorialItalic', 'pink', 'pinkItalic');
  CREATE TYPE "public"."enum__landing_page_v_version_receives_heading_style" AS ENUM('default', 'light', 'bold', 'italic', 'editorial', 'editorialItalic', 'pink', 'pinkItalic');
  CREATE TYPE "public"."enum__landing_page_v_version_modules_heading_style" AS ENUM('default', 'light', 'bold', 'italic', 'editorial', 'editorialItalic', 'pink', 'pinkItalic');
  CREATE TYPE "public"."enum__landing_page_v_version_certificate_heading_style" AS ENUM('default', 'light', 'bold', 'italic', 'editorial', 'editorialItalic', 'pink', 'pinkItalic');
  CREATE TYPE "public"."enum__landing_page_v_version_gallery_statement_style" AS ENUM('default', 'light', 'bold', 'italic', 'editorial', 'editorialItalic', 'pink', 'pinkItalic');
  CREATE TYPE "public"."enum__landing_page_v_version_instructor_heading_style" AS ENUM('default', 'light', 'bold', 'italic', 'editorial', 'editorialItalic', 'pink', 'pinkItalic');
  CREATE TYPE "public"."enum__landing_page_v_version_faq_heading_style" AS ENUM('default', 'light', 'bold', 'italic', 'editorial', 'editorialItalic', 'pink', 'pinkItalic');
  CREATE TYPE "public"."enum__landing_page_v_version_settings_currency" AS ENUM('BRL');
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"role" "enum_users_role" DEFAULT 'admin' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"reset_password_requested_at" timestamp(3) with time zone,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"seed_key" varchar,
  	"prefix" varchar DEFAULT 'landing',
  	"_objectkey" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"media_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "landing_page_hero_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"style" "enum_landing_page_hero_heading_style" DEFAULT 'default' NOT NULL,
  	"break_before" boolean DEFAULT false
  );
  
  CREATE TABLE "landing_page_comparison_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"style" "enum_landing_page_comparison_heading_style" DEFAULT 'default' NOT NULL,
  	"break_before" boolean DEFAULT false
  );
  
  CREATE TABLE "cmp_negative" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "cmp_positive" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "landing_page_method_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"style" "enum_landing_page_method_heading_style" DEFAULT 'default' NOT NULL,
  	"break_before" boolean DEFAULT false
  );
  
  CREATE TABLE "landing_page_method_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "landing_page_receives_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"style" "enum_landing_page_receives_heading_style" DEFAULT 'default' NOT NULL,
  	"break_before" boolean DEFAULT false
  );
  
  CREATE TABLE "landing_page_modules_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"style" "enum_landing_page_modules_heading_style" DEFAULT 'default' NOT NULL,
  	"break_before" boolean DEFAULT false
  );
  
  CREATE TABLE "landing_page_modules_items_lessons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "landing_page_modules_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE "landing_page_certificate_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"style" "enum_landing_page_certificate_heading_style" DEFAULT 'default' NOT NULL,
  	"break_before" boolean DEFAULT false
  );
  
  CREATE TABLE "landing_page_gallery_statement" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"style" "enum_landing_page_gallery_statement_style" DEFAULT 'default' NOT NULL,
  	"break_before" boolean DEFAULT false
  );
  
  CREATE TABLE "landing_page_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE "landing_page_feedback_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE "landing_page_offer_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "landing_page_instructor_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"style" "enum_landing_page_instructor_heading_style" DEFAULT 'default' NOT NULL,
  	"break_before" boolean DEFAULT false
  );
  
  CREATE TABLE "landing_page_instructor_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "landing_page_faq_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"style" "enum_landing_page_faq_heading_style" DEFAULT 'default' NOT NULL,
  	"break_before" boolean DEFAULT false
  );
  
  CREATE TABLE "landing_page_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" varchar NOT NULL
  );
  
  CREATE TABLE "landing_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"seo_title" varchar DEFAULT 'Figma Lab' NOT NULL,
  	"seo_description" varchar DEFAULT 'Landing page do curso FigmaLab' NOT NULL,
  	"seo_social_image_id" integer,
  	"settings_course_name" varchar DEFAULT 'FigmaLab' NOT NULL,
  	"settings_checkout_url" varchar DEFAULT 'https://pay.kiwify.com.br/eADN6hR' NOT NULL,
  	"settings_support_url" varchar DEFAULT 'https://wa.me/message/KS4FVL6M7D6KL1' NOT NULL,
  	"settings_cash_price" numeric DEFAULT 297 NOT NULL,
  	"settings_installment_count" numeric DEFAULT 12 NOT NULL,
  	"settings_installment_amount" numeric DEFAULT 30.72 NOT NULL,
  	"settings_currency" "enum_landing_page_settings_currency" DEFAULT 'BRL' NOT NULL,
  	"settings_default_cta_label" varchar DEFAULT 'Eu quero fazer parte' NOT NULL,
  	"settings_purchase_cta_label" varchar DEFAULT 'Quero entrar no FigmaLab!' NOT NULL,
  	"settings_support_cta_label" varchar DEFAULT 'Fale com o suporte' NOT NULL,
  	"hero_description" varchar DEFAULT 'Chega de travar na frente da tela, depender
  de referências do Pinterest ou criar layouts
  no improviso. No FigmaLab você aprende
  exatamente como' NOT NULL,
  	"hero_description_highlight" varchar DEFAULT 'pensar, organizar e
  construir designs de posts' NOT NULL,
  	"hero_mobile_image_id" integer NOT NULL,
  	"hero_desktop_image_id" integer NOT NULL,
  	"comparison_choice_image_id" integer NOT NULL,
  	"method_mobile_background_id" integer NOT NULL,
  	"method_desktop_background_id" integer NOT NULL,
  	"receives_mobile_background_id" integer NOT NULL,
  	"receives_desktop_background_id" integer NOT NULL,
  	"certificate_description" varchar DEFAULT 'Ao concluir sua jornada no FigmaLab,
  você recebe certificado de conclusão
  para registrar sua evolução e tudo o
  que aprendeu ao longo do curso.' NOT NULL,
  	"certificate_image_id" integer NOT NULL,
  	"gallery_callout" varchar DEFAULT 'Você pode continuar tentando, travando, duvidando... ou pode aprender um processo que vai te acompanhar em qualquer projeto de design de post, cliente ou estilo gráfico.' NOT NULL,
  	"gallery_callout_highlight" varchar DEFAULT 'processo que vai te acompanhar em qualquer projeto' NOT NULL,
  	"gallery_heading" varchar DEFAULT 'Veja os carrosséis que você
  vai aprender no curso' NOT NULL,
  	"feedback_heading_start" varchar DEFAULT 'Feed' NOT NULL,
  	"feedback_heading_end" varchar DEFAULT 'backs' NOT NULL,
  	"instructor_mobile_image_id" integer NOT NULL,
  	"instructor_desktop_image_id" integer NOT NULL,
  	"support_heading" varchar DEFAULT 'Ficou
  com
  alguma
  dúvida?' NOT NULL,
  	"support_body" varchar DEFAULT 'Se tiver qualquer dúvida sobre sua inscrição no FigmaLab, conte com nosso suporte exclusivo via WhatsApp. Nossa equipe está pronta para te atender e tirar todas as suas dúvidas.' NOT NULL,
  	"footer_company_name" varchar DEFAULT 'Studio Emi Design' NOT NULL,
  	"footer_rights_text" varchar DEFAULT 'Todos os direitos reservados' NOT NULL,
  	"footer_back_to_top_label" varchar DEFAULT 'Voltar para o topo' NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_landing_page_v_version_hero_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"style" "enum__landing_page_v_version_hero_heading_style" DEFAULT 'default' NOT NULL,
  	"break_before" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_landing_page_v_version_comparison_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"style" "enum__landing_page_v_version_comparison_heading_style" DEFAULT 'default' NOT NULL,
  	"break_before" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_cmp_negative_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_cmp_positive_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_landing_page_v_version_method_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"style" "enum__landing_page_v_version_method_heading_style" DEFAULT 'default' NOT NULL,
  	"break_before" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_landing_page_v_version_method_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_landing_page_v_version_receives_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"style" "enum__landing_page_v_version_receives_heading_style" DEFAULT 'default' NOT NULL,
  	"break_before" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_landing_page_v_version_modules_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"style" "enum__landing_page_v_version_modules_heading_style" DEFAULT 'default' NOT NULL,
  	"break_before" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_landing_page_v_version_modules_items_lessons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_landing_page_v_version_modules_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"image_id" integer NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_landing_page_v_version_certificate_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"style" "enum__landing_page_v_version_certificate_heading_style" DEFAULT 'default' NOT NULL,
  	"break_before" boolean DEFAULT false,
  	"_uuid" varchar
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
  
  CREATE TABLE "_landing_page_v_version_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_landing_page_v_version_feedback_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_landing_page_v_version_offer_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_landing_page_v_version_instructor_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"style" "enum__landing_page_v_version_instructor_heading_style" DEFAULT 'default' NOT NULL,
  	"break_before" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_landing_page_v_version_instructor_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_landing_page_v_version_faq_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"style" "enum__landing_page_v_version_faq_heading_style" DEFAULT 'default' NOT NULL,
  	"break_before" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_landing_page_v_version_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_landing_page_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_seo_title" varchar DEFAULT 'Figma Lab' NOT NULL,
  	"version_seo_description" varchar DEFAULT 'Landing page do curso FigmaLab' NOT NULL,
  	"version_seo_social_image_id" integer,
  	"version_settings_course_name" varchar DEFAULT 'FigmaLab' NOT NULL,
  	"version_settings_checkout_url" varchar DEFAULT 'https://pay.kiwify.com.br/eADN6hR' NOT NULL,
  	"version_settings_support_url" varchar DEFAULT 'https://wa.me/message/KS4FVL6M7D6KL1' NOT NULL,
  	"version_settings_cash_price" numeric DEFAULT 297 NOT NULL,
  	"version_settings_installment_count" numeric DEFAULT 12 NOT NULL,
  	"version_settings_installment_amount" numeric DEFAULT 30.72 NOT NULL,
  	"version_settings_currency" "enum__landing_page_v_version_settings_currency" DEFAULT 'BRL' NOT NULL,
  	"version_settings_default_cta_label" varchar DEFAULT 'Eu quero fazer parte' NOT NULL,
  	"version_settings_purchase_cta_label" varchar DEFAULT 'Quero entrar no FigmaLab!' NOT NULL,
  	"version_settings_support_cta_label" varchar DEFAULT 'Fale com o suporte' NOT NULL,
  	"version_hero_description" varchar DEFAULT 'Chega de travar na frente da tela, depender
  de referências do Pinterest ou criar layouts
  no improviso. No FigmaLab você aprende
  exatamente como' NOT NULL,
  	"version_hero_description_highlight" varchar DEFAULT 'pensar, organizar e
  construir designs de posts' NOT NULL,
  	"version_hero_mobile_image_id" integer NOT NULL,
  	"version_hero_desktop_image_id" integer NOT NULL,
  	"version_comparison_choice_image_id" integer NOT NULL,
  	"version_method_mobile_background_id" integer NOT NULL,
  	"version_method_desktop_background_id" integer NOT NULL,
  	"version_receives_mobile_background_id" integer NOT NULL,
  	"version_receives_desktop_background_id" integer NOT NULL,
  	"version_certificate_description" varchar DEFAULT 'Ao concluir sua jornada no FigmaLab,
  você recebe certificado de conclusão
  para registrar sua evolução e tudo o
  que aprendeu ao longo do curso.' NOT NULL,
  	"version_certificate_image_id" integer NOT NULL,
  	"version_gallery_callout" varchar DEFAULT 'Você pode continuar tentando, travando, duvidando... ou pode aprender um processo que vai te acompanhar em qualquer projeto de design de post, cliente ou estilo gráfico.' NOT NULL,
  	"version_gallery_callout_highlight" varchar DEFAULT 'processo que vai te acompanhar em qualquer projeto' NOT NULL,
  	"version_gallery_heading" varchar DEFAULT 'Veja os carrosséis que você
  vai aprender no curso' NOT NULL,
  	"version_feedback_heading_start" varchar DEFAULT 'Feed' NOT NULL,
  	"version_feedback_heading_end" varchar DEFAULT 'backs' NOT NULL,
  	"version_instructor_mobile_image_id" integer NOT NULL,
  	"version_instructor_desktop_image_id" integer NOT NULL,
  	"version_support_heading" varchar DEFAULT 'Ficou
  com
  alguma
  dúvida?' NOT NULL,
  	"version_support_body" varchar DEFAULT 'Se tiver qualquer dúvida sobre sua inscrição no FigmaLab, conte com nosso suporte exclusivo via WhatsApp. Nossa equipe está pronta para te atender e tirar todas as suas dúvidas.' NOT NULL,
  	"version_footer_company_name" varchar DEFAULT 'Studio Emi Design' NOT NULL,
  	"version_footer_rights_text" varchar DEFAULT 'Todos os direitos reservados' NOT NULL,
  	"version_footer_back_to_top_label" varchar DEFAULT 'Voltar para o topo' NOT NULL,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "landing_page_hero_heading" ADD CONSTRAINT "landing_page_hero_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "landing_page_comparison_heading" ADD CONSTRAINT "landing_page_comparison_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cmp_negative" ADD CONSTRAINT "cmp_negative_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cmp_positive" ADD CONSTRAINT "cmp_positive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "landing_page_method_heading" ADD CONSTRAINT "landing_page_method_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "landing_page_method_paragraphs" ADD CONSTRAINT "landing_page_method_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "landing_page_receives_heading" ADD CONSTRAINT "landing_page_receives_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "landing_page_modules_heading" ADD CONSTRAINT "landing_page_modules_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "landing_page_modules_items_lessons" ADD CONSTRAINT "landing_page_modules_items_lessons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing_page_modules_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "landing_page_modules_items" ADD CONSTRAINT "landing_page_modules_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "landing_page_modules_items" ADD CONSTRAINT "landing_page_modules_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "landing_page_certificate_heading" ADD CONSTRAINT "landing_page_certificate_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "landing_page_gallery_statement" ADD CONSTRAINT "landing_page_gallery_statement_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "landing_page_gallery_images" ADD CONSTRAINT "landing_page_gallery_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "landing_page_gallery_images" ADD CONSTRAINT "landing_page_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "landing_page_feedback_images" ADD CONSTRAINT "landing_page_feedback_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "landing_page_feedback_images" ADD CONSTRAINT "landing_page_feedback_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "landing_page_offer_benefits" ADD CONSTRAINT "landing_page_offer_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "landing_page_instructor_heading" ADD CONSTRAINT "landing_page_instructor_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "landing_page_instructor_paragraphs" ADD CONSTRAINT "landing_page_instructor_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "landing_page_faq_heading" ADD CONSTRAINT "landing_page_faq_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "landing_page_faq_items" ADD CONSTRAINT "landing_page_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "landing_page" ADD CONSTRAINT "landing_page_seo_social_image_id_media_id_fk" FOREIGN KEY ("seo_social_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "landing_page" ADD CONSTRAINT "landing_page_hero_mobile_image_id_media_id_fk" FOREIGN KEY ("hero_mobile_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "landing_page" ADD CONSTRAINT "landing_page_hero_desktop_image_id_media_id_fk" FOREIGN KEY ("hero_desktop_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "landing_page" ADD CONSTRAINT "landing_page_comparison_choice_image_id_media_id_fk" FOREIGN KEY ("comparison_choice_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "landing_page" ADD CONSTRAINT "landing_page_method_mobile_background_id_media_id_fk" FOREIGN KEY ("method_mobile_background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "landing_page" ADD CONSTRAINT "landing_page_method_desktop_background_id_media_id_fk" FOREIGN KEY ("method_desktop_background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "landing_page" ADD CONSTRAINT "landing_page_receives_mobile_background_id_media_id_fk" FOREIGN KEY ("receives_mobile_background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "landing_page" ADD CONSTRAINT "landing_page_receives_desktop_background_id_media_id_fk" FOREIGN KEY ("receives_desktop_background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "landing_page" ADD CONSTRAINT "landing_page_certificate_image_id_media_id_fk" FOREIGN KEY ("certificate_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "landing_page" ADD CONSTRAINT "landing_page_instructor_mobile_image_id_media_id_fk" FOREIGN KEY ("instructor_mobile_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "landing_page" ADD CONSTRAINT "landing_page_instructor_desktop_image_id_media_id_fk" FOREIGN KEY ("instructor_desktop_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_landing_page_v_version_hero_heading" ADD CONSTRAINT "_landing_page_v_version_hero_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_landing_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_landing_page_v_version_comparison_heading" ADD CONSTRAINT "_landing_page_v_version_comparison_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_landing_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_cmp_negative_v" ADD CONSTRAINT "_cmp_negative_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_landing_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_cmp_positive_v" ADD CONSTRAINT "_cmp_positive_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_landing_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_landing_page_v_version_method_heading" ADD CONSTRAINT "_landing_page_v_version_method_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_landing_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_landing_page_v_version_method_paragraphs" ADD CONSTRAINT "_landing_page_v_version_method_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_landing_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_landing_page_v_version_receives_heading" ADD CONSTRAINT "_landing_page_v_version_receives_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_landing_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_landing_page_v_version_modules_heading" ADD CONSTRAINT "_landing_page_v_version_modules_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_landing_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_landing_page_v_version_modules_items_lessons" ADD CONSTRAINT "_landing_page_v_version_modules_items_lessons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_landing_page_v_version_modules_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_landing_page_v_version_modules_items" ADD CONSTRAINT "_landing_page_v_version_modules_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_landing_page_v_version_modules_items" ADD CONSTRAINT "_landing_page_v_version_modules_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_landing_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_landing_page_v_version_certificate_heading" ADD CONSTRAINT "_landing_page_v_version_certificate_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_landing_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_landing_page_v_version_gallery_statement" ADD CONSTRAINT "_landing_page_v_version_gallery_statement_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_landing_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_landing_page_v_version_gallery_images" ADD CONSTRAINT "_landing_page_v_version_gallery_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_landing_page_v_version_gallery_images" ADD CONSTRAINT "_landing_page_v_version_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_landing_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_landing_page_v_version_feedback_images" ADD CONSTRAINT "_landing_page_v_version_feedback_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_landing_page_v_version_feedback_images" ADD CONSTRAINT "_landing_page_v_version_feedback_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_landing_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_landing_page_v_version_offer_benefits" ADD CONSTRAINT "_landing_page_v_version_offer_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_landing_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_landing_page_v_version_instructor_heading" ADD CONSTRAINT "_landing_page_v_version_instructor_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_landing_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_landing_page_v_version_instructor_paragraphs" ADD CONSTRAINT "_landing_page_v_version_instructor_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_landing_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_landing_page_v_version_faq_heading" ADD CONSTRAINT "_landing_page_v_version_faq_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_landing_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_landing_page_v_version_faq_items" ADD CONSTRAINT "_landing_page_v_version_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_landing_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_landing_page_v" ADD CONSTRAINT "_landing_page_v_version_seo_social_image_id_media_id_fk" FOREIGN KEY ("version_seo_social_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_landing_page_v" ADD CONSTRAINT "_landing_page_v_version_hero_mobile_image_id_media_id_fk" FOREIGN KEY ("version_hero_mobile_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_landing_page_v" ADD CONSTRAINT "_landing_page_v_version_hero_desktop_image_id_media_id_fk" FOREIGN KEY ("version_hero_desktop_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_landing_page_v" ADD CONSTRAINT "_landing_page_v_version_comparison_choice_image_id_media_id_fk" FOREIGN KEY ("version_comparison_choice_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_landing_page_v" ADD CONSTRAINT "_landing_page_v_version_method_mobile_background_id_media_id_fk" FOREIGN KEY ("version_method_mobile_background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_landing_page_v" ADD CONSTRAINT "_landing_page_v_version_method_desktop_background_id_media_id_fk" FOREIGN KEY ("version_method_desktop_background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_landing_page_v" ADD CONSTRAINT "_landing_page_v_version_receives_mobile_background_id_media_id_fk" FOREIGN KEY ("version_receives_mobile_background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_landing_page_v" ADD CONSTRAINT "_landing_page_v_version_receives_desktop_background_id_media_id_fk" FOREIGN KEY ("version_receives_desktop_background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_landing_page_v" ADD CONSTRAINT "_landing_page_v_version_certificate_image_id_media_id_fk" FOREIGN KEY ("version_certificate_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_landing_page_v" ADD CONSTRAINT "_landing_page_v_version_instructor_mobile_image_id_media_id_fk" FOREIGN KEY ("version_instructor_mobile_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_landing_page_v" ADD CONSTRAINT "_landing_page_v_version_instructor_desktop_image_id_media_id_fk" FOREIGN KEY ("version_instructor_desktop_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE UNIQUE INDEX "media_seed_key_idx" ON "media" USING btree ("seed_key");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "landing_page_hero_heading_order_idx" ON "landing_page_hero_heading" USING btree ("_order");
  CREATE INDEX "landing_page_hero_heading_parent_id_idx" ON "landing_page_hero_heading" USING btree ("_parent_id");
  CREATE INDEX "landing_page_comparison_heading_order_idx" ON "landing_page_comparison_heading" USING btree ("_order");
  CREATE INDEX "landing_page_comparison_heading_parent_id_idx" ON "landing_page_comparison_heading" USING btree ("_parent_id");
  CREATE INDEX "cmp_negative_order_idx" ON "cmp_negative" USING btree ("_order");
  CREATE INDEX "cmp_negative_parent_id_idx" ON "cmp_negative" USING btree ("_parent_id");
  CREATE INDEX "cmp_positive_order_idx" ON "cmp_positive" USING btree ("_order");
  CREATE INDEX "cmp_positive_parent_id_idx" ON "cmp_positive" USING btree ("_parent_id");
  CREATE INDEX "landing_page_method_heading_order_idx" ON "landing_page_method_heading" USING btree ("_order");
  CREATE INDEX "landing_page_method_heading_parent_id_idx" ON "landing_page_method_heading" USING btree ("_parent_id");
  CREATE INDEX "landing_page_method_paragraphs_order_idx" ON "landing_page_method_paragraphs" USING btree ("_order");
  CREATE INDEX "landing_page_method_paragraphs_parent_id_idx" ON "landing_page_method_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "landing_page_receives_heading_order_idx" ON "landing_page_receives_heading" USING btree ("_order");
  CREATE INDEX "landing_page_receives_heading_parent_id_idx" ON "landing_page_receives_heading" USING btree ("_parent_id");
  CREATE INDEX "landing_page_modules_heading_order_idx" ON "landing_page_modules_heading" USING btree ("_order");
  CREATE INDEX "landing_page_modules_heading_parent_id_idx" ON "landing_page_modules_heading" USING btree ("_parent_id");
  CREATE INDEX "landing_page_modules_items_lessons_order_idx" ON "landing_page_modules_items_lessons" USING btree ("_order");
  CREATE INDEX "landing_page_modules_items_lessons_parent_id_idx" ON "landing_page_modules_items_lessons" USING btree ("_parent_id");
  CREATE INDEX "landing_page_modules_items_order_idx" ON "landing_page_modules_items" USING btree ("_order");
  CREATE INDEX "landing_page_modules_items_parent_id_idx" ON "landing_page_modules_items" USING btree ("_parent_id");
  CREATE INDEX "landing_page_modules_items_image_idx" ON "landing_page_modules_items" USING btree ("image_id");
  CREATE INDEX "landing_page_certificate_heading_order_idx" ON "landing_page_certificate_heading" USING btree ("_order");
  CREATE INDEX "landing_page_certificate_heading_parent_id_idx" ON "landing_page_certificate_heading" USING btree ("_parent_id");
  CREATE INDEX "landing_page_gallery_statement_order_idx" ON "landing_page_gallery_statement" USING btree ("_order");
  CREATE INDEX "landing_page_gallery_statement_parent_id_idx" ON "landing_page_gallery_statement" USING btree ("_parent_id");
  CREATE INDEX "landing_page_gallery_images_order_idx" ON "landing_page_gallery_images" USING btree ("_order");
  CREATE INDEX "landing_page_gallery_images_parent_id_idx" ON "landing_page_gallery_images" USING btree ("_parent_id");
  CREATE INDEX "landing_page_gallery_images_image_idx" ON "landing_page_gallery_images" USING btree ("image_id");
  CREATE INDEX "landing_page_feedback_images_order_idx" ON "landing_page_feedback_images" USING btree ("_order");
  CREATE INDEX "landing_page_feedback_images_parent_id_idx" ON "landing_page_feedback_images" USING btree ("_parent_id");
  CREATE INDEX "landing_page_feedback_images_image_idx" ON "landing_page_feedback_images" USING btree ("image_id");
  CREATE INDEX "landing_page_offer_benefits_order_idx" ON "landing_page_offer_benefits" USING btree ("_order");
  CREATE INDEX "landing_page_offer_benefits_parent_id_idx" ON "landing_page_offer_benefits" USING btree ("_parent_id");
  CREATE INDEX "landing_page_instructor_heading_order_idx" ON "landing_page_instructor_heading" USING btree ("_order");
  CREATE INDEX "landing_page_instructor_heading_parent_id_idx" ON "landing_page_instructor_heading" USING btree ("_parent_id");
  CREATE INDEX "landing_page_instructor_paragraphs_order_idx" ON "landing_page_instructor_paragraphs" USING btree ("_order");
  CREATE INDEX "landing_page_instructor_paragraphs_parent_id_idx" ON "landing_page_instructor_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "landing_page_faq_heading_order_idx" ON "landing_page_faq_heading" USING btree ("_order");
  CREATE INDEX "landing_page_faq_heading_parent_id_idx" ON "landing_page_faq_heading" USING btree ("_parent_id");
  CREATE INDEX "landing_page_faq_items_order_idx" ON "landing_page_faq_items" USING btree ("_order");
  CREATE INDEX "landing_page_faq_items_parent_id_idx" ON "landing_page_faq_items" USING btree ("_parent_id");
  CREATE INDEX "landing_page_seo_seo_social_image_idx" ON "landing_page" USING btree ("seo_social_image_id");
  CREATE INDEX "landing_page_hero_hero_mobile_image_idx" ON "landing_page" USING btree ("hero_mobile_image_id");
  CREATE INDEX "landing_page_hero_hero_desktop_image_idx" ON "landing_page" USING btree ("hero_desktop_image_id");
  CREATE INDEX "landing_page_comparison_comparison_choice_image_idx" ON "landing_page" USING btree ("comparison_choice_image_id");
  CREATE INDEX "landing_page_method_method_mobile_background_idx" ON "landing_page" USING btree ("method_mobile_background_id");
  CREATE INDEX "landing_page_method_method_desktop_background_idx" ON "landing_page" USING btree ("method_desktop_background_id");
  CREATE INDEX "landing_page_receives_receives_mobile_background_idx" ON "landing_page" USING btree ("receives_mobile_background_id");
  CREATE INDEX "landing_page_receives_receives_desktop_background_idx" ON "landing_page" USING btree ("receives_desktop_background_id");
  CREATE INDEX "landing_page_certificate_certificate_image_idx" ON "landing_page" USING btree ("certificate_image_id");
  CREATE INDEX "landing_page_instructor_instructor_mobile_image_idx" ON "landing_page" USING btree ("instructor_mobile_image_id");
  CREATE INDEX "landing_page_instructor_instructor_desktop_image_idx" ON "landing_page" USING btree ("instructor_desktop_image_id");
  CREATE INDEX "_landing_page_v_version_hero_heading_order_idx" ON "_landing_page_v_version_hero_heading" USING btree ("_order");
  CREATE INDEX "_landing_page_v_version_hero_heading_parent_id_idx" ON "_landing_page_v_version_hero_heading" USING btree ("_parent_id");
  CREATE INDEX "_landing_page_v_version_comparison_heading_order_idx" ON "_landing_page_v_version_comparison_heading" USING btree ("_order");
  CREATE INDEX "_landing_page_v_version_comparison_heading_parent_id_idx" ON "_landing_page_v_version_comparison_heading" USING btree ("_parent_id");
  CREATE INDEX "_cmp_negative_v_order_idx" ON "_cmp_negative_v" USING btree ("_order");
  CREATE INDEX "_cmp_negative_v_parent_id_idx" ON "_cmp_negative_v" USING btree ("_parent_id");
  CREATE INDEX "_cmp_positive_v_order_idx" ON "_cmp_positive_v" USING btree ("_order");
  CREATE INDEX "_cmp_positive_v_parent_id_idx" ON "_cmp_positive_v" USING btree ("_parent_id");
  CREATE INDEX "_landing_page_v_version_method_heading_order_idx" ON "_landing_page_v_version_method_heading" USING btree ("_order");
  CREATE INDEX "_landing_page_v_version_method_heading_parent_id_idx" ON "_landing_page_v_version_method_heading" USING btree ("_parent_id");
  CREATE INDEX "_landing_page_v_version_method_paragraphs_order_idx" ON "_landing_page_v_version_method_paragraphs" USING btree ("_order");
  CREATE INDEX "_landing_page_v_version_method_paragraphs_parent_id_idx" ON "_landing_page_v_version_method_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "_landing_page_v_version_receives_heading_order_idx" ON "_landing_page_v_version_receives_heading" USING btree ("_order");
  CREATE INDEX "_landing_page_v_version_receives_heading_parent_id_idx" ON "_landing_page_v_version_receives_heading" USING btree ("_parent_id");
  CREATE INDEX "_landing_page_v_version_modules_heading_order_idx" ON "_landing_page_v_version_modules_heading" USING btree ("_order");
  CREATE INDEX "_landing_page_v_version_modules_heading_parent_id_idx" ON "_landing_page_v_version_modules_heading" USING btree ("_parent_id");
  CREATE INDEX "_landing_page_v_version_modules_items_lessons_order_idx" ON "_landing_page_v_version_modules_items_lessons" USING btree ("_order");
  CREATE INDEX "_landing_page_v_version_modules_items_lessons_parent_id_idx" ON "_landing_page_v_version_modules_items_lessons" USING btree ("_parent_id");
  CREATE INDEX "_landing_page_v_version_modules_items_order_idx" ON "_landing_page_v_version_modules_items" USING btree ("_order");
  CREATE INDEX "_landing_page_v_version_modules_items_parent_id_idx" ON "_landing_page_v_version_modules_items" USING btree ("_parent_id");
  CREATE INDEX "_landing_page_v_version_modules_items_image_idx" ON "_landing_page_v_version_modules_items" USING btree ("image_id");
  CREATE INDEX "_landing_page_v_version_certificate_heading_order_idx" ON "_landing_page_v_version_certificate_heading" USING btree ("_order");
  CREATE INDEX "_landing_page_v_version_certificate_heading_parent_id_idx" ON "_landing_page_v_version_certificate_heading" USING btree ("_parent_id");
  CREATE INDEX "_landing_page_v_version_gallery_statement_order_idx" ON "_landing_page_v_version_gallery_statement" USING btree ("_order");
  CREATE INDEX "_landing_page_v_version_gallery_statement_parent_id_idx" ON "_landing_page_v_version_gallery_statement" USING btree ("_parent_id");
  CREATE INDEX "_landing_page_v_version_gallery_images_order_idx" ON "_landing_page_v_version_gallery_images" USING btree ("_order");
  CREATE INDEX "_landing_page_v_version_gallery_images_parent_id_idx" ON "_landing_page_v_version_gallery_images" USING btree ("_parent_id");
  CREATE INDEX "_landing_page_v_version_gallery_images_image_idx" ON "_landing_page_v_version_gallery_images" USING btree ("image_id");
  CREATE INDEX "_landing_page_v_version_feedback_images_order_idx" ON "_landing_page_v_version_feedback_images" USING btree ("_order");
  CREATE INDEX "_landing_page_v_version_feedback_images_parent_id_idx" ON "_landing_page_v_version_feedback_images" USING btree ("_parent_id");
  CREATE INDEX "_landing_page_v_version_feedback_images_image_idx" ON "_landing_page_v_version_feedback_images" USING btree ("image_id");
  CREATE INDEX "_landing_page_v_version_offer_benefits_order_idx" ON "_landing_page_v_version_offer_benefits" USING btree ("_order");
  CREATE INDEX "_landing_page_v_version_offer_benefits_parent_id_idx" ON "_landing_page_v_version_offer_benefits" USING btree ("_parent_id");
  CREATE INDEX "_landing_page_v_version_instructor_heading_order_idx" ON "_landing_page_v_version_instructor_heading" USING btree ("_order");
  CREATE INDEX "_landing_page_v_version_instructor_heading_parent_id_idx" ON "_landing_page_v_version_instructor_heading" USING btree ("_parent_id");
  CREATE INDEX "_landing_page_v_version_instructor_paragraphs_order_idx" ON "_landing_page_v_version_instructor_paragraphs" USING btree ("_order");
  CREATE INDEX "_landing_page_v_version_instructor_paragraphs_parent_id_idx" ON "_landing_page_v_version_instructor_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "_landing_page_v_version_faq_heading_order_idx" ON "_landing_page_v_version_faq_heading" USING btree ("_order");
  CREATE INDEX "_landing_page_v_version_faq_heading_parent_id_idx" ON "_landing_page_v_version_faq_heading" USING btree ("_parent_id");
  CREATE INDEX "_landing_page_v_version_faq_items_order_idx" ON "_landing_page_v_version_faq_items" USING btree ("_order");
  CREATE INDEX "_landing_page_v_version_faq_items_parent_id_idx" ON "_landing_page_v_version_faq_items" USING btree ("_parent_id");
  CREATE INDEX "_landing_page_v_version_seo_version_seo_social_image_idx" ON "_landing_page_v" USING btree ("version_seo_social_image_id");
  CREATE INDEX "_landing_page_v_version_hero_version_hero_mobile_image_idx" ON "_landing_page_v" USING btree ("version_hero_mobile_image_id");
  CREATE INDEX "_landing_page_v_version_hero_version_hero_desktop_image_idx" ON "_landing_page_v" USING btree ("version_hero_desktop_image_id");
  CREATE INDEX "_landing_page_v_version_comparison_version_comparison_ch_idx" ON "_landing_page_v" USING btree ("version_comparison_choice_image_id");
  CREATE INDEX "_landing_page_v_version_method_version_method_mobile_bac_idx" ON "_landing_page_v" USING btree ("version_method_mobile_background_id");
  CREATE INDEX "_landing_page_v_version_method_version_method_desktop_ba_idx" ON "_landing_page_v" USING btree ("version_method_desktop_background_id");
  CREATE INDEX "_landing_page_v_version_receives_version_receives_mobile_idx" ON "_landing_page_v" USING btree ("version_receives_mobile_background_id");
  CREATE INDEX "_landing_page_v_version_receives_version_receives_deskto_idx" ON "_landing_page_v" USING btree ("version_receives_desktop_background_id");
  CREATE INDEX "_landing_page_v_version_certificate_version_certificate__idx" ON "_landing_page_v" USING btree ("version_certificate_image_id");
  CREATE INDEX "_landing_page_v_version_instructor_version_instructor_mo_idx" ON "_landing_page_v" USING btree ("version_instructor_mobile_image_id");
  CREATE INDEX "_landing_page_v_version_instructor_version_instructor_de_idx" ON "_landing_page_v" USING btree ("version_instructor_desktop_image_id");
  CREATE INDEX "_landing_page_v_created_at_idx" ON "_landing_page_v" USING btree ("created_at");
  CREATE INDEX "_landing_page_v_updated_at_idx" ON "_landing_page_v" USING btree ("updated_at");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "landing_page_hero_heading" CASCADE;
  DROP TABLE "landing_page_comparison_heading" CASCADE;
  DROP TABLE "cmp_negative" CASCADE;
  DROP TABLE "cmp_positive" CASCADE;
  DROP TABLE "landing_page_method_heading" CASCADE;
  DROP TABLE "landing_page_method_paragraphs" CASCADE;
  DROP TABLE "landing_page_receives_heading" CASCADE;
  DROP TABLE "landing_page_modules_heading" CASCADE;
  DROP TABLE "landing_page_modules_items_lessons" CASCADE;
  DROP TABLE "landing_page_modules_items" CASCADE;
  DROP TABLE "landing_page_certificate_heading" CASCADE;
  DROP TABLE "landing_page_gallery_statement" CASCADE;
  DROP TABLE "landing_page_gallery_images" CASCADE;
  DROP TABLE "landing_page_feedback_images" CASCADE;
  DROP TABLE "landing_page_offer_benefits" CASCADE;
  DROP TABLE "landing_page_instructor_heading" CASCADE;
  DROP TABLE "landing_page_instructor_paragraphs" CASCADE;
  DROP TABLE "landing_page_faq_heading" CASCADE;
  DROP TABLE "landing_page_faq_items" CASCADE;
  DROP TABLE "landing_page" CASCADE;
  DROP TABLE "_landing_page_v_version_hero_heading" CASCADE;
  DROP TABLE "_landing_page_v_version_comparison_heading" CASCADE;
  DROP TABLE "_cmp_negative_v" CASCADE;
  DROP TABLE "_cmp_positive_v" CASCADE;
  DROP TABLE "_landing_page_v_version_method_heading" CASCADE;
  DROP TABLE "_landing_page_v_version_method_paragraphs" CASCADE;
  DROP TABLE "_landing_page_v_version_receives_heading" CASCADE;
  DROP TABLE "_landing_page_v_version_modules_heading" CASCADE;
  DROP TABLE "_landing_page_v_version_modules_items_lessons" CASCADE;
  DROP TABLE "_landing_page_v_version_modules_items" CASCADE;
  DROP TABLE "_landing_page_v_version_certificate_heading" CASCADE;
  DROP TABLE "_landing_page_v_version_gallery_statement" CASCADE;
  DROP TABLE "_landing_page_v_version_gallery_images" CASCADE;
  DROP TABLE "_landing_page_v_version_feedback_images" CASCADE;
  DROP TABLE "_landing_page_v_version_offer_benefits" CASCADE;
  DROP TABLE "_landing_page_v_version_instructor_heading" CASCADE;
  DROP TABLE "_landing_page_v_version_instructor_paragraphs" CASCADE;
  DROP TABLE "_landing_page_v_version_faq_heading" CASCADE;
  DROP TABLE "_landing_page_v_version_faq_items" CASCADE;
  DROP TABLE "_landing_page_v" CASCADE;
  DROP TYPE "public"."enum_users_role";
  DROP TYPE "public"."enum_landing_page_hero_heading_style";
  DROP TYPE "public"."enum_landing_page_comparison_heading_style";
  DROP TYPE "public"."enum_landing_page_method_heading_style";
  DROP TYPE "public"."enum_landing_page_receives_heading_style";
  DROP TYPE "public"."enum_landing_page_modules_heading_style";
  DROP TYPE "public"."enum_landing_page_certificate_heading_style";
  DROP TYPE "public"."enum_landing_page_gallery_statement_style";
  DROP TYPE "public"."enum_landing_page_instructor_heading_style";
  DROP TYPE "public"."enum_landing_page_faq_heading_style";
  DROP TYPE "public"."enum_landing_page_settings_currency";
  DROP TYPE "public"."enum__landing_page_v_version_hero_heading_style";
  DROP TYPE "public"."enum__landing_page_v_version_comparison_heading_style";
  DROP TYPE "public"."enum__landing_page_v_version_method_heading_style";
  DROP TYPE "public"."enum__landing_page_v_version_receives_heading_style";
  DROP TYPE "public"."enum__landing_page_v_version_modules_heading_style";
  DROP TYPE "public"."enum__landing_page_v_version_certificate_heading_style";
  DROP TYPE "public"."enum__landing_page_v_version_gallery_statement_style";
  DROP TYPE "public"."enum__landing_page_v_version_instructor_heading_style";
  DROP TYPE "public"."enum__landing_page_v_version_faq_heading_style";
  DROP TYPE "public"."enum__landing_page_v_version_settings_currency";`)
}
