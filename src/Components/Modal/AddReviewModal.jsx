import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { MdOutlineCancel } from 'react-icons/md';
import AddReviewForm from '../Form/AddReviewForm';

const customStyles = {
  content: {
    top: '50%',
  
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
// Modal.setAppElement('#yourAppElement');
function AddReviewModal({ modalIsOpen, closeModal, ScholarshipData }) {
  const subtitleRef = useRef(null);

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <button
          className="w-full text-3xl hover:text-red-500"
          onClick={closeModal}
        >
          <MdOutlineCancel />
        </button>
        <AddReviewForm ScholarshipData={ScholarshipData} close={closeModal} />;
      </Modal>
    </div>
  );
}

export default AddReviewModal;

