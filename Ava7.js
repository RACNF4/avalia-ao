let prompt = require ("prompt-sync")();
let n1, n2;

n1 = parseFloat(prompt("Digite um número: "));
n2 = parseFloat(prompt("Digite um outro número: "));

if(n1>n2){
    console.log("Maior:",n1+'\n'+
                "Menor:",n2);
}else{
    console.log("Maior:",n2+'\n'+
                "Menor:",n1);
}