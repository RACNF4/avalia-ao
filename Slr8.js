prompt = require('prompt-sync')();

let l1,l2,l3,valida;

while(true){
    l1 = parseInt(prompt('Informe o valor do lado 1 de um triângulo: '));
    l2 = parseInt(prompt('Informe o valor do lado 2 de um triângulo: '));
    l3 = parseInt(prompt('Informe o valor do lado 3 de um triângulo: '));

    valida = prompt('Os dados estão corretos? s/n ');

    if (valida == 'n'){
        continue;
    }else{
        break;
    }
}

if(l1 == l2 && l1 == l3){
    console.log('Triangulo Equilatero');
}else if (l1 != l2 && l1 != l3){
    console.log('Triangulo Escaleno');
}else{
    console.log('Triangulo Isosceles');
}
