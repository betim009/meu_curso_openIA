# PLANS.md — API RESTful em ASP.NET Core com C#

Este ExecPlan é um documento vivo.

Ele deve ser usado para desenvolver uma API RESTful simples em ASP.NET Core com C# e, ao mesmo tempo, criar uma documentação didática ensinando outro desenvolvedor a construir essa mesma API do zero.

---

## Purpose / Big Picture

O objetivo deste projeto é construir uma API RESTful simples usando ASP.NET Core com C#.

A API será de cadastro de produtos e terá operações básicas de CRUD:

- listar produtos;
- buscar produto por id;
- criar produto;
- atualizar produto;
- excluir produto.

O principal resultado esperado não é apenas a API funcionando.

O principal resultado esperado é ter:

1. Uma API simples funcionando.
2. Um `README.md` explicando como rodar o projeto.
3. Um arquivo `docs/passo-a-passo.md` explicando, passo a passo, como outro desenvolvedor consegue criar essa mesma API.

A documentação precisa explicar:

- quais comandos foram usados;
- por que cada comando foi usado;
- quais pastas foram criadas;
- quais arquivos foram criados;
- qual é a responsabilidade de cada arquivo;
- o que cada parte importante do código faz;
- como testar a API.

---

## Progress

- [ ] Criar projeto ASP.NET Core Web API.
- [ ] Remover arquivos de exemplo do template inicial, se existirem.
- [ ] Criar a pasta `Models`.
- [ ] Criar a model `Produto`.
- [ ] Criar a pasta `DTOs`.
- [ ] Criar o DTO `CriarProdutoDto`.
- [ ] Criar o DTO `AtualizarProdutoDto`.
- [ ] Criar a pasta `Services`.
- [ ] Criar a interface `IProdutoService`.
- [ ] Criar a classe `ProdutoService`.
- [ ] Registrar o service no `Program.cs`.
- [ ] Criar a pasta `Controllers`, se necessário.
- [ ] Criar o controller `ProdutosController`.
- [ ] Testar a API pelo Swagger.
- [ ] Criar o `README.md`.
- [ ] Criar a pasta `docs`.
- [ ] Criar o arquivo `docs/passo-a-passo.md`.
- [ ] Documentar todos os comandos usados.
- [ ] Documentar todos os arquivos criados.
- [ ] Documentar o papel de Models, DTOs, Services e Controllers.
- [ ] Documentar os testes da API.
- [ ] Criar seção de erros comuns.
- [ ] Validar se outro desenvolvedor consegue seguir a documentação.

---

## Surprises & Discoveries

Esta seção deve ser preenchida durante o desenvolvimento.

Use este espaço para registrar descobertas, problemas e evidências.

Exemplos:

- O template inicial criou arquivos de exemplo como `WeatherForecast.cs`.
- O Swagger abriu em uma porta diferente da esperada.
- O comando `dotnet run` mostrou uma URL específica no terminal.
- O projeto funcionou com HTTPS, mas o navegador mostrou aviso de certificado local.
- A lista de produtos é perdida quando a API é reiniciada porque os dados estão em memória.

Formato sugerido:

```md
- Descoberta: o Swagger abriu em `https://localhost:7071/swagger`.
  Evidência: URL exibida no terminal após rodar `dotnet run`.
```

---

## Decision Log

- Decisão: usar ASP.NET Core com C#.
  Motivo: é o foco principal do projeto.

- Decisão: usar Controllers em vez de Minimal API.
  Motivo: Controllers deixam a separação de responsabilidades mais clara para fins didáticos.

- Decisão: criar uma API de produtos.
  Motivo: produtos são fáceis de entender e permitem demonstrar CRUD completo.

- Decisão: não usar banco de dados na primeira versão.
  Motivo: o objetivo inicial é ensinar rotas, controllers, services, models e DTOs sem adicionar complexidade.

- Decisão: armazenar os produtos em memória usando uma lista.
  Motivo: facilita o entendimento inicial e deixa claro que os dados somem ao reiniciar a API.

- Decisão: criar `docs/passo-a-passo.md`.
  Motivo: o projeto deve ensinar outro desenvolvedor a recriar a API do zero.

- Decisão: separar a lógica no `ProdutoService`.
  Motivo: o controller deve receber requisições e devolver respostas, enquanto o service concentra a lógica da aplicação.

---

## Outcomes & Retrospective

Esta seção deve ser preenchida no final do projeto.

Ao final, registrar:

- o que foi construído;
- quais endpoints foram criados;
- quais testes foram feitos;
- quais problemas apareceram;
- como os problemas foram resolvidos;
- se a documentação ficou suficiente para outro desenvolvedor reproduzir o projeto.

Modelo para preencher no final:

```md
A API RESTful de produtos foi criada com ASP.NET Core e C#.

Foram criadas rotas para listar, buscar, criar, atualizar e excluir produtos.

A documentação `docs/passo-a-passo.md` explica os comandos, pastas, arquivos e códigos usados no projeto.

O projeto foi testado pelo Swagger e todos os endpoints funcionaram corretamente.
```

---

## Context and Orientation

Este projeto parte de uma API simples criada do zero.

A estrutura esperada é:

```txt
MinhaApi/
├── Controllers/
│   └── ProdutosController.cs
├── DTOs/
│   ├── CriarProdutoDto.cs
│   └── AtualizarProdutoDto.cs
├── Models/
│   └── Produto.cs
├── Services/
│   ├── IProdutoService.cs
│   └── ProdutoService.cs
├── docs/
│   └── passo-a-passo.md
├── Program.cs
├── MinhaApi.csproj
└── README.md
```

Responsabilidade de cada parte:

| Parte | Responsabilidade |
|---|---|
| `Models` | Representa as entidades principais do sistema |
| `DTOs` | Representa os dados recebidos nas requisições |
| `Services` | Guarda a lógica principal da aplicação |
| `Controllers` | Recebe requisições HTTP e devolve respostas |
| `Program.cs` | Configura a aplicação |
| `README.md` | Explica como rodar o projeto |
| `docs/passo-a-passo.md` | Ensina como criar a API do zero |

A API usará os seguintes métodos HTTP:

| Método | Uso |
|---|---|
| GET | Buscar dados |
| POST | Criar dados |
| PUT | Atualizar dados |
| DELETE | Excluir dados |

Rotas esperadas:

| Método | Rota | Descrição |
|---|---|---|
| GET | `/api/produtos` | Lista todos os produtos |
| GET | `/api/produtos/{id}` | Busca um produto pelo id |
| POST | `/api/produtos` | Cria um produto |
| PUT | `/api/produtos/{id}` | Atualiza um produto |
| DELETE | `/api/produtos/{id}` | Exclui um produto |

---

## Plan of Work

O trabalho será dividido em duas frentes principais.

### Frente 1 — Construção da API

Criar uma API RESTful simples em ASP.NET Core com C#.

A API terá:

- model;
- DTOs;
- service;
- interface de service;
- controller;
- rotas CRUD;
- Swagger para testes.

### Frente 2 — Documentação didática

Criar uma documentação ensinando outro desenvolvedor a fazer a mesma API do zero.

A documentação deve ser escrita em linguagem simples, explicando:

- o que está sendo criado;
- por que está sendo criado;
- onde o arquivo deve ficar;
- qual código deve ser colocado;
- o que o código faz;
- como testar.

O arquivo principal dessa documentação será:

```txt
docs/passo-a-passo.md
```

---

## Concrete Steps

### 1. Criar a pasta do projeto

Comando:

```bash
mkdir MinhaApi
cd MinhaApi
```

Registrar em `docs/passo-a-passo.md`:

- `mkdir` cria uma nova pasta;
- `cd` entra dentro da pasta;
- essa pasta será a raiz do projeto.

---

### 2. Criar o projeto ASP.NET Core Web API

Comando:

```bash
dotnet new webapi
```

Registrar em `docs/passo-a-passo.md`:

- esse comando cria um projeto Web API;
- o projeto usa ASP.NET Core;
- o arquivo `.csproj` guarda informações do projeto;
- o arquivo `Program.cs` configura a aplicação;
- o Swagger será usado para testar os endpoints.

---

### 3. Rodar o projeto pela primeira vez

Comando:

```bash
dotnet run
```

Registrar em `docs/passo-a-passo.md`:

- esse comando inicia a API;
- o terminal mostra as URLs disponíveis;
- o Swagger normalmente pode ser acessado em `/swagger`.

---

### 4. Remover arquivos de exemplo

Verificar se existem arquivos como:

```txt
WeatherForecast.cs
Controllers/WeatherForecastController.cs
```

Se existirem, remover.

Registrar em `docs/passo-a-passo.md`:

- esses arquivos vêm do template inicial;
- eles não fazem parte da API de produtos;
- removê-los deixa o projeto mais limpo.

---

### 5. Criar a model Produto

Criar pasta:

```bash
mkdir Models
```

Criar arquivo:

```txt
Models/Produto.cs
```

Código:

```csharp
namespace MinhaApi.Models;

public class Produto
{
    public int Id { get; set; }

    public string Nome { get; set; } = string.Empty;

    public decimal Preco { get; set; }

    public int Quantidade { get; set; }
}
```

Registrar em `docs/passo-a-passo.md`:

- `Produto` representa um produto no sistema;
- `Id` identifica o produto;
- `Nome` guarda o nome do produto;
- `Preco` guarda o preço;
- `Quantidade` guarda o estoque;
- `decimal` é usado para valores monetários;
- `{ get; set; }` permite ler e alterar o valor.

---

### 6. Criar os DTOs

Criar pasta:

```bash
mkdir DTOs
```

Criar arquivo:

```txt
DTOs/CriarProdutoDto.cs
```

Código:

```csharp
namespace MinhaApi.DTOs;

public class CriarProdutoDto
{
    public string Nome { get; set; } = string.Empty;

    public decimal Preco { get; set; }

    public int Quantidade { get; set; }
}
```

Criar arquivo:

```txt
DTOs/AtualizarProdutoDto.cs
```

Código:

```csharp
namespace MinhaApi.DTOs;

public class AtualizarProdutoDto
{
    public string Nome { get; set; } = string.Empty;

    public decimal Preco { get; set; }

    public int Quantidade { get; set; }
}
```

Registrar em `docs/passo-a-passo.md`:

- DTO significa Data Transfer Object;
- DTO é usado para receber dados da requisição;
- o DTO de criação não precisa de `Id`;
- o `Id` será gerado dentro da aplicação;
- DTO ajuda a separar entrada de dados da model principal.

---

### 7. Criar a interface do service

Criar pasta:

```bash
mkdir Services
```

Criar arquivo:

```txt
Services/IProdutoService.cs
```

Código:

```csharp
using MinhaApi.DTOs;
using MinhaApi.Models;

namespace MinhaApi.Services;

public interface IProdutoService
{
    List<Produto> ListarTodos();

    Produto? BuscarPorId(int id);

    Produto Criar(CriarProdutoDto dto);

    Produto? Atualizar(int id, AtualizarProdutoDto dto);

    bool Excluir(int id);
}
```

Registrar em `docs/passo-a-passo.md`:

- interface define um contrato;
- contrato significa quais métodos a classe precisa implementar;
- `Produto?` indica que pode retornar um produto ou `null`;
- `bool` retorna verdadeiro ou falso;
- a interface ajuda a organizar melhor o código.

---

### 8. Criar a implementação do service

Criar arquivo:

```txt
Services/ProdutoService.cs
```

Código:

```csharp
using MinhaApi.DTOs;
using MinhaApi.Models;

namespace MinhaApi.Services;

public class ProdutoService : IProdutoService
{
    private readonly List<Produto> _produtos = new();

    private int _proximoId = 1;

    public List<Produto> ListarTodos()
    {
        return _produtos;
    }

    public Produto? BuscarPorId(int id)
    {
        return _produtos.FirstOrDefault(produto => produto.Id == id);
    }

    public Produto Criar(CriarProdutoDto dto)
    {
        var produto = new Produto
        {
            Id = _proximoId,
            Nome = dto.Nome,
            Preco = dto.Preco,
            Quantidade = dto.Quantidade
        };

        _proximoId++;

        _produtos.Add(produto);

        return produto;
    }

    public Produto? Atualizar(int id, AtualizarProdutoDto dto)
    {
        var produto = BuscarPorId(id);

        if (produto is null)
        {
            return null;
        }

        produto.Nome = dto.Nome;
        produto.Preco = dto.Preco;
        produto.Quantidade = dto.Quantidade;

        return produto;
    }

    public bool Excluir(int id)
    {
        var produto = BuscarPorId(id);

        if (produto is null)
        {
            return false;
        }

        _produtos.Remove(produto);

        return true;
    }
}
```

Registrar em `docs/passo-a-passo.md`:

- `_produtos` guarda os produtos em memória;
- `_proximoId` controla o próximo id;
- `ListarTodos` retorna todos os produtos;
- `BuscarPorId` procura um produto pelo id;
- `Criar` cria um novo produto;
- `Atualizar` altera um produto existente;
- `Excluir` remove um produto;
- `FirstOrDefault` retorna o primeiro item encontrado ou `null`.

---

### 9. Registrar o service no Program.cs

Editar `Program.cs`.

Adicionar:

```csharp
using MinhaApi.Services;
```

Adicionar antes de `builder.Build()`:

```csharp
builder.Services.AddSingleton<IProdutoService, ProdutoService>();
```

Modelo esperado:

```csharp
using MinhaApi.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen();

builder.Services.AddSingleton<IProdutoService, ProdutoService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();

    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
```

Registrar em `docs/passo-a-passo.md`:

- `Program.cs` configura a aplicação;
- `AddControllers` habilita controllers;
- `AddSwaggerGen` habilita documentação/teste pelo Swagger;
- `AddSingleton` registra o service;
- injeção de dependência permite usar o service no controller;
- `MapControllers` faz a API reconhecer as rotas dos controllers.

---

### 10. Criar o controller de produtos

Criar pasta, se ainda não existir:

```bash
mkdir Controllers
```

Criar arquivo:

```txt
Controllers/ProdutosController.cs
```

Código:

```csharp
using Microsoft.AspNetCore.Mvc;
using MinhaApi.DTOs;
using MinhaApi.Models;
using MinhaApi.Services;

namespace MinhaApi.Controllers;

[ApiController]
[Route("api/produtos")]
public class ProdutosController : ControllerBase
{
    private readonly IProdutoService _produtoService;

    public ProdutosController(IProdutoService produtoService)
    {
        _produtoService = produtoService;
    }

    [HttpGet]
    public ActionResult<List<Produto>> ListarTodos()
    {
        var produtos = _produtoService.ListarTodos();

        return Ok(produtos);
    }

    [HttpGet("{id}")]
    public ActionResult<Produto> BuscarPorId(int id)
    {
        var produto = _produtoService.BuscarPorId(id);

        if (produto is null)
        {
            return NotFound();
        }

        return Ok(produto);
    }

    [HttpPost]
    public ActionResult<Produto> Criar(CriarProdutoDto dto)
    {
        var produto = _produtoService.Criar(dto);

        return CreatedAtAction(nameof(BuscarPorId), new { id = produto.Id }, produto);
    }

    [HttpPut("{id}")]
    public ActionResult<Produto> Atualizar(int id, AtualizarProdutoDto dto)
    {
        var produto = _produtoService.Atualizar(id, dto);

        if (produto is null)
        {
            return NotFound();
        }

        return Ok(produto);
    }

    [HttpDelete("{id}")]
    public IActionResult Excluir(int id)
    {
        var excluiu = _produtoService.Excluir(id);

        if (!excluiu)
        {
            return NotFound();
        }

        return NoContent();
    }
}
```

Registrar em `docs/passo-a-passo.md`:

- controller recebe requisições HTTP;
- `[ApiController]` indica que a classe é um controller de API;
- `[Route("api/produtos")]` define a rota base;
- `[HttpGet]` cria uma rota GET;
- `[HttpPost]` cria uma rota POST;
- `[HttpPut]` cria uma rota PUT;
- `[HttpDelete]` cria uma rota DELETE;
- `Ok` retorna status 200;
- `NotFound` retorna status 404;
- `CreatedAtAction` retorna status 201;
- `NoContent` retorna status 204.

---

### 11. Testar a API no Swagger

Rodar:

```bash
dotnet run
```

Abrir o Swagger:

```txt
https://localhost:SUA_PORTA/swagger
```

Testar:

```http
GET /api/produtos
```

```http
POST /api/produtos
```

Body:

```json
{
  "nome": "Mouse Gamer",
  "preco": 120.50,
  "quantidade": 10
}
```

```http
GET /api/produtos/1
```

```http
PUT /api/produtos/1
```

Body:

```json
{
  "nome": "Mouse Gamer RGB",
  "preco": 150.00,
  "quantidade": 8
}
```

```http
DELETE /api/produtos/1
```

Registrar em `docs/passo-a-passo.md`:

- como abrir o Swagger;
- como testar cada endpoint;
- o que é JSON;
- o que é body;
- o que significa status 200;
- o que significa status 201;
- o que significa status 204;
- o que significa status 404.

---

### 12. Criar o README.md

Criar arquivo:

```txt
README.md
```

Conteúdo base:

```md
# MinhaApi

API RESTful simples feita com ASP.NET Core e C#.

## Funcionalidades

- Listar produtos
- Buscar produto por id
- Criar produto
- Atualizar produto
- Excluir produto

## Tecnologias

- C#
- ASP.NET Core
- Swagger

## Como rodar

```bash
dotnet restore
dotnet run
```

## Como acessar o Swagger

Após rodar o projeto, acesse:

```txt
https://localhost:SUA_PORTA/swagger
```

## Rotas

| Método | Rota | Descrição |
|---|---|---|
| GET | /api/produtos | Lista todos os produtos |
| GET | /api/produtos/{id} | Busca produto por id |
| POST | /api/produtos | Cria produto |
| PUT | /api/produtos/{id} | Atualiza produto |
| DELETE | /api/produtos/{id} | Exclui produto |
```

---

### 13. Criar a documentação didática

Criar pasta:

```bash
mkdir docs
```

Criar arquivo:

```txt
docs/passo-a-passo.md
```

Estrutura obrigatória:

```md
# Passo a passo — Criando uma API RESTful com ASP.NET Core e C#

## 1. O que vamos construir?

## 2. O que é uma API?

## 3. O que é REST?

## 4. O que é ASP.NET Core?

## 5. O que é C#?

## 6. Criando o projeto

## 7. Entendendo a estrutura inicial

## 8. Criando a Model Produto

## 9. Criando os DTOs

## 10. Criando o Service

## 11. Registrando o Service no Program.cs

## 12. Criando o Controller

## 13. Testando no Swagger

## 14. Explicação das rotas

## 15. Erros comuns

## 16. Próximos passos
```

---

## Validation and Acceptance

O projeto só será aceito quando todos os itens abaixo forem cumpridos.

### Validação técnica

- [ ] `dotnet restore` executa sem erro.
- [ ] `dotnet run` executa sem erro.
- [ ] Swagger abre corretamente.
- [ ] `GET /api/produtos` retorna uma lista.
- [ ] `POST /api/produtos` cria um produto.
- [ ] `GET /api/produtos/{id}` busca um produto existente.
- [ ] `GET /api/produtos/{id}` retorna 404 para produto inexistente.
- [ ] `PUT /api/produtos/{id}` atualiza um produto.
- [ ] `DELETE /api/produtos/{id}` exclui um produto.
- [ ] Os produtos ficam disponíveis enquanto a API está rodando.
- [ ] Os produtos somem após reiniciar a API, por estarem em memória.

### Validação de estrutura

- [ ] Existe a pasta `Models`.
- [ ] Existe a pasta `DTOs`.
- [ ] Existe a pasta `Services`.
- [ ] Existe a pasta `Controllers`.
- [ ] Existe a pasta `docs`.
- [ ] Existe o arquivo `Produto.cs`.
- [ ] Existe o arquivo `CriarProdutoDto.cs`.
- [ ] Existe o arquivo `AtualizarProdutoDto.cs`.
- [ ] Existe o arquivo `IProdutoService.cs`.
- [ ] Existe o arquivo `ProdutoService.cs`.
- [ ] Existe o arquivo `ProdutosController.cs`.
- [ ] Existe o arquivo `README.md`.
- [ ] Existe o arquivo `docs/passo-a-passo.md`.

### Validação didática

- [ ] A documentação explica os comandos usados.
- [ ] A documentação explica a criação das pastas.
- [ ] A documentação explica a criação dos arquivos.
- [ ] A documentação explica o papel de cada camada.
- [ ] A documentação explica os métodos HTTP.
- [ ] A documentação explica os status HTTP principais.
- [ ] A documentação explica os erros comuns.
- [ ] Um dev iniciante conseguiria recriar a API seguindo o documento.

---

## Idempotence and Recovery

Este projeto deve poder ser refeito sem causar confusão.

### Se o projeto já existir

Não recriar tudo do zero sem necessidade.

Antes, verificar:

- se o arquivo já existe;
- se a pasta já existe;
- se o código já foi criado;
- se o conteúdo precisa apenas de ajuste.

### Se uma pasta já existir

Não há problema.

Continuar usando a pasta existente.

Exemplo:

```bash
mkdir Models
```

Se a pasta já existir, apenas seguir para o próximo passo.

### Se o Swagger não abrir

Verificar:

- se `dotnet run` está executando;
- qual URL apareceu no terminal;
- se a porta está correta;
- se o navegador está acessando `/swagger`.

### Se a API não reconhecer o controller

Verificar no `Program.cs`:

```csharp
builder.Services.AddControllers();
app.MapControllers();
```

Essas duas linhas são necessárias para o ASP.NET Core reconhecer controllers.

### Se o service não funcionar no controller

Verificar se o service foi registrado:

```csharp
builder.Services.AddSingleton<IProdutoService, ProdutoService>();
```

Também verificar se o controller recebe a interface no construtor:

```csharp
public ProdutosController(IProdutoService produtoService)
```

### Se os dados sumirem

Isso é esperado nesta versão.

Os dados estão salvos em memória.

Quando a API reinicia, a lista volta vazia.

Registrar isso em `docs/passo-a-passo.md`.

---

## Artifacts and Notes

Artefatos esperados:

```txt
README.md
docs/passo-a-passo.md
Models/Produto.cs
DTOs/CriarProdutoDto.cs
DTOs/AtualizarProdutoDto.cs
Services/IProdutoService.cs
Services/ProdutoService.cs
Controllers/ProdutosController.cs
```

### Exemplo de produto para teste

```json
{
  "nome": "Mouse Gamer",
  "preco": 120.50,
  "quantidade": 10
}
```

### Exemplo de produto atualizado

```json
{
  "nome": "Mouse Gamer RGB",
  "preco": 150.00,
  "quantidade": 8
}
```

### Logs úteis para registrar

Durante a execução, registrar no `docs/passo-a-passo.md`:

```md
## Registro de execução

- Comando executado: `dotnet run`
- Resultado: API iniciou corretamente
- Swagger: `https://localhost:PORTA/swagger`
- Observação: substituir PORTA pela porta exibida no terminal
```

### Erros comuns para documentar

```md
## Erros comuns

### O comando dotnet não funciona

Provavelmente o SDK do .NET não está instalado ou não está configurado no PATH.

### Swagger não abre

Verifique se a API está rodando e se a URL está correta.

### Produto retorna 404

O produto pode não existir ou o id informado pode estar errado.

### Produtos somem ao reiniciar

Isso acontece porque os dados estão em memória.
```

---

## Interfaces and Dependencies

### Dependências principais

- .NET SDK instalado.
- ASP.NET Core.
- C#.
- Swagger.

### Comandos principais

```bash
dotnet new webapi
dotnet restore
dotnet run
```

### Interface HTTP da API

| Método | Endpoint | Entrada | Saída esperada |
|---|---|---|---|
| GET | `/api/produtos` | Nenhuma | Lista de produtos |
| GET | `/api/produtos/{id}` | Id na URL | Produto encontrado ou 404 |
| POST | `/api/produtos` | JSON com nome, preço e quantidade | Produto criado |
| PUT | `/api/produtos/{id}` | Id na URL e JSON no body | Produto atualizado ou 404 |
| DELETE | `/api/produtos/{id}` | Id na URL | 204 ou 404 |

### Contrato de criação

```json
{
  "nome": "Teclado Mecânico",
  "preco": 250.00,
  "quantidade": 5
}
```

### Contrato de resposta

```json
{
  "id": 1,
  "nome": "Teclado Mecânico",
  "preco": 250.00,
  "quantidade": 5
}
```

### Próximas versões possíveis

Depois da primeira versão, evoluir para:

- validação com Data Annotations;
- banco de dados com Entity Framework Core;
- migrations;
- repository;
- autenticação JWT;
- testes automatizados;
- Docker;
- deploy.
