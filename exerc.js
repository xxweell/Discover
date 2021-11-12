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

// *Contar o número de categorias e o número de livros em cada categoria
const totalCategories = booksByCategory.length // pega o número de categorias, ou seja, os dois objetos que existem dentro do array booksByCategory, ou seja, Riqueza e Inteligência Emocional
console.log(totalCategories)

for (let category of booksByCategory) {
  // cada categoria do array booksByCategoria será guardada na variável category
  console.log('Total de livros da categoria: ', category.category) // exibir o nome da categoria
  console.log(category.books.length) // exibe a quantidade de livros em cada categoria
}

// *Contar o número de autores
function countAuthors() {
  let authors = [] // array que será alimentado pelos autores das categorias

  for (let category of booksByCategory) {
    // cada categoria do array booksByCategoria será guardada na variável category
    for (let book of category.books) {
      // gurda os livros em cada categoria
      if (authors.indexOf(book.author) === -1) {
        // verifica se existe autor no array authors. Se o resultado do indesOf for -1, significa que não existe aquele autor no array
        authors.push(book.author) //envia o book para o array
      }
    }
  }

  console.log('Total de autores: ', authors.length)
}

countAuthors()

// *Mostrar livros do autor Augusto Cury
function booksOfAugustoCury() {
  let books = [] // array que será alimentado pelos autores das categorias

  for (let category of booksByCategory) {
    // cada categoria do array booksByCategoria será guardada na variável category
    for (let book of category.books) {
      // gurda os livros em cada categoria
      if (book.author === 'Augusto Cury') {
        // verifica se existe autor no array authors. Se o resultado do indesOf for -1, significa que não existe aquele autor no array
        books.push(book.title) //envia o book para o array
      }
    }
  }

  console.log('Livros do autor: ', books)
}

booksOfAugustoCury()

// *Transformar a função acima em uma que irá receber o nome do autor e devolver os livros desse autor.

function booksOfAuthor(author) {
  let books = [] // array que será alimentado pelos autores das categorias

  for (let category of booksByCategory) {
    // cada categoria do array booksByCategoria será guardada na variável category
    for (let book of category.books) {
      // gurda os livros em cada categoria
      if (book.author === author) {
        // verifica se existe autor no array authors. Se o resultado do indesOf for -1, significa que não existe aquele autor no array
        books.push(book.title) //envia o book para o array
      }
    }
  }

  console.log(`Livros do autor ${author}: , ${books.join(', ')}`)
}

booksOfAuthor('Stephen R. Covey')
