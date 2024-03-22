prompt = require('prompt-sync')();

let v1,res;
let v2 = 0;

v1 = parseInt(prompt('Digite o dividendo: '));

while(v2 == 0){
    v2 = parseInt(prompt('Digite o divisor: '));
    console.log('Valor inválido')
}

res = v1 / v2;

console.log('O resultado da divisão é:',res.toFixed(2));