# 📚 Exercício Prático de Programação Orientada a Objetos

# 🏫 Sistema de Empréstimo de Livros da Biblioteca

Bem-vindo a mais um desafio de Programação Orientada a Objetos! 🚀

Desta vez você será o desenvolvedor responsável pelo sistema da biblioteca da escola.

Seu objetivo será criar as classes necessárias para controlar o empréstimo de livros entre alunos.

⚠️ Atenção!

A bibliotecária está cansada de perder o controle dos livros e não quer mais ouvir a famosa frase:

> "Eu juro que devolvi esse livro..." 😂

Vamos ajudá-la?

---

# 🎯 Objetivo

Neste exercício você irá praticar:

* ✅ Criação de Classes
* ✅ Objetos
* ✅ Construtores
* ✅ Atributos
* ✅ Relacionamento entre Objetos
* ✅ Organização de informações

---

# 📖 Cenário

Imagine uma biblioteca escolar.

Todos os dias vários alunos retiram livros para estudar.

Para organizar esse processo, precisamos criar um pequeno sistema capaz de registrar quem pegou qual livro e quando deverá devolvê-lo.

---

# 🛠️ Desafio

Você deverá criar **3 classes**.

---

# 📚 Classe Livro

Representa um livro da biblioteca.

Ela deverá possuir os seguintes atributos:

* Nome
* Número de páginas
* Autor

---

# 👨‍🎓 Classe Aluno

Representa um estudante da escola.

Ela deverá possuir os seguintes atributos:

* Nome
* Idade
* Turma

---

# 📝 Classe Emprestimo

Esta será a classe principal do exercício.

Ela representa o empréstimo de um livro para um aluno.

Ela deverá possuir os seguintes atributos:

* Data do empréstimo
* Livro
* Aluno
* Data de devolução

⚠️ Observe que os atributos **Livro** e **Aluno** são objetos criados em outras classes.

Isso significa que você estará praticando um dos conceitos mais importantes da Programação Orientada a Objetos: **o relacionamento entre objetos**.

---

# 🧠 Antes de Programar

Pense na estrutura do sistema.

Ela deverá ficar parecida com esta.

```text
                 Empréstimo

        ┌────────────┼────────────┐
        │            │            │

     Data         Livro       Aluno

        │            │            │

Data Devolução   Nome      Nome
                 Autor     Turma
                 Páginas   Idade
```

Observe que um empréstimo reúne informações de diferentes objetos.

---

# 💻 Exemplo de Objetos

Você poderá criar objetos parecidos com estes:

## Livro

```text
Nome:
Java para Iniciantes

Autor:
João Silva

Páginas:
320
```

---

## Aluno

```text
Nome:
Lucas

Idade:
17

Turma:
3º Desenvolvimento de Sistemas
```

---

## Empréstimo

```text
Data:
01/07/2026

Livro:
Java para Iniciantes

Aluno:
Lucas

Devolução:
15/07/2026
```

---

# 📺 Exemplo de Saída Esperada

```text
=====================================

📚 BIBLIOTECA ESCOLAR

=====================================

Livro:

Java para Iniciantes

Autor:

João Silva

Número de páginas:

320

-------------------------------------

Aluno:

Lucas

Idade:

17 anos

Turma:

3º Desenvolvimento de Sistemas

-------------------------------------

Data do empréstimo:

01/07/2026

Data prevista para devolução:

15/07/2026

=====================================
```

---

# ⭐ Desafio Extra

Depois de concluir o exercício, tente implementar as melhorias abaixo.

---

## 📅 Desafio 1

Crie um método chamado:

```text
exibirEmprestimo()
```

Ele deverá mostrar todas as informações do empréstimo de forma organizada.

---

## 📅 Desafio 2

Crie um método chamado:

```text
estaAtrasado()
```

Ele deverá verificar se o livro já passou da data prevista de devolução.

Caso esteja atrasado, exiba:

```text
📕 Atenção!

Este livro está com devolução atrasada.
```

Caso contrário:

```text
📗 Empréstimo dentro do prazo.
```

---

## 📚 Desafio 3

Adicione um novo atributo na classe Livro.

```text
categoria
```

Exemplos:

* Romance ❤️
* Ficção Científica 🚀
* Programação 💻
* História 🌎
* Terror 👻

Depois exiba essa informação no resumo do empréstimo.

---

## 🏆 Desafio Bônus

A biblioteca cresceu!

Agora crie uma nova classe chamada:

```text
Biblioteca
```

Ela deverá possuir:

* Nome
* Lista de Livros
* Lista de Empréstimos

Depois cadastre vários livros e vários empréstimos.

---

# 💡 Dica do Professor

Observe que a classe **Empréstimo** não precisa copiar todas as informações do livro ou do aluno.

Ela apenas guarda uma referência para esses objetos.

É exatamente assim que sistemas profissionais funcionam.

Quando aprendemos a relacionar objetos corretamente, evitamos repetir informações e deixamos nosso código muito mais organizado.

---

# 😂 Curiosidade

Se você esquecer de devolver o livro...

Talvez a bibliotecária não fique brava.

Mas o sistema certamente vai lembrar você! 📚⏰😄

---

# 🏁 Missão

Sua missão é desenvolver um sistema simples, organizado e bem estruturado para ajudar a biblioteca da escola.

Boa programação e... não esqueça de devolver os livros no prazo! 📚💻🚀

