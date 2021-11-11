// if .. else

let temperature = 36.9
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 35.5 && temperature >= 37

if (highTemperature) {
  console.log('Febre alta')
} else if (mediumTemperature) {
  console.log('Febre moderada')
} else {
  console.log('Saudável')
}

// switch

function calculate(number1, operator, number2) {
  let result = 0

  switch (operator) {
    case '+':
      result = number1 + number2
      break
    case '-':
      result = number1 - number2
      break
    case '*':
      result = number1 * number2
      break
    case '/':
      result = number1 / number2
      break
    default:
      console.log('não implementado')
  }

  return result
}

console.log(calculate(5, '/', 9))

//throw... try catch
//utilizado pra capturar erros que a aplicação possa ter e não comprometer o funcionamento do restante do código

function sayMyName(name = '') {
  if (name === '') {
    throw 'Nome é obrigatório' //se o parâmetro name for vazio, essa mensagem de erro deverá ser disparada. Pode ser somente uma mensagem, a instância de um Obj do tipo Erro e etc
  }

  console.log()
}

try {
  // tenta executar a função
  sayMyName()
} catch (e) {
  //caso tenha algum erro, ele é capturado pelo parâmetro e e exibido no console
  console.log(e)
}

console.log('após o try/catch, a aplicação continua')

//Estrutura de repetição
//for
//break - interrompe a execução do loop
//continue - pula a execução do momento

// for (let i = 1; i <= 10; i++) {
//   console.log(i)
// }

// for (let i = 1; i <= 10; i++) {
//   if (i === 5) {
//     break // interrompe nesse momento e não executa mais
//   }
//   console.log(i)
// }

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue // pula uma interação, conforme condição do if, e continua na próxima
  }
  console.log(i)
}

//Estutura de repetição
//while

let i = 0
while (i < 10) {
  console.log(i)
  i++
}
// utilizamos o while quando não sabemos o ponto de parada. Ex:
let j = 65465484654
while (j > 10) {
  console.log(j)
  j /= 35
}

//for of
// essa estrutura permite usar um loop para fazer as iterações dependendo do tamanho do tipo de dado utilizado

let name = 'Wellington'
let names = ['João', 'Pedro', 'Paulo']

for (let char of name) {
  // nesse caso, o loop vai rodar em quanto houver caracteres na variável name que é do tipo string. Cada caractere vai ser atribuido pra variável char e impresso no console
  console.log(char)
}

for (let name of names) {
  // já nesse caso, o loop vai rodar em quanto houverem posições no array names. Cada posição vai ser atribuida pra variável name e impressa no console
  console.log(name)
}

//for in
// cria um loop utilizando um objeto pra pegar suas propriedades

let person = {
  name: 'Jhon',
  age: 28,
  weigth: 80
}

for (let property in person) {
  console.log(property) // exige o nome da propriedade
  console.log(person[property]) // exibe o valor da propriedade que está sendo pegada no momento pela variável property
}
