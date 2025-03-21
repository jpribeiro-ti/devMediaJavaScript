mensagem = "";
mensagem1 = "";
mes = "Outubro"
mes1 = 11;
mensagem2 = "";
mes2 = 12;

var mensagem = (mes == "novembro" || mes == "dezembro") ? "Promoção" : "Mês Normal";

var mensagem1 = (mes1 == 11 || mes == 12) ? "Promoção" : "Preço normal";

if (mes2 == 11 || mes2 == 12) {
    mensagem2 = "Nese mês temos promoções, venham conferir!";
} else {
    mensagem2 = "Estamos preparando várias ofertas!";
}

console.log(mensagem);
console.log(mensagem1);
console.log(mensagem2);