import React from 'react'
import Cards from './Cards'
import list from '../../public/list.json'
import { Link } from 'react-router-dom'

function Playlist() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
        <div className='max-w-screen-2xl bg-white container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
            <div className='mt-28 items-center justify-center text-center dark:bg-slate-900 dark:text-white'>
                <h1 className='text-2xl md:text-4xl dark:bg-slate-900 dark:text-white'>Let's deep dive into the world of{" "}<span className='text-blue-500'>Movies</span></h1>
                <p className='mt-12 dark:bg-slate-900 dark:text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quibusdam suscipit consequuntur, soluta neque dolorem ea necessitatibus excepturi consequatur unde, labore harum reiciendis. Sed recusandae facere at assumenda eos repellat adipisci fuga minus natus alias.</p>
                <Link to='/'>
                <button className='mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300'>Back</button>
                </Link>
            </div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                {
                    list.map((item)=>(
                        <Cards key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
        </div>
    </>
  )
}

export default Playlist