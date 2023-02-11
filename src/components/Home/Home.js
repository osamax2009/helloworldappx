import React from 'react'

import  {Swiper , SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';
import { Pagination , Autoplay } from 'swiper';

import wide1 from '../../img/carousel/wide1.jpg'
import wide2 from '../../img/carousel/wide2.jpg'
import wide3 from '../../img/carousel/wide3.jpg'
import wide4 from '../../img/carousel/wide4.jpg'
import wide5 from '../../img/carousel/wide5.jpg'
import wide6 from '../../img/carousel/wide6.jpg'

import 'swiper/css';
import 'swiper/css/Pagination';
import 'swiper/effect-fade';
import Navbar from '../Navbar';
import TrendingProducts from '../TrendingProducts';
import Footer from '../footer';


const Home = () => {

  const carsoul = [
    {img : wide1  , alt : ''},
    {img : wide2  , alt : ''},
    {img : wide3  , alt : ''},
    {img : wide4  , alt : ''},
    {img : wide5  , alt : ''},
    {img : wide6 , alt : ''},
    
  ]




  return (
    <div>

      <Navbar />
     <Swiper
      effect='fade'
      loop={true}
      autoplay={{
        delay:500
      }}
     >
      {carsoul.map((imeges,i) =>{

          return (
              <SwiperSlide key={i} >
                <img src={imeges.img} alt={imeges.alt} />
              </SwiperSlide>
          )

         } 
      )
      }

     </Swiper>

        <TrendingProducts />
        <Footer />

    </div>
  )
}

export default Home
