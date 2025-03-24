// Importando o módulo 'readline-sync' para permitir a entrada de dados do usuário
import entradaDados from 'readline-sync';

// Criar uma calculadora que recebe entradas de dados e realiza operações
// Declarando uma variável para armazenar o nome do usuário
let nome = entradaDados.question("Qual o seu nome: ");

// Perguntando ao usuário qual operação ele gostaria de realizar (+, -, *, /)
let operacao = entradaDados.question("Digite qual operação você gostaria de fazer: + - * / ");

// Coletando o primeiro número do usuário e convertendo para um número decimal
let num1 = parseFloat(entradaDados.question("Digite o número: ")); 

// Coletando o segundo número do usuário e convertendo para um número decimal
//let num2 = parseFloat(entradaDados.question("Digite o segundo número: ")); 

// Verificando se a operação inserida é válida
if (operacao == "+" || operacao == "-" || operacao == "*" || operacao == "/") {
    // Inicializando um contador para usar no loop
    let contador = 0;

    console.log("##### - RESULTADO DA OPERAÇÃO - #####\n");
    console.log("Ola, " + nome);

    // Loop que executar operações enquanto o contador for menor ou igual a 10
    while (contador <= 10) {
        let resultado; // Variável para armazenar o resultado da operação

        // Usando um switch para determinar qual operação realizar
        switch (operacao) {
            case "+":
                // Executando a operação de adição
                resultado = num1 + contador; 
                break;
            case "-":
                // Executando a operação de subtração
                resultado = num1 - contador; 
                break;
            case "*":
                // Executando a operação de multiplicação
                resultado = num1 * contador; 
                break;
            case "/":
                // Executando a operação de divisão com um cheque para evitar divisão por zero
                resultado = num2 !== 0 ? num1 / contador : "Divisão por zero não é permitida"; 
                break;
        }
        
        // Exibindo o resultado da operação
        
        console.log(num1 + " " + operacao + " " + contador + " = " + resultado);
        
        // Incrementando o contador a cada iteração do loop
        contador++;
    }
} else {
    // Mensagem exibida caso a operação inserida seja inválida
    console.log("Operação inválida!");
}

