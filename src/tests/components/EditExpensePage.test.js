import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let editExpense, history, removeExpense, wrapper

beforeEach(() => {
    editExpense = jest.fn()
    removeExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<EditExpensePage expense={expenses[0]} editExpense={editExpense} removeExpense={removeExpense} history={history} />)
})

test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').simulate('submit', expenses[0])
    expect(editExpense).toHaveBeenCalledTimes(1)
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0])
    expect(history.push).toHaveBeenCalledTimes(1)
    expect(history.push).toHaveBeenLastCalledWith('/')
})

test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click')
    expect(removeExpense).toHaveBeenCalledTimes(1)
    expect(removeExpense).toHaveBeenLastCalledWith(expenses[0].id)
    expect(history.push).toHaveBeenCalledTimes(1)
    expect(history.push).toHaveBeenLastCalledWith('/')
})