import React, { useState } from 'react'
import useAuth from '../../Hooks/useAuth';
import { ImSpinner9 } from 'react-icons/im';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
function UpdateApplicationForm({ DetailsData, id, refetch, close }) {
  const [loading, setLoading] = useState(false);
  const AxiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const handleSubmit = async e => {
    const AxiosSecure = useAxiosSecure();
    
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const Gender = form.Gender.value;
    const StudyGap = form.studygap.value;
    const SSC = form.SSC.value;
    const HSC = form.HSC.value;
    const Address = form.Address.value;
    const Phone = form.Phone.value;
    const DetailsDataInfo = { ...DetailsData };
    delete DetailsDataInfo._id;
    const applyInfo = {
      ...DetailsDataInfo,
      Gender,
      StudyGap,
      SSC,
      HSC,
      Address,
      Phone,

      ApplicantDetails: {
        email: user?.email,
        name: user?.displayName,
      },
    };
    const { data } = await AxiosSecure.put(`/apply-Update/${id}`, applyInfo);

   
      setLoading(false);
      toast.success('Update Successful!');
      close();
      refetch();
    
  };

  return (
    <div className="w-full border py-8 min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <div className="flex justify-center items-center gap-4 mb-16 mt-12">
        {/* <GiConfirmed className="w-20 h-20" /> */}
        <h1 className="text-5xl font-semibold">
          {' '}
          Update <span className="text-orange-700 font-bold">Application</span>
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            {/* read only  */}
            <div className="space-y-1 text-sm">
              <label htmlFor="title" className="block text-gray-600">
                University Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-orange-500 focus:outline-orange-500 rounded-md "
                name="UniversityName"
                type="text"
                value={DetailsData?.UniversityName}
                placeholder="University Name"
                required
              />
            </div>
            {/* result ssc hsc */}
            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="price" className="block text-gray-600">
                  SSC Result
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-orange-500 focus:outline-orange-500 rounded-md "
                  name="SSC"
                  id="price"
                  type="text"
                  defaultValue={DetailsData?.SSC}
                  placeholder="SSC Result"
                  required
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="guest" className="block text-gray-600">
                  HSC Result
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-orange-500 focus:outline-orange-500 rounded-md "
                  name="HSC"
                  id="guest"
                  type="text"
                  defaultValue={DetailsData?.HSC}
                  placeholder="HSC Result"
                  required
                />
              </div>
            </div>

            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="bedrooms" className="block text-gray-600">
                  Phone
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-orange-500 focus:outline-orange-500 rounded-md "
                  name="Phone"
                  type="number"
                  placeholder="Phone"
                  defaultValue={DetailsData?.Phone}
                  required
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="bathrooms" className="block text-gray-600">
                  Address
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-orange-500 focus:outline-orange-500 rounded-md "
                  name="Address"
                  type="text"
                  defaultValue={DetailsData?.Address}
                  placeholder="village,district,country"
                  required
                />
              </div>
            </div>
            {/* description  */}
            <div className="space-y-1 text-sm">
              <label htmlFor="description" className="block text-gray-600">
                Study Gap(optional)
              </label>

              <input
                className="w-full px-4 py-3 text-gray-800 border border-orange-500 focus:outline-orange-500 rounded-md "
                name="studygap"
                type="text"
                defaultValue={DetailsData?.StudyGap}
                placeholder="Study Gap you have"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="category" className="block text-gray-600">
                Gender
              </label>
              <select
                required
                className="w-full border px-4 py-3 border-orange-500 focus:outline-orange-500 rounded-md"
                defaultValue={DetailsData?.Gender}
                name="Gender"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            {/* read only  */}
            <div className="space-y-1 text-sm">
              <label htmlFor="category" className="block text-gray-600">
                Subject
              </label>
              <select
                required
                className="w-full border px-4 py-3 border-orange-500 focus:outline-orange-500 rounded-md"
                name="subject"
                value={DetailsData?.subject}
              >
                <option value="Agriculture">Agriculture</option>
                <option value="Engineering">Engineering</option>
                <option value="Doctor">Doctor</option>
              </select>
            </div>

            {/* read only  */}
            <div className="space-y-1 text-sm">
              <label htmlFor="category" className="block text-gray-600">
                Scholarship
              </label>
              <select
                required
                className="w-full border px-4 py-3 border-orange-500 focus:outline-orange-500 rounded-md"
                name="ScholarshipCategory"
                value={DetailsData?.ScholarshipCategory}
              >
                <option value="Full-fund">Full fund</option>
                <option value="Partial">Partial</option>
                <option value="Self-fund">Self-fund</option>
              </select>
            </div>
            {/* will be open but now read only */}
            <div className="space-y-1 text-sm">
              <label htmlFor="category" className="block text-gray-600">
                Degree
              </label>
              <select
                required
                className="w-full border px-4 py-3 border-orange-500 focus:outline-orange-500 rounded-md"
                name="DegreeCategory"
                value={DetailsData?.DegreeCategory}
              >
                <option value="Diploma">Diploma</option>
                <option value="Bachelor">Bachelor</option>
                <option value="masters">Masters</option>
              </select>
            </div>
          </div>
        </div>

        <button
          disabled={loading}
          type="submit"
          className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-orange-500"
        >
          {loading ? (
            <ImSpinner9 className="animate-spin m-auto" />
          ) : (
            'Update Confirm'
          )}
        </button>
      </form>
    </div>
  );
}

export default UpdateApplicationForm