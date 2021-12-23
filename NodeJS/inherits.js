const { inherits } = require('util')
const { EventEmitter } = require('events')

//funcão construtora
function Character(name) {
  this.name = name
}

inherits(Character, EventEmitter) // aqui é onde a função Character herda as propriedades do EventEmitter

const chapolin = new Character('Chapolin') // instância do objeto. name = Chapolin
chapolin.on('help', () => console.log(`Eu! O ${chapolin.name} colorado!`)) // escuta o help e dispara a function com a mensagem

console.log('Oh! E agora quem poderá me defender?')
chapolin.emit('help') // evento emite o help
