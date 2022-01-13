/* Classes são a forma de definir as entidades no nosso sistema. Elas são estruturas capazes de dar origem a infinitos objetos de mesmo tipo. */

class Pessoa{
   constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
   }
}

const pessoa1 = new Pessoa('Carlos', 20);
console.log(pessoa1);

// Alteração simples no objeto criado:
pessoa1.idade = 22;
console.log(pessoa1.idade);

// Sempre que precisar de uma nova Pessoa, basta criar outro objeto:
const pessoa2 = new Pessoa('Marta', 26);
console.log(pessoa2);
