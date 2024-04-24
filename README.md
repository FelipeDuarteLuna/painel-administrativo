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
![image](https://github.com/FelipeDuarteLuna/painel-administrativo/assets/29357935/b0f17ada-1198-47d8-b092-cb7543a4db2b)


## Executar tarefas somente do que foi afetado

```
npx nx affected:<NOME_DA_TAREFA>
```

Exemplos:

```
npx nx affected:test
npx nx affected:graph
```

![image](https://github.com/FelipeDuarteLuna/painel-administrativo/assets/29357935/871383f0-d5d3-4b9a-92e0-c7569c3ecc71)


## :microscope: Executando Testes Unitário
Para executar os testes unitários via [Jasmine](https://jasmine.github.io/) :

```
nx run Dashboard:test
```
![image](https://github.com/FelipeDuarteLuna/painel-administrativo/assets/29357935/156b4302-69aa-4df3-8850-1e8ab55bdf5c)


## :microscope: Executando Testes e2e

Executando Testes e2e pela ferramenta CYPRESS com INTERFACE:

#### Execução no console
```
npx nx e2e e2e --watch
```

![image](https://github.com/FelipeDuarteLuna/painel-administrativo/assets/29357935/511bce50-bc07-4360-8a88-018c8ad07d26)


Executando Testes e2e pela ferramenta CYPRESS localmente sem interface:

```
nx run e2e:e2e
```

![image](https://github.com/FelipeDuarteLuna/painel-administrativo/assets/29357935/504f4c70-4110-4e89-aa97-a22b4c44fc0e)


