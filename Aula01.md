# Aula 01 - Introdução à Orientação a Objetos com TypeScript

## Objetivos da Aula

Ao final desta aula, o aluno deverá ser capaz de:

- Compreender o que é TypeScript.
- Entender as diferenças entre TypeScript e JavaScript.
- Declarar variáveis tipadas.
- Conhecer os principais tipos de dados do TypeScript.
- Compreender os conceitos básicos de Orientação a Objetos.
- Criar classes e objetos simples.

---

# O que é TypeScript?

TypeScript é uma linguagem criada pela Microsoft que adiciona recursos ao JavaScript.

O principal recurso é a tipagem estática, que permite identificar erros antes da execução do programa.

O TypeScript é considerado um superconjunto do JavaScript, ou seja, todo código JavaScript válido também é um código TypeScript válido.

## Fluxo de Funcionamento

```text
TypeScript (.ts)
        ↓
    Compilação
        ↓
JavaScript (.js)
        ↓
 Navegador ou Node.js
```

---

# Diferença entre JavaScript e TypeScript

## JavaScript

Possui tipagem dinâmica.

Exemplo:

```javascript
function somar(a, b) {
    return a + b;
}

console.log(somar(10, 5));
console.log(somar("10", 5));
```

Resultado:

```text
15
105
```

Observe que o JavaScript não gera erro.

---

## TypeScript

Possui tipagem estática.

```typescript
function somar(a: number, b: number): number {
    return a + b;
}

console.log(somar(10, 5));
```

Se tentarmos fazer:

```typescript
somar("10", 5);
```

O TypeScript apresentará erro antes mesmo da execução.

---

# Instalando o Ambiente

## Verificando se o Node.js está instalado

Abra o terminal e execute:

```bash
node -v
npm -v
```

Se aparecerem as versões, a instalação está correta.

---

## Criando um Projeto

```bash
mkdir aula-poo-ts
cd aula-poo-ts

npm init -y
```

---

## Instalando o TypeScript

```bash
npm install -D typescript
```

---

## Criando o arquivo de configuração

```bash
npx tsc --init
```

---

## Instalando o ts-node

O ts-node permite executar arquivos TypeScript diretamente.

```bash
npm install -D ts-node @types/node
```

---

## Executando um arquivo TypeScript

```bash
npx ts-node index.ts
```

---

# Declarando Variáveis

## Sintaxe

```typescript
let nomeVariavel: tipo = valor;
```

Exemplo:

```typescript
let idade: number = 18;
```

---

# Entendendo cada parte

## let

Cria uma variável.

```typescript
let idade;
```

---

## idade

É o nome da variável.

```typescript
let idade;
```

---

## : number

Define que a variável só poderá armazenar números.

```typescript
let idade: number;
```

---

## = 18

Atribui um valor inicial.

```typescript
let idade: number = 18;
```

---

# Exemplo Prático

```typescript
let idade: number = 18;

idade = 25;

// idade = "vinte";
```

A última linha geraria erro.

---

# Inferência de Tipos

O TypeScript pode descobrir o tipo sozinho.

```typescript
let cidade = "Porto Alegre";
```

O compilador entende automaticamente que a variável é do tipo string.

---

# Tipos Básicos do TypeScript

## Number

Representa números inteiros e decimais.

```typescript
let preco: number = 19.90;
let idade: number = 25;
```

---

## String

Representa textos.

```typescript
let nome: string = "Éder";
```

---

## Boolean

Representa verdadeiro ou falso.

```typescript
let ativo: boolean = true;
```

---

## Array

Representa listas.

```typescript
let notas: number[] = [8, 9, 10];
```

ou

```typescript
let nomes: Array<string> = ["Ana", "Pedro"];
```

---

## Tuple

Uma Tuple é um array com posições e tipos definidos.

Exemplo:

```typescript
let usuario: [string, number] = ["Éder", 45];
```

Neste caso:

- Primeira posição = string
- Segunda posição = number

Correto:

```typescript
usuario = ["Maria", 20];
```

Errado:

```typescript
usuario = [20, "Maria"];
```

---

## Exemplo de Tuple para Coordenadas

```typescript
let ponto: [number, number] = [10, 20];
```

---

## Exemplo de Tuple para Pessoa

```typescript
let pessoa: [string, number] = ["Lucas", 30];
```

---

## Enum

Permite criar conjuntos de valores.

```typescript
enum Perfil {
    Admin,
    Professor,
    Aluno
}

let perfil: Perfil = Perfil.Professor;
```

---

## Any

Aceita qualquer tipo.

```typescript
let valor: any = 10;

valor = "texto";
valor = true;
```

Evite utilizar sempre que possível.

---

## Unknown

Semelhante ao any, porém mais seguro.

```typescript
let valor: unknown = "Olá";
```

Antes de usar:

```typescript
if(typeof valor === "string"){
    console.log(valor.toUpperCase());
}
```

---

## Void

Utilizado em funções sem retorno.

```typescript
function exibirMensagem(): void {
    console.log("Olá");
}
```

---

## Null

Representa ausência de valor.

```typescript
let resposta: string | null = null;
```

---

## Undefined

Representa uma variável sem valor definido.

```typescript
let codigo: number | undefined;
```

---

## Union Types

Permite mais de um tipo.

```typescript
let id: number | string;

id = 10;
id = "10";
```

---

# Introdução à Orientação a Objetos

A Programação Orientada a Objetos (POO) é uma forma de organizar programas utilizando objetos.

---

# Conceitos Fundamentais

## Classe

É o molde.

Exemplo:

```text
Classe: Carro
```

---

## Objeto

É a instância da classe.

```text
Meu carro
Seu carro
Carro da empresa
```

Todos foram criados a partir da classe Carro.

---

## Atributos

São as características.

```text
Cor
Marca
Modelo
Ano
```

---

## Métodos

São as ações.

```text
Ligar()
Desligar()
Frear()
Acelerar()
```

---

# Criando uma Classe

```typescript
class Pessoa {

    nome: string;
    idade: number;

}
```

---

# Criando um Objeto

```typescript
const pessoa1 = new Pessoa();
```

---

# Adicionando Valores

```typescript
pessoa1.nome = "Éder";
pessoa1.idade = 45;
```

---

# Criando uma Classe Completa

```typescript
class Pessoa {

    nome: string;
    idade: number;

    apresentar(): void {
        console.log(
            `Olá, meu nome é ${this.nome}`
        );
    }

}
```

---

# Utilizando a Classe

```typescript
const pessoa1 = new Pessoa();

pessoa1.nome = "Éder";
pessoa1.idade = 45;

pessoa1.apresentar();
```

---

# Classe com Construtor

```typescript
class Pessoa {

    nome: string;
    idade: number;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

}
```

---

# Criando Objetos com Construtor

```typescript
const pessoa1 =
    new Pessoa("Éder", 45);

const pessoa2 =
    new Pessoa("Maria", 30);
```

---

# Exemplo Completo de POO

```typescript
class ContaBancaria {

    private saldo: number;

    public titular: string;

    constructor(
        titular: string,
        saldoInicial: number
    ){
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    public depositar(
        valor: number
    ): void {

        if(valor <= 0){
            console.log("Valor inválido");
            return;
        }

        this.saldo += valor;
    }

    public sacar(
        valor: number
    ): boolean {

        if(valor > this.saldo){
            return false;
        }

        this.saldo -= valor;

        return true;
    }

    public verSaldo(): number {
        return this.saldo;
    }

}
```

---

# Utilizando a Classe

```typescript
const conta =
    new ContaBancaria(
        "Éder",
        100
    );

conta.depositar(50);

console.log(
    conta.verSaldo()
);
```

Resultado:

```text
150
```

---

# Exercício 1

Crie as seguintes variáveis:

- nome
- idade
- cidade
- aprovado
- notas

Utilize os tipos adequados.

---

# Exercício 2

Crie uma classe chamada Aluno contendo:

Atributos:

- nome
- notas

Métodos:

- media()
- situacao()

---

## Modelo

```typescript
class Aluno {

    constructor(
        public nome: string,
        public notas: number[]
    ){}

    media(): number {

        let soma = 0;

        for(let nota of this.notas){
            soma += nota;
        }

        return soma / this.notas.length;
    }

    situacao(): string {

        if(this.media() >= 7){
            return "Aprovado";
        }

        return "Recuperação";
    }

}
```

---

# Teste

```typescript
const aluno =
    new Aluno(
        "João",
        [8, 7, 9]
    );

console.log(aluno.media());

console.log(
    aluno.situacao()
);
```

---

# Resumo da Aula

Nesta aula aprendemos:

- O que é TypeScript.
- Diferenças entre JavaScript e TypeScript.
- Como instalar e configurar o ambiente.
- Como iniciar o Node.js.
- Tipagem de variáveis.
- Tipos básicos.
- Arrays e Tuples.
- Conceitos de Orientação a Objetos.
- Classes.
- Objetos.
- Atributos.
- Métodos.
- Construtores.

Na próxima aula veremos:

- Encapsulamento.
- Herança.
- Polimorfismo.
- Interfaces.
- Projetos práticos orientados a objetos.