prompt = require('prompt-sync')();

let pass;

pass = prompt('Digite sua senha: ');

if (pass === "1234"){
    console.log("Acesso permitido");
}else{
    console.log("Acesso negado");
}