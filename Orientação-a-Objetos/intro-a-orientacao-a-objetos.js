/* Um objeto é detonado pela abertura de chaves, os atributos são pares chave-valor separados por dois pontos (:) e os métodos são funções. */
const pessoa = {
   nome: "Lucas",
   idade: 26,
   sexo: "Feminino"
};
console.log(pessoa);

// função dentro do objeto sem a necessidade de passar parametros (pois vai ser usado os dados do objeto)
const quadrado = {
   base: 10,
   altura: 10,
   calculaArea: function(){return this.base * this.altura}
};
console.log(quadrado.calculaArea());

//Para nos referirmos a um atributo ou método do objeto, de dentro dele mesmo, precisamos usar o prefixo "this", para saber que é algo que pertence ao objeto e não alguma variável declarada previamente.
