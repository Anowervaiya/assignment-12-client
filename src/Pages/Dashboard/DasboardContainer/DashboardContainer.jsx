import React, {  useState } from 'react';
import {  Outlet } from 'react-router-dom';
import useRole from '../../../Hooks/useRole';
import ModeratorDashboard from '../Moderator/ModeratorDashboard';
import UserDashboard from '../UserDashboard/UserDashboard';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import {  MdOutlineCancel } from 'react-icons/md';
import DynamicLink from '../../../Components/DynamicLink/DynamicLink';
import { IoHomeOutline } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa';
import Loading from '../../../Components/Loading/Loading';
function DashboardContainer() {
  const [role] = useRole()
  
const [toogle ,setToogle]= useState(false)

 

  const handleToogle = () => {
   setToogle(!toogle)
 }
  if(!role) return <Loading></Loading>
 
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className=" p-4 lg:hidden   "
      >
        <svg
          onClick={handleToogle}
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 30 30"
          xmlns="http://www.w3.org/3000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className={`fixed top-0  lg:left-0 w-full lg:w-64 z-40  h-screen transition-transform 
        ${!toogle ? '-translate-y-full lg:translate-y-0' : ''}
      
       
           
     `}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-blue-100 ">
          <MdOutlineCancel
            onClick={handleToogle}
            className="w-10 h-10 text-black cursor-pointer mb-4 lg:hidden"
          />
          <ul className="space-y-2 font-medium">
            <DynamicLink
              handleToogle={handleToogle}
              address={'/'}
              name={'Home'}
              icon={<IoHomeOutline size={30} />}
            ></DynamicLink>
            <DynamicLink
              handleToogle={handleToogle}
              address={'my-profile'}
              name={'My Profile'}
              icon={<FaRegUser size={30} />}
            ></DynamicLink>
            {role === 'moderator' && (
              <ModeratorDashboard
                handleToogle={handleToogle}
              ></ModeratorDashboard>
            )}
            {role === 'admin' && (
              <AdminDashboard handleToogle={handleToogle}></AdminDashboard>
            )}
            {role === 'user' && <UserDashboard handleToogle={handleToogle} />}
          </ul>
        </div>
      </aside>

      {/* content show  */}
      <div className="lg:ml-64">
        <div className="p-4 border-2 border-gray-300 border-dashed rounded-lg dark:border-gray-700">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}

export default DashboardContainer;
