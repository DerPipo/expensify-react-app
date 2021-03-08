import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends React.Component {
  state = { modalIsOpen: false };
  onSubmit = expense => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onRemoveExpenseButtonClick = () => {
    this.setState({ modalIsOpen: true });
  };
  onConfirmDeleteButtonClick = () => {
    this.props.startRemoveExpense(this.props.expense.id);
    this.props.history.push('/');
  };
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm onSubmit={this.onSubmit} expense={this.props.expense} />
          <button
            className="button button--secondary"
            onClick={this.onRemoveExpenseButtonClick}
          >
            Remove Expense
          </button>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          appElement={document.getElementById('app')}
          onRequestClose={this.closeModal}
          className="modal"
        >
          <h1 className="modal__title">Are you sure?</h1>
          <button
            className="modal__button button"
            onClick={this.onConfirmDeleteButtonClick}
          >
            Yes, delete it
          </button>
          <button
            className="modal__button button button--secondary"
            onClick={this.closeModal}
          >
            Cancel
          </button>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: id => dispatch(startRemoveExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
