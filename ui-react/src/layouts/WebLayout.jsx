import React from 'react'
import TopBar from '../pages/Shared/TopBar'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/Shared/Footer'

const WebLayout = () => {
  return (
    <>
    <div>
        <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default WebLayout