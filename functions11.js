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

//Operadores de comparação

//Irá comparar valores e retornar um Boolean como resposta à comparação

let one = 1
let two = 2

// == igual a
console.log(two == 1) // false
console.log(one == '1') //true

// != diferente de
console.log(one != two) // true
console.log(one != 1) //false
console.log(one != '1') //false

// Comparação de valor e tipo de dado

// === estritamente igual a
console.log(one === '1') //false
console.log(one === 1) // true

// !== estritamente diferente de
console.log(two !== '2') //true
console.log(two !== 2) //false

// > Maior que
console.log(one > two) //false

// >= Maior igual a
console.log(one >= 1) //true
console.log(two >= 1) //true

// < Menor que
console.log(one < two) //true

// <= Menor igual a
console.log(one <= two) // true
console.log(one <= 1) //true
console.log(one <= 0) //false

//Operadores de Atribuição (Assignment)
let x

// assignment
x = 1
console.log(x)

//adition assignment
// x = x + 2
x += 2
console.log(x)

// subtraction assignment
// x = x -1
x -= 1
console.log(x)

// multiplications assignment
// x = x * 2
x *= 2
console.log(x)

//division assignment
// x = x / 2
x /= 2
console.log(x)

//remainder, exponetiation
// x %= 2
x ** 2
console.log(x)

//Operadores lógicos (logical operators)

// -2 valores booleanos, quando verificados, resultará em verdadeiro ou falso

let pao = true
let queijo = true

// AND &&
console.log(pao && queijo) //true

// OR ||
console.log(pao || queijo) //true

// NOT !
console.log(!pao) //false

//Operador condicional ternário
//Condição então valor 1 senão valor2
// condition ? value1 : value2

//Exemplos
//Café da manhã top
let leite = false
let frutas = false

const niceBreakFast = leite || frutas ? 'Café da manhã topp' : 'Café ruim'
console.log(niceBreakFast)

// Maior que 18
let idade = 17
const canDrive = idade >= 18 ? 'can Drive' : "cant't drive"
console.log(canDrive)

/* 
  FALSY
  Quando um valor é considerado false em contextos onde um booleano é
  obrigatório (condicionais e loops)

  false
  0
  -0
  ""
  null
  undefined
  NaN
*/
console.log(0 ? 'true' : 'false')

/* 
  TRUTHY
  Quando um valor é considerado true em contextos onde um booleano é
  obrigatório (condicionais e loops)

  true
  {}
  []
  1
  3.23
  "0" string nao vazia
  "false"
  -1
  Infinity
  -Infinity
*/
console.log({} ? 'verdadeiro' : 'FALSO')

/*
  Operador precedente
    Precedência de Operadores

  * grounping                                       ()
  * negação e incremento                            ! == --
  * multiplicação e divisão                         * /
  * adição e subtração                              + -
  * relacional                                      < <= > >=
  * igualdade                                       == != === !==
  * AND                                             &&
  * OR                                              ||
  * condicional                                     ?:
  * assignment (atribuição)                         = += -= %=
*/
