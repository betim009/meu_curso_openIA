# Criar CRUD de usuários com login em Node.js, Express e MySQL

Este ExecPlan é um documento vivo. As seções Progress, Surprises & Discoveries, Decision Log e Outcomes & Retrospective devem ser atualizadas durante o trabalho.

## Purpose / Big Picture

O objetivo é criar uma API backend simples para gerenciar usuários.

Depois dessa implementação, será possível:

Cadastrar um usuário, fazer login, listar usuários, buscar um usuário específico, editar dados de um usuário e excluir um usuário.

Esse plano segue a estrutura recomendada pelo documento de ExecPlans, que orienta criar planos completos, autoexplicativos e testáveis antes da implementação. :contentReference[oaicite:0]{index=0}

## Progress

- [ ] Verificar a estrutura atual do projeto.
- [ ] Criar configuração inicial do servidor Express.
- [ ] Criar conexão com MySQL.
- [ ] Criar tabela users.
- [ ] Criar rota de cadastro de usuário.
- [ ] Criar rota de login.
- [ ] Criar rota para listar usuários.
- [ ] Criar rota para buscar usuário por ID.
- [ ] Criar rota para editar usuário.
- [ ] Criar rota para excluir usuário.
- [ ] Testar todos os endpoints.
- [ ] Atualizar Outcomes & Retrospective.

## Surprises & Discoveries

Ainda não houve descobertas inesperadas.

## Decision Log

- Decision: Usar Node.js com Express.
  Rationale: Express é simples e adequado para criar APIs REST.
  Date/Author: 2026-04-29 / Codex

- Decision: Usar MySQL como banco de dados.
  Rationale: MySQL é comum em sistemas CRUD e fácil de validar com tabelas.
  Date/Author: 2026-04-29 / Codex

- Decision: Usar bcrypt para criptografar senhas.
  Rationale: A senha não deve ser salva em texto puro no banco.
  Date/Author: 2026-04-29 / Codex

- Decision: Usar JWT no login.
  Rationale: JWT permite retornar um token simples para autenticação.
  Date/Author: 2026-04-29 / Codex

## Outcomes & Retrospective

Ainda não concluído.

Ao final, registrar aqui:

O que foi implementado, quais endpoints funcionaram, quais testes foram feitos e se ficou algo pendente.

## Context and Orientation

Este projeto será uma API REST.

API REST é um backend que recebe requisições HTTP e responde com dados, geralmente em JSON.

JSON é um formato de texto usado para trocar dados entre frontend e backend.

O recurso principal será users, que significa usuários.

A tabela users terá os seguintes campos:

id: identificador único do usuário.

name: nome do usuário.

email: e-mail do usuário.

password: senha criptografada.

created_at: data de criação.

updated_at: data de atualização.

A estrutura esperada do projeto será:

    src/
      database/
        connection.js
        migrations.sql
      controllers/
        userController.js
        authController.js
      routes/
        userRoutes.js
        authRoutes.js
      app.js
      server.js
    package.json

## Plan of Work

Primeiro, criar o servidor Express.

Depois, configurar o MySQL.

Em seguida, criar a tabela users.

Depois, criar as rotas de autenticação:

POST /auth/register para cadastrar usuário.

POST /auth/login para fazer login.

Depois, criar as rotas de usuários:

GET /users para listar usuários.

GET /users/:id para buscar um usuário.

PUT /users/:id para editar um usuário.

DELETE /users/:id para excluir um usuário.

Cada rota deve retornar uma resposta JSON clara.

## Concrete Steps

Na raiz do projeto, instalar as dependências:

    npm init -y
    npm install express mysql2 cors bcrypt jsonwebtoken dotenv

Criar o arquivo:

    src/database/connection.js

Conteúdo esperado:

    const mysql = require("mysql2/promise");

    const pool = mysql.createPool({
      host: "localhost",
      user: "root",
      password: "",
      database: "crud_usuarios",
    });

    module.exports = pool;

Criar o arquivo:

    src/database/migrations.sql

Conteúdo esperado:

    CREATE DATABASE IF NOT EXISTS crud_usuarios;

    USE crud_usuarios;

    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(150) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

Criar o arquivo:

    src/app.js

Conteúdo esperado:

    const express = require("express");
    const cors = require("cors");

    const authRoutes = require("./routes/authRoutes");
    const userRoutes = require("./routes/userRoutes");

    const app = express();

    app.use(cors());
    app.use(express.json());

    app.get("/health", (req, res) => {
      res.status(200).json({ status: "OK" });
    });

    app.use("/auth", authRoutes);
    app.use("/users", userRoutes);

    module.exports = app;

Criar o arquivo:

    src/server.js

Conteúdo esperado:

    const app = require("./app");

    const PORT = 3000;

    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });

Criar o arquivo:

    src/controllers/authController.js

Conteúdo esperado:

    const bcrypt = require("bcrypt");
    const jwt = require("jsonwebtoken");
    const pool = require("../database/connection");

    async function register(req, res) {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        return res.status(400).json({ message: "Nome, email e senha são obrigatórios." });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      await pool.query(
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
        [name, email, hashedPassword]
      );

      return res.status(201).json({ message: "Usuário cadastrado com sucesso." });
    }

    async function login(req, res) {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ message: "Email e senha são obrigatórios." });
      }

      const [users] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);

      if (users.length === 0) {
        return res.status(401).json({ message: "Credenciais inválidas." });
      }

      const user = users[0];

      const passwordIsValid = await bcrypt.compare(password, user.password);

      if (!passwordIsValid) {
        return res.status(401).json({ message: "Credenciais inválidas." });
      }

      const token = jwt.sign(
        { id: user.id, email: user.email },
        "secret_key",
        { expiresIn: "1h" }
      );

      return res.status(200).json({
        message: "Login realizado com sucesso.",
        token,
      });
    }

    module.exports = {
      register,
      login,
    };

Criar o arquivo:

    src/controllers/userController.js

Conteúdo esperado:

    const pool = require("../database/connection");

    async function listUsers(req, res) {
      const [users] = await pool.query(
        "SELECT id, name, email, created_at, updated_at FROM users"
      );

      return res.status(200).json(users);
    }

    async function getUserById(req, res) {
      const { id } = req.params;

      const [users] = await pool.query(
        "SELECT id, name, email, created_at, updated_at FROM users WHERE id = ?",
        [id]
      );

      if (users.length === 0) {
        return res.status(404).json({ message: "Usuário não encontrado." });
      }

      return res.status(200).json(users[0]);
    }

    async function updateUser(req, res) {
      const { id } = req.params;
      const { name, email } = req.body;

      if (!name || !email) {
        return res.status(400).json({ message: "Nome e email são obrigatórios." });
      }

      const [result] = await pool.query(
        "UPDATE users SET name = ?, email = ? WHERE id = ?",
        [name, email, id]
      );

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Usuário não encontrado." });
      }

      return res.status(200).json({ message: "Usuário atualizado com sucesso." });
    }

    async function deleteUser(req, res) {
      const { id } = req.params;

      const [result] = await pool.query(
        "DELETE FROM users WHERE id = ?",
        [id]
      );

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Usuário não encontrado." });
      }

      return res.status(200).json({ message: "Usuário excluído com sucesso." });
    }

    module.exports = {
      listUsers,
      getUserById,
      updateUser,
      deleteUser,
    };

Criar o arquivo:

    src/routes/authRoutes.js

Conteúdo esperado:

    const express = require("express");
    const authController = require("../controllers/authController");

    const router = express.Router();

    router.post("/register", authController.register);
    router.post("/login", authController.login);

    module.exports = router;

Criar o arquivo:

    src/routes/userRoutes.js

Conteúdo esperado:

    const express = require("express");
    const userController = require("../controllers/userController");

    const router = express.Router();

    router.get("/", userController.listUsers);
    router.get("/:id", userController.getUserById);
    router.put("/:id", userController.updateUser);
    router.delete("/:id", userController.deleteUser);

    module.exports = router;

Rodar o servidor:

    node src/server.js

Saída esperada:

    Servidor rodando em http://localhost:3000

## Validation and Acceptance

Testar primeiro o endpoint de saúde:

    GET http://localhost:3000/health

Resposta esperada:

    {
      "status": "OK"
    }

Cadastrar usuário:

    POST http://localhost:3000/auth/register

Body JSON:

    {
      "name": "Alberto",
      "email": "alberto@email.com",
      "password": "123456"
    }

Resposta esperada:

    {
      "message": "Usuário cadastrado com sucesso."
    }

Fazer login:

    POST http://localhost:3000/auth/login

Body JSON:

    {
      "email": "alberto@email.com",
      "password": "123456"
    }

Resposta esperada:

    {
      "message": "Login realizado com sucesso.",
      "token": "..."
    }

Listar usuários:

    GET http://localhost:3000/users

Resposta esperada:

    [
      {
        "id": 1,
        "name": "Alberto",
        "email": "alberto@email.com",
        "created_at": "...",
        "updated_at": "..."
      }
    ]

Buscar usuário por ID:

    GET http://localhost:3000/users/1

Resposta esperada:

    {
      "id": 1,
      "name": "Alberto",
      "email": "alberto@email.com",
      "created_at": "...",
      "updated_at": "..."
    }

Editar usuário:

    PUT http://localhost:3000/users/1

Body JSON:

    {
      "name": "Alberto Atualizado",
      "email": "alberto2@email.com"
    }

Resposta esperada:

    {
      "message": "Usuário atualizado com sucesso."
    }

Excluir usuário:

    DELETE http://localhost:3000/users/1

Resposta esperada:

    {
      "message": "Usuário excluído com sucesso."
    }

A implementação será considerada correta quando todos os endpoints responderem corretamente e nenhum endpoint retornar a senha do usuário.

## Idempotence and Recovery

Este plano pode ser executado com segurança em um projeto novo.

Se a tabela users já existir, o comando CREATE TABLE IF NOT EXISTS não irá recriá-la.

Se o usuário já estiver cadastrado com o mesmo email, o banco retornará erro porque o campo email é único.

Se a porta 3000 estiver em uso, alterar a porta em src/server.js.

Se ocorrer erro de conexão com o banco, revisar usuário, senha e nome do banco em src/database/connection.js.

## Artifacts and Notes

Endpoints finais esperados:

    GET /health
    POST /auth/register
    POST /auth/login
    GET /users
    GET /users/:id
    PUT /users/:id
    DELETE /users/:id

Exemplo de retorno correto do /health:

    Status: 200
    Body:
    {
      "status": "OK"
    }

Exemplo de erro para usuário não encontrado:

    Status: 404
    Body:
    {
      "message": "Usuário não encontrado."
    }

## Interfaces and Dependencies

Este projeto usa:

Node.js para executar JavaScript no backend.

Express para criar o servidor e as rotas HTTP.

MySQL para armazenar os usuários.

mysql2 para conectar Node.js ao MySQL.

bcrypt para criptografar senhas.

jsonwebtoken para gerar token de login.

cors para permitir requisições vindas de outros domínios, como um frontend separado.

dotenv foi instalado para futura organização de variáveis de ambiente, mas neste exemplo inicial a configuração ainda está direta no código.

As principais interfaces HTTP ao final serão:

    POST /auth/register

Cria um usuário.

    POST /auth/login

Autentica um usuário e retorna token.

    GET /users

Lista usuários.

    GET /users/:id

Busca um usuário específico.

    PUT /users/:id

Edita um usuário.

    DELETE /users/:id

Remove um usuário.