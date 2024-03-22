prompt = require('prompt-sync')();

let v1, v2, res;

v1 = parseInt(prompt('Digite o dividendo: '));

do{
    v2 = prompt('Digite o divisor: ');
}while(v2 == 0);
v2=parseInt(v2);

res = v1 / v2;

console.log('O resultado da divisão é:',res.toFixed(2));