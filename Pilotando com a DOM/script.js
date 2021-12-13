// pegando o elemento pelo ID
const element = document.getElementById('blog-title')
console.log(element)

//pegando elemento pelo ClassName
const element1 = document.getElementsByClassName('one')
console.log(element1)

//pegando pelo nome da tag HTML
const element3 = document.getElementsByTagName('div')
console.log(element3)

// querySelector - pega o primeiro seletor que encontrar na página
const element4 = document.querySelector('.one')
console.log(element4)

const elements = document.querySelectorAll('.one') // o querySelectorAll devolve uma nodeList, permitindo a utilização fo forEach

elements.forEach(el => console.log(el))

// RESUMO
// getElementById (retorna um element)
// getElementsByClassName (retorna um HTMLCollection)
// getElementsByTagName (retorna um HTMLCollection)
// querySelector (retorna um element)
// querySelectorAll (retorna um nodeList)
