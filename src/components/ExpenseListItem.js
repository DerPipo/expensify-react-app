import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startRemoveExpense } from '../actions/expenses'
import formatCurrency from '../utils/currency-format'
import formatDate from '../utils/date-format'

export const ExpenseListItem = (props) => (
    <div>
        <Link to={`/edit/${props.expense.id}`}>
            <h3>{props.expense.description}</h3>
        </Link>
        <p>
            {formatCurrency(props.expense.amount)}
            - 
            {formatDate(props.expense.createdAt)}
        </p>
        <button onClick={() => {
            props.startRemoveExpense(props.expense.id)
        }}>Remove</button>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startRemoveExpense: (id) => { dispatch(startRemoveExpense(id)) }
})

export default connect(undefined, mapDispatchToProps)(ExpenseListItem)
// export default ExpenseListItem