import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import formatCurrency from '../utils/currency-format';

export const ExpenseSummary = props => (
  <div className="page-header">
    <div className="content-container">
      <h1 className="page-header__title">
        Viewing <span>{props.expenseCount}</span> expense
        {props.expenseCount === 1 ? '' : 's'} totalling{' '}
        <span>{formatCurrency(props.expensesTotal)}</span>
      </h1>
      {props.expenseCount === 0 && (
        <h3 className="page-header__subtitle">
          {props.hiddenExpensesCount}{' '}
          {props.hiddenExpensesCount === 1 ? 'is' : 'are'} hidden by your
          filters.
        </h3>
      )}
      <div className="page-header__actions">
        <Link className="button" to="/create">
          Add Expense
        </Link>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => {
  const selectedExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: selectedExpenses.length,
    expensesTotal: selectExpensesTotal(selectedExpenses),
    hiddenExpensesCount: state.expenses.length - selectedExpenses.length,
  };
};

export default connect(mapStateToProps)(ExpenseSummary);
