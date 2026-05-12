# O que torna uma documentação boa

A documentação coloca informações úteis na cabeça de outras pessoas. Siga estas dicas para escrever uma documentação melhor.

### Torne os documentos fáceis de escanear

Poucos leitores leem de forma linear, do início ao fim. Eles vão pular entre as partes, tentando identificar qual trecho resolve o problema deles, se é que algum resolve. Para reduzir o tempo de busca e aumentar as chances de sucesso, torne os documentos fáceis de escanear.

**Divida o conteúdo em seções com títulos.** Os títulos das seções funcionam como sinalizadores, indicando ao leitor se ele deve se aprofundar ou seguir em frente.

**Prefira títulos com frases informativas em vez de substantivos abstratos.** Por exemplo, se você usar um título como "Resultados", o leitor precisará mergulhar no texto a seguir para descobrir quais são, de fato, esses resultados. Por outro lado, se você usar o título "O streaming reduziu o tempo até o primeiro token em 50%", a informação é transmitida imediatamente, sem o ônus de um salto extra.

**Inclua um índice.** Os índices ajudam os leitores a encontrar informações mais rapidamente, assim como tabelas hash têm buscas mais rápidas do que listas encadeadas. Os índices também têm um segundo benefício, frequentemente ignorado: eles dão ao leitor pistas sobre o documento, ajudando-o a avaliar se vale a pena lê-lo.

**Mantenha os parágrafos curtos.** Parágrafos mais curtos são mais fáceis de escanear. Se você tiver um ponto essencial, considere colocá-lo em seu próprio parágrafo de uma única frase para reduzir as chances de que ele passe despercebido. Parágrafos longos podem enterrar informações.

**Comece parágrafos e seções com frases temáticas curtas que forneçam uma prévia independente.** Quando as pessoas escaneiam, elas olham de forma desproporcional para a primeira palavra, primeira linha e primeira frase de uma seção. Escreva essas frases de modo que não dependam do texto anterior. Por exemplo, considere a primeira frase "Construindo sobre isso, vamos agora falar sobre uma forma mais rápida." Essa frase não terá sentido para alguém que não leu o parágrafo anterior. Em vez disso, escreva-a de forma que possa ser compreendida de maneira independente: por exemplo, "Bancos de dados vetoriais podem acelerar a busca por embeddings."

**Coloque as palavras-chave do tema no início das frases temáticas.** Os leitores escaneiam com mais eficiência quando precisam ler apenas uma ou duas palavras para saber do que trata um parágrafo. Portanto, ao escrever frases temáticas, prefira colocar o tema no início da frase, e não no final. Por exemplo, imagine que você está escrevendo um parágrafo sobre bancos de dados vetoriais no meio de um longo artigo sobre busca por embeddings. Em vez de escrever "A busca por embeddings pode ser acelerada por bancos de dados vetoriais", prefira "Bancos de dados vetoriais aceleram a busca por embeddings." A segunda frase é melhor para escanear, porque coloca o tema do parágrafo no início.

**Coloque as conclusões logo no início.** Posicione as informações mais importantes no topo dos documentos e seções. Não faça uma grande construção socrática. Não apresente seu procedimento antes dos resultados.

**Use marcadores e tabelas.** Listas com marcadores e tabelas tornam os documentos mais fáceis de escanear. Use-os com frequência.

**Destaque em negrito o texto importante.** Não tenha medo de usar negrito em textos importantes para ajudar os leitores a encontrá-los.

### Escreva bem

Textos mal escritos são cansativos de ler. Minimize o esforço dos leitores escrevendo bem.

**Mantenha as frases simples.** Divida frases longas em duas. Corte advérbios. Elimine palavras e expressões desnecessárias. Use o modo imperativo, quando aplicável. Faça o que os livros de redação recomendam.

**Escreva frases que possam ser interpretadas sem ambiguidade.** Por exemplo, considere a frase "Intitule as seções com frases." Quando um leitor lê a palavra "Intitule", seu cérebro ainda não sabe se ela será um substantivo, verbo ou adjetivo. É necessário um certo esforço mental para acompanhar o restante da frase, e isso pode causar uma hesitação se o cérebro fizer uma previsão errada de significado. Prefira frases que possam ser interpretadas com mais facilidade (por exemplo, "Escreva os títulos das seções como frases"), mesmo que sejam mais longas. Da mesma forma, evite locuções nominais como "aviso de exercício de liberação de bicicleta", que podem exigir esforço extra para interpretar.

**Evite frases com ramificação à esquerda.** As árvores linguísticas mostram como as palavras se relacionam entre si nas frases. Árvores com ramificação à esquerda exigem que os leitores mantenham mais elementos na memória do que frases com ramificação à direita, de forma análoga à busca em largura versus busca em profundidade. Um exemplo de frase com ramificação à esquerda é "Você precisa de farinha, ovos, leite, manteiga e uma pitada de sal para fazer panquecas." Nessa frase, você só descobre ao que "você precisa" se conecta ao chegar ao final. Uma versão com ramificação à direita, mais fácil de ler, seria "Para fazer panquecas, você precisa de farinha, ovos, leite, manteiga e uma pitada de sal." Fique atento a frases nas quais o leitor precisa "segurar" uma palavra por um tempo e veja se é possível reformulá-las.

**Evite pronomes demonstrativos (por exemplo, "isso"), especialmente entre frases.** Por exemplo, em vez de dizer "Baseando-nos em nossa discussão sobre o tópico anterior, vamos agora discutir a chamada de funções", tente "Baseando-nos na formatação de mensagens, vamos agora discutir a chamada de funções." A segunda frase é mais fácil de entender porque não sobrecarrega o leitor com a necessidade de recordar o tópico anterior. Procure oportunidades para eliminar completamente os pronomes demonstrativos: por exemplo, "Agora vamos discutir a chamada de funções."

**Seja consistente.** O cérebro humano é um extraordinário reconhecedor de padrões. Inconsistências irão irritar ou distrair os leitores. Se usamos Letras Maiúsculas em Títulos em todo o lugar, use Letras Maiúsculas em Títulos. Se usamos vírgulas finais em todo o lugar, use vírgulas finais. Se todos os notebooks do Cookbook são nomeados com underscores e letras minúsculas, use underscores e letras minúsculas. Não faça nada que leve um leitor a pensar "hm, isso é estranho." Ajude-o a se concentrar no conteúdo, não nas suas inconsistências.

**Não diga aos leitores o que eles pensam ou o que devem fazer.** Evite frases como "Agora você provavelmente quer entender como chamar uma função" ou "A seguir, você precisará aprender a chamar uma função." Ambos os exemplos pressupõem o estado mental do leitor, o que pode irritá-lo ou prejudicar nossa credibilidade. Use expressões que evitem presumir o estado do leitor. Por exemplo: "Para chamar uma função, …"

### Seja amplamente útil

As pessoas chegam à documentação com diferentes níveis de conhecimento, proficiência no idioma e paciência. Mesmo que nosso público-alvo sejam desenvolvedores experientes, devemos tentar escrever documentos úteis para todos.

**Escreva de forma simples.** Explique as coisas de forma mais simples do que você acha necessário. Muitos leitores podem não ter o inglês como primeira língua. Muitos leitores podem estar bastante confusos com a terminologia técnica e ter pouca capacidade mental disponível para interpretar frases em inglês. Escreva de forma simples. (Mas não simplifique demais.)

**Evite abreviações.** Escreva as palavras por extenso. O custo para os especialistas é baixo e o benefício para os iniciantes é alto. Em vez de IF, escreva instruction following (seguimento de instruções). Em vez de RAG, escreva retrieval-augmented generation (geração aumentada por recuperação, ou meu termo preferido: o procedimento buscar-e-perguntar).

**Ofereça soluções para problemas potenciais.** Mesmo que 95% dos leitores saibam como instalar um pacote Python ou salvar variáveis de ambiente, ainda pode valer a pena explicar isso de forma proativa. Incluir explicações não é custoso para os especialistas — eles podem escaneá-las rapidamente. Mas excluir explicações é custoso para os iniciantes — eles podem ficar presos ou até abandonar a leitura. Lembre-se de que até mesmo um engenheiro experiente em JavaScript ou C++ pode ser um iniciante em Python. Prefira explicar demais a explicar de menos.

**Prefira terminologia específica e precisa.** Jargão é ruim. Otimize os documentos para pessoas novas na área, e não para nós mesmos. Por exemplo, em vez de escrever "prompt", escreva "entrada". Ou em vez de escrever "limite de contexto", escreva "limite máximo de tokens". Os últimos termos são mais autoexplicativos e provavelmente melhores do que o jargão desenvolvido nos dias dos modelos base.

**Mantenha os exemplos de código gerais e reutilizáveis.** Nas demonstrações de código, tente minimizar as dependências. Não faça os usuários instalarem bibliotecas extras. Não os force a ficar consultando diferentes páginas ou seções. Tente tornar os exemplos simples e autocontidos.

**Priorize os tópicos pelo valor.** Documentação que cobre problemas comuns — por exemplo, como contar tokens — é imensamente mais valiosa do que documentação que cobre problemas raros — por exemplo, como otimizar um banco de dados de emojis. Priorize de acordo com isso.

**Não ensine maus hábitos.** Se as chaves de API não devem ser armazenadas no código, nunca compartilhe um exemplo que armazene uma chave de API no código.

**Introduza os tópicos com uma abertura ampla.** Por exemplo, se estiver explicando como programar um bom sistema de recomendação, considere abrir mencionando brevemente que recomendações estão presentes em toda a web, de vídeos no YouTube a produtos na Amazon e artigos na Wikipedia. Contextualizar um tema específico com uma abertura ampla pode ajudar as pessoas a se sentirem mais seguras antes de se aventurar em território incerto. E se o texto for bem escrito, mesmo aqueles que já conhecem o assunto podem apreciá-lo.

### Quebre estas regras quando tiver um bom motivo

No final das contas, faça o que você considera melhor. A documentação é um exercício de empatia. Coloque-se no lugar do leitor e faça o que você acha que irá ajudá-lo mais.

### Resumo Rápido

Uma boa documentação é escrita com empatia pelo leitor. Organize o conteúdo em seções com títulos claros e informativos, mantenha parágrafos curtos e coloque as informações mais importantes no início. Escreva frases simples, diretas e sem ambiguidade. Seja consistente em estilo e terminologia. Escreva de forma acessível para leitores de diferentes níveis, evite jargões e abreviações, ofereça exemplos autocontidos e antecipe dúvidas. Priorize os tópicos que geram mais valor para quem lê. E, acima de tudo, use o bom senso — as regras existem para ajudar, não para engessar.