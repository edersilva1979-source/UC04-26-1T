# 🚀 Aula 03 - Relacionamento entre Objetos e Composição em TypeScript

> Curso de Programação Orientada a Objetos com TypeScript

---

# 🎯 Objetivos da Aula

Olá! 👋

Até agora nós aprendemos a criar classes, objetos, atributos, métodos, construtores, herança, encapsulamento, polimorfismo e interfaces.

Se você observar bem, todos os nossos exemplos até agora tinham algo em comum: **os objetos viviam sozinhos**.

Hoje vamos dar um grande passo.

Nesta aula você aprenderá como objetos trabalham juntos para formar sistemas reais.

Ao final desta aula você será capaz de:

✅ Entender como objetos se relacionam.

✅ Criar classes que armazenam outros objetos.

✅ Compreender Associação.

✅ Compreender Agregação.

✅ Compreender Composição.

✅ Construir sistemas muito mais organizados.

---

# 📖 Antes de Começarmos...

Quero que você imagine o seguinte.

Você conhece alguém que vive completamente sozinho?

Provavelmente não.

Todos nós fazemos parte de algum grupo.

Somos filhos de alguém.

Temos amigos.

Trabalhamos em alguma empresa.

Estudamos em uma escola.

Moramos em uma cidade.

Ou seja...

**Tudo está conectado.**

Na programação acontece exatamente a mesma coisa.

Um objeto dificilmente existe sozinho.

Ele normalmente faz parte de outro objeto.

Essa ideia é um dos conceitos mais importantes da Orientação a Objetos.

---

# 🕰️ Um Pouco de História

Nas primeiras linguagens de programação, praticamente tudo era escrito em funções.

Imagine um programa bancário.

Existia uma função para sacar.

Outra para depositar.

Outra para imprimir um extrato.

Tudo funcionava...

Até que os sistemas começaram a crescer.

Muito.

Grandes empresas passaram a desenvolver softwares com centenas de milhares de linhas de código.

Era um verdadeiro caos.

Foi então que surgiu a Programação Orientada a Objetos.

A ideia era simples:

> "E se organizarmos o programa como organizamos o mundo?"

Em vez de pensar em funções...

Passamos a pensar em objetos.

Por exemplo.

Em vez de criar apenas uma função chamada:

```text
depositar()
```

Passamos a criar um objeto chamado:

```text
ContaBancaria
```

Que possui:

```text
Titular

Saldo

Número

Depositar()

Sacar()

Transferir()
```

Percebe a diferença?

Agora tudo faz parte de um único objeto.

O código ficou muito mais organizado.

---

# 🌎 Objetos Existem em Todo Lugar

Quero que você olhe ao seu redor.

Sua mochila é um objeto.

Seu celular é um objeto.

Seu computador é um objeto.

Você também pode ser representado por um objeto.

Por exemplo:

```text
Pessoa

Nome

Idade

Altura

Falar()

Andar()

Dormir()
```

Isso significa que praticamente qualquer coisa do mundo pode ser transformada em uma classe.

---

# 🤔 Mas Existe um Problema...

Até agora nossos objetos vivem completamente sozinhos.

Veja um exemplo.

```typescript
class Heroi {

    constructor(
        public nome:string,
        public vida:number
    ){}

}
```

Criamos um herói.

Muito legal.

Mas...

Onde ele mora?

Qual equipe ele pertence?

Quem são seus amigos?

Quem é seu treinador?

Nosso objeto ainda está sozinho.

Na vida real isso não acontece.

---

# 🎬 Exemplo com Stranger Things

Vamos imaginar a série Stranger Things.

Temos vários personagens.

```text
Mike

Lucas

Will

Dustin

Onze
```

Agora pense comigo.

Mike existe sozinho?

Não.

Ele pertence a um grupo.

Lucas também.

Will também.

Dustin também.

Onze também.

Na verdade...

Existe uma equipe formada por todos eles.

Podemos representar isso assim.

```text
Equipe

↓

Mike

Lucas

Will

Dustin

Onze
```

Ou seja...

A equipe possui vários personagens.

Os personagens pertencem a uma equipe.

Esse é um relacionamento entre objetos.

---

# 🎮 Exemplo com Minecraft

Agora pense no Minecraft.

Existe um jogador.

O jogador possui:

```text
Inventário
```

Dentro do inventário existem:

```text
Espada

Picareta

Machado

Comida

Blocos
```

Observe.

A espada não está solta.

Ela pertence ao inventário.

O inventário pertence ao jogador.

Tudo está conectado.

---

# ⚽ Exemplo com Futebol

Na aula passada criamos nosso sistema da Copa do Mundo.

Lembra da classe:

```text
Selecao
```

Agora imagine uma nova classe.

```text
Grupo
```

Dentro dela teremos:

```text
Grupo A

↓

Brasil

Argentina

Japão

Alemanha
```

Percebe?

A classe Grupo possui várias Seleções.

Mais um relacionamento entre objetos.

---

# 🎮 Exemplo com Liga dos Heróis

No projeto Liga dos Heróis acontece exatamente a mesma coisa.

Temos:

```text
Liga
```

Dentro dela existem:

```text
Equipe Marvel

Equipe DC
```

Dentro da Equipe Marvel:

```text
Homem-Aranha

Thor

Hulk
```

Dentro da Equipe DC:

```text
Batman

Flash

Superman
```

Observe que agora nossos objetos começam a formar uma hierarquia.

Isso é exatamente como grandes sistemas funcionam.

---

# 🧠 Pensando Como um Programador

Quando você começar um novo projeto, faça sempre esta pergunta:

> "Esse objeto pertence a outro objeto?"

Se a resposta for sim...

Existe um relacionamento.

É exatamente isso que aprenderemos durante esta aula.

---

# 📚 O Que Aprenderemos a Partir de Agora?

Existem três formas principais de relacionar objetos.

Durante esta aula vamos estudar cada uma delas.

📌 Associação

📌 Agregação

📌 Composição

Elas parecem parecidas.

Mas possuem diferenças muito importantes.

Ao compreender esses conceitos, você estará programando como desenvolvedores profissionais fazem em sistemas reais.

---
---

# 🤝 Associação

Agora que entendemos que os objetos podem se relacionar, vamos conhecer o primeiro tipo de relacionamento da Programação Orientada a Objetos.

Ele é chamado de **Associação**.

Na minha opinião, este é o relacionamento mais fácil de entender.

A palavra "associação" já dá uma pista do que significa.

Ela representa quando dois objetos se conhecem ou trabalham juntos, mas **um não depende da existência do outro**.

Em outras palavras:

> Um objeto pode existir perfeitamente sem o outro.

---

# 🎬 Exemplo com Stranger Things

Vamos voltar ao nosso exemplo da série.

Imagine Mike e Onze.

Mike conhece Onze.

Onze conhece Mike.

Eles são amigos.

Podemos representar isso assim:

```text
Mike  ←────────→  Onze
```

Agora pense.

Se Mike viajar para outra cidade...

Onze continua existindo?

Sim.

E se Onze desaparecer da história?

Mike continua existindo?

Também.

Isso significa que existe apenas um relacionamento entre eles.

Nenhum depende do outro para existir.

Isso é Associação.

---

# 🧑‍🏫 Outro exemplo

Imagine uma escola.

Existe um professor.

Existe um aluno.

O professor conhece o aluno.

O aluno conhece o professor.

Mas...

O aluno continua existindo mesmo que o professor saia da escola.

O professor continua existindo mesmo que aquele aluno seja transferido.

Mais uma Associação.

---

# 🏥 Exemplo Hospitalar

Como muitos de vocês já conhecem a área da saúde, vamos usar outro exemplo.

Imagine um médico e um paciente.

```text
Paciente

↓

Consulta

↓

Médico
```

O paciente consulta com o médico.

Depois vai embora.

O médico continua trabalhando.

O paciente continua vivendo normalmente.

Nenhum depende da existência do outro.

Existe apenas uma associação.

---

# ⚽ Exemplo com Futebol

Imagine um jogador.

Agora imagine um técnico.

```text
Jogador

↓

Técnico
```

Um jogador pode trocar de técnico.

O técnico pode trocar de time.

Os dois continuam existindo.

Mais um exemplo de Associação.

---

# 💻 Como isso fica no código?

Vamos criar uma classe Professor.

```typescript
class Professor {

    constructor(
        public nome:string
    ){}

}
```

Agora criaremos a classe Aluno.

```typescript
class Aluno {

    constructor(
        public nome:string
    ){}

}
```

Até aqui não existe relacionamento.

Temos apenas duas classes.

Agora vamos criar objetos.

```typescript
const professor =
new Professor("Carlos");

const aluno =
new Aluno("Lucas");
```

Agora vamos criar uma associação.

```typescript
console.log(
`${aluno.nome} é aluno do professor ${professor.nome}`
);
```

Resultado:

```text
Lucas é aluno do professor Carlos
```

Observe que o relacionamento aconteceu apenas durante a execução.

As duas classes continuam independentes.

---

# 📊 Diagrama da Associação

Visualmente podemos imaginar assim.

```text
+------------+         conhece         +------------+
| Professor  | ----------------------> |   Aluno    |
+------------+                         +------------+
```

Nenhum depende do outro.

---

# 🧩 Exemplo com Pokémon

Imagine Ash.

Imagine Pikachu.

Ash é treinador de Pikachu.

```text
Ash

↓

Pikachu
```

Agora pense.

Se Pikachu resolver ir embora...

Ash continua existindo.

Se Ash deixar de ser treinador...

Pikachu continua existindo.

Mais uma Associação.

---

# 🎮 Exemplo com Minecraft

No Minecraft existe um jogador.

Também existem aldeões.

```text
Jogador

↓

Aldeão
```

O jogador pode conversar com um aldeão.

Pode fazer trocas.

Pode ir embora.

O aldeão continua existindo.

Mais uma Associação.

---

# ⚠️ Erro muito comum

Muitos alunos pensam que toda vez que dois objetos aparecem juntos existe Herança.

Não.

Veja este exemplo.

```text
Professor

Aluno
```

Professor não é um tipo de Aluno.

Aluno não é um tipo de Professor.

Logo...

Não existe Herança.

Existe Associação.

Sempre faça esta pergunta:

> Um objeto É um tipo do outro?

Se a resposta for não...

Provavelmente não é Herança.

---

# 💡 Dica do Professor

Existe uma frase muito utilizada por desenvolvedores.

> Associação representa um relacionamento de colaboração.

Ou seja.

Os objetos trabalham juntos.

Mas cada um possui sua própria vida.

---

# 🧠 Exercício Mental

Responda apenas olhando para os exemplos abaixo.

Existe Associação?

### Cliente e Banco

✅ Sim

---

### Médico e Paciente

✅ Sim

---

### Jogador e Técnico

✅ Sim

---

### Professor e Escola

✅ Sim

---

### Cliente e Pedido

🤔 Ainda não sabemos.

Esse exemplo será estudado quando aprendermos Agregação e Composição.

---

# 💻 Exercício Prático

Crie duas classes.

## Classe Professor

Atributos:

```text
nome
disciplina
```

---

## Classe Aluno

Atributos:

```text
nome
idade
```

---

Agora crie os objetos.

```text
Professor João

Aluno Maria
```

Depois exiba no console.

```text
Maria é aluna do professor João.
```

---

# ⭐ Desafio

Crie outra classe.

```text
Curso
```

Depois mostre no console.

```text
Maria estuda TypeScript.

O professor João ministra TypeScript.
```

Perceba.

Curso, Professor e Aluno possuem apenas Associação.

Nenhum depende do outro.

---

# 🤓 Curiosidade

Você sabia que praticamente todos os sistemas que usamos diariamente possuem milhares de associações?

Um sistema bancário pode ter relacionamentos entre:

- Cliente
- Conta
- Agência
- Funcionário
- Empréstimo
- Cartão
- Pix

Nenhum desses objetos vive completamente isolado.

Os sistemas modernos são enormes redes de objetos trabalhando juntos.

---

# 📝 Resumo da Parte 1

Nesta primeira parte da aula aprendemos:

✅ O que é relacionamento entre objetos.

✅ Por que sistemas reais utilizam relacionamentos.

✅ O conceito de Associação.

✅ Como identificar uma Associação.

✅ Como implementar uma Associação em TypeScript.

---

# 🚀 Preparando a Próxima Parte

Até aqui vimos objetos que apenas se conhecem.

Agora vamos conhecer um relacionamento mais forte.

Imagine um treinador que possui vários Pokémon.

Ou uma biblioteca que possui vários livros.

Ou uma equipe que possui vários heróis.

Esses objetos passam a fazer parte de uma coleção.

Esse relacionamento recebe um nome muito importante na Programação Orientada a Objetos.

## Agregação

Na próxima parte veremos como criar classes que armazenam vários objetos utilizando Arrays, exatamente como acontece em sistemas profissionais.
