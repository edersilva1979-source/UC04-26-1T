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


# 📂 Aula  - Organização de Projetos em TypeScript

## Parte 1 - Bloco 2B.1

# 📤📥 Compartilhando Classes com `export` e `import`

---

Na aula anterior organizamos nosso projeto.

Criamos a pasta `src`.

Criamos um arquivo para cada classe.

Nosso projeto ficou parecido com este.

```text
LocadoraGames

│

├── src

│

│     ├── Cliente.ts

│     ├── Game.ts

│     ├── Locacao.ts

│     └── main.ts

│

├── package.json

└── tsconfig.json
```

Até aqui tudo está funcionando.

Mas surgiu um novo problema.

---

# 🤔 Como uma Classe Encontra a Outra?

Imagine esta situação.

Você criou a classe:

```text
Cliente.ts
```

E dentro dela escreveu todo o código do cliente.

Depois criou outra classe.

```text
Locacao.ts
```

Agora pense comigo.

Como a classe **Locacao** vai utilizar um objeto da classe **Cliente**?

Ela simplesmente sabe onde ele está?

A resposta é:

❌ Não.

Cada arquivo conhece apenas o próprio conteúdo.

Se quisermos utilizar uma classe criada em outro arquivo, precisamos avisar ao TypeScript.

É exatamente para isso que existem os comandos:

📤 `export`

📥 `import`

---

# 📖 O Que é um Módulo?

Antes de aprender esses comandos, quero explicar uma palavra muito importante.

## Módulo

Um módulo é simplesmente um arquivo que pode compartilhar código com outros arquivos.

Em outras palavras.

Quando criamos um arquivo.

```text
Cliente.ts
```

Esse arquivo pode se tornar um módulo.

Basta permitir que outras classes utilizem aquilo que existe dentro dele.

---

# 🏠 Uma Comparação Bem Simples

Imagine que você mora em uma casa.

Cada quarto possui uma porta.

Se a porta permanecer fechada.

Ninguém consegue entrar.

Agora imagine que você abre essa porta.

As outras pessoas podem acessar aquele ambiente.

O comando:

```typescript
export
```

Faz exatamente isso.

Ele abre a porta da classe.

---

# 📦 O Que Faz o `export`?

Sempre que escrevemos.

```typescript
export
```

Estamos dizendo ao TypeScript:

> "Esta classe pode ser utilizada por outros arquivos."

É só isso.

Não existe nenhum segredo.

---

# 💻 Primeiro Exemplo

Imagine a classe Cliente.

```typescript
export class Cliente {

    constructor(

        public nome:string,

        public idade:number

    ){}

}
```

Observe a primeira palavra.

```typescript
export
```

Ela permite que outras partes do sistema utilizem essa classe.

---

# 🎮 Exemplo com Minecraft

Imagine o arquivo.

```text
Espada.ts
```

Dentro dele existe.

```typescript
export class Espada{

}
```

Agora qualquer outro arquivo poderá utilizar a classe Espada.

Sem o `export`...

Ela ficará "presa" naquele arquivo.

---

# 🦸 Exemplo com Liga dos Heróis

Arquivo.

```text
Heroi.ts
```

```typescript
export class Heroi{

}
```

Agora imagine outro arquivo.

```text
Equipe.ts
```

A equipe poderá utilizar a classe Heroi.

Mas ainda falta um passo.

---

# 📥 O Que Faz o `import`?

O `export` abriu a porta.

Agora precisamos entrar.

É exatamente isso que faz o comando.

```typescript
import
```

Ele traz uma classe de outro arquivo para dentro do arquivo atual.

Pense nele como um convite.

> "Venha trabalhar comigo."

---

# 📖 Uma Analogia

Imagine uma biblioteca.

Existe um livro de Matemática.

Você quer utilizá-lo.

Primeiro.

O livro precisa existir.

Depois.

Você precisa pegá-lo na estante.

Na programação acontece a mesma coisa.

Primeiro.

A classe precisa ser exportada.

Depois.

Ela precisa ser importada.

---

# 💻 Primeiro `import`

Imagine o arquivo.

```text
Cliente.ts
```

```typescript
export class Cliente{

}
```

Agora estamos dentro de outro arquivo.

```text
Locacao.ts
```

Para utilizar Cliente fazemos.

```typescript
import { Cliente } from "./Cliente";
```

Pronto.

Agora a classe Cliente já pode ser utilizada.

---

# 📚 Vamos Entender Cada Parte

Observe novamente.

```typescript
import { Cliente } from "./Cliente";
```

Vamos separar.

### import

Significa.

```text
Trazer
```

---

### Cliente

É o nome da classe.

---

### from

Significa.

```text
Vindo de...
```

---

### "./Cliente"

É o arquivo onde a classe está.

Observe.

Não colocamos:

```text
Cliente.ts
```

O TypeScript já entende automaticamente a extensão.

---

# 🧠 Pensando Como Programador

Sempre faça estas perguntas.

A classe está em outro arquivo?

↓

Sim.

Então preciso utilizar:

```typescript
import
```

---

Minha classe será utilizada em outro arquivo?

↓

Sim.

Então preciso utilizar:

```typescript
export
```

---

# 💡 Dica do Professor

Existe uma frase que gosto muito.

> Exportar é oferecer.

> Importar é utilizar.

Se decorar apenas isso, você já entenderá boa parte do funcionamento dos módulos.

---

# ⚠️ Erro Muito Comum Nº 1

Esquecer o `export`.

Exemplo.

```typescript
class Cliente{

}
```

Depois tentar importar.

```typescript
import { Cliente } from "./Cliente";
```

Resultado.

❌ Erro.

Porque a classe nunca foi exportada.

---

# ⚠️ Erro Muito Comum Nº 2

Escrever o nome errado.

Arquivo.

```text
Cliente.ts
```

Importação.

```typescript
import { Clientes } from "./Cliente";
```

Observe.

Existe um "s" no final.

Isso gera erro.

Os nomes precisam ser exatamente iguais.

---

# ⚠️ Erro Muito Comum Nº 3

Importar do arquivo errado.

```typescript
import { Cliente } from "./Produto";
```

O TypeScript procurará Cliente dentro do arquivo Produto.

Como ela não existe.

O código apresentará erro.

---

# 🎮 Exemplo Completo

Imagine nosso projeto.

```text
src

│

├── Cliente.ts

├── Game.ts

├── Locacao.ts

└── main.ts
```

Cada arquivo possui sua própria responsabilidade.

O Cliente fica em Cliente.ts.

O Game fica em Game.ts.

A Locação fica em Locacao.ts.

Depois utilizaremos `import` para conectar tudo isso.

---

# 🧠 Exercício 1

Responda mentalmente.

Qual classe precisa de `export`?

```text
Cliente.ts
```

✅ Sim.

---

```text
Game.ts
```

✅ Sim.

---

```text
Locacao.ts
```

✅ Sim.

---

# 🧠 Exercício 2

Complete a frase.

O comando.

```typescript
export
```

Serve para _______________________________.

---

O comando.

```typescript
import
```

Serve para _______________________________.

---

# 🚀 Preparando o Próximo Bloco

Agora você já sabe:

✅ O que é um módulo.

✅ O que faz o `export`.

✅ O que faz o `import`.

No próximo bloco vamos construir nosso primeiro projeto profissional.

Separaremos as classes:

📂 Cliente

📂 Game

📂 Locação

E faremos todas elas conversarem entre si utilizando `import` e `export`, exatamente como acontece em sistemas desenvolvidos no mercado.
