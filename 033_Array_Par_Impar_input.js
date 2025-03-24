// descobrir quais são pares e quais são impares

let numerosAleatorios = [1, 2, 3, 5, 9, 12, 16, 22, 25];

let numerosPares = 0;
let numerosImpares = 0;

let contador = 0;

while (contador < numerosAleatorios.length) {
	if (numerosAleatorios[contador] % 2 == 0) {
		numerosPares++;
	} else {
		numerosImpares++;
	}
	contador++;
}

console.log("O número total de números: " + numerosAleatorios.length);
console.log("O número total de números Ímpares: " + numerosImpares);
console.log("O número total de números Pares: " + numerosPares);