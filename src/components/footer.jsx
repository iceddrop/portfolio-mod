import logo from '../assets/favpng_web-development-software-development-programmer-computer-programming-custom-software.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'
export default function Footer(){
    return(
        <footer className='footer text-white relative text-center top-28 '>
         <div className='flex justify-center'>   
           <div className="lg:flex lg:flex-row lg:justify-between footer-div-1 text-center ">
               <h3 className='footer-h3 font-bold text-3xl'>Start a project</h3>
               <p className='footer-p font-Play py-5 lg:mt-2 lg:w-50'>Interested in working with me? Let's talk. I'll buy the coffee.</p>
               <div>
                  <a href='#' className='border-3 border-blue-700 pl-4 px-4 py-2 rounded-full font-poppins hover:text-white'>Let's do this</a>
               </div>  
           </div>
           </div>
           <div className='flex justify-center'> 
              <img src={logo} className='w-20'/>
           </div>
           <p className='text-lg font-play pt-5 footer-p2 px-4 md:text-3xl'>Living, learning & leveling up one day at a time.</p>
           <div className='flex justify-center py-5'>
              <a href='http://www.linkedin.com/in/ibikunle-tomiwa-68324b229'><img src={linkedin} className='w-14 '/></a>
              <a href='https://github.com/iceddrop'><img src={github} className='w-14 mx-6'/></a>
              <a href='https://twitter.com/TheSocial_freak'><img src={twitter} className='w-14'/></a>
            </div>
        </footer>    
    )
    }
