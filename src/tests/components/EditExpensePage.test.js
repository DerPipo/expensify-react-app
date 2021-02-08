import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let editExpense, history, startRemoveExpense, wrapper

beforeEach(() => {
    editExpense = jest.fn()
    startRemoveExpense = jest.fn(() => Promise.resolve())
    history = { push: jest.fn() }
    wrapper = shallow(<EditExpensePage expense={expenses[0]} editExpense={editExpense} startRemoveExpense={startRemoveExpense} history={history} />)
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

test('should handle startRemoveExpense', () => {
    wrapper.find('button').simulate('click')
    expect(startRemoveExpense).toHaveBeenCalledTimes(1)
    expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[0].id)
    expect(history.push).toHaveBeenCalledTimes(1)
    expect(history.push).toHaveBeenLastCalledWith('/')
})