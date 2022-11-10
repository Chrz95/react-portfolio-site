import React from 'react'
import './Testimonials.css'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function Testimonials() {

  /* container testimontials__container comps should be generated using map*/
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimontials__container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={""} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Client One</h5>
          <small className="client__review">Excellent</small>
        </SwiperSlide>

      </Swiper>



    </section>
  )
}

