var idade = 16;

if (idade >= 16 && idade < 18) {
    console.log("Você já pode votar, entretanto ainda não é obrigatório, pois você só tem " + idade + " anos de idade.");
} else if (idade >= 18) {
    console.log("Você está apto para votar.")
} else {
    console.log("Você ainda não pode votar, pois só possui " + idade + " anos de idade.");
}