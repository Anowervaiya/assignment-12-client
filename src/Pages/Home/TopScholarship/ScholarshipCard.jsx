import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowDropright } from "react-icons/io";
function ScholarshipCard({item}) {
  return (
    <div className="card   card-compact  bg-base-100 border  transition-all duration-300 group hover:border-blue-600">
      <figure>
        <img
          src={item?.image}
          alt="Shoes"
          className="group-hover:scale-105 w-full h-[200px] transition-all duration-300 "
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item?.UniversityName}</h2>
        <p>{item?.description.slice(0, 200)}</p>
        <div className="group relative">
          <div className="opacity-0 group-hover:opacity-100  transition-opacity duration-700 ease-in-out">
            <div>
              <Link to={`/details/${item?._id}`} className="flex items-center text-blue-600">
                Read More <IoIosArrowDropright className="mt-1 mx-1 " />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScholarshipCard