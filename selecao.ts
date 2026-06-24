class Selecao {
    constructor(
        public nome: string,
        public pontos: number,
        public golsMarcados: number,
        public golsSofridos: number
    ) { }

    saldoGols(): number {
        return this.golsMarcados - this.golsSofridos;
    }

    situacaoGrupo(): string {
        if (this.pontos >= 6) {
            return "Classificada";
        }

        if (this.pontos >= 3) {
            return "Ainda tem chance";
        }

        return "Eliminada";
    }

 //   registrarVitoria(golsMarcados: number, golsSofridos: number): void {
 //       this.pontos += 3;
 //       this.golsMarcados += golsMarcados;
 //       this.golsSofridos += golsSofridos;
 //   }

 //   registrarEmpate(golsMarcados: number, golsSofridos: number): void {
 //       this.pontos += 1;
  //      this.golsMarcados += golsMarcados;
  //      this.golsSofridos += golsSofridos;
 //   }

 //   registrarDerrota(golsMarcados: number, golsSofridos: number): void {
 //       this.golsMarcados += golsMarcados;
 //       this.golsSofridos += golsSofridos;
 //   }

    registrarResultado( golsMarcados: number, golsSofridos: number): void {
   
        if (golsMarcados > golsSofridos) {
            this.pontos += 3;
        }
        else if (golsMarcados === golsSofridos) {
            this.pontos += 1;
        }

        this.golsMarcados += golsMarcados;
        this.golsSofridos += golsSofridos;

    }

    comentarioTecnico(): string {
        if (this.pontos >= 6 && this.saldoGols() > 0) {
            return "Grande campanha! A seleção está jogando como favorita ao título.";
        }

        if (this.pontos >= 3 && this.saldoGols() >= 0) {
            return "A seleção segue viva no grupo e depende de um bom resultado.";
        }

        if (this.pontos >= 3 && this.saldoGols() < 0) {
            return "A seleção ainda tem chance, mas precisa melhorar o saldo de gols.";
        }

        return "Situação complicada. A seleção precisa reagir urgentemente.";
    }

    exibirResumo(): void {
        console.log("================================");
        console.log(`Seleção: ${this.nome}`);
        console.log(`Pontos: ${this.pontos}`);
        console.log(`Gols Marcados: ${this.golsMarcados}`);
        console.log(`Gols Sofridos: ${this.golsSofridos}`);
        console.log(`Saldo de Gols: ${this.saldoGols()}`);
        console.log(`Situação: ${this.situacaoGrupo()}`);
        console.log(`Comentário Técnico: ${this.comentarioTecnico()}`);
        console.log("================================");
    }
}

const brasil = new Selecao("Brasil", 6, 5, 1);
const argentina = new Selecao("Argentina", 4, 3, 2);
const alemanha = new Selecao("Alemanha", 2, 2, 4);
const japao = new Selecao("Japão", 3, 4, 4);


const grupo = [brasil, argentina, alemanha, japao];

for (const selecao of grupo) {
    selecao.exibirResumo();
}

brasil.registrarResultado(2, 1);
argentina.registrarResultado(1, 1);
alemanha.registrarResultado(0, 3);
japao.registrarResultado(2, 2);

for (const selecao of grupo) {
    selecao.exibirResumo();
}