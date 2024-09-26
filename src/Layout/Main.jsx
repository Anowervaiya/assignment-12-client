import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Shared/Navbar'
import Footer from '../Shared/Footer'
import useAuth from '../Hooks/useAuth'
import Loading from '../Components/Loading/Loading'

function Main() {
  const { loader } = useAuth();
  if (loader) return <Loading></Loading>;
  return (
    <div>
      <Navbar></Navbar>
      <div className='min-h-[100vh]'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Main