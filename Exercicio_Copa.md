# Exercício TypeScript: Simulador de Seleções da Copa do Mundo ⚽🏆

## Objetivo da atividade

Nesta atividade, você vai criar um pequeno sistema em TypeScript para simular a situação de algumas seleções em uma fase de grupos da Copa do Mundo.

A ideia é praticar os principais conceitos de Programação Orientada a Objetos, usando uma situação divertida, parecida com uma tabela de campeonato.

Ao final, você deverá conseguir:

* Criar uma classe
* Criar um construtor
* Usar atributos tipados
* Criar métodos
* Fazer cálculos simples
* Usar condicionais
* Criar objetos
* Exibir informações no console

---

# Cenário do exercício 🌍⚽

Imagine que você foi contratado para criar um sistema simples para acompanhar seleções durante a fase de grupos da Copa do Mundo.

Cada seleção precisa ter as seguintes informações:

* Nome da seleção
* Pontos conquistados
* Gols marcados
* Gols sofridos

Com essas informações, o sistema deverá calcular:

* Saldo de gols
* Situação da seleção no grupo

---

# Regras da classificação 🧠

A situação da seleção será definida de acordo com a quantidade de pontos:

| Pontos | Situação |
| :--- | :--- |
| 6 pontos ou mais | Classificada |
| De 3 a 5 pontos | Ainda tem chance |
| Menos de 3 pontos | Eliminada |

---

# Passo 1: Criar a classe Selecao

Crie uma classe chamada `Selecao`.

Essa classe será o modelo usado para criar cada seleção participante.

```typescript
class Selecao {

}
```

---

# Passo 2: Criar o construtor

O construtor deverá receber quatro informações:

* `nome`
* `pontos`
* `golsMarcados`
* `golsSofridos`

Use os tipos corretos para cada informação.

```typescript

  public nome: string,
  public pontos: number,
  public golsMarcados: number,
  public golsSofridos: number

```

## Explicação rápida

* `nome` recebe o nome da seleção
* `pontos` recebe a pontuação da seleção
* `golsMarcados` recebe o total de gols feitos
* `golsSofridos` recebe o total de gols tomados

---

# Passo 3: Criar o método saldoGols()

Crie um método chamado `saldoGols()`.

Esse método deverá retornar o saldo de gols da seleção.

A fórmula é:

```text
gols marcados menos gols sofridos
```

Exemplo:

```text
5 gols marcados menos 1 gol sofrido = saldo de 4 gols
```

Código esperado:

```typescript

```

---

# Passo 4: Criar o método situacaoGrupo()

Crie um método chamado `situacaoGrupo()`.

Esse método deverá retornar a situação da seleção no grupo.

Regras:

* Se tiver 6 pontos ou mais, retorna `Classificada`
* Se tiver 3 pontos ou mais, retorna `Ainda tem chance`
* Se tiver menos de 3 pontos, retorna `Eliminada`

Código esperado:

```typescript


```

---

# Passo 5: Criar o método exibirResumo()

Crie um método chamado `exibirResumo()`.

Esse método deverá mostrar no console todas as informações da seleção.

Ele não precisa retornar nenhum valor, apenas exibir os dados.

Código esperado:

```typescript

```

---


---

# Como executar o projeto 🚀

No terminal, dentro da pasta do projeto, execute:

```bash
npx ts-node index.ts
```

Se estiver usando JavaScript compilado, primeiro compile:

```bash
npx tsc index.ts
```

Depois execute:

```bash
node index.js
```

---

# Resultado esperado no console 📋

```text
================================
Seleção: Brasil
Pontos: 6
Gols Marcados: 5
Gols Sofridos: 1
Saldo de Gols: 4
Situação: Classificada
================================
================================
Seleção: Argentina
Pontos: 4
Gols Marcados: 3
Gols Sofridos: 2
Saldo de Gols: 1
Situação: Ainda tem chance
================================
================================
Seleção: Alemanha
Pontos: 2
Gols Marcados: 2
Gols Sofridos: 4
Saldo de Gols: -2
Situação: Eliminada
================================
================================
Seleção: Japão
Pontos: 3
Gols Marcados: 4
Gols Sofridos: 4
Saldo de Gols: 0
Situação: Ainda tem chance
================================
```

---

# Missão dos alunos 🎯

Agora é com você.

Altere os dados das seleções e simule novos cenários de classificação.

Você pode testar, por exemplo:

* Uma seleção com 9 pontos
* Uma seleção com saldo negativo
* Uma seleção com 0 pontos
* Uma seleção com muitos gols marcados
* Uma seleção que ainda tenha chance de classificação

---

# Desafio 1: Registrar vitória ⭐

Crie um método chamado `registrarVitoria()`.

Ele deverá receber:

* Gols marcados na partida
* Gols sofridos na partida

E deverá:

* Somar 3 pontos
* Atualizar os gols marcados
* Atualizar os gols sofridos

Exemplo de uso:

```typescript
brasil.registrarVitoria(2, 1);
```

---

# Desafio 2: Registrar empate ⭐⭐

Crie um método chamado `registrarEmpate()`.

Ele deverá receber:

* Gols marcados na partida
* Gols sofridos na partida

E deverá:

* Somar 1 ponto
* Atualizar os gols marcados
* Atualizar os gols sofridos

Exemplo de uso:

```typescript
argentina.registrarEmpate(1, 1);
```

---

# Desafio 3: Registrar derrota ⭐⭐⭐

Crie um método chamado `registrarDerrota()`.

Ele deverá receber:

* Gols marcados na partida
* Gols sofridos na partida

E deverá:

* Não somar pontos
* Atualizar os gols marcados
* Atualizar os gols sofridos

Exemplo de uso:

```typescript
alemanha.registrarDerrota(0, 2);
```

---

# Desafio 4: Criar uma tabela do grupo 🏆

Crie um array com várias seleções.

Depois, percorra esse array com `for...of` e exiba o resumo de cada seleção.

Exemplo:

```typescript
const grupo = [brasil, argentina, alemanha, japao];

for (const selecao of grupo) {
  selecao.exibirResumo();
}
```

---

# Desafio 5: O técnico ficou nervoso 😅

Crie uma regra extra:

Se uma seleção tiver saldo de gols menor que zero, exiba a mensagem:

```text
A defesa precisa treinar mais!
```

Dica:

Você pode criar um método chamado `comentarioTecnico()`.

---

# Conclusão

Nesta atividade, você praticou TypeScript com Programação Orientada a Objetos usando um tema divertido de Copa do Mundo.

Com esse exercício, você trabalhou:

* Classes
* Objetos
* Construtores
* Atributos tipados
* Métodos
* Condicionais
* Cálculos
* Arrays
* Exibição de dados no console

Agora você já consegue representar situações do mundo real dentro de um programa usando objetos. ⚽💻🏆
