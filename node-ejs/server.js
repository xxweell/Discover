const express = require('express') // pegando o módulo express do core do nodejs
const app = express() // instanciando o express na variavel app

app.set('view engine', 'ejs') // fala pro express que a ferramenta que sera utilizada pra visualizar html (view engine) será o ejs(segundo parâmetro)

// criando a rota principal que vai renderizar o index.ejs
// quando for chamada, a resposta vai ser a renderização do index.ejs
app.get('/', (req, res) => {
  res.render('index.ejs')
})

// rota para o about do site
app.get('/sobre', (req, res) => {
  res.render('about.ejs')
})

app.listen(8080) // listen é o método que fica ouvindo. Quando a porta 8080 for chamada, o servidor será rodado
console.log('Servidor rodando!')
