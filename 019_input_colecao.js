import readlineSync from 'readline-sync';

let colecao_empresas = [
    {id: 1, nome: "Microsoft"},
    {id: 2, nome: "Apple"},
    {id: 3, nome: "Alphabet"},
    {id: 4, nome: "Facebook"}
];

console.log("\n1 - Microsoft");
console.log("2 - Apple");
console.log("3 - Alphabet");
console.log("4 - Facebook");

let empresa = readlineSync.question("\nDigite o id da empresa que deseja: ");

// Convertendo a entrada do usuário para número
let idEmpresa = parseInt(empresa);

// Verificando se o ID é válido
if (idEmpresa >= 1 && idEmpresa <= colecao_empresas.length) {
    console.log("\nVocê escolheu a empresa: " + colecao_empresas[idEmpresa - 1].nome);
} else {
    console.log("\nID inválido! Por favor, digite um número entre 1 e " + colecao_empresas.length + ".");
}