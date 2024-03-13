#  :man_technologist::date::bar_chart: Painel Administrativo

Aplicação de Painel Administrativo que está sendo desenvolvido para conclusão do curso **Mentoria Angular Pro**.

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **Este workspace foi gerado pelo [Build System Nx.](https://nx.dev)** ✨

## :construction: Prototipo de Alta Fidelidade do Painel Administrativo
Design elaborado pela equipe de UX com o objetivo de aprimorar a integração, dinamismo e usabilidade para o cliente final, refletido no protótipo de alta fidelidade disponível abaixo:

🎋 ✨ [Figma](https://www.figma.com/file/5ctQUXSlJjjYLdXZ6T6LwA/Untitled?type=design&node-id=0%3A1&mode=design&t=NkjlXNNK0jhWUIuA-1)

## :construction: Setup do projeto
### :wrench: Pré Requisitos

1. Instalar [Node.js](https://nodejs.org/en/).
2. Instalar [Angular CLI](https://www.npmjs.com/package/@angular/cli).
3. Instalar [Git Bash](https://git-scm.com/downloads)
4. Clonar o Projeto (git clone https://github.com/FelipeDuarteLuna/painel-administrativo.git).
5. Acessar o diretório do projeto Clonado. (**cd painel-administrativo**)
6.  Instalar as dependências do projeto a partir do arquivo **package.json**, abrir o projeto no VS CODE e no terminal execute o comando:
```
npm install
```

## :fire: Iniciando a Aplicação do projeto localmente.

```
npm start
```

Ou

```
npx nx serve
```

O projeto será servido por padrão em http://localhost:4200/.

## Executar tarefas independentes

```
npx nx <NOME_DA_TAREFA> <NOME_DO_MODULO>
```

Exemplos:

```
npx nx test ecommerce
npx nx lint modules-layout
```

## Visualizar Dependency Graph

```
npx nx graph
```
Exemplo das Lib's criadas e as Dependências:
![image](https://github.com/FelipeDuarteLuna/painel-administrativo/assets/29357935/57fb4546-5fd1-4613-96fe-2cc2155e2936)

## Executar tarefas somente do que foi afetado

```
npx nx affected:<NOME_DA_TAREFA>
```

Exemplos:

```
npx nx affected:test
npx nx affected:graph
```

![image](https://github.com/FelipeDuarteLuna/painel-administrativo/assets/29357935/f1875d3e-89ff-4b30-acd0-b5cc29119638)