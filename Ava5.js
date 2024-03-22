let prompt = require ("prompt-sync")();
let n1, n2;

n1 = parseFloat(prompt("Digite um número: "));

if(n1>=0){
    console.log("Positivo");
}else{
    console.log("Negativo");
}