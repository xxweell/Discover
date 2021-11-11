/* ### Transformar scores escolares

  Crie um algoritmo que transforma as scores do sistema
  numérico para sistema de scores em caracteres do tipo A B C

  * de 90 pra cima - A
  * entre 80 - 89 - B
  * entre 70 e 79 - C
  * entre 60 e 69 - D
  * menor que 60 - F
*/

function getScore(score) {
  let scoreA = score > 90 && score <= 100
  let scoreB = score >= 80 && score <= 89
  let scoreC = score >= 70 && score <= 79
  let scoreD = score >= 60 && score <= 69
  let scoreF = score < 60 && score >= 0

  let scoreFinal

  if (scoreA) {
    scoreFinal = 'A'
  } else if (scoreB) {
    scoreFinal = 'B'
  } else if (scoreC) {
    scoreFinal = 'C'
  } else if (scoreD) {
    scoreFinal = 'D'
  } else if (scoreF) {
    scoreFinal = 'F'
  } else {
    scoreFinal = 'Nota Inválida'
  }

  return scoreFinal
}

console.log(getScore(101))
console.log(getScore(95))
console.log(getScore(87))
console.log(getScore(76))
console.log(getScore(63))
console.log(getScore(55))
console.log(getScore(-1))
