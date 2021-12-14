// Manipulando conteúdo
// textContent
const element = document.querySelector('h1')

element.textContent = 'Olá Devs!'
console.log(element)

// Manipulando conteúdo
// innerText
const element1 = document.querySelector('h1')

element1.innerText = 'innerText'

//Manipulando conteúdo
//innerHTML -> utilizado quando queremos adicionar tags HTML

const element2 = document.querySelector('h1')

element2.innerHTML = 'innerHTML <small>!!!!!!!!!!</small>'

// value
const element3 = document.querySelector('input')

console.log(element3.value)
element3.value = 'outro valor'

// Atributos

const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')

console.log(headerID.getAttribute('class')) // pegando o atributos que tem classe

header.removeAttribute('id')

header.setAttribute('class', 'bg header')

// Alterando estilos
const element4 = document.querySelector('body')

// element4.style.backgroundColor = '#f9f3D2'
console.log(element4.style.backgroundColor)

//classList
const element5 = document.querySelector('body')

element5.classList.add('active', 'green') //adicionar classes
console.log(element5.classList)
element5.classList.remove('active')
element5.classList.toggle('active') // interruptor. Verifica se a classe existe, caso exista ele remove, caso não exista ele adiciona
