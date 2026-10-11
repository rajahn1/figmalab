import nextEnv from "@next/env";
import { getPayload } from "payload";

const LOCK_NAME = "figmalab-payload-migrations";
const { loadEnvConfig } = nextEnv;

async function main() {
  loadEnvConfig(process.cwd());

  if (!process.env.DATABASE_MIGRATION_URL) {
    throw new Error("DATABASE_MIGRATION_URL é obrigatória para migrations de produção.");
  }

  const { default: config } = await import("@payload-config");
  const payload = await getPayload({ config });
  const client = await payload.db.pool.connect();

  try {
    payload.logger.info("Aguardando a trava exclusiva de migrations…");
    await client.query("SELECT pg_advisory_lock(hashtext($1))", [LOCK_NAME]);
    await payload.db.migrate();
    payload.logger.info("Migrations concluídas.");
  } finally {
    await client.query("SELECT pg_advisory_unlock(hashtext($1))", [LOCK_NAME]);
    client.release();
    await payload.destroy();
  }
}

main()
  .then(() => process.exit(0))
  .catch((error: unknown) => {
    console.error(error);
    process.exit(1);
  });
