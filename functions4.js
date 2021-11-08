// function scope
let subject

function createThink(subject) {
  subject = 'study'
  return subject
}

console.log(subject) // aqui pega a variavel global
console.log(createThink(subject)) // aqui pega a atualização feita na função createThink()
console.log(subject) // aqui pega a variavel global
