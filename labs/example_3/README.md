# Sistema Full Stack de Usuarios

Aplicacao full stack com registro, login JWT e CRUD de usuarios.

## Stack

- Backend: Node.js, Express, CORS, MySQL2, JWT e bcrypt
- Frontend: React com Vite, Axios, React Router, Bootstrap e React Icons
- Infra: Docker Compose com MySQL, backend e frontend

## Endpoints

Base URL local: `http://localhost:3001/api`

- `GET /health`: verifica se a API esta online
- `POST /auth/register`: cria conta e retorna token
- `POST /auth/login`: autentica usuario e retorna token
- `GET /auth/me`: retorna o usuario autenticado
- `GET /users`: lista usuarios
- `GET /users/:id`: busca usuario por id
- `POST /users`: cria usuario
- `PUT /users/:id`: atualiza usuario
- `DELETE /users/:id`: remove usuario

As rotas `/auth/me` e `/users` exigem header `Authorization: Bearer <token>`.

## Rodar com Docker

Na raiz do projeto:

```bash
docker compose up --build
```

Acesse:

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3001/api/health`
- MySQL: `localhost:3307`

O Docker cria automaticamente o banco `user_auth_crud`. A API cria a tabela `users` ao iniciar.

Para rodar em segundo plano:

```bash
docker compose up -d --build
docker compose ps
```

Para parar e manter os dados do MySQL:

```bash
docker compose down
```

Para parar e apagar o volume do banco:

```bash
docker compose down -v
```

## Rodar localmente sem Docker

Crie o banco no MySQL:

```sql
CREATE DATABASE IF NOT EXISTS user_auth_crud
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;
```

Configure o backend:

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

Configure o frontend em outro terminal:

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Validacoes

Backend:

```bash
cd backend
npm install
node --check src/server.js
node --check src/routes/authRoutes.js
node --check src/routes/userRoutes.js
npm audit --omit=dev
```

Frontend:

```bash
cd frontend
npm install
npm run build
npm audit --omit=dev
```

Docker Compose:

```bash
docker compose config
docker compose up -d --build
```

## Exemplo de payloads

Registro:

```json
{
  "name": "Maria Silva",
  "email": "maria@example.com",
  "password": "123456"
}
```

Login:

```json
{
  "email": "maria@example.com",
  "password": "123456"
}
```

Criar usuario autenticado:

```json
{
  "name": "Joao Souza",
  "email": "joao@example.com",
  "password": "123456"
}
```

## Exemplos com curl

Registrar e obter token:

```bash
curl -X POST http://localhost:3001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Maria Silva","email":"maria@example.com","password":"123456"}'
```

Login:

```bash
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"maria@example.com","password":"123456"}'
```

Listar usuarios:

```bash
curl http://localhost:3001/api/users \
  -H "Authorization: Bearer SEU_TOKEN"
```

Atualizar usuario:

```bash
curl -X PUT http://localhost:3001/api/users/1 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer SEU_TOKEN" \
  -d '{"name":"Maria Souza","email":"maria.souza@example.com"}'
```

Excluir usuario:

```bash
curl -X DELETE http://localhost:3001/api/users/1 \
  -H "Authorization: Bearer SEU_TOKEN"
```
