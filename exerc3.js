/* ###Celsius em fahrenheit

/*
  Crie uma função que receba uma string em celsius ou fahrenheit
  e faça a transoformação de uma unidade para outra

  C = (F - 32) * 5/9

  F = C * 9/5 + 32
*/

function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes('C')
  const fahrenheitExists = degree.toUpperCase().includes('F')

  //fluxo de erro
  if (!celsiusExists && !fahrenheitExists) {
    throw new Error('Grau não identificado')
  }

  //fluxo ideal, transformar F -> C
  let updatedDegree = Number(degree.toUpperCase().replace('F', '')) // troca o F que tem no parâmetro degree por nada, retornando somente a string contendo o número
  let formula = fahrenheit => ((fahrenheit - 32) * 5) / 9 // arrow function que transforma fahrenheit para celsius
  let degreeSign = 'C' // letra que acompanhará o resultado da função formula

  //fluxo alternativo, transformar C -> F
  if (celsiusExists) {
    updatedDegree = Number(degree.toUpperCase().replace('C', '')) // troca o F que tem no parâmetro degree por nada, retornando somente a string contendo o número
    formula = celsius => (celsius * 9) / 5 + 32 // arrow function que transforma fahrenheit para celsius
    degreeSign = 'F' // letra que acompanhará o resultado da função formula
  }

  return formula(updatedDegree) + degreeSign
}

try {
  console.log(transformDegree('50F'))
  console.log(transformDegree('10C'))
  console.log(transformDegree('45Z'))
} catch (e) {
  console.log(e.message)
}
