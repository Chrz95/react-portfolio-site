import React from 'react'

import './About.css'
import Studies from './Studies'
import Languages from './Languages'
import Certificates from './Certificates'

export default function About() {
  return (
    <section id="about">
      <h5>Get to know me</h5>
      <Studies />
      <br></br>
      <br></br>
      <Languages />
      <br></br>
      <br></br>
      <Certificates />
    </section>
  )
}

