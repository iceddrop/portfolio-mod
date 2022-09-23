import React from 'react'
import image from '../assets/IMG_1994.jpeg'
import animated from '../assets/kindpng_3767359-removebg-preview.png'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {FaLaptopCode} from 'react-icons/fa'
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
         trigger:'.title-2',
         toggleActions: 'play none none reverse'
   }}),
     gsap.fromTo(paragraphEl,{y:100,opacity:0},{ y:0, delay:0.7, opacity:1,
      scrollTrigger: {
         trigger:'.paragraph-2',
         toggleActions: 'play none none reverse'
   }}),
   gsap.fromTo(imageEl,{y:100,opacity:0},{ y:0, opacity:1,
      scrollTrigger: {
         trigger:'.image-2',
         toggleActions: 'play none none reverse'
   }})
   },[])
    return(
      <>
        <section className='flex flex-col md:flex-row-reverse px-4 py-20  about-section text-white'>
          <div  className='text-center md:px-4 about-div'>
             <h3  className='title-2 font-blinker text-2xl md:text-4xl font-bold' ref={header}>Hi I'm Tomiwa, Nice to meet you.</h3>
             <p className='paragraph-2 font-poppins tracking-wide md:text-lg mt-4  md:text-start md:px-6 lg:px-10 xl:px-20' ref={paragraph}>I have invested my time and energy into mastering this skill, and I'm still hungry and in search for more. I'm very passionate and I take my job seriously, I have the technical know how to bring your ideas into reality.</p>
          </div>
          <img ref={myImage} src={image} className='image-2' alt='my-image' />  
        </section>
        <img src={animated} className='image-3 lg:block' alt='animated-bot'/> 
         <div className='skillset-div font-poppins text-center ml-auto mr-auto rounded-md shadow flex flex-col items-center p-12 bg-white'>
            <FaLaptopCode className='laptop-icon'/>
            <h3 className='p-3 font-blinker font-bold text-2xl'>Front-end Developer</h3>
            <p className='tracking-wide pb-2'>I love coding things from scratch, bringing ideas to life, into the virtual space.</p>
            <h5 className='font-bold text-blue-500 p-2'>Languages I work with:</h5>
            <ul>
               <li>HTML</li>
               <li>CSS</li>
               <li>JAVASCRIPT</li>
            </ul>
            <h5 className='font-bold text-blue-500 p-2'>Library and tools I work with:</h5>
            <ul>
               <li>React</li>
               <li>Tailwind</li>
               <li>Bootstrap</li>
               <li>Git and Github</li>
            </ul>
            <a href='#' className='btn border-2 border-blue-400 border-solid rounded-full text-blue-400 px-4 py-2 hover:bg-blue-400 hover:text-white mt-4'>Resume</a>
         </div>
        </>   
    )
}