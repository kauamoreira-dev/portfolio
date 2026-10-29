# Portfólio — Kauã Moreira

Portfólio pessoal de Kauã Moreira Cirino, desenvolvedor Front-end.

**Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS 4

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Formulário de contato

O formulário envia e-mails pelo [Resend](https://resend.com). Configure as variáveis (localmente em `.env.local`, ou na Vercel em *Settings → Environment Variables*):

| Variável | Obrigatória | Descrição |
| --- | --- | --- |
| `RESEND_API_KEY` | sim | Chave da API do Resend |
| `CONTACT_TO_EMAIL` | não | Para quem as mensagens vão (padrão: kauacirinom@icloud.com) |
| `CONTACT_FROM_EMAIL` | não | Remetente (padrão: `onboarding@resend.dev`) |
| `NEXT_PUBLIC_SITE_URL` | não | URL pública do site, usada nas imagens de compartilhamento |

## Editando o conteúdo

Todos os textos (PT e EN), links e skills ficam em `src/lib/content.ts`.
