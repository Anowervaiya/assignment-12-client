import { useState } from 'react';
import { Link } from 'react-router-dom';

function ScholarshipCard({ item }) {
  const [read, setRead] = useState(false);
  const handleRead = () => {
    setRead(!read);
  };

  let date = new Date(item?.postData);

 
  let localTimeString = date.toLocaleDateString();


  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="relative group ">
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-violet-600 rounded-lg blur opacity-0 group-hover:opacity-70 transition duration-800 group-hover:duration-200"></div>
        <div className="relative   bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start  border ">
          <div >
            <div className="text-slate-800">
              <img
                src={item?.image}
                className="w-full h-64 rounded-t-lg  object-cover"
              />
              <div className=" space-y-3 p-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {item?.UniversityName}
                </h2>
                <div className="flex justify-between flex-wrap gap-y-2 ">
                  <p className="text-gray-600 bg-orange-100 rounded-full text-center  py-2 px-5">
                    #{item?.ScholarshipCategory}
                  </p>
                  <p className="text-gray-600 bg-blue-100 rounded-full text-center  p-2 px-5">
                    #{item?.DegreeCategory}
                  </p>
                  <p className="text-gray-600 bg-green-100 rounded-full text-center  p-2 px-5">
                    #{item?.subject}
                  </p>
                </div>
                <p className="text-gray-700 leading-tight mb-4  ">
                  {item?.description.slice(0, 100)}
                  <span className={`${read ? 'visible' : 'hidden'}`}>
                    {item?.description.slice(100)}
                  </span>
                  <button onClick={handleRead} className="font-bold">
                    {read ? 'Read less' : '...Read More'}
                  </button>
                </p>
                <div className="  flex  justify-between items-center ">
                  <p className="text-gray-600">Deadline : {localTimeString}</p>

                  <p className="text-gray-600">Location : {item?.location}</p>
                </div>
                <Link
                  to={`/details/${item?._id}`}
                  className="btn btn-outline btn-md btn-success rounded-full "
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScholarshipCard;
