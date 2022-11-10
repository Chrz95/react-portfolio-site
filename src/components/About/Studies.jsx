import React from "react"
import { GiBookmarklet } from "react-icons/gi"
import studies from "../../assets/data/studies"

export default function Studies() {

    const myStudies = studies.map((study =>

        <article className='about__card'>
            <a href={study.url} target="_blank" rel="noreferrer noopener"><img src={require(`../../assets/images/${study.image}`)} alt="School logo" className="studies_school_image"/> </a>                       
            <h4 className="studies_school_school">{study.school}</h4>
            <h5 className="studies_school_title">{study.type} {study.title}</h5>       
            {/* if the is no gpa, add empty line*/}     
            <p className="studies_school_gpa">{study.gpa ? study.gpa : <br></br>}</p>  
        </article>))

    return (<>
        <h2>Studies <GiBookmarklet className='about__icon' /></h2>

        <div className='container about__container'>
            <div className='about__content'>
                <div className='about__cards'>
                    {myStudies}
                </div>
            </div>

        </div>
    </>)
}