// process.stdout.write('alguma coisa \n\n') /* \n pra dar nova linha */
const questions = [
  'O que aprendi hoje?',
  'O que me deixou aborrecido? E o que eu poderia fazer para melhorar?',
  'O que me deixou feliz hoje?',
  'Quantas pessoas ajudei hoje?'
]

// arrow function ask
const ask = (index = 0) => {
  process.stdout.write('\n\n' + questions[index] + ' > ')
}

ask()

const answers = [] //array pra guardar respostas
process.stdin.on('data', data => {
  answers.push(data.toString().trim()) // empurra pro array a resposta
  if (answers.length < questions.length) {
    ask(answers.length) // tamanho do array answers é passado como parâmetro da função ask
  } else {
    process.exit()
  }

  // // o on fica ouvindo um evento de entrada de dados. Quando dados são inseridos, a função data roda
  // process.stdout.write(data.toString().trim() + '\n') // escreve no console o que o dado que foi passado
  // process.exit() // finaliza o processo
})

process.on('exit', () => {
  // fica esperando o process.exit ser rodado pra executar essa função anônima que formata as repostas
  console.log(`
    Bacana WELL!

    O que você aprendeu hoje foi:
    ${answers[0]}

    O que te aborreceu e você poderia melhorar foi:
    ${answers[1]}

    O que te deixou feliz hoje foi:
    ${answers[2]}

    Você ajudou ${answers[3]} pessoas hoje!

    Volte amanhã mais mais reflexões!!
  `)
})
