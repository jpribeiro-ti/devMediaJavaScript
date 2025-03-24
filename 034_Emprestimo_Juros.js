import entradaDados from 'readline-sync';

let valorEmprestado = entradaDados.question("Valor total emprestado: ")
let taxaJuros = entradaDados.question("Taxa de Juros: ");
let qtdParcelas = entradaDados.question("Quantidade de Parcelas: ");
let JurosPraticado = taxaJuros / 100;

let contador = 1;

while (contador <= qtdParcelas) {
    let numeroParcela = contador;
    let jurosTotais = capitalEmprestado * JurosPraticado * numeroParcela;
    console.log("A taxa de juros no período de " + numeroParcela + " mes(es) é de R% " + jurosTotais.toFixed(2));
}