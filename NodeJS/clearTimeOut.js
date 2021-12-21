// clearTimeOut - cancelar um TimeOut
const timeOut = 3000
const finished = () => console.log('done!')

let timer = setTimeout(finished, timeOut) // passa somente a referencia da função (sem os () ) pra que ela seja chamada e executada após o tempo determinado
clearTimeout(timer) // cancela o timeOut, ou seja, a função finished não será executada
