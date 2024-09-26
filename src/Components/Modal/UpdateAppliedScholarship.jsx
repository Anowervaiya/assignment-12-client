import React, { useRef, useState } from 'react';
import Modal from 'react-modal';
import { MdOutlineCancel } from 'react-icons/md';

import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';
import { useMutation, useQuery } from '@tanstack/react-query';
import UpdateApplicationForm from '../Form/UpdateApplicationForm';

function UpdateAppliedScholarship({ id, isOpen, close }) {
  
  const AxiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const { data: DetailsData = {},refetch } = useQuery({
    queryKey: ['update', id],
    enabled: !!id,
    queryFn: async () => {
      const { data } = await AxiosSecure(`/appliedscholarship/${id}`);

      return data;
    },
  });

 

  return (
    <>
      <div>
        <Modal isOpen={isOpen} onRequestClose={close}>
          <button
            className="w-full text-3xl hover:text-red-500"
            onClick={close}
          >
            <MdOutlineCancel />
          </button>
          <UpdateApplicationForm
            DetailsData={DetailsData}
            id={id}
            close={close}
            loading={loading}
            refetch={refetch}
          ></UpdateApplicationForm>
        </Modal>
      </div>
    </>
  );
}

export default UpdateAppliedScholarship;
