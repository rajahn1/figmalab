import { MigrateUpArgs, MigrateDownArgs, sql } from "@payloadcms/db-postgres";

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "landing_page" DROP COLUMN "support_body";
  ALTER TABLE "_landing_page_v" DROP COLUMN "version_support_body";`);
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "landing_page" ADD COLUMN "support_body" varchar DEFAULT 'Se tiver qualquer dúvida sobre sua inscrição no FigmaLab, conte com nosso suporte exclusivo via WhatsApp. Nossa equipe está pronta para te atender e tirar todas as suas dúvidas.' NOT NULL;
  ALTER TABLE "_landing_page_v" ADD COLUMN "version_support_body" varchar DEFAULT 'Se tiver qualquer dúvida sobre sua inscrição no FigmaLab, conte com nosso suporte exclusivo via WhatsApp. Nossa equipe está pronta para te atender e tirar todas as suas dúvidas.' NOT NULL;`);
}
