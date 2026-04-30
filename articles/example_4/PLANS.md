# Sistema full stack de Login, Registro e CRUD

Este ExecPlan é um documento vivo. As seções Progress, Surprises & Discoveries, Decision Log e Outcomes & Retrospective devem ser atualizadas durante o trabalho.

## Purpose / Big Picture

Criar um sistema web full stack onde uma pessoa consiga:

- Criar uma conta
- Fazer login
- Entrar em uma área interna
- Ver os próprios dados cadastrados
- Sair do sistema
- Gerenciar usuários por CRUD em uma área protegida

O sistema deve ter telas de login e registro parecidas com as imagens da pasta `screens`, além de uma tela interna funcional para listar, criar, editar e excluir usuários.

## Progress

- [x] Criar estrutura `backend/`, `frontend/`, Docker e arquivos de configuração;
- [x] Implementar backend Express com middleware JSON, CORS, health check e tratamento de erros;
- [x] Implementar conexão MySQL com `mysql2` e criação automática da tabela `users`;
- [x] Implementar autenticação: `POST /api/auth/register`, `POST /api/auth/login`, `GET /api/auth/me`;
- [x] Implementar JWT com middleware de rota protegida;
- [x] Implementar CRUD protegido de usuários: `GET /api/users`, `GET /api/users/:id`, `POST /api/users`, `PUT /api/users/:id`, `DELETE /api/users/:id`;
- [x] Implementar frontend React/Vite com rotas `/login`, `/register` e `/dashboard`;
- [x] Integrar frontend ao backend com Axios e token JWT persistido em `localStorage`;
- [x] Implementar dashboard protegido com listagem, criação, edição e exclusão de usuários;
- [x] Revisar UI de login com base em `screens/login.png`;
- [x] Revisar UI de registro com base em `screens/register.png`;
- [x] Ajustar UX responsiva e estados de erro/carregamento;
- [x] Criar Dockerfile do backend, Dockerfile do frontend e `docker-compose.yml` com MySQL;
- [x] Garantir Docker funcionando com backend, frontend e MySQL saudáveis;
- [x] Criar README com instalação, endpoints, comandos Docker e reset de dados;
- [x] Executar validações locais: backend check, frontend build e `docker compose config`;
- [x] Executar validações HTTP: cadastro, login, área protegida, CRUD completo e frontend servido;
- [x] Atualizar Outcomes & Retrospective com resultado final;

## Surprises & Discoveries

- O repositório atual contém apenas `PLANS.md`, `PLANS_protected.md`, `prompt.example.txt` e as imagens em `screens/`; a aplicação precisa ser criada do zero nesta execução.
- `npm install` foi executado em backend e frontend, gerando lockfiles e sem vulnerabilidades reportadas.
- A stack Docker já tinha um container MySQL antigo em execução, mas as credenciais atuais funcionaram e não foi necessário resetar o volume nesta rodada.

## Decision Log

- Usar Express com módulos ES (`type: module`) para manter o backend simples.
- Usar `bcryptjs` para hash de senha, evitando dependências nativas no Docker.
- Usar JWT em header `Authorization: Bearer <token>` para proteger `/api/auth/me` e todo `/api/users`.
- Criar a tabela `users` automaticamente na inicialização do backend para facilitar primeira execução e reset.
- Publicar MySQL externamente em `localhost:3307` para reduzir conflito com instalações locais que usam `3306`; os containers continuam usando `3306` internamente.
- Usar Vite em modo dev no container frontend para servir a aplicação em `localhost:5173`.

## Outcomes & Retrospective

- ExecPlan transformado em documento vivo completo, com Progress técnico, decisões, plano de trabalho, passos concretos, validação e recuperação.
- Backend Express criado com health check, CORS, tratamento de erros, conexão MySQL, criação automática de tabela, autenticação JWT e CRUD completo protegido.
- Endpoints implementados e validados: `POST /api/auth/register`, `POST /api/auth/login`, `GET /api/auth/me`, `GET /api/users`, `GET /api/users/:id`, `POST /api/users`, `PUT /api/users/:id`, `DELETE /api/users/:id`.
- Frontend React/Vite criado com login, registro e dashboard protegido integrado ao backend via Axios e token em `localStorage`.
- Telas de login e registro revisadas com base em `screens/login.png` e `screens/register.png`.
- Docker Compose criado e validado com MySQL, backend e frontend ativos.
- README criado com instruções de execução, comandos Docker, reset de dados e exemplos de endpoints.
- Validações executadas com sucesso: `npm run check` no backend, `npm run build` no frontend, `docker compose config`, `docker compose up --build -d` e testes HTTP de autenticação/CRUD/frontend.

## Context and Orientation

O projeto começa praticamente do zero.

Existe uma pasta chamada `screens` com imagens de referência:

- `screens/login.png`
- `screens/register.png`

Essas imagens devem servir como base visual para as telas.

## Plan of Work

O trabalho será executado em quatro camadas:

1. Backend: criar API Express, conexão MySQL, modelo de usuário, autenticação JWT e CRUD protegido.
2. Frontend: criar SPA React com rotas públicas de login/registro e rota protegida de dashboard.
3. Infraestrutura: criar Dockerfiles, Compose com MySQL persistente e comandos de operação/reset.
4. Validação: rodar checks locais, subir Docker, testar endpoints por HTTP e confirmar frontend servido.

## Concrete Steps

1. Criar `backend/package.json`, `backend/src/db.js`, `backend/src/server.js`, rotas e middleware.
2. Definir schema `users` com `id`, `name`, `email`, `password_hash`, `created_at`, `updated_at`.
3. Criar rotas de auth com validação mínima de nome, email e senha.
4. Criar rotas de CRUD retornando apenas dados públicos do usuário, nunca `password_hash`.
5. Criar `frontend/package.json`, `index.html`, `src/main.jsx`, `src/api.js`, `src/App.jsx`, `src/styles.css`.
6. Implementar telas de login/registro conforme referências visuais: divisão azul/branco, campos arredondados, ícones e botão principal.
7. Implementar dashboard com formulário de usuário, tabela e ações de editar/excluir.
8. Criar `.gitignore`, `backend/.env.example`, `backend/Dockerfile`, `frontend/Dockerfile` e `docker-compose.yml`.
9. Criar `README.md` com instruções de Docker, execução local e exemplos de endpoints.
10. Instalar dependências, gerar lockfiles, compilar frontend, checar backend, subir Docker e testar endpoints.

## Validation and Acceptance

Aceitação exige:

- `cd backend && npm run check` sem erro.
- `cd frontend && npm run build` sem erro.
- `docker compose config` válido.
- `docker compose up --build -d` com MySQL saudável, backend e frontend ativos.
- `GET /health` retornando `status: ok`.
- `POST /api/auth/register` criando usuário e retornando token.
- `POST /api/auth/login` autenticando e retornando token.
- `GET /api/auth/me` funcionando somente com token.
- CRUD completo em `/api/users` funcionando com token.
- `http://localhost:5173` retornando status `200`.
- Frontend servido contendo marcadores das telas de referência de login/registro.

## Idempotence and Recovery

- Todos os arquivos serão criados de forma determinística e podem ser recriados com o mesmo conteúdo.
- A API cria a tabela `users` automaticamente se ela não existir.
- Se credenciais antigas do MySQL ficarem presas no volume, executar `docker compose down -v` e depois `docker compose up --build -d`.
- Se a porta `3307` estiver ocupada, alterar apenas a porta externa do serviço MySQL; backend e MySQL continuam comunicando por `mysql:3306`.
- Se o frontend estiver servindo cache antigo, reconstruir com `docker compose up --build -d frontend`.

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
