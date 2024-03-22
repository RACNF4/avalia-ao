let prompt = require('prompt-sync')();

let cod;

do{
    cod = prompt('Informe o código do produto: ');
}while(isNaN(cod));
cod=cod;

 switch (cod) {
    case '1':
        console.log('O produto é originário da região Sul');      
    break;
    
    case '2':
        console.log('O produto é originário da região Norte');      
    break;
    
    case '3':
        console.log('O produto é originário da região Leste');      
    break;

    case '4':
        console.log('O produto é originário da região Oeste');      
    break;

    case '10':
        console.log('O produto é originário da região Centro-Oeste');      
    break;

    case '11':
        console.log('O produto é originário da região Noroeste'); 
    break;

    default:
       if (cod == '5' || cod == '6' ){
           console.log('O produto é originário da região Nordeste');
       }else if(cod == '7' || cod == '8' || cod == '9'){
           console.log('O produto é originário da região Sudeste');
       }else{
           console.log('O produto é importado');
       }
    break;
}