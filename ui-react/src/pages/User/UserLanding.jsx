import React from 'react'
import Slickv2 from '../Shared/Slickv2'
import UserTopBar from '../../components/User/UserTopBar';
import UserSidebar from '../../components/User/UserSideBar';

const UserLanding = () => {
  return (
    <div className="flex flex-col h-screen">
      <UserTopBar />
      <div className="flex flex-1">
        <UserSidebar />
        <Slickv2 />
      </div>
    </div>
  );
}

export default UserLanding