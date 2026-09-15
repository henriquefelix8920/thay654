# Thay — experiência digital premium

Projeto Next.js + React + TypeScript preparado para deploy na Vercel.

## Fotos

As fotos devem ficar em:

`public/images/`

Arquivos esperados:
- `thay-1.jpg`
- `thay-2.jpg`
- `thay-3.jpg`

Se substituir as fotos, mantenha esses nomes ou altere os caminhos em `lib/content.ts`.

## WhatsApp

O briefing forneceu `11456344546`. O projeto converte esse número para o formato internacional usado pelo link do WhatsApp, acrescentando o DDI `55` sem alterar o número informado.

Se o número precisar ser corrigido, altere somente `profile.whatsapp` em `lib/content.ts`.

## Plataformas

OnlyFans e Privacy foram informados no briefing, mas nenhum link foi fornecido. Por isso aparecem como `DEMO` e não há URL inventada.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm start
```

## Deploy Vercel

Importe o repositório no Vercel. O framework Next.js e os comandos padrão serão detectados automaticamente.

## Direção 21st.dev

A arquitetura de movimento foi desenvolvida a partir de padrões pesquisados nas coleções do 21st.dev — especialmente parallax, hero scroll, text reveal, sticky scroll e galerias animadas — mas os componentes foram reimplementados/adaptados para esta identidade visual, em vez de copiar uma página inteira.
