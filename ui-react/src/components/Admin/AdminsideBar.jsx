import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Adminsidebar = () => {
  const location = useLocation();
  const isDashboardActive = location.pathname === "/admin/dashboard";
  const isCoursesActive = location.pathname === "/admin/courses";
  const isUsersActive = location.pathname === "/admin/users";
  const isPaymentsActive = location.pathname === "/admin/payments";
  const isProfilesActive = location.pathname === "/admin/profile";


  return (
    <div className="h-screen">
      <div className="flex flex-col absolute z-0 w-1/6 h-full font-Montserrat items-center text-2xl text-white justify-center  border-r-2  bg-syn-darl">
        <NavLink
          to="/admin/dashboard"
          className={`w-full border-b border-t border-gray-200 text-center flex items-center hover:bg-green-500  bg-syn-darl justify-center h-20 ${
            isDashboardActive ? "bg-green-500" : ""
          }`}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/admin/courses"
          className={`w-full border-b border-t border-gray-200 text-center flex items-center hover:bg-green-500  bg-syn-darl justify-center h-20 ${
            isCoursesActive ? "bg-green-500" : ""
          }`}
        >
          Courses
        </NavLink>
        <NavLink
          to="/admin/users"
          className={`w-full border-b border-t border-gray-200 text-center flex items-center hover:bg-green-500  bg-syn-darl justify-center h-20 ${
            isUsersActive ? "bg-green-500" : ""
          }`}
        >
          Users
        </NavLink>
        <NavLink
          to="/admin/payments"
          className={`w-full border-b border-t border-gray-200 text-center flex items-center hover:bg-green-500  bg-syn-darl justify-center h-20 ${
            isPaymentsActive ? "bg-green-500" : ""
          }`}
        >
          Payments
        </NavLink>
        <NavLink
          to="/admin/profile"
          className={`w-full border-b border-t border-gray-200 text-center flex items-center hover:bg-green-500  bg-syn-darl justify-center h-20 ${
            isProfilesActive ? "bg-green-500" : ""
          }`}
          >
          Profiles
        </NavLink>
        <NavLink to="/">
        <button className="bg-red-500 hover:bg-red-600 text-center flex items-center justify-center p-2">
          Logout
        </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Adminsidebar;
