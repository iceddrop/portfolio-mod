import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import appy from '../assets/download(2).webp'


// import required modules
import { EffectCards } from "swiper";

export default function Projects(){

    return(
        <section className='pb-20 '>
          <h3  className='text-center project-title font-blinker text-4xl  font-bold'>My Projects</h3>
           <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper mt-5"
      >
        <SwiperSlide className='text-center'>
            <h3 className="project-title-1 text-4xl text-green-600">Hexagon</h3>
            <div className='mt-4 flex flex-col md:flex-row btn-div'>
                <a  className='border-3 border-green-600 pl-4 pr-4 py-2 rounded-lg font-poppins demo-btn ' href='https://hexagon-ebon.vercel.app'>Live demo</a>
                <a href='https://github.com/iceddrop/Hexagon' className='bg-green-600 pl-4 pr-4 pt-2.5 font-poppins  rounded-lg code-btn'>Source code</a>
            </div>
        </SwiperSlide>
        <SwiperSlide className='text-center'>
        <h3 className="project-title text-4xl  project-title-3">OB</h3>
        <div className='mt-4 flex flex-col md:flex-row btn-div'>
                <a className='border-3  pl-4 pr-4 py-2 rounded-lg font-poppins demo-btn demo-btn-2 '  href='https://react-webpage-seven.vercel.app'>Live demo</a>
                <a href='https://github.com/iceddrop/react-webpage' className='code-btn-2 text-black pl-4 pr-4 pt-2.5 font-poppins  rounded-lg code-btn'>Source code</a>
            </div>
        </SwiperSlide>
        <SwiperSlide className='text-center'>
        <h3 className="project-title-2 text-4xl">Found Dev</h3>
            <div className='mt-4 flex flex-col md:flex-row btn-div'>
                <a className='border-3 border-blue-700 pl-4 pr-4 py-2 rounded-lg font-poppins demo-btn ' href='https://iceddrop.github.io/GitHub-users-search-app/'>Live demo</a>
                <a href='https://github.com/iceddrop/GitHub-users-search-app' className='bg-blue-700 pl-4 pr-4 pt-2.5 font-poppins  rounded-lg code-btn'>Source code</a>
            </div>
        </SwiperSlide>

        <SwiperSlide className='text-center'>
        <h3 className="project-title-4 text-4xl">Anime Wiz</h3>
        <div className='mt-4 flex flex-col md:flex-row btn-div'>
                <a className='border-3 border-black pl-4 pr-4 py-2 font-poppins demo-btn demo-btn-4' href='https://quiz-app-neon-nine.vercel.app'>Live demo</a>
                <a href='https://github.com/iceddrop/quiz-app' className='bg-black pl-4 pr-4 pt-2.5 font-poppins  text-white code-btn'>Source code</a>
            </div>
        </SwiperSlide>
        <SwiperSlide className='text-center'>
        <img src={appy}/>
        <div className='mt-4 flex flex-col md:flex-row btn-div'>
                <a className='border-3 border-white text-white pl-4 pr-4 py-2 rounded-lg font-poppins demo-btn ' href='https://iceddrop.github.io/Appy/'>Live demo</a>
                <a href='https://github.com/iceddrop/Appy' className='code-btn-5 bg-white pl-4 pr-4 pt-2.5 font-poppins  rounded-lg code-btn'>Source code</a>
            </div>
        </SwiperSlide>
      </Swiper>
        </section>
    )
}