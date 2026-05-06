# Sistema de Login e Registro

Aplicação full stack com cadastro, login, rota protegida e perfil do usuário.

## Tecnologias

- Backend: Node.js, Express, MySQL, bcrypt, JWT
- Frontend: React, Vite, Axios, React Router, Bootstrap
- Infra: Docker Compose, MySQL 8, Nginx

## Rodar com Docker

```bash
docker compose up --build
```

Depois acesse:

- Frontend: http://localhost:3000
- Backend health check: http://localhost:3001/health
- MySQL, se precisar conectar pelo host: localhost:3307

Para reiniciar o banco do zero:

```bash
docker compose down -v
docker compose up --build
```

## Rodar localmente

Suba um MySQL compatível e crie um banco usando `database/init.sql`.

Backend:

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

Frontend:

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

## Testes e build

Backend:

```bash
cd backend
npm test
```

Frontend:

```bash
cd frontend
npm run build
```

## Endpoints

Criar conta:

```bash
curl -X POST http://localhost:3001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Ada Lovelace","email":"ada@example.com","password":"secret123"}'
```

Login:

```bash
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"ada@example.com","password":"secret123"}'
```

Perfil protegido:

```bash
curl http://localhost:3001/api/me \
  -H "Authorization: Bearer SEU_TOKEN"
```

## Fluxo esperado

1. Abra `http://localhost:3000/register` e crie uma conta.
2. Faça login em `http://localhost:3000/login`.
3. Acesse automaticamente `/profile`.
4. Confira nome e email carregados pela API protegida.
5. Clique em sair para remover o token e voltar ao login.
