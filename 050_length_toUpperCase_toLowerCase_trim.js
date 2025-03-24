length - tamanho total
Métodos:

toLowerCase()/toUpperCase() (maiuscula / minuscula)

trim (exclui espaços em branco) 

padStart() /padEnd ()  console.log(label_aluno.padStart(20, " ") + ": " + valor_aluno);

replace() - Troca um texto pelo outro
let texto = "A linguagem PHP é muito poderosa";
let resultado = texto.replace("PHP", "JavaScript");
console.log(resultado); // A linguagem JavaScript é muito poderosa
O método replace() é a melhor forma de substituir um termo dentro de um texto na linguagem JavaScript

substring() - retornar parte da String
let frase = "Eu sou programador JavaScript";
let resultado = frase.substring(7, 18);
console.log(resultado); // programador
let frase = "Ana é especialista em JavaScript";
let resultado = frase.substring( 6, 12 );
console.log(resultado); // especi
Código 2. Usando o método substring() para extrair o termo 'especi'
let frase = "Ana é especialista em JavaScript";
let resultado = frase.substring( 22 );
console.log(resultado); // JavaScript

//Caso esse conteúdo tenha mais de 100 caracteres, é extraída uma parte dele para ser transformada em resumo.
let conteudo = "Neste artigo de JavaScript veremos como utilizar o método substring() para extrair uma sequência de caracteres de uma string.";
let tamanho = conteudo.length;
let resumo = "";

if( tamanho > 100 ){
    resumo = conteudo.substring(0, 97);
    resumo += "...";
} else {
    resumo = conteudo;
}
console.log(resumo); // Neste artigo de JavaScript veremos como utilizar o método substring() para extrair uma sequência ...

indexOf() // Procurando substring dentro de string
Procurar uma substring dentro de uma string é uma tarefa comum na rotina do desenvolvedor. E para isso há um recurso nativo que faz esse trabalho
let frase = "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.";
let posicao = frase.indexOf("sonho");
console.log(posicao); // 14

Nesse exemplo a string não está presente, retorna -1
let frase = "Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar com você.";
let posicao = frase.indexOf("esperança");
console.log(posicao); // -1

Quando o método indexOf encontra a substring dentro de uma string, ele retorna a posição onde a substring foi encontrada. Caso não encontre ele retorna o valor -1.
O método indexOf é um ótimo recurso da linguagem JavaScript para encontrar termos simples dentro de textos grandes


split() Na programação é comum quebrar strings em partes menores e usar essas substrings para algum fim. No JavaScript temos um recurso nativo que cuida dessa tarefa
let paises_string = "Brasil Espanha Canadá Irlanda Suíça";

let paises_array = paises_string.split(" ");

console.log(paises_array); // (5) ["Brasil", "Espanha", "Canadá", "Irlanda", "Suíça"]

Temos um exemplo onde precisamos obter o primeiro nome da string nome_completo. Com o método split() separamos a string em diversas substrings e depois acessamos o primeiro índice do array, que contém o nome que desejamos.

let nome_completo = "Ana Mendes da Silva";

let array = nome_completo.split(" ");

let nome = array[0];

console.log("Olá " + nome + ", seja bem vindo(a)"); // Olá Ana, seja bem vindo(a)



