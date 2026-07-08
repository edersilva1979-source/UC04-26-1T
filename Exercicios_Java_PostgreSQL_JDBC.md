# Exercícios Práticos: Conectando Java ao PostgreSQL

## Objetivo

Nestes exercícios, vou praticar todo o processo de criação de uma
aplicação Java conectada ao PostgreSQL utilizando JDBC.

Ao final, serei capaz de:

-   Criar bancos de dados no PostgreSQL.
-   Criar tabelas.
-   Configurar o driver JDBC no NetBeans.
-   Criar uma classe de conexão.
-   Testar a conexão entre Java e PostgreSQL.

------------------------------------------------------------------------

# Exercício 1: Sistema Inicial de um Banco

## Objetivo

Criar uma aplicação Java conectada ao PostgreSQL para simular o início
de um sistema bancário.

## 1. Criando o banco de dados

``` sql
CREATE DATABASE banco_app;
```

Conecte-se ao banco `banco_app`.

## 2. Criando as tabelas

### Tabela cliente

``` sql
CREATE TABLE cliente (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) UNIQUE NOT NULL,
    telefone VARCHAR(20),
    email VARCHAR(100)
);
```

### Tabela conta

``` sql
CREATE TABLE conta (
    id SERIAL PRIMARY KEY,
    numero_conta VARCHAR(20) UNIQUE NOT NULL,
    agencia VARCHAR(10) NOT NULL,
    saldo NUMERIC(10,2) NOT NULL,
    tipo_conta VARCHAR(30) NOT NULL
);
```

## 3. Criando o projeto Java

Projeto:

``` text
exercicio_banco_jdbc
```

## 4. Adicionando o driver JDBC

No NetBeans:

``` text
Projeto
→ Properties
→ Libraries
→ Classpath
→ Add JAR/Folder
→ Selecione o driver PostgreSQL
```

## 5. Estrutura do projeto

``` text
src
│
├── conexao
│   └── Conexao.java
│
└── teste
    └── TesteConexao.java
```

## 6. Classe Conexao.java

``` java
package conexao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexao {

    public static Connection conectar() {

        Connection conexao = null;

        String url = "jdbc:postgresql://localhost:5432/banco_app";
        String usuario = "postgres";
        String senha = "sua_senha_aqui";

        try {

            conexao = DriverManager.getConnection(url, usuario, senha);
            System.out.println("Conexão realizada com sucesso!");

        } catch (SQLException erro) {

            System.out.println("Erro ao conectar.");
            System.out.println(erro.getMessage());

        }

        return conexao;
    }
}
```

## 7. Classe TesteConexao.java

``` java
package teste;

import conexao.Conexao;
import java.sql.Connection;
import java.sql.SQLException;

public class TesteConexao {

    public static void main(String[] args) {

        Connection conexao = Conexao.conectar();

        if (conexao != null) {

            System.out.println("Teste realizado com sucesso!");

            try {
                conexao.close();
                System.out.println("Conexão encerrada.");
            } catch (SQLException erro) {
                System.out.println(erro.getMessage());
            }

        }

    }

}
```

## Desafio

Crie uma terceira tabela chamada **funcionario** contendo:

-   id
-   nome
-   cargo
-   salario
-   email

------------------------------------------------------------------------

# Exercício 2: Sistema Inicial de um Zoológico

## Objetivo

Criar uma aplicação Java conectada ao PostgreSQL para simular um sistema
de gerenciamento de um zoológico.

## 1. Criando o banco

``` sql
CREATE DATABASE zoologico_app;
```

## 2. Criando as tabelas

### Animal

``` sql
CREATE TABLE animal (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    especie VARCHAR(100),
    idade INT,
    peso NUMERIC(10,2)
);
```

### Cuidador

``` sql
CREATE TABLE cuidador (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    cpf VARCHAR(14) UNIQUE,
    telefone VARCHAR(20),
    turno VARCHAR(30)
);
```

### Recinto

``` sql
CREATE TABLE recinto (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    tipo VARCHAR(50),
    capacidade INT,
    localizacao VARCHAR(100)
);
```

## 3. Criando o projeto

``` text
exercicio_zoologico_jdbc
```

## 4. Adicionando o driver JDBC

``` text
Projeto
→ Properties
→ Libraries
→ Classpath
→ Add JAR/Folder
→ Driver PostgreSQL
```

## 5. Estrutura do projeto

``` text
src
│
├── conexao
│   └── Conexao.java
│
└── teste
    └── TesteConexao.java
```

## 6. Classe Conexao.java

``` java
package conexao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexao {

    public static Connection conectar() {

        Connection conexao = null;

        String url = "jdbc:postgresql://localhost:5432/zoologico_app";
        String usuario = "postgres";
        String senha = "sua_senha_aqui";

        try {

            conexao = DriverManager.getConnection(url, usuario, senha);
            System.out.println("Conexão realizada com sucesso!");

        } catch (SQLException erro) {

            System.out.println("Erro ao conectar.");
            System.out.println(erro.getMessage());

        }

        return conexao;
    }
}
```

## 7. Classe TesteConexao.java

``` java
package teste;

import conexao.Conexao;
import java.sql.Connection;
import java.sql.SQLException;

public class TesteConexao {

    public static void main(String[] args) {

        Connection conexao = Conexao.conectar();

        if (conexao != null) {

            System.out.println("Teste realizado com sucesso!");

            try {
                conexao.close();
                System.out.println("Conexão encerrada.");
            } catch (SQLException erro) {
                System.out.println(erro.getMessage());
            }

        }

    }

}
```

## Desafio

Insira registros manualmente nas três tabelas utilizando comandos
`INSERT` e execute novamente a aplicação para confirmar que a conexão
continua funcionando.

------------------------------------------------------------------------

# Checklist Final

Antes de executar o projeto, verifique:

-   PostgreSQL iniciado.
-   Banco criado corretamente.
-   Nome do banco igual ao utilizado na classe `Conexao`.
-   Usuário e senha corretos.
-   Driver JDBC adicionado ao projeto.
-   Porta 5432 configurada corretamente.
