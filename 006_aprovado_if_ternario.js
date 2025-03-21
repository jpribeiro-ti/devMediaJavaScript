var status = "";
var nota = "8";

/*if (nota >= 7) {
    status = "Aprovado";
} else {
    status = "Reprovado";
}*/

var status = nota >= 7 ? "Aprovado":"Reprovado"; // If Ternário



console.log("O aluno foi: " + status)

