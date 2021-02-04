import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeExpense } from '../actions/expenses'
import formatCurrency from '../utils/currency-format'
import formatDate from '../utils/date-format'

const ExpenseListItem = (props) => (
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
            // console.log('Should remove', props.expense.id)
            props.dispatch(removeExpense(props.expense.id))
        }}>Remove</button>
    </div>
)

// export default connect()(ExpenseListItem)
export default ExpenseListItem