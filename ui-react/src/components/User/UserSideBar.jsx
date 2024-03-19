import React from 'react';
import { NavLink } from 'react-router-dom';

const UserSidebar = () => {
  return (
    <div className="h-full w-56 bg-gray-800 flex flex-col font-Montserrat items-center justify-center  py-4 px-2 ">
      <div className='text-xl '>
        <ul className="space-y-16">
          <li>
            <NavLink to="/user/landing" className="text-white hover:text-gray-300">Explore</NavLink>
          </li>
          <li>
            <NavLink to="/user/dashboard" className="text-white hover:text-gray-300">Link 2</NavLink>
          </li>
          <li>
            <NavLink to="/link3" className="text-white hover:text-gray-300">Link 3</NavLink>
          </li>
          <li>
            <NavLink to="/link4" className="text-white hover:text-gray-300">Link 4</NavLink>
          </li>
          <li>
            <NavLink to="/link5" className="text-white hover:text-gray-300">Link 5</NavLink>
          </li>
        </ul>
      </div>
      <div className="mt-auto flex items-center justify-center">
        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Logout</button>
      </div>
    </div>
  );
};

export default UserSidebar;
