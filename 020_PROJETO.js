/*
Informe o valor devido:

Informe quantos dias se passaram desde o vencimento do boleto

valor original da dívida:
Dias atrasados:
Taxa de Juros:
Valor total com juros:

+ de 15 dias de atraso 10%
- de 15 dias 5%
*/

import entradaDados from 'readline-sync';

console.log("\n#############  -   SISTEMA DE BOLETO    -  ###############\n\n")

let valorDevido = entradaDados.question("Informe o valor devido: ");
let diasAtraso = entradaDados.question("Informe quantos dias se passaram desde o vencimento do boleto: ");
let taxaJuros = "";

if (diasAtraso => 16) {
    taxaJuros = 10;
} else {
    taxaJuros = 5;
}

let valorJuros = Number(valorDevido) + Number(valorDevido * taxaJuros) / 100;

console.log("\nValor original da dívida: R$ " + valorDevido);
console.log("Dias de atraso: " + diasAtraso);
console.log("Taxa de juros: " + taxaJuros + "%");
console.log("Valor total com juros: R$ " + valorJuros + "\n\n")

console.log("#############  -   SISTEMA DE BOLETO    -  ###############")