# Aula: Trabalhando com Arrays em TypeScript

# Objetivos

Nesta aula eu vou aprender a:

* Entender o que é um Array.
* Adicionar elementos utilizando `push()`.
* Procurar elementos com `find()`.
* Descobrir a posição de um elemento com `findIndex()`.
* Criar partes de um Array utilizando `slice()`.

---

# O que é um Array?

Imagine que eu precise guardar vários computadores.

Ao invés de criar uma variável para cada um deles, eu posso colocar todos dentro de uma única lista.

Essa lista recebe o nome de **Array**.

Exemplo:

```typescript
const computadores = [
    "Dell",
    "Lenovo",
    "Samsung",
    "Acer"
];
```

Visualmente:

```
Posição      Valor

0 ---------- Dell
1 ---------- Lenovo
2 ---------- Samsung
3 ---------- Acer
```

Perceba que a primeira posição sempre é **0**.

---

# O método push()

## Para que serve?

Sempre que eu quiser adicionar um novo elemento ao final do Array, utilizo o método `push()`.

### Exemplo

```typescript
const computadores = [
    "Dell",
    "Lenovo",
    "Samsung"
];

computadores.push("Acer");

console.log(computadores);
```

Resultado:

```
[
"Dell",
"Lenovo",
"Samsung",
"Acer"
]
```

### Como funciona?

```typescript
computadores.push("Acer");
```

* `computadores` é o Array.
* `push()` significa adicionar.
* `"Acer"` é o novo elemento.

Antes:

```
Dell
Lenovo
Samsung
```

Depois:

```
Dell
Lenovo
Samsung
Acer
```

💡 **Dica:** O `push()` sempre adiciona no final da lista.

---

# O método find()

## Para que serve?

Quando eu quero encontrar um elemento específico dentro do Array, utilizo `find()`.

### Exemplo

```typescript
const computadores = [
    "Dell",
    "Lenovo",
    "Samsung",
    "Acer"
];

const encontrado = computadores.find(
    computador => computador === "Samsung"
);

console.log(encontrado);
```

Resultado:

```
Samsung
```

### O que acontece?

O `find()` percorre a lista do início ao fim.

Quando encontra o primeiro elemento que atende à condição, ele para a busca.

Visualmente:

```
Dell        ❌
Lenovo      ❌
Samsung     ✅
Acer
```

Resultado:

```
Samsung
```

Se ele não encontrar nada, retorna:

```typescript
undefined
```

---

# O método findIndex()

## Para que serve?

Às vezes eu não quero o valor.

Eu quero saber em qual posição ele está.

Para isso utilizo `findIndex()`.

### Exemplo

```typescript
const computadores = [
    "Dell",
    "Lenovo",
    "Samsung",
    "Acer"
];

const indice = computadores.findIndex(
    computador => computador === "Samsung"
);

console.log(indice);
```

Resultado:

```
2
```

Porque:

```
0 Dell
1 Lenovo
2 Samsung
3 Acer
```

Se o elemento não existir:

```
-1
```

💡 **Importante:** Sempre que `findIndex()` retornar `-1`, significa que o elemento não foi encontrado.

---

# O método slice()

## Para que serve?

O `slice()` cria uma cópia de uma parte do Array.

Ele não altera a lista original.

### Exemplo

```typescript
const computadores = [
    "Dell",
    "Lenovo",
    "Samsung",
    "Acer",
    "Positivo"
];

const novos = computadores.slice(1,4);

console.log(novos);
```

Resultado:

```
Lenovo
Samsung
Acer
```

### Como funciona?

```typescript
slice(1,4)
```

Significa:

* Começar na posição **1**.
* Parar antes da posição **4**.

Visualmente:

```
0 Dell

1 Lenovo      ✔

2 Samsung     ✔

3 Acer        ✔

4 Positivo    ✘
```

Resultado:

```
[
Lenovo,
Samsung,
Acer
]
```

---

# Comparando os métodos

| Método | Função |
|---------|--------|
| `push()` | Adiciona um elemento ao final do Array. |
| `find()` | Retorna o primeiro elemento encontrado. |
| `findIndex()` | Retorna a posição do elemento encontrado. |
| `slice()` | Cria uma cópia de parte do Array. |

---

# Exercício Prático

Crie um Array contendo cinco marcas de computadores.

Depois faça:

1. Adicione uma nova marca utilizando `push()`.
2. Procure por uma marca utilizando `find()`.
3. Descubra a posição dessa marca com `findIndex()`.
4. Crie um novo Array contendo apenas três marcas utilizando `slice()`.
5. Exiba todos os resultados no console.

---

# Resumo

Nesta aula eu aprendi que:

* Um Array é uma lista de elementos.
* `push()` adiciona um novo elemento ao final da lista.
* `find()` procura um elemento e retorna seu valor.
* `findIndex()` informa a posição do elemento encontrado.
* `slice()` cria uma nova lista contendo apenas uma parte do Array.

Esses métodos são alguns dos mais utilizados no desenvolvimento em TypeScript e aparecem em praticamente todos os sistemas que trabalham com listas de dados.

# Aula 2: Métodos de Arrays em TypeScript

# Objetivos

Nesta aula eu vou aprender a utilizar alguns dos métodos de Arrays mais usados no desenvolvimento profissional.

Ao final desta aula eu saberei utilizar:

* `pop()`
* `shift()`
* `unshift()`
* `splice()`
* `includes()`
* `map()`
* `forEach()`
* `filter()`
* `sort()`
* `reverse()`

---

# Revisando

Um Array é uma lista de elementos.

```typescript
const computadores = [
    "Dell",
    "Lenovo",
    "Samsung",
    "Acer"
];
```

---

# pop()

## Para que serve?

Eu utilizo `pop()` quando quero remover o último elemento da lista.

```typescript
const computadores = ["Dell", "Lenovo", "Samsung"];

computadores.pop();

console.log(computadores);
```

Resultado:

```text
["Dell", "Lenovo"]
```

💡 O `pop()` remove sempre o último item.

---

# shift()

O `shift()` remove o primeiro elemento.

```typescript
const computadores = ["Dell", "Lenovo", "Samsung"];

computadores.shift();
```

Resultado:

```text
["Lenovo","Samsung"]
```

---

# unshift()

O `unshift()` adiciona um elemento no início da lista.

```typescript
const computadores = ["Lenovo","Samsung"];

computadores.unshift("Dell");
```

Resultado:

```text
["Dell","Lenovo","Samsung"]
```

---

# splice()

O `splice()` pode remover, adicionar ou substituir elementos.

Removendo um elemento:

```typescript
const computadores = ["Dell","Lenovo","Samsung","Acer"];

computadores.splice(1,1);
```

Resultado:

```text
["Dell","Samsung","Acer"]
```

Substituindo:

```typescript
computadores.splice(1,1,"HP");
```

Resultado:

```text
["Dell","HP","Acer"]
```

Explicação:

* Primeiro número: posição inicial.
* Segundo número: quantidade de itens removidos.
* Depois: novos elementos.

---

# includes()

O `includes()` verifica se um elemento existe.

```typescript
const computadores = ["Dell","Lenovo","Samsung"];

console.log(computadores.includes("Dell"));
```

Resultado:

```text
true
```

Se não existir:

```typescript
console.log(computadores.includes("Positivo"));
```

Resultado:

```text
false
```

---

# map()

O `map()` percorre toda a lista e cria uma nova lista transformando cada elemento.

```typescript
const marcas = ["Dell","Lenovo","Samsung"];

const maiusculas = marcas.map(
    marca => marca.toUpperCase()
);

console.log(maiusculas);
```

Resultado:

```text
["DELL","LENOVO","SAMSUNG"]
```

💡 O Array original continua igual.

---

# forEach()

O `forEach()` percorre toda a lista para executar uma ação.

```typescript
const marcas = ["Dell","Lenovo","Samsung"];

marcas.forEach(marca => {
    console.log(marca);
});
```

Saída:

```text
Dell
Lenovo
Samsung
```

Ele não cria um novo Array.

---

# filter()

O `filter()` cria uma nova lista contendo apenas os elementos que atendem a uma condição.

```typescript
const marcas = ["Dell","Lenovo","Samsung","Dell"];

const dell = marcas.filter(
    marca => marca === "Dell"
);

console.log(dell);
```

Resultado:

```text
["Dell","Dell"]
```

---

# sort()

O `sort()` organiza os elementos.

```typescript
const marcas = ["Samsung","Dell","Lenovo"];

marcas.sort();

console.log(marcas);
```

Resultado:

```text
["Dell","Lenovo","Samsung"]
```

---

# reverse()

O `reverse()` inverte a ordem dos elementos.

```typescript
const marcas = ["Dell","Lenovo","Samsung"];

marcas.reverse();
```

Resultado:

```text
["Samsung","Lenovo","Dell"]
```

---

# Resumo dos métodos

| Método       | O que faz                                       |
| ------------ | ----------------------------------------------- |
| `pop()`      | Remove o último elemento.                       |
| `shift()`    | Remove o primeiro elemento.                     |
| `unshift()`  | Adiciona no início.                             |
| `splice()`   | Remove, adiciona ou substitui elementos.        |
| `includes()` | Verifica se um elemento existe.                 |
| `map()`      | Cria uma nova lista transformando os elementos. |
| `forEach()`  | Percorre toda a lista executando uma ação.      |
| `filter()`   | Cria uma nova lista filtrando elementos.        |
| `sort()`     | Organiza os elementos.                          |
| `reverse()`  | Inverte a ordem da lista.                       |

---

# Exercício Prático

Crie um Array contendo cinco marcas de computadores.

Depois:

1. Remova o último item com `pop()`.
2. Remova o primeiro com `shift()`.
3. Adicione uma marca no início usando `unshift()`.
4. Substitua uma marca usando `splice()`.
5. Verifique se existe "Dell" usando `includes()`.
6. Transforme todas as marcas em maiúsculas usando `map()`.
7. Mostre todas as marcas usando `forEach()`.
8. Filtre apenas as marcas "Dell" usando `filter()`.
9. Organize a lista com `sort()`.
10. Inverta a ordem usando `reverse()`.

---

# Conclusão

Nesta aula eu aprendi os principais métodos utilizados para manipular Arrays em TypeScript. Com esses recursos eu consigo adicionar, remover, procurar, transformar, filtrar, organizar e percorrer listas de maneira simples e eficiente. Esses métodos fazem parte da rotina de qualquer desenvolvedor e aparecem constantemente em aplicações reais.
