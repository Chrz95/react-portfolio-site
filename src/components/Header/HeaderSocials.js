import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {SiFiverr} from "react-icons/si"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/christos-zacharioudakis-12173a123/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/chrz95" target="_blank"><FaGithub/></a>
        <a href="https://www.fiverr.com/chrz95?up_rollout=true" target="_blank"><SiFiverr/></a>
    </div>
  )
}

export default HeaderSocials

