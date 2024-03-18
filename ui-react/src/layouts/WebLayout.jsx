import React from 'react'
import TopBar from '../components/User/TopBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/User/Footer'

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