// o events já faz parte do core do nodejs, por isso posso importá-lo diretamente
const { EventEmitter } = require('events') // EventEmitter é uma função do estilo Classe

const ev = new EventEmitter() // instanciando um objeto do tipo EventEmitter na variável events

// o on deve estar antes do emit pra que realmente aconteça (código lido de cima pra baixo)
ev.once('saySomething', message => {
  // on() pra ouvir várias vezes e once() pra ouvir somente uma vez
  console.log('Eu ouvi você, ', message)
})

ev.emit('saySomething', 'Well') // primeiro argumento é o nome do evento, segundo argumento é o que será passado pra função
ev.emit('saySomething', 'Mayk')
