import React, { useEffect, useState } from 'react';
import HeadingandDesc from '../../Components/HeadingandDes/HeadingandDesc';
import Container from '../../Components/Container/Container';

import PaymentModal from '../../Components/Modal/PaymentModal';
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import ApplyScholarshipForm from '../../Components/Form/ApplyScholarshipForm';
import { useParams } from 'react-router-dom';
function ApplyScholarship() {

  const [applyForm, setApplyForm] = useState(false);

  const {id}= useParams()


  const [isOpen, setIsOpen] = useState(true);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
 

  return (
    <>
      <Container>
        {/* apply scholarship form  */}
        {applyForm ? (
          <>
            <ApplyScholarshipForm id={id} />
          </>
        ) : (
          <>
            <HeadingandDesc Heading={'Payment'}></HeadingandDesc>
            <PaymentModal
              isOpen={isOpen}
              open={open}
              close={close}
              setApplyForm={setApplyForm}
            ></PaymentModal>
          </>
        )}
      </Container>
    </>
  );
}

export default ApplyScholarship;
