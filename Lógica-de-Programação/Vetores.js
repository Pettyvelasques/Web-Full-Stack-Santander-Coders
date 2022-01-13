let vetor = [10,20,30,40,50]
console.log(vetor[2]);
vetor[2] = 60;
console.log(vetor[2]);
vetor[4] = 'Cinquenta';
console.log(vetor)


//Adicionando elementos ao vetor
let vetor2 = [];
for (let i=0; i<=10; i++){
    vetor2.push(i);
}
console.log(vetor2);


//Percorrendo vetor
for(let a=0; a<vetor2.length; a++){
    console.log(vetor2[a]);
}


//Matrizes
let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

for (let linha of matriz){
    for(let elemento of linha){
        console.log(elemento)

    }
}