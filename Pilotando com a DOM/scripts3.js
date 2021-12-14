// Navegando pelos elementos
// parentNode parentElement
const element = document.querySelector('h1')

console.log(element.parentNode) //pega o elemento pai no HTML

// childNodes children -> elementos filhos
const el = document.querySelector('body')

console.log(el.childNodes) //NodeList - pega os espaços entre os elementos como text
console.log(el.children) //HTMLCollection - não pega os espaços

//firstChild firstElementChild
console.log(el.firstChild) //NodeList - pega os espaços entre os elementos como text
console.log(el.firstElementChild) //HTMLCollection - não pega os espaços

//lastChild lastElementChild
console.log(el.lastChild) //NodeList - pega os espaços entre os elementos como text
console.log(el.lastElementChild) //HTMLCollection - não pega os espaços

const el1 = document.querySelector('header')
const el2 = document.querySelector('body script')

// nextSibling nextElementSibling
console.log(el1.nextSibling) //pega o texto
console.log(el1.nextElementSibling) // não pega o texto HTMLCollection

// previousSibling previousElementSibling
console.log(el2.previousSibling) //pega o texto
console.log(el2.previousElementSibling) // não pega o texto HTMLCollection

// Criando e adicionando elementos

// createElement
const div = document.createElement('div') //cria a div em memória
div.innerText = 'Olá Devs!!'

// append prepend
const body = document.querySelector('body')

// body.append(div) // adiciona a div no fim do body
// body.prepend(div) // adiciona a div no fim do body

// insertBefore
const script = body.querySelector('script')
body.insertBefore(div, script) //o primeiro é o elemento que deverá ser adicionado e o segundo é o nó de referência - a div será adicionada antes da tag script

// Técnica pra inserir depois do nó de referência - como se fosse um insertAfter
const header = body.querySelector('header')
body.insertBefore(div, header.nextSibling) // adiciona a div antes do header. mas utilizando o nextSibring, será adicionada depois do header - Simula um insertAfter
