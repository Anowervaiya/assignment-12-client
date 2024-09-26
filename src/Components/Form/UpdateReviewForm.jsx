import { useEffect, useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import useAuth from '../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Loading/Loading';

export default function UpdateReviewForm({ MainRefetch,closeModal, id }) {
  const AxiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);

  const [RatingPoint, setRating] = useState(null);
  const { user } = useAuth();

  const {
    data: Review={},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['updateReview', id],
    enabled: !!id,
    queryFn: async () => {
      const { data } = await AxiosSecure(`/review/${id}`);

      return data;
    },
  });

  useEffect(() => {
    if (Review) {
      setRating(Review?.Rating);
    }
  }, [Review]);



  const handleReviewUpdate = async e => {
    e.preventDefault();
    setLoading(true);
    const feedback = e.target.feedback.value;

    const ReviewDataINfo = {
      feedback,
      RatingPoint,
      ScholarshipName: Review?.ScholarshipName,
      UniversityName: Review?.UniversityName,
      ScholarhipId: Review?.ScholarhipId,
    };
    const { data } = await AxiosSecure.put(
      `/all-review/${user?.email}`,
      ReviewDataINfo
    );
    if (data?.upsertedCount > 0 || data?.modifiedCount > 0) {
      toast.success('update successful !');
      closeModal();
      setLoading(false);
      refetch();
      MainRefetch();
    }
  };

 
  if (isLoading || !RatingPoint) return <Loading />;
   const thirdExample = {
     size: 40,
     count: 7,
     isHalf: true,
     value: RatingPoint,

     color: 'gray',
     activeColor: 'orange',
     onChange: newValue => {
       setRating(newValue);
     },
   };
  return (
    <div className="text-center  flex flex-col justify-center items-center">
      <ReactStars {...thirdExample} />
      <form onSubmit={handleReviewUpdate}>
        {' '}
        <textarea
          name="feedback"
          rows={5}
          className="w-full p-4 rounded-lg border border-gray-300"
          placeholder="Feedback"
          defaultValue={Review?.feedback}
          id=""
        ></textarea>
        <input
          className="btn btn-outline w-full my-3 btn-success rounded-full"
          type="submit"
          value="Update"
        />
      </form>
    </div>
  );
}
