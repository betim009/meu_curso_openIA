# Sistema de Login e Registro

Este ExecPlan é um documento vivo.

## Purpose / Big Picture

Quero criar um sistema web simples onde uma pessoa consiga:

- Criar uma conta
- Fazer login
- Entrar em uma área interna
- Ver os próprios dados cadastrados
- Sair do sistema

O sistema deve ter telas parecidas com as imagens da pasta `screens`.

## Progress

- [x] Definir estrutura `backend/` e `frontend/`
- [x] Backend: inicializar projeto Node/Express (TypeScript) com scripts e build
- [x] Banco: definir schema MySQL e criar script de inicialização (`docker-entrypoint-initdb.d`)
- [x] Backend: implementar conexão MySQL (pool) e healthcheck (`GET /api/health`)
- [x] Backend: model/repo de usuários (create/findByEmail/findById)
- [x] Backend: endpoint de cadastro (`POST /api/auth/register`) com validações e senha com hash
- [x] Backend: endpoint de login (`POST /api/auth/login`) com JWT
- [x] Backend: middleware de autenticação (Bearer token) e endpoint protegido (`GET /api/me`)
- [x] Frontend: inicializar React+Vite com Router, Axios, Bootstrap
- [x] Frontend: implementar AuthContext (token em localStorage) + interceptor do Axios
- [x] Frontend: tela `Login` baseada em `screens/login.png`
- [x] Frontend: tela `Register` baseada em `screens/register.png`
- [x] Frontend: tela protegida `Profile` (exibir dados do usuário) + botão de logout
- [x] Frontend: proteção de rotas (redirect para `/login` quando não autenticado)
- [x] Integração: configurar URLs e garantir frontend ↔ backend alinhados (VITE_API_BASE_URL + CORS)
- [x] Docker: criar `docker-compose.yml` (mysql + backend + frontend) e Dockerfiles
- [x] Documentação: criar `README.md` com setup, envs e comandos
- [x] Validação: rodar testes (backend) + build (frontend) + validação do compose (`docker compose config`)
- [x] Smoke test: subir stack com Docker e validar fluxo (register → login → /me)
- [x] Criar o banco de dados localmente (via service `mysql` do Docker Compose ou MySQL local usando `db/init/001_create_users.sql`)

## Surprises & Discoveries

- `create-vite` scaffold gerou CSS/HTML de landing page; foi removido e substituído pelas telas do login/registro.
- Inicialmente `docker compose up` falhou por indisponibilidade momentânea do Docker daemon; após o Docker Desktop responder, o smoke test pôde ser executado.
- A porta `3306` já estava em uso no host; o compose foi ajustado para não expor MySQL por padrão.

## Decision Log

- Backend em TypeScript para tipagem e manutenção.
- Autenticação via JWT (Bearer token) + bcrypt (hash da senha) para simplicidade e compatibilidade com SPA.
- Persistência do token no frontend via `localStorage` (fluxo didático; sem refresh token).
- Docker Compose com build de imagens (frontend servido por nginx, backend com Node runtime).

## Outcomes & Retrospective

Entregue:

- Backend com endpoints de cadastro/login e rota protegida (`/api/me`) usando JWT.
- Frontend com telas `Login` e `Register` baseadas em `screens/` e página `Profile` protegida.
- Docker Compose com MySQL + backend + frontend (nginx) pronto para executar em ambiente com Docker rodando.
- README com instruções de uso e validações.
- Smoke test via Docker executado (health + register/login + `/api/me`).

O que funcionou bem:

- Fluxo de autenticação simples e claro (JWT + localStorage) para o objetivo do lab.
- Separação limpa entre backend (API) e frontend (SPA) com integração via `VITE_API_BASE_URL`.

O que melhorar depois:

- Adicionar refresh token/rota de logout no backend (opcional) e endurecer CORS por ambiente.
- Adicionar migrations formais (ex.: Prisma/Knex) quando o projeto crescer.

## Context and Orientation

O projeto começa praticamente do zero.

Existe uma pasta chamada `screens` com imagens de referência:

- `screens/login.png`
- `screens/register.png`

Essas imagens devem servir como base visual para as telas.

O MySQL do Docker Compose **não** expõe porta no host por padrão (evita conflito com MySQL local). Se precisar acessar do host, publique uma porta alternativa (ex.: `3307:3306`).

## Plan of Work

Arquitetura alvo (monorepo simples):

- `backend/`: API REST em Node.js + Express + TypeScript
- `frontend/`: React + Vite + React Router + Axios + Bootstrap
- `docker-compose.yml`: orquestra MySQL, backend e frontend

Estratégia de autenticação:

- Cadastro salva senha com hash (bcrypt)
- Login retorna JWT (Bearer token) com `userId`
- Frontend guarda token em `localStorage` e anexa em `Authorization: Bearer <token>`
- Rotas protegidas exigem token válido (middleware no backend + ProtectedRoute no frontend)

Sequência de execução:

1. Scaffold do backend e contratos de API
2. Schema e bootstrap do banco no Docker
3. Implementação de cadastro/login/rota protegida no backend
4. Scaffold do frontend e telas alinhadas com `screens/`
5. Integração completa via Docker Compose
6. Documentação e validação (tests/build/smoke)

## Concrete Steps

Backend (TypeScript):

1. Criar `backend/package.json`, `tsconfig.json`, `src/server.ts`
2. Adicionar dependências: `express`, `cors`, `dotenv`, `mysql2`, `bcryptjs`, `jsonwebtoken`
3. Adicionar validação de input (sem framework pesado): checagens explícitas + mensagens claras
4. Criar `src/db/pool.ts` e `src/db/migrate` (apenas via init SQL no MySQL do Docker)
5. Criar `src/repositories/usersRepo.ts`
6. Criar rotas:
   - `GET /api/health`
   - `POST /api/auth/register`
   - `POST /api/auth/login`
   - `GET /api/me` (protegida)
7. Criar middleware `src/middleware/auth.ts` para Bearer token
8. Criar testes mínimos com `jest` + `supertest` (register/login/me)

Banco (MySQL):

1. Criar `db/init/001_create_users.sql` com tabela `users`
2. Garantir unique constraint em `email`

Frontend (React/Vite):

1. Criar `frontend/` com Vite + React + Router
2. Estruturar `src/api/client.ts` (Axios baseURL) + interceptor
3. Implementar `src/auth/AuthContext.tsx`
4. Implementar páginas `Login`, `Register`, `Profile`
5. Implementar `ProtectedRoute`
6. Estilizar telas com base em `screens/login.png` e `screens/register.png`

Docker:

1. Criar `docker-compose.yml` com:
   - `mysql` (com init SQL)
   - `backend` (node)
   - `frontend` (build + serve via nginx)
2. Criar `.env.example` e variáveis mínimas

Docs:

1. Criar `README.md` com comandos para dev local e Docker
2. Descrever endpoints e troubleshooting

## Validation and Acceptance

Critérios funcionais (aceitação):

- Cadastro funciona: usuário criado no MySQL, email único, senha nunca armazenada em texto puro
- Login funciona: retorna JWT e permite acessar `/api/me`
- Área protegida funciona:
  - Backend rejeita acesso a `/api/me` sem token válido (401)
  - Frontend redireciona para `/login` quando não autenticado
- Frontend integrado ao backend:
  - Login/Register chamam API e exibem erros vindos do backend
  - Profile carrega dados com `/api/me`
- Docker funciona:
  - `docker compose up --build` sobe tudo e permite fluxo completo no browser

Validações obrigatórias (dev):

- Backend: `npm test` (suite mínima de integração)
- Frontend: `npm run build`
- Smoke: com Docker rodando, executar:
  - `curl http://localhost:8080/api/health` (backend)
  - abrir `http://localhost:5173` (frontend) e completar fluxo register → login → profile → logout

## Idempotence and Recovery

Regras de idempotência (para re-execução segura):

- `docker compose down -v` zera dados do MySQL quando necessário (reset total)
- Scripts de init SQL criam tabela com `IF NOT EXISTS` quando aplicável
- Cadastro trata conflito de email (409) sem quebrar estado

Recuperação rápida:

- Se o backend não conecta no banco: checar envs (`DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`) e logs do container mysql
- Se o frontend não fala com o backend: checar `VITE_API_BASE_URL` e portas expostas no compose
- Se o token expirar/inválido: limpar `localStorage` e fazer login novamente

## Artifacts and Notes

Usar as imagens da pasta `screens` como referência.

## Interfaces and Dependencies

Quero usar:

- Node.js
- Express
- MySQL
- React com Vite
- Axios
- React Router
- Bootstrap
- Docker
