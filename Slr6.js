const prompt = require ("prompt-sync")();

let n1, n2, media,valida;

while (true){
    n1=parseInt(prompt("Digite a primeira nota: "));

    if (n1 > 10 || n1 < 0){
            console.log('Valor inválido');
            valida = prompt('Deseja inserir nova nota? s/n ');
            if(valida == 's'){
                continue;
            }else{
                process.exit();
            } 
    }


    n2=parseInt(prompt("Digite a segunda nota: "))

    if (n2 > 10 || n2 < 0){
            console.log('Valor inválido');
            valida = prompt('Deseja inserir nova nota? s/n ');
            if(valida == 's'){
                continue;
            }else{
                process.exit();
            } 
    }else{
        break;
    }
}

media = (n1+n2)/2;

console.log('media',media);

