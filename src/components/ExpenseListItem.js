import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'
import { removeExpense } from '../actions/expenses'


const ExpenseListItem = (props) => (
    <div>
        <Link to={`/edit/${props.expense.id}`}>
            <h3>{props.expense.description}</h3>
        </Link>
        <p>
            {numeral(props.expense.amount / 100).format('$0,0.00')} 
            - 
            {moment(props.expense.createdAt).format('MMMM Do, YYYY')}
        </p>
        <button onClick={() => {
            // console.log('Should remove', props.expense.id)
            props.dispatch(removeExpense(props.expense.id))
        }}>Remove</button>
    </div>
)

// export default connect()(ExpenseListItem)
export default ExpenseListItem