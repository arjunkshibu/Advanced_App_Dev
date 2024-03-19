import React from 'react';
import UserTopBar from '../components/User/UserTopBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/User/Footer';
import UserSidebar from '../components/User/UserSideBar';

const UserLayout = () => {
    return (
        <div className='flex h-screen'>
          <div className="w-full bg-gray-200 flex flex-col">
            <UserTopBar />
            <div className="flex flex-1 overflow-x-hidden">
              <UserSidebar />
              <div className="overflow-y-auto flex flex-1">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      );
}

export default UserLayout;
