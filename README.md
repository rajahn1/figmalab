# FigmaLab

Landing page em Next.js com conteúdo editorial gerenciado pelo Payload CMS. A aplicação e o
painel `/admin` rodam na Vercel, os dados ficam no PostgreSQL do Supabase e as mídias no
Cloudflare R2.

## Desenvolvimento

1. Copie `.env.example` para `.env.local` e ajuste os valores.
2. Deixe `CMS_ENABLED=false` para trabalhar com o conteúdo local sem banco.
3. Execute `npm run dev`.

Com um PostgreSQL local, o Payload pode criar o schema automaticamente em desenvolvimento. Para
testar exatamente o fluxo de produção, defina `PAYLOAD_DB_PUSH=false`, rode `npm run migrate:prod`
e depois `npm run seed`.

## Comandos

- `npm run payload:types`: regenera `payload-types.ts`.
- `npm run payload:importmap`: regenera o import map do painel.
- `npm run migrate:create -- nome`: cria uma migration versionada sem conectar ao banco.
- `npm run migrate:status`: consulta o estado das migrations usando `DATABASE_MIGRATION_URL`.
- `npm run migrate:prod`: aplica migrations sob uma trava consultiva global do PostgreSQL.
- `npm run seed`: cria as contas configuradas, importa as imagens e sincroniza a landing.
- `npm run lint`, `npm run typecheck` e `npm run build`: validações da aplicação.

O seed é idempotente. As credenciais `SEED_*` devem existir apenas durante a preparação inicial e
ser removidas dos secrets após o uso.

## Implantação

Consulte [docs/cms-infrastructure.md](docs/cms-infrastructure.md) para configurar Supabase,
Cloudflare R2, variáveis da Vercel, segurança da Data API e o rollout em duas etapas.
