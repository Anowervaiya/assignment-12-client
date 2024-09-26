import React from 'react'
import HeadingandDesc from '../../../Components/HeadingandDes/HeadingandDesc'
import ScholarshipCard from './ScholarshipCard'
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Components/Loading/Loading';
import { Link } from 'react-router-dom';

function TopScholarship() {
  const AxiosSecure = useAxiosSecure()
  const {
    data: TopData,
       isLoading,

       refetch: SearchRefetch,
     } = useQuery({
       queryKey: ['top-scholarship'],
      
       queryFn: async () => {
         const { data } = await AxiosSecure(`/top-scholarship`);
         return data;
       },
     });
  
  if(isLoading) return <Loading/>
 
  return (
    <div>
      <HeadingandDesc Heading={'Top Scholarship'} />
      <div className="grid container mx-auto my-8 gap-8 px-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {TopData.slice(0, 6).map(item => (
          <ScholarshipCard item={item} />
        ))}
      </div>
      <div className="w-full text-center mb-16">
        <Link
          to={'/all-scholarship'}
          className="bg-blue-300 hover:text-white transition-color duration-300 px-7 py-3  rounded-md  "
        >
          See More
        </Link>
      </div>
    </div>
  );
}

export default TopScholarship