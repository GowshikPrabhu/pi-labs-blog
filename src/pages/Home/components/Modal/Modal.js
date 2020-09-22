import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

/**
 * Modal with search and filter for mobile view
 * @param {String} show Class name to display modal
 * @param {Function} toggleModal Handles modal opening and closing
 */
const Modal = ({ show, toogleModal, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  return (
    <div className={showHideClassName}>
      <div className='modal-main'>
        <div className='modal-children'>{children}</div>
        <button onClick={toogleModal}>close</button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  /** Class name to show or hide modal */
  show: PropTypes.string.isRequired,
  /** Handles closing and opening of modal */
  toggleModal: PropTypes.func.isRequired
};

export default Modal;
