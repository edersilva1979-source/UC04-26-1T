# Aula Prática: Sistema de Pedidos de uma Loja de Ferragens com MVC 🔩

Nesta etapa, vamos organizar um sistema de pedidos utilizando o padrão MVC.

Ainda não utilizaremos:

1. Menu no terminal

2. `readline sync`

3. Arrays

4. Banco de dados

5. Arquivos JSON

Nosso objetivo será entender como as classes ficam separadas e como cada parte do MVC possui uma responsabilidade.

Neste primeiro exemplo, o sistema armazenará apenas:

```text
Um cliente

Um produto

Um pedido
```

Mais adiante, poderemos utilizar arrays para cadastrar vários clientes, produtos e pedidos.

# 1. Estrutura do projeto

Crie a seguinte estrutura de pastas:

```text
LojaFerragens

src
    model
        Cliente.ts
        Produto.ts
        Pedido.ts

    controller
        PedidoController.ts

    view
        PedidoView.ts

    main.ts
```

Eu organizo o projeto dessa forma porque cada pasta possui uma responsabilidade.

```text
model
Representa os objetos e suas regras principais

controller
Controla as ações do sistema

view
Mostra as informações para o usuário

main.ts
Inicia o programa
```

# 2. Classe Cliente

Crie o arquivo:

```text
src/model/Cliente.ts
```

Código completo:

```typescript
export class Cliente {

    constructor(
        public nome: string,
        public cpf: string,
        public telefone: string
    ) {}

}
```

# 3. Entendendo a classe Cliente

Nesta classe eu represento uma pessoa que compra produtos na loja de ferragens.

O cliente possui:

```text
nome

cpf

telefone
```

Eu utilizo `export` porque essa classe será utilizada em outros arquivos.

```typescript
export class Cliente
```

O `constructor` recebe as informações necessárias para criar um cliente.

```typescript
constructor(
    public nome: string,
    public cpf: string,
    public telefone: string
) {}
```

Eu não coloco mensagens com `console.log()` dentro da classe Cliente.

A responsabilidade de mostrar as informações será da View.

# 4. Classe Produto

Crie o arquivo:

```text
src/model/Produto.ts
```

Código completo:

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

    possuiEstoque(
        quantidadeDesejada: number
    ): boolean {

        return this.quantidadeEstoque
            >= quantidadeDesejada;
    }

    retirarEstoque(
        quantidade: number
    ): boolean {

        if (!this.possuiEstoque(quantidade)) {
            return false;
        }

        this.quantidadeEstoque
            -= quantidade;

        return true;
    }

    devolverEstoque(
        quantidade: number
    ): void {

        this.quantidadeEstoque
            += quantidade;
    }

}
```

# 5. Entendendo a classe Produto

Nesta classe representamos um produto vendido pela loja.

Cada produto possui:

```text
descrição

categoria

preço

quantidade em estoque
```

Exemplos de produtos:

```text
Martelo

Parafuso

Furadeira

Chave de fenda

Trena

Serrote
```

O atributo `quantidadeEstoque` é privado.

```typescript
private quantidadeEstoque: number
```

Isso significa que ele não deve ser alterado diretamente fora da classe.

Protejemos esse atributo porque o estoque deve mudar apenas através dos métodos corretos.

# 6. Método consultarEstoque

```typescript
consultarEstoque(): number {
    return this.quantidadeEstoque;
}
```

Este método retorna a quantidade disponível no estoque.

Exemplo:

```text
25 unidades
```

# 7. Método possuiEstoque

```typescript
possuiEstoque(
    quantidadeDesejada: number
): boolean {

    return this.quantidadeEstoque
        >= quantidadeDesejada;
}
```

Este método verifica se existe quantidade suficiente no estoque.

Se houver estoque suficiente, ele retorna:

```text
true
```

Caso contrário:

```text
false
```

# 8. Método retirarEstoque

```typescript
retirarEstoque(
    quantidade: number
): boolean {

    if (!this.possuiEstoque(quantidade)) {
        return false;
    }

    this.quantidadeEstoque
        -= quantidade;

    return true;
}
```

Primeiro verificamos se existe estoque suficiente.

```typescript
if (!this.possuiEstoque(quantidade))
```

Se não existir estoque suficiente, o método retorna `false`.

```typescript
return false;
```

Quando existe estoque, retiramos a quantidade vendida.

```typescript
this.quantidadeEstoque
    -= quantidade;
```

Depois retorno `true`.

```typescript
return true;
```

# 9. Método devolverEstoque

```typescript
devolverEstoque(
    quantidade: number
): void {

    this.quantidadeEstoque
        += quantidade;
}
```

Este método poderá ser utilizado quando um pedido for cancelado.

Nesse caso, o produto volta para o estoque.

# 10. Classe Pedido

Crie o arquivo:

```text
src/model/Pedido.ts
```

Código completo:

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

        return this.produto.preco
            * this.quantidade;
    }

    foiFinalizado(): boolean {
        return this.finalizado;
    }

    foiCancelado(): boolean {
        return this.cancelado;
    }

    finalizar(): boolean {

        if (
            this.finalizado
            || this.cancelado
        ) {
            return false;
        }

        this.finalizado = true;

        return true;
    }

    cancelar(): boolean {

        if (
            this.cancelado
            || this.finalizado
        ) {
            return false;
        }

        this.cancelado = true;

        this.produto.devolverEstoque(
            this.quantidade
        );

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

# 11. Entendendo a classe Pedido

A classe Pedido representa a ligação entre:

```text
Cliente

Produto
```

Por isso ela importa essas duas classes.

```typescript
import { Cliente } from "./Cliente";
import { Produto } from "./Produto";
```

Dentro do pedido eu armazeno objetos completos.

```typescript
public cliente: Cliente

public produto: Produto
```

Isso significa que o pedido conhece todas as informações do cliente e do produto.

# 12. Método calcularTotal

```typescript
calcularTotal(): number {

    return this.produto.preco
        * this.quantidade;
}
```

Este método calcula o valor total do pedido.

Exemplo:

```text
Preço do martelo: R$ 45,00

Quantidade: 2

Total: R$ 90,00
```

O cálculo será:

```typescript
45 * 2
```

# 13. Método foiFinalizado

```typescript
foiFinalizado(): boolean {
    return this.finalizado;
}
```

Este método informa se o pedido já foi finalizado.

# 14. Método foiCancelado

```typescript
foiCancelado(): boolean {
    return this.cancelado;
}
```

Este método informa se o pedido foi cancelado.

# 15. Método finalizar

```typescript
finalizar(): boolean {

    if (
        this.finalizado
        || this.cancelado
    ) {
        return false;
    }

    this.finalizado = true;

    return true;
}
```

Primeiro verificamos se o pedido já foi finalizado ou cancelado.

Se uma dessas situações for verdadeira, o método retorna `false`.

Caso contrário, o pedido é marcado como finalizado.

```typescript
this.finalizado = true;
```

# 16. Método cancelar

```typescript
cancelar(): boolean {

    if (
        this.cancelado
        || this.finalizado
    ) {
        return false;
    }

    this.cancelado = true;

    this.produto.devolverEstoque(
        this.quantidade
    );

    return true;
}
```

Quando o pedido é cancelado, a quantidade do produto deve voltar para o estoque.

Por isso eu utilizo:

```typescript
this.produto.devolverEstoque(
    this.quantidade
);
```

Perceba que um objeto está chamando um método de outro objeto.

Isso é Orientação a Objetos funcionando na prática.

# 17. Método consultarSituacao

```typescript
consultarSituacao(): string {

    if (this.cancelado) {
        return "Cancelado";
    }

    if (this.finalizado) {
        return "Finalizado";
    }

    return "Em andamento";
}
```

Este método retorna a situação atual do pedido.

As possibilidades são:

```text
Em andamento

Finalizado

Cancelado
```

# 18. Controller do sistema

Crie o arquivo:

```text
src/controller/PedidoController.ts
```

Código completo:

```typescript
import { Cliente }
    from "../model/Cliente";

import { Produto }
    from "../model/Produto";

import { Pedido }
    from "../model/Pedido";

export class PedidoController {

    private cliente:
        Cliente | null = null;

    private produto:
        Produto | null = null;

    private pedido:
        Pedido | null = null;

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
    ): Produto {

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

        if (
            !this.cliente
            || !this.produto
        ) {
            return null;
        }

        const retiradaPermitida =
            this.produto.retirarEstoque(
                quantidade
            );

        if (!retiradaPermitida) {
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

# 19. Entendendo o Controller

O Controller controla as ações do sistema.

Ele não mostra menus.

Ele também não exibe informações diretamente no terminal.

Sua responsabilidade é criar e controlar os objetos.

Como ainda não usamos arrays, ele guarda apenas:

```text
um cliente

um produto

um pedido
```

Por isso eu criei:

```typescript
private cliente:
    Cliente | null = null;

private produto:
    Produto | null = null;

private pedido:
    Pedido | null = null;
```

O tipo:

```typescript
Cliente | null
```

significa que o atributo pode guardar:

```text
um objeto Cliente

ou

nenhum cliente
```

# 20. Método cadastrarCliente

```typescript
cadastrarCliente(
    nome: string,
    cpf: string,
    telefone: string
): Cliente
```

O Controller recebe os dados e cria o objeto Cliente.

```typescript
this.cliente = new Cliente(
    nome,
    cpf,
    telefone
);
```

Depois retorna o objeto criado.

```typescript
return this.cliente;
```

# 21. Método cadastrarProduto

O mesmo processo acontece com o produto.

```typescript
this.produto = new Produto(
    descricao,
    categoria,
    preco,
    quantidadeEstoque
);
```

A criação do objeto Produto acontece dentro do Controller.

# 22. Método realizarPedido

Primeiro eu verifico se já existe um cliente e um produto.

```typescript
if (
    !this.cliente
    || !this.produto
) {
    return null;
}
```

Se um deles não existir, o pedido não poderá ser realizado.

Depois eu tento retirar a quantidade do estoque.

```typescript
const retiradaPermitida =
    this.produto.retirarEstoque(
        quantidade
    );
```

Se não houver estoque suficiente, o método retorna `null`.

```typescript
if (!retiradaPermitida) {
    return null;
}
```

Quando tudo está correto, o Controller cria o pedido.

```typescript
this.pedido = new Pedido(
    this.cliente,
    this.produto,
    quantidade,
    dataPedido
);
```

# 23. Classe View

Crie o arquivo:

```text
src/view/PedidoView.ts
```

Código completo:

```typescript
import { Cliente }
    from "../model/Cliente";

import { Produto }
    from "../model/Produto";

import { Pedido }
    from "../model/Pedido";

export class PedidoView {

    exibirTitulo(): void {

        console.log(
            "=================================="
        );

        console.log(
            "🔩 LOJA DE FERRAGENS"
        );

        console.log(
            "=================================="
        );
    }

    exibirCliente(
        cliente: Cliente
    ): void {

        console.log("👤 CLIENTE");

        console.log(
            `Nome: ${cliente.nome}`
        );

        console.log(
            `CPF: ${cliente.cpf}`
        );

        console.log(
            `Telefone: ${cliente.telefone}`
        );

        console.log(
            "----------------------------------"
        );
    }

    exibirProduto(
        produto: Produto
    ): void {

        console.log("🧰 PRODUTO");

        console.log(
            `Descrição: ${produto.descricao}`
        );

        console.log(
            `Categoria: ${produto.categoria}`
        );

        console.log(
            `Preço: R$ ${produto.preco.toFixed(2)}`
        );

        console.log(
            `Estoque: ${produto.consultarEstoque()}`
        );

        console.log(
            "----------------------------------"
        );
    }

    exibirPedido(
        pedido: Pedido
    ): void {

        console.log("📋 PEDIDO");

        console.log(
            `Cliente: ${pedido.cliente.nome}`
        );

        console.log(
            `Produto: ${pedido.produto.descricao}`
        );

        console.log(
            `Quantidade: ${pedido.quantidade}`
        );

        console.log(
            `Data: ${pedido.dataPedido}`
        );

        console.log(
            `Total: R$ ${pedido.calcularTotal().toFixed(2)}`
        );

        console.log(
            `Situação: ${pedido.consultarSituacao()}`
        );

        console.log(
            "----------------------------------"
        );
    }

    exibirMensagem(
        mensagem: string
    ): void {

        console.log(mensagem);
    }

}
```

# 24. Entendendo a View

A View mostra as informações no terminal.

Ela não cria clientes.

Ela não cria produtos.

Ela não realiza pedidos.

Ela apenas recebe objetos e mostra seus dados.

Por exemplo:

```typescript
exibirCliente(
    cliente: Cliente
): void
```

Esse método recebe um objeto Cliente e mostra suas informações.

O mesmo acontece com Produto e Pedido.

# 25. Arquivo main.ts

Crie o arquivo:

```text
src/main.ts
```

Código completo:

```typescript
import { PedidoController }
    from "./controller/PedidoController";

import { PedidoView }
    from "./view/PedidoView";

const controller =
    new PedidoController();

const view =
    new PedidoView();

view.exibirTitulo();

const cliente =
    controller.cadastrarCliente(
        "Carlos Oliveira",
        "123.456.789 00",
        "(51) 99999 9999"
    );

view.exibirCliente(cliente);

const produto =
    controller.cadastrarProduto(
        "Martelo profissional",
        "Ferramentas manuais",
        45,
        10
    );

view.exibirProduto(produto);

const pedido =
    controller.realizarPedido(
        2,
        "2026 07 14"
    );

if (pedido) {

    view.exibirMensagem(
        "✅ Pedido realizado com sucesso!"
    );

    view.exibirPedido(pedido);

} else {

    view.exibirMensagem(
        "❌ Não foi possível realizar o pedido."
    );
}

view.exibirProduto(produto);

const finalizacaoRealizada =
    controller.finalizarPedido();

if (finalizacaoRealizada) {

    view.exibirMensagem(
        "✅ Pedido finalizado com sucesso!"
    );

} else {

    view.exibirMensagem(
        "❌ Não foi possível finalizar o pedido."
    );
}

const pedidoAtualizado =
    controller.obterPedido();

if (pedidoAtualizado) {
    view.exibirPedido(pedidoAtualizado);
}
```

# 26. Fluxo do sistema

O sistema funciona nesta ordem:

```text
main.ts
cria o Controller e a View

Controller
cria o Cliente

View
mostra o Cliente

Controller
cria o Produto

View
mostra o Produto

Controller
cria o Pedido

Produto
retira a quantidade do estoque

View
mostra o Pedido

Controller
finaliza o Pedido

View
mostra o resultado
```

# 27. Por que os objetos são criados no Controller?

Eu crio os objetos dentro do Controller porque ele controla as ações do sistema.

Veja este exemplo:

```typescript
controller.cadastrarCliente(
    "Carlos Oliveira",
    "123.456.789 00",
    "(51) 99999 9999"
);
```

O `main.ts` apenas solicita o cadastro.

Quem realmente cria o objeto é o Controller.

```typescript
this.cliente = new Cliente(
    nome,
    cpf,
    telefone
);
```

Isso mantém as responsabilidades organizadas.

# 28. Responsabilidade de cada parte

## Model

```text
Cliente

Produto

Pedido
```

Representam os dados e as regras dos próprios objetos.

## Controller

```text
PedidoController
```

Cria e controla os objetos.

## View

```text
PedidoView
```

Mostra informações no terminal.

## main.ts

Inicia e testa o sistema.

# 29. Resultado esperado

Ao executar o programa, o terminal exibirá algo parecido com:

```text
==================================
🔩 LOJA DE FERRAGENS
==================================

👤 CLIENTE
Nome: Carlos Oliveira
CPF: 123.456.789 00
Telefone: (51) 99999 9999
----------------------------------

🧰 PRODUTO
Descrição: Martelo profissional
Categoria: Ferramentas manuais
Preço: R$ 45.00
Estoque: 10
----------------------------------

✅ Pedido realizado com sucesso!

📋 PEDIDO
Cliente: Carlos Oliveira
Produto: Martelo profissional
Quantidade: 2
Data: 2026 07 14
Total: R$ 90.00
Situação: Em andamento
----------------------------------

🧰 PRODUTO
Descrição: Martelo profissional
Categoria: Ferramentas manuais
Preço: R$ 45.00
Estoque: 8
----------------------------------

✅ Pedido finalizado com sucesso!

📋 PEDIDO
Cliente: Carlos Oliveira
Produto: Martelo profissional
Quantidade: 2
Data: 2026 07 14
Total: R$ 90.00
Situação: Finalizado
```

# 30. Como executar

Dentro da pasta do projeto, execute:

```bash
npx ts node src/main.ts
```

Dependendo da configuração do projeto, o comando mais comum será:

```bash
npx ts-node src/main.ts
```

# 31. Exercícios para os alunos 🧠

## Exercício 1

Adicione o atributo:

```text
email
```

na classe Cliente.

Depois atualize:

```text
Controller

View

main.ts
```

## Exercício 2

Adicione o atributo:

```text
marca
```

na classe Produto.

Exemplos:

```text
Tramontina

Bosch

Vonder

Makita
```

## Exercício 3

Crie na classe Produto um método chamado:

```typescript
adicionarEstoque(
    quantidade: number
): void
```

Ele deverá aumentar a quantidade disponível.

## Exercício 4

Crie na classe Pedido um método chamado:

```typescript
calcularDesconto(
    percentual: number
): number
```

Ele deverá retornar o total do pedido com desconto.

# 32. Desafio 🏆

Crie um método no Controller chamado:

```typescript
consultarSituacaoPedido(): string
```

Ele deverá retornar uma das mensagens:

```text
Pedido inexistente

Pedido em andamento

Pedido finalizado

Pedido cancelado
```

# 33. Desafio extra 🚀

Crie um atributo chamado:

```text
formaPagamento
```

na classe Pedido.

Exemplos:

```text
Dinheiro

Pix

Cartão de crédito

Cartão de débito
```

Depois mostre essa informação na View.

# 34. Resumo da aula 📚

Nesta etapa eu construí um sistema simples de pedidos para uma loja de ferragens utilizando MVC.

Nós criamos:

```text
Models

Cliente

Produto

Pedido
```

```text
Controller

PedidoController
```

```text
View

PedidoView
```

```text
Arquivo principal

main.ts
```

Também aprendemos que:

```text
Model representa os objetos

Controller controla as ações

View mostra as informações

main.ts inicia o sistema
```

Ainda não usamos arrays nem menus.

Isso foi proposital.

Primeiro eu quero que você entenda a responsabilidade de cada parte do sistema.

Na próxima evolução, poderemos utilizar arrays para cadastrar vários clientes, vários produtos e vários pedidos.

