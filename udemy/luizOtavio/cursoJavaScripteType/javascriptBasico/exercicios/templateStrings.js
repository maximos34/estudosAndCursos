/*
>< 1- Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase com letras maiúsculas e de novo com minusculas.

>< 2- Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.

>< 3- Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.

>< 4- Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console.

>< 5- Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console. 

*/

//.... Resolvendo os desafios

// ~~~~ 1°) questão


const frase = "É melhor você tentar algo, vê-lo não funcionar e aprender com isso, do que não fazer nada.";

console.log(frase);
console.log(frase.length);
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());

//~~~~ 2°) questão

let num1 = null;
let num2;

console.log(num1);
console.log(num2)

//~~~~ 3°) questão

let nome = "Alice";
let idade = 30;
let aprovada = true;

console.log(`${nome} tem ${idade} anos e está ${aprovada} no curso.`)

//~~~~ 4°) questão

let n1 = 10;
let text = '1000';

console.log(typeof n1);
console.log(typeof text);

n1 = toString(n1);
text = Number(text)

console.log(typeof n1);
console.log(typeof text);

//~~~~ 5°) questão

let texto = (`Nossa maior fraqueza é desistir. O caminho mais certo para o sucesso é sempre tentar apenas uma vez mais`)

console.log(texto);
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());