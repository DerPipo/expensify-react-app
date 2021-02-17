import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startRemoveExpense } from '../actions/expenses'
import formatCurrency from '../utils/currency-format'
import formatDate from '../utils/date-format'

export const ExpenseListItem = (props) => (
        <Link className="list-item" to={`/edit/${props.expense.id}`}>
            <div>
                <h3 className="list-item__title">{props.expense.description}</h3>
                <p className="list-item__subtitle">{formatDate(props.expense.createdAt)}</p>
            </div>
            <h3 className="list-item__data">{formatCurrency(props.expense.amount)}</h3>
        </Link>
)

const mapDispatchToProps = (dispatch) => ({
    startRemoveExpense: (id) => { dispatch(startRemoveExpense(id)) }
})

export default connect(undefined, mapDispatchToProps)(ExpenseListItem)
// export default ExpenseListItem