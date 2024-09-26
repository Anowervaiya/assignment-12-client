import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaRegEdit } from 'react-icons/fa';
import { TbListDetails } from 'react-icons/tb';
import { FaRegTrashCan } from 'react-icons/fa6';
import { Tooltip } from 'react-tooltip';
import { Link } from 'react-router-dom';
import Loading from '../../../Components/Loading/Loading';
import UpdateReview from '../../../Components/Modal/UpdateReview';
import Swal from 'sweetalert2';
import NoData from '../../../Components/NoData/NoData';
function MyReviews() {
  const [id, setId] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);

  const { user } = useAuth();
  const AxiosSecure = useAxiosSecure();
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const handleId = id => {
    setId(id);
  };
  const {
    data: MyReviewData = [],
    isLoading,
    refetch: MainRefetch,
  } = useQuery({
    queryKey: ['my-reviews',user?.email],
    queryFn: async () => {
      const { data } = await AxiosSecure(`/my-reviews/${user?.email}`);
      return data;
    },
  });

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
        AxiosSecure.delete(`/All-review/${id}`)
          .then(result => {
            if (result.data?.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });
              MainRefetch();
            }
          })
          .catch(err => {
            toast.error(err.message);
          });
      }
    });
  };

  if (isLoading) return <Loading />;
  if (MyReviewData.length<1) {
    return  <NoData></NoData>
  }
  return (
    <>
     
      <div className="overflow-x-auto">
        <table className="table ">
          <thead>
            <tr className="*:text-xl *:font-semibold">
              <th></th>
              <th>University</th>

              <th>Scholarship</th>
              <th>Comment</th>
              <th>Date</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {MyReviewData.map((item, idx) => (
              <tr className="*:text-lg">
                <td>{idx + 1}</td>
                <td>{item?.UniversityName}</td>
                <td>{item?.ScholarshipName}</td>

                <td>{item?.feedback}</td>

                <td>{new Date(item?.Date).toLocaleDateString()}</td>

                <td
                  className="flex justify-center mt-4
                  items-center *:text-2xl gap-8"
                >
                  {' '}
                  <FaRegEdit
                    onClick={() => {
                      openModal();
                      handleId(item?._id);
                    }}
                    className="cursor-pointer "
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Edit"
                  />
                  <UpdateReview
                    ReviewData={item}
                    modalIsOpen={modalIsOpen}
                    closeModal={closeModal}
                    id={id}
                    MainRefetch={MainRefetch}
                  />
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

export default MyReviews;
