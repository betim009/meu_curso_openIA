# Sistema full stack de Registro e Login de Usuario

Este ExecPlan é um documento vivo. As seções Progress, Surprises & Discoveries, Decision Log e Outcomes & Retrospective devem ser atualizadas durante o trabalho.

## Purpose / Big Picture
Objetivo é construir um projeto full stack node de um sistema web que seja capaz de fazer registro e login. Apos login se capaz de ver as informacoes do registro.

## Progress
- [x] Criar estrutura backend
- [x] Criar Estrutura frontEnd
- [x] Criar docker necessario
- [x] Criar o banco de dados necessario
- [x] Criar uma API para o backend
- [x] Criar o React do frontEnd
- [x] Revisar Docker para Iniciar o projeto frontend e backend.
- [x] Criar o README.md para explicar como rodar o projeto detalhadamente.

## Surprises & Discoveries
- O repositorio nao possui codigo inicial alem do ExecPlan e do prompt.
- Evidencia: `rg --files` retornou apenas `prompt.example.txt` e `PLAINS.md`.
- Backend criado com inicializacao automatica da tabela `users`, evitando migrations manuais neste escopo.
- Frontend criado com Vite, React Router, Axios, Bootstrap e React Icons conforme dependencias do plano.
- Docker Compose criado com servicos `mysql`, `backend` e `frontend`, incluindo healthcheck do MySQL.
- Docker daemon indisponivel no ambiente atual, impedindo teste integrado com `docker compose up`.
- Cliente `mysql` local nao encontrado no PATH, impedindo teste integrado local fora do Docker.
- Em nova execucao, Docker daemon estava disponivel e o build dos containers foi executado.
- A porta local `3306` estava ocupada; o MySQL do Compose foi remapeado para `localhost:3307`, mantendo `3306` dentro da rede Docker.
- Backend, frontend e MySQL ficaram com status `healthy` via `docker compose ps`.

## Decision Log
- Decisao: implementar CRUD de usuarios protegido por JWT, com `GET /api/users`, `GET /api/users/:id`, `POST /api/users`, `PUT /api/users/:id` e `DELETE /api/users/:id`.
  Motivo: o plano pede CRUD + autenticacao e o dominio descrito e registro/login de usuario.
- Decisao: criar a tabela `users` com campos `id`, `name`, `email`, `password_hash`, `created_at` e `updated_at`.
  Motivo: atende registro, login e exibicao dos dados do cadastro sem expor senha.
- Decisao: usar `bcrypt@6`.
  Motivo: `bcrypt@5` instalou dependencia transiente vulneravel; `bcrypt@6` manteve a API usada e zerou o `npm audit`.
- Decisao: mapear MySQL para `3307:3306` no Docker Compose.
  Motivo: evitar conflito com MySQL local ja usando a porta `3306`, sem alterar a comunicacao interna entre backend e banco.
- Decisao: usar `npm ci` nos Dockerfiles.
  Motivo: builds de container devem respeitar os lockfiles gerados durante a validacao.

## Outcomes & Retrospective
Sistema full stack implementado e validado com backend Express, frontend React/Vite, MySQL via Docker Compose, endpoints de autenticacao e CRUD de usuarios. O README documenta execucao com Docker, execucao local, validacoes e exemplos com `curl`.

Validacoes executadas:
- `npm install` no backend e frontend.
- `node --check` nos arquivos principais do backend.
- `npm run build` no frontend.
- `npm audit --omit=dev` no backend e frontend, ambos sem vulnerabilidades.
- `docker compose config` valido.
- `docker compose up -d --build` executado com sucesso apos remapear MySQL para porta `3307`.
- `docker compose ps` confirmou `mysql`, `backend` e `frontend` saudaveis.
- Testes HTTP com `curl` confirmaram `GET /api/health`, `POST /api/auth/register`, `POST /api/auth/login`, `GET /api/auth/me`, `POST /api/users`, `GET /api/users`, `GET /api/users/:id`, `PUT /api/users/:id` e `DELETE /api/users/:id`.

Validacao integrada concluida neste ambiente via Docker.

## Context and Orientation
Não possui nada ainda criado.

## Plan of Work
Deve ser construido um sistema web. Separado por servicos de backend, frontend e infra(docker).

## Concrete Steps
1. Criar backend Express com MySQL, bcrypt, JWT, validacoes simples e rotas REST.
2. Criar frontend React com telas de login, registro e painel autenticado para visualizar e gerenciar usuarios.
3. Criar Docker Compose com servicos de MySQL, backend e frontend.
4. Documentar execucao local e via Docker.
5. Executar validacoes de build/lint basicas disponiveis.

## Validation and Acceptance
- Backend instalou dependencias e passou em verificacao de sintaxe com `node --check`.
- Frontend compilou com Vite.
- Docker Compose declarou todos os servicos necessarios e passou em `docker compose config`.
- Docker Compose iniciou os servicos e deixou todos saudaveis.
- Endpoints de autenticacao e CRUD foram validados com chamadas HTTP reais contra o MySQL do container.
- README explica variaveis, comandos locais e Docker.

## Idempotence and Recovery
Repetição e recuperação

## Artifacts and Notes
- Backend: `backend/src/server.js`, `backend/src/routes/authRoutes.js`, `backend/src/routes/userRoutes.js`, `backend/src/config/database.js`, `backend/src/middleware/auth.js`.
- Frontend: `frontend/src/App.jsx`, `frontend/src/components/AuthPage.jsx`, `frontend/src/components/Dashboard.jsx`, `frontend/src/services/api.js`.
- Infra: `docker-compose.yml`, `backend/Dockerfile`, `frontend/Dockerfile`, `frontend/vite.config.js`.
- Documentacao: `README.md`.

## Interfaces and Dependencies
- Node
- Express
- Cors
- MySQL
- MySQL 2
- JWToken
- ByCript
- React with Vite
- Axios
- React Routes
- Bootstrap
- React Icons
