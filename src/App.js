import React from 'react'
import About from './components/About/About'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Experience from './components/Experience/Experience'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


export default function App() {
  return (
    <div>        
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Services/>
        <Portfolio/>
        {/*<Testimonials/>*/}
        <Contact/>
        {/*<Footer/>*/}
        <Footer/>
    </div>
  )
}
