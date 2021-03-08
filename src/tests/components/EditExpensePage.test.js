import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let startEditExpense, history, startRemoveExpense, wrapper;

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn(() => Promise.resolve());
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      expense={expenses[0]}
      startEditExpense={startEditExpense}
      startRemoveExpense={startRemoveExpense}
      history={history}
    />
  );
});

test('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
  wrapper.find('ExpenseForm').simulate('submit', expenses[0]);
  expect(startEditExpense).toHaveBeenCalledTimes(1);
  expect(startEditExpense).toHaveBeenLastCalledWith(
    expenses[0].id,
    expenses[0]
  );
  expect(history.push).toHaveBeenCalledTimes(1);
  expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle startRemoveExpense', () => {
  wrapper.find('button.modal__button').at(0).simulate('click');
  expect(startRemoveExpense).toHaveBeenCalledTimes(1);
  expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[0].id);
  expect(history.push).toHaveBeenCalledTimes(1);
  expect(history.push).toHaveBeenLastCalledWith('/');
});
