import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import FreeMovies from '../components/FreeMovies'
import Footer from '../components/Footer'


function Home() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <FreeMovies/>
      <Footer/>
    </>
  )
}

export default Home