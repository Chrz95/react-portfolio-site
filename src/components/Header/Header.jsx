import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Christos Zacharioudakis</h1>
        <h5 className='text-light'>Electrical and Computer Engineer</h5>
        <CTA />
        <HeaderSocials />

        {/* Old image */}
        {/* <div className='me'>
              <img src ={ME} alt =""/>
            </div> */}

        <div className="container about__container">
          <div className="about__me">
            <div className='about__me-image'>
              <img src={ME} alt="About Image" />
            </div>
          </div>
        </div>


      </div>

    </header>
  )
}

