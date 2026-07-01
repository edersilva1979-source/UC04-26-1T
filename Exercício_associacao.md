# ⚽ Exercício Prático de Programação Orientada a Objetos

## 🏆 Monte o Seu Time dos Sonhos!

Bem-vindo ao primeiro desafio de modelagem de objetos! 🎉

Agora é a sua vez de colocar em prática tudo o que aprendemos sobre **classes**, **objetos**, **construtores**, **atributos** e **relacionamento entre objetos**.

Imagine que você foi contratado para desenvolver um pequeno sistema para gerenciar um time de futebol. Seu objetivo será criar as classes necessárias e montar uma equipe completa.

---

# 🎯 Objetivo

Criar um sistema em **TypeScript** que represente um time de futebol utilizando os conceitos da Programação Orientada a Objetos.

Ao final deste exercício você deverá ser capaz de:

* ✅ Criar classes.
* ✅ Criar objetos.
* ✅ Utilizar construtores.
* ✅ Instanciar objetos.
* ✅ Relacionar objetos entre si.

---

# 📋 Desafio

Você deverá criar **3 classes**.

## 👨‍🏫 Classe Treinador

Esta classe representa o comandante do time.

Ela deverá possuir os seguintes atributos:

* Nome
* Idade

---

## ⚽ Classe Jogador

Esta classe representa um atleta da equipe.

Ela deverá possuir os seguintes atributos:

* Nome
* Nível de Habilidade
* Idade

💡 **Dica:** O nível de habilidade pode ser representado por um número de **0 a 100**.

Exemplo:

```text
95 → Craque ⭐⭐⭐⭐⭐

70 → Bom jogador 👍

40 → Ainda está treinando 😅
```

---

## 🏟️ Classe Time

Esta classe representa uma equipe de futebol.

Ela deverá possuir os seguintes atributos:

* Nome
* Treinador
* Jogador 1
* Jogador 2

Perceba que **Treinador** e **Jogadores** são objetos de outras classes.

Isso significa que você estará praticando um dos conceitos mais importantes da Orientação a Objetos: **o relacionamento entre objetos**.

---

# 🧠 Antes de Programar

Pense na estrutura do sistema.

Ela deve ficar parecida com esta:

```text
                 Time

        ┌────────┼────────┐
        │        │        │
 Treinador   Jogador 1  Jogador 2
```

O objeto **Time** conhece os demais objetos e reúne todas as informações da equipe.

---

# ⚙️ Requisitos

Seu programa deverá:

* Criar um treinador.
* Criar dois jogadores.
* Criar um time.
* Associar o treinador e os jogadores ao time.
* Exibir todas as informações no console.

---

# 💻 Exemplo de Saída Esperada

```text
=================================

TIME: Os Invencíveis

Treinador: Carlos Alberto

Idade: 48 anos

---------------------------------

Jogador 1

Nome: Lucas

Idade: 19 anos

Habilidade: 92

---------------------------------

Jogador 2

Nome: Gabriel

Idade: 21 anos

Habilidade: 88

=================================
```

---

# ⭐ Desafio Extra

Depois que tudo estiver funcionando, faça algumas melhorias.

## 🥇 Desafio 1

Adicione um terceiro jogador ao time.

---

## 🥈 Desafio 2

Crie um método chamado:

```text
exibirTime()
```

Esse método deverá mostrar todas as informações da equipe no console.

---

## 🥉 Desafio 3

Crie um método chamado:

```text
calcularMediaHabilidade()
```

Ele deverá calcular a média do nível de habilidade dos jogadores.

Exemplo:

```text
Lucas: 90

Gabriel: 80

Média: 85
```

---

## 🏅 Desafio 4

Mostre uma mensagem de acordo com a média da equipe.

Se a média for:

⭐ **90 ou mais**

```text
🌟 Time favorito ao título!
```

⭐ **Entre 70 e 89**

```text
⚽ Excelente equipe!
```

⭐ **Abaixo de 70**

```text
💪 Ainda precisa treinar bastante!
```

---

# 🚀 Desafio Bônus

Se você terminar antes dos colegas, transforme seu sistema em um verdadeiro campeonato.

Crie uma nova classe chamada:

```text
Campeonato
```

Ela deverá armazenar dois ou mais times.

Depois, exiba todos os times cadastrados.

---

# 💡 Dica do Professor

Quando estiver desenvolvendo este exercício, faça uma pergunta a si mesmo:

> "Estou criando um atributo simples ou estou armazenando outro objeto?"

Essa reflexão ajuda a identificar quando utilizar relacionamentos entre classes, uma das habilidades mais importantes na Programação Orientada a Objetos.

---

# 🏆 Missão

Seu desafio é montar o melhor time possível!

Boa programação e divirta-se! ⚽💻🚀

