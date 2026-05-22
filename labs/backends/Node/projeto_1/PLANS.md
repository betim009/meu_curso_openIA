# PLANS.md — API RESTful em Node.js com Express, Prisma e Repository Pattern

Este ExecPlan é um documento vivo.

Ele deve ser usado para desenvolver uma API RESTful em Node.js usando Express, Prisma ORM e uma arquitetura em camadas baseada em MSC com Service Layer e Repository Pattern.

O objetivo não é apenas criar uma API funcionando.

O objetivo principal é criar uma API simples e, ao mesmo tempo, produzir uma documentação didática explicando passo a passo como outro desenvolvedor consegue criar essa mesma API do zero.

---

## Purpose / Big Picture

O objetivo deste projeto é construir uma API RESTful em Node.js com Express e Prisma.

A API será simples, mas organizada de forma profissional.

Ela terá dois módulos principais:

- usuários;
- produtos.

A API deverá permitir operações básicas de CRUD para produtos e usuários.

Além disso, o projeto deverá ter uma documentação explicando:

- quais comandos foram executados;
- quais dependências foram instaladas;
- quais pastas foram criadas;
- quais arquivos foram criados;
- qual é a responsabilidade de cada arquivo;
- como funciona a arquitetura MSC;
- como funciona o Repository Pattern;
- como funciona o Prisma;
- como rodar migrations;
- como rodar seeds;
- como testar as rotas.

O resultado final esperado é uma API que funcione e que possa ser usada como material didático para outro desenvolvedor recriar o mesmo projeto.

---

## Progress

- [ ] Criar pasta `backend`.
- [ ] Inicializar projeto Node.js com `npm init`.
- [ ] Instalar dependências principais.
- [ ] Instalar dependências de desenvolvimento.
- [ ] Configurar scripts no `package.json`.
- [ ] Criar arquivo `.env`.
- [ ] Criar arquivo `.env.example`.
- [ ] Inicializar Prisma.
- [ ] Configurar `prisma/schema.prisma`.
- [ ] Criar model `User` no Prisma.
- [ ] Criar model `Product` no Prisma.
- [ ] Rodar primeira migration.
- [ ] Criar conexão do Prisma em `src/database/prisma.js`.
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
- [ ] Rodar seeds.
- [ ] Testar rotas de usuários.
- [ ] Testar rotas de produtos.
- [ ] Criar `README.md`.
- [ ] Criar pasta `docs`.
- [ ] Criar `docs/passo-a-passo.md`.
- [ ] Documentar comandos usados.
- [ ] Documentar pastas criadas.
- [ ] Documentar arquivos criados.
- [ ] Documentar arquitetura MSC.
- [ ] Documentar Service Layer.
- [ ] Documentar Repository Pattern.
- [ ] Documentar Prisma, migrations e seeds.
- [ ] Documentar erros comuns.
- [ ] Validar se outro desenvolvedor consegue recriar a API seguindo a documentação.

---

## Surprises & Discoveries

Esta seção deve ser preenchida durante o desenvolvimento.

Use este espaço para registrar descobertas, problemas e evidências.

Exemplos:

```md
- Descoberta: o Prisma criou automaticamente a pasta `prisma`.
  Evidência: pasta criada após executar `npx prisma init`.

- Descoberta: a migration gerou uma pasta dentro de `prisma/migrations`.
  Evidência: pasta criada após executar `npx prisma migrate dev`.

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

- Decisão: usar Prisma.
  Motivo: facilita a criação de models, migrations, consultas e seeds.

- Decisão: usar arquitetura MSC.
  Motivo: separa responsabilidades entre rotas, controllers, services e outras camadas.

- Decisão: usar Repository Pattern.
  Motivo: centraliza as consultas ao banco de dados em arquivos específicos.

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

---

## Outcomes & Retrospective

Esta seção deve ser preenchida no final do projeto.

Modelo para preencher no encerramento:

```md
A API RESTful em Node.js foi criada usando Express, Prisma e arquitetura em camadas.

Foram criados os módulos de usuários e produtos.

A estrutura usa controller, service, repository e validation em cada módulo.

O Prisma foi configurado com models, migrations e seeds.

A documentação `docs/passo-a-passo.md` explica como criar o projeto do zero, quais comandos executar, quais arquivos criar e qual a função de cada camada.

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
- Prisma;
- estrutura de pastas.

### Frente 2 — Banco de dados com Prisma

Criar:

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
- como recriar;
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

### 6. Criar arquivos de ambiente

Criar `.env`:

```env
PORT=3001
DATABASE_URL="file:./dev.db"
```

Criar `.env.example`:

```env
PORT=3001
DATABASE_URL="file:./dev.db"
```

Registrar em `docs/passo-a-passo.md`:

- `.env` guarda configurações do ambiente;
- `.env.example` serve como modelo;
- `.env` não deve ser enviado com dados sensíveis em projetos reais;
- `DATABASE_URL` informa onde está o banco;
- neste projeto inicial será usado SQLite para facilitar.

---

### 7. Inicializar Prisma

Comando:

```bash
npx prisma init
```

Registrar:

- esse comando cria a pasta `prisma`;
- cria o arquivo `schema.prisma`;
- o Prisma usa esse arquivo para definir models e conexão com banco.

---

### 8. Configurar schema.prisma

Editar `prisma/schema.prisma`:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  password  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Product {
  id          Int      @id @default(autoincrement())
  name        String
  description String?
  price       Decimal
  stock       Int      @default(0)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

Registrar:

- `generator client` configura o Prisma Client;
- `datasource db` configura o banco;
- `User` representa usuários;
- `Product` representa produtos;
- `@id` define chave primária;
- `@default(autoincrement())` gera id automático;
- `@unique` impede emails repetidos;
- `DateTime` guarda datas;
- `@updatedAt` atualiza a data automaticamente.

---

### 9. Rodar migration

Comando:

```bash
npx prisma migrate dev --name init
```

Registrar:

- migration cria as tabelas no banco;
- a pasta `prisma/migrations` guarda o histórico;
- o banco SQLite será criado para desenvolvimento.

---

### 10. Criar conexão Prisma

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

### 11. Criar configuração de ambiente

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

### 12. Criar utilitário AppError

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

### 13. Criar middlewares

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

### 14. Criar módulo de usuários

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

### 15. Criar módulo de produtos

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

### 16. Criar agregador de rotas

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

### 17. Criar app.js

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

### 18. Criar server.js

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

### 19. Criar seeds

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

- seeds criam dados iniciais;
- `seed.js` chama os seeds separados;
- isso facilita testar a API com dados prontos.

---

### 20. Testar API

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

### 21. Criar README.md

Criar `README.md` com:

```md
# API RESTful Node.js

API RESTful construída com Node.js, Express, Prisma e arquitetura em camadas.

## Tecnologias

- Node.js
- Express
- Prisma
- SQLite
- CORS
- Dotenv

## Como rodar

```bash
npm install
npx prisma migrate dev
npm run prisma:seed
npm run dev
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

### 22. Criar documentação didática

Criar:

```txt
docs/passo-a-passo.md
```

Estrutura obrigatória:

```md
# Passo a passo — Criando uma API RESTful com Node.js, Express e Prisma

## 1. O que vamos construir?

## 2. O que é uma API?

## 3. O que é REST?

## 4. O que é Node.js?

## 5. O que é Express?

## 6. O que é Prisma?

## 7. O que é arquitetura em camadas?

## 8. O que é MSC?

## 9. O que é Service Layer?

## 10. O que é Repository Pattern?

## 11. Criando o projeto

## 12. Instalando dependências

## 13. Configurando variáveis de ambiente

## 14. Configurando Prisma

## 15. Criando models no Prisma

## 16. Rodando migrations

## 17. Criando conexão com banco

## 18. Criando módulo de usuários

## 19. Criando módulo de produtos

## 20. Criando middlewares

## 21. Criando rotas

## 22. Criando seeds

## 23. Rodando e testando a API

## 24. Erros comuns

## 25. Próximos passos
```

---

## Validation and Acceptance

### Validação técnica

- [ ] `npm install` executa sem erro.
- [ ] `npx prisma generate` executa sem erro.
- [ ] `npx prisma migrate dev --name init` executa sem erro.
- [ ] `npm run prisma:seed` executa sem erro.
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
- [ ] A documentação explica pastas.
- [ ] A documentação explica arquivos.
- [ ] A documentação explica Prisma.
- [ ] A documentação explica migrations.
- [ ] A documentação explica seeds.
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

### Se Prisma não conectar

Verificar:

- se `.env` existe;
- se `DATABASE_URL` está preenchida;
- se o `schema.prisma` está usando `env("DATABASE_URL")`;
- se `npx prisma generate` foi executado.

### Se migration falhar

Verificar:

- se o schema está válido;
- se o banco SQLite pode ser criado;
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
- Prisma configurado;
- migrations funcionando;
- seeds funcionando;
- rotas testadas;
- documentação didática reproduzível.
