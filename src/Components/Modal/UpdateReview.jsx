import React, { useRef, useState } from 'react';
import Modal from 'react-modal';
import { MdOutlineCancel } from 'react-icons/md';
import UpdateReviewForm from '../Form/UpdateReviewForm';
function UpdateReview({
  modalIsOpen,
  closeModal,
  ReviewData,
  id,
  MainRefetch,
}) {


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
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <button
          className="w-full text-3xl hover:text-red-500"
          onClick={closeModal}
        >
          <MdOutlineCancel />
        </button>
        <UpdateReviewForm
          ReviewData={ReviewData}
          closeModal={closeModal}
          id={id}
          MainRefetch={MainRefetch}
        />
        ;
      </Modal>
    </div>
  );
}

export default UpdateReview;
