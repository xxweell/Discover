/*
  Crie 2 arquivos JS.
  O primeiro irá exportar uma função chamada getFlagValue que receberá um argumento do tipo String
  Essa função deverá buscar dentro do array process.argv a flag desejada(que é a string) e retornar o valor da flag

  O segundo arquivo deverá importar a função e passar a flag desejada.

  Iremos rodar no terminal o segundo arquivo passando as flags --name e --greeting para que seja impresso no terminal
  a saudação e o nome da pessoa
*/

function getFlagValue(flag) {
  const index =
    process.argv.indexOf(flag) +
    1 /* Essa linha busca dentro do array a posição da flag. Como quero pegar o valor, coloco +1 */
  return process.argv[index]
}
module.exports = getFlagValue
