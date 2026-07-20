# UC04-26-1T

# 🚀 Programação Orientada a Objetos com TypeScript

Bem-vindo ao repositório da disciplina de **Programação Orientada a Objetos (POO)** utilizando **TypeScript**.

Aqui você encontrará materiais, exemplos práticos, exercícios e projetos desenvolvidos ao longo das aulas, explorando um dos paradigmas mais importantes da programação moderna.

---

# 📖 O que é Programação Orientada a Objetos?

A Programação Orientada a Objetos é uma forma de desenvolver software baseada na representação de elementos do mundo real através de objetos.

Ao invés de pensar apenas em funções e comandos, passamos a trabalhar com entidades que possuem características e comportamentos.

### Características (Atributos)

Exemplos:

* Nome
* Cor
* Idade
* Valor
* Marca

### Comportamentos (Métodos)

Exemplos:

* Ligar
* Salvar
* Comprar
* Calcular
* Imprimir

Essa abordagem torna os sistemas mais organizados, reutilizáveis e fáceis de manter.

---

# 🕰️ Um Pouco de História

A Programação Orientada a Objetos surgiu na década de 1960 com a linguagem **Simula 67**, criada para representar situações do mundo real através de software.

Ao longo dos anos, diversas linguagens adotaram esse paradigma:

| Linguagem  | Ano  |
| ---------- | ---- |
| Simula 67  | 1967 |
| Smalltalk  | 1972 |
| C++        | 1985 |
| Java       | 1995 |
| C#         | 2000 |
| TypeScript | 2012 |

Hoje, a maioria dos sistemas modernos utiliza conceitos de orientação a objetos.

---

# 🌎 Onde a POO Está Presente?

Você utiliza sistemas orientados a objetos todos os dias.

### 📱 Aplicativos

* WhatsApp
* Instagram
* Spotify
* Netflix

### 🏦 Sistemas Bancários

* Clientes
* Contas
* Cartões
* Transações

### 🛒 Comércio Eletrônico

* Produtos
* Pedidos
* Estoque
* Carrinho de Compras

### 🎮 Jogos

* Personagens
* Itens
* Inimigos
* Missões

---

# 🎯 Exemplo do Mundo Real

Imagine um carro.

### Características

* Marca
* Modelo
* Cor
* Ano

### Ações

* Ligar
* Acelerar
* Frear
* Desligar

Na Programação Orientada a Objetos:

* O carro é um objeto
* As características são atributos
* As ações são métodos

Exemplo em TypeScript:

```typescript
class Carro {

    marca: string;
    modelo: string;
    cor: string;

    constructor(marca: string, modelo: string, cor: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
    }

    ligar(): void {
        console.log("Carro ligado!");
    }
}

const carro1 = new Carro(
    "Volkswagen",
    "Golf",
    "Preto"
);

carro1.ligar();
```

---

# 🏗️ Os Quatro Pilares da POO

## 🔒 Encapsulamento

Protege os dados internos de uma classe.

```typescript
private senha: string;
```

---

## 👨‍👩‍👧 Herança

Permite que uma classe herde características de outra.

```typescript
class Pessoa {
    nome: string;
}

class Cliente extends Pessoa {
}
```

---

## 🎭 Polimorfismo

Permite que diferentes objetos respondam de formas diferentes ao mesmo método.

Exemplo:

* Cachorro → late
* Gato → mia

---

## 🧩 Abstração

Representa apenas as informações importantes para o funcionamento do sistema.

---

# ⚡ Por que usar TypeScript?

O TypeScript foi criado pela Microsoft para adicionar recursos modernos ao JavaScript.

Principais vantagens:

✅ Tipagem forte

✅ Melhor organização do código

✅ Facilidade para encontrar erros

✅ Suporte completo à Programação Orientada a Objetos

✅ Amplamente utilizado no mercado

✅ Base de frameworks modernos

* Angular
* React
* Next.js
* NestJS

---

# 📚 O Que Será Estudado Nesta Disciplina?

* Introdução à POO
* Classes e Objetos
* Atributos e Métodos
* Construtores
* Encapsulamento
* Herança
* Polimorfismo
* Abstração
* Interfaces
* Arrays de Objetos
* Manipulação de Arquivos
* Desenvolvimento de Projetos Práticos

---

# 🛠 Tecnologias Utilizadas

Durante a disciplina serão utilizadas tecnologias como:

* TypeScript
* JavaScript
* Node.js
* Visual Studio Code
* Git
* GitHub

---

# 🎓 Objetivo da Disciplina

Capacitar o aluno a desenvolver sistemas organizados, reutilizáveis e profissionais utilizando os conceitos da Programação Orientada a Objetos com TypeScript.

Ao final da disciplina, o estudante será capaz de modelar problemas do mundo real e transformá-los em aplicações completas.

---



# 🌟 Curiosidade

Quando você cria um perfil em uma rede social, adiciona um produto ao carrinho de compras ou assiste a uma série em um serviço de streaming, está utilizando sistemas construídos com milhares de objetos interagindo entre si.

A Programação Orientada a Objetos é uma das bases da engenharia de software moderna.

---

# 🚀 Vamos Começar!

A melhor forma de aprender Programação Orientada a Objetos é praticando.

Explore os exemplos, execute os projetos, faça os exercícios e experimente criar suas próprias classes.

Cada classe criada é um passo a mais na construção de sistemas profissionais.

> "Grandes sistemas são construídos a partir de pequenas classes bem projetadas."
