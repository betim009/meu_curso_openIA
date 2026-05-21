# Sistema de Login e Registro (Node + MySQL + React)

Projeto full-stack com:

- Backend: Node.js + Express + TypeScript + MySQL + JWT
- Frontend: React + Vite + React Router + Axios + Bootstrap
- Docker Compose: MySQL + backend + frontend (nginx)

## Requisitos

- Node.js 20+ (para rodar localmente)
- Docker + Docker Compose (para rodar stack completa)

## Como rodar com Docker (recomendado)

1. Subir tudo:

```bash
docker compose up --build
```

2. Abrir:

- Frontend: `http://localhost:5173`
- Backend health: `http://localhost:8080/api/health`

3. Fluxo esperado:

- Acessar `/register` → cadastrar
- Ir para `/login` → logar
- Redireciona para `/profile` (área protegida)
- Logout volta para `/login`

Reset total do banco (apaga dados):

```bash
docker compose down -v
```

## Como rodar localmente (sem Docker)

Observação: você precisa de um MySQL rodando e um banco/tabela compatíveis com `db/init/001_create_users.sql`.

Backend:

```bash
cd backend
cp ../.env.example .env  # opcional
npm install
npm run dev
```

Frontend:

```bash
cd frontend
npm install
npm run dev
```

## Variáveis de ambiente (backend)

- `PORT` (default `8080`)
- `DB_HOST` / `DB_PORT` / `DB_USER` / `DB_PASSWORD` / `DB_NAME`
- `JWT_SECRET` (obrigatório em produção)
- `JWT_EXPIRES_IN` (default `1h`)
- `CORS_ORIGIN` (default `*`)

## Endpoints

- `GET /api/health` → `{ ok: true }`
- `POST /api/auth/register` → `{ user }`
- `POST /api/auth/login` → `{ token, user }`
- `GET /api/me` (Bearer token) → `{ user }`

## Validações executadas

```bash
cd backend && npm test
cd frontend && npm run build
docker compose config
```

## Troubleshooting

- `Docker daemon not running`: inicie o Docker Desktop e rode novamente `docker compose up --build`.
- `401 unauthorized` em `/api/me`: token ausente/expirado → faça logout/login (ou limpe o `localStorage`).

