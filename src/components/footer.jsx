import React from 'react'
import logo from '../assets/favpng_web-development-software-development-programmer-computer-programming-custom-software.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
export default function Footer(props){
    const header = React.useRef(null)
     
    const paragraph = React.useRef(null)

    const btn = React.useRef(null)

    const log = React.useRef(null)

    const paragraph2 = React.useRef(null)

    const socials = React.useRef(null)
    React.useEffect(()=>{
        const headerEl = header.current;

        const paragraphEl = paragraph.current;
        
        const btnEl = btn.current;

        const logoEl = log.current;

        const paragraph2El = paragraph2.current;

        const socialEl = socials.current;
        gsap.fromTo(headerEl,{y:100,opacity:0},{ y:0, opacity:1,delay:0.7,
            scrollTrigger: {
               trigger:'.footer-h3',
               toggleActions: 'play none none reverse'
         }}),
         gsap.fromTo(paragraphEl,{y:100,opacity:0},{ y:0, opacity:1,delay:0.7,
            scrollTrigger: {
               trigger:'.footer-p',
               toggleActions: 'play none none reverse'
         }}),
         gsap.fromTo(btnEl,{y:100,opacity:0},{ y:0, opacity:1,delay:0.7,
            scrollTrigger: {
               trigger:'.mail-btn',
               toggleActions: 'play none none reverse'
         }}),
         gsap.fromTo(logoEl,{y:100,opacity:0},{ y:0, opacity:1,delay:0.7,
            scrollTrigger: {
               trigger:'.logo-2',
               toggleActions: 'play none none reverse'
         }}),
         gsap.fromTo(paragraph2El,{y:100,opacity:0},{ y:0, opacity:1,delay:0.7,
            scrollTrigger: {
               trigger:'.footer-p2',
               toggleActions: 'play none none reverse'
         }}),
         gsap.fromTo(socialEl,{y:100,opacity:0},{ y:0, opacity:1,delay:0.7,
            scrollTrigger: {
               trigger:'.socials',
               toggleActions: 'play none none reverse'
         }})
    },[])
    
    return(
        <footer id={props.id.contact} className='footer text-white relative text-center top-28 '>
         <div className='flex justify-center'>   
           <div className="lg:flex lg:flex-row lg:justify-between footer-div-1 text-center ">
               <h3 ref={header} className='footer-h3 font-bold text-3xl'>Start a project</h3>
               <p ref={paragraph} className='footer-p font-Play py-5 lg:mt-2 lg:w-50 tracking-wide md:text-md'>Interested in working with me? Let's talk. I'll buy the coffee.</p>
               <div ref={btn} className='mail-btn'>
                  <a  href="mailto:oluwatomiwaibikunle@gmail.com?subject=Hello" className=' border-3 border-blue-700 pl-4 px-4 py-2 rounded-full font-poppins hover:text-white'>Let's do this</a>
               </div>  
           </div>
           </div>
           <div  className='logo-2 flex justify-center'> 
              <img ref={log} src={logo} className='w-20' alt='logo'/>
           </div>
           <p ref={paragraph2} className='text-lg font-play pt-5 footer-p2 px-4 md:text-3xl'>Living, learning & leveling up one day at a time.</p>
           <div ref={socials} className='socials flex justify-center py-5'>
              <a href='http://www.linkedin.com/in/ibikunle-tomiwa-68324b229'><img src={linkedin} className='w-14 '/></a>
              <a href='https://github.com/iceddrop'><img src={github} className='w-14 mx-6'/></a>
              <a href='https://twitter.com/TheSocial_freak'><img src={twitter} className='w-14'/></a>
            </div>
        </footer>    
    )
    }
