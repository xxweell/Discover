/* ###Sistemas de gastos familiar

/*
  Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
  *income: []
  *expenses: []

  Agora, crie uma função que irá calcular o total de income e expenses e irá mostrar uma mensagem se a familia está 
  com balance positivo ou negativo, seguindo o valor do balance
*/

let family = {
  income: [2500, 2600],
  expenses: [600, 200, 60, 100, 100, 500, 5000]
}

function calculateBalance() {
  let totalincome = 0
  for (let income of family.income) {
    totalincome += income
  }

  let totalexpenses = 0
  for (let expenses of family.expenses) {
    totalexpenses += expenses
  }

  let balanceFamily = totalincome - totalexpenses

  if (balanceFamily >= 0) {
    console.log(`Saldo positivo de R$: ${balanceFamily.toFixed(2)}`)
  } else {
    console.log(`Saldo negativo de R$: ${balanceFamily.toFixed(2)}`)
  }
}

calculateBalance()
