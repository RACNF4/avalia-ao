let prompt = require ("prompt-sync")();
let n1, n2;

n1 = parseFloat(prompt("Digite um número: "));

if(n1>0){
    console.log("Positivo");
}else if(n1<0){
    console.log("Negativo");
}else{
    console.log('Zero');
}