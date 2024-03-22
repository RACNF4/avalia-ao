const prompt = require ("prompt-sync")();

let n1, n2, media;

n1=parseInt(prompt("Digite a primeira nota: "))

if (n1 > 10 || n1 < 0){
    console.log('Valor inválido');
    process.exit();
}

n2=parseInt(prompt("Digite a segunda nota: "))

if (n2 > 10 || n2 < 0){
    console.log('Valor inválido');
    process.exit();
}

media=n1+n2/2;

console.log('media',media);





