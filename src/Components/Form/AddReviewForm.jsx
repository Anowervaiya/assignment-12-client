import { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import useAuth from '../../Hooks/useAuth';






export default function AddReviewForm({ ScholarshipData, close }) {
  const AxiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);
  const [Rating, setRating] = useState(0);
  const {user}= useAuth()
  
  const handleReview = async e => {
    e.preventDefault();
    setLoading(true);
    const feedback = e.target.feedback.value;

    const ReviewData = {
      feedback,
      Rating,
      UniversityName: ScholarshipData?.UniversityName,
      ScholarshipName: ScholarshipData?.ScholarshipName,
      ScholarhipId: ScholarshipData?.ScholarhipId,
      ReviewerName: user?.displayName,
      ReviewerImage: user?.photoURL
    };
    try {
      const { data } = await AxiosSecure.put(`/all-review/${user?.email}`, ReviewData);
      if (data.acknowledged) {
        toast.success('Review Added Successfully');
        setLoading(false);
        close()
      }
    } catch (err) {
      toast.error(err.message);
    }
  };
  const thirdExample = {
    size: 40,
    count: 7,
    isHalf: true,
    value: Rating,
    color: 'gray',
    activeColor: 'orange',
    onChange: newValue => {
      setRating(newValue);
    },
  };

  return (
    <div className="text-center  flex flex-col justify-center items-center">
      <h4>Review this Scholarship</h4>
      <ReactStars {...thirdExample} />
      <form onSubmit={handleReview}>
        {' '}
        <textarea
          
          name="feedback"
          rows={5}
          className="w-full p-4 rounded-lg border border-gray-300"
          placeholder="Feedback"
          id=""
        ></textarea>
        <input
          className="btn btn-outline w-full my-3 btn-success rounded-full"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}
