let estaSol = true;
if(estaSol){
    console.log('Vou para a praia');

}else{
    console.log('Está frio! Vou ficar em casa');

}


let numero  =0;
if(numero>0){
    console.log(numero + ' Número positivo')


}else if(numero == 0){
    console.log(numero + ' Número zerado')


}else{
    console.log(numero + ' Número negativo');
}


let x = 12
let paridade = x % 2 === 0 ? 'par' : 'impar';
console.log(paridade);


let sinal = 'vermelho';
switch(sinal){
    case 'verde' : 
        console.log('pode passar');
        break;
    case 'amarelo' :
        console.log('prestes a fechar, cuidado...');
        break;
    case 'vermelho':
        console.log('fechado, não passe');
        break;
    default:
        console.log('esse não é um valor válido');
        break;
}