# Passo a passo — Node.js + Express + Prisma + MySQL

Este documento descreve como recriar o projeto do zero e como validar (com evidências reais) que:

- o MySQL está rodando;
- o Prisma conectou no MySQL;
- migrations criaram tabelas;
- seed inseriu dados reais;
- a API subiu e responde rotas HTTP;
- os endpoints persistem no banco real.

---

## 1) Pré-requisitos

- Node.js (projeto validado com Node `v22.x`)
- Homebrew (no macOS) ou outro gerenciador equivalente
- MySQL

---

## 2) MySQL (rodando de verdade)

### 2.1) Instalar MySQL via Homebrew

Comandos executados:

```bash
brew install mysql@8.4
brew services start mysql@8.4
```

### 2.2) Evitar conflito de porta (3306 já estava em uso)

Durante a execução foi identificado um `mysqld` já rodando em `3306` (`/usr/local/mysql/bin/mysqld`).

Para evitar parar/alterar o MySQL existente, foi configurado o MySQL do projeto para rodar em `3307`.

Arquivo criado/ajustado (fora do repositório):

- `/opt/homebrew/etc/my.cnf`

Conteúdo usado:

```ini
[mysqld]
port=3307
mysqlx_port=33070
socket=/tmp/mysql-projeto1.sock

[client]
port=3307
socket=/tmp/mysql-projeto1.sock
```

Reinicie o serviço após alterar:

```bash
brew services restart mysql@8.4
```

Validação (evidência):

```bash
lsof -iTCP:3307 -sTCP:LISTEN -P -n
mysql -h 127.0.0.1 -P 3307 -u root -e "SELECT VERSION() as version, @@port as port;"
```

### 2.3) Criar o banco

```bash
mysql -h 127.0.0.1 -P 3307 -u root -e 'CREATE DATABASE IF NOT EXISTS projeto_1;'
mysql -h 127.0.0.1 -P 3307 -u root -e 'SHOW DATABASES LIKE \"projeto_1\";'
```

---

## 3) Backend (Node + Express)

### 3.1) Inicializar e instalar dependências

Comandos executados:

```bash
mkdir -p backend
cd backend
npm init -y
npm i express dotenv zod
npm i -D nodemon prisma
npm i @prisma/client
```

### 3.2) Scripts

Scripts configurados em `backend/package.json`:

- `npm run dev`: sobe servidor com nodemon
- `npm run prisma:generate`: gera Prisma Client
- `npm run prisma:migrate`: roda migrations (dev)
- `npm run prisma:seed`: executa seeds

---

## 4) Prisma (schema + migrate + seed)

### 4.1) Configurar `.env`

Arquivo:

- `backend/.env`

Exemplo validado:

```env
DATABASE_URL="mysql://root@localhost:3307/projeto_1"
PORT=3001
API_TOKEN=""
```

### 4.2) Schema (models User e Product)

Arquivo:

- `backend/prisma/schema.prisma`

Models criados:

- `User`: `id`, `name`, `email (unique)`, `createdAt`, `updatedAt`
- `Product`: `id`, `name`, `description?`, `priceCents`, `createdAt`, `updatedAt`

### 4.3) Gerar client

```bash
cd backend
npm run prisma:generate
```

### 4.4) Migrate (criar tabelas)

```bash
cd backend
npx prisma migrate dev
```

Evidência esperada:

- Prisma conecta em `localhost:3307` no DB `projeto_1`
- migration aplicada/“Already in sync”

### 4.5) Seed (dados reais no MySQL)

Arquivo:

- `backend/prisma/seed.js`

Comando:

```bash
cd backend
npm run prisma:seed
```

Evidência esperada:

- log com contagem inserida (ex.: `usersInserted: 2`, `productsInserted: 2`)

---

## 5) Arquitetura (MSC + Service Layer + Repository)

Baseado em `backend/src`:

- `routes`: define endpoints e aponta para controllers
- `controller`: recebe req/res e chama services
- `service`: regras de negócio (ex.: email único, not found)
- `repository`: acesso ao banco (Prisma)
- `validation`: valida payload/params com Zod
- `middlewares`: interceptadores (ex.: tratamento de erro)
- `config`: variáveis e configuração (`env`)
- `database`: PrismaClient (`prisma`)
- `utils`: utilitários (ex.: `AppError`)

Fluxo típico:

`routes` → `controller` → `service` → `repository` → MySQL → resposta JSON

---

## 6) Subir servidor e testar endpoints

### 6.1) Rodar

```bash
cd backend
npm run dev
```

### 6.2) Healthcheck

```bash
curl -sS http://localhost:3001/api/health
```

### 6.3) Listar seeds

```bash
curl -sS http://localhost:3001/api/users
curl -sS http://localhost:3001/api/products
```

Observação: se `API_TOKEN` estiver preenchido, as rotas de `products` exigem `Authorization: Bearer <API_TOKEN>`.

### 6.4) CRUD (exemplos)

Criar usuário:

```bash
curl -sS -X POST http://localhost:3001/api/users \\
  -H 'Content-Type: application/json' \\
  -d '{\"name\":\"Carol\",\"email\":\"carol@example.com\"}'
```

Atualizar usuário:

```bash
curl -sS -X PUT http://localhost:3001/api/users/1 \\
  -H 'Content-Type: application/json' \\
  -d '{\"name\":\"Novo Nome\"}'
```

Criar produto:

```bash
curl -sS -X POST http://localhost:3001/api/products \\
  -H 'Content-Type: application/json' \\
  -d '{\"name\":\"Keyboard\",\"description\":\"Mechanical\",\"priceCents\":45000}'
```

---

## 7) Erros comuns (e soluções)

### Porta 3306 ocupada

Sintoma:

- MySQL do Homebrew falha com “Address already in use (48)” na porta `3306`.

Solução:

- parar o MySQL existente, OU
- configurar o MySQL do projeto para outra porta (ex.: `3307`) e atualizar o `DATABASE_URL`.

### Prisma não conecta no MySQL

Checklist:

- MySQL está rodando e aceitando conexão?
- `DATABASE_URL` aponta para host/porta/banco corretos?
- banco `projeto_1` existe?
