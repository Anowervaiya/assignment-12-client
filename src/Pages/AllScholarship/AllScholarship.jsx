import React, { useState } from 'react'
import Container from '../../Components/Container/Container'
import HeadingandDesc from '../../Components/HeadingandDes/HeadingandDesc'
import ScholarshipCard from '../../Components/ScholarshipCard/ScholarshipCard';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Loading from '../../Components/Loading/Loading';
import LoadingContainer from '../../Components/Loading/LoadingContainer';
import NoData from '../../Components/NoData/NoData';

function AllScholarship() {
  const AxiosSecure = useAxiosSecure()

  const [search, setSearch] = useState('')
  const [SearchFinalData,setSearchFinalData]= useState([])

   const {
     
     isLoading,
     refetch,
   } = useQuery({
     queryKey: ['all-scholarship'],
     queryFn: async () => {
       const { data } = await AxiosSecure('/all-scholarship');
       setSearchFinalData(data)
       
     },
   });
  const handleSearch = async(e) => {
    e.preventDefault()
    const SearchValue = e.target.search.value;
    setSearch(SearchValue);
    
    
  }
  

      const {
        isLoading: SearchLoading,
      
        refetch: SearchRefetch,
      } = useQuery({
        queryKey: ['search-scholarship', search],
        enabled:!!search,
        queryFn: async () => {
          const { data } = await AxiosSecure(
            `/search-scholarship?searchdata=${search}`
          );
          setSearchFinalData(data)
        },
      });
   
  if (isLoading || SearchLoading) return (
    <div className="flex justify-center items-center min-h-screen">
      <Loading></Loading>
    </div>
  );
  return (
    <Container>
      <HeadingandDesc
        Heading={'All Scholarship'}
        desc={
          'Completely seize top-line e-business through backend networks. Professionally aggregate reliable products rather than mission-critical customer service. Continually incentivize.'
        }
      ></HeadingandDesc>
      {/* search option  */}
      <form onSubmit={handleSearch} className="max-w-md mx-auto my-12">
        <div className="relative w-full">
          <input
            type="search"
            name="search"
            id="location-search"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Search for Scholarship or University or Degree"
            required
          />
          <button
            type="submit"
            className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </div>
      </form>

      {/* card data  */}
      {SearchFinalData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SearchFinalData.map((item, index) => (
            <ScholarshipCard key={index} item={item}></ScholarshipCard>
          ))}
        </div>
      ) : (
        <NoData/>
      )}
    </Container>
  );
}

export default AllScholarship