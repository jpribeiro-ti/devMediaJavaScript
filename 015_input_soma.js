import entradaDados from 'readline-sync';

console.log("Calculado de soma entre x e y: \n");

let x = entradaDados.question("Informe o valor de x: ");
let y = entradaDados.question("Informe o valor de y: ");

let soma = Number(x) + Number(y);

console.log(x+" + "+y+" = "+soma);