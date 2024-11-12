// TIPOS DE DADOS PRIMITIVOS
// String, number, undefined, null, boolean, symbol
const nome = 'Luiz' // string
const nome1 = 'Luiz'// string
const nome2 = 'Luiz'// string
const num1 = 10; //number
const num2 = 10.52; //number
let nomeAluno; //undefined -> não aponta para local nenhum na memória
const sobrenomeAluno = null; // Nulo -> não aponta para local nenhum na memória
const aprovado = true; // Boolean = true, false (lógico)
const array= [1, 2];
const b = array;

console.log(typeof nome);
console.log(array,b);

b.push(3);
console.log(array, b);