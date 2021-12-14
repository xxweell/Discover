// Eventos

const h1 = document.querySelector('h1')

// ouvidor de eventos. tenho primeiro que falar qual evento eu quero e depois qual função vai rodar
h1.addEventListener('click', print)

function print() {
  console.log('print')
}

h1.addEventListener('click', function () {
  console.log('outra funcionalidade')
})

// // teclado
// const input = document.querySelector('input')

// input.onkeydown = function () {
//   console.log('rodando')
// }

// argumentos event

const input = document.querySelector('input')
input.onkeydown = function (event) {
  console.log(event)
}
