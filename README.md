# Open IA

Repositório de estudo sobre como usar agentes de IA para programação de forma estruturada, usando dois documentos-chave: **AGENTS.md** e **PLANS.md** (ExecPlans).

---

## O que você vai encontrar aqui

A ideia central é simples: em vez de dar instruções vagas para um agente de IA, você escreve um documento detalhado e auto-suficiente — o **ExecPlan** — que qualquer agente (ou humano iniciante) consegue seguir do começo ao fim e entregar um resultado funcional e verificável.

Este repositório tem dois tipos de conteúdo:

- **articles/** — teoria, resumos e templates para entender e criar seus próprios ExecPlans
- **labs/** — projetos práticos do mais simples ao mais complexo, todos guiados por um ExecPlan

---

## Estrutura do repositório

```
meu_curso_openIA/
│
├── articles/
│   ├── teoria/               → entenda o método antes de usar
│   │   ├── AGENTS.md                  o que é AGENTS.md e como funciona
│   │   ├── codex_exec_plans.md        guia completo do padrão ExecPlan
│   │   ├── resumo_codex_exec_plans.md versão resumida e rápida de ler
│   │   └── what_makes_documentation_good.md  boas práticas de documentação
│   │
│   └── templates/            → use como ponto de partida para novos projetos
│       ├── PLANS.template.md          template completo de ExecPlan
│       ├── PLANS.design.md            template enxuto para rascunho
│       ├── AGENTS.md / AGENTS.example.md  modelos de AGENTS.md
│       ├── GUIA.md                    como adicionar tarefas após uma execução
│       └── codex_exec_plans.example.md    exemplo real comentado
│
└── labs/
    ├── 01-express-basico/     → servidor Node.js mínimo com Express
    ├── 02-ecommerce/          → planos em 3 níveis: iniciante, intermediário, avançado
    ├── 03-templates-execplan/ → exemplo de ExecPlan protegido e prompt de execução
    ├── 04-login-fullstack/    → sistema de login completo (Node + React + MySQL + Docker)
    └── 05-login-avancado/     → versão mais elaborada com telas de referência visual
```

---

## Por onde começar

**Quero entender o método primeiro**
→ Leia [articles/teoria/resumo_codex_exec_plans.md](articles/teoria/resumo_codex_exec_plans.md) — é a leitura mais rápida e cobre o essencial.
→ Para aprofundar: [articles/teoria/codex_exec_plans.md](articles/teoria/codex_exec_plans.md)

**Quero criar meu próprio ExecPlan agora**
→ Copie [articles/templates/PLANS.template.md](articles/templates/PLANS.template.md) para o seu projeto e siga as instruções de cada seção.
→ Veja um exemplo real preenchido em [labs/03-templates-execplan/PLAINS.md](labs/03-templates-execplan/PLAINS.md)

**Quero ver projetos completos funcionando**
→ [labs/04-login-fullstack/](labs/04-login-fullstack/) — sistema com backend, frontend e Docker, com o ExecPlan totalmente preenchido
→ [labs/05-login-avancado/](labs/05-login-avancado/) — versão mais elaborada do mesmo sistema

**Quero aprender na progressão certa**
→ Siga os labs em ordem numérica: `01` → `02` → `03` → `04` → `05`

---

## Conceitos rápidos

| Conceito | O que é |
|---|---|
| **ExecPlan** | Documento de design detalhado que guia um agente de IA na implementação de uma tarefa complexa, do início ao fim, sem contexto externo |
| **PLANS.md** | O arquivo que contém o ExecPlan de um projeto. É um documento vivo — atualizado conforme o trabalho avança |
| **AGENTS.md** | Arquivo que instrui o agente sobre como trabalhar no repositório: quando usar ExecPlans, como testar, como fazer commits |
| **Documento vivo** | O ExecPlan não é escrito uma vez e esquecido — ele é atualizado com progresso, decisões e descobertas durante a execução |
