import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
// import 'react-dates/initialize'


class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            note: props.expense ? props.expense.note : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocus: false,
            error: ''
        }
    }
    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }
    onAmountChange = (e) => {
        const amount = e.target.value
        if (!amount || amount.match(/^\d+(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
        // const amount = parseInt(e.target.value)
    }
    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }
    onDateChange = (date) => {
        if (date) {
            this.setState(() => ({ createdAt: date }))
        }
    }
    onCalendarFocusChange = ({  focused }) => {
        this.setState(() => ({ calendarFocus: focused }))
    }
    onSubmit = (e) => {
        e.preventDefault()
        
        if (!this.state.description || !this.state.amount) {
            // Set error state equal to 'Please provide description and amount.'
            this.setState(() => ({ error: 'Please provide description and amount.' }))
        } else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }
    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && 
                    <p className="form__error">{this.state.error}</p>
                }
                <input 
                    className="text-input"
                    type="text" 
                    placeholder="Description" 
                    autoFocus 
                    value={this.state.description} 
                    onChange={this.onDescriptionChange} 
                />
                <input 
                    className="text-input" 
                    type="text" 
                    placeholder="Amount" 
                    value={this.state.amount} 
                    onChange={this.onAmountChange} 
                />
                <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocus}
                    onFocusChange={this.onCalendarFocusChange} 
                    // id="single_date_picker_id"
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
                <textarea 
                    className="textarea"
                    placeholder="Add a note for your expense (optional)" 
                    value={this.state.note} 
                    onChange={this.onNoteChange}>
                </textarea>
                <div>
                    <button className="button" type="submit">{this.props.expense ? 'Save Expense' : 'Add Expense'}</button>
                </div>
            </form>
        )
    }
}

export default ExpenseForm