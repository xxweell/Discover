// Arrow function

// A arrow function é uma forma mais curta de escrever uma função. Normalmente ela é atribuida a uma constante. Por não sofrer hoisting, deve ser declarada antes de sua invocação.
const sayMyName = name => {
  console.log(name)
}

sayMyName('Wellington Nogs')
