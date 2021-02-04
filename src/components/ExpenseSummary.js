import React from 'react'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'
import formatCurrency from '../utils/currency-format'

export const ExpenseSummary = (props) => (
    <div>
        <p>Viewing {props.expenseCount} expense{props.expenseCount === 1 ? '' : 's'} totalling {formatCurrency(props.expensesTotal)}</p>
    </div>
)

const mapStateToProps = (state) => {
    const selectedExpenses = selectExpenses(state.expenses, state.filters)
    return {
        expenseCount: selectedExpenses.length,
        expensesTotal: selectExpensesTotal(selectedExpenses)
    }
}

export default connect(mapStateToProps)(ExpenseSummary)