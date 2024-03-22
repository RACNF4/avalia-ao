prompt = require('prompt-sync')();

let n1,n2,op,res;

while (true){
    console.log('Calculadora Jovial'+'\n'+
                'Operadores:'+'\n'+
                'Para somar digite 1'+'\n'+
                'Para subtrair digite 2'+'\n'+
                'Para dividir digite 3'+'\n'+
                'Para multiplicar digite 4');

    n1 = parseInt(prompt('Digite o primeiro número: '));

    do{
        op = prompt('Qual a operação deseja realizar? ')
    }while(op != '1' && op != '2' && op != '3' && op != '4');
    op = op;

    n2 = parseInt(prompt('Digite o segundo número: '));
    
    switch (op) {
        case '1':
            res = n1 + n2;
            console.log('Resultado',res)
            break;
        case '2':
            res = n1 - n2;
            console.log('Resultado',res)
            break;
        case '3':
            res = n1 * n2;
            console.log('Resultado',res)
            break;
        case '4':
            res = n1 / n2;
            console.log('Resultado',res)
            break;
        default:
            break;
    }

    start = prompt('Deseja sair do programa? s/n ');
    if(start == 'n'){
        continue;
    }else{
        break;
    }
};
