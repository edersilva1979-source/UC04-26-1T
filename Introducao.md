# Aula 01 - Introdução à Programação Orientada a Objetos (POO)

# Objetivos da Aula

Ao final desta seremos capazes de:

* Entender o que é Programação Orientada a Objetos.
* Conhecer a história da POO.
* Compreender os principais conceitos da orientação a objetos.
* Identificar objetos do mundo real e transformá-los em classes.
* Criar exemplos simples utilizando Java ou TypeScript.
* Entender por que a POO é tão utilizada no mercado de trabalho.

---

# O que é Programação Orientada a Objetos?

A Programação Orientada a Objetos, também conhecida pela sigla POO, é um paradigma de programação baseado na criação de objetos que representam elementos do mundo real.

Em vez de pensar apenas em funções e procedimentos, passamos a pensar em:

* Pessoas
* Produtos
* Clientes
* Carros
* Contas bancárias
* Animais

Cada elemento possui características e comportamentos.

Por exemplo:

Um carro possui:

Características:

* Cor
* Marca
* Modelo
* Ano

Comportamentos:

* Ligar
* Frear
* Acelerar
* Desligar

Na POO transformamos essas características em atributos e os comportamentos em métodos.

---

# História da Programação Orientada a Objetos

A orientação a objetos surgiu na década de 1960.

O primeiro grande passo aconteceu com a linguagem Simula 67, criada por:

* Ole-Johan Dahl
* Kristen Nygaard

O objetivo era simular situações do mundo real através de programas.

Posteriormente surgiram outras linguagens que popularizaram a POO:

| Linguagem  | Ano  |
| ---------- | ---- |
| Simula 67  | 1967 |
| Smalltalk  | 1972 |
| C++        | 1985 |
| Java       | 1995 |
| C#         | 2000 |
| TypeScript | 2012 |

Hoje praticamente todas as linguagens modernas utilizam conceitos de orientação a objetos.

---

# Curiosidades sobre POO

## Curiosidade 1

A linguagem Smalltalk foi a primeira a implementar praticamente todos os conceitos modernos da orientação a objetos.

---

## Curiosidade 2

Java foi criada com o lema:

"Write Once, Run Anywhere"

Ou seja:

"Escreva uma vez e execute em qualquer lugar."

---

## Curiosidade 3

Jogos modernos utilizam intensamente orientação a objetos.

Exemplo:

Em um jogo de futebol:

* Jogador é um objeto
* Bola é um objeto
* Árbitro é um objeto
* Time é um objeto

---

## Curiosidade 4

Sistemas bancários utilizam milhares de objetos trabalhando simultaneamente.

Cada conta corrente pode ser tratada como um objeto independente.

---

# O Problema da Programação Estruturada

Imagine um sistema com:

* Clientes
* Produtos
* Funcionários
* Pedidos
* Estoque

Utilizando apenas funções e variáveis globais, o código rapidamente fica difícil de manter.

Exemplo:

```java
String nomeCliente;
String cpfCliente;
String emailCliente;

String nomeCliente2;
String cpfCliente2;
String emailCliente2;
```

Agora imagine 10.000 clientes.

O código se tornaria impossível de organizar.

A solução foi criar objetos.

---

# O Conceito de Classe

Classe é um molde.

Uma classe define como um objeto será criado.

Exemplo:

Classe Carro

```java
public class Carro {

    String marca;
    String modelo;
    String cor;

}
```

A classe apenas define as características.

Ainda não existe nenhum carro criado.

---

# O Conceito de Objeto

Objeto é uma instância de uma classe.

Exemplo:

```java
Carro carro1 = new Carro();

carro1.marca = "Ford";
carro1.modelo = "Ka";
carro1.cor = "Prata";
```

Agora existe um carro real dentro do programa.

---

# Analogia Simples

Classe é a planta de uma casa.

Objeto é a casa construída.

Uma mesma planta pode gerar várias casas.

Exemplo:

```java
Carro carro1 = new Carro();
Carro carro2 = new Carro();
Carro carro3 = new Carro();
```

Todos são carros, mas possuem informações diferentes.

---

# Atributos

Atributos representam características do objeto.

Exemplo:

```java
public class Produto {

    int id;
    String descricao;
    double valor;

}
```

Atributos:

* id
* descricao
* valor

---

# Métodos

Métodos representam ações.

Exemplo:

```java
public class Carro {

    String modelo;

    public void ligar() {
        System.out.println("Carro ligado");
    }

    public void acelerar() {
        System.out.println("Acelerando");
    }

}
```

Métodos:

* ligar()
* acelerar()

---

# Exemplo Completo

```java
public class Cachorro {

    String nome;
    String raca;

    public void latir() {
        System.out.println(nome + " está latindo");
    }

}
```

Criando o objeto:

```java
Cachorro dog = new Cachorro();

dog.nome = "Rex";
dog.raca = "Labrador";

dog.latir();
```

Saída:

```text
Rex está latindo
```

---

# Exemplo em TypeScript

Classe:

```typescript
class Cliente {

    nome: string;
    email: string;

    constructor(nome: string, email: string) {
        this.nome = nome;
        this.email = email;
    }

    apresentar(): void {
        console.log(`Olá, meu nome é ${this.nome}`);
    }

}
```

Criando objeto:

```typescript
let cliente = new Cliente(
    "João",
    "joao@email.com"
);

cliente.apresentar();
```

---

# Os 4 Pilares da POO

A orientação a objetos possui quatro pilares fundamentais.

## 1. Encapsulamento

Protege os dados do objeto.

Exemplo:

```java
private String senha;
```

---

## 2. Herança

Permite reaproveitar código.

Exemplo:

```java
public class Pessoa {

    String nome;

}

public class Cliente extends Pessoa {

}
```

Cliente herda características de Pessoa.

---

## 3. Polimorfismo

Permite que um mesmo método tenha comportamentos diferentes.

Exemplo:

```java
animal.emitirSom();
```

Um cachorro late.

Um gato mia.

---

## 4. Abstração

Representa apenas o que é importante.

Exemplo:

Para dirigir um carro você não precisa saber como o motor funciona internamente.

Você apenas utiliza os controles necessários.

---

# Exercício Prático 1

Crie uma classe chamada Produto.

Ela deve possuir:

* id
* descricao
* valor

Depois crie três objetos diferentes.

Exemplo:

```java
Produto p1 = new Produto();
Produto p2 = new Produto();
Produto p3 = new Produto();
```

---

# Exercício Prático 2

Crie uma classe Aluno.

Atributos:

* nome
* curso
* idade

Método:

```java
apresentar()
```

Resultado esperado:

```text
Olá, meu nome é Carlos.
Estou cursando Desenvolvimento de Sistemas.
```

---

# Exercício Desafio

Crie uma classe ContaBancaria.

Atributos:

* numero
* titular
* saldo

Métodos:

* depositar()
* sacar()
* consultarSaldo()

---

# Vantagens da POO

✅ Organização do código

✅ Facilidade de manutenção

✅ Reaproveitamento de código

✅ Maior segurança dos dados

✅ Desenvolvimento mais rápido

✅ Facilita trabalho em equipe

✅ Muito utilizada no mercado

---

# Resumo da Aula

Nesta aula aprendemos:

* O que é Programação Orientada a Objetos
* A história da POO
* O conceito de Classe
* O conceito de Objeto
* Atributos
* Métodos
* Os quatro pilares da orientação a objetos
* Exemplos práticos em Java e TypeScript

A Programação Orientada a Objetos busca representar elementos do mundo real dentro do software, tornando os sistemas mais organizados, reutilizáveis e fáceis de manter.

---

# Frase Final

"Programar orientado a objetos é ensinar o computador a enxergar o mundo da mesma forma que nós enxergamos: através de pessoas, objetos, ações e relacionamentos."

