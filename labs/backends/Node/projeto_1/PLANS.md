# PLANS.md — API RESTful em Node.js com Express, Prisma e MySQL

Este ExecPlan é um documento vivo.

Ele deve ser usado para desenvolver uma API RESTful em Node.js usando Express, Prisma ORM e MySQL.

O objetivo não é apenas criar uma API funcionando.

O objetivo principal é criar uma API simples e, ao mesmo tempo, produzir uma documentação didática explicando passo a passo como outro desenvolvedor consegue criar essa mesma API do zero.

A arquitetura usada será:

- MSC;
- Service Layer;
- Repository Pattern;
- Prisma ORM;
- MySQL.

---

## Purpose / Big Picture

O objetivo deste projeto é construir uma API RESTful em Node.js com Express, Prisma e MySQL.

A API será organizada em camadas, separando bem as responsabilidades de cada parte do sistema.

A API terá dois módulos principais:

- usuários;
- produtos.

A API deverá permitir operações básicas de CRUD para usuários e produtos.

Além disso, o projeto deverá ter uma documentação explicando:

- quais comandos foram executados;
- quais dependências foram instaladas;
- como configurar o MySQL;
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

- [x] Criar pasta `backend`.
- [x] Inicializar projeto Node.js com `npm init`.
- [x] Instalar dependências principais.
- [x] Instalar dependências de desenvolvimento.
- [x] Configurar scripts no `package.json`.
- [x] Criar arquivo `.env`.
- [x] Criar arquivo `.env.example`.
- [x] Criar banco de dados MySQL.
- [x] Configurar `DATABASE_URL` do MySQL.
- [x] Inicializar Prisma.
- [x] Configurar `prisma/schema.prisma` com provider `mysql`.
- [x] Criar model `User` no Prisma.
- [x] Criar model `Product` no Prisma.
- [x] Rodar primeira migration.
- [x] Gerar Prisma Client.
- [x] Criar conexão Prisma em `src/database/prisma.js`.
- [x] Criar configuração de ambiente em `src/config/env.js`.
- [x] Criar estrutura de pastas do projeto.
- [x] Criar módulo de usuários.
- [x] Criar módulo de produtos.
- [x] Criar repositories.
- [x] Criar services.
- [x] Criar controllers.
- [x] Criar validations.
- [x] Criar rotas por módulo.
- [x] Criar agregador de rotas em `src/routes/index.js`.
- [x] Criar middleware de erro.
- [x] Criar classe `AppError`.
- [x] Criar middleware de autenticação inicial.
- [x] Configurar Express em `src/app.js`.
- [x] Configurar servidor em `src/server.js`.
- [x] Criar seeds de usuários.
- [x] Criar seeds de produtos.
- [x] Criar arquivo principal de seed.
- [x] Rodar seeds no MySQL.
- [x] Testar rotas de usuários.
- [x] Testar rotas de produtos.
- [x] Criar `README.md`.
- [x] Criar pasta `docs`.
- [x] Criar `docs/passo-a-passo.md`.
- [x] Documentar todos os comandos usados.
- [x] Documentar configuração do MySQL.
- [x] Documentar configuração do Prisma.
- [x] Documentar migrations.
- [x] Documentar seeds.
- [x] Documentar arquitetura MSC.
- [x] Documentar Service Layer.
- [x] Documentar Repository Pattern.
- [x] Documentar erros comuns.
- [ ] Validar se outro desenvolvedor consegue recriar a API seguindo a documentação.

---

## Surprises & Discoveries

Esta seção deve ser preenchida durante o desenvolvimento.

Use este espaço para registrar descobertas, problemas e evidências.

- Descoberta: já existia um `mysqld` (Oracle) rodando em `3306` (`/usr/local/mysql/bin/mysqld`), o que impediu o MySQL via Homebrew de subir na porta padrão.
  Evidência: log de erro do Homebrew MySQL acusando porta `3306` em uso e `ps aux | rg mysqld` mostrando o processo em `/usr/local/mysql/bin/mysqld`.

- Descoberta: para não mexer no MySQL existente, o MySQL do projeto foi configurado para rodar na porta `3307` via `/opt/homebrew/etc/my.cnf`.
  Evidência: `lsof -iTCP:3307 -sTCP:LISTEN` mostrando o `mysqld` escutando em `3307` e `mysql -h 127.0.0.1 -P 3307 -u root -e "SELECT @@port"` retornando `3307`.

Exemplos:

```md
- Descoberta: o Prisma criou automaticamente a pasta `prisma`.
  Evidência: pasta criada após executar `npx prisma init`.

- Descoberta: a conexão com MySQL falhou porque o banco ainda não existia.
  Evidência: erro exibido ao executar `npx prisma migrate dev`.

- Descoberta: a migration criou as tabelas `User` e `Product`.
  Evidência: tabelas visualizadas no MySQL após executar a migration.

- Descoberta: o servidor subiu na porta 3001.
  Evidência: mensagem exibida no terminal.
```

Registrar aqui qualquer comportamento inesperado, erro ou decisão tomada durante a execução.

---

## Decision Log

- Decisão: usar Node.js.
  Motivo: é a tecnologia principal solicitada para o backend.

- Decisão: usar Express.
  Motivo: é simples, popular e didático para ensinar APIs RESTful.

- Decisão: usar MySQL.
  Motivo: é um banco relacional muito usado no mercado e facilita o ensino de tabelas, registros e relacionamentos.

- Decisão: usar Prisma.
  Motivo: facilita a comunicação com o banco, criação de models, migrations, queries e seeds.

- Decisão: usar arquitetura MSC.
  Motivo: ajuda a separar responsabilidades entre rotas, controllers, services e demais camadas.

- Decisão: usar Repository Pattern.
  Motivo: centraliza as consultas ao banco em uma camada específica.

- Decisão: usar Service Layer.
  Motivo: mantém as regras de negócio fora dos controllers.

- Decisão: separar o projeto por módulos.
  Motivo: cada funcionalidade fica isolada e mais fácil de manter.

- Decisão: criar módulos `users` e `products`.
  Motivo: são entidades simples e boas para demonstrar CRUD.

- Decisão: criar seeds separados por entidade.
  Motivo: melhora a organização dos dados iniciais.

- Decisão: criar documentação didática em `docs/passo-a-passo.md`.
  Motivo: o objetivo do projeto também é ensinar outro desenvolvedor a recriar a API.

- Decisão: fixar Prisma em `5.22.0` por enquanto.
  Motivo: o Prisma `7.x` introduz o fluxo com `prisma.config.ts` e exige configuração diferente para `PrismaClient`, o que atrapalha o objetivo didático inicial do projeto. A versão `5.22.0` mantém o fluxo clássico (schema + `.env`) e funcionou com migrations/seed no MySQL.

---

## Validation and Acceptance

Esta seção registra evidências reais (comandos + resultados) de que a API, Prisma e MySQL estão funcionando.

- Comando: `brew install mysql mysql@8.4`
  Resultado: MySQL instalado via Homebrew (usado `mysql@8.4` para evitar problemas de compatibilidade/autenticação observados com MySQL 9 + servidor existente).

- Comando: `brew services start mysql@8.4` + configuração em `/opt/homebrew/etc/my.cnf` (porta `3307`)
  Resultado: `mysqld` do projeto rodando em `3307`.

- Comando: `mysql -h 127.0.0.1 -P 3307 -u root -e 'CREATE DATABASE IF NOT EXISTS projeto_1; SHOW DATABASES LIKE \"projeto_1\";'`
  Resultado: banco `projeto_1` criado/confirmado.

- Comando: `cd backend && npm install`
  Resultado: dependências instaladas.

- Comando: `cd backend && npm run prisma:generate`
  Resultado: Prisma Client gerado.

- Comando: `cd backend && npx prisma migrate dev`
  Resultado: migration aplicada e schema em sync.

- Comando: `cd backend && npm run prisma:seed`
  Resultado: seed inseriu dados reais (2 usuários e 2 produtos).

- Comando: `cd backend && npm run dev`
  Resultado: servidor subiu em `http://localhost:3001`.

- Evidência (HTTP):
  - `GET /api/health` → `{"ok":true}`
  - `GET /api/users` → retorna usuários seedados.
  - `GET /api/products` → retorna produtos seedados.
  - CRUD validado via `POST/PUT/DELETE` em `/api/users` e `POST` em `/api/products` com persistência no MySQL.
  - Autenticação (opcional): com `API_TOKEN=secret`, `GET /api/products` sem header retorna `401` e com `Authorization: Bearer secret` retorna `200`.

---

## Architecture Map (MSC + Service Layer + Repository Pattern)

Estrutura criada em `backend/src` e responsabilidades:

- `src/server.js`: inicia o servidor HTTP (porta via `PORT`).
- `src/app.js`: configura o Express (JSON, rotas e middleware de erro).
- `src/config/env.js`: carrega `.env` e valida variáveis com Zod (`DATABASE_URL`, `PORT`).
- `src/database/prisma.js`: instancia e exporta `PrismaClient` para acesso ao MySQL.
- `src/routes/index.js`: agregador de rotas (prefixo `/api`, `health`, módulos).
- `src/middlewares/errorHandler.js`: trata erros (Zod + `AppError` + fallback 500).
- `src/middlewares/authMiddleware.js`: autenticação simples por `Bearer` token (ativa somente se `API_TOKEN` existir).
- `src/utils/AppError.js`: erro de domínio para padronizar status/message.

Módulos:

- `src/modules/users/*`
  - `user.controller.js`: camada `controller` (req/res) para CRUD de usuários.
  - `user.service.js`: camada `service` (regras: email único, not found).
  - `user.repository.js`: camada `repository` (queries Prisma em `User`).
  - `user.validation.js`: camada `validation` (Zod schemas).
  - `user.routes.js`: camada `routes` do módulo.

- `src/modules/products/*`
  - `product.controller.js`: camada `controller` para CRUD de produtos.
  - `product.service.js`: camada `service` (not found).
  - `product.repository.js`: camada `repository` (queries Prisma em `Product`).
  - `product.validation.js`: camada `validation` (Zod schemas).
  - `product.routes.js`: camada `routes` do módulo.

Fluxo (exemplo `POST /api/users`):

`routes` → `controller` (parse/validate) → `service` (regras) → `repository` (MySQL via Prisma) → resposta JSON.

---

## Outcomes & Retrospective

Esta seção deve ser preenchida no final do projeto.

Modelo para preencher no encerramento:

```md
A API RESTful em Node.js foi criada usando Express, Prisma e MySQL.

Foram criados os módulos de usuários e produtos.

A estrutura usa controller, service, repository e validation em cada módulo.

O Prisma foi configurado com provider MySQL, models, migrations e seeds.

A documentação `docs/passo-a-passo.md` explica como criar o projeto do zero, configurar o MySQL, executar migrations, rodar seeds, criar arquivos e testar as rotas.

As rotas foram testadas e a API executou corretamente.
```

Registrar também:

- o que funcionou bem;
- o que precisou ser ajustado;
- quais erros apareceram;
- quais melhorias podem ser feitas em uma próxima versão.

---

## Context and Orientation

A arquitetura esperada do projeto é:

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
│   │
│   ├── database/
│   │   └── prisma.js
│   │
│   ├── modules/
│   │   ├── users/
│   │   │   ├── user.routes.js
│   │   │   ├── user.controller.js
│   │   │   ├── user.service.js
│   │   │   ├── user.repository.js
│   │   │   └── user.validation.js
│   │   │
│   │   └── products/
│   │       ├── product.routes.js
│   │       ├── product.controller.js
│   │       ├── product.service.js
│   │       ├── product.repository.js
│   │       └── product.validation.js
│   │
│   ├── middlewares/
│   │   ├── errorHandler.js
│   │   └── authMiddleware.js
│   │
│   ├── routes/
│   │   └── index.js
│   │
│   ├── utils/
│   │   └── AppError.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env
├── .env.example
├── package.json
└── README.md
```

### Função de cada parte

| Parte | Função |
|---|---|
| `prisma/schema.prisma` | Define os modelos/tabelas do banco |
| `prisma/migrations/` | Guarda o histórico das alterações do banco |
| `prisma/seed.js` | Arquivo principal para rodar seeds |
| `prisma/seeds/` | Guarda seeds separadas por entidade |
| `src/config/env.js` | Centraliza variáveis de ambiente |
| `src/database/prisma.js` | Cria e exporta a conexão com Prisma |
| `src/modules/` | Guarda as funcionalidades do sistema |
| `controller` | Recebe a requisição e devolve resposta |
| `service` | Executa regras de negócio |
| `repository` | Faz consultas no banco de dados |
| `validation` | Valida os dados recebidos |
| `middlewares/` | Guarda intermediários da aplicação |
| `routes/index.js` | Junta todas as rotas |
| `app.js` | Configura o Express |
| `server.js` | Sobe o servidor |
| `.env` | Guarda variáveis sensíveis |
| `.env.example` | Mostra quais variáveis o projeto precisa |
| `README.md` | Explica como rodar o projeto |

---

## Plan of Work

O trabalho será dividido em quatro frentes.

### Frente 1 — Configuração inicial

Criar a base do projeto:

- pasta `backend`;
- `package.json`;
- dependências;
- scripts;
- `.env`;
- `.env.example`;
- estrutura de pastas.

### Frente 2 — Banco de dados com MySQL e Prisma

Criar:

- banco de dados MySQL;
- `DATABASE_URL`;
- `schema.prisma`;
- model `User`;
- model `Product`;
- migrations;
- seeds;
- conexão com Prisma.

### Frente 3 — API em camadas

Criar, para cada módulo:

- routes;
- controller;
- service;
- repository;
- validation.

Criar também:

- `AppError`;
- `errorHandler`;
- `authMiddleware`;
- agregador de rotas;
- `app.js`;
- `server.js`.

### Frente 4 — Documentação didática

Criar:

- `README.md`;
- `docs/passo-a-passo.md`.

A documentação deve explicar:

- o que foi feito;
- por que foi feito;
- como executar;
- como configurar MySQL;
- como criar banco;
- como configurar Prisma;
- como rodar migration;
- como rodar seed;
- como recriar o projeto;
- como testar;
- quais erros podem acontecer.

---

## Concrete Steps

### 1. Criar a pasta backend

Comando:

```bash
mkdir backend
cd backend
```

Registrar em `docs/passo-a-passo.md`:

- `mkdir` cria uma pasta;
- `cd` entra na pasta;
- `backend` será a raiz da API.

---

### 2. Inicializar o projeto Node.js

Comando:

```bash
npm init -y
```

Registrar em `docs/passo-a-passo.md`:

- esse comando cria o `package.json`;
- `package.json` guarda informações do projeto;
- ele também guarda scripts e dependências.

---

### 3. Instalar dependências principais

Comando:

```bash
npm install express cors dotenv @prisma/client
```

Explicar:

| Pacote | Função |
|---|---|
| `express` | Cria o servidor e as rotas da API |
| `cors` | Permite configurar acesso entre frontend e backend |
| `dotenv` | Carrega variáveis do arquivo `.env` |
| `@prisma/client` | Cliente usado para consultar o banco com Prisma |

---

### 4. Instalar dependências de desenvolvimento

Comando:

```bash
npm install -D prisma nodemon
```

Explicar:

| Pacote | Função |
|---|---|
| `prisma` | CLI do Prisma para init, migrations e generate |
| `nodemon` | Reinicia o servidor automaticamente durante o desenvolvimento |

---

### 5. Configurar scripts no package.json

Editar `package.json`:

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

Registrar em `docs/passo-a-passo.md`:

- `npm run dev` roda o projeto em modo desenvolvimento;
- `npm start` roda o projeto em modo normal;
- `npm run prisma:generate` atualiza o Prisma Client;
- `npm run prisma:migrate` cria/roda migrations;
- `npm run prisma:seed` insere dados iniciais.

---

### 6. Criar banco de dados MySQL

Criar um banco chamado:

```sql
CREATE DATABASE node_mysql_api;
```

Registrar em `docs/passo-a-passo.md`:

- o banco precisa existir antes de rodar a migration;
- o Prisma usará esse banco para criar as tabelas;
- `node_mysql_api` é o nome do banco usado no projeto.

---

### 7. Criar arquivos de ambiente

Criar `.env`:

```env
PORT=3001
DATABASE_URL="mysql://root:senha@localhost:3306/node_mysql_api"
```

Criar `.env.example`:

```env
PORT=3001
DATABASE_URL="mysql://USUARIO:SENHA@localhost:3306/node_mysql_api"
```

Registrar em `docs/passo-a-passo.md`:

- `.env` guarda configurações do ambiente;
- `.env.example` serve como modelo;
- `.env` não deve ser enviado com dados sensíveis em projetos reais;
- `DATABASE_URL` informa como conectar no MySQL;
- `root` é o usuário do banco no exemplo;
- `senha` deve ser substituída pela senha real;
- `3306` é a porta padrão do MySQL;
- `node_mysql_api` é o nome do banco.

---

### 8. Inicializar Prisma

Comando:

```bash
npx prisma init
```

Registrar:

- esse comando cria a pasta `prisma`;
- cria o arquivo `schema.prisma`;
- o Prisma usa esse arquivo para definir models e conexão com banco.

---

### 9. Configurar schema.prisma com MySQL

Editar `prisma/schema.prisma`:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
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

Registrar:

- `provider = "mysql"` indica que o banco usado é MySQL;
- `url = env("DATABASE_URL")` pega a conexão do `.env`;
- `User` representa usuários;
- `Product` representa produtos;
- `@@map("users")` define o nome real da tabela no banco;
- `@@map("products")` define o nome real da tabela no banco;
- `@db.Decimal(10, 2)` define preço com duas casas decimais;
- `@unique` impede emails repetidos.

---

### 10. Rodar migration

Comando:

```bash
npx prisma migrate dev --name init
```

Registrar:

- migration cria as tabelas no MySQL;
- a pasta `prisma/migrations` guarda o histórico;
- após a migration, as tabelas `users` e `products` devem existir.

---

### 11. Gerar Prisma Client

Comando:

```bash
npx prisma generate
```

Registrar:

- esse comando gera o cliente Prisma;
- o Prisma Client permite fazer consultas no banco usando JavaScript.

---

### 12. Criar conexão Prisma

Criar pasta:

```bash
mkdir -p src/database
```

Criar arquivo:

```txt
src/database/prisma.js
```

Código:

```js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = prisma;
```

Registrar:

- `PrismaClient` é usado para acessar o banco;
- esse arquivo centraliza a conexão;
- outros arquivos importam essa conexão.

---

### 13. Criar configuração de ambiente

Criar pasta:

```bash
mkdir -p src/config
```

Criar arquivo:

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

Registrar:

- `dotenv` carrega variáveis do `.env`;
- esse arquivo centraliza configurações;
- evita espalhar `process.env` por vários arquivos.

---

### 14. Criar utilitário AppError

Criar pasta:

```bash
mkdir -p src/utils
```

Criar arquivo:

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

Registrar:

- `AppError` representa erros controlados;
- `message` guarda a mensagem do erro;
- `statusCode` guarda o status HTTP;
- isso ajuda o middleware de erro a responder corretamente.

---

### 15. Criar middlewares

Criar pasta:

```bash
mkdir -p src/middlewares
```

Criar arquivo:

```txt
src/middlewares/errorHandler.js
```

Código:

```js
const AppError = require('../utils/AppError');

function errorHandler(error, request, response, next) {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      message: error.message
    });
  }

  console.error(error);

  return response.status(500).json({
    message: 'Erro interno do servidor'
  });
}

module.exports = errorHandler;
```

Criar arquivo:

```txt
src/middlewares/authMiddleware.js
```

Código:

```js
function authMiddleware(request, response, next) {
  return next();
}

module.exports = authMiddleware;
```

Registrar:

- `errorHandler` captura erros da aplicação;
- `AppError` gera erros esperados;
- erros inesperados retornam status 500;
- `authMiddleware` ficará simples nesta versão;
- autenticação real pode ser adicionada depois.

---

### 16. Criar módulo de usuários

Criar pasta:

```bash
mkdir -p src/modules/users
```

Criar arquivo:

```txt
src/modules/users/user.repository.js
```

Código:

```js
const prisma = require('../../database/prisma');

async function findAll() {
  return prisma.user.findMany({
    orderBy: {
      id: 'asc'
    }
  });
}

async function findById(id) {
  return prisma.user.findUnique({
    where: {
      id
    }
  });
}

async function findByEmail(email) {
  return prisma.user.findUnique({
    where: {
      email
    }
  });
}

async function create(data) {
  return prisma.user.create({
    data
  });
}

async function update(id, data) {
  return prisma.user.update({
    where: {
      id
    },
    data
  });
}

async function remove(id) {
  return prisma.user.delete({
    where: {
      id
    }
  });
}

module.exports = {
  findAll,
  findById,
  findByEmail,
  create,
  update,
  remove
};
```

Criar arquivo:

```txt
src/modules/users/user.validation.js
```

Código:

```js
const AppError = require('../../utils/AppError');

function validateCreateUser(data) {
  if (!data.name) {
    throw new AppError('Nome é obrigatório');
  }

  if (!data.email) {
    throw new AppError('Email é obrigatório');
  }

  if (!data.password) {
    throw new AppError('Senha é obrigatória');
  }
}

function validateUpdateUser(data) {
  if (!data.name) {
    throw new AppError('Nome é obrigatório');
  }

  if (!data.email) {
    throw new AppError('Email é obrigatório');
  }
}

module.exports = {
  validateCreateUser,
  validateUpdateUser
};
```

Criar arquivo:

```txt
src/modules/users/user.service.js
```

Código:

```js
const userRepository = require('./user.repository');
const AppError = require('../../utils/AppError');
const {
  validateCreateUser,
  validateUpdateUser
} = require('./user.validation');

async function listUsers() {
  return userRepository.findAll();
}

async function getUserById(id) {
  const user = await userRepository.findById(id);

  if (!user) {
    throw new AppError('Usuário não encontrado', 404);
  }

  return user;
}

async function createUser(data) {
  validateCreateUser(data);

  const userAlreadyExists = await userRepository.findByEmail(data.email);

  if (userAlreadyExists) {
    throw new AppError('Email já cadastrado');
  }

  return userRepository.create(data);
}

async function updateUser(id, data) {
  validateUpdateUser(data);

  await getUserById(id);

  return userRepository.update(id, data);
}

async function deleteUser(id) {
  await getUserById(id);

  await userRepository.remove(id);
}

module.exports = {
  listUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
```

Criar arquivo:

```txt
src/modules/users/user.controller.js
```

Código:

```js
const userService = require('./user.service');

async function index(request, response, next) {
  try {
    const users = await userService.listUsers();

    return response.json(users);
  } catch (error) {
    return next(error);
  }
}

async function show(request, response, next) {
  try {
    const { id } = request.params;

    const user = await userService.getUserById(Number(id));

    return response.json(user);
  } catch (error) {
    return next(error);
  }
}

async function store(request, response, next) {
  try {
    const user = await userService.createUser(request.body);

    return response.status(201).json(user);
  } catch (error) {
    return next(error);
  }
}

async function update(request, response, next) {
  try {
    const { id } = request.params;

    const user = await userService.updateUser(Number(id), request.body);

    return response.json(user);
  } catch (error) {
    return next(error);
  }
}

async function destroy(request, response, next) {
  try {
    const { id } = request.params;

    await userService.deleteUser(Number(id));

    return response.status(204).send();
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy
};
```

Criar arquivo:

```txt
src/modules/users/user.routes.js
```

Código:

```js
const { Router } = require('express');
const userController = require('./user.controller');

const userRoutes = Router();

userRoutes.get('/', userController.index);
userRoutes.get('/:id', userController.show);
userRoutes.post('/', userController.store);
userRoutes.put('/:id', userController.update);
userRoutes.delete('/:id', userController.destroy);

module.exports = userRoutes;
```

Registrar na documentação:

- repository consulta o banco;
- validation valida os dados;
- service aplica regra de negócio;
- controller recebe requisição e responde;
- routes define os endpoints.

---

### 17. Criar módulo de produtos

Criar pasta:

```bash
mkdir -p src/modules/products
```

Criar arquivo:

```txt
src/modules/products/product.repository.js
```

Código:

```js
const prisma = require('../../database/prisma');

async function findAll() {
  return prisma.product.findMany({
    orderBy: {
      id: 'asc'
    }
  });
}

async function findById(id) {
  return prisma.product.findUnique({
    where: {
      id
    }
  });
}

async function create(data) {
  return prisma.product.create({
    data
  });
}

async function update(id, data) {
  return prisma.product.update({
    where: {
      id
    },
    data
  });
}

async function remove(id) {
  return prisma.product.delete({
    where: {
      id
    }
  });
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove
};
```

Criar arquivo:

```txt
src/modules/products/product.validation.js
```

Código:

```js
const AppError = require('../../utils/AppError');

function validateCreateProduct(data) {
  if (!data.name) {
    throw new AppError('Nome é obrigatório');
  }

  if (data.price === undefined) {
    throw new AppError('Preço é obrigatório');
  }

  if (Number(data.price) <= 0) {
    throw new AppError('Preço deve ser maior que zero');
  }

  if (data.stock === undefined) {
    throw new AppError('Estoque é obrigatório');
  }

  if (Number(data.stock) < 0) {
    throw new AppError('Estoque não pode ser negativo');
  }
}

function validateUpdateProduct(data) {
  validateCreateProduct(data);
}

module.exports = {
  validateCreateProduct,
  validateUpdateProduct
};
```

Criar arquivo:

```txt
src/modules/products/product.service.js
```

Código:

```js
const productRepository = require('./product.repository');
const AppError = require('../../utils/AppError');
const {
  validateCreateProduct,
  validateUpdateProduct
} = require('./product.validation');

async function listProducts() {
  return productRepository.findAll();
}

async function getProductById(id) {
  const product = await productRepository.findById(id);

  if (!product) {
    throw new AppError('Produto não encontrado', 404);
  }

  return product;
}

async function createProduct(data) {
  validateCreateProduct(data);

  return productRepository.create(data);
}

async function updateProduct(id, data) {
  validateUpdateProduct(data);

  await getProductById(id);

  return productRepository.update(id, data);
}

async function deleteProduct(id) {
  await getProductById(id);

  await productRepository.remove(id);
}

module.exports = {
  listProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};
```

Criar arquivo:

```txt
src/modules/products/product.controller.js
```

Código:

```js
const productService = require('./product.service');

async function index(request, response, next) {
  try {
    const products = await productService.listProducts();

    return response.json(products);
  } catch (error) {
    return next(error);
  }
}

async function show(request, response, next) {
  try {
    const { id } = request.params;

    const product = await productService.getProductById(Number(id));

    return response.json(product);
  } catch (error) {
    return next(error);
  }
}

async function store(request, response, next) {
  try {
    const product = await productService.createProduct(request.body);

    return response.status(201).json(product);
  } catch (error) {
    return next(error);
  }
}

async function update(request, response, next) {
  try {
    const { id } = request.params;

    const product = await productService.updateProduct(Number(id), request.body);

    return response.json(product);
  } catch (error) {
    return next(error);
  }
}

async function destroy(request, response, next) {
  try {
    const { id } = request.params;

    await productService.deleteProduct(Number(id));

    return response.status(204).send();
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy
};
```

Criar arquivo:

```txt
src/modules/products/product.routes.js
```

Código:

```js
const { Router } = require('express');
const productController = require('./product.controller');

const productRoutes = Router();

productRoutes.get('/', productController.index);
productRoutes.get('/:id', productController.show);
productRoutes.post('/', productController.store);
productRoutes.put('/:id', productController.update);
productRoutes.delete('/:id', productController.destroy);

module.exports = productRoutes;
```

---

### 18. Criar agregador de rotas

Criar pasta:

```bash
mkdir -p src/routes
```

Criar arquivo:

```txt
src/routes/index.js
```

Código:

```js
const { Router } = require('express');

const userRoutes = require('../modules/users/user.routes');
const productRoutes = require('../modules/products/product.routes');

const routes = Router();

routes.get('/health', (request, response) => {
  return response.json({
    status: 'ok'
  });
});

routes.use('/users', userRoutes);
routes.use('/products', productRoutes);

module.exports = routes;
```

Registrar:

- esse arquivo junta todas as rotas;
- `/health` testa se a API está viva;
- `/users` aponta para as rotas de usuários;
- `/products` aponta para as rotas de produtos.

---

### 19. Criar app.js

Criar arquivo:

```txt
src/app.js
```

Código:

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

Registrar:

- `express()` cria a aplicação;
- `cors()` configura acesso externo;
- `express.json()` permite receber JSON;
- `/api` será o prefixo das rotas;
- `errorHandler` captura erros.

---

### 20. Criar server.js

Criar arquivo:

```txt
src/server.js
```

Código:

```js
const app = require('./app');
const env = require('./config/env');

app.listen(env.port, () => {
  console.log(`Servidor rodando na porta ${env.port}`);
});
```

Registrar:

- `server.js` sobe o servidor;
- `app.listen` faz a API escutar uma porta;
- a porta vem do `.env`.

---

### 21. Criar seeds

Criar pasta:

```bash
mkdir -p prisma/seeds
```

Criar arquivo:

```txt
prisma/seeds/users.seed.js
```

Código:

```js
async function seedUsers(prisma) {
  await prisma.user.createMany({
    data: [
      {
        name: 'Admin',
        email: 'admin@email.com',
        password: '123456'
      },
      {
        name: 'Alberto',
        email: 'alberto@email.com',
        password: '123456'
      }
    ],
    skipDuplicates: true
  });
}

module.exports = seedUsers;
```

Criar arquivo:

```txt
prisma/seeds/products.seed.js
```

Código:

```js
async function seedProducts(prisma) {
  await prisma.product.createMany({
    data: [
      {
        name: 'Mouse Gamer',
        description: 'Mouse com iluminação RGB',
        price: 120.50,
        stock: 10
      },
      {
        name: 'Teclado Mecânico',
        description: 'Teclado mecânico ABNT2',
        price: 250.00,
        stock: 5
      }
    ]
  });
}

module.exports = seedProducts;
```

Criar arquivo:

```txt
prisma/seed.js
```

Código:

```js
const { PrismaClient } = require('@prisma/client');

const seedUsers = require('./seeds/users.seed');
const seedProducts = require('./seeds/products.seed');

const prisma = new PrismaClient();

async function main() {
  await seedUsers(prisma);
  await seedProducts(prisma);
}

main()
  .then(async () => {
    console.log('Seeds executadas com sucesso');
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
```

Rodar:

```bash
npm run prisma:seed
```

Registrar:

- seeds criam dados iniciais no MySQL;
- `seed.js` chama os seeds separados;
- isso facilita testar a API com dados prontos.

---

### 22. Testar API

Rodar servidor:

```bash
npm run dev
```

Testar health:

```http
GET /api/health
```

Testar usuários:

```http
GET /api/users
GET /api/users/1
POST /api/users
PUT /api/users/1
DELETE /api/users/1
```

Body para criar usuário:

```json
{
  "name": "João Silva",
  "email": "joao@email.com",
  "password": "123456"
}
```

Testar produtos:

```http
GET /api/products
GET /api/products/1
POST /api/products
PUT /api/products/1
DELETE /api/products/1
```

Body para criar produto:

```json
{
  "name": "Monitor 24 polegadas",
  "description": "Monitor Full HD",
  "price": 899.90,
  "stock": 3
}
```

---

### 23. Criar README.md

Criar `README.md` com:

```md
# API RESTful Node.js + MySQL

API RESTful construída com Node.js, Express, Prisma, MySQL e arquitetura em camadas.

## Tecnologias

- Node.js
- Express
- Prisma
- MySQL
- CORS
- Dotenv

## Como rodar

```bash
npm install
npx prisma generate
npx prisma migrate dev
npm run prisma:seed
npm run dev
```

## Configuração do .env

```env
PORT=3001
DATABASE_URL="mysql://USUARIO:SENHA@localhost:3306/node_mysql_api"
```

## Rotas

### Health

GET /api/health

### Users

GET /api/users
GET /api/users/:id
POST /api/users
PUT /api/users/:id
DELETE /api/users/:id

### Products

GET /api/products
GET /api/products/:id
POST /api/products
PUT /api/products/:id
DELETE /api/products/:id
```

---

### 24. Criar documentação didática

Criar:

```txt
docs/passo-a-passo.md
```

Estrutura obrigatória:

```md
# Passo a passo — Criando uma API RESTful com Node.js, Express, Prisma e MySQL

## 1. O que vamos construir?

## 2. O que é uma API?

## 3. O que é REST?

## 4. O que é Node.js?

## 5. O que é Express?

## 6. O que é MySQL?

## 7. O que é Prisma?

## 8. O que é arquitetura em camadas?

## 9. O que é MSC?

## 10. O que é Service Layer?

## 11. O que é Repository Pattern?

## 12. Criando o projeto

## 13. Instalando dependências

## 14. Configurando variáveis de ambiente

## 15. Criando o banco MySQL

## 16. Configurando Prisma com MySQL

## 17. Criando models no Prisma

## 18. Rodando migrations

## 19. Criando conexão com banco

## 20. Criando módulo de usuários

## 21. Criando módulo de produtos

## 22. Criando middlewares

## 23. Criando rotas

## 24. Criando seeds

## 25. Rodando e testando a API

## 26. Erros comuns

## 27. Próximos passos
```

---

## Validation and Acceptance

### Validação técnica

- [ ] `npm install` executa sem erro.
- [ ] O banco MySQL `node_mysql_api` existe.
- [ ] `.env` possui `DATABASE_URL` válida.
- [ ] `npx prisma generate` executa sem erro.
- [ ] `npx prisma migrate dev --name init` executa sem erro.
- [ ] As tabelas `users` e `products` são criadas no MySQL.
- [ ] `npm run prisma:seed` executa sem erro.
- [ ] Os dados iniciais aparecem no MySQL.
- [ ] `npm run dev` sobe o servidor.
- [ ] `GET /api/health` retorna `{ "status": "ok" }`.
- [ ] `GET /api/users` retorna usuários.
- [ ] `POST /api/users` cria usuário.
- [ ] `GET /api/users/:id` busca usuário.
- [ ] `PUT /api/users/:id` atualiza usuário.
- [ ] `DELETE /api/users/:id` exclui usuário.
- [ ] `GET /api/products` retorna produtos.
- [ ] `POST /api/products` cria produto.
- [ ] `GET /api/products/:id` busca produto.
- [ ] `PUT /api/products/:id` atualiza produto.
- [ ] `DELETE /api/products/:id` exclui produto.
- [ ] Erros controlados passam pelo `errorHandler`.
- [ ] Arquitetura está organizada por módulos.

### Validação de estrutura

- [ ] Existe `prisma/schema.prisma`.
- [ ] Existe `prisma/migrations/`.
- [ ] Existe `prisma/seed.js`.
- [ ] Existe `prisma/seeds/users.seed.js`.
- [ ] Existe `prisma/seeds/products.seed.js`.
- [ ] Existe `src/config/env.js`.
- [ ] Existe `src/database/prisma.js`.
- [ ] Existe `src/modules/users`.
- [ ] Existe `src/modules/products`.
- [ ] Existe `src/middlewares/errorHandler.js`.
- [ ] Existe `src/middlewares/authMiddleware.js`.
- [ ] Existe `src/routes/index.js`.
- [ ] Existe `src/utils/AppError.js`.
- [ ] Existe `src/app.js`.
- [ ] Existe `src/server.js`.
- [ ] Existe `.env.example`.
- [ ] Existe `README.md`.
- [ ] Existe `docs/passo-a-passo.md`.

### Validação didática

- [ ] A documentação explica comandos.
- [ ] A documentação explica dependências.
- [ ] A documentação explica MySQL.
- [ ] A documentação explica DATABASE_URL.
- [ ] A documentação explica Prisma.
- [ ] A documentação explica migrations.
- [ ] A documentação explica seeds.
- [ ] A documentação explica pastas.
- [ ] A documentação explica arquivos.
- [ ] A documentação explica controller.
- [ ] A documentação explica service.
- [ ] A documentação explica repository.
- [ ] A documentação explica validation.
- [ ] A documentação explica middlewares.
- [ ] A documentação explica rotas.
- [ ] A documentação explica erros comuns.
- [ ] Um dev iniciante conseguiria recriar a API seguindo a documentação.

---

## Idempotence and Recovery

### Se o projeto já existir

Antes de criar arquivos, verificar se eles já existem.

Se existirem, não apagar sem necessidade.

Atualizar somente o que for necessário.

### Se `npm install` falhar

Verificar:

- se o Node.js está instalado;
- se o terminal está dentro da pasta `backend`;
- se o `package.json` existe.

### Se MySQL não conectar

Verificar:

- se o MySQL está rodando;
- se o banco `node_mysql_api` existe;
- se usuário e senha estão corretos;
- se a porta é `3306`;
- se a `DATABASE_URL` está correta.

### Se Prisma não conectar

Verificar:

- se `.env` existe;
- se `DATABASE_URL` está preenchida;
- se `schema.prisma` está usando `provider = "mysql"`;
- se `url = env("DATABASE_URL")`;
- se `npx prisma generate` foi executado.

### Se migration falhar

Verificar:

- se o banco MySQL existe;
- se a conexão está correta;
- se o schema está válido;
- se existe erro de sintaxe no `schema.prisma`.

### Se seed falhar

Verificar:

- se a migration já foi rodada;
- se o Prisma Client foi gerado;
- se os dados violam alguma regra, como email único.

### Se rota retornar 404

Verificar:

- se a rota foi importada em `src/routes/index.js`;
- se `app.js` está usando `app.use('/api', routes)`;
- se o servidor foi reiniciado;
- se a URL está correta.

### Se o erro não passar pelo errorHandler

Verificar:

- se o controller usa `try/catch`;
- se chama `next(error)`;
- se `app.use(errorHandler)` está depois das rotas.

---

## Artifacts and Notes

Arquivos esperados:

```txt
prisma/schema.prisma
prisma/seed.js
prisma/seeds/users.seed.js
prisma/seeds/products.seed.js
src/config/env.js
src/database/prisma.js
src/modules/users/user.routes.js
src/modules/users/user.controller.js
src/modules/users/user.service.js
src/modules/users/user.repository.js
src/modules/users/user.validation.js
src/modules/products/product.routes.js
src/modules/products/product.controller.js
src/modules/products/product.service.js
src/modules/products/product.repository.js
src/modules/products/product.validation.js
src/middlewares/errorHandler.js
src/middlewares/authMiddleware.js
src/routes/index.js
src/utils/AppError.js
src/app.js
src/server.js
.env.example
README.md
docs/passo-a-passo.md
```

### Exemplo de usuário

```json
{
  "name": "João Silva",
  "email": "joao@email.com",
  "password": "123456"
}
```

### Exemplo de produto

```json
{
  "name": "Monitor 24 polegadas",
  "description": "Monitor Full HD",
  "price": 899.90,
  "stock": 3
}
```

### Registro de execução

Usar este modelo em `docs/passo-a-passo.md`:

```md
## Registro de execução

- Comando executado: `npm run dev`
- Resultado: servidor iniciou corretamente
- Porta: 3001
- Rota testada: `GET /api/health`
- Resultado esperado: `{ "status": "ok" }`
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

### Scripts esperados

```json
{
  "dev": "nodemon src/server.js",
  "start": "node src/server.js",
  "prisma:generate": "prisma generate",
  "prisma:migrate": "prisma migrate dev",
  "prisma:seed": "node prisma/seed.js"
}
```

### Banco de dados

Banco esperado:

```sql
CREATE DATABASE node_mysql_api;
```

DATABASE_URL esperada:

```env
DATABASE_URL="mysql://USUARIO:SENHA@localhost:3306/node_mysql_api"
```

### Interface HTTP

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/api/health` | Verifica se a API está viva |
| GET | `/api/users` | Lista usuários |
| GET | `/api/users/:id` | Busca usuário por id |
| POST | `/api/users` | Cria usuário |
| PUT | `/api/users/:id` | Atualiza usuário |
| DELETE | `/api/users/:id` | Exclui usuário |
| GET | `/api/products` | Lista produtos |
| GET | `/api/products/:id` | Busca produto por id |
| POST | `/api/products` | Cria produto |
| PUT | `/api/products/:id` | Atualiza produto |
| DELETE | `/api/products/:id` | Exclui produto |

### Contrato de criação de usuário

```json
{
  "name": "Maria Souza",
  "email": "maria@email.com",
  "password": "123456"
}
```

### Contrato de criação de produto

```json
{
  "name": "Notebook",
  "description": "Notebook para estudos",
  "price": 3500.00,
  "stock": 4
}
```

---

## Regra para execução contínua por agente/IA

Ao executar este PLANS.md, o agente deve:

- ler o documento completo;
- identificar o próximo item pendente;
- executar a tarefa;
- criar ou editar arquivos necessários;
- rodar comandos quando possível;
- validar o resultado;
- atualizar checkboxes;
- registrar evidências;
- documentar cada etapa em `docs/passo-a-passo.md`;
- não pular documentação;
- não parar após uma única tarefa;
- continuar enquanto houver tarefas executáveis;
- registrar bloqueios reais quando existirem;
- não marcar tarefa como concluída sem validação.

O objetivo é entregar:

- API funcionando;
- arquitetura organizada;
- MySQL configurado;
- Prisma configurado;
- migrations funcionando;
- seeds funcionando;
- rotas testadas;
- documentação didática reproduzível.
