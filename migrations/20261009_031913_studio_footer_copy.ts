import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "studio_home" ADD COLUMN "footer_regular_text" varchar DEFAULT 'Todos os direitos reservados.' NOT NULL;
  ALTER TABLE "_studio_home_v" ADD COLUMN "version_footer_regular_text" varchar DEFAULT 'Todos os direitos reservados.' NOT NULL;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "studio_home" DROP COLUMN "footer_regular_text";
  ALTER TABLE "_studio_home_v" DROP COLUMN "version_footer_regular_text";`)
}
