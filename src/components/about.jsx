import React from 'react'
import image from '../assets/IMG_1994.jpeg'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

export default function About(){
   gsap.registerPlugin(ScrollTrigger)

   const header = React.useRef(null)

   const paragraph = React.useRef(null)
   
   const myImage = React.useRef(null)
   React.useEffect(() =>{
     const headerEl = header.current;

     const paragraphEl = paragraph.current;

     const imageEl = myImage.current;
     gsap.fromTo(headerEl,{y:-100,opacity:0},{ y:0, opacity:1,delay:0.7,
      scrollTrigger: {
         trigger:'.title-2'
   }}),
     gsap.fromTo(paragraphEl,{y:100,opacity:0},{ y:0, delay:0.7, opacity:1,
      scrollTrigger: {
         trigger:'.paragraph-2'
   }}),
   gsap.fromTo(imageEl,{y:100,opacity:0},{ y:0, delay:1.5, opacity:1,
      scrollTrigger: {
         trigger:'.image-2'
   }})
   },[])
    return(
        <section className='flex flex-col md:flex-row-reverse px-4 py-20  about-section text-white'>
          <div  className='text-center md:px-4 about-div'>
             <h3  className='title-2 font-blinker text-2xl md:text-4xl font-bold' ref={header}>Hi I'm Tomiwa, Nice to meet you.</h3>
             <p className='paragraph-2 font-poppins md:text-lg mt-4  md:text-start md:px-6 lg:px-10 xl:px-20' ref={paragraph}>I have invested my time and energy into mastering this skill, and I'm still hungry and in search for more. I'm very passionate and I take my job seriously, I have the technical know how to bring your ideas into reality.</p>
          </div>
          <img ref={myImage} src={image} className='image-2' alt='my-image' />  
        </section>    
    )
}