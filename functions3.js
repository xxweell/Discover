let total = 0

const sum = function (number1, number2) {
  let total = number1 + number2
  return total
}

let number1 = 35
let number2 = 20

console.log(`A soma é ${sum(number1, number2)}`)
console.log(total) // essa variável total é a que está no escopo global, portanto ela não sofre as modificações feitas na função sum(). São duas variáveis diferentes
