# Resumo: Codex ExecPlans

## O que é um ExecPlan?

Um **ExecPlan** (Plano de Execução) é um documento de design detalhado que guia um agente de código (como o Codex) na implementação de uma tarefa complexa — do início ao fim, sem precisar de contexto externo.

Pense nele como um **manual completo para um iniciante absoluto**: quem lê o documento deve conseguir implementar e validar a funcionalidade apenas com o que está escrito ali.

---

## Por que usar?

- Permite que o Codex trabalhe por horas de forma autônoma a partir de um único comando.
- Evita ambiguidades: todas as decisões são tomadas no documento, não durante a execução.
- É um **documento vivo** — atualizado à medida que o trabalho avança.
- Qualquer pessoa (ou agente) pode retomar o trabalho do zero lendo apenas o ExecPlan.

---

## Regras fundamentais (não negociáveis)

| Regra | O que significa na prática |
|---|---|
| **Autossuficiente** | Não referencie blogs, docs externas ou planos anteriores. Inclua tudo dentro do documento. |
| **Documento vivo** | Atualize o plano conforme o progresso, novas descobertas e decisões de design. |
| **Para iniciantes** | Escreva como se o leitor não conhecesse nada do repositório. Nomeie arquivos, funções e módulos com caminhos completos. |
| **Focado em resultados** | Descreva o que o usuário *conseguirá fazer* após a mudança — não apenas o que o código vai implementar. |
| **Defina tudo** | Qualquer termo técnico não óbvio deve ser definido logo onde aparece. |

---

## Como configurar (AGENTS.md + PLANS.md)

**1. AGENTS.md** — instrui o agente sobre quando usar ExecPlans:

```md
# ExecPlans

Ao desenvolver funcionalidades complexas ou realizar refatorações significativas,
utilize um ExecPlan (conforme descrito em .agent/PLANS.md) desde a concepção até a implementação.
```

**2. PLANS.md** — o documento completo com as regras e o formato dos ExecPlans. Adicione-o ao repositório e referencie-o no ExecPlan.

---

## Estrutura de um ExecPlan

Abaixo está cada seção explicada com o que escrever e por quê.

---

### Cabeçalho

```md
# <Título curto e orientado à ação>
```

**O que escrever:** uma frase que descreve o objetivo do plano. Ex: `Adicionar autenticação via OAuth2 ao endpoint /api/user`.

---

### 1. Purpose / Big Picture

**O que é:** explica o *porquê* do trabalho — o valor para o usuário.

**O que escrever:**
- O que o usuário conseguirá fazer após essa mudança que não conseguia antes.
- Como ele poderá *ver* o resultado funcionando.

**Exemplo:**
> Após essa mudança, o usuário poderá fazer login via GitHub. Para verificar, basta acessar `/login` e clicar em "Entrar com GitHub" — o redirecionamento e o token serão gerados automaticamente.

---

### 2. Progress

**O que é:** lista de verificação do trabalho em andamento. Seção obrigatória e sempre atualizada.

**Formato:**
```md
- [x] (2025-10-01 13:00Z) Etapa concluída.
- [ ] Etapa ainda pendente.
- [ ] Etapa parcialmente concluída (concluída: X; restante: Y).
```

**Dica:** use timestamps para medir a velocidade do progresso.

---

### 3. Surprises & Discoveries

**O que é:** registro de comportamentos inesperados, bugs, otimizações ou aprendizados encontrados durante a implementação.

**Formato:**
```md
- Observação: o endpoint retorna 403 quando o token expira em vez de 401.
- Evidência: log de teste em /tests/auth_test.go linha 42.
```

---

### 4. Decision Log

**O que é:** registro de todas as decisões de design tomadas, com justificativa.

**Formato:**
```md
- Decisão: usar JWT em vez de sessão no servidor.
  Justificativa: o sistema é stateless e escala horizontalmente.
  Data/Autor: 2025-10-01 / Alberto
```

---

### 5. Outcomes & Retrospective

**O que é:** resumo final — o que foi alcançado, o que falta e as lições aprendidas.

**Quando escrever:** ao concluir marcos importantes ou o plano completo.

---

### 6. Context and Orientation

**O que é:** descreve o estado atual do projeto relevante para essa tarefa.

**O que incluir:**
- Arquivos e módulos principais com **caminhos completos** (ex: `src/auth/middleware.go`).
- Definição de qualquer termo técnico usado no plano.
- Nunca diga "como descrito antes" — repita o necessário.

---

### 7. Plan of Work

**O que é:** a sequência de mudanças em prosa — o roteiro do que será feito.

**O que incluir:** para cada mudança, diga qual arquivo, qual função/módulo e o que será inserido ou alterado.

**Exemplo:**
> Em `src/auth/middleware.go`, adicionar a função `ValidateToken` que recebe um `Bearer token` e retorna o `UserID` ou erro.

---

### 8. Concrete Steps

**O que é:** os comandos exatos a serem executados, com diretório de trabalho e saída esperada.

**Formato:**
```md
# Dentro de /projeto
go test ./...

# Saída esperada:
ok  github.com/user/projeto/auth  0.023s
```

---

### 9. Validation and Acceptance

**O que é:** como provar que a mudança funciona — expresso em comportamento observável.

**Regra:** nunca escreva "adicionada estrutura X". Escreva:
> "Execute `go test ./auth/...` — o teste `TestTokenValidation` deve passar. Antes da mudança, ele falha."

---

### 10. Idempotence and Recovery

**O que é:** garante que os passos podem ser executados mais de uma vez sem causar danos.

**O que incluir:**
- Se uma etapa for destrutiva, explique como reverter.
- Se uma etapa puder falhar no meio, explique como tentar novamente.

---

### 11. Artifacts and Notes

**O que é:** transcrições, diffs ou trechos que comprovam o sucesso. Seja conciso.

---

### 12. Interfaces and Dependencies

**O que é:** lista prescritiva de bibliotecas, módulos, interfaces e assinaturas de funções.

**Exemplo:**
```md
Em src/auth/token.go, defina:

type TokenValidator interface {
    Validate(token string) (UserID string, err error)
}
```

---

## Template completo para copiar

```md
# <Título curto e orientado à ação>

    Este ExecPlan é um documento vivo. As seções Progress, Surprises & Discoveries,
    Decision Log e Outcomes & Retrospective devem ser mantidas atualizadas.

    PLANS.md em: .agent/PLANS.md

## Purpose / Big Picture

    <O que o usuário ganha e como poderá ver funcionando.>

## Progress

    - [ ] <Primeira etapa>

## Surprises & Discoveries

    - Observação: …
    - Evidência: …

## Decision Log

    - Decisão: …
      Justificativa: …
      Data/Autor: …

## Outcomes & Retrospective

    <Preencher ao concluir marcos ou o plano completo.>

## Context and Orientation

    <Estado atual relevante. Arquivos com caminhos completos. Definição de termos.>

## Plan of Work

    <Sequência de mudanças em prosa: arquivo, função, o que muda.>

## Concrete Steps

    <Comandos exatos com diretório e saída esperada.>

## Validation and Acceptance

    <Comportamento observável que prova o sucesso. Testes com nome e resultado esperado.>

## Idempotence and Recovery

    <Como repetir as etapas com segurança. Como reverter se necessário.>

## Artifacts and Notes

    <Trechos, diffs ou logs que comprovam o sucesso.>

## Interfaces and Dependencies

    <Bibliotecas, módulos, interfaces e assinaturas de funções.>
```

---

## Checklist antes de finalizar um ExecPlan

- [ ] Um iniciante consegue seguir o plano sem precisar perguntar nada?
- [ ] Todos os arquivos estão com caminhos completos?
- [ ] Todos os termos técnicos estão definidos?
- [ ] A aceitação é descrita como comportamento observável (não como código)?
- [ ] As seções Progress, Decision Log e Surprises & Discoveries estão presentes?
- [ ] O plano é autossuficiente (sem referências externas obrigatórias)?
