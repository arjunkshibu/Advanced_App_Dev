import React from 'react'

const AdminsideBar = () => {
  return (
    <div className='h-screen'>
    <div className="flex flex-col absolute w-1/6 h-full font-Montserrat items-center text-2xl text-white justify-center  border-r-2  bg-syn-darl">
        <div className="w-full  border-b border-t border-gray-200 text-center flex items-center hover:bg-green-500  bg-syn-darl justify-center h-20">
          Dashboard
        </div>
        <div className="w-full border-b text-center flex items-center hover:bg-green-500  bg-syn-darl justify-center h-20">
          Courses
        </div>
        <div className="w-full border-b text-center flex items-center  bg-syn-darl hover:bg-green-500  justify-center h-20">
          Users
        </div>
        <div className="w-full border-b text-center flex items-center  bg-syn-darl hover:bg-green-500  justify-center h-20">
          Payments
        </div>
        <div className="w-full border-b text-center flex items-center  bg-syn-darl hover:bg-green-500 justify-center h-20">
          Profiles
        </div>
        <button className="bg-red-500 hover:bg-red-600 absolute bottom-0 p-2">
          Logout
        </button>
      </div>
      </div>
  )
}

export default AdminsideBar