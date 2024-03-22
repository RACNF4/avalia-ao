prompt = require('prompt-sync')();

let gremio,inter;

gremio = parseInt(prompt('Informe a quantidade de gols do Grêmio: '));
inter = parseInt(prompt('Informe a quantidade de gols do Internacional: '));

if(gremio > inter){
    console.log('Grêmio');
}else if(gremio < inter){
    console.log('Internacional');
}else{
    console.log('Empate');
}