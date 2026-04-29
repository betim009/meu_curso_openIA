### Utilizando o PLANS.md para resolução de problemas que levam várias horas.
O Codex e o gpt-5.2-codexmodelo (recomendado) podem ser usados ​​para implementar tarefas complexas que demandam um tempo considerável de pesquisa, planejamento e execução. A abordagem descrita aqui é uma forma de estimular o modelo a executar essas tarefas e guiá-lo para a conclusão bem-sucedida de um projeto.

Esses planos são documentos de design detalhados e "documentos vivos". Como usuário do Codex, você pode usar esses documentos para verificar a abordagem que o Codex adotará antes de iniciar um longo processo de implementação. O exemplo PLANS.mdabaixo é muito semelhante a um que permitiu que o Codex funcionasse por mais de sete horas a partir de um único comando.

Permitimos que o Codex utilize esses documentos, primeiro atualizando-os AGENTS.mdpara descrever quando usá-los PLANS.mde, em seguida, é claro, adicionando o PLANS.mdarquivo ao nosso repositório.


## AGENTS.md
AGENTS.md é um formato simples para orientar agentes de codificação como o Codex. Descrevemos um termo que os usuários podem usar como abreviação e uma regra simples para quando usar documentos de planejamento. Aqui, chamamos isso de "ExecPlan". Observe que este é um termo arbitrário; o Codex não foi treinado para usá-lo. Essa abreviação pode então ser usada ao solicitar que o Codex o direcione para uma definição específica de um plano.

Aqui está uma AGENTS.md que instrui um agente sobre quando usar um plano:

```
# ExecPlans
Ao desenvolver funcionalidades complexas ou realizar refatorações significativas, utilize um ExecPlan (conforme descrito em .agent/PLANS.md) desde a concepção até a implementação.
```

## PLANS.md
Abaixo encontra-se o documento completo. As instruções neste documento foram cuidadosamente selecionadas para fornecer feedback significativo aos usuários e orientar o modelo a implementar precisamente o que o plano especifica. Os usuários podem achar útil personalizar o arquivo para atender às suas necessidades ou adicionar ou remover seções necessárias.

```
# Planos de Execução do Codex (ExecPlans)

Este documento descreve os requisitos para um plano de execução ("ExecPlan"), um documento de design que um agente de código pode seguir para entregar uma funcionalidade ou alteração de sistema funcionando. Considere o leitor como um iniciante completo neste repositório: ele possui apenas a árvore de trabalho atual e o único arquivo ExecPlan fornecido. Não há memória de planos anteriores nem contexto externo.

---

## Como usar ExecPlans e PLANS.md

Ao criar uma especificação executável (ExecPlan), siga o PLANS.md **à risca**. Se ele não estiver no seu contexto, releia completamente o arquivo PLANS.md. Seja cuidadoso ao ler (e reler) o material para produzir uma especificação precisa.

Ao implementar um ExecPlan, não peça "próximos passos" ao usuário; simplesmente avance para o próximo marco. Mantenha todas as seções atualizadas.

---

## Requisitos

### REGRAS NÃO NEGOCIÁVEIS:

- Todo ExecPlan deve ser auto-contido
- Deve ser um documento vivo
- Deve permitir execução por iniciantes
- Deve gerar comportamento funcional real
- Todo termo técnico deve ser explicado

---

## Formatação

- Um único bloco markdown
- Sem blocos de código internos
- Usar títulos corretamente

---

## Diretrizes

- Linguagem simples
- Explicação completa
- Resultados observáveis

---

## Marcos (Milestones)

Cada marco deve:
- ter objetivo claro
- ser verificável
- mostrar evolução

---

## Documento Vivo

Todo ExecPlan deve conter:

- Progress
- Surprises & Discoveries
- Decision Log
- Outcomes & Retrospective

---

## Estrutura de um ExecPlan

## Purpose / Big Picture
Explica o objetivo

## Progress
Lista de progresso

## Surprises & Discoveries
Descobertas

## Decision Log
Decisões

## Outcomes & Retrospective
Resumo final

## Context and Orientation
Contexto

## Plan of Work
Plano de execução

## Concrete Steps
Passos práticos

## Validation and Acceptance
Validação

## Idempotence and Recovery
Repetição segura

## Artifacts and Notes
Logs e exemplos

## Interfaces and Dependencies
Dependências

---

## Objetivo Final

Permitir que qualquer pessoa consiga implementar e validar a funcionalidade apenas com este documento.

```

url: https://github.com/betim009/openai-cookbook/blob/main/articles/codex_exec_plans.md
