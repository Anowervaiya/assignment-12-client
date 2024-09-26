import React, { useState } from 'react'
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaRegEdit } from 'react-icons/fa';
import { TbListDetails } from 'react-icons/tb';
import { FaRegTrashCan } from 'react-icons/fa6';
import { Tooltip } from 'react-tooltip';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import Loading from '../../../Components/Loading/Loading';
function AllAppliedScholarship() {
  const AxiosSecure = useAxiosSecure();
 
   const {
     data: ApplicationData = [],
     isLoading,
     refetch,
   } = useQuery({
     queryKey: ['All-ApplicationData'],
     queryFn: async () => {
       const { data } = await AxiosSecure(`/all-application`);
       return data;
     },
   });
  
 
   const handleStatus = async (value, id) => {
     try {
       const { data } = await AxiosSecure.patch(`/status/${id}`, {
         status: value,
       });
       if (data.modifiedCount > 0) {
         toast.success('Status updated successfully!');
         refetch();
       }
     } catch (error) {
       toast.error(error.message);
     }
   };
  const handleDelete = async id => {
     console.log(id);
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

  if (isLoading) return <Loading></Loading>

  if (ApplicationData.length < 1) {
    return <NoData></NoData>;
  }
  return (
    <div className="overflow-x-auto">
      <table className="table ">
        <thead>
          <tr className="*:text-xl *:font-semibold">
            <th></th>
            <th>University</th>
            <th>location</th>
            <th>Subject</th>
            <th>Feedback</th>
            <th>Degree</th>
            <th>Application Fees</th>
            <th>Service Charge</th>
            <th>Status</th>
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
              <td>Feedback</td>
              <td>{item?.DegreeCategory}</td>
              <td>{item?.ApplicationFees}</td>
              <td>{item?.ServiceCharge}</td>
              <td>
                <div className="flex  gap-4
                 justify-center items-center ">
                  <select
                    onChange={(e) => handleStatus(e.target.value, item?._id)}
                    defaultValue={item?.status}
                    className="block p-2 border rounded">
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="rejected">Rejected</option>
                    <option value="completed">Completed</option>
                  </select>
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
                </div>
              </td>
              <td className="flex mt-4 justify-center items-center *:text-2xl gap-8">
                {' '}
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
  );
}

export default AllAppliedScholarship