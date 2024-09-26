import React from 'react'
import useAuth from '../../../Hooks/useAuth'
import useRole from '../../../Hooks/useRole'
import Loading from '../../../Components/Loading/Loading'

function MyProfile() {
  const { user } = useAuth() 
  const [role] = useRole()

  if(!role) return <Loading></Loading>

  return (
    <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
      <div className="rounded-t-lg h-32 overflow-hidden">
        <img
          className="object-cover object-top w-full"
          src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="Mountain"
        />
      </div>
      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img
          className="object-cover object-center w-full h-32"
          referrerPolicy='no-referrer'
          src={user?.photoURL}
          alt="Woman looking front"
        />
      </div>
      <div className="text-center mt-2 pb-6">
        <h2 className="font-semibold">{user?.displayName}</h2>
        <p className="text-gray-500">Role : {role}</p>
      </div>
     
    </div>
  );
}

export default MyProfile