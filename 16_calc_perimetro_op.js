prompt = require('prompt-sync')();

let n, med;

n = parseInt(prompt('Informe a quantidade de lados do polígono: '));
med = parseInt(prompt('Informe a medida do lado: '));

switch (n) {
    case 3:
        console.log('Triangulo','\n'+
                    'Perímetro:',med*3);
        break;
    case 4:
        console.log('Quadrado','\n'+
                    'Área:',med*med);
        break;
    case 5:
        console.log('Pentagono');
        break;
    default:
        if (n<3) {
            console.log('Não é um polígono');
        }else if(n>5){
            console.log('Polígono não identificado');
        }
        break;
}