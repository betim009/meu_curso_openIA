# Onde acrescentar novas tarefas depois que o `PLANS.md` já foi executado?

```md 
## Use principalmente estes capítulos:

| Situação                                      | Onde colocar                  |
| --------------------------------------------- | ----------------------------- |
| Nova tarefa, correção ou melhoria             | **Progress**                  |
| Explicação do que precisa ser feito           | **Plan of Work**              |
| Passo técnico/comando específico              | **Concrete Steps**            |
| Como saber se ficou certo                     | **Validation and Acceptance** |
| Decisão importante tomada                     | **Decision Log**              |
| Problema inesperado encontrado                | **Surprises & Discoveries**   |
| Arquivos alterados, logs, prints, observações | **Artifacts and Notes**       |
```

O capítulo Progress vira o centro do controle. Como seu template já trata o ExecPlan como “documento vivo” e usa checklist de feito/pendente, ele é o melhor lugar para adicionar novas demandas após cada execução.

## Regra simples

Quando quiser mandar o Codex continuar o projeto, edite assim:
```md
## Progress

- [x] Estrutura inicial criada
- [x] Tela principal implementada
- [ ] Mover frontend da raiz para /frontend
- [ ] Criar estrutura inicial do backend
- [ ] Corrigir mocks inconsistentes do dashboard
- [ ] Iniciar modelagem do banco de dados
- [ ] Configurar Docker para frontend, backend e banco

Depois detalhe melhor em:

## Plan of Work

Agora o projeto deve avançar para uma estrutura mais profissional,
separando frontend e backend, corrigindo os mocks atuais, iniciando
a modelagem do banco de dados e preparando execução via Docker.

E coloque testes em:

## Validation and Acceptance

- O frontend deve rodar dentro da pasta /frontend.
- O backend deve possuir estrutura inicial organizada.
- O dashboard deve exibir números compatíveis com os mocks.
- O projeto deve iniciar via Docker.
```

## Prompt padrão para sempre executar o PLANS.md
```md
Leia o arquivo PLANS.md inteiro antes de fazer qualquer alteração.

Trate o PLANS.md como um documento vivo de execução do projeto.

Execute o máximo possível dos itens pendentes em Progress, seguindo
Purpose / Big Picture, Context and Orientation, Plan of Work,
Concrete Steps, Validation and Acceptance, Interfaces and Dependencies
e demais seções do documento.

Durante a execução:

- Não ignore itens pendentes de Progress.
- Atualize o próprio PLANS.md conforme avançar.
- Marque como [x] apenas o que foi realmente concluído.
- Registre decisões importantes em Decision Log.
- Registre problemas, descobertas e inconsistências em Surprises & Discoveries.
- Registre arquivos alterados, comandos usados e observações em Artifacts and Notes.
- Valide o que for possível conforme Validation and Acceptance.
- Faça commits no Git ao concluir etapas relevantes, usando mensagens claras.

Não finalize apenas explicando o que faria.
Implemente o que for possível agora.

Ao final, me entregue um resumo objetivo contendo:

1. O que foi concluído
2. O que ficou pendente
3. Quais arquivos foram alterados
4. Quais comandos foram executados
5. Quais commits foram criados
6. Próximo passo recomendado
```

Você pode manter o prompt sempre igual.

O que muda de verdade é o PLANS.md, principalmente:
```md
## Progress
## Plan of Work
## Concrete Steps
## Validation and Acceptance
```