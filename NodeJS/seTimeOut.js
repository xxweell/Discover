// setTimeOut - rodar uma função depois de X milisegundos
const timeOut = 3000
const finished = () => console.log('done!')

setTimeout(finished, timeOut) // passa somente a referencia da função (sem os () ) pra que ela seja chamada e executada após o tempo determinado
console.log('Chamar')
