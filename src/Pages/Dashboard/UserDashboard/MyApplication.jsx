import { useQuery } from '@tanstack/react-query';
import React, { useRef, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAuth from '../../../Hooks/useAuth';
import { applyActionCode } from 'firebase/auth';
import Loading from '../../../Components/Loading/Loading';
import { FaRegEdit } from 'react-icons/fa';
import { TbListDetails } from 'react-icons/tb';
import { FaRegTrashCan } from 'react-icons/fa6';
import { Tooltip } from 'react-tooltip';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import UpdateAppliedScholarship from '../../../Components/Modal/UpdateAppliedScholarship';
import AddReviewModal from '../../../Components/Modal/AddReviewModal';
import NoData from '../../../Components/NoData/NoData';

function MyApplication() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [UpdateModal, setUpdateModal] = useState(false);
  const [id, setId] = useState('');

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openUpdateModal() {
    setUpdateModal(true);
  }

  function closeUpdateModal() {
    setUpdateModal(false);
  }

  const { user } = useAuth();
  const AxiosSecure = useAxiosSecure();
  const {
    data: ApplicationData = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['ApplicationData'],
    queryFn: async () => {
      const { data } = await AxiosSecure(`/my-application/${user?.email}`);
      return data;
    },
  });

  const handleUpdate = id => {
    setId(id);
  };
  const handleDelete = async id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        AxiosSecure.delete(`/applied-scholarship/${id}`)
          .then(result => {
            if (result.data?.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });
              refetch();
            }
          })
          .catch(err => {
            toast.error(err.message);
            console.log('has problem');
          });
      }
    });
  };

  if (isLoading) return <Loading></Loading>;
    if (ApplicationData.length < 1) {
      return <NoData></NoData>;
    }
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table ">
          <thead>
            <tr className="*:text-xl *:font-semibold">
              <th></th>
              <th>University</th>
              <th>location</th>
              <th>Subject</th>
              <th>Degree</th>
              <th>Application Fees</th>
              <th>Service Charge</th>
              <th>Status</th>
              <th>Add Review</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {ApplicationData.map((item, idx) => (
              <tr className="*:text-lg">
                <td>{idx + 1}</td>
                <td>{item?.UniversityName}</td>
                <td>{item?.location}</td>
                <td>{item?.subject}</td>
                <td>{item?.DegreeCategory}</td>
                <td>{item?.ApplicationFees}</td>
                <td>{item?.ServiceCharge}</td>
                <td>
                  {' '}
                  <p
                    className={`
                     ${item?.status === 'pending' && 'bg-blue-400 '}
                     ${item?.status === 'rejected' && 'bg-red-400 '}
                     ${item?.status === 'processing' && 'bg-yellow-400 '}
                     ${item?.status === 'completed' && 'bg-green-400 '}
                     
                     rounded-full text-black  px-2 py-1 `}
                  >
                    {' '}
                    {item?.status}
                  </p>
                </td>
                <td>
                  <button
                    onClick={openModal}
                    className="btn w-32 btn-outline btn-success"
                  >
                    {' '}
                    Add Review
                  </button>
                </td>
                <AddReviewModal
                  ScholarshipData={item}
                  modalIsOpen={modalIsOpen}
                  closeModal={closeModal}
                />
                <td
                  className="flex justify-center mt-4
                 items-center *:text-2xl gap-8"
                >
                  {' '}
                  <FaRegEdit
                    onClick={() => {
                      if (
                        item?.status === 'pending'
                      ) {
                        openUpdateModal();
                        handleUpdate(item?._id);
                      } else {
                        toast.error("you can't edit it now");
                      }
                    }}
                    className="cursor-pointer"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Edit"
                  />
                  <UpdateAppliedScholarship
                    open={openUpdateModal}
                    id={id}
                    isOpen={UpdateModal}
                    close={closeUpdateModal}
                  ></UpdateAppliedScholarship>
                  <Link to={`/details/${item?.ScholarhipId}`}>
                    {' '}
                    <TbListDetails
                      className="cursor-pointer "
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Details"
                    />{' '}
                  </Link>
                  <FaRegTrashCan
                    className="cursor-pointer text-red-500"
                    onClick={() => handleDelete(item?._id)}
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Delete"
                  />
                  <Tooltip id="my-tooltip" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MyApplication;
