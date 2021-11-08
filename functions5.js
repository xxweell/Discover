// function hoisting

sayMyName() // nesse caso acontece o hoisting da função abaixo. É como se o js elevasse a declaração da função para antes da chamada da função
// ficaria da seguinte forma
/*
 function sayMyName() {
  console.log('Wellington Nogueira')
}

sayMyName()
 */

function sayMyName() {
  console.log('Wellington Nogueira')
}

/*
já quando a declaração é feita em forma de função anônima e atribuida a uma variável, não acontece o hoisting da função. Pra usar dessa forma, a chamada da função deve ocorrer após a sua declaração

const sayMyName = function(){
  console.log('Wellington Nogueira')
}
*/
