import './App.css'
import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Projects from './components/projects'
import Footer from './components/footer'
import {gsap,Power3} from 'gsap'
function App() {
  let tl = new gsap.timeline();
  let  ease = Power3.easeOut();

  const id = {
    navbar: 'navbar',
    home : 'home',
    about : 'about',
    projects : 'projects',
    contact : 'contact'
  }
    return (
          <>
            <Navbar id={id}/>
            <Home timeline={tl} ease={ease} id={id}/>
            <About id={id}/>
            <Projects id={id}/>
            <Footer id={id}/>
          </>
  )
}

export default App
