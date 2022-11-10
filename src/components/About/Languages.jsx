import React from "react"
import { MdLanguage } from "react-icons/md"
import languages from "../../assets/data/languages"

export default function Languages() {

    const myLanguages = languages.map((language =>

        <article className='about__card'>
            <img src={require(`../../assets/images/${language.image}`)} alt="Language flag" className="languages_flag_image"/>            
            <h4 className="languages_language">{language.language}</h4>
            <h5 className="languages_level">{language.level}</h5>       
        </article>))

    return (<>
        <h2>Languages <MdLanguage className='about__icon' /></h2>

<div className='container about__container'>
    <div className='about__content'>
        <div className='about__cards languages_cards'>
            {myLanguages}
        </div>
    </div>

</div>
    </>)
}