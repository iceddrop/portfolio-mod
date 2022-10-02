import React from 'react'
import image from '../assets/IMG_1994.jpeg'
import animated from '../assets/kindpng_3767359-removebg-preview.png'
import programmer from '../assets/programmer.png'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {FaLaptopCode} from 'react-icons/fa'
export default function About(){
   gsap.registerPlugin(ScrollTrigger)

   const header = React.useRef(null)

   const paragraph = React.useRef(null)
   
   const myImage = React.useRef(null)

   const skillheader = React.useRef(null)

   const skillparagraph = React.useRef(null)

   const languages = React.useRef(null)

   const html = React.useRef(null)

   const css = React.useRef(null)

   const javascript = React.useRef(null)

   const reac = React.useRef(null)

   const library = React.useRef(null)

   const tailwind = React.useRef(null)

   const bootstrap = React.useRef(null)

   const git = React.useRef(null)
   
   const resume = React.useRef(null)

   React.useEffect(() =>{
     const headerEl = header.current;

     const paragraphEl = paragraph.current;

     const imageEl = myImage.current;

     const skillheadEl = skillheader.current;

     const skillparagraphEl = skillparagraph.current;

     const languageEl = languages.current;

     const htmlEl = html.current;

     const cssEl = css.current;

     const jsEl = javascript.current;

     const reactEl = reac.current;

     const libraryEl = library.current;

     const tailwindEl = tailwind.current;

     const bootstrapEl = bootstrap.current;

     const gitEl = git.current

     const resumeEl = resume.current
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
   }}),
   gsap.fromTo(skillheadEl,{y:100,opacity:0},{ y:0, delay:0.7, opacity:1,
      scrollTrigger: {
         trigger:'.skillheader',
         toggleActions: 'play none none reverse'
   }}),
   gsap.fromTo(skillparagraphEl,{y:100,opacity:0},{ y:0, delay:0.7, opacity:1,
      scrollTrigger: {
         trigger:'.skillparagraph',
         toggleActions: 'play none none reverse'
   }}),
   gsap.fromTo(languageEl,{y:100,opacity:0},{ y:0, delay:0.7, opacity:1,
      scrollTrigger: {
         trigger:'.languages-head',
         toggleActions: 'play none none reverse'
   }}),
   gsap.fromTo(htmlEl,{y:100,opacity:0},{ y:0, delay:0.7, opacity:1,
      scrollTrigger: {
         trigger:'.html',
         toggleActions: 'play none none reverse'
   }}),
   gsap.fromTo(cssEl,{y:100,opacity:0},{ y:0, delay:0.7, opacity:1,
      scrollTrigger: {
         trigger:'.css',
         toggleActions: 'play none none reverse'
   }}),
   gsap.fromTo(jsEl,{y:100,opacity:0},{ y:0, delay:0.7, opacity:1,
      scrollTrigger: {
         trigger:'.js',
         toggleActions: 'play none none reverse'
   }}),
   gsap.fromTo(libraryEl,{y:100,opacity:0},{ y:0, delay:0.7, opacity:1,
      scrollTrigger: {
         trigger:'.library',
         toggleActions: 'play none none reverse'
   }}),
   gsap.fromTo(reactEl,{y:100,opacity:0},{ y:0, delay:0.7, opacity:1,
      scrollTrigger: {
         trigger:'.react',
         toggleActions: 'play none none reverse'
   }}),
   gsap.fromTo(tailwindEl,{y:100,opacity:0},{ y:0, delay:0.7, opacity:1,
      scrollTrigger: {
         trigger:'.tailwind',
         toggleActions: 'play none none reverse'
   }}),
   gsap.fromTo(bootstrapEl,{y:100,opacity:0},{ y:0, delay:0.7, opacity:1,
      scrollTrigger: {
         trigger:'.bootstrap',
         toggleActions: 'play none none reverse'
   }}),
   gsap.fromTo(gitEl,{y:100,opacity:0},{ y:0, delay:0.7, opacity:1,
      scrollTrigger: {
         trigger:'.git',
         toggleActions: 'play none none reverse'
   }}),
   gsap.fromTo(resumeEl,{y:100,opacity:0},{ y:0, delay:0.7, opacity:1,
      scrollTrigger: {
         trigger:'.resume',
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
            <img src={programmer} className='w-20'/>
            <h3 ref={skillheader} className='skillheader p-3 font-blinker font-bold text-2xl'>Front-end Developer</h3>
            <p ref={skillparagraph} className='skillparagraph tracking-wide pb-2'>I love coding things from scratch, bringing ideas to life, into the virtual space.</p>
            <h5 ref={languages} className='languages-head font-bold text-blue-500 p-2'>Languages I work with:</h5>
            <ul>
               <li ref={html} className='html'>HTML</li>
               <li ref={css} className='css'>CSS</li>
               <li ref={javascript} className='js'>JAVASCRIPT</li>
            </ul>
            <h5 ref={library} className='library font-bold text-blue-500 p-2'>Libraries and tools I work with:</h5>
            <ul>
               <li ref={reac} className='react'>React</li>
               <li ref={tailwind} className='tailwind'>Tailwind</li>
               <li ref={bootstrap} className='bootstrap'>Bootstrap</li>
               <li ref={git} className='git'>Git and Github</li>
            </ul>
            <a ref={resume} href='#' className='resume btn border-2 border-blue-400 border-solid rounded-full text-blue-400 px-4 py-2 hover:bg-blue-400 hover:text-white mt-3 pb-2'>Resume</a>
         </div>
        </>   
    )
}