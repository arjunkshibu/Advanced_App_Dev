import React from 'react';

const AdminTopBar = () => {
  return (
    <div className="w-full h-24 flex font-Montserrat justify-between items-center text-4xl pl-3 pr-5 font-semibold bg-syn-blue">
      <div className='flex items-center justify-center flex-grow '>
        Admin Dashboard
      </div>
      <div className="text-xl">
        ADMINISTRATOR_5
      </div>
    </div>
  );
};

export default AdminTopBar;
