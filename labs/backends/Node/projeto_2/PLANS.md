# PLANS.md — API RESTful em Node.js com Express, Prisma e PostgreSQL

Este ExecPlan é um documento vivo.

Ele deve ser usado para desenvolver uma API RESTful em Node.js usando Express, Prisma ORM e PostgreSQL.

O objetivo não é apenas criar uma API funcionando.

O objetivo principal é criar uma API simples e, ao mesmo tempo, produzir uma documentação didática explicando passo a passo como outro desenvolvedor consegue criar essa mesma API do zero.

A arquitetura usada será:

- MSC;
- Service Layer;
- Repository Pattern;
- Prisma ORM;
- PostgreSQL.

---

## Purpose / Big Picture

O objetivo deste projeto é construir uma API RESTful em Node.js com Express, Prisma e PostgreSQL.

A API será organizada em camadas, separando bem as responsabilidades de cada parte do sistema.

A API terá dois módulos principais:

- usuários;
- produtos.

A API deverá permitir operações básicas de CRUD para usuários e produtos.

Além disso, o projeto deverá ter uma documentação explicando:

- quais comandos foram executados;
- quais dependências foram instaladas;
- como configurar o PostgreSQL;
- como configurar o Prisma;
- como configurar o `.env`;
- como criar migrations;
- como rodar seeds;
- quais pastas foram criadas;
- quais arquivos foram criados;
- qual é a responsabilidade de cada arquivo;
- como funciona a arquitetura MSC;
- como funciona o Service Layer;
- como funciona o Repository Pattern;
- como testar as rotas da API.

O resultado final esperado é uma API funcional e uma documentação didática que permita outro desenvolvedor recriar o projeto do zero.

---

## Progress

- [ ] Criar pasta `backend`.
- [ ] Inicializar projeto Node.js com `npm init`.
- [ ] Instalar dependências principais.
- [ ] Instalar dependências de desenvolvimento.
- [ ] Configurar scripts no `package.json`.
- [ ] Criar arquivo `.env`.
- [ ] Criar arquivo `.env.example`.
- [ ] Criar banco de dados PostgreSQL.
- [ ] Configurar `DATABASE_URL` do PostgreSQL.
- [ ] Inicializar Prisma.
- [ ] Configurar `prisma/schema.prisma` com provider `postgresql`.
- [ ] Criar model `User` no Prisma.
- [ ] Criar model `Product` no Prisma.
- [ ] Rodar primeira migration.
- [ ] Gerar Prisma Client.
- [ ] Criar conexão Prisma em `src/database/prisma.js`.
- [ ] Criar configuração de ambiente em `src/config/env.js`.
- [ ] Criar estrutura de pastas do projeto.
- [ ] Criar módulo de usuários.
- [ ] Criar módulo de produtos.
- [ ] Criar repositories.
- [ ] Criar services.
- [ ] Criar controllers.
- [ ] Criar validations.
- [ ] Criar rotas por módulo.
- [ ] Criar agregador de rotas em `src/routes/index.js`.
- [ ] Criar middleware de erro.
- [ ] Criar classe `AppError`.
- [ ] Criar middleware de autenticação inicial.
- [ ] Configurar Express em `src/app.js`.
- [ ] Configurar servidor em `src/server.js`.
- [ ] Criar seeds de usuários.
- [ ] Criar seeds de produtos.
- [ ] Criar arquivo principal de seed.
- [ ] Rodar seeds no PostgreSQL.
- [ ] Testar rotas de usuários.
- [ ] Testar rotas de produtos.
- [ ] Criar `README.md`.
- [ ] Criar pasta `docs`.
- [ ] Criar `docs/passo-a-passo.md`.
- [ ] Documentar todos os comandos usados.
- [ ] Documentar configuração do PostgreSQL.
- [ ] Documentar configuração do Prisma.
- [ ] Documentar migrations.
- [ ] Documentar seeds.
- [ ] Documentar arquitetura MSC.
- [ ] Documentar Service Layer.
- [ ] Documentar Repository Pattern.
- [ ] Documentar erros comuns.
- [ ] Validar se outro desenvolvedor consegue recriar a API seguindo a documentação.

---

## Decision Log

- Decisão: usar PostgreSQL.
  Motivo: é um dos bancos relacionais mais usados no mercado e muito comum em APIs modernas.

- Decisão: usar Prisma ORM.
  Motivo: simplifica queries, migrations e geração de models.

- Decisão: usar MSC + Repository Pattern.
  Motivo: melhora organização e separação de responsabilidades.

- Decisão: separar por módulos.
  Motivo: facilita escalabilidade e manutenção.

- Decisão: criar documentação didática.
  Motivo: o projeto também é um material de estudo reproduzível.

---

## Context and Orientation

Arquitetura esperada:

```txt
backend/
├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   ├── seed.js
│   └── seeds/
│       ├── users.seed.js
│       └── products.seed.js
│
├── src/
│   ├── config/
│   │   └── env.js
│   ├── database/
│   │   └── prisma.js
│   ├── modules/
│   │   ├── users/
│   │   └── products/
│   ├── middlewares/
│   ├── routes/
│   ├── utils/
│   ├── app.js
│   └── server.js
│
├── .env
├── .env.example
├── package.json
└── README.md
```

---

## Plan of Work

### Frente 1 — Configuração inicial

- criar projeto Node.js;
- instalar dependências;
- configurar scripts;
- configurar `.env`.

### Frente 2 — Banco de dados PostgreSQL

- criar banco PostgreSQL;
- configurar Prisma;
- criar models;
- criar migrations;
- criar seeds.

### Frente 3 — API em camadas

- criar repositories;
- criar services;
- criar controllers;
- criar validations;
- criar middlewares;
- criar rotas.

### Frente 4 — Documentação didática

- criar `README.md`;
- criar `docs/passo-a-passo.md`;
- explicar todos os comandos e arquivos.

---

## Concrete Steps

### 1. Criar pasta backend

```bash
mkdir backend
cd backend
```

---

### 2. Inicializar projeto Node.js

```bash
npm init -y
```

---

### 3. Instalar dependências principais

```bash
npm install express cors dotenv @prisma/client
```

---

### 4. Instalar dependências de desenvolvimento

```bash
npm install -D prisma nodemon
```

---

### 5. Configurar scripts no package.json

```json
{
  "scripts": {
    "dev": "nodemon src/server.js",
    "start": "node src/server.js",
    "prisma:generate": "prisma generate",
    "prisma:migrate": "prisma migrate dev",
    "prisma:seed": "node prisma/seed.js"
  }
}
```

---

### 6. Criar banco PostgreSQL

```sql
CREATE DATABASE node_postgres_api;
```

---

### 7. Criar arquivos de ambiente

`.env`

```env
PORT=3001
DATABASE_URL="postgresql://postgres:senha@localhost:5432/node_postgres_api"
```

`.env.example`

```env
PORT=3001
DATABASE_URL="postgresql://USUARIO:SENHA@localhost:5432/node_postgres_api"
```

---

### 8. Inicializar Prisma

```bash
npx prisma init
```

---

### 9. Configurar schema.prisma

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  password  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("users")
}

model Product {
  id          Int      @id @default(autoincrement())
  name        String
  description String?
  price       Decimal  @db.Decimal(10, 2)
  stock       Int      @default(0)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@map("products")
}
```

---

### 10. Rodar migration

```bash
npx prisma migrate dev --name init
```

---

### 11. Gerar Prisma Client

```bash
npx prisma generate
```

---

### 12. Criar conexão Prisma

Arquivo:

```txt
src/database/prisma.js
```

Código:

```js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = prisma;
```

---

### 13. Criar env.js

Arquivo:

```txt
src/config/env.js
```

Código:

```js
require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3001,
  databaseUrl: process.env.DATABASE_URL
};
```

---

### 14. Criar AppError

Arquivo:

```txt
src/utils/AppError.js
```

Código:

```js
class AppError extends Error {
  constructor(message, statusCode = 400) {
    super(message);

    this.statusCode = statusCode;
  }
}

module.exports = AppError;
```

---

### 15. Criar middlewares

Arquivo:

```txt
src/middlewares/errorHandler.js
```

Arquivo:

```txt
src/middlewares/authMiddleware.js
```

---

### 16. Criar módulos users e products

Cada módulo deve possuir:

- routes;
- controller;
- service;
- repository;
- validation.

---

### 17. Criar app.js

```js
const express = require('express');
const cors = require('cors');

const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.use(errorHandler);

module.exports = app;
```

---

### 18. Criar server.js

```js
const app = require('./app');
const env = require('./config/env');

app.listen(env.port, () => {
  console.log(`Servidor rodando na porta ${env.port}`);
});
```

---

### 19. Criar seeds

Criar:

```txt
prisma/seeds/users.seed.js
prisma/seeds/products.seed.js
prisma/seed.js
```

Rodar:

```bash
npm run prisma:seed
```

---

### 20. Testar API

```bash
npm run dev
```

Endpoints:

```http
GET /api/health
GET /api/users
POST /api/users
GET /api/products
POST /api/products
```

---

### 21. Criar README.md

Explicar:

- tecnologias;
- instalação;
- configuração do PostgreSQL;
- configuração do `.env`;
- migrations;
- seeds;
- endpoints.

---

### 22. Criar documentação didática

Criar:

```txt
docs/passo-a-passo.md
```

Estrutura:

```md
# Passo a passo — Criando uma API RESTful com Node.js, Express, Prisma e PostgreSQL

## 1. O que é Node.js?
## 2. O que é PostgreSQL?
## 3. O que é Prisma?
## 4. O que é MSC?
## 5. O que é Repository Pattern?
## 6. Criando o projeto
## 7. Configurando PostgreSQL
## 8. Configurando Prisma
## 9. Criando models
## 10. Rodando migrations
## 11. Criando módulos
## 12. Criando rotas
## 13. Criando seeds
## 14. Testando API
## 15. Erros comuns
```

---

## Validation and Acceptance

### Validação técnica

- [ ] `npm install` executa sem erro.
- [ ] PostgreSQL está rodando.
- [ ] Banco `node_postgres_api` existe.
- [ ] `.env` possui DATABASE_URL válida.
- [ ] `npx prisma generate` executa sem erro.
- [ ] `npx prisma migrate dev --name init` executa sem erro.
- [ ] Tabelas `users` e `products` foram criadas.
- [ ] `npm run prisma:seed` executa sem erro.
- [ ] Seeds inseriram dados reais.
- [ ] `npm run dev` sobe o servidor.
- [ ] Endpoints respondem corretamente.

### Validação didática

- [ ] A documentação explica PostgreSQL.
- [ ] A documentação explica Prisma.
- [ ] A documentação explica migrations.
- [ ] A documentação explica seeds.
- [ ] A documentação explica arquitetura.
- [ ] Um dev iniciante consegue reproduzir o projeto.

---

## Idempotence and Recovery

### Se PostgreSQL não conectar

Verificar:

- se PostgreSQL está rodando;
- se a porta 5432 está correta;
- se DATABASE_URL está correta;
- se usuário e senha estão corretos.

### Se migration falhar

Verificar:

- se o banco existe;
- se schema.prisma está correto;
- se Prisma Client foi gerado.

### Se seed falhar

Verificar:

- se migration já executou;
- se tabelas existem;
- se existem conflitos de dados únicos.

---

## Artifacts and Notes

Arquivos esperados:

```txt
prisma/schema.prisma
prisma/seed.js
src/database/prisma.js
src/config/env.js
src/app.js
src/server.js
README.md
docs/passo-a-passo.md
```

---

## Interfaces and Dependencies

### Dependências principais

```bash
npm install express cors dotenv @prisma/client
```

### Dependências de desenvolvimento

```bash
npm install -D prisma nodemon
```

### Banco PostgreSQL

```sql
CREATE DATABASE node_postgres_api;
```

### DATABASE_URL

```env
DATABASE_URL="postgresql://postgres:senha@localhost:5432/node_postgres_api"
```

### Scripts

```json
{
  "dev": "nodemon src/server.js",
  "start": "node src/server.js",
  "prisma:generate": "prisma generate",
  "prisma:migrate": "prisma migrate dev",
  "prisma:seed": "node prisma/seed.js"
}
```

---

## Regra para execução contínua por agente/IA

Ao executar este PLANS.md, o agente deve:

- continuar executando enquanto existirem tarefas;
- validar PostgreSQL;
- validar Prisma;
- validar migrations;
- validar seeds;
- validar rotas;
- atualizar progresso;
- documentar cada etapa;
- registrar erros e soluções;
- nunca marcar tarefa sem evidência real.

O objetivo é entregar:

- API funcionando;
- PostgreSQL funcionando;
- Prisma funcionando;
- arquitetura organizada;
- documentação reproduzível.
