# 📦 Módulo 2 - Construindo Sistemas Profissionais

# 📂 Aula - Organização de Projetos em TypeScript

## Parte 1 

# 🏗️ Construindo a Estrutura do Nosso Primeiro Projeto Profissional

---

# 👨‍🏫 Agora Vamos Colocar a Mão na Massa!

Na primeira parte desta aula eu mostrei por que organizar um projeto é importante.

Agora chegou o momento de fazer isso na prática.

Até aqui nossos programas eram pequenos.

Um único arquivo era suficiente.

Mas imagine que nosso sistema continue crescendo.

Hoje temos apenas três classes.

Amanhã teremos dez.

Depois vinte.

Logo serão cinquenta classes.

É nesse momento que precisamos aprender uma habilidade muito importante.

> Organizar o projeto antes que ele fique desorganizado.

É exatamente isso que desenvolvedores fazem todos os dias.

---

# 📂 A Pasta `src`

Quase todos os projetos TypeScript possuem uma pasta chamada:

```text
src
```

Talvez você esteja pensando:

"Professor, por que esse nome?"

A palavra **src** é uma abreviação de **source**, que significa:

```text
Código-fonte
```

Ou seja...

Tudo aquilo que nós escrevemos ficará dentro dessa pasta.

---

# 🎮 Fazendo uma Comparação

Imagine um videogame.

Ele possui várias partes.

🎮 Controle

🎮 Fonte

🎮 Cabos

🎮 Console

O que realmente faz o videogame funcionar?

O console.

Podemos imaginar a pasta `src` exatamente assim.

Ela é o coração do projeto.

É nela que ficam nossas classes e arquivos.

---

# 📁 Nosso Primeiro Projeto

Vamos criar um projeto chamado:

```text
LocadoraGames
```

Nossa estrutura inicial ficará assim.

```text
LocadoraGames

│

├── src

│

└── package.json
```

Observe.

Neste momento ainda existe apenas uma pasta importante.

```text
src
```

Tudo será construído dentro dela.

---

# 🤔 Por Que Não Colocar Tudo Fora da Pasta `src`?

Poderíamos fazer isso.

Mas imagine este projeto.

```text
Cliente.ts

Produto.ts

Pedido.ts

Imagem.png

README.md

package.json

tsconfig.json

index.html

styles.css
```

Tudo misturado.

Encontrar qualquer arquivo começaria a ficar difícil.

Agora veja a diferença.

```text
Projeto

│

├── src

├── imagens

├── documentos

├── package.json

└── README.md
```

Muito melhor.

Cada coisa está em seu lugar.

---

# 💡 Dica do Professor

Sempre pense em um projeto como uma empresa.

Em uma empresa existem setores.

Financeiro.

Compras.

Recursos Humanos.

Vendas.

Todos trabalham juntos.

Mas cada um possui sua própria responsabilidade.

Com projetos acontece exatamente a mesma coisa.

Cada pasta possui uma função específica.

---

# 📂 Criando Nossa Primeira Classe

Vamos criar a pasta.

```text
src
```

Depois criaremos um arquivo.

```text
Cliente.ts
```

Nossa estrutura ficará assim.

```text
Projeto

│

├── src

│     └── Cliente.ts

│

└── package.json
```

Perceba como o nome do arquivo representa exatamente a classe que ele contém.

---

# 🧑‍💻 E Se Tivermos Outra Classe?

Muito simples.

Criamos outro arquivo.

```text
Game.ts
```

Agora teremos.

```text
Projeto

│

├── src

│     ├── Cliente.ts

│     └── Game.ts
```

Muito mais organizado.

---

# 🎮 Exemplo com Minecraft

Imagine o Minecraft.

Existe uma classe.

```text
Espada
```

Ela ficaria em.

```text
Espada.ts
```

Outra classe.

```text
Machado
```

Ficaria em.

```text
Machado.ts
```

Outra.

```text
Armadura
```

Ficaria em.

```text
Armadura.ts
```

Cada classe possui sua própria casa.

---

# 🦸 Exemplo com a Liga dos Heróis

Nosso projeto poderia ficar assim.

```text
src

│

├── Heroi.ts

├── Equipe.ts

├── Batalha.ts

└── Main.ts
```

Observe como fica fácil entender o projeto apenas olhando os nomes dos arquivos.

---

# 📄 O Arquivo `main.ts`

Até agora sempre utilizamos.

```text
index.ts
```

Mas em muitos projetos utilizamos um arquivo chamado.

```text
main.ts
```

Ele possui uma responsabilidade muito importante.

É nele que o programa começa.

Imagine um teatro.

Os atores estão nos bastidores.

Quando o espetáculo começa...

Alguém abre as cortinas.

O `main.ts` faz exatamente isso.

Ele inicia o programa.

---

# 🖥️ Estrutura Inicial

Nosso projeto ficará parecido com isto.

```text
LocadoraGames

│

├── src

│

│     ├── Cliente.ts

│

│     ├── Game.ts

│

│     ├── Locacao.ts

│

│     └── main.ts

│

├── package.json

└── tsconfig.json
```

Mesmo sem escrever uma única linha de código...

Nosso projeto já parece profissional.

---

# 💡 Dica do Professor

Quando você criar uma nova classe, faça sempre esta pergunta.

> "Ela merece um arquivo próprio?"

Na maioria das vezes...

A resposta será:

Sim.

Essa é uma das boas práticas mais importantes da programação.

---

# ⚠️ Erro Muito Comum

Alguns alunos fazem isto.

```text
Classes.ts
```

E colocam dentro dele.

Cliente.

Produto.

Pedido.

Funcionário.

Game.

Locação.

Tudo junto.

Isso funciona.

Mas dificulta muito a manutenção.

O ideal é:

Uma classe.

↓

Um arquivo.

---

# 🧠 Exercício 1

Crie a estrutura abaixo.

```text
Biblioteca

│

├── src

│

│     ├── Livro.ts

│

│     ├── Aluno.ts

│

│     ├── Emprestimo.ts

│

│     └── main.ts
```

Não escreva código ainda.

Apenas organize as pastas.

---

# 🧠 Exercício 2

Agora imagine um sistema para um hospital.

Como você organizaria as primeiras classes?

Escreva uma estrutura parecida com esta.

```text
Hospital

│

├── src

│

│     ├── ?

│

│     ├── ?

│

│     ├── ?

│

│     └── main.ts
```

Tente pensar como um desenvolvedor.

Quais classes seriam necessárias?

---

# 🎯 Missão

Antes de continuarmos, organize o projeto da **Locadora de Games** utilizando exatamente a estrutura apresentada nesta aula.

Ainda não vamos escrever código.

Nossa missão neste momento é apenas aprender a organizar o projeto.

Nas próximas aulas começaremos a preencher cada um desses arquivos com nossas classes.

---

# 🚀 O Que Veremos no Próximo Bloco?

Agora que aprendemos a separar nossas classes em arquivos, surgiu uma nova pergunta.

Se cada classe está em um arquivo diferente...

Como uma classe consegue utilizar outra?

É exatamente isso que aprenderemos a seguir.

Você conhecerá dois comandos fundamentais do TypeScript.

📤 `export`

📥 `import`

Eles são responsáveis por fazer as classes "conversarem" entre si, permitindo construir projetos organizados e reutilizáveis.

