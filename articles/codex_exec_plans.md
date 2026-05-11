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

O formato e a estrutura são simples e rigorosos. Cada ExecPlan deve ser um único bloco de código delimitado, identificado como md, que começa e termina com três crases (\`\`\`). Não aninhe (não coloque) outros blocos de três crases dentro dele; quando precisar mostrar comandos, saídas de terminal, diffs ou código, apresente-os como blocos indentados dentro desse único bloco. Use indentação para dar clareza, em vez de blocos de código dentro do ExecPlan, para evitar fechar o bloco principal antes da hora. Use duas quebras de linha após cada título, utilize #, ## e assim por diante, e utilize a sintaxe correta para listas ordenadas e não ordenadas.

## Diretrizes

Autocontenção e linguagem clara são fundamentais. Se você introduzir uma expressão que não seja inglês comum ("daemon", "middleware", "RPC gateway", "filter graph"), defina-a imediatamente e lembre o leitor de como ela se manifesta neste repositório (por exemplo, nomeando os arquivos ou comandos em que aparece). Não diga "como definido anteriormente" ou "de acordo com o documento de arquitetura". Inclua a explicação necessária aqui, mesmo que se repita.

Evite falhas comuns. Não utilize jargões indefinidos. Não descreva "a letra de uma funcionalidade" de forma tão restrita que o código resultante compile, mas não faça nada de útil. Não delegue decisões importantes ao leitor. Quando houver ambiguidade, resolva-a no próprio plano e explique por que você escolheu esse caminho. Priorize a explicação detalhada dos efeitos visíveis ao usuário e a especificação insuficiente de detalhes de implementação incidentais.

Fundamente o plano em resultados observáveis. Descreva o que o usuário poderá fazer após a implementação, os comandos a serem executados e as saídas que ele deverá observar. A aceitação deve ser expressa como um comportamento que um humano possa verificar ("após iniciar o servidor, acessar [http://localhost:8080/health](http://localhost:8080/health) retorna HTTP 200 com o corpo OK") em vez de atributos internos ("adicionada uma estrutura HealthCheck"). Se uma alteração for interna, explique como seu impacto ainda pode ser demonstrado (por exemplo, executando testes que falham antes e são aprovados depois, e mostrando um cenário que utiliza o novo comportamento).

Especifique o contexto do repositório explicitamente. Nomeie os arquivos com os caminhos completos relativos ao repositório, nomeie as funções e os módulos com precisão e descreva onde os novos arquivos devem ser criados. Se estiver trabalhando em várias áreas, inclua um breve parágrafo de orientação explicando como essas partes se encaixam, para que um iniciante possa navegar com confiança. Ao executar comandos, mostre o diretório de trabalho e a linha de comando exata. Quando os resultados dependerem do ambiente, declare as premissas e forneça alternativas quando razoáveis.

Seja idempotente e seguro. Escreva as etapas de forma que possam ser executadas várias vezes sem causar danos ou desvios. Se uma etapa puder falhar no meio do processo, inclua como tentar novamente ou adaptar. Se uma migração ou operação destrutiva for necessária, especifique backups ou alternativas seguras. Prefira alterações aditivas e testáveis ​​que possam ser validadas durante o processo.

A validação não é opcional. Inclua instruções para executar testes, iniciar o sistema, se aplicável, e observar o sistema realizando alguma ação útil. Descreva testes abrangentes para quaisquer novos recursos ou funcionalidades. Inclua as saídas esperadas e as mensagens de erro para que um iniciante possa distinguir o sucesso da falha. Sempre que possível, mostre como comprovar que a alteração é eficaz além da compilação (por exemplo, por meio de um pequeno cenário de ponta a ponta, uma invocação de CLI ou uma transcrição de solicitação/resposta HTTP). Indique os comandos de teste exatos apropriados para o conjunto de ferramentas do projeto e como interpretar seus resultados.

Capture evidências. Quando suas etapas gerarem saída de terminal, pequenas diferenças ou logs, inclua-os dentro do bloco delimitador como exemplos indentados. Mantenha-os concisos e focados no que comprova o sucesso. Se precisar incluir um patch, prefira diferenças com escopo de arquivo ou pequenos trechos que um leitor possa reproduzir seguindo suas instruções, em vez de colar grandes blocos de código.


## Marcos (Milestones)

Os marcos são narrativos, não burocráticos. Se você dividir o trabalho em marcos, introduza cada um com um breve parágrafo que descreva o escopo, o que existirá ao final do marco que não existia antes, os comandos a serem executados e a aceitação esperada. Mantenha a leitura fluida como uma história: objetivo, trabalho, resultado, comprovação. Progresso e marcos são distintos: os marcos contam a história, o progresso acompanha o trabalho detalhado. Ambos devem existir. Nunca abrevie um marco apenas por uma questão de brevidade, não omita detalhes que possam ser cruciais para uma implementação futura.

Cada marco deve ser verificável de forma independente e implementar incrementalmente o objetivo geral do plano de execução.

## Planos dinâmicos e decisões de design

* Os Planos de Execução são documentos vivos. À medida que você toma decisões importantes de design, atualize o plano para registrar tanto a decisão quanto o raciocínio por trás dela. Registre todas as decisões na seção "Registro de Decisões".
* Os Planos de Execução devem conter e manter uma seção "Progresso", uma seção "Surpresas e Descobertas", um "Registro de Decisões" e uma seção "Resultados e Retrospectiva". Estas não são opcionais.
* Quando você descobrir comportamentos do otimizador, compensações de desempenho, bugs inesperados ou semântica inversa/não aplicada que moldaram sua abordagem, registre essas observações na seção "Surpresas e Descobertas" com breves trechos de evidência (saídas de testes são ideais).

* Se você mudar de rumo durante a implementação, documente o motivo no "Registro de Decisões" e reflita as implicações em "Progresso". Os planos são guias para o próximo colaborador, assim como listas de verificação para você.
* Ao concluir uma tarefa importante ou o plano completo, escreva uma entrada de "Resultados e Retrospectiva" resumindo o que foi alcançado, o que ainda precisa ser feito e as lições aprendidas.

# Marcos de prototipagem e implementações paralelas

É aceitável — e muitas vezes incentivado — incluir marcos de prototipagem explícitos quando eles reduzem o risco de uma mudança maior. Exemplos: adicionar um operador de baixo nível a uma dependência para validar a viabilidade ou explorar duas ordens de composição enquanto mede os efeitos do otimizador. Mantenha os protótipos aditivos e testáveis. Rotule claramente o escopo como "prototipagem"; descreva como executar e observar os resultados; e declare os critérios para promover ou descartar o protótipo.

Prefira alterações de código aditivas seguidas por subtrações que mantenham os testes passando. Implementações paralelas (por exemplo, manter um adaptador junto com um caminho antigo durante a migração) são aceitáveis ​​quando reduzem o risco ou permitem que os testes continuem passando durante uma grande migração. Descreva como validar ambos os caminhos e como desativar um deles com segurança por meio de testes. Ao trabalhar com várias bibliotecas ou áreas de funcionalidades novas, considere criar protótipos que avaliem a viabilidade dessas funcionalidades _independentemente_ umas das outras, comprovando que a biblioteca externa funciona conforme o esperado e implementa as funcionalidades de que precisamos de forma isolada.

## `Estrutura de um ExecPlan`

    # <Short, action-oriented description> | <Descrição curta e objetiva>

    Este Plano Executivo é um documento vivo. As seções "Progresso"/`Progress`, "Surpresas e Descobertas"/`Surprises & Discoveries`, "Registro de Decisões"/`Decision Log` e "Resultados e Retrospectiva"/`Outcomes & Retrospective` devem ser mantidas atualizadas à medida que o trabalho avança.

    Se o arquivo PLANS.md for incluído no repositório, indique o caminho para esse arquivo aqui a partir da raiz do repositório e observe que este documento deve ser mantido de acordo com o PLANS.md.
    
    # Purpose / Big Picture

    Explique em poucas frases o que o usuário ganha com essa mudança e como ele poderá vê-la funcionando. Descreva o comportamento visível ao usuário que você irá habilitar.

    ## Progress

    Use uma lista com caixas de seleção para resumir as etapas detalhadas. Cada ponto de parada deve ser documentado aqui, mesmo que isso exija dividir uma tarefa parcialmente concluída em duas ("concluída" vs. "restante"). Esta seção deve sempre refletir o estado atual do trabalho.

    - [x] (2025-10-01 13:00Z) Exemplo de etapa concluída.
    - [ ] Exemplo de etapa incompleta.
    - [ ] Exemplo de etapa parcialmente concluída (concluída: X; restante: Y).

    Use registros de data e hora para medir as taxas de progresso.

    ## Surprises & Discoveries

    Documente comportamentos inesperados, erros, otimizações ou insights descobertos durante a implementação. Forneça evidências concisas.

    - Observação: …

    - Evidência: …

    ## Decision Log
    Registre todas as decisões tomadas durante a elaboração do plano no seguinte formato:

    - Decisão: …
    Justificativa: …
    Data/Autor: …

    ## Outcomes & Retrospective

    Resuma os resultados, as lacunas e as lições aprendidas nos principais marcos ou na conclusão. Compare o resultado com o objetivo inicial.

    ## Context and Orientation

    Descreva o estado atual relevante para esta tarefa como se o leitor não soubesse nada. Nomeie os arquivos e módulos principais com o caminho completo. Defina qualquer termo não óbvio que você usará. Não faça referência a planos anteriores.
    
    ## Plan of Work

    Descreva, em prosa, a sequência de edições e adições. Para cada edição, nomeie o arquivo e a localização (função, módulo) e o que foi inserido ou alterado. Seja objetivo e conciso.

    ## Concrete Steps
    
    Indique os comandos exatos a serem executados e o local onde devem ser executados (diretório de trabalho). Quando um comando gerar uma saída, mostre uma breve transcrição esperada para que o leitor possa comparar. Esta seção deve ser atualizada conforme o trabalho avança.

    ## Validation and Acceptance

    Descreva como iniciar ou testar o sistema e o que observar. Expresse a aceitação como comportamento, com entradas e saídas específicas. Se houver testes envolvidos, diga "execute <comando de teste do projeto> e espere que <N> seja aprovado; o novo teste <nome> falha antes da alteração e é aprovado depois".

    ## Idempotence and Recovery

    Se as etapas puderem ser repetidas com segurança, indique isso. Se uma etapa for arriscada, forneça uma maneira segura de tentar novamente ou reverter o processo. Mantenha o ambiente limpo após a conclusão.

    ## Artifacts and Notes

    Inclua as transcrições, diferenças ou trechos mais importantes como exemplos recuados. Seja conciso e foque no que comprova o sucesso.

    ## Interfaces and Dependencies

    Seja prescritivo. Nomeie as bibliotecas, módulos e serviços a serem usados ​​e explique o porquê. Especifique os tipos, traits/interfaces e assinaturas de função que devem existir ao final do milestone. Prefira nomes e caminhos estáveis, como `crate::module::function` ou `package.submodule.Interface`. Exemplo:

    Em crates/foo/planner.rs, defina:

    pub trait Planner {
    fn plan(&self, observed: &Observed) -> Vec<Action>;
    }


Seguindo as orientações acima, um único agente sem estado — ou um leigo humano — poderá ler seu Plano Executivo do início ao fim e produzir um resultado funcional e observável. Esse é o padrão: AUTÔNOMO, AUTOSSUFICIENTE, GUIA PARA NOVATOS, FOCADO EM RESULTADOS.

Ao revisar um plano, você deve garantir que as alterações sejam refletidas de forma abrangente em todas as seções, incluindo as seções do documento dinâmico, e deve escrever uma nota na parte inferior do plano descrevendo a alteração e o motivo. Os Planos Executivos devem descrever não apenas o que, mas também o porquê de quase tudo.


## Objetivo Final

Permitir que qualquer pessoa consiga implementar e validar a funcionalidade apenas com este documento.

link para artigo oficial: https://github.com/betim009/openai-cookbook/blob/main/articles/codex_exec_plans.md

