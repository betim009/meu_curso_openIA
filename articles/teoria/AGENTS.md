# AGENTS.md

[AGENTS.md](https://agents.md) é um formato simples e aberto para orientar agentes de programação.

Pense no AGENTS.md como um README para agentes: um lugar dedicado e previsível para fornecer contexto e instruções que ajudam agentes de IA a trabalhar no seu projeto.

Abaixo está um exemplo mínimo de um arquivo AGENTS.md:

```markdown
# Exemplo de arquivo AGENTS.md

## Dicas do ambiente de desenvolvimento
- Use `pnpm dlx turbo run where <nome_do_projeto>` para ir direto a um pacote em vez de vasculhar com `ls`.
- Execute `pnpm install --filter <nome_do_projeto>` para adicionar o pacote ao seu workspace para que Vite, ESLint e TypeScript consigam enxergá-lo.
- Use `pnpm create vite@latest <nome_do_projeto> -- --template react-ts` para criar um novo pacote React + Vite com verificações de TypeScript prontas.
- Verifique o campo `name` dentro do `package.json` de cada pacote para confirmar o nome correto — ignore o da raiz.

## Instruções de teste
- Encontre o plano de CI na pasta `.github/workflows`.
- Execute `pnpm turbo run test --filter <nome_do_projeto>` para rodar todas as verificações definidas para aquele pacote.
- A partir da raiz do pacote você pode simplesmente chamar `pnpm test`. O commit deve passar em todos os testes antes de ser mergeado.
- Para focar em uma etapa, adicione o padrão do Vitest: `pnpm vitest run -t "<nome do teste>"`.
- Corrija quaisquer erros de teste ou de tipagem até que toda a suíte esteja verde.
- Após mover arquivos ou alterar imports, execute `pnpm lint --filter <nome_do_projeto>` para garantir que as regras do ESLint e do TypeScript ainda passem.
- Adicione ou atualize testes para o código que você alterar, mesmo que ninguém tenha pedido.

## Instruções de PR
- Formato do título: [<nome_do_projeto>] <Título>
- Sempre execute `pnpm lint` e `pnpm test` antes de fazer o commit.
```

## Website

Este repositório também inclui um site básico em Next.js hospedado em https://agents.md/ que explica os objetivos do projeto de forma simples, com alguns exemplos.

### Executando o app localmente
1. Instale as dependências:
   ```bash
   pnpm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   pnpm run dev
   ```
3. Abra o navegador e acesse http://localhost:3000