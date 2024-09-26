import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function DynamicLink({address,name,icon:Icon,handleToogle}) {
  return (
    <Link
     
      onClick={handleToogle}
      to={address}
    >
      <p className="flex items-center p-2 text-gray-900 hover:bg-gray-100 rounded-lg ">
        {Icon}
        <span className="ms-3">{name}</span>
      </p>
    </Link>
  );
}

export default DynamicLink