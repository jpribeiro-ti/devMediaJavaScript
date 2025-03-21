import entradaDados from 'readline-sync';

console.log("Área do triângulo: \n");

let base = entradaDados.question("Informe a base do triângulo: ");
let altura = entradaDados.question("Informa a altura do triângulo: ");

let area = (base * altura) / 2;

console.log("A área do triângulo é: " + area);