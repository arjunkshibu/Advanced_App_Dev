import React from 'react'
import TopBar from './TopBar'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='h-screen bg-blurBack'>
    <TopBar/>
    <div className='pt-[250px] h-screen'>
        <section>
        <h1 className='md:text-7xl text-white text-center font-Montserrat text-5xl text-wrap'>Explore Your Education Options!</h1>
        <p className='md:text-xl text-balance text-center font-Montserrat text-white pt-10'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>

        </section>
    </div>
    <Footer/>
    </div>
  )
}

export default Home