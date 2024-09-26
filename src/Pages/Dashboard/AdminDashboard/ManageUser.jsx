import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { FaRegEdit } from 'react-icons/fa';
import { TbListDetails } from 'react-icons/tb';
import { FaRegTrashCan } from 'react-icons/fa6';
import { Tooltip } from 'react-tooltip';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Loading from '../../../Components/Loading/Loading';
function ManageUser() {
  const AxiosSecure = useAxiosSecure();

  const {
    data: AllUser = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['All-User'],
    queryFn: async () => {
      const { data } = await AxiosSecure(`/all-user`);
      return data;
    },
  });

  const handleStatus = async (value, id) => {
    
    try {
      const { data } = await AxiosSecure.patch(`/user/${id}`, {
        role: value,
      });
      if (data.modifiedCount > 0) {
        toast.success('Role updated successfully!');
        refetch();
      }
    } catch (error) {
      toast.error(error.message);
    }
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
        AxiosSecure.delete(`/user/${id}`)
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
    <div className="overflow-x-auto">
      <table className="table ">
        <thead>
          <tr className="*:text-xl *:font-semibold">
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>

            <th></th>
          </tr>
        </thead>
        <tbody>
          {AllUser.map((item, idx) => (
            <tr className="*:text-lg">
              <td>{idx + 1}</td>
              <td>{item?.name || item?.Name}</td>
              <td>{item?.email}</td>
              <td>{item?.role}</td>

              <td>
                <div
                  className="flex  gap-4
                 justify-center items-center "
                >
                  <select
                    onChange={e => handleStatus(e.target.value, item?._id)}
                    defaultValue={item?.role}
                    className="block p-2 border rounded"
                  >
                    <option value="user">user</option>
                    <option value="moderator">moderator</option>
                    <option value="admin">admin</option>
                  </select>
                  <p
                    className={`
                   
                     
                     rounded-full text-black  px-2 py-1 `}
                  >
                    {' '}
                    {item?.status}
                  </p>
                </div>
              </td>
              <td className="flex mt-4 justify-center items-center *:text-2xl gap-8">
                {' '}
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

export default ManageUser;
