prompt = require('prompt-sync')();

let n1,n2,repeat;
let cont = 0;

while(true){
    n1 = parseFloat(prompt('Informe a nota 1: '));
    n2 = parseFloat(prompt('Informe a nota 2: '));
    media = (n1+n2)/2;

    if(media >= 6){
        cont++;
    } 

    repeat = prompt('Deseja verificar a nota de outro aluno? s/n ');

    if(repeat == 's'){
        continue;
    }else{
        break;
    }

}

console.log('O número de alunos aprovados é: '+cont);