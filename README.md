# Projeto de Login e Cadastro

Este é um projeto Next.js que implementa telas de login e cadastro com design moderno e responsivo.

## Funcionalidades

- Tela de login com:
  - Campo de email e senha
  - Opção "Lembrar de mim"
  - Link para recuperação de senha
  - Redirecionamento para cadastro

- Tela de cadastro com:
  - Campo de email e senha
  - Termos de uso e política de privacidade
  - Redirecionamento para login

- Características gerais:
  - Design responsivo (mobile-first)
  - Navegação otimizada com Next.js
  - Interface moderna e limpa
  - Visualização de senha
  - Layout adaptativo para desktop e mobile

## Tecnologias Utilizadas

- Next.js 13+
- React
- TypeScript
- Tailwind CSS
- ESLint

## Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/tallesdss/padrao.git
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:3000
```

## Estrutura do Projeto

```
app/
├── login/
│   └── page.tsx      # Página de login
├── cadastro/
│   └── page.tsx      # Página de cadastro
└── page.tsx          # Redirecionamento para login
```

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
