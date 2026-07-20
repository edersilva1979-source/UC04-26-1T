# 🔩 Sistema de Loja de Ferragens com MVC, Menu e Terminal

## TypeScript, POO e `readline-sync`

---

# 🎯 Objetivo

Nesta aula eu vou transformar nosso sistema de loja de ferragens em uma aplicação interativa no terminal.

Vamos utilizar:

```text
TypeScript
Programação Orientada a Objetos
MVC
readline-sync
do while
switch
funções
validação
```

Por enquanto o sistema armazenará apenas:

```text
Um cliente
Um produto
Um pedido
```

Mais adiante poderemos substituir esses objetos por arrays.

---

# 📁 Estrutura do Projeto

```text
LojaFerragens

├── src
│   ├── model
│   │   ├── Cliente.ts
│   │   ├── Produto.ts
│   │   └── Pedido.ts
│   ├── controller
│   │   └── PedidoController.ts
│   ├── view
│   │   └── PedidoView.ts
│   └── main.ts
├── package.json
└── tsconfig.json
```

Cada parte possui uma responsabilidade:

```text
Model
Representa os objetos e suas regras

Controller
Controla as ações do sistema

View
Mostra informações e recebe dados

main.ts
Inicia o sistema e controla o menu
```

---

# ⚙️ Preparando o Projeto

No terminal do VS Code:

```bash
npm init -y
npm install --save-dev typescript ts-node @types/node
npm install readline-sync
npm install --save-dev @types/readline-sync
npx tsc --init
```

---

# 1. Model Cliente

Arquivo:

```text
src/model/Cliente.ts
```

```typescript
export class Cliente {
    constructor(
        public nome: string,
        public cpf: string,
        public telefone: string
    ) {}
}
```

A classe `Cliente` apenas representa os dados do cliente. Eu não coloco menus nem perguntas dentro dela.

---

# 2. Model Produto

Arquivo:

```text
src/model/Produto.ts
```

```typescript
export class Produto {
    constructor(
        public descricao: string,
        public categoria: string,
        public preco: number,
        private quantidadeEstoque: number
    ) {}

    consultarEstoque(): number {
        return this.quantidadeEstoque;
    }

    possuiEstoque(quantidade: number): boolean {
        return this.quantidadeEstoque >= quantidade;
    }

    retirarEstoque(quantidade: number): boolean {
        if (quantidade <= 0) {
            return false;
        }

        if (!this.possuiEstoque(quantidade)) {
            return false;
        }

        this.quantidadeEstoque -= quantidade;
        return true;
    }

    adicionarEstoque(quantidade: number): boolean {
        if (quantidade <= 0) {
            return false;
        }

        this.quantidadeEstoque += quantidade;
        return true;
    }

    devolverEstoque(quantidade: number): void {
        if (quantidade > 0) {
            this.quantidadeEstoque += quantidade;
        }
    }
}
```

O estoque é privado. Por isso ele só pode ser alterado por métodos da própria classe.

---

# 3. Model Pedido

Arquivo:

```text
src/model/Pedido.ts
```

```typescript
import { Cliente } from "./Cliente";
import { Produto } from "./Produto";

export class Pedido {
    constructor(
        public cliente: Cliente,
        public produto: Produto,
        public quantidade: number,
        public dataPedido: string,
        private finalizado: boolean = false,
        private cancelado: boolean = false
    ) {}

    calcularTotal(): number {
        return this.produto.preco * this.quantidade;
    }

    foiFinalizado(): boolean {
        return this.finalizado;
    }

    foiCancelado(): boolean {
        return this.cancelado;
    }

    finalizar(): boolean {
        if (this.finalizado || this.cancelado) {
            return false;
        }

        this.finalizado = true;
        return true;
    }

    cancelar(): boolean {
        if (this.cancelado || this.finalizado) {
            return false;
        }

        this.cancelado = true;
        this.produto.devolverEstoque(this.quantidade);

        return true;
    }

    consultarSituacao(): string {
        if (this.cancelado) {
            return "Cancelado";
        }

        if (this.finalizado) {
            return "Finalizado";
        }

        return "Em andamento";
    }
}
```

O pedido associa um cliente a um produto. Quando ele é cancelado, a quantidade retorna ao estoque.

---

# 4. Controller

Arquivo:

```text
src/controller/PedidoController.ts
```

```typescript
import { Cliente } from "../model/Cliente";
import { Produto } from "../model/Produto";
import { Pedido } from "../model/Pedido";

export class PedidoController {
    private cliente: Cliente | null = null;
    private produto: Produto | null = null;
    private pedido: Pedido | null = null;

    cadastrarCliente(
        nome: string,
        cpf: string,
        telefone: string
    ): Cliente {
        this.cliente = new Cliente(
            nome,
            cpf,
            telefone
        );

        return this.cliente;
    }

    cadastrarProduto(
        descricao: string,
        categoria: string,
        preco: number,
        quantidadeEstoque: number
    ): Produto | null {
        if (
            descricao.trim() === ""
            || categoria.trim() === ""
            || preco <= 0
            || quantidadeEstoque < 0
        ) {
            return null;
        }

        this.produto = new Produto(
            descricao,
            categoria,
            preco,
            quantidadeEstoque
        );

        return this.produto;
    }

    realizarPedido(
        quantidade: number,
        dataPedido: string
    ): Pedido | null {
        if (!this.cliente || !this.produto) {
            return null;
        }

        const retirou =
            this.produto.retirarEstoque(
                quantidade
            );

        if (!retirou) {
            return null;
        }

        this.pedido = new Pedido(
            this.cliente,
            this.produto,
            quantidade,
            dataPedido
        );

        return this.pedido;
    }

    finalizarPedido(): boolean {
        if (!this.pedido) {
            return false;
        }

        return this.pedido.finalizar();
    }

    cancelarPedido(): boolean {
        if (!this.pedido) {
            return false;
        }

        return this.pedido.cancelar();
    }

    adicionarEstoque(
        quantidade: number
    ): boolean {
        if (!this.produto) {
            return false;
        }

        return this.produto
            .adicionarEstoque(quantidade);
    }

    consultarSituacaoPedido(): string {
        if (!this.pedido) {
            return "Pedido inexistente";
        }

        return this.pedido.consultarSituacao();
    }

    obterCliente(): Cliente | null {
        return this.cliente;
    }

    obterProduto(): Produto | null {
        return this.produto;
    }

    obterPedido(): Pedido | null {
        return this.pedido;
    }
}
```

O Controller recebe os dados, cria os objetos e executa as regras. Ele não mostra o menu.

---

# 5. View com readline-sync

Arquivo:

```text
src/view/PedidoView.ts
```

```typescript
import * as readlineSync from "readline-sync";

import { Cliente } from "../model/Cliente";
import { Produto } from "../model/Produto";
import { Pedido } from "../model/Pedido";

export class PedidoView {
    exibirTitulo(): void {
        console.log("==================================");
        console.log("🔩 LOJA DE FERRAGENS");
        console.log("==================================");
    }

    exibirMenu(): void {
        console.log();
        console.log("╔════════════════════════════════╗");
        console.log("║      🧰 MENU PRINCIPAL        ║");
        console.log("╠════════════════════════════════╣");
        console.log("║ 1  Cadastrar cliente          ║");
        console.log("║ 2  Cadastrar produto          ║");
        console.log("║ 3  Realizar pedido            ║");
        console.log("║ 4  Exibir cliente             ║");
        console.log("║ 5  Exibir produto             ║");
        console.log("║ 6  Exibir pedido              ║");
        console.log("║ 7  Finalizar pedido           ║");
        console.log("║ 8  Cancelar pedido            ║");
        console.log("║ 9  Adicionar estoque          ║");
        console.log("║ 10 Consultar situação         ║");
        console.log("║ 11 Sair                       ║");
        console.log("╚════════════════════════════════╝");
    }

    lerOpcao(): number {
        const resposta =
            readlineSync.question(
                "Escolha uma opção: "
            );

        return Number(resposta);
    }

    lerTexto(mensagem: string): string {
        return readlineSync
            .question(mensagem)
            .trim();
    }

    lerNumero(mensagem: string): number {
        const resposta =
            readlineSync.question(mensagem);

        return Number(resposta);
    }

    pausar(): void {
        readlineSync.question(
            "\nPressione ENTER para continuar..."
        );
    }

    limparTela(): void {
        console.clear();
    }

    exibirCliente(cliente: Cliente): void {
        console.log();
        console.log("👤 CLIENTE");
        console.log(`Nome: ${cliente.nome}`);
        console.log(`CPF: ${cliente.cpf}`);
        console.log(`Telefone: ${cliente.telefone}`);
        console.log("----------------------------------");
    }

    exibirProduto(produto: Produto): void {
        console.log();
        console.log("🧰 PRODUTO");
        console.log(`Descrição: ${produto.descricao}`);
        console.log(`Categoria: ${produto.categoria}`);
        console.log(`Preço: R$ ${produto.preco.toFixed(2)}`);
        console.log(`Estoque: ${produto.consultarEstoque()}`);
        console.log("----------------------------------");
    }

    exibirPedido(pedido: Pedido): void {
        console.log();
        console.log("📋 PEDIDO");
        console.log(`Cliente: ${pedido.cliente.nome}`);
        console.log(`Produto: ${pedido.produto.descricao}`);
        console.log(`Quantidade: ${pedido.quantidade}`);
        console.log(`Data: ${pedido.dataPedido}`);
        console.log(
            `Total: R$ ${pedido.calcularTotal().toFixed(2)}`
        );
        console.log(
            `Situação: ${pedido.consultarSituacao()}`
        );
        console.log("----------------------------------");
    }

    exibirMensagem(mensagem: string): void {
        console.log();
        console.log(mensagem);
    }
}
```

A View é responsável por mostrar informações e receber dados do usuário.

---

# 6. main.ts com Menu

Arquivo:

```text
src/main.ts
```

```typescript
import { PedidoController }
    from "./controller/PedidoController";

import { PedidoView }
    from "./view/PedidoView";

const controller =
    new PedidoController();

const view =
    new PedidoView();

let opcao: number = 0;

do {
    view.limparTela();
    view.exibirTitulo();
    view.exibirMenu();

    opcao = view.lerOpcao();

    switch (opcao) {
        case 1:
            cadastrarCliente();
            break;

        case 2:
            cadastrarProduto();
            break;

        case 3:
            realizarPedido();
            break;

        case 4:
            exibirCliente();
            break;

        case 5:
            exibirProduto();
            break;

        case 6:
            exibirPedido();
            break;

        case 7:
            finalizarPedido();
            break;

        case 8:
            cancelarPedido();
            break;

        case 9:
            adicionarEstoque();
            break;

        case 10:
            consultarSituacao();
            break;

        case 11:
            view.exibirMensagem(
                "👋 Sistema encerrado."
            );
            break;

        default:
            view.exibirMensagem(
                "⚠️ Opção inválida."
            );
    }

    if (opcao !== 11) {
        view.pausar();
    }

} while (opcao !== 11);

function cadastrarCliente(): void {
    view.limparTela();

    console.log("👤 CADASTRO DE CLIENTE");

    const nome =
        view.lerTexto("Nome: ");

    const cpf =
        view.lerTexto("CPF: ");

    const telefone =
        view.lerTexto("Telefone: ");

    if (
        nome === ""
        || cpf === ""
        || telefone === ""
    ) {
        view.exibirMensagem(
            "❌ Todos os campos são obrigatórios."
        );

        return;
    }

    const cliente =
        controller.cadastrarCliente(
            nome,
            cpf,
            telefone
        );

    view.exibirMensagem(
        "✅ Cliente cadastrado com sucesso!"
    );

    view.exibirCliente(cliente);
}

function cadastrarProduto(): void {
    view.limparTela();

    console.log("🧰 CADASTRO DE PRODUTO");

    const descricao =
        view.lerTexto("Descrição: ");

    const categoria =
        view.lerTexto("Categoria: ");

    const preco =
        view.lerNumero("Preço: R$ ");

    const estoque =
        view.lerNumero(
            "Quantidade em estoque: "
        );

    const produto =
        controller.cadastrarProduto(
            descricao,
            categoria,
            preco,
            estoque
        );

    if (!produto) {
        view.exibirMensagem(
            "❌ Dados inválidos para o produto."
        );

        return;
    }

    view.exibirMensagem(
        "✅ Produto cadastrado com sucesso!"
    );

    view.exibirProduto(produto);
}

function realizarPedido(): void {
    view.limparTela();

    console.log("📋 REALIZAR PEDIDO");

    const quantidade =
        view.lerNumero(
            "Quantidade desejada: "
        );

    const dataPedido =
        view.lerTexto(
            "Data do pedido: "
        );

    const pedido =
        controller.realizarPedido(
            quantidade,
            dataPedido
        );

    if (!pedido) {
        view.exibirMensagem(
            "❌ Não foi possível realizar o pedido."
        );

        view.exibirMensagem(
            "Verifique o cliente, o produto e o estoque."
        );

        return;
    }

    view.exibirMensagem(
        "✅ Pedido realizado com sucesso!"
    );

    view.exibirPedido(pedido);
}

function exibirCliente(): void {
    view.limparTela();

    const cliente =
        controller.obterCliente();

    if (!cliente) {
        view.exibirMensagem(
            "⚠️ Nenhum cliente cadastrado."
        );

        return;
    }

    view.exibirCliente(cliente);
}

function exibirProduto(): void {
    view.limparTela();

    const produto =
        controller.obterProduto();

    if (!produto) {
        view.exibirMensagem(
            "⚠️ Nenhum produto cadastrado."
        );

        return;
    }

    view.exibirProduto(produto);
}

function exibirPedido(): void {
    view.limparTela();

    const pedido =
        controller.obterPedido();

    if (!pedido) {
        view.exibirMensagem(
            "⚠️ Nenhum pedido realizado."
        );

        return;
    }

    view.exibirPedido(pedido);
}

function finalizarPedido(): void {
    view.limparTela();

    const resultado =
        controller.finalizarPedido();

    if (!resultado) {
        view.exibirMensagem(
            "❌ Não foi possível finalizar o pedido."
        );

        return;
    }

    view.exibirMensagem(
        "✅ Pedido finalizado com sucesso!"
    );

    const pedido =
        controller.obterPedido();

    if (pedido) {
        view.exibirPedido(pedido);
    }
}

function cancelarPedido(): void {
    view.limparTela();

    const resultado =
        controller.cancelarPedido();

    if (!resultado) {
        view.exibirMensagem(
            "❌ Não foi possível cancelar o pedido."
        );

        return;
    }

    view.exibirMensagem(
        "✅ Pedido cancelado com sucesso!"
    );

    const pedido =
        controller.obterPedido();

    if (pedido) {
        view.exibirPedido(pedido);
    }
}

function adicionarEstoque(): void {
    view.limparTela();

    console.log("📦 ADICIONAR ESTOQUE");

    const quantidade =
        view.lerNumero(
            "Quantidade para adicionar: "
        );

    const resultado =
        controller.adicionarEstoque(
            quantidade
        );

    if (!resultado) {
        view.exibirMensagem(
            "❌ Não foi possível adicionar estoque."
        );

        return;
    }

    view.exibirMensagem(
        "✅ Estoque atualizado com sucesso!"
    );

    const produto =
        controller.obterProduto();

    if (produto) {
        view.exibirProduto(produto);
    }
}

function consultarSituacao(): void {
    view.limparTela();

    const situacao =
        controller
            .consultarSituacaoPedido();

    view.exibirMensagem(
        `📋 Situação: ${situacao}`
    );
}
```

---

# 🔁 Fluxo do Sistema

```text
Usuário escolhe uma opção

View recebe a opção

main.ts identifica a escolha

View recebe os dados

Controller executa a ação

Model aplica as regras

View mostra o resultado

Menu aparece novamente
```

---

# ▶️ Como Executar

```bash
npx ts-node src/main.ts
```

---

# ⚠️ Possível Erro no Import do readline-sync

Se esta linha gerar erro:

```typescript
import * as readlineSync
    from "readline-sync";
```

utilize:

```typescript
import readlineSync =
    require("readline-sync");
```

Use somente uma das formas.

---

# 🧠 Exercícios

## Exercício 1

Adicione o atributo `email` na classe Cliente.

Atualize:

```text
Model
Controller
View
main.ts
```

## Exercício 2

Adicione o atributo `marca` na classe Produto.

## Exercício 3

Crie uma opção para mostrar apenas o estoque atual.

## Exercício 4

Crie uma opção para alterar o telefone do cliente.

---

# 🏆 Desafio

Crie a opção:

```text
12 Aplicar desconto
```

O usuário deverá informar o percentual.

O sistema deverá mostrar:

```text
Valor original
Percentual aplicado
Valor final
```

---

# 📚 Resumo

Nesta versão nós acrescentamos:

```text
Menu
Interação pelo terminal
readline-sync
do while
switch
funções
validações
```

Mantivemos o MVC organizado:

```text
Model
Representa os objetos e suas regras

Controller
Controla as ações

View
Mostra informações e recebe dados

main.ts
Controla o fluxo do menu
```

A próxima evolução será usar arrays para cadastrar vários clientes, produtos e pedidos.
