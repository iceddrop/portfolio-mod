import './App.css'
import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import {gsap,Power3} from 'gsap'
function App() {
  let tl = new gsap.timeline();
  let  ease = Power3.easeOut();
    return (
          <>
            <Navbar/>
            <Home timeline={tl} ease={ease}/>
            <About/>
          </>
  )
}

export default App
