# 🧩 Aula05 - Agregação: Quando Objetos Trabalham em Equipe

Olá novamente! 👋

Na parte anterior nós aprendemos o primeiro relacionamento entre objetos: **Associação**.

Agora vamos dar mais um passo.

Imagine que você está montando um time de futebol.

Ou um grupo de super-heróis.

Ou uma equipe Pokémon.

Perceba que agora não estamos falando apenas de duas pessoas que se conhecem.

Estamos falando de **uma coleção de objetos**.

É exatamente isso que chamamos de **Agregação**.

---

# 🤔 Antes de aprender Agregação...

Quero fazer uma pergunta.

Imagine o Pikachu.

Agora imagine o treinador Ash.

Se Ash desaparecer...

O Pikachu deixa de existir?

A resposta é:

❌ Não.

Ele continua existindo.

Pode até encontrar outro treinador.

Agora imagine o contrário.

Se Pikachu resolver ir embora...

Ash continua existindo?

Também.

Percebe?

Existe um relacionamento.

Mas um não depende totalmente do outro.

Esse relacionamento é chamado de Agregação.

---

# 📖 O que é Agregação?

Eu gosto de explicar Agregação com uma frase muito simples.

> Um objeto possui outros objetos, mas esses objetos continuam existindo sozinhos.

Essa frase resume praticamente todo o conceito.

---

# 🎮 Exemplo com Pokémon

Imagine esta cena.

```text
Treinador

Ash
```

Agora pense na mochila dele.

Dentro existem vários Pokémon.

```text
Ash

↓

Pikachu

Charizard

Bulbasaur

Squirtle
```

Todos pertencem ao treinador.

Mas...

Se Ash decidir parar de ser treinador...

Os Pokémon continuam existindo.

Isso é Agregação.

---

# 📚 Outro exemplo

Imagine uma biblioteca.

Ela possui vários livros.

```text
Biblioteca

↓

Livro 1

Livro 2

Livro 3

Livro 4
```

Agora pense.

Se a biblioteca fechar...

Os livros deixam de existir?

Não.

Eles podem ser levados para outra biblioteca.

Mais um exemplo de Agregação.

---

# 🏰 Exemplo com Harry Potter

Imagine Hogwarts.

Dentro dela existem vários professores.

```text
Hogwarts

↓

Dumbledore

Snape

McGonagall

Hagrid
```

Se Hogwarts fosse fechada...

Os professores continuam existindo.

Eles poderiam trabalhar em outra escola.

Mais uma Agregação.

---

# ⚽ Exemplo com Futebol

Imagine um time.

```text
Brasil

↓

Alisson

Marquinhos

Vinícius Jr.

Rodrygo
```

Os jogadores pertencem ao time.

Mas se forem vendidos para outro clube...

Eles continuam existindo.

É uma Agregação.

---

# 🦸 Exemplo com Marvel

Agora imagine os Vingadores.

```text
Equipe

↓

Homem de Ferro

Thor

Capitão América

Hulk

Viúva Negra
```

Se a equipe acabar...

Os heróis continuam existindo.

Cada um pode seguir sua própria história.

Isso também é Agregação.

---

# 🎮 Exemplo com Minecraft

Imagine um jogador.

```text
Jogador

↓

Espada

Machado

Picareta

Arco
```

Os itens pertencem ao jogador.

Mas eles podem ser colocados em um baú.

Ou entregues para outro jogador.

Eles continuam existindo.

Mais um exemplo de Agregação.

---

# 💻 Como isso funciona no código?

Vamos construir nosso primeiro exemplo.

Primeiro criaremos um Pokémon.

```typescript
class Pokemon{

    constructor(
        public nome:string
    ){}

}
```

Agora vamos criar o treinador.

```typescript
class Treinador{

    nome:string;

    pokemons:Pokemon[];

    constructor(nome:string){

        this.nome = nome;

        this.pokemons = [];

    }

}
```

Observe uma novidade.

```typescript
Pokemon[]
```

Essa é uma lista de objetos.

Até agora utilizávamos:

```typescript
number[]
```

ou

```typescript
string[]
```

Agora estamos armazenando objetos.

Isso acontece o tempo inteiro em sistemas reais.

---

# Criando os Objetos

```typescript
const pikachu =
new Pokemon("Pikachu");

const charizard =
new Pokemon("Charizard");

const bulbasaur =
new Pokemon("Bulbasaur");
```

Agora criamos o treinador.

```typescript
const ash =
new Treinador("Ash");
```

---

# Adicionando Pokémon

Agora começa a mágica.

```typescript
ash.pokemons.push(pikachu);

ash.pokemons.push(charizard);

ash.pokemons.push(bulbasaur);
```

Observe.

Não criamos novos Pokémon.

Apenas colocamos os existentes dentro do treinador.

---

# Visualizando

Nossa memória agora fica parecida com isso.

```text
Ash

↓

Pikachu

↓

Charizard

↓

Bulbasaur
```

O treinador possui uma coleção de Pokémon.

---

# UML Simplificada

Em projetos profissionais usamos UML.

Não se preocupe.

Ela parece complicada.

Mas não é.

Nosso exemplo ficaria assim.

```text
+------------------+

Treinador

------------------

nome

pokemons[]

+------------------+

◇

|

|

+------------------+

Pokemon

------------------

nome

+------------------+
```

O losango branco representa uma Agregação.

Não precisa decorar.

Com o tempo você memoriza naturalmente.

---

# 🧠 Pensando como Programador

Sempre faça esta pergunta.

> Esse objeto pode existir sozinho?

Se a resposta for SIM...

Provavelmente estamos diante de uma Agregação.

---

# ⚠️ Erro muito comum

Muitos iniciantes confundem Array de Objetos com Herança.

Veja este código.

```typescript
pokemons:Pokemon[];
```

Isso NÃO significa que Treinador herda Pokémon.

Significa apenas que ele possui vários Pokémon.

São coisas completamente diferentes.

---

# 💡 Dica do Professor

Quase todos os sistemas administrativos utilizam Agregação.

Exemplos.

📦 Pedido possui Produtos.

🏫 Escola possui Alunos.

🏥 Hospital possui Médicos.

🏦 Banco possui Contas.

🎮 Guilda possui Jogadores.

⚽ Time possui Jogadores.

Percebe como esse conceito aparece em praticamente todos os lugares?

---

# ✍️ Exercício 1

Crie duas classes.

## Livro

Atributos.

```text
titulo

autor
```

---

## Biblioteca

Atributos.

```text
nome

livros[]
```

Depois crie.

```text
3 livros

1 biblioteca
```

Adicione todos os livros na biblioteca.

---

# ✍️ Exercício 2

Crie.

```text
Classe Heroi
```

Depois.

```text
Classe Equipe
```

A Equipe deverá possuir.

```text
nome

herois[]
```

Crie quatro heróis.

Depois adicione todos na equipe.

---

---

# 🏗️ Composição: Quando um Objeto Depende do Outro

Até agora estudamos dois tipos de relacionamento.

Primeiro aprendemos a **Associação**.

Depois conhecemos a **Agregação**.

Agora chegou a hora de aprender o relacionamento mais forte da Programação Orientada a Objetos.

Ele recebe um nome muito importante.

## Composição

Na minha experiência ensinando POO, este costuma ser o conceito que mais gera dúvidas.

Mas hoje eu quero mostrar que ele é muito mais simples do que parece.

---

# 🤔 Vamos imaginar um carro

Feche os olhos por alguns segundos e imagine um carro.

Ele possui:

```text
Motor

Rodas

Volante

Banco

Portas
```

Agora responda.

Se esse carro deixar de existir...

O motor continua sendo aquele motor?

Na maioria dos casos...

Não.

Ele fazia parte daquele carro.

Esse relacionamento é muito mais forte do que vimos anteriormente.

---

# 📖 O que é Composição?

Eu gosto de resumir Composição em apenas uma frase.

> Um objeto nasce junto com outro objeto e depende dele para existir.

Perceba a diferença.

Na Agregação os objetos podem continuar existindo separados.

Na Composição eles fazem parte do mesmo conjunto.

---

# 🏠 Exemplo com uma Casa

Imagine uma casa.

Ela possui:

```text
Sala

Quarto

Banheiro

Cozinha
```

Visualmente.

```text
Casa

↓

Sala

↓

Quarto

↓

Banheiro

↓

Cozinha
```

Agora pense.

Se a casa for demolida...

Esses cômodos continuam existindo?

Não.

Eles fazem parte da casa.

Essa é uma Composição.

---

# 🚗 Outro exemplo

Imagine novamente o carro.

```text
Carro

↓

Motor

↓

Volante

↓

Rodas
```

O motor foi criado para aquele carro.

O volante faz parte daquele carro.

Tudo pertence ao mesmo objeto principal.

---

# 🎮 Exemplo com Minecraft

Imagine um baú.

Dentro dele existem espaços.

```text
Baú

↓

Espaço 1

Espaço 2

Espaço 3

Espaço 4
```

Os espaços não fazem sentido sem o baú.

Eles existem porque o baú existe.

Mais um exemplo de Composição.

---

# 🍥 Exemplo com Naruto

Imagine o personagem Naruto.

Ele possui um modo especial.

```text
Naruto

↓

Modo Sábio
```

O Modo Sábio não é um personagem separado.

Ele faz parte do Naruto.

Mais uma Composição.

---

# 🦸 Exemplo com Homem de Ferro

Tony Stark possui uma armadura.

Mas vamos pensar na armadura.

Ela possui:

```text
Reator Arc

Capacete

Botas

Propulsores
```

Essas partes existem para formar a armadura.

Elas dependem dela.

É uma Composição.

---

# ⚡ Exemplo com Liga dos Heróis

Imagine nosso projeto.

Existe um herói.

```text
Herói

↓

Barra de Vida

↓

Energia

↓

Nível
```

Vida não existe sozinha.

Energia não existe sozinha.

Esses elementos pertencem ao herói.

Mais um exemplo de Composição.

---

# 💻 Como isso aparece no código?

Vamos criar primeiro uma classe Motor.

```typescript
class Motor{

    ligar(){

        console.log("Motor ligado.");

    }

}
```

Agora criaremos um carro.

```typescript
class Carro{

    motor:Motor;

    constructor(){

        this.motor = new Motor();

    }

}
```

Observe esta linha.

```typescript
this.motor = new Motor();
```

O carro cria automaticamente seu próprio motor.

Ele nasce junto com o carro.

Isso caracteriza uma Composição.

---

# UML Simplificada

Em UML a composição é representada por um losango preenchido.

```text
+------------+

Carro

+------------+

◆

|

|

+------------+

Motor

+------------+
```

Não se preocupe em decorar.

Você verá isso muitas vezes durante o curso.

---

# 📊 Comparando os Relacionamentos

Agora vamos comparar tudo que aprendemos.

---

## Associação

```text
Professor

↓

Aluno
```

Eles apenas se conhecem.

---

## Agregação

```text
Treinador

↓

Pokémon

↓

Pokémon

↓

Pokémon
```

O treinador possui vários Pokémon.

Os Pokémon continuam existindo sem o treinador.

---

## Composição

```text
Carro

↓

Motor

↓

Rodas

↓

Volante
```

Essas partes pertencem ao carro.

Elas dependem dele.

---

# 🧠 Uma dica para nunca mais esquecer

Sempre faça estas perguntas.

## Associação

```text
Eles apenas se conhecem?
```

Sim.

Então é Associação.

---

## Agregação

```text
Um objeto possui outro objeto?

Mas o segundo continua existindo sozinho?
```

Sim.

Então é Agregação.

---

## Composição

```text
Um objeto depende totalmente do outro?
```

Sim.

Então é Composição.

---

# 🎨 Comparação Visual

```text
ASSOCIAÇÃO

Professor

↓

Aluno



AGREGAÇÃO

Equipe

↓

Batman

Flash

Superman



COMPOSIÇÃO

Carro

↓

Motor

↓

Volante

↓

Rodas
```

---

# 💡 Dica do Professor

Uma frase ajuda muito meus alunos.

> Associação é amizade.

> Agregação é uma equipe.

> Composição é uma parte do corpo.

Imagine seu braço.

Ele faz parte do seu corpo.

Ele não foi criado para existir separado.

Essa é exatamente a ideia da Composição.

---

# ⚠️ Erro muito comum

Olhe este código.

```typescript
class Carro{

    motor =
    new Motor();

}
```

Alguns alunos dizem.

"O carro possui um motor. Então é Agregação."

Não.

Observe que o carro cria o motor.

```typescript
new Motor()
```

Isso mostra que ele controla sua existência.

Logo.

É Composição.

---

# 🎮 Exercício

Crie uma classe.

```text
Computador
```

Ela deverá possuir.

```text
Processador

Memória RAM

SSD
```

Todos deverão ser criados automaticamente dentro do construtor.

---

# 🎮 Exercício 2

Crie uma classe.

```text
Casa
```

Ela deverá possuir.

```text
Sala

Cozinha

Banheiro

Quarto
```

Esses objetos deverão nascer junto com a casa.

---

# 🚀 Preparando Nosso Projeto

Até agora aprendemos os três relacionamentos.

Agora vamos colocar tudo isso em prática.

Na próxima parte construiremos um sistema chamado:

# 🦸 Liga dos Heróis 2.0

Nele teremos:

✅ Equipes

✅ Heróis

✅ Arrays de Objetos

✅ Associação

✅ Agregação

✅ Encapsulamento

✅ Herança

✅ Polimorfismo

Você perceberá que todos os conceitos estudados até agora começam a trabalhar juntos, exatamente como acontece em sistemas profissionais.
