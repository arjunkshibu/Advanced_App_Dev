import React from 'react'
import { Album, Clock, Heart } from 'lucide-react';
import { ClipboardCheck } from 'lucide-react';
import astro from '../../assets/img/astrophysics.jpg'
import ux from '../../assets/img/ux-design.png'
import machine from '../../assets/img/mlf.png'
import mobile from '../../assets/img/mobile-app-development.jpeg'
import Web from '../../assets/img/web-development.jpg'
import swift from '../../assets/img/ios-development.jpg'

const UserFavourites = () => {
  return (
    <div className='flex flex-col pt-10 pl-72 h-full font-Montserrat  ml-2 overflow-y-auto'>
    <h2 className='font-sans font-bold text-xl flex gap-2 flex-row '>
       <Heart size={30} />Favourites</h2>
    <div className='ml-[1.7rem] flex p-5 flex-row items-center justify-center '>
       <div className='flex flex-col w-[30vh] h-[30vh] bg-white shadow-2xl cursor-pointer'>
        <img src={astro} className='w-[100%] h-[50%]'></img>
        <div className="course-info h-[40%]">
        <h2 className='font-sans pt-3 pl-3 font-bold text-xl'>Advanced Astrophysics</h2>
        <p className='font-sans pt-2 pl-3 font-semibold text-xs text-slate-600'>By: Prof. Sarah Davis</p>
        </div>
        <div className='flex flex-row '>
        <div className='bg-syn-purple mt-3 p-2 text-xl  text-bold flex justify-center items-center text-white  w-[100%]'>
          <h2 className=''>Remove</h2>
        </div>
        </div>
       </div>
       <div className='flex flex-col w-[30vh] h-[30vh] bg-white shadow-2xl cursor-pointer mr-7 ml-7'>
        <img src={machine} className='w-[100%] h-[50%]'></img>
        <div className="course-info h-[40%]">
        <h2 className='font-sans pt-3 pl-3 font-bold text-xl'>Machine Learning Foundations</h2>
        <p className='font-sans pt-2 pl-3 font-semibold text-xs text-slate-600'>By: Dr. Mark Wilson</p>
        </div>
        <div className='flex flex-row '>
        <div className='bg-syn-purple mt-3 p-2 text-xl  text-bold flex justify-center items-center text-white  w-[100%]'>
          <h2 className=''>Remove</h2>
        </div>
        </div>
       </div>
       
    </div>
    <h2 className='font-sans pt-5  flex flex-row text-2xl font-bold text-black'>
   </h2>
   <div className='flex p-5 flex-row '>
       
       <div className='flex flex-col w-[30vh] h-[30vh] bg-white shadow-2xl cursor-pointer  mr-7 ml-7'>
        <img src={mobile} className='w-[100%] h-[50%]'></img>
        <div className="course-info h-[40%]">
        <h2 className='font-sans pt-3 pl-3 font-bold text-xl'>Mobile App Development Essentials</h2>
        <p className='font-sans pt-2 pl-3 font-semibold text-xs text-slate-600'>By: Dr. Robert White</p>
        </div>
        <div className='flex flex-row '>
        <div className='bg-green-700 mt-3 p-2 text-xl  text-bold flex justify-center items-center text-white  w-[100%]'>
          <h2 className=''>Start</h2>
        </div>
        </div>
       </div>
       <div className='flex flex-col w-[30vh] h-[30vh] bg-white shadow-2xl cursor-pointer'>
        <img src={swift} className='w-[100%] h-[50%]'></img>
        <div className="course-info h-[40%]">
        <h2 className='font-sans pt-3 pl-3 font-bold text-xl'>iOS App Development with Swift</h2>
        <p className='font-sans pt-2 pl-3 font-semibold text-xs text-slate-600'>By: Prof. Jacob Brown</p>
        </div>
        <div className='flex flex-row '>
        <div className='bg-green-700 mt-3 p-2 text-xl  text-bold flex justify-center items-center text-white  w-[100%]'>
          <h2 className=''>Start</h2>
        </div>
        </div>
       </div>
    </div>
  </div>
  )
}

export default UserFavourites