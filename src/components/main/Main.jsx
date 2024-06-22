import React from 'react'
import Home from './Home/Home'
import About from './About/About'
import Service from './Service/Service'
import Projects from './projects/Projects'
import ContactUs from './ContactUs/ContactUs'
import Blogs from './Blogs/Blogs'
import './Main.css'
import ParticleHeaderBg from '../particlesBg/ParticlesHeader/ParticleHeaderBg'
const Main = () => {
  return (
    <div className='container'>
     <section id='home'>
      <Home />
     </section>
     <section id='about'>
      <About/>
     </section>
     <section id='services'>
      <Service />
     </section>
     <section id='projects'>
      <Projects />
     </section>
    <section id='ContactUs'>
      <ContactUs />
     </section>
     
    </div>
  )
}

export default Main