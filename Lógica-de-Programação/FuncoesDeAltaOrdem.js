//Funcão de Alta Ordem - Passada Como Parâmetro
const subtrair = (a,b) => a-b;
const aplicaOperacao = (a,b, operacao) => operacao(a,b);
let resultado = aplicaOperacao(4,2, subtrair);
console.log(resultado)


//Funcão de Alta Ordem - Retornada Como Parâmetro
const somarX = (x) => (y) => x-y;
const somar2 = somarX(2);
console.log(somar2(5));