/*Herança em JS é criar uma nova classe que herda os atributos e métodos de uma classe pai.
A nova classe é chamada de classe filha.*/


// Classe "Pai"
class Pessoa {
   constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
   }
}

// A palavra extends denota a herança(atributos e metodos) e a palavra super refere-se a classe superior, ou, a classe pai.
class Cidadao extends Pessoa {
   constructor(nome, idade, rg, cpf) {
      super(nome, idade);
      this.rg = rg;
      this.cpf = cpf;
   }
}
const cidadao1 = new Cidadao('Lucas', 26, '00000', '11111');
console.log(cidadao1);

/*Pensando em objeto como tipo de dados, podemos pensar que um objeto "cidadao" tem dois tipos, o tipo "pessoa" e o tipo "cidadao".
No caso, todo Cidadão é Pessoa, mas nem toda Pessoa é Cidadão.*/

const pessoa1 = new Pessoa ('Mateus', 20);
console.log(pessoa1);
console.log(cidadao1 instanceof Cidadao); //retorna = true
console.log(cidadao1 instanceof Pessoa); //retorna = true
console.log(pessoa1 instanceof Cidadao); //retorna = false
console.log(pessoa1 instanceof Pessoa); //retorna = true
//instanceof retorna true se for do tipo, ou false se não for.

/* --------------------------- */

/* Polimorfismo nada mais é que, uma classe "Pai", possuindo diversas formas, que são as classes "Filhas".*/