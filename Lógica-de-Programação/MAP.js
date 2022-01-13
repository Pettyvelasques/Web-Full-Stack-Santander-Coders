//A função MAP é usada para converter vetores
//Passamos uma função ao MAP e essa função é aplicada a cada item do vetor
const vetor = [1,2,3,4,5,6];
const dobro = (item) => 2*item;
const vetorDobrado = vetor.map(dobro);
console.log(vetorDobrado);


//É possível escrever a função dentro do MAP
//Função que eleva ao quadrado
const vetor1 = ["10", "20", "30", "40"];
const stringToInt = (x) => parseInt(x);
//parseInt transforma String em Int
const vetor2 = vetor1.map(stringToInt);
console.log(vetor2);


const vetor3 = vetor2.map(x => x*x);
console.log(vetor3);
