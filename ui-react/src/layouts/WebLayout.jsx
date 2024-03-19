import React from 'react'
import TopBar from '../components/User/TopBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/User/Footer'
import LogoNavBar from '../components/User/LogoNavBar'

const WebLayout = () => {
  return (
    <div className='flex flex-col h-screen overflow-hidden justify-center'>
      <div className='absolute top-0 w-full'>
      <LogoNavBar />
      </div>
    
      <div className='flex-grow '>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default WebLayout
