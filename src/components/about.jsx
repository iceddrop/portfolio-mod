import React from "react";
import image from "../assets/IMG_1994.jpeg";
import animated from "../assets/kindpng_3767359-removebg-preview.png";
import programmer from "../assets/programmer.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useRef, useEffect} from 'react';
export default function About(props) {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <>
      <section
        id={props.id.about}
        className="flex flex-col md:flex-row-reverse px-4 py-20  about-section text-white"
      >
        <div className="text-center md:px-4 about-div">
          <h3
            className="title-2 font-blinker text-2xl md:text-4xl font-bold"
           
          >
            Hi I'm Tomiwa, Nice to meet you.
          </h3>
          <p
            className="paragraph-2 font-poppins tracking-wide md:text-lg mt-4  md:text-start md:px-6 lg:px-10 xl:px-20"
            
          >
            As a self-taught front-end developer, I have worked on web
            applications using HTML, CSS, JavaScript, React,Tailwind,Bootstrap,
            developing user interfaces and optimizing them for a smooth user
            experience. I am highly motivated and eager to learn.
          </p>
        </div>
        <img src={image} className="image-2" alt="my-image" />
      </section>
      <img src={animated} className="image-3 lg:block" alt="animated-bot" />
      <div className="skillset-div font-poppins text-center ml-auto mr-auto rounded-md shadow flex flex-col items-center p-12 bg-white">
        <img  src={programmer} className="programmer w-20" />
        <h3
          
          className="skillheader p-3 font-blinker font-bold text-2xl"
        >
          Front-end Developer
        </h3>
        <p  className="skillparagraph tracking-wide pb-2">
          I love coding things from scratch, bringing ideas to life, into the
          virtual space.
        </p>
        <h5
          
          className="languages-head font-bold text-blue-500 p-2"
        >
          Languages I work with:
        </h5>
        <ul>
          <li  className="html">
            HTML
          </li>
          <li  className="css">
            CSS
          </li>
          <li  className="js">
            JAVASCRIPT
          </li>
        </ul>
        <h5  className="library font-bold text-blue-500 p-2">
          Libraries and tools I work with:
        </h5>
        <ul>
          <li className="react">
            React
          </li>
          <li  className="redux">
            Redux
          </li>
          <li  className="tailwind">
            Tailwind
          </li>
          <li  className="bootstrap">
            Bootstrap
          </li>
          <li className="git">
            Git and Github
          </li>
        </ul>
        {/* <a
          ref={resume}
          href="https://docs.google.com/document/d/1VbMiOwdFPDneCJ-ifykEBvzSfUK469kKcl4F0CxPsOU/edit"
          className="resume btn border-2 border-blue-400 border-solid rounded-full text-blue-400 px-4 py-2 hover:bg-blue-400 hover:text-white mt-3 pb-2"
        >
          Resume
        </a> */}
      
      </div>
    </>
  );
}
