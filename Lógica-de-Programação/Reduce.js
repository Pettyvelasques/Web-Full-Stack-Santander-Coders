//O objetivo do Reduce é reduzir um vetor a um único valor ou objeto
//Para o Reduce devemos passar um parâmetro a mais
const vetorSoma = [1,2,3,4,5,6];
const soma = vetorSoma.reduce((estado, item) => estado + item);
console.log(soma);


//Quando necessário podemos declarar o estado inicial a ser passado para o primeiro elemento, basta passar como parâmetro para o Reduce
const vetor1 = [1,2,3,4,5,6];
const soma1 = vetor1.reduce((estado,item)=> estado + item, 0);
console.log(soma1);


const matriz = [
    [1,2,3,4,5,6],
    [6,5,4,3,2,1],
    [6,1,5,2,4,3],
];
const somaColuna = (estado,item) => {
    return[
        estado[0]+item[0]+item[1],
        estado[1]+item[2]+item[3],
        estado[2]+item[4]+item[5]
    ]
}
const vetor2 = matriz.reduce(somaColuna, [0,0,0]);
console.log(vetor2);