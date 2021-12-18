// MÓDULOS NATIVOS
const path = require('path') // require é a maneira de chamar módulos próprios do nodejs ou módulos que podemos instalar ou criar
console.log(path.basename(__filename)) // basename é uma função. por parâmetro tenho que passar o nome do arquivo

// MEUS MÓDULOS
const myModule = require('./exports')
console.log(myModule)
