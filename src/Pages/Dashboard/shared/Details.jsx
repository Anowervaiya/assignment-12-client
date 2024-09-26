import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Loading from '../../../Components/Loading/Loading';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../../Components/Container/Container';
import HeadingandDesc from '../../../Components/HeadingandDes/HeadingandDesc';
import ReviewCard from '../../../Components/ReviewCard/ReviewCard';
import DetailsReviewCard from '../../../Components/ReviewCard/DetailsRevieCard';
import NoData from '../../../Components/NoData/NoData';

function Details() {
   const [read, setRead] = useState(false);
   const handleRead = () => {
     setRead(!read);
   };

  
  const { id } = useParams();
  
  const AxiosSecure = useAxiosSecure();
  const { data: Details = {}, isDetialLoading } = useQuery({
    queryKey: ['details', id],
    enabled:!!id,
    queryFn: async () => {
      const { data } = await AxiosSecure(`/scholarship/${id}`);
      return data;
    },
  });

  const { data: Review = {}, isLoading:ReviewLoading } = useQuery({
    queryKey: ['DetailsReview', id],
    enabled:!!id,
    queryFn: async () => {
      const { data } = await AxiosSecure(`/Details-Review/${id}`);
      
      return data;
    },
  });

  if (isDetialLoading || ReviewLoading) return <Loading></Loading>;

  let date = new Date(Details?.postData);

  // Convert the Date object to a local time string
  let localTimeString = date.toLocaleDateString();
  return (
    <Container>
      <div className="flex my-12 flex-col lg:flex-row justify-between  Detailss-center gap-8">
        <div className="lg:w-1/2 w-full h-[400px] lg:border-4  lg:border-gray-300 lg:p-8">
          <img src={Details?.image} className=" w-full h-full " alt="" />
        </div>
        <div className="lg:w-1/2 space-y-3 ">
          <div className=" space-y-3 p-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-black mb-2">
              {Details?.UniversityName}
            </h2>
            <div className="flex  flex-wrap gap-y-2 ">
              <p className="text-gray-600 bg-orange-100 rounded-full text-center  p-2 px-5">
                #{Details?.DegreeCategory}
              </p>
              <p className="text-gray-600 bg-green-100 rounded-full text-center  p-2 px-5">
                #{Details?.subject}
              </p>
            </div>
            <div className=" space-y-3 md:*:text-xl ">
              <p className="text-black leading-tight mb-4  ">
                {Details?.description?.slice(0, 100)}
                <span className={`${read ? 'visible' : 'hidden'}`}>
                  {Details?.description?.slice(100)}
                </span>
                <button onClick={handleRead} className="font-bold">
                  {read ? 'Read less' : '...Read More'}
                </button>
              </p>
              <p className="text-gray-600  rounded-full   ">
                <span className="text-black font-semibold">
                  Scholarship Category :
                </span>{' '}
                {Details?.ScholarshipCategory}
              </p>

              <p className="text-gray-600">
                <span className="text-black font-semibold">Deadline : </span>
                {localTimeString}
              </p>

              <p className="text-gray-600">
                {' '}
                <span className="text-black font-semibold">
                  Location :
                </span>{' '}
                {Details?.location}
              </p>

              <Link
                to={`/apply-scholarship/${Details._id}`}
                className="btn btn-outline rounded-full btn-success"
              >
                Apply
              </Link>
            </div>
          </div>
        </div>
      </div>

      <hr />
      {/* Testimonial  */}
      <HeadingandDesc
        Heading={'Testinmonial'}
        desc={
          'Objectively build highly efficient information for holistic infomediaries. Assertively monetize B2B information via highly efficient scenarios. Objectively productize customer directed deliverables via bleeding-edge niche markets.'
        }
      ></HeadingandDesc>
      {Review.length <= 0 && <NoData  />}
      <div className="grid gap-6 text-center md:grid-cols-3 lg:gap-12">
        {Review.map(item => (
          <DetailsReviewCard item={item} />
        ))}
      </div>
    </Container>
  );
}

export default Details;
