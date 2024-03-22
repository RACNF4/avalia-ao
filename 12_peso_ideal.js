prompt = require('prompt-sync')();

let sexo, haltura, pesoIdl;

do{
    sexo = prompt("Informe o sexo: Masculino-1 Feminino-2 ");
}while(sexo != 1 && sexo != 2);
sexo = parseInt(sexo);

haltura = parseFloat(prompt('Informe sua altura: '));

if(sexo == 1){
    pesoIdl = (72.7 * haltura) - 58;
}else{
    pesoIdl = (62.1 * haltura) - 44.7;
}

console.log('O peso ideal é:',pesoIdl.toFixed(2),'Kg');