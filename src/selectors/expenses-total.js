const getExpensesTotal = (expenses = []) => expenses.reduce((accumulator, expense) => accumulator + expense.amount, 0)

const getExpensesTotalAlt = (expenses = []) => expenses.map(expense => expense.amount).reduce((accumulator, amount) => accumulator + amount, 0)

export default getExpensesTotal