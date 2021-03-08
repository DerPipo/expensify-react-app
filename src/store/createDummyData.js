import { DateTime } from 'luxon';
import { addExpense } from '../actions/expenses';

// switch this over to startAddExpense to store the dummy data in the actual database
const addExpenseFunc = addExpense;

export default dispatch => {
  const expenses = [
    {
      id: 0,
      description: 'Coffee',
      note: '',
      amount: 349,
      createdAt: DateTime.now().toMillis(),
    },
    {
      id: 1,
      description: 'Donut',
      note: '',
      amount: 399,
      createdAt: DateTime.now().toMillis(),
    },
    {
      id: 2,
      description: 'Sandwich',
      note: '',
      amount: 500,
      createdAt: DateTime.now().toMillis(),
    },
    {
      id: 3,
      description: 'Rent',
      note: '',
      amount: 65000,
      createdAt: DateTime.fromObject({ day: 1 }).toMillis(),
    },
    {
      id: 4,
      description: 'Rent',
      note: '',
      amount: 65000,
      createdAt: DateTime.now().toMillis(),
      createdAt: DateTime.fromObject({ day: 1 })
        .minus({ months: 1 })
        .toMillis(),
    },
  ];

  expenses.forEach(expense => {
    dispatch(addExpenseFunc(expense));
  });
};
