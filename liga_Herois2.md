# 🦸  Projeto Prático: Liga dos Heróis 2.0

Chegou a hora de construir nosso primeiro sistema realmente orientado a objetos.

Até agora aprendemos vários conceitos separados.

Aprendemos:

✅ Classes

✅ Objetos

✅ Métodos

✅ Encapsulamento

✅ Herança

✅ Interfaces

✅ Associação

✅ Agregação

✅ Composição

Agora vamos juntar tudo isso.

É exatamente isso que acontece quando desenvolvemos um sistema profissional.

---

# 🎯 Nosso Objetivo

Vamos desenvolver um pequeno sistema chamado:

# 🏆 Liga dos Heróis 2.0

Imagine um campeonato entre heróis.

Existem várias equipes.

Cada equipe possui vários heróis.

Cada herói possui:

- Nome
- Vida
- Energia
- Poder

Depois faremos batalhas entre equipes.

Parece um jogo...

Mas, na verdade, estaremos praticando Programação Orientada a Objetos.

---

# 🧠 Antes de Escrever Código...

Quero que você imagine este desenho.

```text
                LIGA DOS HERÓIS

                        │

        ┌───────────────┴───────────────┐

        │                               │

 Equipe Marvel                   Equipe DC

        │                               │

 ┌──────┼────────┐            ┌─────────┼─────────┐

 │      │        │            │         │         │

Thor  Hulk  Homem-Aranha   Batman   Flash   Superman
```

Observe.

Os heróis pertencem às equipes.

Mas continuam existindo.

Isso significa que estamos utilizando:

## Agregação

---

# 📦 Primeiro vamos criar um Herói

Pense comigo.

O que todo herói possui?

Normalmente:

- Nome
- Vida
- Energia

Então nossa classe ficará parecida com isso.

```typescript
class Heroi{

    constructor(

        public nome:string,

        public vida:number,

        public energia:number

    ){}

}
```

Muito simples.

Neste momento nosso herói ainda não faz nada.

Ele apenas existe.

---

# 🎮 Agora vamos criar uma Equipe

Uma equipe possui várias coisas.

Mas a principal delas é:

Uma lista de heróis.

```typescript
class Equipe{

    constructor(

        public nome:string,

        public herois:Heroi[]=[]

    ){}

}
```

Observe esta linha.

```typescript
Heroi[]
```

Isso significa:

"Minha equipe poderá armazenar vários heróis."

---

# 📚 Por que utilizamos um Array?

Porque não sabemos quantos heróis existirão.

Hoje podem ser três.

Amanhã podem ser vinte.

Depois cinquenta.

Um array resolve esse problema.

---

# 👨‍🏫 Pensando como Programador

Sempre que você perceber que um objeto pode possuir vários outros objetos...

Pense imediatamente em um Array.

Exemplos.

```text
Biblioteca

↓

Livros[]
```

---

```text
Hospital

↓

Pacientes[]
```

---

```text
Escola

↓

Alunos[]
```

---

```text
Equipe

↓

Herois[]
```

É exatamente a mesma ideia.

---

# 🦸 Criando Heróis

Agora vamos criar alguns objetos.

```typescript
const thor =
new Heroi(
"Thor",
100,
80
);

const hulk =
new Heroi(
"Hulk",
150,
60
);

const homemAranha =
new Heroi(
"Homem-Aranha",
90,
100
);
```

Cada objeto ocupa um espaço diferente na memória.

São três heróis completamente independentes.

---

# 🏆 Criando a Equipe

Agora criaremos uma equipe.

```typescript
const marvel =
new Equipe(
"Marvel"
);
```

Neste momento...

Nossa equipe está vazia.

Visualmente.

```text
Marvel

↓

( nenhum herói )
```

---

# ➕ Adicionando Heróis

Agora acontece a mágica.

```typescript
marvel.herois.push(thor);

marvel.herois.push(hulk);

marvel.herois.push(homemAranha);
```

Observe.

Não criamos novos heróis.

Apenas colocamos os existentes dentro da equipe.

---

# 📊 Visualizando a Memória

Nossa memória agora está parecida com isso.

```text
Equipe Marvel

↓

Thor

↓

Hulk

↓

Homem-Aranha
```

Perceba.

A equipe conhece os heróis.

Mas os heróis continuam existindo individualmente.

---

# 🔍 Percorrendo o Array

Agora quero mostrar outra novidade.

Como mostrar todos os heróis?

Usamos um laço de repetição.

```typescript
for(let heroi of marvel.herois){

    console.log(heroi.nome);

}
```

Resultado.

```text
Thor

Hulk

Homem-Aranha
```

Esse tipo de repetição aparece em praticamente todos os sistemas.

---

# 💡 Criando um Método

Em vez de repetir esse código sempre...

Vamos colocar dentro da própria classe.

```typescript
listarHerois(){

    for(let heroi of this.herois){

        console.log(heroi.nome);

    }

}
```

Agora basta chamar.

```typescript
marvel.listarHerois();
```

Muito melhor.

---

# 🎯 Encapsulando Melhor

Podemos melhorar ainda mais.

Vamos criar um método.

```typescript
adicionarHeroi()
```

Assim.

```typescript
adicionarHeroi(

    heroi:Heroi

){

    this.herois.push(heroi);

}
```

Agora ninguém precisa acessar o array diretamente.

Basta fazer.

```typescript
marvel.adicionarHeroi(thor);
```

Muito mais organizado.

---

# ✨ Vantagens

Veja como nosso código evoluiu.

Antes.

```typescript
marvel.herois.push(thor);
```

Depois.

```typescript
marvel.adicionarHeroi(thor);
```

O segundo exemplo é muito mais fácil de entender.

---

# 📚 Isso acontece em Sistemas Reais

Imagine um sistema de hospital.

Em vez de.

```typescript
hospital.pacientes.push(paciente);
```

Os desenvolvedores costumam criar.

```typescript
hospital.adicionarPaciente();
```

Fica muito mais claro.

---

# 🎮 Exercício 1

Crie um método.

```text
removerHeroi()
```

Ele deverá receber o nome do herói.

Depois removê-lo da equipe.

---

# 🎮 Exercício 2

Crie um método.

```text
quantidadeHerois()
```

Ele deverá retornar.

```text
3
```

ou

```text
10
```

Dependendo da quantidade existente.

---

# 🎮 Exercício 3

Crie um método.

```text
buscarHeroi()
```

Recebendo um nome.

Se encontrar.

Mostre.

```text
Herói encontrado.
```

Caso contrário.

```text
Herói não encontrado.
```

---

# 💡 Dica do Professor

Perceba uma coisa importante.

Até agora não utilizamos banco de dados.

Nem arquivos.

Mesmo assim já conseguimos construir um pequeno sistema.

Isso acontece porque estamos armazenando tudo na memória utilizando objetos.

Essa técnica é muito utilizada para aprender Programação Orientada a Objetos.

---

# 🚀 Desafio

Agora crie outra equipe.

```text
Equipe DC
```

Adicione.

```text
Batman

Flash

Superman
```

Depois liste as duas equipes.

---

# 🏆 Missão Cumprida

Parabéns!

Você acabou de criar seu primeiro sistema contendo vários objetos trabalhando juntos.

Mais importante do que decorar código...

É entender a ideia.

Objetos podem possuir outros objetos.

Objetos podem colaborar entre si.

Objetos podem formar sistemas completos.

É exatamente assim que grandes softwares são construídos.

---

# 📖 Resumo da Parte 2

Nesta parte aprendemos:

✅ Arrays de Objetos

✅ Agregação na prática

✅ Criar equipes

✅ Adicionar objetos

✅ Percorrer Arrays

✅ Criar métodos para manipular objetos

✅ Pensar como um desenvolvedor orientado a objetos

---

# 🚀 Preparando a Próxima Aula

Na próxima aula construiremos um sistema ainda mais completo.

Teremos:

📂 Organização em múltiplos arquivos.

📂 Separação por pastas.

📂 Reutilização de classes.

📂 CRUD completo.

📂 Menus no terminal.

📂 Persistência em arquivos JSON.

A partir daí, nossos projetos começarão a se parecer com sistemas utilizados em empresas.
