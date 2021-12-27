const express = require('express') // pegando o módulo express do core do nodejs
const app = express() // instanciando o express na variavel app

app.set('view engine', 'ejs') // fala pro express que a ferramenta que sera utilizada pra visualizar html (view engine) será o ejs(segundo parâmetro)

// criando a rota principal que vai renderizar o index.ejs
// quando for chamada, a resposta vai ser a renderização do index.ejs
app.get('/', (req, res) => {
  const items = [
    {
      title: 'D',
      message: 'esenvolver aplicações/serviços de forma fácil.'
    },
    {
      title: 'E',
      message: 'JS usa JavaScript para renderizar HTML.'
    },
    {
      title: 'M',
      message: 'uito fácil de usar.'
    },
    {
      title: 'A',
      message: 'morzinho.'
    },
    {
      title: 'I',
      message: 'nstall ejs.'
    },
    {
      title: 'S',
      message: 'intaxe simples.'
    }
  ]

  const subtitle =
    'Uma linguagem de modelagem para criação de páginas HTML utilizando JS'
  res.render('pages/index.ejs', {
    qualitys: items, // passando o objeto qualitys para o pages/index.ejs
    subtitle: subtitle
  })
})

// rota para o about do site
app.get('/sobre', (req, res) => {
  res.render('pages/about.ejs')
})

app.listen(8080) // listen é o método que fica ouvindo. Quando a porta 8080 for chamada, o servidor será rodado
console.log('Servidor rodando!')
