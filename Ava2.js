prompt = require('prompt-sync')();

let n1,n2,media;
let op = 'n';

do{
    n1 = prompt('Informe a primeira nota: ');
}while(isNaN(n1));
    n1=parseInt(n1);

do{
    n2 = prompt('Informe a segunda nota: ');
}while(isNaN(n2));
        n2=parseInt(n2);

do{
    op = prompt('Deseja inserir uma nota optativa? s/n: ');;
}while(op != 'n' && op != 's' );
    op=op;

if (op == 'n'){
    media = (n1+n2)/2;
}else{
    do{
        op = prompt('Informe a nota optativa: ');
    }while(isNaN(op));
    op=parseInt(op);
    if (n1 > n2){
        media = (n1 + op)/2;
    }else{
        media = (n2 + op)/2;
    }
}

console.log(media);

if(media >= 6){
    console.log('Aluno Aprovado')
}else if(media < 3){
    console.log('Aluno Reprovado')
}else{
    console.log('Aluno em Exame')
}


