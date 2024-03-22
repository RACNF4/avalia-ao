prompt = require('prompt-sync')();

let n;

do{
    n = prompt('Digite um número: ')
}while(isNaN(n) || n < 0 );
n = parseInt(n);

if(n%2 == 0){
    console.log('O número que você digitou é par');
}else{
    console.log('O número que você digitou é ímpar');
}

