# 📦 Módulo 2 - Construindo Sistemas Profissionais

# 📂 Aula 04 - Organização de Projetos em TypeScript

# 📄 Capítulo 5 - Introdução ao MVC na Locadora de Games

---

# 👋 Bem-vindo!

Até agora nós criamos classes separadas, usamos `import`, `export` e começamos a relacionar objetos.

Criamos classes como:

- `Cliente`
- `Game`
- `Locacao`

Também aprendemos que uma locação pode guardar referências para um cliente e para um jogo.

Agora chegou um momento muito importante.

Nosso sistema começou a crescer.

E quando um sistema cresce, precisamos organizar melhor as responsabilidades.

É aqui que entra o **MVC**.

---

# 🎯 Objetivo do Capítulo

Neste capítulo eu quero que você entenda:

- O que é MVC.
- Por que usamos MVC.
- O que é Model.
- O que é Controller.
- O que é View.
- Como aplicar MVC de forma simples no nosso projeto.
- Como organizar a Locadora de Games usando pastas.

Não vamos complicar.

A ideia aqui é entender o MVC de forma prática, como uma forma de organizar melhor o projeto.

---

# 🤔 O Problema

Imagine que colocamos tudo dentro do `main.ts`.

```text
main.ts

Cliente
Game
Locacao
Menu
Cadastro
Listagem
Busca
Regras de locação
Regras de devolução
Console.log()
```

No começo funciona.

Mas depois de alguns dias o arquivo vira uma verdadeira gaveta bagunçada.

O sistema até roda, mas fica difícil de entender, corrigir e melhorar.

Por isso usamos organização.

E o MVC ajuda muito nisso.

---

# 🧠 O Que é MVC?

MVC significa:

```text
M - Model
V - View
C - Controller
```

Em português, podemos entender assim:

```text
Model      → representa os dados do sistema
View       → mostra informações para o usuário
Controller → controla as regras e ações do sistema
```

---

# 📚 Explicando de Forma Simples

Imagine uma lanchonete.

O cliente faz um pedido no balcão.

O atendente recebe o pedido.

A cozinha prepara o lanche.

Depois o atendente entrega para o cliente.

Podemos comparar assim:

```text
View       → balcão, onde o usuário interage
Controller → atendente, que recebe e organiza o pedido
Model      → ingredientes e produtos usados no sistema
```

No nosso sistema:

```text
View       → telas e menus do terminal
Controller → métodos de cadastro, busca, locação e devolução
Model      → Cliente, Game e Locacao
```

---

# 🧱 Model

O **Model** representa os objetos principais do sistema.

No nosso projeto, os Models serão:

```text
Cliente
Game
Locacao
```

Eles guardam os dados e representam coisas reais.

Exemplo:

```typescript
export class Cliente {
    constructor(
        public nome: string,
        public idade: number,
        public telefone: string
    ) {}
}
```

Esse arquivo não deve cuidar de menu.

Também não deve perguntar dados para o usuário.

Ele apenas representa um cliente.

---

# 🎮 Model Game

```typescript
export class Game {
    constructor(
        public nome: string,
        public plataforma: string,
        public valorLocacao: number
    ) {}

    exibirDados(): void {
        console.log(`Jogo: ${this.nome}`);
        console.log(`Plataforma: ${this.plataforma}`);
        console.log(`Valor: R$ ${this.valorLocacao.toFixed(2)}`);
    }
}
```

Aqui temos dados e um método simples para exibir informações do jogo.

---

# 📋 Model Locacao

```typescript
import { Cliente } from "./Cliente";
import { Game } from "./Game";

export class Locacao {
    constructor(
        public cliente: Cliente,
        public game: Game,
        public dataLocacao: string,
        public dataDevolucao: string,
        public devolvido: boolean = false
    ) {}

    finalizarLocacao(): void {
        this.devolvido = true;
    }
}
```

A classe `Locacao` faz associação entre `Cliente` e `Game`.

Ela guarda objetos completos, não apenas textos.

Isso é Programação Orientada a Objetos na prática.

---

# 🕹️ Controller

O **Controller** é responsável pelas ações do sistema.

Ele controla regras como:

- Cadastrar cliente.
- Cadastrar jogo.
- Fazer locação.
- Finalizar locação.
- Listar locações.
- Buscar jogos.

O Controller evita que o `main.ts` fique cheio de código.

---

# 🧩 Exemplo de Controller

Arquivo:

```text
LocadoraController.ts
```

```typescript
import { Cliente } from "../model/Cliente";
import { Game } from "../model/Game";
import { Locacao } from "../model/Locacao";

export class LocadoraController {

    public clientes: Cliente[] = [];
    public games: Game[] = [];
    public locacoes: Locacao[] = [];

    cadastrarCliente(cliente: Cliente): void {
        this.clientes.push(cliente);
        console.log("✅ Cliente cadastrado com sucesso!");
    }

    cadastrarGame(game: Game): void {
        this.games.push(game);
        console.log("🎮 Game cadastrado com sucesso!");
    }

    fazerLocacao(
        cliente: Cliente,
        game: Game,
        dataLocacao: string,
        dataDevolucao: string
    ): void {
        const locacao = new Locacao(
            cliente,
            game,
            dataLocacao,
            dataDevolucao
        );

        this.locacoes.push(locacao);

        console.log("📋 Locação realizada com sucesso!");
    }

    listarLocacoes(): void {
        console.log("===== LOCAÇÕES =====");

        for (const locacao of this.locacoes) {
            console.log(`Cliente: ${locacao.cliente.nome}`);
            console.log(`Jogo: ${locacao.game.nome}`);
            console.log(`Devolução: ${locacao.dataDevolucao}`);
            console.log(`Devolvido: ${locacao.devolvido ? "Sim" : "Não"}`);
            console.log("--------------------");
        }
    }
}
```

---

# 👨‍🏫 O Que Esse Controller Faz?

Ele centraliza as ações principais.

Em vez de fazer isso no `main.ts`:

```typescript
clientes.push(cliente);
games.push(game);
locacoes.push(locacao);
```

Nós fazemos:

```typescript
controller.cadastrarCliente(cliente);
controller.cadastrarGame(game);
controller.fazerLocacao(cliente, game, "08/07/2026", "15/07/2026");
```

O código fica mais limpo.

E o projeto fica mais profissional.

---

# 🖥️ View

A **View** é a parte que conversa com o usuário.

No nosso caso, como estamos trabalhando no terminal, a View será responsável por:

- Mostrar menus.
- Exibir mensagens.
- Mostrar listas.
- Pedir informações ao usuário.

Exemplo simples:

```typescript
export class MenuView {

    mostrarMenuPrincipal(): void {
        console.log("╔════════════════════════════╗");
        console.log("║ 🎮 LOCADORA DE GAMES      ║");
        console.log("╠════════════════════════════╣");
        console.log("║ 1 - Cadastrar Cliente     ║");
        console.log("║ 2 - Cadastrar Game        ║");
        console.log("║ 3 - Fazer Locação         ║");
        console.log("║ 4 - Listar Locações       ║");
        console.log("║ 5 - Sair                  ║");
        console.log("╚════════════════════════════╝");
    }
}
```

A View não deve guardar regras importantes do sistema.

Ela apenas mostra informações e recebe comandos.

---

# 📂 Estrutura de Pastas MVC

Agora nosso projeto pode ficar assim:

```text
LocadoraGames

├── src
│
│   ├── model
│   │   ├── Cliente.ts
│   │   ├── Game.ts
│   │   └── Locacao.ts
│
│   ├── controller
│   │   └── LocadoraController.ts
│
│   ├── view
│   │   └── MenuView.ts
│
│   └── main.ts
│
├── package.json
└── tsconfig.json
```

Agora cada coisa está no seu lugar.

---

# 🔁 Fluxo do MVC

O fluxo básico funciona assim:

```text
Usuário
  ↓
View
  ↓
Controller
  ↓
Model
```

Exemplo:

```text
Usuário escolhe cadastrar cliente
  ↓
MenuView mostra a opção
  ↓
LocadoraController cadastra o cliente
  ↓
Cliente é armazenado no array de clientes
```

---

# 💻 Exemplo no main.ts

```typescript
import { Cliente } from "./model/Cliente";
import { Game } from "./model/Game";
import { LocadoraController } from "./controller/LocadoraController";
import { MenuView } from "./view/MenuView";

const controller = new LocadoraController();
const menu = new MenuView();

menu.mostrarMenuPrincipal();

const cliente1 = new Cliente(
    "Carlos",
    30,
    "(51) 99999-9999"
);

const game1 = new Game(
    "FIFA 26",
    "PlayStation 5",
    15
);

controller.cadastrarCliente(cliente1);
controller.cadastrarGame(game1);

controller.fazerLocacao(
    cliente1,
    game1,
    "08/07/2026",
    "15/07/2026"
);

controller.listarLocacoes();
```

---

# 💡 Dica do Professor

Pense assim:

```text
Model      → quem é a coisa
Controller → o que eu faço com a coisa
View       → como eu mostro a coisa
```

Exemplo:

```text
Cliente é um Model.

Cadastrar cliente é tarefa do Controller.

Mostrar cliente na tela é tarefa da View.
```

Essa frase ajuda muito a entender MVC.

---

# ⚠️ Erros Mais Comuns

## Colocar menu dentro do Model

Errado:

```typescript
export class Cliente {
    mostrarMenuCliente(): void {
        console.log("1 - Cadastrar Cliente");
    }
}
```

Cliente não deve cuidar de menu.

---

## Colocar regras no main.ts

O `main.ts` deve iniciar o sistema.

Ele não deve concentrar todas as regras.

---

## Misturar tudo no Controller

O Controller controla ações, mas não precisa ser bagunçado.

Se o sistema crescer muito, podemos criar vários controllers.

Exemplo:

```text
ClienteController
GameController
LocacaoController
```

---

# 🧠 Exercício 1

Organize o projeto da Locadora de Games usando a estrutura:

```text
model
controller
view
main.ts
```

---

# 🧠 Exercício 2

Crie os arquivos:

```text
Cliente.ts
Game.ts
Locacao.ts
LocadoraController.ts
MenuView.ts
main.ts
```

---

# 🧠 Exercício 3

No `LocadoraController`, crie os métodos:

```text
cadastrarCliente()
cadastrarGame()
fazerLocacao()
listarLocacoes()
```

---

# 🏆 Desafio

Crie um método chamado:

```text
listarGamesDisponiveis()
```

Ele deverá mostrar todos os jogos cadastrados.

Depois crie outro método:

```text
listarClientes()
```

Ele deverá mostrar todos os clientes cadastrados.

---

# 🚀 Desafio Extra

Separe o controller em três arquivos:

```text
ClienteController.ts
GameController.ts
LocacaoController.ts
```

Cada controller deverá cuidar apenas de uma parte do sistema.

Essa organização será muito útil quando o projeto crescer.

---

# 📚 Resumo

Neste capítulo aprendemos:

- MVC significa Model, View e Controller.
- Model representa os dados do sistema.
- View mostra informações para o usuário.
- Controller controla as ações e regras.
- MVC ajuda a organizar projetos maiores.
- Nosso sistema da Locadora de Games já pode ser separado em pastas profissionais.

Parabéns! 🎉

A partir de agora nosso projeto deixa de ser apenas um conjunto de classes e começa a se parecer com um sistema profissional.
