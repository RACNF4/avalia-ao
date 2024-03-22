let prompt = require ("prompt-sync")();
let n1, n2, media

n1 = parseFloat(prompt("Digite sua primeira nota: "));
n2 = parseFloat(prompt("Digite sua primeira nota: "));
media=(n1+n2)/2

if(media>=6.0)
    console.log("PARABÉNS! Você foi aprovado!");
