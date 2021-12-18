//lista de argumentos
// o precess mostra os processo que está sendo rodado neste momento no node.

const firstName = process.argv[2]
const lastName = process.argv[3]

console.log(`Seu nome é: ${firstName} - ${lastName}`)
