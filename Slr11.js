prompt = require('prompt-sync')();

let senha;
let cont = 0;

while(true){
    senha = prompt('Digite a senha: ')
    if(senha=='teste'){
        console.log('Acesso permitido')
        cont++;
        break;
    }else{
        console.log('Acesso negado')
        cont++;
        continue;
    }
}

console.log(cont,'tentativas');