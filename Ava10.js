const prompt = require('prompt-sync')();

let array = [];
let n1,n2,n3;

n1 = parseInt(prompt('Digite o Primeiro valor: '));
n2 = parseInt(prompt('Digite o Segundo valor: '));
n3 = parseInt(prompt('Digite o Terceiro valor: '));

array.push(n1,n2,n3);

array.sort();

console.log(array[0],array[1],array[2]);