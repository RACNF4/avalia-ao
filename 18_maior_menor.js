prompt = require('prompt-sync')();

let array = [];
let n1,n2,n3;

function sortfunction(a, b){
    return (a - b); 
  }

n1 = prompt('Digite o primeiro número: ');
n2 = prompt('Digite o segundo número: ');
n3 = prompt('Digite o terceiro número: ');

array.push(n1,n2,n3);

console.log(array);

array.sort(sortfunction);

console.log(array);




