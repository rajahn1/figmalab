# Infraestrutura do CMS

## Supabase PostgreSQL

Use o Supabase apenas como PostgreSQL. Não há dependência de `supabase-js`, Auth, Storage ou Data
API no frontend.

- `DATABASE_URL`: Supavisor Transaction Mode, porta `6543`. É usada pelo runtime da Vercel com
  `max: 1` conexão por instância.
- `DATABASE_MIGRATION_URL`: Supavisor Session Mode, porta `5432`. É usada apenas por migrations e
  seed.
- Para um projeto novo, escolha a região São Paulo. Em projeto existente, configure as funções da
  Vercel na região disponível mais próxima do banco.
- Nunca execute migrations em previews. O job de produção deve executar `npm run migrate:prod`
  uma única vez; o script também usa `pg_advisory_lock` para serializar execuções concorrentes.

### Isolar as tabelas da Data API

No painel do Supabase, em **Project Settings → API**, remova `public` de **Exposed schemas**. Uma
opção é expor apenas um schema vazio dedicado:

```sql
create schema if not exists api;
grant usage on schema api to anon, authenticated;

revoke all on all tables in schema public from anon, authenticated;
revoke all on all sequences in schema public from anon, authenticated;
revoke all on all functions in schema public from anon, authenticated;

alter default privileges in schema public revoke all on tables from anon, authenticated;
alter default privileges in schema public revoke all on sequences from anon, authenticated;
alter default privileges in schema public revoke all on functions from anon, authenticated;
```

Depois, confirme que apenas `api` aparece em **Exposed schemas**. O usuário de banco presente nas
URLs do Payload continua precisando de permissões DDL/DML no schema `public`; `anon` e
`authenticated` não precisam delas.

## Cloudflare R2

Crie um bucket privado para escrita e um domínio público próprio, por exemplo
`media.dominio.com`. Não use `r2.dev` em produção. Crie um token S3 restrito somente a esse bucket
e configure:

- `R2_BUCKET`
- `R2_ACCESS_KEY_ID`
- `R2_SECRET_ACCESS_KEY`
- `R2_ENDPOINT=https://ACCOUNT_ID.r2.cloudflarestorage.com`
- `R2_PUBLIC_URL=https://media.dominio.com`

O upload do painel é feito diretamente do navegador por URL assinada. Cada upload recebe um
`_objectKey` UUID e o R2 exige `If-None-Match: *`, portanto substituir um arquivo gera uma URL nova
e não sobrescreve o objeto anterior.

Configure o CORS do bucket, substituindo os domínios:

```json
[
  {
    "AllowedOrigins": ["https://dominio.com", "https://www.dominio.com"],
    "AllowedMethods": ["GET", "HEAD", "PUT"],
    "AllowedHeaders": ["Content-Type", "Content-Length", "If-None-Match"],
    "ExposeHeaders": ["ETag"],
    "MaxAgeSeconds": 3600
  }
]
```

Inclua todos os hosts reais que servem `/admin`. Evite liberar previews com wildcard; autorize um
host de homologação estável quando necessário.

## Variáveis da Vercel

Configure como secrets de produção:

- `NEXT_PUBLIC_SERVER_URL`
- `PAYLOAD_SECRET` (valor aleatório forte e estável)
- `DATABASE_URL`
- `DATABASE_MIGRATION_URL` apenas no job de migration/seed, se a plataforma permitir separá-la
- todas as variáveis `R2_*`
- `CMS_ENABLED`

Use Node.js 24 LTS (ou outra versão dentro de `>=20.9 <26`) no build da Vercel.

As variáveis `SEED_ADMIN_*` e `SEED_EDITOR_*` são temporárias. Remova-as após o seed. Não há e-mail
transacional nesta etapa; redefinições de senha são feitas manualmente por um administrador.

## Rollout

1. Publique com `CMS_ENABLED=false`. O frontend continua usando o conteúdo versionado no código.
2. No fluxo de produção, execute `npm run migrate:prod` e `npm run seed`.
3. Acesse `/admin`, valide as contas `admin` e `editor`, uploads e edição da Landing Page.
4. Altere preço, CTA, módulo, FAQ, feedback e uma imagem; valide a publicação sem novo deploy.
5. Ative `CMS_ENABLED=true` e publique novamente.
6. Remova os secrets `SEED_*`. Mantenha temporariamente os assets em `public/` para rollback.

Se for necessário reverter durante o rollout, defina `CMS_ENABLED=false`; o layout e o conteúdo
original permanecem disponíveis no bundle.

## Checklist de produção

- `npm run lint`, `npm run typecheck` e `npm run build` concluídos.
- Migration aplicada em banco vazio e `npm run seed` executado duas vezes sem duplicações.
- Visitante não acessa REST de conteúdo; editor não cria, remove ou promove usuários; admin pode
  gerenciar contas.
- Preço visual, URL de checkout e evento `InitiateCheckout` usam o mesmo valor do CMS.
- Upload direto funciona acima de 4,5 MB, a URL usa o domínio próprio e a mídia referenciada não
  pode ser excluída.
- Alterações invalidam o cache da landing e aparecem sem deploy.
- Comparação visual em 360, 768, 1440 e 1920 px.
- `/`, `/admin`, Supavisor e domínio de mídia validados na produção.
