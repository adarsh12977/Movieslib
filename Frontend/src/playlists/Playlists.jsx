import React from 'react'
import Navbar from '../components/Navbar'
import Playlist from '../components/Playlist'
import Footer from '../components/Footer'

function Playlists() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
        <Navbar/>
        <div className='min-h-screen dark:bg-slate-900 dark:text-white'>
        <Playlist/>
        </div>
        <Footer/>
    </div>
    </>
  )
}

export default Playlists