let capitalEmprestado = 3000;
let taxaJuros = 0.02;

let contador = 1;
let parcelasTotais = 5;

while (contador <= parcelasTotais) {
	
	let numeroParcela = contador;
	let jurosEmprestimo = capitalEmprestado * taxaJuros * numeroParcela;
	
	console.log("A taxa de juros no período de " + numeroParcela + " mês(es) é de R$ " + jurosEmprestimo.toFixed(2));

	contador++;
}