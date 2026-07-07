# Entendendo o método `buscarPorMarca()` em TypeScript

## Código

```typescript
buscarPorMarca(marca: string): void {
    const encontrados = this.computadores.filter(
        (computador) => computador.marca.toLowerCase() === marca.toLowerCase()
    );
}
```

---

# O que esse método faz?

Esse método procura todos os computadores que pertencem a uma determinada marca.

Imagine a seguinte lista:

| ID | Marca | Modelo |
|----|--------|---------|
|1|Dell|Inspiron|
|2|Lenovo|ThinkPad|
|3|Dell|Vostro|
|4|Samsung|Book|

Se chamarmos:

```typescript
buscarPorMarca("Dell");
```

O resultado será:

```text
Dell Inspiron
Dell Vostro
```

Ou seja, ele encontra todos os computadores cuja marca seja **Dell**.

---

# Linha 1

```typescript
buscarPorMarca(marca: string): void {
```

## `buscarPorMarca`

É o nome do método.

Representa a ação de procurar computadores pela marca.

## `marca`

É uma variável que recebe o texto informado pelo usuário.

Exemplos:

```text
Dell
Lenovo
Samsung
```

## `: string`

Indica que a variável **marca** deve armazenar um texto.

Exemplos válidos:

```typescript
"Dell"
"Positivo"
```

Exemplo inválido:

```typescript
10
```

Porque `10` é um número.

## `: void`

Significa que o método não devolve nenhum valor.

Ele apenas executa uma ação.

---

# Linha 2

```typescript
const encontrados =
```

Aqui estamos criando uma variável chamada **encontrados**.

Ela armazenará todos os computadores encontrados durante a pesquisa.

Antes da busca:

```text
[
]
```

Depois da busca:

```text
[
Dell Inspiron,
Dell Vostro
]
```

## O que significa `const`?

Significa que essa variável sempre apontará para esse resultado.

---

# A lista de computadores

```typescript
this.computadores
```

O `this` significa:

> Utilize a lista de computadores desta classe.

Exemplo:

```typescript
[
    { marca: "Dell" },
    { marca: "Lenovo" },
    { marca: "Dell" },
    { marca: "Samsung" }
]
```

---

# O método `filter()`

```typescript
this.computadores.filter(...)
```

O método `filter()` percorre toda a lista e cria uma nova lista contendo apenas os elementos que atendem à condição definida.

Visualmente:

```text
Dell
 ↓
Lenovo
 ↓
Dell
 ↓
Samsung
```

Ele analisa cada computador individualmente.

---

# O parâmetro `computador`

```typescript
(computador) =>
```

O `filter()` entrega um computador por vez.

Primeira passagem:

```text
Dell
```

Segunda passagem:

```text
Lenovo
```

Terceira passagem:

```text
Dell
```

Quarta passagem:

```text
Samsung
```

---

# A propriedade `marca`

```typescript
computador.marca
```

Obtém apenas a marca do computador atual.

Exemplo:

```typescript
{
    marca: "Dell",
    modelo: "Inspiron"
}
```

Então:

```typescript
computador.marca
```

vale:

```text
Dell
```

---

# O método `toLowerCase()`

```typescript
computador.marca.toLowerCase()
```

Converte o texto para letras minúsculas.

Exemplos:

```text
Dell     → dell
LENOVO   → lenovo
Samsung  → samsung
```

O mesmo acontece com a marca informada pelo usuário:

```typescript
marca.toLowerCase()
```

Assim evitamos problemas com letras maiúsculas e minúsculas.

Sem `toLowerCase()`:

```text
Dell ≠ DELL
```

Com `toLowerCase()`:

```text
dell = dell
```

---

# O operador `===`

```typescript
computador.marca.toLowerCase() === marca.toLowerCase()
```

O operador `===` compara dois valores verificando se são exatamente iguais.

Pergunta feita pelo programa:

> A marca do computador é igual à marca informada pelo usuário?

Se a resposta for **Sim**, o computador entra na lista.

Se for **Não**, ele é ignorado.

---

# Como o `filter()` funciona

Imagine esta lista:

```text
Dell
Lenovo
Samsung
Dell
```

Você procura por:

```text
Dell
```

O `filter()` faz o seguinte:

```text
Dell
É igual?
SIM
↓
Adiciona na lista
```

```text
Lenovo
É igual?
NÃO
↓
Ignora
```

```text
Samsung
É igual?
NÃO
↓
Ignora
```

```text
Dell
É igual?
SIM
↓
Adiciona na lista
```

Resultado:

```typescript
[
    { marca: "Dell", modelo: "Inspiron" },
    { marca: "Dell", modelo: "Vostro" }
]
```

---

# Resumo

1. Recebe uma marca digitada pelo usuário.
2. Percorre toda a lista de computadores.
3. Analisa um computador por vez.
4. Converte as marcas para letras minúsculas.
5. Compara as marcas utilizando `===`.
6. Guarda apenas os computadores da marca pesquisada.
7. Armazena o resultado na variável `encontrados`.

---

# Fluxograma

```text
Usuário digita "Dell"
          │
          ▼
Recebe o texto no parâmetro marca
          │
          ▼
Percorre toda a lista
          │
          ▼
Compara cada marca
          │
     ┌────┴────┐
     │         │
    Sim       Não
     │         │
Adiciona    Ignora
na lista
     │
     ▼
Lista final com todos os computadores encontrados
```

## Conclusão

O método `filter()` é uma das ferramentas mais utilizadas em TypeScript e JavaScript para pesquisar elementos em listas. Ele cria uma nova lista contendo apenas os itens que atendem à condição especificada, mantendo a lista original inalterada.
