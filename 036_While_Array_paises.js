let pais = ["Brasil", "Argentina", "Bolivia", "Paraguai"];
let resultado = ["Brasileiro", "Argentino", "Boliviano", "Paraguaio"];
let contador = 0;

while (contador < pais.length) {
    console.log("Quem nasce no " + pais[contador] + " é: " + resultado[contador]);
    contador++;
}