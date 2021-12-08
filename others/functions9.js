/*
  Function() constructor

  * expressão new
  * criar um novo objeto
  * this keyword
*/

function Person(name) {
  this.name = name
  this.walk = function () {
    return this.name + ' está andando...'
  }
}

const mayk = new Person('Mayk')
const well = new Person('Well')
console.log(mayk.walk())
console.log(well.walk())

/*
  Prototype

    * prototype-based language
    * prototype chain
    * __proto__
  
  Utilizamos propriedades e funções já disponíveis no JS através dos protótipos.

  Exemplo: Um tipo de dado do tipo string tem o proto length a disposição para ser utilizado
  "Well".lenght retornaria 4
*/
