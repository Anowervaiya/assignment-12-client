import React from 'react'
import ReviewCard from '../../../Components/ReviewCard/ReviewCard'
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
function AllReviews() {
const AxiosSecure = useAxiosSecure()
  const { data: AllReview=[],refetch } = useQuery({
    queryKey: ['all-review'],
    queryFn: async () => {
      const { data } = await AxiosSecure('/all-review')
      return data;
    }
  })
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
  return (
    <div className="grid gap-6 text-center md:grid-cols-3 lg:gap-12">
      {AllReview.map(item => (
        <ReviewCard handleDelete={handleDelete}  item={item} />
      ))}
    </div>
  );
}

export default AllReviews