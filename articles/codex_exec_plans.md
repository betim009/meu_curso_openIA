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

Ao criar uma especificação executável (ExecPlan), siga o arquivo PLANS.md à risca. Se não estiver no seu contexto, refresque sua memória lendo o arquivo PLANS.md inteiro. Seja minucioso na leitura (e releitura) do material de origem para produzir uma especificação precisa. Ao criar uma especificação, comece pelo esqueleto e desenvolva-a à medida que realiza sua pesquisa.

Ao implementar uma especificação executável (ExecPlan), não solicite ao usuário os "próximos passos"; simplesmente prossiga para o próximo marco. Mantenha todas as seções atualizadas, adicione ou divida entradas na lista a cada parada para declarar de forma clara o progresso realizado e os próximos passos. Resolva ambiguidades de forma autônoma e faça commits com frequência.

Ao discutir uma especificação executável (ExecPlan), registre as decisões em um log na especificação para fins de registro futuro; deve ficar inequivocamente claro o motivo de qualquer alteração na especificação. Os ExecPlans são documentos vivos e deve sempre ser possível reiniciar a partir do ExecPlan, sem qualquer outro trabalho.

Ao pesquisar um projeto com requisitos complexos ou incógnitas significativas, utilize marcos para implementar provas de conceito, "implementações de teste", etc., que permitam validar a viabilidade da proposta do usuário. Leia o código-fonte das bibliotecas, encontrando-as ou adquirindo-as, pesquise a fundo e inclua protótipos para orientar uma implementação mais completa.

---

## Requisitos

### REGRAS NÃO NEGOCIÁVEIS:

* Todo Plano de Execução deve ser totalmente autossuficiente. Autossuficiente significa que, em sua forma atual, ele contém todo o conhecimento e as instruções necessárias para que um iniciante tenha sucesso.

* Todo Plano de Execução é um documento vivo. Os colaboradores devem revisá-lo à medida que o progresso é feito, novas descobertas ocorrem e as decisões de design são finalizadas. Cada revisão deve permanecer totalmente autossuficiente.

* Todo Plano de Execução deve permitir que um iniciante completo implemente o recurso de ponta a ponta sem conhecimento prévio deste repositório.

* Todo Plano de Execução deve produzir um comportamento comprovadamente funcional, e não meramente alterações de código para "atender a uma definição".

* Todo Plano de Execução deve definir todos os termos técnicos em linguagem clara ou não utilizá-los.

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
