# Como enviar este projeto para o GitHub

Envie **todos os arquivos e pastas que estão dentro desta pasta** para a raiz do repositório.

A estrutura precisa ficar assim:

```
app/
components/
lib/
public/
package.json
next.config.mjs
tsconfig.json
next-env.d.ts
```

Dentro de `components/` devem existir:

- `Lightbox.tsx`
- `ParallaxImage.tsx`
- `ScrollReveal.tsx`
- `WhatsAppButton.tsx`
- `mediaTypes.ts`

Dentro de `lib/` deve existir:

- `content.ts`

Dentro de `public/images/` devem existir as três fotos:

- `thay-1.jpg`
- `thay-2.jpg`
- `thay-3.jpg`

**Não crie uma branch chamada `app`.** `app` é uma pasta do projeto.

O `tsconfig.json` já está configurado para reconhecer imports como `@/components/...` e `@/lib/...`.
