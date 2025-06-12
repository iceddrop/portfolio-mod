import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import js from "../assets/js.png";
import react from "../assets/physics.png";
import ts from "../assets/typescript.png";
import zustand from "../assets/zustand.svg";
import tailwind from "../assets/tailwindcss.svg";

// import required modules
import { EffectCards } from "swiper";

export default function Projects(props) {
  return (
    <section id={props.id.projects} className="pb-20 ">
      <h3 className="text-center project-title font-blinker text-4xl  font-bold">
        My Projects
      </h3>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper mt-5"
      >
        <SwiperSlide className="text-center">
          <h3 className="project-title-1 text-4xl text-green-600">AfriData</h3>
          <div className="mt-4 flex flex-col md:flex-row btn-div">
            <a
              className="border-3 border-green-600 pl-4 pr-4 py-2 rounded-lg font-poppins demo-btn "
              href="https://staging.afridata.com.ng"
            >
              Live demo
            </a>
            <a
              href="https://github.com/RemoNode-Technologies-Inc/Afridata-Web"
              className="bg-green-600 pl-4 pr-4 pt-2.5 font-poppins  rounded-lg code-btn"
            >
              Source code
            </a>
          </div>
          
          <div className="flex flex-row-reverse mt-8 md:mt-4">
            <img src={zustand} alt="zustand-logo" className="w-8 h-8 mx-1" />
            <img src={tailwind} alt="typescript-logo" className="w-8 h-8 mx-1" />
            <img src={ts} alt="typescript-logo" className="w-8 h-8 mx-1" />
            <img src={react} alt="react-logo" className="w-8 h-8 mx-1" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <h3 className="project-title-1 text-4xl text-green-600">Buyall</h3>
          <div className="mt-4 flex flex-col md:flex-row btn-div">
            <a
              className="border-3 border-green-600 pl-4 pr-4 py-2 rounded-lg font-poppins demo-btn "
              href="https://buyall-shop.vercel.app/"
            >
              Live demo
            </a>
            <a
              href="https://github.com/iceddrop/buyall-shop"
              className="bg-green-600 pl-4 pr-4 pt-2.5 font-poppins  rounded-lg code-btn"
            >
              Source code
            </a>
          </div>
           <div className="flex flex-row-reverse mt-8 md:mt-4">
            <img src={zustand} alt="zustand-logo" className="w-8 h-8 mx-1" />
            <img src={tailwind} alt="javascript-logo" className="w-8 h-8 mx-1" />
            <img src={js} alt="typescript-logo" className="w-8 h-8 mx-1" />
            <img src={react} alt="react-logo" className="w-8 h-8 mx-1" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <h3 className="project-title-1 text-4xl text-green-600">Landwind</h3>
          <div className="mt-4 flex flex-col md:flex-row btn-div">
            <a
              className="border-3 border-green-600 pl-4 pr-4 py-2 rounded-lg font-poppins demo-btn "
              href="https://landwind-alpha.vercel.app"
            >
              Live demo
            </a>
            <a
              href="https://github.com/iceddrop/Landwind"
              className="bg-green-600 pl-4 pr-4 pt-2.5 font-poppins  rounded-lg code-btn"
            >
              Source code
            </a>
          </div>
           <div className="flex mt-8 md:mt-4">
            <img src={js} alt="javascript-logo" className="w-8 h-8 mx-1" />
            <img src={ts} alt="typescript-logo" className="w-8 h-8 mx-1" />
            <img src={react} alt="react-logo" className="w-8 h-8 mx-1" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
