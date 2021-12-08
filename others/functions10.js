/* 
  Alteração de um tipo de dados para outro

  Type conversion(typecasting)
  Quando o desenvolvedor transforma um tipo de dado para outro. Ex: console.log(Number('5') + 3)

  Type coersion
  Quando o javascrip realiza a conversão de um tipo de dado. Ex: console.log('5' + 3) // neste caso o js transformou o número 3 pra string e concatenou, tendo como resultado '53'
*/

//Manipulando Strings e Números

//Transformar String em Número e Número em String

let string = '123'
console.log(Number(string))
let number = 321
console.log(String(number))

//Contar quantos caracteres tem uma palavra e quantos dígitos tem um número

let word = 'Paralelepipedo'
console.log(word.length)
let number1 = 12356454
console.log(String(number1).length)

//Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
let number2 = 345.33654564
console.log(number2.toFixed(2).replace('.', ',')) // o retorno de number2.toFixed(2) é uma string, por isso logo em seguida posso utilizar o método .replace()

//Transforme letras minúsculas em maiúsculas. Faça o contrário disso também
let phrase = 'Programar é muito divertido'
console.log(phrase.toUpperCase())
console.log(phrase.toLocaleLowerCase())

/*
  Manipulando Strings e Arrays

  Separe um texto que contenha espaços em um novo array onde cada texto é uma posição do array.
  Depois disso, transforme o array em um texto e onde tinham espaços, coloque _
*/

let phrase1 = 'Eu quero viver o Amor!'
let myArray = phrase1.split(' ')
console.log(myArray)
console.log(myArray.join('_'))

//Verificar se a frase possui a palavra Amor
let phrase2 = 'Eu quero viver o Amor.'
console.log(phrase2.includes('Amor'))

//Criar Array com construtor
let myArray2 = new Array('a', 'b', 'c')
console.log(myArray2)

// Contar elementos de um array
console.log(['a', 'b', 'c'].length)

// Transformar uma cadeia de caracteres em elementos de um arra

let word2 = 'manupulação'
console.log(Array.from(word2))

//Manipulando Arrays

let techs = ['html', 'css', 'js']

//adicionar um item no fim
techs.push('nodejs')
//adicionar um item no inicio
techs.unshift('sql')
//remover do fim
techs.pop()
//remover do começo
techs.shift()
//pegar somente alguns elementos do array
// console.log(techs.slice(1, 3))
// remover 1 ou mais itens em qualquer posição do array
// techs.splice(1, 1)
//encontrar a posição de um elemento no Array
let index = techs.indexOf('css')
//remover o elemento de indice encontrado
techs.splice(index, 1)

console.log(techs)
