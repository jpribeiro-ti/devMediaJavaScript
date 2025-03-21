var notasBimestre = [
	7, 6, 8, 5
]

var totalNotas = notasBimestre.length;

var somaNotas = notasBimestre[0] + notasBimestre[1] + notasBimestre[2] + notasBimestre[3];

var mediaAluno = somaNotas / totalNotas;

var status = (mediaAluno => 7) ? "Aprovado" : "Reprovado";

console.log("Média do aluno: " + mediaAluno);
console.log("O aluno está: " + status)