import moment from 'moment'

// Get visible expenses

const getVisibleExpenses = (expenses, filters) => {
    return expenses.filter((expense) => {
        const startDateMatch = filters.startDate ? filters.startDate.isSameOrBefore(expense.createdAt, 'day') : true
        const endDateMatch = filters.endDate ? filters.endDate.isSameOrAfter(expense.createdAt, 'day') : true
        const textMatch = expense.description.toLowerCase().includes(filters.text.toLowerCase())
        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (filters.sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (filters.sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}

export default getVisibleExpenses