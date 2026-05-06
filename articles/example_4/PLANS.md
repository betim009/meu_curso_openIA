# Sistema de Login e Registro

Este ExecPlan é um documento vivo. Ele deve refletir o estado real do trabalho enquanto a implementação avança.

## Purpose / Big Picture

Criar um sistema web simples onde uma pessoa consiga:

- Criar uma conta com nome, email e senha
- Fazer login com email e senha
- Entrar em uma área interna protegida
- Ver os próprios dados cadastrados
- Sair do sistema

O sistema deve ter telas parecidas com as imagens da pasta `screens`, com painel visual azul à esquerda e formulário à direita em telas grandes, mantendo boa experiência em telas menores.

## Progress

- [x] Reescrever o ExecPlan com escopo técnico verificável antes de codar
- [x] Criar estrutura de monorepo com `backend`, `frontend`, `database` e arquivos Docker
- [x] Implementar schema MySQL idempotente para tabela `users` com email único
- [x] Configurar backend Express com CORS, JSON, variáveis de ambiente e health check
- [x] Implementar conexão MySQL com pool e espera de disponibilidade do banco
- [x] Implementar cadastro `POST /api/auth/register` com validação, hash bcrypt e resposta sem senha
- [x] Implementar login `POST /api/auth/login` com validação, bcrypt e JWT
- [x] Implementar middleware JWT e rota protegida `GET /api/me`
- [x] Implementar testes automatizados do backend cobrindo cadastro, login e rota protegida
- [x] Criar frontend Vite React com Bootstrap, Axios e React Router
- [x] Implementar cliente HTTP com token persistido em `localStorage`
- [x] Implementar tela de cadastro integrada ao backend e baseada em `screens/register.png`
- [x] Implementar tela de login integrada ao backend e baseada em `screens/login.png`
- [x] Implementar área protegida de perfil com dados do usuário e logout
- [x] Implementar proteção de rotas no frontend para bloquear acesso sem token
- [x] Criar Dockerfiles para backend e frontend
- [x] Criar `docker-compose.yml` com MySQL, backend e frontend funcionais
- [x] Criar README com execução local, Docker, endpoints e testes
- [x] Executar validação automatizada do backend fora do Docker
- [x] Executar build do frontend fora do Docker
- [x] Executar validação da API pelo Docker
- [x] Executar validação do frontend pelo Docker
- [x] Atualizar Outcomes & Retrospective com o resultado final
- [x] Corrigir erro de runtime do frontend `Can't find variable: React`
- [x] Adicionar configuração Vite com plugin React para runtime JSX automático
- [x] Garantir que o Dockerfile do frontend copie a configuração do Vite
- [x] Reexecutar build local do frontend após correção
- [x] Rebuildar frontend no Docker e validar entrega pelo navegador/HTTP

## Surprises & Discoveries

- O projeto iniciou quase vazio, contendo apenas o ExecPlan, o prompt e imagens de referência.
- As imagens de referência usam uma composição desktop com aproximadamente 60% da viewport em gradiente azul e 40% em formulário branco; em mobile será necessário adaptar para uma coluna para evitar overflow.
- `npm test` no backend passou com 4 testes cobrindo cadastro, duplicidade de email, login, rota protegida e bloqueio sem token.
- `npm run build` no frontend passou. O Vite exibiu aviso não bloqueante do `react-router` sobre diretivas `"use client"` ignoradas durante o bundle.
- A primeira execução de `docker compose up --build -d` construiu as imagens, mas falhou ao expor MySQL em `localhost:3306` porque a porta já estava ocupada. Ajustado Compose para expor MySQL em `localhost:3307`, mantendo a rede interna em `mysql:3306`.
- Após o ajuste de porta, o backend encontrou `Access denied for user 'app_user'` porque o volume MySQL já existia com permissões incompatíveis. Aplicada recuperação prevista com `docker compose down -v` para recriar o banco limpo.
- A validação Docker confirmou `GET /health`, cadastro, login, `GET /api/me` autenticado e entrega do HTML pelo frontend em `localhost:3000`.
- Encontrado item pendente posterior: `Can't find variable: React`, compatível com JSX compilado em modo clássico sem `React` disponível em módulos de componentes.
- Após adicionar `vite.config.js` com `@vitejs/plugin-react`, `npm run build` no frontend passou e os avisos anteriores sobre diretivas `"use client"` deixaram de aparecer.
- `docker compose up --build -d frontend` reconstruiu a imagem do frontend copiando `vite.config.js`; `curl http://localhost:3000` retornou o HTML com o novo bundle `index-BYK899VY.js`.
- Após o rebuild do frontend, o fluxo Docker de API foi revalidado com sucesso: health check, cadastro, login e `/api/me` autenticado.

## Decision Log

- Usar monorepo com `backend/`, `frontend/` e `database/` para manter responsabilidades separadas e facilitar Docker Compose.
- Usar Express com `mysql2/promise`, `bcryptjs` e `jsonwebtoken` para uma API simples, compatível com Node.js e fácil de validar.
- Usar JWT Bearer token no frontend via `localStorage`, suficiente para este exercício e simples de integrar com React Router.
- Usar MySQL 8 no Docker e inicialização por `database/init.sql`, permitindo recriar o ambiente de forma idempotente.
- Usar Vite + React + Bootstrap, com CSS próprio para reproduzir a referência visual sem depender de assets externos.
- Expor MySQL no host pela porta `3307` para evitar conflito com instalações locais comuns na porta `3306`.
- Corrigir o erro `Can't find variable: React` adicionando `vite.config.js` com `@vitejs/plugin-react`, em vez de espalhar imports manuais de `React` por todos os componentes.

## Outcomes & Retrospective

Implementação concluída. O sistema agora possui backend Express com cadastro, login, hash de senha, JWT e rota protegida; frontend React com telas de login/cadastro inspiradas nas referências, perfil protegido e logout; MySQL inicializado por SQL idempotente; Docker Compose com MySQL, backend e frontend; e README com instruções de uso.

Validações executadas com sucesso:

- `npm test` em `backend/`
- `npm run build` em `frontend/`
- `docker compose up --build -d`
- Validação HTTP da API no Docker para health check, cadastro, login e `/api/me`
- Validação HTTP do frontend no Docker em `http://localhost:3000`
- Correção posterior do runtime React: `vite.config.js` com `@vitejs/plugin-react`, novo `npm run build`, rebuild do container frontend e nova validação HTTP/API.

Principal ajuste durante a execução: usar `localhost:3307` para o MySQL no host e recriar o volume quando permissões antigas impediram o login de `app_user`.

## Context and Orientation

O projeto começa praticamente do zero.

Existe uma pasta chamada `screens` com imagens de referência:

- `screens/login.png`
- `screens/register.png`

Essas imagens devem servir como base visual para as telas. A implementação não precisa copiar pixel a pixel, mas deve preservar a estrutura visual: gradiente azul à esquerda, formulário limpo à direita, inputs arredondados com ícones e botão primário azul.

## Plan of Work

1. Preparar a base do repositório: criar pastas, manifests Node, arquivos de ambiente de exemplo, `.gitignore` e SQL de inicialização.
2. Construir o backend: servidor Express, pool MySQL, validação de entrada, cadastro, login, JWT, rota protegida e tratamento consistente de erros.
3. Cobrir o backend com testes automatizados focados nos fluxos essenciais de autenticação.
4. Construir o frontend: rotas públicas, rota protegida, contexto de autenticação, telas de login/cadastro, perfil e integração Axios.
5. Containerizar: Dockerfile do backend, Dockerfile do frontend com Nginx, Compose com MySQL e health checks.
6. Documentar: README com requisitos, comandos locais, comandos Docker, endpoints e credenciais/variáveis relevantes.
7. Validar: executar testes e builds locais, subir Docker Compose e confirmar API e frontend respondendo.

## Concrete Steps

1. Criar `backend/package.json`, `backend/src`, `backend/tests` e dependências necessárias.
2. Criar `database/init.sql` com `CREATE TABLE IF NOT EXISTS users`.
3. Implementar `backend/src/config.js`, `db.js`, `middleware/auth.js`, `routes/auth.js`, `routes/me.js` e `server.js`.
4. Escrever testes em `backend/tests/auth.test.js` usando `node:test` e mocks de repositório/DB quando apropriado para não depender de MySQL local.
5. Criar `frontend/package.json`, `frontend/src` e instalar React, Vite, Axios, React Router e Bootstrap.
6. Implementar `AuthContext`, `ProtectedRoute`, páginas `Login`, `Register`, `Profile` e estilos globais.
7. Criar `backend/Dockerfile`, `frontend/Dockerfile`, `frontend/nginx.conf` e `docker-compose.yml`.
8. Criar README com comandos `npm install`, `npm test`, `npm run build`, `docker compose up --build` e exemplos de `curl`.
9. Rodar validações e atualizar este ExecPlan conforme cada item for concluído.

## Validation and Acceptance

O trabalho só é aceito quando:

- `npm test` em `backend/` passa.
- `npm run build` em `frontend/` passa.
- `docker compose up --build -d` sobe MySQL, backend e frontend.
- `GET http://localhost:3001/health` retorna status saudável.
- `POST http://localhost:3001/api/auth/register` cria usuário e não retorna senha.
- `POST http://localhost:3001/api/auth/login` retorna token JWT.
- `GET http://localhost:3001/api/me` retorna dados do usuário quando recebe `Authorization: Bearer <token>`.
- `GET http://localhost:3000` entrega o frontend pelo container.
- A rota de perfil no frontend exige autenticação e o logout remove o token.
- Todos os itens do Progress estão marcados com `[x]`.

## Idempotence and Recovery

- O schema usa `CREATE TABLE IF NOT EXISTS`, então o banco pode ser reinicializado sem quebrar a criação da tabela.
- Os containers podem ser recriados com `docker compose down` e `docker compose up --build`.
- Para resetar dados locais do Docker, usar `docker compose down -v` antes de subir novamente.
- Se dependências Node ficarem inconsistentes, remover `node_modules` no pacote afetado e rodar `npm install` novamente.
- Se uma validação falhar, registrar a descoberta em Surprises & Discoveries, corrigir o menor componente relacionado e repetir a validação.

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
