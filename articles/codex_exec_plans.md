### Utilizando o PLANS.md para resolução de problemas que levam várias horas.

O Codex e o modelo gpt-5.2-codex(recomendado) podem ser usados ​​para implementar tarefas complexas que demandam um tempo considerável de pesquisa, planejamento e execução. A abordagem descrita aqui é uma forma de estimular o modelo a executar essas tarefas e guiá-lo para a conclusão bem-sucedida de um projeto.

Esses planos são documentos de design detalhados e "documentos vivos". Como usuário do Codex, você pode usar esses documentos para verificar a abordagem que o Codex adotará antes de iniciar um longo processo de implementação. O exemplo PLANS.md abaixo é muito semelhante a um que permitiu que o Codex funcionasse por mais de sete horas a partir de um único comando.

Permitimos que o Codex utilize esses documentos, primeiro atualizando-os AGENTS.md para descrever quando usá-los PLANS.md e, em seguida, é claro, adicionando o PLANS.md arquivo ao nosso repositório.

## `AGENTS.md`

[`AGENTS.md`](https://github.com/openai/agents.md) é um formato simples para orientar agentes de codificação como o Codex. Descrevemos um termo que os usuários podem usar como abreviação e uma regra simples para quando usar documentos de planejamento. Aqui, chamamos isso de "ExecPlan". Observe que este é um termo arbitrário; o Codex não foi treinado para usá-lo. Essa abreviação pode então ser usada ao solicitar que o Codex o direcione para uma definição específica de um plano.

Aqui está uma `AGENTS.md` que instrui um agente sobre quando usar um plano:

```md
# ExecPlans

Ao desenvolver funcionalidades complexas ou realizar refatorações significativas, utilize um ExecPlan (conforme descrito em .agent/PLANS.md) desde a concepção até a implementação.
```

## `PLANS.md`

Abaixo encontra-se o documento completo. As instruções neste documento foram cuidadosamente selecionadas para fornecer feedback significativo aos usuários e orientar o modelo a implementar precisamente o que o plano especifica. Os usuários podem achar útil personalizar o arquivo para atender às suas necessidades ou adicionar ou remover seções necessárias.

~~~md
# Planos de Execução do Codex (ExecPlans)

Este documento descreve os requisitos para um plano de execução ("ExecPlan"), um documento de design que um agente de código pode seguir para entregar uma funcionalidade ou alteração de sistema funcionando. Considere o leitor como um iniciante completo neste repositório: ele possui apenas a árvore de trabalho atual e o único arquivo ExecPlan fornecido. Não há memória de planos anteriores nem contexto externo.

---

## Como usar ExecPlans e PLANS.md

Ao criar uma especificação executável (ExecPlan), siga o arquivo PLANS.md à risca. Se não estiver no seu contexto, refresque sua memória lendo o arquivo PLANS.md inteiro. Seja minucioso na leitura (e releitura) do material de origem para produzir uma especificação precisa. Ao criar uma especificação, comece pelo esqueleto e desenvolva-a à medida que realiza sua pesquisa.

Ao implementar uma especificação executável (ExecPlan), não solicite ao usuário os "próximos passos"; simplesmente prossiga para o próximo marco. Mantenha todas as seções atualizadas, adicione ou divida entradas na lista a cada parada para declarar de forma clara o progresso realizado e os próximos passos. Resolva ambiguidades de forma autônoma e faça commits com frequência.

Ao discutir uma especificação executável (ExecPlan), registre as decisões em um log na especificação para fins de registro futuro; deve ficar inequivocamente claro o motivo de qualquer alteração na especificação. Os ExecPlans são documentos vivos e deve sempre ser possível reiniciar a partir do ExecPlan, sem qualquer outro trabalho.

Ao pesquisar um projeto com requisitos complexos ou incógnitas significativas, utilize marcos para implementar provas de conceito, "implementações de teste", etc., que permitam validar a viabilidade da proposta do usuário. Leia o código-fonte das bibliotecas, encontrando-as ou adquirindo-as, pesquise a fundo e inclua protótipos para orientar uma implementação mais completa.


## Requisitos

### REGRAS NÃO NEGOCIÁVEIS:

- Todo Plano de Execução deve ser totalmente autossuficiente. Autossuficiente `significa que, em sua forma atual, ele contém todo o conhecimento e as instruções necessárias para que um iniciante tenha sucesso`.

- Todo Plano de Execução é um `documento vivo`. Os colaboradores devem revisá-lo à medida que o progresso é feito, novas descobertas ocorrem e as decisões de design são finalizadas. Cada revisão deve permanecer totalmente autossuficiente.

- Todo Plano de Execução deve permitir que um iniciante completo implemente o recurso de ponta a ponta sem conhecimento prévio deste repositório.

- Todo Plano de Execução deve produzir um comportamento comprovadamente funcional, e não meramente alterações de código para "atender a uma definição".

- Todo Plano de Execução deve definir todos os termos técnicos em linguagem clara ou não utilizá-los.

O propósito/purpose e a intenção/intent vêm em primeiro lugar. Comece explicando, em poucas frases, por que o trabalho é importante da perspectiva do usuário: o que alguém poderá fazer após essa mudança que não conseguia fazer antes e como ver isso funcionando. Em seguida, guie o leitor pelos passos exatos para alcançar esse resultado, incluindo o que editar, o que executar e o que observar.

O agente que executa o seu plano pode listar arquivos, ler arquivos, pesquisar, executar o projeto e rodar testes. Ele não possui nenhum contexto anterior e não consegue inferir o que você quis dizer com base em etapas anteriores. Repita qualquer suposição da qual você dependa. Não aponte para blogs ou documentações externas; se algum conhecimento for necessário, inclua-o diretamente no plano com suas próprias palavras. Se um ExecPlan depender de outro ExecPlan anterior e esse arquivo estiver presente no repositório, você pode referenciá-lo. Caso contrário, você deve incluir todo o contexto relevante desse plano dentro do atual.

## Formatação

O formato e a estrutura são simples e rigorosos. Cada ExecPlan deve ser um único bloco de código delimitado, identificado como md, que começa e termina com três crases (```). Não aninhe (não coloque) outros blocos de três crases dentro dele; quando precisar mostrar comandos, saídas de terminal, diffs ou código, apresente-os como blocos indentados dentro desse único bloco. Use indentação para dar clareza, em vez de blocos de código dentro do ExecPlan, para evitar fechar o bloco principal antes da hora. Use duas quebras de linha após cada título, utilize #, ## e assim por diante, e utilize a sintaxe correta para listas ordenadas e não ordenadas.

## Diretrizes

Autocontenção e linguagem clara são fundamentais. Se você introduzir uma expressão que não seja inglês comum ("daemon", "middleware", "RPC gateway", "filter graph"), defina-a imediatamente e lembre o leitor de como ela se manifesta neste repositório (por exemplo, nomeando os arquivos ou comandos em que aparece). Não diga "como definido anteriormente" ou "de acordo com o documento de arquitetura". Inclua a explicação necessária aqui, mesmo que se repita.

Evite falhas comuns. Não utilize jargões indefinidos. Não descreva "a letra de uma funcionalidade" de forma tão restrita que o código resultante compile, mas não faça nada de útil. Não delegue decisões importantes ao leitor. Quando houver ambiguidade, resolva-a no próprio plano e explique por que você escolheu esse caminho. Priorize a explicação detalhada dos efeitos visíveis ao usuário e a especificação insuficiente de detalhes de implementação incidentais.

Fundamente o plano em resultados observáveis. Descreva o que o usuário poderá fazer após a implementação, os comandos a serem executados e as saídas que ele deverá observar. A aceitação deve ser expressa como um comportamento que um humano possa verificar ("após iniciar o servidor, acessar [http://localhost:8080/health](http://localhost:8080/health) retorna HTTP 200 com o corpo OK") em vez de atributos internos ("adicionada uma estrutura HealthCheck"). Se uma alteração for interna, explique como seu impacto ainda pode ser demonstrado (por exemplo, executando testes que falham antes e são aprovados depois, e mostrando um cenário que utiliza o novo comportamento).

Especifique o contexto do repositório explicitamente. Nomeie os arquivos com os caminhos completos relativos ao repositório, nomeie as funções e os módulos com precisão e descreva onde os novos arquivos devem ser criados. Se estiver trabalhando em várias áreas, inclua um breve parágrafo de orientação explicando como essas partes se encaixam, para que um iniciante possa navegar com confiança. Ao executar comandos, mostre o diretório de trabalho e a linha de comando exata. Quando os resultados dependerem do ambiente, declare as premissas e forneça alternativas quando razoáveis.

Seja idempotente e seguro. Escreva as etapas de forma que possam ser executadas várias vezes sem causar danos ou desvios. Se uma etapa puder falhar no meio do processo, inclua como tentar novamente ou adaptar. Se uma migração ou operação destrutiva for necessária, especifique backups ou alternativas seguras. Prefira alterações aditivas e testáveis ​​que possam ser validadas durante o processo.

A validação não é opcional. Inclua instruções para executar testes, iniciar o sistema, se aplicável, e observar o sistema realizando alguma ação útil. Descreva testes abrangentes para quaisquer novos recursos ou funcionalidades. Inclua as saídas esperadas e as mensagens de erro para que um iniciante possa distinguir o sucesso da falha. Sempre que possível, mostre como comprovar que a alteração é eficaz além da compilação (por exemplo, por meio de um pequeno cenário de ponta a ponta, uma invocação de CLI ou uma transcrição de solicitação/resposta HTTP). Indique os comandos de teste exatos apropriados para o conjunto de ferramentas do projeto e como interpretar seus resultados.

Capture evidências. Quando suas etapas gerarem saída de terminal, pequenas diferenças ou logs, inclua-os dentro do bloco delimitador como exemplos indentados. Mantenha-os concisos e focados no que comprova o sucesso. Se precisar incluir um patch, prefira diferenças com escopo de arquivo ou pequenos trechos que um leitor possa reproduzir seguindo suas instruções, em vez de colar grandes blocos de código.


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
~~~

url: https://github.com/betim009/openai-cookbook/blob/main/articles/codex_exec_plans.md

data da ultima alteracao: Dom. 10 de mai.
