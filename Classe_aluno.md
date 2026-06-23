# Entendendo uma Classe em TypeScript Passo a Passo

## Objetivo

Nesta aula vamos analisar uma classe simples em TypeScript e entender exatamente o que cada linha faz.

Código que será estudado:

```typescript
class Aluno {
  constructor(public nome: string, public notas: number[]) {}

  media(): number {
    const soma = this.notas.reduce((acc, n) => acc + n, 0);
    return soma / this.notas.length;
  }

  situacao(): string {
    return this.media() >= 7 ? "Aprovado" : "Recuperação";
  }
}

const a1 = new Aluno("Leo", [6, 7, 8]);
console.log(a1.media());
console.log(a1.situacao());
```

---

# O que é uma Classe?

Uma classe é um modelo utilizado para criar objetos.

Pense na classe como a planta de uma casa.

A partir dessa planta podemos construir várias casas diferentes.

No nosso exemplo:

```typescript
class Aluno {
```

Estamos criando uma classe chamada **Aluno**.

---

# O Construtor

```typescript
constructor(public nome: string, public notas: number[]) {}
```

O construtor é executado automaticamente sempre que um novo objeto é criado.

Sua função é receber os valores iniciais e armazená-los dentro do objeto.

---

## Entendendo o parâmetro nome

```typescript
public nome: string
```

### public

Indica que o atributo pode ser acessado fora da classe.

### nome

É o nome do atributo.

### string

Indica que esse atributo só poderá armazenar textos.

Exemplo:

```typescript
const aluno = new Aluno("João", [8, 9, 10]);
```

Neste caso:

```typescript
nome = "João"
```

---

## Entendendo o parâmetro notas

```typescript
public notas: number[]
```

### public

Permite acesso externo.

### notas

Nome do atributo.

### number[]

Indica que será armazenada uma lista de números.

Exemplo:

```typescript
[8, 9, 10]
```

---

# Método media()

```typescript
media(): number {
```

Cria um método chamado **media**.

Esse método retorna um valor do tipo número.

---

## Somando as notas

```typescript
const soma = this.notas.reduce((acc, n) => acc + n, 0);
```

Esta linha é responsável por somar todas as notas do aluno.

---

### this.notas

```typescript
this.notas
```

Acessa o atributo notas do objeto atual.

Por exemplo:

```typescript
[6, 7, 8]
```

---

### reduce()

```typescript
reduce(...)
```

O método reduce percorre todos os elementos do array e os transforma em um único valor.

Neste caso, a soma total das notas.

---

### acc

```typescript
acc
```

É o acumulador.

Ele guarda o valor da soma parcial.

---

### n

```typescript
n
```

Representa a nota atual que está sendo processada.

---

### acc + n

```typescript
acc + n
```

Soma o valor acumulado com a nota atual.

---

### Valor inicial

```typescript
0
```

O acumulador inicia em zero.

---

### Exemplo completo

Array:

```typescript
[6, 7, 8]
```

Passo 1:

```text
0 + 6 = 6
```

Passo 2:

```text
6 + 7 = 13
```

Passo 3:

```text
13 + 8 = 21
```

Resultado:

```typescript
soma = 21
```

---

## Calculando a média

```typescript
return soma / this.notas.length;
```

Divide a soma pela quantidade de notas.

---

### this.notas.length

```typescript
this.notas.length
```

Retorna quantas notas existem.

No exemplo:

```typescript
[6, 7, 8]
```

Quantidade:

```text
3
```

---

### Resultado da média

```text
21 ÷ 3 = 7
```

O método retorna:

```typescript
7
```

---

# Método situacao()

```typescript
situacao(): string {
```

Cria um método chamado situacao.

Esse método retorna um texto.

---

## Operador Ternário

```typescript
return this.media() >= 7 ? "Aprovado" : "Recuperação";
```

Esta linha faz uma comparação.

---

### Primeira parte

```typescript
this.media() >= 7
```

Verifica se a média é maior ou igual a 7.

---

### Se for verdadeiro

```typescript
"Aprovado"
```

---

### Se for falso

```typescript
"Recuperação"
```

---

### Equivalente usando if

O mesmo código poderia ser escrito assim:

```typescript
if (this.media() >= 7) {
    return "Aprovado";
} else {
    return "Recuperação";
}
```

---

# Criando um Objeto

```typescript
const a1 = new Aluno("Leo", [6, 7, 8]);
```

Aqui estamos criando um objeto da classe Aluno.

---

## Valores enviados ao construtor

Nome:

```typescript
"Leo"
```

Notas:

```typescript
[6, 7, 8]
```

---

# Exibindo a Média

```typescript
console.log(a1.media());
```

Executa o método media().

Cálculo:

```text
(6 + 7 + 8) ÷ 3
```

Resultado:

```text
7
```

Saída:

```text
7
```

---

# Exibindo a Situação

```typescript
console.log(a1.situacao());
```

Executa o método situacao().

Como a média é igual a 7:

```text
7 >= 7
```

Resultado:

```text
Aprovado
```

Saída:

```text
Aprovado
```

---

# Fluxo Completo do Programa

```text
Criar objeto Aluno
        ↓
Receber nome e notas
        ↓
Calcular soma das notas
        ↓
Calcular média
        ↓
Verificar situação
        ↓
Exibir resultados
```

---

# Resultado Final

Ao executar o programa:

```typescript
const a1 = new Aluno("Leo", [6, 7, 8]);

console.log(a1.media());
console.log(a1.situacao());
```

O console exibirá:

```text
7
Aprovado
```

---

# Resumo

Neste exemplo aprendemos:

* O que é uma classe.
* O que é um objeto.
* O que é um construtor.
* Como criar atributos.
* Como criar métodos.
* Como utilizar arrays.
* Como utilizar o método reduce().
* Como calcular médias.
* Como utilizar operadores ternários.
* Como instanciar objetos.
* Como exibir informações no console.

Esses conceitos formam a base da Programação Orientada a Objetos em TypeScript.

