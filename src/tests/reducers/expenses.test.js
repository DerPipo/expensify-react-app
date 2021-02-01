import expensesReducer from "../../reducers/expenses";
import expenses from '../fixtures/expenses'

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('should add an expense', () => {
    const expense = {
        id: 111,
        description: 'abc',
        amount: 123,
        note: '',
        createdAt: 0
    }
    const action = {
        type: 'ADD_EXPENSE', 
        expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([ expenses[0], expenses[2] ])
})

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should edit expense by id', () => {
    const newNote = 'ABC123'
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            note: newNote
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[0].note).toEqual(newNote)
})

test('should not edit expense if id not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: -1,
        updates: {
            note: 'abc'
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})
