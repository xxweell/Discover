// callback function

// a call back utiliza os parâmetros pra receber outra função e chamá-la. No caso abaixo, name recebe o conteúdo da arrow function sayMyName e é executado como função
function sayMyName(name) {
  console.log('antes da callback')
  name()
  console.log('depois da callback')
}

sayMyName(() => {
  console.log('estou em uma callback')
})

// Por debaixo dos panos é como se o código estivesse assim:

// function sayMyName() {
//   console.log('antes da callback')
//   function name() {
//     console.log('estou em uma callback')
//   }
//   name()
//   console.log('depois da callback')
// }

// sayMyName()
