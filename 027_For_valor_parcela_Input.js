import entradaDados from 'readline-sync';

console.log("\n ###############  -  SISTEMA CÁLCULO DE PARCELAS  -  ############### \n")

let valor_produto = entradaDados.question("Digite o valor do Produto: R$ ");
let qtd_parcelas = entradaDados.question("Informe o número de Parcelas: ");

if (qtd_parcelas > 0) {
    for (let contador = 1; contador <= qtd_parcelas; contador++){
        let valor_parcela = valor_produto / qtd_parcelas;
        console.log("Nº Parcelas: " + contador + "  ------  Valor da Parcela: R$ " + valor_parcela.toFixed(2));
    }
} else {
console.log("Parabéns, você escolheu à vista!")
}

console.log("\n ###############  -  SISTEMA CÁLCULO DE PARCELAS  -  ###############\n")