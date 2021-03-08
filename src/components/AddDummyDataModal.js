import React, { useState } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import createDummyData from '../store/createDummyData';

const AddDummyDataModal = props => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const onCreateDummyData = () => {
    createDummyData(props.dispatch);
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      appElement={document.getElementById('app')}
      onRequestClose={closeModal}
      className="modal"
    >
      <h1 className="modal__title">First launch?</h1>
      <p className="modal__text">
        It seems that this is your first launch or you don't have stored any
        data yet. Do you want to begin with some dummy data to see how the app
        feels like before storing your own data? (They won't get stored in your
        database, just refresh the page to start from scratch.)
      </p>
      <div className="modal__button-container">
        <button className="modal__button button" onClick={onCreateDummyData}>
          Yes, please
        </button>
        <button
          className="modal__button button button--secondary"
          onClick={closeModal}
        >
          No, thanks
        </button>
      </div>
    </Modal>
  );
};

const mapStateToProps = state => ({
  hasNoExpenses: state.expenses.length === 0,
});

export default connect(mapStateToProps)(AddDummyDataModal);
