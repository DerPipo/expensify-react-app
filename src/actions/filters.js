// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

const availableSortBys = [
    {
        value: 'date',
        description: 'Date'
    },
    {
        value: 'amount',
        description: 'Amount'
    }
]

// SORT_BY
const sortBy = (sortBy = 'date') => ({
    type: 'SORT_BY',
    sortBy
})

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY',
    sortBy: 'date'
})

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY',
    sortBy: 'amount'
})

// SET_START_DATE
const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
})
// SET END_DATE
const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
})

export {
    setTextFilter,
    sortBy,
    sortByDate,
    sortByAmount,
    setStartDate,
    setEndDate,
    availableSortBys
}