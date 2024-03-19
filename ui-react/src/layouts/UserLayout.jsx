import React from 'react';
import UserTopBar from '../components/User/UserTopBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/User/Footer';
import UserSidebar from '../components/User/UserSideBar';

const UserLayout = () => {
    return (
        <div className='flex h-screen overflow-hidden'>
        <div className="w-full bg-gray-200">
            <UserTopBar />
            <UserSidebar />
            <Outlet />
          </div>
          <div className="flex flex-1">
          </div>
        </div>
      );
}

export default UserLayout;
