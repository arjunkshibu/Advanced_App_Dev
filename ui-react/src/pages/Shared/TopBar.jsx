import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'animate.css';
import {Fade as Hamburger} from 'hamburger-react';
const TopBar = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <header className='min-h-20 fixed text-white font-Montserrat w-full font-bold'> {/*if the navbar is causing problems with tsparticles switch to absolute*/}
      <div className='flex justify-end items-center p-4 md:hidden'>
        <Hamburger toggled={isOpen} toggle={setOpen} rounded size={'28'}/>
      </div>

      <div className={`md:flex md:justify-end md:text-white md:pr-9 md:pt-7 ${isOpen ? '' : 'hidden'}`}>
          <div className='flex flex-col gap-y-4 items-center md:space-x-12 md:flex-row text-xl animate__animated animate__fadeInLeft'>
          <NavLink to="/about" >About</NavLink>
          <NavLink to="/products" >Products</NavLink>
          <NavLink to="/contact" >Contact Us</NavLink>
          </div>
        </div>
        </header>
  )
}

export default TopBar;