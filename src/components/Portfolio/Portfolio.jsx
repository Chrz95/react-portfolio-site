import React from 'react'
import './Portfolio.css'
import portfolio from '../../assets/data/portfolio'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);

export default function Portfolio() {

  const myPortfolio = portfolio.map((port) =>

    <SwiperSlide className="about__card cert_card">
        <div className="portfolio__item-image">
          <img src={require(`../../assets/images/${port.image}`)} alt="" />
        </div>
        <h3>{port.title}</h3>
        <div className='portfolio__item-cta'>
          <a href={port.url} className='btn'>Github</a>
        </div>
    </SwiperSlide>

  )

  return (
    <section id="portfolio">

      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <Swiper pagination={true} modules={[Pagination]} className="mySwiper"
            spaceBetween={40}
            slidesPerView={2}
            navigation
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
             autoplay= {{
                delay: 2000
            }}>
            {myPortfolio}
        </Swiper>


    </section>
  )
}
