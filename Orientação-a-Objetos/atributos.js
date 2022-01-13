/* Quando formos adicionar um método para calcular área nessa classe, precisamos garantir que os valores de base e altura sejam números ou então o cálculo será impossível, lembre-se que nada impede que sejam passadas strings por exemplo. */

// Para isso, é necessário fazer uma lógica condicional, podemos usar isNaN que é uma função que verifica se o valor não é número:
 
class Quadrado{
   constructor(base, altura) {
      //isNaN (is not a number)
      // throw (lança um erro em mensagem)
      if(isNaN(base) || isNaN(altura)) throw "Base e altura precisam ser números!";
      this.base = base;
      this.altura = altura;

      // pode-se tambem adicionar um atributo opcional
      this.cor = undefined;
   }
}

//Teste simples da condicional numerica:
//const quadrado1 = new Quadrado('11', 'doze');
//console.log(quadrado1);

//Exemplo de objetos usando o atributo opcional cor:
const quadrado2 = new Quadrado(3, 4);
console.log(quadrado2);

const quadrado3 = new Quadrado(3, 4);
quadrado3.cor = 'blue';
console.log(quadrado3);
