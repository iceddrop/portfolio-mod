import React from 'react'
import dev from '../assets/3d-stripy-man-at-work.png'

export default function Home({timeline,ease,id}){
   
    return(
        <section id={id.home} className="home text-center px-4 py-8 flex row justify-content-center ">
           <h1  className='header-1 font-blinker text-4xl mt-10 md:text-5xl lg:text-6xl md:mt-16'>Front-end Web Developer</h1>
           <p  className='paragraph-1 mt-4 text-lg font-poppins md:px-6'>I code and develop websites, I'm motivated to do it everyday because it's what i love.</p>
           <img src={dev} className='img-1 mt-4'/>
        </section>
    )
}