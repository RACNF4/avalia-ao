prompt = require('prompt-sync')();

let v1, v2, res;

v1 = parseInt(prompt('Digite o dividendo: '));

v2 = parseInt(prompt('Digite o divisor: '));

if (v2 == 0){
    console.log('Valor inválido')
}else{
    res = v1 / v2;
    console.log('O resultado da divisão é:',res.toFixed(2));
}