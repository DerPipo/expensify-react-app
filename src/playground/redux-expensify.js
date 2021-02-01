














store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(state.filters.sortBy, visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }))



// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))

// store.dispatch(setTextFilter('rent'))
// store.dispatch(setTextFilter())

store.dispatch(sortByAmount())
store.dispatch(sortByDate())

// store.dispatch(setStartDate(-1500))
// store.dispatch(setEndDate(1500))
// store.dispatch(setTextFilter('oFFee'))


// store.dispatch(setStartDate(123))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(456))
// store.dispatch(setEndDate())

const demoState = {
    expenses: [{
        id: 'fjsoahgosa',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}


const user = {
    name: 'Jen',
    age: 24
}

console.log({
    ...user,
    age: 27,
    location: 'Philadelphia'
})