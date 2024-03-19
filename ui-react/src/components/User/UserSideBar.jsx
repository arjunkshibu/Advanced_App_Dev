import { BarChart2, Heart, Search, User, UserRound } from 'lucide-react';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import UserProfile from '../../pages/User/UserProfile';

const UserSidebar = () => {
  const location = useLocation();

  const isLandingActive = location.pathname === "/user/landing";
  const isDashboardActive = location.pathname === "/user/dashboard";
  const isLink3Active = location.pathname === "/user/";
  const isLink4Active = location.pathname === "/link4";
  const isLink5Active = location.pathname === "/link5";

  return (
    <div className="h-full w-56 bg-gray-800 flex flex-col font-Montserrat items-center justify-center py-20 px-2">
      <div className="text-xl">
        <ul className="space-y-16">
          <li>
            <NavLink
              to="/user/landing"
              className={`text-white hover:text-green-500 ${isLandingActive ? 'text-green-500 hover:text-green-500' : ''}`}
            >
              <Search size={20} className='mr-2  inline-block'/>Explore
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/dashboard"
              className={`text-white hover:text-green-500 ${isDashboardActive ? 'text-green-500 hover:text-green-500' : ''}`}
            >
             <BarChart2 size={20} className='mr-2  inline-block' /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/favourites"
              className={`text-white hover:text-green-500 ${isLink3Active ? 'text-green-500 hover:text-green-500 ' : ''}`}
            >
              <Heart size={20} className='mr-2  inline-block' /> Favourites
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/profile"
              className={`text-white hover:text-green-500 ${isLink4Active ? 'text-green-500 hover:text-green-500' : ''}`}
            >
              <UserRound size={20} className='mr-2  inline-block'/>Profile
            </NavLink>
          </li>
          <li>
            
          </li>
        </ul>
      </div>
      <div className="mt-auto flex items-center justify-center">
        <NavLink to="/">
        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
          Logout
        </button>
        </NavLink>
      </div>
    </div>
  );
};

export default UserSidebar;
