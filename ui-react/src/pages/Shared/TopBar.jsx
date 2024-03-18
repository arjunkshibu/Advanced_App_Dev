import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Sling as Hamburger } from 'hamburger-react';
import logo from '../../assets/img/logotext2.png'

const TopBar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className='min-h-16 fixed text-white w-full font-bold font-Montserrat  md:flex md:justify-between md:items-center'>
      <div className='flex justify-end items-center p-4 md:hidden'>
        {/* Conditionally render the hamburger icon based on the isOpen state */}
        <Hamburger toggled={isOpen} toggle={setOpen} rounded size={28} />
      </div>
      <div className=' hidden md:block items-center'>
            <img src={logo} alt="logo"/>
          </div>
          <div className='absolute md:hidden left-[20%] top-8'>
            <img src={logo}/>
          </div>
      <div className={`md:flex md:justify-end bg-black md:bg-none bg-opacity-25 md:bg-opacity-0 md:text-white md:pr-9 md:pt-7 ${isOpen ? '' : 'hidden'}`}>
        <div className='flex flex-col gap-y-4 items-center md:space-x-12 md:flex-row md:text-xl text-sm'>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/login">
            <button className=' text-black pt-2 pb-2 pl-3 pr-3 bg-white hover:bg-blue-400 hover:border-0'>Login</button></NavLink>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
