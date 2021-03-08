import React from 'react';
import { connect } from 'react-redux';
import AddDummyDataModal from './AddDummyDataModal';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummary from './ExpenseSummary';

export const ExpenseDashboardPage = props => {
  return (
    <div>
      <ExpenseSummary />
      <ExpenseListFilters />
      <ExpenseList />
      {props.noExpenses && <AddDummyDataModal />}
    </div>
  );
};

const mapStateToProps = state => ({
  noExpenses: state.expenses.length === 0,
});

export default connect(mapStateToProps)(ExpenseDashboardPage);
