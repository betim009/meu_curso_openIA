# Projeto 1 — API Node.js + Express + Prisma + MySQL

API RESTful didática com arquitetura em camadas (MSC + Service Layer + Repository Pattern) e persistência real no MySQL via Prisma.

## Stack

- Node.js
- Express
- Prisma ORM
- MySQL
- Zod (validação)

## Estrutura

- `backend/`: aplicação Node + Prisma
- `docs/`: documentação passo a passo

## Como rodar (quickstart)

1) Suba/garanta um MySQL rodando.

Este projeto foi validado com MySQL via Homebrew na porta `3307` (para não conflitar com um MySQL já existente na porta `3306`).

2) Configure o `.env`:

- `backend/.env`:
  - `DATABASE_URL="mysql://root@localhost:3307/projeto_1"`
  - `PORT=3001`

3) Instale e rode:

```bash
cd backend
npm install
npm run prisma:generate
npx prisma migrate dev
npm run prisma:seed
npm run dev
```

4) Teste:

```bash
curl -sS http://localhost:3001/api/health
curl -sS http://localhost:3001/api/users
curl -sS http://localhost:3001/api/products
```

## Rotas

Base: `http://localhost:3001/api`

- `GET /health`
- `POST /users`
- `GET /users`
- `GET /users/:id`
- `PUT /users/:id`
- `DELETE /users/:id`
- `POST /products`
- `GET /products`
- `GET /products/:id`
- `PUT /products/:id`
- `DELETE /products/:id`

## Documentação completa

Veja `docs/passo-a-passo.md`.

