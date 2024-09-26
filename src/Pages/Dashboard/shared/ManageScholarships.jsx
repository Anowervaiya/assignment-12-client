import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Loading from '../../../Components/Loading/Loading';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { FaRegEdit } from 'react-icons/fa';
import { FaRegTrashCan } from 'react-icons/fa6';
import { TbListDetails } from 'react-icons/tb';

import { Link } from 'react-router-dom';
import UpdateAppliedScholarship from '../../../Components/Modal/UpdateAppliedScholarship';
function ManageScholarships() {
  const [isOpen, setIsOpen] = useState(false);
  
  const AxiosSecure = useAxiosSecure();

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }


  const {
    data: ScholarshData = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['manage-scholarship'],
    queryFn: async () => {
      const { data } = await AxiosSecure('/all-scholarship');
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
        AxiosSecure.delete(`/scholarship/${id}`)
          .then(result => {
            if (result.data.deletedCount > 0) {
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
          });
      }
    });
  };

  if (isLoading) return <Loading></Loading>;

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table ">
          <thead>
            <tr className="*:text-xl *:font-semibold">
              <th></th>
              <th>Scholarship name</th>
              <th>University Name</th>
              <th>Subject Category</th>
              <th>Applied Degree</th>
              <th>Application Fees</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {ScholarshData.map((item, idx) => (
              <tr className="*:text-lg">
                <td>{idx + 1}</td>
                <td>{item?.ScholarshipName}</td>
                <td>{item?.UniversityName}</td>
                <td>{item?.subject}</td>
                <td>{item?.DegreeCategory}</td>
                <td>{item?.ApplicationFees}</td>
                <td className="flex justify-center items-center *:text-2xl gap-8">
                  {' '}
                  <FaRegEdit
                    onClick={() => {
                      open();
                      handleUpdate(item?._id);
                    }}
                    className="cursor-pointer "
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Edit"
                  />
                  <UpdateAppliedScholarship
                    open={open}
                    isOpen={isOpen}
                    close={close}
                  ></UpdateAppliedScholarship>

                  <Link to={`/details/${item?._id}`}>
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

export default ManageScholarships;
