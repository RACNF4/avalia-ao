let prompt = require ("prompt-sync")();
let ano, idade;

ano = parseFloat(prompt("Digite o ano de nascimento da pessoa: "));

idade = 2024 - ano;

console.log(idade);

if(idade>16){
    console.log("Pode votar");
}else{
    console.log("Não pode votar");
}