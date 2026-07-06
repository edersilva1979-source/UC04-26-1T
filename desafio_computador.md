# 💻 Exercício Prático - Evoluindo a Classe `Computador`

## 🚀 Desafio de Programação Orientada a Objetos com TypeScript

Parabéns! 🎉

Você já criou a classe **Computador** e compreendeu o conceito de **Composição**, onde um computador é formado por um **Processador**, uma **Memória RAM** e um **SSD**.

Agora é hora de evoluir o projeto, adicionando novas funcionalidades que deixarão seu sistema mais próximo de uma aplicação real.

---

# 🎯 Objetivos

Ao concluir esta atividade, você terá praticado:

* ✅ Criação de métodos.
* ✅ Manipulação de atributos.
* ✅ Organização do código.
* ✅ Encapsulamento.
* ✅ Arrays de objetos.
* ✅ Relacionamento entre classes.

---

# ⭐ Desafio 1 - Ligar o Computador

Crie um método chamado:

```typescript
ligar()
```

Quando ele for chamado, deverá exibir a seguinte mensagem no console:

```text
💻 Computador ligado com sucesso!
```

### Exemplo

```typescript
computador1.ligar();
```

### Saída Esperada

```text
💻 Computador ligado com sucesso!
```

---

# ⭐ Desafio 2 - Desligar o Computador

Crie um método chamado:

```typescript
desligar()
```

Quando ele for executado, deverá mostrar:

```text
💻 Computador desligado.
```

### Exemplo

```typescript
computador1.desligar();
```

### Saída Esperada

```text
💻 Computador desligado.
```

---

# ⭐ Desafio 3 - Upgrade de Memória RAM

Agora imagine que o cliente resolveu aumentar a memória do computador.

Crie um método chamado:

```typescript
upgradeMemoria()
```

Ele deverá receber como parâmetro a nova quantidade de memória RAM.

### Exemplo

```typescript
computador1.upgradeMemoria(32);
```

### Saída Esperada

```text
Memória atualizada para 32 GB.
```

💡 **Dica:** Não esqueça de atualizar o atributo correspondente da classe **Memória RAM**.

---

# ⭐ Desafio 4 - Upgrade de SSD

O cliente também resolveu aumentar o espaço de armazenamento.

Crie um método chamado:

```typescript
upgradeSSD()
```

Ele deverá receber a nova capacidade do SSD.

### Exemplo

```typescript
computador1.upgradeSSD(1000);
```

### Saída Esperada

```text
SSD atualizado para 1000 GB.
```

---

# 🚀 Desafio Bônus - Loja de Computadores

Agora chegou o momento de transformar seu projeto em um pequeno sistema de gerenciamento.

Crie uma nova classe chamada:

```text
Loja
```

Ela deverá possuir um atributo capaz de armazenar vários computadores.

```typescript
Computador[]
```

---

# 📋 Funcionalidades Obrigatórias

Implemente os seguintes métodos:

## ➕ adicionarComputador()

Adicionar um novo computador ao estoque da loja.

---

## 📋 listarComputadores()

Exibir todos os computadores cadastrados.

Mostre informações como:

* Marca
* Modelo
* Processador
* Memória RAM
* SSD

---

## 🔍 buscarPorMarca()

Permitir pesquisar computadores pela marca.

### Exemplo

```typescript
loja.buscarPorMarca("Dell");
```

Caso existam computadores da marca pesquisada, exiba todas as informações.

Caso contrário, informe que nenhum computador foi encontrado.

---

## 💰 exibirConfiguracaoCompleta()

Mostre todas as configurações de um computador de forma organizada.

Exemplo de saída:

```text
=====================================

💻 COMPUTADOR

Marca: Dell

Modelo: Inspiron 15

-------------------------------------

🧠 Processador

Intel Core i5

6 Núcleos

2.5 GHz

-------------------------------------

💾 Memória RAM

32 GB

DDR4

-------------------------------------

📀 SSD

1000 GB

NVMe

=====================================
```

---

# 🏆 Desafio Extra

Deixe sua loja ainda mais inteligente!

Implemente alguns dos recursos abaixo:

* 🗑️ Remover um computador.
* ✏️ Alterar a configuração de um computador.
* 📊 Mostrar quantos computadores existem no estoque.
* 💸 Adicionar um preço ao computador.
* 🔢 Calcular o valor total do estoque.
* ⭐ Informar qual computador possui a maior quantidade de memória RAM.
* 🚀 Informar qual computador possui o maior SSD.

---

# 💡 Dicas do Professor

Antes de começar a programar, pense na estrutura do sistema.

Ela poderá ficar parecida com esta:

```text
Loja

│

├── Computador 1

│      ├── Processador

│      ├── Memória RAM

│      └── SSD

│

├── Computador 2

│      ├── Processador

│      ├── Memória RAM

│      └── SSD

│

└── Computador 3

       ├── Processador

       ├── Memória RAM

       └── SSD
```

Observe que a **Loja** possui vários **Computadores**, e cada **Computador** é composto por um **Processador**, uma **Memória RAM** e um **SSD**.

Esse exercício reúne diversos conceitos importantes da Programação Orientada a Objetos.

---

# 📚 Conceitos Trabalhados

Durante este exercício você utilizará:

* ✅ Classes
* ✅ Objetos
* ✅ Construtores
* ✅ Métodos
* ✅ Composição
* ✅ Arrays de Objetos
* ✅ Encapsulamento
* ✅ Organização de projetos

---

# 🎯 Missão Final

Desenvolva um sistema organizado, reutilizável e de fácil manutenção.

Pense como um desenvolvedor profissional: escreva código limpo, bem organizado e fácil de entender.

Boa programação! 💻🚀

