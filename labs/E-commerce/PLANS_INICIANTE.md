# Ecommerce Beginner - PLANS.md

# Sistema E-commerce para Iniciantes

Este ExecPlan é um documento vivo.

## Purpose / Big Picture

Criar um pequeno sistema de e-commerce simples para aprender desenvolvimento web.

Objetivo final:
- Página inicial
- Listagem de produtos
- Carrinho de compras
- Página de checkout simples
- Cadastro de produtos mockados
- Projeto funcionando localmente

Resultado esperado:
Uma pessoa sem experiência conseguir entender:
- HTML
- CSS
- JavaScript
- Organização básica de projeto
- Lógica de frontend

---

## Progress

- [ ] Criar estrutura de pastas
- [ ] Criar página inicial
- [ ] Criar listagem de produtos
- [ ] Criar botão adicionar ao carrinho
- [ ] Criar tela de carrinho
- [ ] Criar cálculo de total
- [ ] Criar página checkout
- [ ] Melhorar layout
- [ ] Publicar projeto

---

## Surprises & Discoveries

- JavaScript manipula HTML em tempo real
- Carrinho precisa salvar estado
- Eventos de click são fundamentais
- Arrays ajudam muito no ecommerce

---

## Decision Log

- Decisão: usar HTML/CSS/JS puro
Motivo: facilitar aprendizado

- Decisão: não usar backend
Motivo: reduzir complexidade

- Decisão: usar produtos mockados
Motivo: evitar banco de dados

---

## Outcomes & Retrospective

Ao final do projeto o aluno deverá:
- Criar páginas web
- Organizar arquivos
- Manipular DOM
- Trabalhar com arrays
- Criar lógica simples de ecommerce

---

## Context and Orientation

Estrutura inicial:

frontend/
- index.html
- carrinho.html
- checkout.html
- style.css
- script.js

Produtos:
- Simulados via array JavaScript

Carrinho:
- Salvo em memória ou localStorage

---

## Plan of Work

### Fase 1
Criar estrutura HTML

### Fase 2
Adicionar CSS

### Fase 3
Criar produtos mockados

### Fase 4
Adicionar carrinho

### Fase 5
Criar checkout

### Fase 6
Publicar projeto

---

## Concrete Steps

### Criar projeto

```bash
mkdir ecommerce
cd ecommerce
```

### Criar arquivos

```bash
touch index.html
touch style.css
touch script.js
```

### Rodar projeto

Abrir index.html no navegador

---

## Validation and Acceptance

Checklist:
- Produtos aparecem
- Carrinho adiciona itens
- Total é calculado
- Layout funciona
- Navegação funciona

---

## Idempotence and Recovery

Caso algo quebre:
- Recriar arquivos
- Restaurar arrays
- Revisar eventos
- Revisar imports

---

## Artifacts and Notes

Exemplo produto:

```js
const produtos = [
  {
    id: 1,
    nome: "Notebook",
    preco: 3500
  }
]
```

---

## Interfaces and Dependencies

Tecnologias:
- HTML
- CSS
- JavaScript

Sem dependências externas.
