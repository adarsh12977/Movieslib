import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from '../../public/list.json'
import Slider from "react-slick";
import Cards from './Cards';

function FreeMovies() {

    const filterData = list.filter((data) => data.category === 'Public')

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    

  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
            <div className='dark:bg-slate-900 dark:text-white'>
                <h1 className='font-semibold text-xl pb-2'>Free Movies Available</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aliquid omnis alias perspiciatis quasi minima explicabo id ducimus ex harum quam excepturi non dolore animi molestias distinctio. Debitis, odit corrupti?</p>
            </div>
        
        <div>
        <Slider {...settings}>
        {filterData.map((item)=>(
            <Cards item={item} key={item.id}/>
        ))}
      </Slider>
        </div>
        </div>
    </>
  )
}

export default FreeMovies