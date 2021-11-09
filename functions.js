/*
  new

  * left-hand-side expression
  * criar um novo objeto
*/

let name = new String('Well')
name.surName = 'Nogueira'
let age = new Number(28)
let date = new Date('2020-12-01')
console.log(name.surName, age, date)

/*
  Operadores unários
  typeof
  delete
*/

const person = {
  name: 'Wellington',
  age: 28
}

delete person.age // delete serve pra deletar uma PROPRIEDADE de um objeto
console.log(person)

// Operadores Aritméticos

// multiplicação
console.log(3 * 5)

//divisão
console.log(12 / 2)

//soma
console.log(5 + 8)

//subtração
console.log(10 - 5)

// resto da divisão
let remainder
remainder = 11 % 3
console.log(remainder)

//incremento
let increment = 0
increment++
console.log(increment) // no console logo só incrementa se eu usar antes da variável ++increment

//decremento
let decrement = 0
decrement--
console.log(decrement)

//exponencial **
console.log(3 ** 3)
