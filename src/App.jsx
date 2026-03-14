import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Work from './Components/Work'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import Footer from './Components/Footer'


function App() {

  return (
    <>
    <img
        className="card"
        src='./images/Banner Background.png'
        alt=''
        />
    <Navbar/>
    <Hero/>
    <About/>
    <Work/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
