import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { useState } from 'react';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../Form/CheckOutForm';

export default function PaymentModal({ isOpen, open, close, setApplyForm }) {
  const stripePromise = loadStripe(import.meta.env.VITE_publishable_key);

  return (
    <>
      <button onClick={open} className='btn cursor-pointer'>Continue payment </button>
      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={close}
          __demoMode
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md rounded-xl bg-black p-6 ">
                  <DialogTitle as="h3" className=" font-medium text-white">
                    Payment successful
                  </DialogTitle>
                  <p className="mt-2 text-sm/6 text-white">
                    Your payment has been successfully submitted. We’ve sent you
                    an email with all of the details of your order.
                  </p>

                  <Elements stripe={stripePromise}>
                    <CheckoutForm setApplyForm={setApplyForm}></CheckoutForm>
                  </Elements>

                  <div className="mt-4">
                    <Button
                      className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-black focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-black"
                      onClick={close}
                    >
                      Cancel
                    </Button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
