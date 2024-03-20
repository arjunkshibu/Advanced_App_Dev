import React from 'react';
import logo from '../../assets/img/logotext.png'

const UserTopBar = () => {
  return (
    <nav className="flex items-center justify-between border-b-2 bg-white p-4">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-8" />
      </div>
      
      <div className="text-black font-semibold text-lg">Gijendra</div>
    </nav>
  );
};

export default UserTopBar;
