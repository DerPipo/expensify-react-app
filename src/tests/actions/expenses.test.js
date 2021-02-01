import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'My description',
        amount: 1000,
        note: 'My note',
        createdAt: 42
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should setup add expense action object with no data', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            amount: 0,
            createdAt: 0,
            description: '',
            id: expect.any(String),
            note: ''
        }
    })
})

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'New note value' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'New note value'
        }
    })
})

test('should setup remove expense action object', () => {
    const action = removeExpense('123abc')
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

addExpense()
editExpense()
removeExpense()
