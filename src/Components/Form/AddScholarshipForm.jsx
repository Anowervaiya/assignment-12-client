import { DateRange } from 'react-date-range';
import React, { useState } from 'react';

import { BsFillHouseAddFill } from 'react-icons/bs';
import { TbFidgetSpinner } from 'react-icons/tb';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const AddScholarshipForm = ({
  ApplicationDeadline,
  handleSubmit,
  setApplicationDeadline,
  
  imagePreview,
  imageText,
  handleImage,
  loading,
}) => {
  return (
    <div className="w-full border  min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <div className="flex justify-center items-center gap-4 mb-16 mt-12">
        <BsFillHouseAddFill className="w-20 h-20" />
        <h1 className="text-5xl font-semibold">
          {' '}
          ADD <span className="text-orange-700 font-bold">A Scholarship</span>
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="title" className="block text-gray-600">
                Scholarship Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-orange-500 focus:outline-orange-500 rounded-md "
                name="ScholarshipName"
                id="title"
                type="text"
                placeholder="Scholarship Name"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="title" className="block text-gray-600">
                University Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-orange-500 focus:outline-orange-500 rounded-md "
                name="UniversityName"
                id="title"
                type="text"
                placeholder="University Name"
                required
              />
            </div>

            <div className=" border border-orange-500 p-4 bg-white w-full  m-auto rounded-lg flex justify-between items-center">
              <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                <div className="flex flex-col w-max mx-auto text-center">
                  <label>
                    <input
                      className="text-sm cursor-pointer w-36 hidden"
                      type="file"
                      onChange={e => handleImage(e.target.files[0])}
                      name="image"
                      id="image"
                      accept="image/*"
                      hidden
                    />
                    <div className="bg-orange-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-orange-500">
                      {imageText.length > 20
                        ? imageText.split('.')[0].slice(0, 15) +
                          '....' +
                          imageText.split('.')[1]
                        : imageText}
                    </div>
                  </label>
                </div>
              </div>
              <div className="h-16 rounded-lg w-16 object-cover overflow-hidden flex items-center">
                {imagePreview && (
                  <img src={imagePreview} className="rounded-lg" />
                )}
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="price" className="block text-gray-600">
                  University World rank
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-orange-500 focus:outline-orange-500 rounded-md "
                  name="Universityrank"
                  id="price"
                  type="number"
                  placeholder="University Rank"
                  required
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="guest" className="block text-gray-600">
                  Tuition fees
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-orange-500 focus:outline-orange-500 rounded-md "
                  name="TuitionFees"
                  id="guest"
                  type="number"
                  placeholder=" Tuition fees"
                  required
                />
              </div>
            </div>

            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="bedrooms" className="block text-gray-600">
                  Service charge
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-orange-500 focus:outline-orange-500 rounded-md "
                  name="ServiceCharge"
                  id="bedrooms"
                  type="number"
                  placeholder="Service charge"
                  required
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="bathrooms" className="block text-gray-600">
                  Application fees
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-orange-500 focus:outline-orange-500 rounded-md "
                  name="ApplicationFees"
                  id="bathrooms"
                  type="number"
                  placeholder="Application fees"
                  required
                />
              </div>
            </div>
            {/* description  */}
            <div className="space-y-1 text-sm">
              <label htmlFor="description" className="block text-gray-600">
                Description
              </label>

              <textarea
                id="description"
                className="block rounded-md focus:orange-300 w-full h-32 px-4 py-3 text-gray-800  border border-orange-500 focus:outline-orange-500 "
                name="description"
              ></textarea>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="location" className="block text-gray-600">
                University City
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-orange-500 focus:outline-orange-500 rounded-md "
                name="location"
                id="location"
                type="text"
                placeholder="Location"
                required
              />
            </div>
            {/* categories  */}
            <div className="space-y-1 text-sm">
              <label htmlFor="category" className="block text-gray-600">
                Subject
              </label>
              <select
                required
                className="w-full border px-4 py-3 border-orange-500 focus:outline-orange-500 rounded-md"
                name="subject"
              >
                <option value="Agriculture">Agriculture</option>
                <option value="Engineering">Engineering</option>
                <option value="Doctor">Doctor</option>
              </select>
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="category" className="block text-gray-600">
                Scholarship
              </label>
              <select
                required
                className="w-full border px-4 py-3 border-orange-500 focus:outline-orange-500 rounded-md"
                name="ScholarshipCategory"
              >
                <option value="Full-fund">Full fund</option>
                <option value="Partial">Partial</option>
                <option value="Self-fund">Self-fund</option>
              </select>
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="category" className="block text-gray-600">
                Degree
              </label>
              <select
                required
                className="w-full border px-4 py-3 border-orange-500 focus:outline-orange-500 rounded-md"
                name="DegreeCategory"
              >
                <option value="Diploma">Diploma</option>
                <option value="Bachelor">Bachelor</option>
                <option value="masters">Masters</option>
              </select>
            </div>

            <div className="space-y-1">
              <label htmlFor="location" className="block text-gray-600">
                Application Deadline
              </label>
              {/* Calender */}
              <div>
                <DatePicker
                  className=" w-[200px] md:w-[400px] border border-orange-500  p-3 rounded-lg"
                  selected={ApplicationDeadline}
                  onChange={date => setApplicationDeadline(date)}
                />
              </div>
            </div>
          </div>
        </div>

        <button
          disabled={loading}
          type="submit"
          className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-orange-500"
        >
          {loading ? (
            <TbFidgetSpinner className="animate-spin m-auto" />
          ) : (
            ' Save & Continue'
          )}
        </button>
      </form>
    </div>
  );
};

export default AddScholarshipForm;
