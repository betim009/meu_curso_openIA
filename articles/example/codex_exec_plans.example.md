# Criar endpoint /health em uma API Node.js com Express

Este ExecPlan é um documento vivo. As seções Progress, Surprises & Discoveries, Decision Log e Outcomes & Retrospective devem ser atualizadas durante o trabalho.

## Purpose / Big Picture

O objetivo é criar um endpoint simples chamado /health para verificar se a API está funcionando.

Depois dessa mudança, qualquer pessoa poderá acessar:

    http://localhost:3000/health

E deverá receber:

    {
      "status": "OK"
    }

Isso serve para confirmar rapidamente que o servidor está ligado e respondendo corretamente.

## Progress

- [ ] Verificar se o projeto já possui Node.js e Express configurados.
- [ ] Criar ou ajustar o arquivo principal do servidor.
- [ ] Criar a rota GET /health.
- [ ] Rodar o servidor localmente.
- [ ] Testar o endpoint no navegador, Postman ou curl.
- [ ] Registrar o resultado final.

## Surprises & Discoveries

Ainda não houve descobertas inesperadas.

## Decision Log

- Decision: Usar a rota GET /health.
  Rationale: GET é o método mais simples para consultar informações sem alterar dados.
  Date/Author: 2026-04-29 / Codex

- Decision: Retornar JSON com status OK.
  Rationale: JSON é o formato mais comum em APIs REST.
  Date/Author: 2026-04-29 / Codex

## Outcomes & Retrospective

Ainda não concluído. Esta seção deve ser atualizada após a implementação e teste do endpoint.

## Context and Orientation

Este projeto é uma API simples em Node.js usando Express.

Node.js é o ambiente que permite executar JavaScript fora do navegador.

Express é uma biblioteca usada para criar servidores e rotas HTTP.

Uma rota HTTP é um endereço da API que responde a uma requisição. Neste caso, a rota será /health.

O arquivo principal esperado será:

    src/server.js

Se esse arquivo não existir, ele deve ser criado.

## Plan of Work

Primeiro, verificar se existe um arquivo package.json.

Depois, verificar se o Express está instalado.

Se não estiver instalado, instalar com:

    npm install express

Em seguida, criar ou editar o arquivo src/server.js.

Dentro dele, configurar o Express, criar a rota GET /health e iniciar o servidor na porta 3000.

## Concrete Steps

No terminal, dentro da raiz do projeto, rodar:

    npm install express

Criar a pasta src, caso ela não exista:

    mkdir -p src

Criar ou editar o arquivo:

    src/server.js

O conteúdo deve ser:

    const express = require("express");

    const app = express();
    const PORT = 3000;

    app.get("/health", (req, res) => {
      res.status(200).json({ status: "OK" });
    });

    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });

Depois, rodar:

    node src/server.js

A saída esperada no terminal é:

    Servidor rodando em http://localhost:3000

## Validation and Acceptance

Com o servidor rodando, acessar no navegador:

    http://localhost:3000/health

O resultado esperado é:

    {
      "status": "OK"
    }

Também é possível testar com curl:

    curl http://localhost:3000/health

A resposta esperada é:

    {"status":"OK"}

A implementação será considerada correta quando:

- O servidor iniciar sem erro.
- A rota /health responder com status HTTP 200.
- A resposta for um JSON contendo status OK.

## Idempotence and Recovery

Este plano é seguro para ser executado mais de uma vez.

Se a pasta src já existir, não é necessário recriá-la.

Se o arquivo src/server.js já existir, revisar antes de substituir para não apagar outras rotas importantes.

Se a porta 3000 já estiver em uso, alterar a constante PORT para outra porta, como 3001.

## Artifacts and Notes

Exemplo de resposta esperada:

    GET /health
    Status: 200
    Body:
    {
      "status": "OK"
    }

## Interfaces and Dependencies

Este plano usa:

- Node.js para executar JavaScript no backend.
- Express para criar o servidor HTTP.
- A rota GET /health para verificar se a API está funcionando.

Ao final, deve existir a seguinte interface HTTP:

    GET /health

Resposta esperada:

    Status HTTP: 200
    Body JSON: { "status": "OK" }