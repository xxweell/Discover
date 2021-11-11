/* ###Buscando e contando dados em Arrays

/*
  Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios:

    *Contar o número de categorias e o número de livros em cada categoria
    *Contar o número de autores
    *Mostrar livros do autor Augusto Cury
    *Transformar a função acima em uma que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
  {
    category: 'Riqueza',
    books: [
      {
        title: 'Os segredos da mente milionária',
        author: 'T. Harv Eker'
      },
      {
        title: 'O homem mais rico da Babilônia',
        author: 'George S. Clason'
      },
      {
        title: 'Pai rico, pai pobre',
        author: 'Robert T. Kiyosaki e Sharon L. Lechter'
      },
      {
        title: 'teste',
        author: 'teste'
      }
    ]
  },
  {
    category: 'Inteligência Emocional',
    books: [
      {
        title: 'Você é Insubstituível',
        author: 'Augusto Cury'
      },
      {
        title: 'Ansiedade - Como enfrentar o mal do século',
        author: 'Augusto Cury'
      },
      {
        title: 'Os 7 hábitos das pessoas altamente eficazes',
        author: 'Stephen R. Covey'
      }
    ]
  }
]

const totalCategorys = booksByCategory.length // pega o número de categorias, ou seja, os dois objetos que existem dentro do array booksByCategory, ou seja, Riqueza e Inteligência Emocional
console.log(totalCategorys)

for (let totalBooksByCategory in booksByCategory) {
  totalBooksByCategory = booksByCategory[0].books.length //O array booksByCategory possui dois objetos. Pra acessar a quantidade de livros em cada categoria, preciso primeiro acessar a posição no array em que existe a propriedade books, pra depois usar o length e contar a quantidade de livros
  console.log(totalBooksByCategory)
}
