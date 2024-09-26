import React from 'react';

import { FaRegTrashCan } from 'react-icons/fa6';
import ReactStars from 'react-rating-stars-component';

import useAxiosSecure from '../../Hooks/useAxiosSecure';
function ReviewCard({ item, handleDelete }) {
  console.log(item);
  const thirdExample = {
    size: 40,
    count: 7,
    isHalf: true,
    edit: false,
    value: 4,
    color: 'gray',
    activeColor: 'orange',
  };
  console.log(item);
  return (
    <div>
      {' '}
      <div className="mb-12 md:mb-0  p-2 border">
        <button
          onClick={() => handleDelete(item?._id)}
          className="flex w-full justify-end items-center "
        >
          <FaRegTrashCan size={25} className="text-red-600 cursor-pointer" />
        </button>
        <div className="mb-6 flex justify-center">
          <img
            src={item?.ReviewerImage}
            referrerPolicy="no-referrer"
            className="w-32 rounded-full shadow-lg shadow-black/30"
          />
        </div>

        <h5 className="mb-2 text-xl font-semibold">{item?.UniversityName}</h5>
        <h6 className="mb-1 font-semibold text-primary text-primary-400">
          {item?.DegreeCategory}
        </h6>
        <h6 className="mb-2 font-semibold  text-orange-600">
          {item?.ReviewerName}
        </h6>
        <p className="mb-2 text-neutral-600 ">
          <span className="inline-block pe-2 [&>svg]:w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 448 512"
            >
              <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
            </svg>
          </span>
          {item?.feedback}
        </p>

        <ul className="mb-0 flex  Detailss-center justify-center">
          <ReactStars
            size={40}
            count={7}
            isHalf={true}
            edit={false}
            value={item?.Rating}
            color={'gray'}
            activeColor={'orange'}
          />
        </ul>
      </div>
    </div>
  );
}

export default ReviewCard;
