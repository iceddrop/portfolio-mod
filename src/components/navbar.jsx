import React from 'react'
import logo from '../assets/favpng_web-development-software-development-programmer-computer-programming-custom-software-removebg.png'
import bar from '../assets/open-menu.png' 
export default function Navbar(){

    return(
        <nav className='navbar navbar-expand-lg navbar-light bg-light md:px-4 lg:px-10 xl:px-16 fixed-top'>
        <div class="container-fluid">
          <a href='#'><img src={logo} class="navbar-brand w-14"/></a>
            <img class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" src={bar} className='w-10'/>
          <div class="collapse navbar-collapse font-poppins" id="navbarSupportedContent">
            <ul class="navbar-nav   text-center">
              <li class="nav-item">
                <a class="nav-link active lg:ml-4" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link lg:ml-6" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link lg:ml-8">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link lg:ml-10">Contact</a>
              </li>
            </ul>
             <div className='text-center lg:ml-auto'>
              <a href='#' class="btn border-2 border-blue-400 border-solid rounded-full text-blue-400 px-4 py-2 hover:bg-blue-400 hover:text-white" type="submit">Say Hello</a>
            </div> 
          </div>
        </div>
      </nav>
    )
}