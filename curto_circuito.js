//Código 2. Exemplo de condição curto-circuito


let nota = 3;
let status = 'Reprovado';

nota > 7 && (status = 'Aprovado');

console.log(status);


/*
Código 2. Exemplo de condição curto-circuito
let nota = 9;
let status = 'Reprovado';

status = nota > 7 && 'Aprovado';

console.log(status);*/

//Abaixo você pode conferir o código de apresentado no Flow anterior:

let mensagem = '';
let itemEncontrado = true;

itemEncontrado && (mensagem = "Item encontrado");

console.log(mensagem);