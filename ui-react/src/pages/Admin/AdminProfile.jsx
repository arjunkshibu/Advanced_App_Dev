import React from 'react';
import { Phone, Mail, User2 } from 'lucide-react';
import man from '../../assets/img/man_head.jpg';

const AdminProfile = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='h-2/3 w-1/2 border-2 text-xl font-Montserrat flex flex-row'>
        <div>
          <div className='w-full h-1/3 border-r-2 border-b-2 flex items-center justify-center'>
            <User2/>
            Samuel Gibbson
          </div>
          <div className='w-full h-1/3 border-r-2 border-b-2 flex items-center justify-center'>
            <Phone />
            +91 9876543210
          </div>
          <div className='w-full h-1/3 border-r-2 border-b-2 flex items-center justify-center'>
            <Mail/>
            administrator5@coursehunt.com
          </div>
        </div>
        <div className='flex w-2/3   flex-col items-center justify-evenly'>
          <img src={man} alt="" className='rounded-full h-[300px] w-[300px] '/>
         <h6>ADMINISTRATOR_5</h6>
        </div>
          
      </div>
    </div>
  );
};

export default AdminProfile;
