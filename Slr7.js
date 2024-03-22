const prompt = require ("prompt-sync")();

let n1, n2, media,valida;

n1=parseInt(prompt("Digite a primeira nota: "));

if (n1 > 10 || n1 < 0){
    do{
        console.log('Valor inválido');
        valida = parseInt(prompt('Deseja inserir nova nota? s - Digite 1 / n - Digite 2 '));
        if(valida == 1){
            n1=parseInt(prompt("Digite a primeira nota: "));
        }else{
            process.exit()
        } 
    }while(n1 > 10 || n1 < 0);
}

n2=parseInt(prompt("Digite a segunda nota: "))

if (n2 > 10 || n2 < 0){
    do{
        console.log('Valor inválido');
        valida = parseInt(prompt('Deseja inserir nova nota? s - Digite 1 / n - Digite 2 '));
        if(valida == 1){
            n2=parseInt(prompt("Digite a segunda nota: "));
        }else{
            process.exit()
        } 
    }while(n2 > 10 || n2 < 0);
}

media = (n1+n2)/2;

console.log('media',media);
