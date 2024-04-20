import React from 'react'
import { Phone, Mail, User2 } from 'lucide-react';
import man from '../../assets/img/smile_cpy.jpg';

const UserProfile = () => {
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <h1>Profile</h1>
  <div className='h-2/3 w-1/2 border-2 border-black text-xl font-Montserrat flex flex-row'>
    <div className='w-1/2 border-r-2  border-black'>  <div className='w-full h-1/3 border-b-2 flex items-center justify-center'>
        <User2/>
        Ryan Gosling
      </div>
      <div className='w-full h-1/3 border-b-2 border-t-2 border-black flex items-center justify-center'>
        <Phone />
        +91 9876543210
      </div>
      <div className='w-full h-1/3 flex items-center justify-center'>
        <Mail/>
        goslingshot@gmail.com
      </div>
    </div>
    <div className='flex w-1/2 items-center justify-center flex-col'> <img src={man} alt="" className='rounded-full h-[200px] w-[200px] '/>
      <h6>Ryan Gosling</h6>
    </div>
  </div>
</div>
  )
}

export default UserProfile