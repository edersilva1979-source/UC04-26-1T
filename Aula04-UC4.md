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

# 🚀 Preparando o Próximo Assunto

Na próxima parte da aula vamos estudar o relacionamento mais simples da Orientação a Objetos.

Ele recebe um nome bastante intuitivo.

## Associação

É por ele que praticamente todo sistema começa.

Vamos entender como dois objetos podem "conhecer" um ao outro sem depender completamente um do outro.

Nos vemos na próxima parte! ☕💻
