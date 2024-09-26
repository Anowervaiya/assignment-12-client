import React from 'react'
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import UpdateScholarshipForm from '../Form/UpdateScholarshipForm';
function UpdateMyApplicationModal({isOpen,close}) {
  return (
    <Transition appear show={isOpen}>
      <Dialog as="div" className="relative z-10" onClose={close}>
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-lg font-medium text-center leading-6 text-gray-900"
                >
                  Update Scholarshiop Info
                </DialogTitle>
                <div className="mt-2 w-full">
                  {/* Update scholarship form */}

                  {/* <UpdateScholarshipForm
                    DetailsData={DetailsData}
                    ApplicationDeadline={ApplicationDeadline}
                    handleSubmit={handleSubmit}
                    setApplicationDeadline={setApplicationDeadline}
                    imageText={imageText}
                    imagePreview={imagePreview}
                    loading={loading}
                    handleImage={handleImage}
                  ></UpdateScholarshipForm> */}
                </div>
                <hr className="mt-8 " />
                <div className="mt-2 ">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    onClick={close}
                  >
                    Cancel
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default UpdateMyApplicationModal