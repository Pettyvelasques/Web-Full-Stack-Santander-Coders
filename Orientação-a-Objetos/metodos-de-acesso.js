/* Métodos de Acesso em linguagens como o Java são métodos que permitem a leitura e/ou escrita (a critério do programador) de atributos privados.*/
class Quadrado {

   constructor(base, altura) {
      let cor = 'blue';
      this.base = base;
      this.altura = altura;

      // Nesse exemplo, getCor retorna o valor da cor enquanto o setCor altera o valor da cor.
      this.getCor = () => {return cor;};
      this.setCor = (c) => {cor = c;}
   }
}


const quadrado1 = new Quadrado(3, 4)
console.log(quadrado1.getCor());
//retorna = blue

quadrado1.cor = 'red';
console.log(quadrado1.getCor());
//retorna = blue

quadrado1.setCor('red');
console.log(quadrado1.getCor());
//retorna = red

/* Esse método acessa e escreve o atributo privado do objeto, entretanto, possui 02 limitações:
1 - Deve-se declarar todos os métodos dentro do construtor;
2 - Não impede que o usuário declare um atributo público(nesse caso, o atributo cor, conforme mostrado);*/

/* ------------------------------------------------- */

/* Métodos especiais, também são chamados métodos de acesso.
Nesse método, o usuário acha que manipula um atributo mas estava chamando um método*/
class outroQuadrado {

   constructor(base, altura) {
      this._cor = 'blue';
      this.base = base;
      this.altura = altura;
   }
      // Nesse exemplo, getCor retorna o valor da cor enquanto o setCor altera o valor da cor.
      get cor () {return this._cor;}
      set cor (cor) {this._cor = cor;}
}

const quadrado2 = new outroQuadrado(3,4);

console.log(quadrado2.cor);
//retorna = blue
console.log(quadrado2._cor);
//retorna = blue
quadrado2.cor = 'red';
console.log(quadrado2.cor);
//retorna = red
console.log(quadrado2._cor);
//retorna = red

/* Ao utilizar "quadrado.cor = 'red'" o usuário tem a impressão de estar alterando um atributo, mas na verdade está chamando um método, o "set cor"*/