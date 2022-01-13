/* Métodos são computacionalmente idênticos às funções. Chamamos de métodos e não de funçõe por dois motivos:
1 - Por estar no contexto POO e no interior de uma classe;
2 - Por ele poder maniplar o estado interno de um objeto;

Para declarar um método em uma classe, basta fazer, após o construtor, uma função sem a palavra function, usamos apenas o nome.
Também não podemos usar arrow functions nesse contexto por conta do mesmo problema com o this, que tivemos nos objetos.*/

class Quadrado{
   constructor(base, altura){
      //condição
      if(isNaN(base) || isNaN(altura)) throw "Base e altura precisam ser números";

      this.base = base;
      this.altura = altura;
      this.cor = undefined;
   }
   calcularArea() {
      return this.base * this.altura;
   }
   duplicaBase() {
      this.base = 2 * this.base;
   }
   duplicaAltura() {
      this.altura = 2 * this.altura;
   }
   imprimir() {
      return `<div style='width:${this.base}px; height:${this.altura}px; background-color:${this.cor || "blue"}'></div>`;
   }
}

const quadrado1 = new Quadrado (3,4);
console.log(quadrado1);
console.log(quadrado1.calcularArea());
//Quadrado {base: 3, altura: 4, cor: undefined}
//12

quadrado1.duplicaAltura();
console.log(quadrado1);
//Quadrado {base: 3, altura: 8, cor: undefined}

quadrado1.duplicaBase();
console.log(quadrado1);
//Quadrado {base: 6, altura: 8, cor: undefined}

console.log(quadrado1.imprimir());
//<div style='width:6px; height:8px; background-color:blue'></div>