# Separando a classe Locacao com MVC em TypeScript 🎮

## Objetivo

Nesta aula eu vou mostrar como separar uma classe grande em três partes:

```text
Model

Controller

View
```

Também criaremos o arquivo:

```text
main.ts
```

Ele será responsável por iniciar e testar o sistema.

A estrutura ficará assim:

```text
src

model
    Cliente.ts
    Game.ts
    Locacao.ts

controller
    LocacaoController.ts

view
    LocacaoView.ts

main.ts
```

## Qual era o problema da classe original?

A classe original estava realizando muitas tarefas ao mesmo tempo.

Ela armazenava dados.

Ela realizava a locação.

Ela fazia a devolução.

Ela calculava valores.

Ela verificava atrasos.

Ela mostrava informações com `console.log()`.

Quando uma classe possui responsabilidades demais, ela fica mais difícil de entender, testar e modificar.

No MVC eu separo essas responsabilidades.

```text
Model

Guarda os dados e executa os cálculos


Controller

Controla as ações do sistema


View

Mostra as informações no terminal
```

# 1. Model Locacao

Crie o arquivo:

```text
src/model/Locacao.ts
```

```typescript
import { Cliente } from "./Cliente";
import { Game } from "./Game";

export class Locacao {
    constructor(
        public id: number,
        public jogo: Game,
        public cliente: Cliente,
        public dataLocacao: string,
        public dataDevolucao: string,
        private devolvida: boolean = false
    ) {}

    foiDevolvida(): boolean {
        return this.devolvida;
    }

    marcarComoDevolvida(): void {
        this.devolvida = true;
    }

    estaAtrasada(dataAtual: string): boolean {
        if (this.devolvida) {
            return false;
        }

        const hoje = new Date(dataAtual);
        const devolucao = new Date(this.dataDevolucao);

        return hoje.getTime() > devolucao.getTime();
    }

    calcularDiasPrevistos(): number {
        const inicio = new Date(this.dataLocacao);
        const fim = new Date(this.dataDevolucao);

        const diferencaTempo =
            fim.getTime() - inicio.getTime();

        const milissegundosPorDia =
            1000 * 60 * 60 * 24;

        const dias =
            diferencaTempo / milissegundosPorDia;

        return Math.max(0, Math.ceil(dias));
    }

    calcularDiasAtraso(dataAtual: string): number {
        if (!this.estaAtrasada(dataAtual)) {
            return 0;
        }

        const devolucao =
            new Date(this.dataDevolucao);

        const hoje =
            new Date(dataAtual);

        const diferencaTempo =
            hoje.getTime() - devolucao.getTime();

        const milissegundosPorDia =
            1000 * 60 * 60 * 24;

        const dias =
            diferencaTempo / milissegundosPorDia;

        return Math.max(0, Math.ceil(dias));
    }

    calcularValorPrevisto(): number {
        return (
            this.calcularDiasPrevistos()
            * this.jogo.valorDiaria
        );
    }

    calcularValorAtraso(
        dataAtual: string
    ): number {
        return (
            this.calcularDiasAtraso(dataAtual)
            * this.jogo.valorDiaria
        );
    }

    calcularValorTotal(
        dataAtual: string
    ): number {
        return (
            this.calcularValorPrevisto()
            + this.calcularValorAtraso(dataAtual)
        );
    }

    consultarSituacao(
        dataAtual: string
    ): string {
        if (this.devolvida) {
            return "Devolvida";
        }

        if (this.estaAtrasada(dataAtual)) {
            return "Atrasada";
        }

        return "Em dia";
    }
}
```

## Explicação do Model

No Model eu deixo apenas:

```text
Dados

Cálculos

Regras da própria locação
```

Eu retirei todos os `console.log()`.

Mostrar informações não é responsabilidade do Model.

Também retirei esta chamada do construtor:

```typescript
this.locar();
```

Eu não considero uma boa prática iniciar uma ação importante automaticamente dentro do construtor.

O construtor deve criar o objeto.

O Controller decidirá quando a locação deve ser realizada.

## Método foiDevolvida

```typescript
foiDevolvida(): boolean {
    return this.devolvida;
}
```

Esse método permite consultar a situação sem acessar diretamente o atributo privado.

## Método marcarComoDevolvida

```typescript
marcarComoDevolvida(): void {
    this.devolvida = true;
}
```

Esse método altera a situação da locação.

A ação completa de devolver ficará no Controller.

## Método estaAtrasada

```typescript
estaAtrasada(dataAtual: string): boolean
```

Primeiro eu verifico se a locação já foi devolvida.

```typescript
if (this.devolvida) {
    return false;
}
```

Uma locação devolvida não deve continuar aparecendo como atrasada.

Depois comparo a data atual com a data prevista.

```typescript
return hoje.getTime() > devolucao.getTime();
```

## Método calcularDiasPrevistos

```typescript
const diferencaTempo =
    fim.getTime() - inicio.getTime();
```

O método `getTime()` transforma as datas em milissegundos.

Depois eu divido pelo total de milissegundos existentes em um dia.

```typescript
const milissegundosPorDia =
    1000 * 60 * 60 * 24;
```

O cálculo representa:

```text
1000 milissegundos em um segundo

60 segundos em um minuto

60 minutos em uma hora

24 horas em um dia
```

## Por que utilizar Math.max?

```typescript
return Math.max(0, Math.ceil(dias));
```

Eu utilizo `Math.max()` para impedir resultados negativos.

Se alguém informar uma data de devolução anterior à data de locação, o método retornará zero.

## Por que utilizar Math.ceil?

```typescript
Math.ceil(dias)
```

Esse método arredonda para cima.

Exemplo:

```text
2,2 dias

Resultado

3 dias
```

Isso é útil quando uma parte de um dia precisa ser considerada como uma diária completa.

# 2. Controller da Locacao

Crie o arquivo:

```text
src/controller/LocacaoController.ts
```

```typescript
import { Cliente }
    from "../model/Cliente";

import { Game }
    from "../model/Game";

import { Locacao }
    from "../model/Locacao";

export class LocacaoController {
    private locacao: Locacao | null = null;

    realizarLocacao(
        id: number,
        jogo: Game,
        cliente: Cliente,
        dataLocacao: string,
        dataDevolucao: string
    ): Locacao | null {
        if (!jogo.disponivel) {
            return null;
        }

        jogo.disponivel = false;

        this.locacao = new Locacao(
            id,
            jogo,
            cliente,
            dataLocacao,
            dataDevolucao
        );

        return this.locacao;
    }

    devolverJogo(): boolean {
        if (!this.locacao) {
            return false;
        }

        if (this.locacao.foiDevolvida()) {
            return false;
        }

        this.locacao.jogo.disponivel = true;

        this.locacao.marcarComoDevolvida();

        return true;
    }

    obterLocacao(): Locacao | null {
        return this.locacao;
    }

    consultarSituacao(
        dataAtual: string
    ): string {
        if (!this.locacao) {
            return "Nenhuma locação cadastrada";
        }

        return this.locacao
            .consultarSituacao(dataAtual);
    }
}
```

## Explicação do Controller

O Controller controla as ações do sistema.

Ele decide:

```text
Se o jogo pode ser locado

Quando a locação será criada

Quando o jogo será devolvido

Quando a disponibilidade será alterada
```

## Atributo locacao

```typescript
private locacao: Locacao | null = null;
```

Por enquanto nosso sistema guarda apenas uma locação.

O tipo significa que o atributo pode conter:

```text
Um objeto Locacao

Ou nenhum objeto
```

Mais adiante poderemos substituir isso por:

```typescript
private locacoes: Locacao[] = [];
```

## Método realizarLocacao

Primeiro eu verifico se o jogo está disponível.

```typescript
if (!jogo.disponivel) {
    return null;
}
```

Se o jogo já estiver locado, nenhuma locação será criada.

Depois altero sua disponibilidade.

```typescript
jogo.disponivel = false;
```

Somente depois eu crio o objeto Locacao.

```typescript
this.locacao = new Locacao(
    id,
    jogo,
    cliente,
    dataLocacao,
    dataDevolucao
);
```

## Método devolverJogo

Primeiro eu verifico se existe uma locação.

```typescript
if (!this.locacao) {
    return false;
}
```

Depois verifico se ela já foi devolvida.

```typescript
if (this.locacao.foiDevolvida()) {
    return false;
}
```

Quando tudo está correto, o jogo volta a ficar disponível.

```typescript
this.locacao.jogo.disponivel = true;
```

E a locação é marcada como devolvida.

```typescript
this.locacao.marcarComoDevolvida();
```

# 3. View da Locacao

Crie o arquivo:

```text
src/view/LocacaoView.ts
```

```typescript
import { Locacao }
    from "../model/Locacao";

export class LocacaoView {
    exibirTitulo(): void {
        console.log(
            "===================================="
        );

        console.log(
            "🎮 SISTEMA DE LOCAÇÕES"
        );

        console.log(
            "===================================="
        );
    }

    exibirResumo(
        locacao: Locacao,
        dataAtual: string
    ): void {
        console.log();

        console.log(
            "===================================="
        );

        console.log(
            "🎮 RESUMO DA LOCAÇÃO"
        );

        console.log(
            "===================================="
        );

        console.log(
            `Código: ${locacao.id}`
        );

        console.log(
            `Jogo locado: ${locacao.jogo.nome}`
        );

        console.log(
            `Console: ${locacao.jogo.console}`
        );

        console.log(
            `Tipo: ${locacao.jogo.tipo}`
        );

        console.log(
            "===================================="
        );

        console.log(
            `Cliente: ${locacao.cliente.nome}`
        );

        console.log(
            `CPF: ${locacao.cliente.cpf}`
        );

        console.log(
            `Email: ${locacao.cliente.email}`
        );

        console.log(
            "===================================="
        );

        console.log(
            `Data da locação: ${locacao.dataLocacao}`
        );

        console.log(
            `Previsão de devolução: ${locacao.dataDevolucao}`
        );

        console.log(
            `Dias previstos: ${locacao.calcularDiasPrevistos()}`
        );

        console.log(
            `Valor previsto: R$ ${locacao.calcularValorPrevisto().toFixed(2)}`
        );

        console.log(
            "===================================="
        );

        console.log(
            `Situação: ${locacao.consultarSituacao(dataAtual)}`
        );

        console.log(
            `Dias em atraso: ${locacao.calcularDiasAtraso(dataAtual)}`
        );

        console.log(
            `Valor do atraso: R$ ${locacao.calcularValorAtraso(dataAtual).toFixed(2)}`
        );

        console.log(
            "===================================="
        );

        console.log(
            `Valor total: R$ ${locacao.calcularValorTotal(dataAtual).toFixed(2)}`
        );

        console.log(
            "===================================="
        );
    }

    exibirMensagem(
        mensagem: string
    ): void {
        console.log();
        console.log(mensagem);
    }
}
```

## Explicação da View

A View possui todos os `console.log()`.

Ela recebe um objeto Locacao e mostra suas informações.

```typescript
exibirResumo(
    locacao: Locacao,
    dataAtual: string
): void
```

A View não cria a locação.

Ela também não altera a disponibilidade do jogo.

Ela apenas consulta os métodos do Model e mostra os resultados.

Exemplo:

```typescript
locacao.calcularValorTotal(dataAtual)
```

A View pede o cálculo ao Model e mostra o valor no terminal.

# 4. Arquivo main.ts

Crie o arquivo:

```text
src/main.ts
```

```typescript
import { Cliente }
    from "./model/Cliente";

import { Game }
    from "./model/Game";

import { LocacaoController }
    from "./controller/LocacaoController";

import { LocacaoView }
    from "./view/LocacaoView";

const controller =
    new LocacaoController();

const view =
    new LocacaoView();

view.exibirTitulo();

const cliente =
    new Cliente(
        "Carlos Silva",
        "123.456.789 00",
        "carlos@email.com"
    );

const jogo =
    new Game(
        1,
        "Minecraft",
        "PlayStation 5",
        "Aventura",
        12,
        true
    );

const locacao =
    controller.realizarLocacao(
        1,
        jogo,
        cliente,
        "2026 07 10",
        "2026 07 15"
    );

if (!locacao) {
    view.exibirMensagem(
        `❌ O jogo ${jogo.nome} já está locado.`
    );
} else {
    view.exibirMensagem(
        `🎮 O jogo ${jogo.nome} foi locado com sucesso!`
    );

    view.exibirResumo(
        locacao,
        "2026 07 18"
    );
}

const devolucaoRealizada =
    controller.devolverJogo();

if (devolucaoRealizada) {
    view.exibirMensagem(
        `✅ O jogo ${jogo.nome} foi devolvido com sucesso.`
    );
} else {
    view.exibirMensagem(
        "❌ Não foi possível realizar a devolução."
    );
}
```

# 5. Fluxo do sistema

O sistema funciona assim:

```text
main.ts cria Cliente e Game

main.ts pede ao Controller para realizar a locação

Controller verifica a disponibilidade

Controller cria a Locacao

View mostra a mensagem

View exibe o resumo

main.ts pede a devolução

Controller atualiza o jogo e a locação

View mostra o resultado
```

# 6. Responsabilidade de cada arquivo

## Locacao.ts

```text
Guarda os dados

Calcula os dias

Calcula os valores

Verifica atrasos

Informa a situação
```

## LocacaoController.ts

```text
Realiza a locação

Verifica disponibilidade

Faz a devolução

Controla o objeto Locacao
```

## LocacaoView.ts

```text
Mostra mensagens

Mostra o resumo

Formata valores

Organiza a saída do terminal
```

## main.ts

```text
Cria os objetos iniciais

Inicia o sistema

Conecta Controller e View
```

# 7. Uma melhoria importante na classe Game

No exemplo anterior, o Controller altera diretamente:

```typescript
jogo.disponivel = false;
```

Funciona, mas podemos deixar o encapsulamento melhor.

Na classe Game, poderíamos criar:

```typescript
locar(): boolean {
    if (!this.disponivel) {
        return false;
    }

    this.disponivel = false;

    return true;
}

devolver(): void {
    this.disponivel = true;
}
```

Depois o Controller utilizaria:

```typescript
const locacaoPermitida =
    jogo.locar();
```

E na devolução:

```typescript
this.locacao.jogo.devolver();
```

Essa versão é mais segura porque impede alterações diretas no atributo.

# 8. Regras importantes que corrigimos

## Retiramos console.log do Model

O Model não deve decidir como as mensagens aparecem.

## Retiramos a locação automática do constructor

Criar um objeto e realizar uma ação são responsabilidades diferentes.

## Corrigimos os nomes dos métodos

Em TypeScript, eu recomendo iniciar métodos com letra minúscula.

Antes:

```typescript
CalcularDias()
```

Depois:

```typescript
calcularDiasPrevistos()
```

## Impedimos dias negativos

```typescript
Math.max(0, dias)
```

## Impedimos cobrança de atraso após devolução

Se a locação foi devolvida, `estaAtrasada()` retorna `false`.

# 9. Resumo 📚

Nesta aula eu separei a classe original seguindo o MVC.

```text
Model

Locacao.ts


Controller

LocacaoController.ts


View

LocacaoView.ts


Inicialização

main.ts
```

A classe original não estava errada por funcionar em um único arquivo.

O problema era possuir responsabilidades demais.

Com o MVC, cada parte passa a fazer apenas o seu trabalho.

Isso deixa o sistema mais organizado, mais fácil de testar e mais simples de evoluir.

