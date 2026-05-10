# Diretrizes de AGENTS para este Repositório

Este repositório contém uma aplicação Next.js localizada na raiz do projeto. Ao
trabalhar no projeto de forma interativa com um agente (ex.: Codex CLI), siga
as diretrizes abaixo para que a experiência de desenvolvimento – em especial o
Hot Module Replacement (HMR) – continue funcionando sem problemas.

## 1. Use o Servidor de Desenvolvimento, **não** o `npm run build`

* **Sempre use `npm run dev` (ou `pnpm dev`, `yarn dev`, etc.)** ao iterar sobre a
  aplicação. Isso inicia o Next.js em modo de desenvolvimento com hot-reload ativado.
* **Não execute `npm run build` dentro da sessão do agente.** Rodar o comando de build
  de produção substitui a pasta `.next` por assets de produção, o que desativa o
  hot reload e pode deixar o servidor de desenvolvimento em estado inconsistente.
  Se um build de produção for necessário, faça-o fora do fluxo interativo com o agente.

## 2. Mantenha as Dependências Sincronizadas

Ao adicionar ou atualizar dependências, lembre-se de:

1. Atualizar o lockfile apropriado (`package-lock.json`, `pnpm-lock.yaml`, `yarn.lock`).
2. Reiniciar o servidor de desenvolvimento para que o Next.js reconheça as alterações.

## 3. Convenções de Código

* Prefira TypeScript (`.tsx`/`.ts`) para novos componentes e utilitários.
* Mantenha os estilos específicos de componente na mesma pasta do componente,
  sempre que possível.

## 4. Resumo dos Comandos Úteis

| Comando            | Finalidade                                                        |
| ------------------ | ----------------------------------------------------------------- |
| `npm run dev`      | Inicia o servidor de desenvolvimento Next.js com HMR.            |
| `npm run lint`     | Executa as verificações do ESLint.                                |
| `npm run test`     | Executa a suíte de testes (se existir).                           |
| `npm run build`    | **Build de produção – _não execute durante sessões do agente_**   |

---

Seguir estas práticas garante que o fluxo de desenvolvimento assistido por agente
permaneça rápido e confiável. Em caso de dúvida, reinicie o servidor de desenvolvimento
em vez de executar o build de produção.