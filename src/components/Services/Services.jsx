import React from 'react'
import './Services.css'
import { BiCheck } from 'react-icons/bi'

export default function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>


      <div className='container services__container'>

        <article className='service'>
          <div className='service__head'>
            <h3>Desktop Applications</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Can build desktop applications using any of the aforementioned languages/frameworks</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Mobile Applications</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Can build cross-platform applications using Flutter</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Can build dynamic websites using React</p>
            </li>
          </ul>
        </article>

      </div>




    </section>
  )
}

