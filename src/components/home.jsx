import React from 'react'
import dev from '../assets/3d-stripy-man-at-work.png'

export default function Home({timeline,ease}){
    let header = React.useRef(null)
    let paragraph = React.useRef(null)
    let image = React.useRef(null)
React.useEffect(()=>{
   timeline.to(header, 1,{
      opacity:1,
      x:100,
      ease:ease
   }),
   timeline.to(paragraph, 1,{
      opacity:1,
      x:-100,
      ease:ease
   }),
   timeline.to(image, 1,{
      opacity:1,
      y:-100,
      ease:ease
   })
   },[])
    return(
        <section className="home text-center px-4  flex row justify-content-center ">
           <h1 ref={el=> header = el}  className='header-1 font-blinker text-4xl mt-10 md:text-5xl lg:text-6xl md:mt-16'>Front-end Web Developer</h1>
           <p ref={el=> paragraph = el}  className='paragraph-1 mt-4 text-lg font-poppins md:px-6'>I code and develop websites, I'm motivated to do it everyday because it's what i love.</p>
           <img ref={el=> image = el} src={dev} className='img-1 mt-4'/>
        </section>
    )
}