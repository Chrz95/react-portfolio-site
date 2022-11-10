import React from 'react'
import './Experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import prog_languages from '../../assets/data/prog_languages'
import software from '../../assets/data/software'
import myOses from '../../assets/data/myOses'

export default function Experience() {
  const myLanguages = prog_languages.map((lang) =>
    <article className='experience__details'>
      <BsPatchCheckFill className=".experience__details-icon" />
      <h4>{lang.title}:</h4> 
      <p className='text-light'>{lang.experience}</p>
    </article>
  )

  const mySoftware = software.map((soft) =>
    <article className='experience__details'>
      <BsPatchCheckFill className=".experience__details-icon" />
      <div>
        <h4>{soft.title}</h4>
      </div>
    </article>
  )

  const oses = myOses.map((os) =>
    <article className='experience__details'>
      <BsPatchCheckFill className=".experience__details-icon" />
      <div>
        <h4>{os.title}</h4>
      </div>
    </article>
  )

  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>

        <div className='experience__os'>
          <h3>Operating Systems</h3>
          {oses}
        </div>

        <div className='experience__frontend'>
          <h3>Languages</h3>
          {myLanguages}
        </div>

        <div className='experience__backend'>
          <h3>Software & Libraries</h3>
          {mySoftware}
        </div>

      </div>
    </section>
  )
}

