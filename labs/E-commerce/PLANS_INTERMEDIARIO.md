# Ecommerce Intermediate - PLANS.md

# Sistema E-commerce Intermediário

Este ExecPlan é um documento vivo.

## Purpose / Big Picture

Criar um sistema e-commerce fullstack intermediário.

Objetivo:
- Frontend React
- Backend Node.js
- API REST
- Banco MySQL
- CRUD de produtos
- Carrinho persistente
- Login simples

Resultado:
Um projeto mais próximo do mercado.

---

## Progress

- [ ] Criar frontend React
- [ ] Configurar backend Express
- [ ] Configurar MySQL
- [ ] Criar tabela produtos
- [ ] Criar CRUD produtos
- [ ] Criar autenticação
- [ ] Criar carrinho persistente
- [ ] Criar pedidos
- [ ] Publicar frontend
- [ ] Publicar backend

---

## Surprises & Discoveries

- Estado global facilita carrinho
- APIs precisam validação
- Banco exige modelagem
- Backend e frontend precisam integração

---

## Decision Log

- Decisão: usar React
Motivo: mercado utiliza bastante

- Decisão: usar Express
Motivo: simplicidade

- Decisão: usar MySQL
Motivo: banco relacional popular

- Decisão: usar JWT
Motivo: autenticação simples

---

## Outcomes & Retrospective

O aluno deverá aprender:
- React
- Node.js
- Express
- MySQL
- APIs REST
- CRUD
- Autenticação
- Integração frontend/backend

---

## Context and Orientation

Estrutura:

frontend/
backend/

Frontend:
- React + Vite

Backend:
- Express
- Controllers
- Services
- Routes

Banco:
- MySQL

---

## Plan of Work

### Backend
- Criar API
- Criar conexão MySQL
- Criar CRUD

### Frontend
- Criar páginas
- Criar contexto carrinho
- Consumir API

### Deploy
- Railway
- Netlify

---

## Concrete Steps

### Frontend

```bash
npm create vite@latest frontend
```

### Backend

```bash
mkdir backend
npm init -y
npm install express cors mysql2 dotenv
```

### Rodar backend

```bash
npm run dev
```

---

## Validation and Acceptance

Checklist:
- API responde
- Produtos salvam no banco
- Login funciona
- Carrinho funciona
- Pedido é salvo
- Frontend consome API

---

## Idempotence and Recovery

Se quebrar:
- Restaurar migrations
- Verificar variáveis ambiente
- Validar conexão banco
- Revisar rotas

---

## Artifacts and Notes

Endpoints:

```txt
GET /products
POST /products
POST /auth/login
POST /orders
```

---

## Interfaces and Dependencies

Frontend:
- React
- Axios

Backend:
- Express
- JWT
- bcrypt
- mysql2

Banco:
- MySQL
