import React from 'react'
import TopBar from './TopBar'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='h-screen bg-blurBack'>
    <TopBar/>
    <div className='pt-[250px] h-screen'>
        <section>
        <h1 className='md:text-7xl text-white text-center font-Montserrat text-5xl text-wrap'>Discover New Oppurtunities!</h1>
        

        </section>
    </div>
    <Footer/>
    </div>
  )
}

export default Home