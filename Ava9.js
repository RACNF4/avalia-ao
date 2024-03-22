let prompt = require('prompt-sync')()

let maca,preco;

maca = parseInt(prompt('Quantas maçãs você quer? '));

if (maca < 12){
    preco = maca * 0.3;
    console.log('Ficou em R$',preco.toFixed(2));
}else{
    preco = maca * 0.25;
    console.log('Ficou em R$',preco.toFixed(2));
}
