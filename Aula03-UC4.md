# 🚀 Aula 02 - Encapsulamento, Herança, Polimorfismo e Interfaces com TypeScript

## 🎯 Objetivos da Aula

Ao final desta aula você será capaz de:

* Entender os 4 pilares da Orientação a Objetos.
* Utilizar encapsulamento para proteger dados.
* Criar classes que herdam características de outras classes.
* Aplicar polimorfismo para alterar comportamentos.
* Criar e implementar interfaces.
* Desenvolver projetos mais organizados e reutilizáveis.

---

# 📖 Um Pouco de História

Antes dos anos 1960, os programas eram escritos como grandes blocos de código.

Com o crescimento dos sistemas surgiram diversos problemas:

❌ Código repetido

❌ Difícil manutenção

❌ Muitos erros

❌ Pouca reutilização

Para resolver esses problemas surgiu a Programação Orientada a Objetos.

A primeira linguagem orientada a objetos foi a **Simula**, criada na década de 1960.

Depois vieram outras linguagens importantes:

* Smalltalk
* C++
* Java
* C#
* TypeScript

A ideia era simples:

> Organizar programas da mesma forma que organizamos objetos do mundo real.

---

# 🏛️ Os 4 Pilares da POO

A Orientação a Objetos é baseada em quatro conceitos fundamentais:

🏰 Encapsulamento

👨‍👩‍👧‍👦 Herança

🎭 Polimorfismo

📜 Interfaces

---

# 🏰 Encapsulamento

## O que é?

Encapsular significa proteger informações.

Nem tudo deve ser acessado diretamente por outras partes do sistema.

---

## Exemplo com Bob Esponja 🍍

Imagine que o Bob Esponja possui moedas guardadas.

Seria perigoso permitir que qualquer pessoa alterasse o valor diretamente:

```typescript
bob.moedas = 999999;
```

---

## Utilizando Encapsulamento

```typescript
class Personagem {

  private moedas: number;

  constructor(moedas: number) {
    this.moedas = moedas;
  }

  ganharMoedas(valor: number): void {
    this.moedas += valor;
  }

  consultarMoedas(): number {
    return this.moedas;
  }

}
```

---

## O que significa private?

```typescript
private moedas: number;
```

Significa:

```text
Somente a própria classe pode acessar.
```

Isso protege os dados contra alterações indevidas.

---

# 👨‍👩‍👧‍👦 Herança

## O que é?

Herança permite reutilizar código.

Uma classe pode herdar características e comportamentos de outra.

---

## Exemplo com Pokémon ⚡

Todos os Pokémon possuem:

* Nome
* Nível
* Ataque

---

### Classe Base

```typescript
class Pokemon {

  constructor(
    public nome: string,
    public nivel: number
  ) {}

  atacar(): void {
    console.log("Ataque básico!");
  }

}
```

---

### Classe Pikachu

```typescript
class Pikachu extends Pokemon {

}
```

O Pikachu herda automaticamente:

✅ nome

✅ nível

✅ atacar()

---

### Utilização

```typescript
const pika = new Pikachu(
  "Pikachu",
  20
);

pika.atacar();
```

---

# 🎭 Polimorfismo

## O que é?

Polimorfismo significa:

> O mesmo método pode ter comportamentos diferentes.

---

## Exemplo com Super-Heróis 🦸

### Classe Base

```typescript
class Heroi {

  atacar(): void {
    console.log("Ataque comum");
  }

}
```

---

### Homem-Aranha

```typescript
class HomemAranha extends Heroi {

  atacar(): void {
    console.log("Lançou teias!");
  }

}
```

---

### Hulk

```typescript
class Hulk extends Heroi {

  atacar(): void {
    console.log("Esmagou tudo!");
  }

}
```

---

### Teste

```typescript
const h1 = new HomemAranha();
const h2 = new Hulk();

h1.atacar();
h2.atacar();
```

---

### Resultado

```text
Lançou teias!

Esmagou tudo!
```

Mesmo método.

Com comportamentos diferentes.

Isso é Polimorfismo.

---

# 📜 Interfaces

## O que são?

Interfaces funcionam como contratos.

Elas definem quais métodos uma classe deve obrigatoriamente possuir.

---

## Exemplo com os Vingadores 🛡️

Todo vingador deve:

* atacar()
* defender()

---

### Interface

```typescript
interface Vingador {

  atacar(): void;

  defender(): void;

}
```

---

### Implementação

```typescript
class Thor implements Vingador {

  atacar(): void {
    console.log("Raio de Asgard!");
  }

  defender(): void {
    console.log("Girou o martelo!");
  }

}
```

---

## Vantagens das Interfaces

✅ Padronização

✅ Organização

✅ Facilidade de manutenção

✅ Código mais previsível

---

# 🎮 Projeto Prático - Liga dos Heróis

Vamos aplicar todos os conceitos aprendidos.

---

## Classe Base

```text
Heroi
```

Atributos:

```text
nome
vida
energia
```

Métodos:

```text
atacar()
defender()
```

---

## Classes Filhas

```text
HomemAranha
Batman
Superman
```

---

## Ataques Especiais

Cada herói deverá ter seu próprio ataque.

Exemplo:

```text
Homem-Aranha → Teia Gigante

Batman → Batarangue

Superman → Visão de Calor
```

---

# ⭐ Desafio Extra

Criar o método:

```typescript
receberDano()
```

O método deve diminuir a vida do herói.

---

# ⭐⭐ Desafio Extra

Criar o método:

```typescript
usarPoderEspecial()
```

O poder especial deverá consumir energia.

---

# ⭐⭐⭐ Desafio Extra

Criar uma batalha.

Exemplo:

```text
Batman x Superman
```

Exibir:

* Ataques
* Dano causado
* Vida restante

---

# 🎮 Curiosidade

Os conceitos de POO são utilizados em praticamente todos os jogos modernos:

* Minecraft
* Roblox
* Fortnite
* League of Legends
* Pokémon
* GTA

Todos utilizam:

✅ Classes

✅ Herança

✅ Encapsulamento

✅ Polimorfismo

---

# 🏆 Exercício Final

## Academia dos Heróis

Crie um sistema utilizando todos os conceitos aprendidos.

---

### Classe Base

```text
Personagem
```

Atributos:

```text
nome
nivel
vida
```

Método:

```text
atacar()
```

---

### Personagens

```text
Naruto
Goku
Luffy
```

---

## Requisitos

Utilizar:

✅ Encapsulamento

✅ Herança

✅ Polimorfismo

✅ Interface

---

## Resultado Esperado

Cada personagem deverá exibir seu ataque especial.

Exemplo:

```text
Naruto utilizou Rasengan!

Goku utilizou Kamehameha!

Luffy utilizou Gatling Gun!
```

---

# 📚 Resumo da Aula

Nesta aula aprendemos:

* O que é Encapsulamento.
* O que é Herança.
* O que é Polimorfismo.
* O que são Interfaces.
* Como esses conceitos são utilizados em sistemas reais.
* Como aplicá-los em projetos utilizando TypeScript.

---

# 🚀 Próximas Aulas

Nas próximas aulas veremos:

* Arrays de Objetos
* Relacionamento entre Classes
* CRUD Orientado a Objetos
* Mini Projeto Completo em TypeScript
* Simulação de Banco de Dados em Memória

Bom estudo e divirta-se programando! 🎮💻

